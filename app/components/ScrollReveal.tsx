"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Select all interactive sections and cards across the website
    const targetSelectors = [
      ".reveal-on-scroll",
      ".row",
      ".products-overview-section",
      ".custom-service-card",
      ".swl-stat-section",
      ".reputed-clients-section",
      ".customer-reviews-section",
      ".sticky-review-card",
      ".mission-usage-section",
      ".cta-strip",
      ".blog-card",
      ".product-card-hover",
      ".two-col",
      ".page-content > section"
    ];

    const elements = document.querySelectorAll(targetSelectors.join(", "));

    // Automatically add reveal-base class and stagger delays for sibling cards
    elements.forEach((el) => {
      if (!el.classList.contains("reveal-init")) {
        el.classList.add("reveal-init");
      }
    });

    // Stagger grid cards
    document.querySelectorAll(".services-cards-grid, .reviews-cards-grid, .blog-grid").forEach((grid) => {
      const children = Array.from(grid.children);
      children.forEach((child, idx) => {
        (child as HTMLElement).style.transitionDelay = `${(idx % 4) * 0.12}s`;
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Unobserve after revealing once for performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
