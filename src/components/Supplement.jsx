"use client";
import React from "react";
import Image from "next/image";

export default function SupplementCard({ title, description, imageUrl, price, servings }) {
  return (
    <section className="min-h-[60vh] bg-black flex justify-center items-center p-6">
      <div className="bg-gray-900 rounded-3xl p-6 border border-teal-400/20 shadow-lg w-full max-w-3xl transition-all duration-500 ease-in-out">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                width={200}
                height={200}
                className="rounded-xl object-cover "
                priority
              />
            ) : (
              <span className="text-gray-500">[Image Placeholder]</span>
            )}
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 flex flex-col justify-between text-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-teal-400 mb-2">{title}</h2>
              <p className="text-sm">{description}</p>
            </div>

            <div className="mt-4 text-sm space-y-1">
              <p>
                💰 <span className="text-teal-400 font-semibold">Price:</span>{" "}
                {price || "[Add Price]"}
              </p>
              <p>
                🥄 <span className="text-teal-400 font-semibold">Servings:</span>{" "}
                {servings || "[Add Serving Info]"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


