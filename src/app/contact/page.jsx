"use client";
import Image from "next/image";
import React from "react";

export default function PersonalizedTraining() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mt-20 mb-15 px-6">
        {/* Image */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/bakery/main3.png"
            alt="Cake"
            layout="fill"
            objectFit="contain"
            className="bg-transparent"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
          <p className="text-white text-base">
            Feel free to chat with us! Customize your cake, ask questions, and
            place your order your way.
          </p>

          {/* Use <a> for external WhatsApp link */}
          <a
            href="https://wa.me/923202797500"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-700 px-6 py-2 rounded-md font-semibold hover:bg-pink-100 transition w-max"
          >
            Start a Chat
          </a>
        </div>
      </div>
    </section>
  );
}
