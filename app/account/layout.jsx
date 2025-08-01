import SideNavigation from "../_components/SideNavigation";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <div>
        <SideNavigation />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
