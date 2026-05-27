type Chapter = { id: string; shortTitle: string };

type Props = {
  chapters: Chapter[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function ChapterNav({ chapters, activeId, onSelect }: Props) {
  return (
    <nav className="chapter-nav" aria-label="Guide chapters">
      <div className="chapter-nav__scroll">
        {chapters.map((ch) => (
          <button
            key={ch.id}
            type="button"
            className={`chapter-tab${activeId === ch.id ? " is-active" : ""}`}
            onClick={() => onSelect(ch.id)}
          >
            {ch.shortTitle}
          </button>
        ))}
      </div>
    </nav>
  );
}
