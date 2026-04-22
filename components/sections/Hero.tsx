"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#080808] overflow-hidden font-sans flex flex-col selection:bg-[#01DA5E] selection:text-black">

      {/* ── TOP-LEFT GREEN ACCENT (blurred glow) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute z-0 pointer-events-none rounded-full bg-[#01DA5E]"
        style={{
          width: "clamp(150px, 30vw, 400px)",
          height: "clamp(150px, 30vw, 400px)",
          top: "-8%",
          left: "-8%",
          filter: "blur(60px)",
          opacity: 0.55,
        }}
      />

      {/* ── CENTER LARGE GREEN CIRCLE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none rounded-full bg-[#01DA5E]"
        style={{
          width: "clamp(220px, 40vw, 600px)",
          height: "clamp(220px, 40vw, 600px)",
          filter: "blur(3px)",
          opacity: 0.92,
        }}
      />

      {/* ── WIREFRAME CONCENTRIC CIRCLE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none rounded-full border border-white/10"
        style={{
          width: "clamp(380px, 75vw, 1100px)",
          height: "clamp(380px, 75vw, 1100px)",
        }}
      />

      {/* ── HELLO GREETING (LEFT SIDE) — hidden below 480px, shown above ── */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        className="absolute z-40 hidden xs:block"
        style={{
          top: "clamp(15%, 22%, 30%)",
          left: "clamp(1rem, 6vw, 4rem)",
        }}
      >
        {/* Dot + HELLO */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="rounded-full bg-white flex-shrink-0"
            style={{
              width: "clamp(14px, 2vw, 28px)",
              height: "clamp(14px, 2vw, 28px)",
              boxShadow: "0 0 14px rgba(255,255,255,0.5)",
            }}
          />
          <h2
            className="font-black text-white uppercase tracking-widest leading-none"
            style={{ fontSize: "clamp(22px, 4vw, 52px)" }}
          >
            Hello
          </h2>
        </div>

        {/* I am — Waliha Idrees */}
        <div
          className="flex items-center gap-2 mt-1.5 sm:mt-2 text-white/80 tracking-wide font-medium"
          style={{
            fontSize: "clamp(9px, 1.1vw, 13px)",
            marginLeft: "clamp(18px, 3.5vw, 40px)",
          }}
        >
          <span>I am</span>
          <div className="bg-white/50" style={{ width: "clamp(16px, 2.5vw, 36px)", height: "1px" }} />
          <span>Waliha Idrees</span>
        </div>
      </motion.div>

      {/* ── MAIN TYPOGRAPHY (GRAPHIC + DESIGNER) ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none overflow-hidden px-2">

        {/* GRAPHIC */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <h1
            className="font-black text-white uppercase leading-none tracking-tight m-0 text-center"
            style={{
              fontSize: "clamp(48px, 14vw, 200px)",
              letterSpacing: "0.02em",
              lineHeight: 0.85,
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Graphic
          </h1>
        </motion.div>

        {/* DESIGNER (DES outlined + IGNER solid) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.9, ease: "easeOut" }}
          className="w-full flex justify-end mt-[-3%] sm:mt-[-2%]"
          style={{ paddingRight: "clamp(0px, 2vw, 40px)" }}
        >
          <h1
            className="font-black uppercase leading-none tracking-tight m-0 flex"
            style={{
              fontSize: "clamp(44px, 13.5vw, 190px)",
              letterSpacing: "-0.02em",
              lineHeight: 0.85,
            }}
          >
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) rgba(255,255,255,0.88)" }}
            >
              Des
            </span>
            <span className="text-white" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
              igner
            </span>
          </h1>
        </motion.div>
      </div>

      {/* ── PORTRAIT IMAGE (CENTER BOTTOM) ── */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{
          width: "clamp(180px, 52vw, 650px)",
          height: "clamp(45vh, 65vh, 72vh)",
          position: "absolute",
        }}
      >
        <Image
          src="/assests/pic.png"
          alt="Waliha Idrees Portrait"
          fill
          priority
          className="object-contain object-bottom"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.65)) brightness(0.98)" }}
        />
      </motion.div>

    </section>
  );
}