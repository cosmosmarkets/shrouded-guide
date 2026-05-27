import { Link, useLocation } from "react-router-dom";
import { DISCORD_INVITE, SITE_NAME } from "../constants";
import { ThemeToggle } from "./ThemeToggle";

type Props = { theme: "light" | "dark"; onToggleTheme: () => void };

export function SiteHeader({ theme, onToggleTheme }: Props) {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <Link className="site-header__brand" to="/">
        <img src="/logo.png" alt="" width={32} height={32} />
        <span className="site-header__name">{SITE_NAME}</span>
      </Link>
      <div className="site-header__actions">
        {pathname !== "/developer" && (
          <Link className="header-link header-link--muted" to="/developer">
            Developer
          </Link>
        )}
        {pathname !== "/recruiter" && (
          <Link className="header-link header-link--muted" to="/recruiter">
            Recruiter
          </Link>
        )}
        <a className="btn-discord" href={DISCORD_INVITE} target="_blank" rel="noreferrer">
          Discord
        </a>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
