"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Run asynchronously after hydration is complete
    let observer: IntersectionObserver | null = null;
    
    const timer = setTimeout(() => {
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

      elements.forEach((el) => {
        if (!el.getAttribute("data-reveal")) {
          el.setAttribute("data-reveal", "init");
        }
      });

      // Stagger grid cards
      document.querySelectorAll(".services-cards-grid, .reviews-cards-grid, .blog-grid").forEach((grid) => {
        const children = Array.from(grid.children);
        children.forEach((child, idx) => {
          (child as HTMLElement).style.transitionDelay = `${(idx % 4) * 0.12}s`;
        });
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-reveal-visible", "true");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      elements.forEach((el) => {
        observer?.observe(el);
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
