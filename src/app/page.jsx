"use client";
import React, { useRef } from 'react';
import { Cake } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import CustomerSatisfaction from '@/components/Satisfaction';

function HomePage() {
  const myRef = useRef(null);

  return (
    <div>

      {/* Hero Section */}
      <section className="flex min-h-screen w-full items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mt-20 mb-15 px-6">
          <div className="relative w-full h-[300px]">
            <Image src="/bakery/main2.png" alt="cake" layout="fill" objectFit="contain" className="bg-transparent" priority />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-2xl font-extrabold text-white leading-tight">
              Unleash Your Cravings with <br />Nafees Cake House
            </h1>
            <p className="text-white text-base">
              From mousse to masterpieces — crafted fresh, delivered with love.
            </p>
            <button
              onClick={() => myRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-pink-700 px-6 py-2 rounded-md font-semibold hover:bg-pink-100 transition"
            >
              Order Now
            </button>
          </div>
          
        </div>
      </section>

      {/* Why Us Section */}
      <section

        className="min-h-screen w-full flex flex-col items-center justify-center p-10 mt-15 md:mt-0"
      >
        <div className="flex justify-center items-center gap-2">
          <Cake size={24} color="white" />
          <h2 className="font-medium text-white text-3xl">Why Us?</h2>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 w-fit mx-auto mt-10 gap-5 lg:gap-10">
          {/* Card 1 */}
          <div className="hover:shadow-2xl hover:scale-105 hover:bg-pink-600 transition-all duration-300 max-w-[330px] bg-pink-400 md:bg-pink-500 rounded-2xl shadow-xl p-3 md:p-6 mx-auto flex flex-col">
            <div className="relative w-[200px] h-[170px] rounded-lg overflow-hidden mb-4 mx-auto">
              <Image src="/bakery/bakery1.png" layout="fill" alt="Bakery" objectFit="cover" objectPosition="center" className="bg-transparent" priority />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-2">Premium Quality</h1>
            <p className="text-white text-base">
              Our items are crafted with the finest ingredients to deliver unmatched taste, texture, and presentation in every bite.
            </p>
          </div>

          {/* Card 2 */}
          <div className="hover:shadow-2xl hover:scale-105 hover:bg-pink-600 transition-all duration-300 max-w-[330px] bg-pink-400 md:bg-pink-500 rounded-2xl shadow-xl p-3 md:p-6 mx-auto flex flex-col">
            <div className="relative w-[200px] h-[170px] rounded-lg overflow-hidden mb-4 mx-auto">
              <Image src="/bakery/bakery2.png" layout="fill" alt="Bakery" objectFit="cover" objectPosition="center" className="bg-transparent" priority />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-2">On-Time Delivery</h1>
            <p className="text-white text-base">
              We guarantee timely delivery for every order, so your celebrations stay perfectly sweet and right on schedule.
            </p>
          </div>

          {/* Card 3 */}
          <div className="hover:shadow-2xl hover:scale-105 hover:bg-pink-600 transition-all duration-300 max-w-[330px] bg-pink-400 md:bg-pink-500 rounded-2xl shadow-xl p-3 md:p-6 mx-auto flex flex-col">
            <div className="relative w-[200px] h-[170px] rounded-lg overflow-hidden mb-4 mx-auto">
              <Image src="/bakery/bakery3.png" layout="fill" alt="Bakery" objectFit="cover" objectPosition="center" className="bg-transparent" priority />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-2">Freshly Baked</h1>
            <p className="text-white text-base">
              Every item is baked fresh to order, ensuring moist layers, rich flavor, and that just-out-of-the-oven delight.
            </p>
          </div>

          {/* Card 4 */}
          <div className="hover:shadow-2xl hover:scale-105 hover:bg-pink-600 transition-all duration-300 max-w-[330px] bg-pink-400 md:bg-pink-500 rounded-2xl p-3 md:p-6 mx-auto flex flex-col">
            <div className="relative w-[200px] h-[170px] rounded-lg overflow-hidden mb-4 mx-auto">
              <Image src="/bakery/bakery4.png" layout="fill" alt="Bakery" objectFit="cover" objectPosition="center" className="bg-transparent" priority />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-2">Customer Delight</h1>
            <p className="text-white text-base">
              We prioritize your happiness from customization requests to responsive support, we’re here to make your experience sweet and smooth.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="w-full py-16 px-6 flex flex-col items-center text-white">
        <CustomerSatisfaction/>
      </section>


      {/* Order Section */}
      <section className="flex min-h-screen w-full items-center justify-center px-6" ref={myRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mt-20 mb-15 px-6">
          <div className="relative w-full h-[300px]">
            <Image src="/bakery/main.png" alt="Cake" layout="fill" objectFit="contain" className="bg-transparent" priority />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-4xl font-extrabold text-white">Order Now</h1>
            <p className="text-white text-base">
              Celebrate every moment with our custom cakes — baked fresh, packed with flavor, and delivered with care.
            </p>
            <Link href="https://wa.me/923202797500">
              <button className="bg-white text-pink-700 px-6 py-2 rounded-md font-semibold hover:bg-pink-100 transition">
                Start a Chat
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;

