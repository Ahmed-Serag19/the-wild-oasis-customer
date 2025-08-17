import Navigation from "./Navigation";
import Logo from "./Logo";

function Header() {
  return (
    <header
      className={` text-primary-100  px-8 py-5 sticky z-20 top-0 left-0 right-0 transition-colors duration-300`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
