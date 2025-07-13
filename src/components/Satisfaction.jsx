"use client";
import React, { useState } from "react";
import Image from "next/image";
import data from "@/data/data";

export default function CustomerSatisfaction() {
  const testimonials=data.testimonials
  return (
    <section className="w-full py-16 flex flex-col items-center text-white">
      <h2 className="text-3xl font-extrabold mb-4">Happy Customers</h2>
      <p className="text-center max-w-2xl mb-10 text-white">
        Your satisfaction is our recipe for success. Here are real chats and orders we proudly delivered!
      </p>

      <div className="w-full overflow-x-auto scrollbar-custom p-5 bg-pink-300 md:bg-pink-400 rounded-2xl">
        <div className="flex gap-6 w-max px-2 pb-2">
          {testimonials.map((item, index) => (
            <FlipCard
              key={index}
              front={item.chatImage}
              back={item.deliveryImage}
              alt={`Card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ front, back, alt }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="min-w-[260px] h-[320px] [perspective:1000px] cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden border border-pink-400 shadow-lg bg-pink-700 z-20">
            <Image
              src={front}
              alt={`${alt} - Chat`}
              fill
              className="object-cover"
            />
          </div>

          {/* Back */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden border border-pink-400 shadow-lg bg-pink-700 z-10">
            <Image
              src={back}
              alt={`${alt} - Delivered`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <span className="text-sm text-pink-900 font-bold">
        {flipped ? "Delivered Cake" : "Chat Screenshot"}
      </span>
    </div>
  );
}


