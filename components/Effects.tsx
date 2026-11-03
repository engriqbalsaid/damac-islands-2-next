"use client";

import { useEffect } from "react";

/** Scroll reveal, count-up numbers, hero parallax, progress bar and gold particles. Disabled for reduced-motion users. */
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prog = document.getElementById("prog");
    if (reduce) {
      if (prog) prog.style.display = "none";
      return;
    }
    const root = document.documentElement;
    root.classList.add("rc-anim");
    const cleanups: Array<() => void> = [];

    // scroll reveal
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      "section h2, h2 + p, .rc-r, dl > div, #grid > button, ol > li, #amenities li, #faq details, #homes .grid > div, #location li, #overview .space-y-4 > p, #eco-living img",
    ));
    targets.forEach((el) => {
      el.classList.add("rc-r");
      const sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = (sib % 6) * 90 + "ms";
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        el.classList.add("in");
        io.unobserve(el);
        window.setTimeout(() => { el.style.transitionDelay = "0ms"; }, 1400);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // count-up
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    counters.forEach((el) => { el.textContent = "0"; });
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        co.unobserve(en.target);
        const el = en.target as HTMLElement;
        const n = Number(el.dataset.count);
        const t0 = performance.now();
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / 1800);
          el.textContent = String(Math.round(n * (1 - Math.pow(1 - k, 4))));
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => co.observe(el));
    cleanups.push(() => co.disconnect());

    // parallax + progress
    const par = document.getElementById("par");
    const onScroll = () => {
      const y = window.scrollY;
      const h = root.scrollHeight - window.innerHeight;
      if (par && y < window.innerHeight * 1.5) par.style.transform = `translate3d(0,${y * 0.28}px,0)`;
      if (prog) prog.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // gold dust particles
    const cv = document.getElementById("particles") as HTMLCanvasElement | null;
    if (cv) {
      const cx = cv.getContext("2d")!;
      let W = 0, H = 0, raf = 0;
      const size = () => { W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight; };
      size();
      window.addEventListener("resize", size);
      const P = Array.from({ length: 46 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 2.2 + 0.6, v: Math.random() * 0.0006 + 0.0002, a: Math.random() * 0.6 + 0.25, ph: Math.random() * 6.28 }));
      const draw = (t: number) => {
        cx.clearRect(0, 0, W, H);
        P.forEach((p) => {
          p.y -= p.v * 16;
          if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
          const x = (p.x + Math.sin(t / 1800 + p.ph) * 0.012) * W, y = p.y * H, tw = 0.5 + 0.5 * Math.sin(t / 500 + p.ph);
          const g = cx.createRadialGradient(x, y, 0, x, y, p.r * 5);
          g.addColorStop(0, `rgba(241,223,174,${p.a * tw})`);
          g.addColorStop(1, "rgba(201,162,95,0)");
          cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, p.r * 5, 0, 6.283); cx.fill();
        });
        raf = requestAnimationFrame(draw);
      };
      raf = requestAnimationFrame(draw);
      cleanups.push(() => { cancelAnimationFrame(raf); window.removeEventListener("resize", size); });
    }

    return () => { cleanups.forEach((fn) => fn()); root.classList.remove("rc-anim"); };
  }, []);

  return null;
}
