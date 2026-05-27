import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChapterNav } from "../components/ChapterNav";
import { GuideBlocks } from "../components/GuideBlocks";
import { useChapterSpy } from "../hooks/useChapterSpy";
import type { GuideMeta } from "../types/guide";

gsap.registerPlugin(ScrollTrigger);

type Props = { guide: GuideMeta };

export function GuidePage({ guide }: Props) {
  const sectionIds = guide.chapters.map((c) => c.id);
  const activeId = useChapterSpy(sectionIds);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".guide-section").forEach((section) => {
        gsap.from(section.querySelectorAll("h2, p, ul, ol, .callout, .guide-table-wrap, .tier-list, .preformat"), {
          opacity: 0,
          y: 18,
          duration: 0.55,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        });
      });
    }, sectionsRef);

    return () => ctx.revert();
  }, [guide.path]);

  return (
    <article className="guide-page">
      <header className="guide-hero">
        <h1>{guide.title}</h1>
        <p>{guide.subtitle}</p>
      </header>

      <ChapterNav
        chapters={guide.chapters.map((c) => ({ id: c.id, shortTitle: c.shortTitle }))}
        activeId={activeId}
        onSelect={scrollToChapter}
      />

      <div className="guide-sections" ref={sectionsRef}>
        {guide.chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="guide-section">
            <h2>{chapter.title}</h2>
            <GuideBlocks blocks={chapter.blocks} />
          </section>
        ))}
      </div>
    </article>
  );
}
