"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface BeanConfig {
  startX: string;
  endX: string;
  startY: string;
  endY: string;
  startRotate: number;
  endRotate: number;
  size: number;
  scrollStart: number;
  scrollEnd: number;
}

const DESKTOP_BEANS: BeanConfig[] = [
  { startX: "82vw", endX: "72vw", startY: "-2vh",  endY: "132vh", startRotate: -20,  endRotate: 120,  size: 42, scrollStart: 0.05, scrollEnd: 0.82 },
  { startX: "72vw", endX: "70vw", startY: "5vh",   endY: "134vh", startRotate: 45,   endRotate: -20,  size: 36, scrollStart: 0.10, scrollEnd: 0.88 },
  { startX: "88vw", endX: "73vw", startY: "-6vh",  endY: "130vh", startRotate: 100,  endRotate: 210,  size: 48, scrollStart: 0.08, scrollEnd: 0.78 },
  { startX: "76vw", endX: "74vw", startY: "2vh",   endY: "133vh", startRotate: -50,  endRotate: 80,   size: 32, scrollStart: 0.15, scrollEnd: 0.90 },
  { startX: "65vw", endX: "71vw", startY: "8vh",   endY: "135vh", startRotate: 130,  endRotate: 10,   size: 44, scrollStart: 0.12, scrollEnd: 0.85 },
];

const MOBILE_BEANS: BeanConfig[] = [
  { startX: "42vw", endX: "48vw", startY: "-3vh",  endY: "154vh", startRotate: 30,   endRotate: 150,  size: 30, scrollStart: 0.08, scrollEnd: 0.85 },
  { startX: "55vw", endX: "50vw", startY: "5vh",   endY: "157vh", startRotate: -40,  endRotate: 80,   size: 26, scrollStart: 0.12, scrollEnd: 0.90 },
  { startX: "35vw", endX: "49vw", startY: "-8vh",  endY: "155vh", startRotate: 120,  endRotate: -20,  size: 28, scrollStart: 0.06, scrollEnd: 0.80 },
];

interface BeanProps {
  config: BeanConfig;
  heroProgress: MotionValue<number>;
}

function Bean({ config, heroProgress }: BeanProps) {
  const { startX, endX, startY, endY, startRotate, endRotate, size, scrollStart, scrollEnd } = config;

  const x = useTransform(
    heroProgress,
    [0, scrollStart, scrollEnd],
    [startX, startX, endX]
  );
  const y = useTransform(
    heroProgress,
    [0, scrollStart, scrollEnd],
    [startY, startY, endY]
  );
  const rotate = useTransform(
    heroProgress,
    [scrollStart, scrollEnd],
    [startRotate, endRotate]
  );
  const opacity = useTransform(
    heroProgress,
    [0, scrollStart, scrollStart + 0.05, scrollEnd - 0.03, scrollEnd],
    [0, 0, 1, 1, 0]
  );
  const scale = useTransform(
    heroProgress,
    [0, scrollStart, scrollEnd - 0.03, scrollEnd],
    [0.8, 1, 1, 0]
  );

  const beanHeight = Math.round(size * (205 / 150));

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        opacity,
        scale,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Image
        src="/bean.svg"
        width={size}
        height={beanHeight}
        alt=""
        aria-hidden="true"
        priority={false}
      />
    </motion.div>
  );
}

export default function BeanAnimation() {
  const [mounted, setMounted] = useState(false);
  const [vh, setVh] = useState(800);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setVh(window.innerHeight);
    setIsMobile(window.innerWidth < 768);
    setMounted(true);
    const handleResize = () => {
      setVh(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroProgress = useTransform(scrollY, [0, vh], [0, 1]);

  if (!mounted) return null;

  const beans = isMobile ? MOBILE_BEANS : DESKTOP_BEANS;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-20"
    >
      {beans.map((bean, i) => (
        <Bean key={i} config={bean} heroProgress={heroProgress} />
      ))}
    </div>
  );
}
