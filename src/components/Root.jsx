import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
