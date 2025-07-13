"use client";
import React from "react";
import Image from "next/image";

export default function CakeCategories({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  // Detect key like 'cakes', 'cupcakes', etc.
  const itemKey = Object.keys(data[0]).find((key) => key !== "category");

  return (
    <section className="w-full py-12 p-4 text-white ">
      <h2 className="text-3xl font-bold text-center mb-10">Categories</h2>

      <div className="flex flex-col gap-12">
        {data.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-4 inline-block">
              {category.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
              {category[itemKey].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-pink-400 to-pink-200 md:bg-gradient-to-t from-pink-500 to-pink-400 rounded-xl flex flex-col w-fit overflow-hidden shadow-lg p-4 backdrop:blur-sm mx-auto"
                >
                  <div className="relative w-[270px] h-[250px] mb-3 mx-auto rounded-xl overflow-hidden group shadow-lg inset-0 bg-gradient-to-b from-black/70 to-transparent">
                    {/* Image with hover zoom effect */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transform transition-transform duration-500 ease-in-out"
                    />
                  </div>

                  <div className="flex-col justify-start">
                    <h4 className=" mb-1 text-2xl">{item.name}</h4>

                    {/* Show the correct price */}
                    {item.pricePerPound && (
                      <div className="text-md mb-1 flex"><p className="font-bold">Price:</p> Rs. {item.pricePerPound}/pound</div>
                    )}
                    {item.pricePerPiece && (
                      <div className="text-md mb-1 flex"><p className="font-bold">Price:</p> Rs. {item.pricePerPiece}/piece</div>
                    )}

                    {/* Optional pounds */}
                    {item.pounds && (
                      <p className="text-md mb-1">
                        Available in: {item.pounds.join(", ")} lbs
                      </p>
                    )}

                    {/* Flavors */}
                    <div className="text-md"><p className="font-bold">Flavors:</p> {item.flavors.join(", ")}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
