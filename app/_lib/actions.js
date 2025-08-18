"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { deleteBooking, updateGuest } from "./data-service";

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

export const deleteBookingAction = async (bookingId) => {
  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
};
