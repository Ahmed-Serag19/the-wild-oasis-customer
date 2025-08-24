"use client";

import Image from "next/image";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";
import { createReservationAction } from "../_lib/actions";

const ReservationForm = ({ cabin, user }) => {
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const { range, resetRange } = useReservation();
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);
  const { guestId } = user;
  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
    guestId,
    status: "unconfirmed",
  };
  const createBookingWithData = createReservationAction.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-4 sm:px-8 lg:px-16 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <p className="text-sm sm:text-base">Logged in as</p>

        <div className="flex gap-2 sm:gap-4 items-center">
          <Image
            referrerPolicy="no-referrer"
            className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
            src={user?.image}
            alt={user?.name}
            width={32}
            height={32}
          />
          <p className="text-sm sm:text-base">{user.name}</p>
        </div>
      </div>

      <form
        action={(formData) => {
          createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-16 text-base sm:text-lg flex gap-4 sm:gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6">
          <p className="text-primary-300 text-sm sm:text-base">
            Start by selecting dates
          </p>

          <button className="bg-accent-500 px-6 sm:px-8 py-3 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 text-sm sm:text-base w-full sm:w-auto">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
