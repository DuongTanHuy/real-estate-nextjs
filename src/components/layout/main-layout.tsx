import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface ILayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <TopBar />
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-[calc(100vh-70px)]">
        <SideBar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
