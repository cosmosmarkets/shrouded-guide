import { DISCORD_INVITE, SITE_NAME } from "../constants";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {SITE_NAME}</span>
      <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">
        Join Discord
      </a>
    </footer>
  );
}
