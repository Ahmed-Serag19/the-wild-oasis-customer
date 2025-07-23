import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav>
      <div className="w-full pe-20 lg:pe-32 flex items-center justify-between ps-10">
        <ul className="flex gap-8 font-[500]">
          <li>
            <NavLink
              href="/cabins"
              className="hover:text-accent-400"
              activeClassName="text-accent-400"
            >
              Cabins
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/account"
              className="hover:text-accent-400"
              activeClassName="text-accent-400"
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/about"
              className="hover:text-accent-400"
              activeClassName="text-accent-400"
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
