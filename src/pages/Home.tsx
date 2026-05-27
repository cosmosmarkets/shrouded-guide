import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".home-eyebrow", { opacity: 0, y: 16, duration: reduced ? 0 : 0.5 })
        .from(".home-title", { opacity: 0, y: 24, duration: reduced ? 0 : 0.65 }, "-=0.25")
        .from(".home-lead", { opacity: 0, y: 20, duration: reduced ? 0 : 0.55 }, "-=0.35")
        .from(".role-card", { opacity: 0, y: 28, stagger: 0.12, duration: reduced ? 0 : 0.6 }, "-=0.2");

      if (!reduced && pinRef.current) {
        gsap.to(".home-hero__orb--1", {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        gsap.to(".home-hero__orb--2", {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        ScrollTrigger.create({
          trigger: pinRef.current,
          start: "top top",
          end: "+=420",
          pin: true,
          pinSpacing: true,
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home" ref={rootRef}>
      <div className="home-pin-wrap" ref={pinRef}>
        <section className="home-hero">
          <div className="home-hero__bg" aria-hidden>
            <div className="home-hero__orb home-hero__orb--1" />
            <div className="home-hero__orb home-hero__orb--2" />
          </div>
          <div className="home-hero__content">
            <p className="home-eyebrow">Onboarding</p>
            <h1 className="home-title">Build with clarity at Shrouded.</h1>
            <p className="home-lead">
              Shrouded Development connects Roblox developers with paid client work and helps
              recruiters bring qualified commissions into the agency. Choose your path to read the
              official guide before you start.
            </p>
          </div>
        </section>
      </div>

      <div className="home-cards">
        <Link className="role-card" to="/developer">
          <span className="role-card__tag">Developers</span>
          <h2 className="role-card__title">Developer guide</h2>
          <p className="role-card__desc">
            Commission tiers, ticket rules, matching, payments, and professionalism expectations.
          </p>
          <span className="role-card__cta">Read the guide →</span>
        </Link>
        <Link className="role-card" to="/recruiter">
          <span className="role-card__tag">Recruiters</span>
          <h2 className="role-card__title">Recruiter guide</h2>
          <p className="role-card__desc">
            Outreach standards, pricing minimums, ticket behavior, quotas, and payment tables.
          </p>
          <span className="role-card__cta">Read the guide →</span>
        </Link>
      </div>
    </div>
  );
}
