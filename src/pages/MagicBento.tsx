import React, { useEffect, useRef, useState } from "react";

const MagicBento = () => {
  return (
    <section className="w-full bg-black text-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-24">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em]">
            MY JOURNEY SO FAR
          </h2>
        </div>

        {/* Strict Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-40">

        <a
  href="https://drive.google.com/drive/folders/15rkBBOGkPS5zer6I2BiqPCtJnhK9Yh2C"
  target="_blank"
  rel="noopener noreferrer"
>
  <SwissItem
    value={5}
    suffix=""
    label="Projects Completed"
    description="Turning ideas into real projects through hands-on learning and experimentation."
  />
</a>

          <SwissItem
            value={1}
            suffix="+"
            label="Years of Experience"
            description="Building practical experience through continuous learning and real projects."
          />

          <SwissItem
            value={250}
            suffix="+"
            label="Engineering Hours"
            description="Hours spent designing, building, testing, and improving different projects."
          />

        <SwissItem
  value={4}
  suffix=""
  label="Certifications"
  description={
    <>
      <a
        href="https://coursera.org/share/2479265baa8b2af32831b0a5bda75825"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:underline"
      >
        Georgia Tech — Introduction to Electronics · Course
      </a>

      <a
        href="https://coursera.org/share/5a12d5192e60e93772df3eddaffb532b"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:underline"
      >
        Packt — Mastering Hardware Protocols with ESP32 and Arduinos · Course
      </a>

      <a
        href="https://coursera.org/share/59e4037d93dc333aedb937cc3c423eac"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:underline"
      >
        UIUC — Hands-on Internet of Things Specialization · Specialization
      </a>

      <a
        href="https://coursera.org/share/e244b0edf280a9174e9cfb4289a485c9"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:underline"
      >
        Meta — Front-End Developer Professional Certificate · Professional Certificate
      </a>
    </>
  }
/>

        </div>
      </div>
    </section>
  );
};

const SwissItem = ({ value, suffix, label, description }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.4 } // Swiss: intentional visibility
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const duration = 1200;
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div ref={ref} className="flex flex-col items-start">

      {/* Label */}
      <span className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-white">
        {label}
      </span>

      {/* Number */}
      <h3 className="mb-6 font-sans text-8xl md:text-9xl font-bold tracking-tight leading-none">
        {count.toLocaleString()}
        {suffix}
      </h3>

      {/* Description */}
      <p className="max-w-sm font-sans text-base leading-6 text-white/65">
        {description}
      </p>
    </div>
  );
};

export default MagicBento;
