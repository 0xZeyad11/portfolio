import { useState, useEffect, useRef } from "react";
import type { SectionId } from "@/types/portfolio";

const SECTIONS: SectionId[] = ["overview", "experience", "projects"];

export function useNavigation(initialSection: SectionId = "overview") {
  const [activeSection, setActiveSection] = useState<SectionId>(() => {
    if (typeof window === "undefined") return initialSection;
    const hash = window.location.hash.replace("#", "") as SectionId;
    return SECTIONS.includes(hash) ? hash : initialSection;
  });
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const isManualScrollRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);

  const navigateToSection = (section: SectionId) => {
    if (activeSection === section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    setIsTransitioning(true);
    setActiveSection(section);
    isManualScrollRef.current = true;

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    window.history.replaceState(null, "", `#${section}`);

    setTimeout(() => {
      setIsTransitioning(false);
      isManualScrollRef.current = false;
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrollRef.current) return;

      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        // Ensure home sections exist in DOM
        const overviewEl = document.getElementById("overview");
        if (!overviewEl) return;

        // Check if user has scrolled to the bottom of the page
        const isAtBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

        if (isAtBottom) {
          setActiveSection((prev) => {
            if (prev !== "projects") {
              window.history.replaceState(null, "", "#projects");
              return "projects";
            }
            return prev;
          });
          return;
        }

        const headerOffset = 180;
        const scrollPosition = window.scrollY + headerOffset;

        let current: SectionId = "overview";

        for (const id of SECTIONS) {
          const el = document.getElementById(id);
          if (el && scrollPosition >= el.offsetTop) {
            current = id;
          }
        }

        setActiveSection((prev) => {
          if (prev !== current) {
            window.history.replaceState(null, "", `#${current}`);
            return current;
          }
          return prev;
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount in case already scrolled or hash present
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return {
    activeSection,
    isTransitioning,
    navigateToSection,
  };
}
