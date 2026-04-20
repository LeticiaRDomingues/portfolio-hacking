"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function AnimationCube() {
    const ref = useRef<HTMLDivElement>(null);

    useAnimationFrame((time) => {
        if (!ref.current) return;

        const rotateX = Math.sin(time / 1000) * 12 - 20;
        const rotateY = time / 45;

        ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    const face1 = "absolute inset-0 border-2 border-cyan-300 bg-cyan-400/10";
    const face2 = "absolute inset-0 border-1 border-cyan-800 bg-cyan-400/15";

    return (
        <div
            className=" pl-20 pb-20"
            style={{ perspective: "1000px" }}
        >
            <div
                ref={ref}
                className="relative h-100 w-100"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className={face1} style={{ transform: "translateZ(90px)" }} />
                <div className={face2} style={{ transform: "translateZ(50px)" }} />
                <div className={face1} style={{ transform: "rotateY(180deg) translateZ(90px)" }} />
                <div className={face2} style={{ transform: "rotateY(180deg) translateZ(50px)" }} />
                <div className={face1} style={{ transform: "rotateY(90deg) translateZ(90px)" }} />
                <div className={face2} style={{ transform: "rotateY(90deg) translateZ(50px)" }} />
                <div className={face1} style={{ transform: "rotateY(-90deg) translateZ(90px)" }} />
                <div className={face2} style={{ transform: "rotateY(-90deg) translateZ(50px)" }} />
                <div className={face1} style={{ transform: "rotateX(90deg) translateZ(90px)" }} />
                <div className={face2} style={{ transform: "rotateX(90deg) translateZ(50px)" }} />
                <div className={face1} style={{ transform: "rotateX(-90deg) translateZ(90px)" }} />
                <div className={face2} style={{ transform: "rotateX(-90deg) translateZ(50px)" }} />
            </div>
        </div>
    );
}