
import { Outlet, useLocation } from "react-router-dom";
import { BottomNavigation } from "./BottomNavigation";

const hiddenNavRoutes = ["/bitcoin"]; // Routes where nav should be hidden

export function Layout() {
  const location = useLocation();
  const shouldHideNav = hiddenNavRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
      {!shouldHideNav && <BottomNavigation />}
    </div>
  );
}
