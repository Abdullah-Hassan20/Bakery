"use client";
import React from "react";
import Image from "next/image";

export default function CakeCategories({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  // Detect key like 'cakes', 'cupcakes', etc.
  const itemKey = Object.keys(data[0]).find((key) => key !== "category");

  return (
    <section className="w-full py-12 px-4 text-white ">
      <h2 className="text-3xl font-bold text-center mb-10">Our {itemKey} Categories</h2>

      <div className="flex flex-col gap-12">
        {data.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-6 border-b border-white inline-block">
              {category.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 ">
              {category[itemKey].map((item, index) => (
                <div
                  key={index}
                  className="bg-pink-800 rounded-xl overflow-hidden shadow-lg p-4 backdrop:blur-sm"
                >
                  <div className="relative w-full h-[350px] mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-1">{item.name}</h4>

                  {/* Show the correct price */}
                  {item.pricePerPound && (
                    <p className="text-sm mb-1">Price: Rs. {item.pricePerPound}/pound</p>
                  )}
                  {item.pricePerPiece && (
                    <p className="text-sm mb-1">Price: Rs. {item.pricePerPiece}/piece</p>
                  )}

                  {/* Optional pounds */}
                  {item.pounds && (
                    <p className="text-sm mb-1">
                      Available in: {item.pounds.join(", ")} lbs
                    </p>
                  )}

                  {/* Flavors */}
                  <p className="text-sm">Flavors: {item.flavors.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
