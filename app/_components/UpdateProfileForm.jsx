"use client";

import { updateGuestAction } from "../_lib/actions";
import Image from "next/image";
import FormButton from "./FormButton";
const UpdateProfileForm = ({ children, guest }) => {
  const { fullName, email, countryFlag, id, nationalID } = guest;

  return (
    <div>
      <h2 className="font-semibold text-xl sm:text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form
        className="bg-primary-900 py-6 sm:py-8 px-4 sm:px-8 lg:px-12 text-base sm:text-lg flex gap-4 sm:gap-6 flex-col"
        action={updateGuestAction}
      >
        <input type="hidden" name="guestId" defaultValue={id} />
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            name="fullName"
            defaultValue={fullName}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            name="email"
            defaultValue={email}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <label htmlFor="nationality">Where are you from?</label>
            <Image
              src={countryFlag || ""}
              alt="Country flag"
              width={20}
              height={20}
              className="h-5 rounded-sm self-start sm:self-auto"
            />
          </div>
          {children}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultValue={nationalID}
          />
        </div>

        <div className="flex justify-end items-center gap-4 sm:gap-6">
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
