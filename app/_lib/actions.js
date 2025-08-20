"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  createBooking,
  deleteBooking,
  getBooking,
  updateGuest,
} from "./data-service";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export const signInAction = async () => {
  await signIn("google", { redirectTo: "/account" });
};
export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};

export const updateGuestAction = async (formData) => {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in");
  }

  const guestId = formData.get("guestId");
  const nationalID = formData.get("nationalID")?.trim();
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  // ✅ National ID validation
  const nationalIdPattern = /^[A-Za-z0-9]{6,15}$/;
  if (!nationalIdPattern.test(nationalID)) {
    throw new Error("National ID must be max 15 letters/numbers only");
  }

  const updatedFields = {
    nationalID,
    nationality,
    countryFlag,
  };
  await updateGuest(guestId, updatedFields);
  revalidatePath("/account/profile");
};

export const createReservationAction = async (bookingData, formData) => {
  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations").slice(0, 500);
  const newBooking = {
    ...bookingData,
    numGuests,
    observations,
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
  };
  await createBooking(newBooking);
  revalidatePath(`/account/reservation/edit/${bookingData.cabinId}`);
  revalidatePath("/account/reservations");
  redirect("/cabins/thank-you");
};

export const deleteReservationAction = async (bookingId) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in");
  }
  const booking = await getBooking(bookingId);
  if (booking.guestId !== session.user.guestId) {
    throw new Error("You are not authorized to delete this reservation");
  }
  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
};

export const updateReservationAction = async (formData) => {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in");
  }
  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");
  const reservationId = Number(formData.get("reservationId"));
  const booking = await getBooking(reservationId);

  if (booking.guestId !== session.user.guestId) {
    throw new Error("You are not Authorized to update this reservation");
  }
  const updateData = {
    numGuests: Number(numGuests),
    observations: observations.slice(0, 500),
  };
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", reservationId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath("/account/reservation");
  revalidatePath(`/account/reservation/edit/${reservationId}`);
  redirect("/account/reservations");
};
