import Image from "next/image";
import { auth } from "../_lib/auth";
import NavLink from "./NavLink";

const Navigation = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <nav>
      <div className="w-full flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-6 lg:gap-8 font-[500] text-sm sm:text-base">
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
              className="hover:text-accent-400 flex items-center gap-1 sm:gap-2 justify-center"
              activeClassName="text-accent-400"
            >
              {user ? (
                <Image
                  src={user?.image}
                  alt="User profile picture"
                  width={28}
                  height={28}
                  className="rounded-full sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                  referrerPolicy="no-referrer"
                />
              ) : (
                ""
              )}
              <span className="hidden sm:inline">
                {user?.name || "Account"}
              </span>
              <span className="sm:hidden">Account</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
