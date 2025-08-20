import Image from "next/image";
import { auth } from "../_lib/auth";
import NavLink from "./NavLink";

const Navigation = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <nav>
      <div className="w-full pe-20 lg:pe-32 flex items-center justify-between ps-10">
        <ul className="flex gap-8 font-[500]">
          <li className="items-center justify-center flex">
            <NavLink
              href="/cabins"
              className="hover:text-accent-400 "
              activeClassName="text-accent-400"
            >
              Cabins
            </NavLink>
          </li>
          <li className="items-center justify-center flex">
            <NavLink
              href="/about"
              className="hover:text-accent-400"
              activeClassName="text-accent-400"
            >
              About us
            </NavLink>
          </li>
          <li className="items-center justify-center flex">
            <NavLink
              href="/account"
              className="hover:text-accent-400 flex items-center gap-2  justify-center"
              activeClassName="text-accent-400"
            >
              {user ? (
                <Image
                  src={user?.image}
                  alt="User profile picture"
                  width={34}
                  height={34}
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                />
              ) : (
                ""
              )}
              {user?.name || "Account"}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
