import Logo from "./Logo";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav className="bg-gray-200 py-2 px-2 text-black">
      <div className="w-[70%] flex items-center justify-between ps-10">
        <Logo />
        <ul className="flex gap-4 font-[500]">
          <li>
            <NavLink
              href="/"
              exact
              className="hover:text-red-800"
              activeClassName="text-red-800"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/cabins"
              className="hover:text-red-800"
              activeClassName="text-red-800"
            >
              Cabins
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/account"
              className="hover:text-red-800"
              activeClassName="text-red-800"
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/about"
              className="hover:text-red-800"
              activeClassName="text-red-800"
            >
              About us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
