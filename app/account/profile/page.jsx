import SelectCountry from "../../_components/SelectCountry";
import UpdateProfileForm from "../../_components/UpdateProfileForm";
import { auth } from "../../_lib/auth";
import { getGuest } from "../../_lib/data-service";

export const metadata = {
  title: "Update profile",
};
const Page = async () => {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);
  return (
    <UpdateProfileForm guest={guest}>
      <SelectCountry
        name="nationality"
        id="nationality"
        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        defaultCountry={guest.nationality}
      />
    </UpdateProfileForm>
  );
};

export default Page;
