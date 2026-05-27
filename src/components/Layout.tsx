import { Outlet } from "react-router-dom";
import { useLenis } from "../hooks/useLenis";
import { useTheme } from "../hooks/useTheme";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function Layout() {
  const { theme, toggle } = useTheme();
  useLenis(true);

  return (
    <>
      <div className="grain" aria-hidden />
      <SiteHeader theme={theme} onToggleTheme={toggle} />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
