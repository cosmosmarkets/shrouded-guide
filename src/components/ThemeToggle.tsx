type Props = { theme: "light" | "dark"; onToggle: () => void };

export function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button type="button" className="theme-btn" onClick={onToggle} aria-label="Toggle color theme">
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
