"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#080808] overflow-hidden font-sans flex flex-col selection:bg-[#01DA5E] selection:text-black">

      {/* ── TOP-LEFT GREEN ACCENT ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute z-0 pointer-events-none rounded-full bg-[#01DA5E]"
        style={{
          width: "clamp(200px, 25vw, 400px)",
          height: "clamp(200px, 25vw, 400px)",
          top: "-5%",
          left: "-5%",
          filter: "blur(60px)",
          opacity: 0.6
        }}
      />

      {/* ── CENTER LARGE GREEN CIRCLE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none rounded-full bg-[#01DA5E]"
        style={{
          width: "clamp(250px, 35vw, 600px)",
          height: "clamp(250px, 35vw, 600px)",
          filter: "blur(4px)",
          opacity: 0.95
        }}
      />

      {/* ── WIREFRAME CONCENTRIC CIRCLE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none rounded-full border border-white/10"
        style={{
          width: "clamp(450px, 70vw, 1100px)",
          height: "clamp(450px, 70vw, 1100px)",
        }}
      />

      {/* ── HELLO GREETING (LEFT SIDE) ── */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        className="absolute z-40"
        style={{
          top: "clamp(18%, 22%, 28%)",
          left: "clamp(1.5rem, 8vw, 4rem)",
        }}
      >
        {/* Dot + HELLO */}
        <div className="flex items-center gap-3 md:gap-4">
          <div
            className="rounded-full bg-white flex-shrink-0"
            style={{
              width: "clamp(18px, 2.5vw, 32px)",
              height: "clamp(18px, 2.5vw, 32px)",
              boxShadow: "0 0 16px rgba(255,255,255,0.5)",
            }}
          />
          <h2
            className="font-black text-white uppercase tracking-widest leading-none"
            style={{
              fontSize: "clamp(28px, 5vw, 56px)",
            }}
          >
            Hello
          </h2>
        </div>

        {/* I am — Waliha Idrees */}
        <div
          className="flex items-center gap-2 md:gap-3 mt-2 md:mt-3 text-white/85 tracking-wide font-medium"
          style={{
            fontSize: "clamp(10px, 1.2vw, 14px)",
            marginLeft: "clamp(24px, 4vw, 44px)",
          }}
        >
          <span>I am</span>
          <div
            className="bg-white/60"
            style={{
              width: "clamp(20px, 3vw, 40px)",
              height: "1px"
            }}
          />
          <span>Waliha Idrees</span>
        </div>
      </motion.div>

      {/* ── MAIN TYPOGRAPHY (GRAPHIC + DESIGNER) ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none overflow-hidden">

        {/* GRAPHIC */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center px-4"
        >
          <h1
            className="font-black text-white uppercase leading-none tracking-tight m-0"
            style={{
              fontSize: "clamp(55px, 11vw, 200px)",
              letterSpacing: "0.025em",
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
          className="w-full flex justify-end mt-[-1.5%] md:mt-[-2%] px-4"
        >
          <h1
            className="font-black uppercase leading-none tracking-tight m-0 flex"
            style={{
              fontSize: "clamp(50px, 14vw, 190px)",
              letterSpacing: "-0.025em",
              lineHeight: 0.85,
            }}
          >
            {/* DES - Outlined with green stroke */}
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "clamp(1.8px, 0.25vw, 3.5px) rgba(255,255,255,0.9)",
              }}
            >
              Des
            </span>
            {/* IGNER - Solid white */}
            <span
              className="text-white"
              style={{
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex justify-center items-end"
        style={{
          width: "clamp(200px, 55vw, 650px)",
          height: "clamp(50vh, 65vh, 70vh)",
        }}
      >
        <Image
          src="/assests/pic.png"
          alt="Waliha Idrees Portrait"
          fill
          priority
          className="object-contain object-bottom"
          style={{
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.7)) brightness(0.98)",
          }}
        />
      </motion.div>

    </section>
  );
}