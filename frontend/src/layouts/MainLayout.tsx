import { Outlet } from "react-router-dom";
import { AppNavbar } from "../components/AppNavbar";

export function MainLayout() {
  return (
    <>
      <AppNavbar />
      <div style={{ paddingTop: "60px" }}>
        <Outlet />
      </div>
    </>
  );
}
