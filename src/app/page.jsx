"use client"
import React,{useRef} from 'react';
import { Dumbbell } from 'lucide-react';
import Link from "next/link"
import Image from "next/image"


function page() {
  const myRef = useRef(null)
  return (
    <>
    
    <div className='bg-gradient-to-r from-gray-950 to-gray-700'>

      <section className=" min-h-screen flex flex-col justify-center items-center text-center bg-[url('/gym/gym5.png')] bg-cover bg-center px-6">
        <div className="">
          <h1 className=" text-5xl font-extrabold text-white mb-4">KRATOS FITNESS</h1>
          <p className="text-white text-lg mb-6 max-w-xl">Unleash the beast within. Train hard, live strong, and become unstoppable.</p>
          <button onClick={() => myRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">Join Now</button>
        </div>
      </section>

      <section className="min-h-screen w-full flex flex-col items-center justify-center p-10 mt-15 md:mt-0">
        <div className='flex justify-center items-center gap-2'>
          <Dumbbell size={24} color='white' />
          <h2 className="font-medium text-white text-3xl">Why GYM?</h2>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 w-fit mx-auto mt-10 gap-5 lg:gap-10">
          <div className="hover:shadow-2xl hover:scale-105 hover:bg-gray-900 transition-all duration-300 max-w-[330px] bg-gray-800/40 rounded-2xl shadow-xl p-3 md:p-6 mx-auto flex flex-col ">
            <div className="relative w-[200px] h-[130px] rounded-lg overflow-hidden mb-4 mx-auto">
              <Image src="/gym/gym1.png" layout="fill" alt="Gym" objectFit="cover" objectPosition="center" className="bg-transparent" priority />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-2">Discpline</h1>
            <p className="text-white text-sm">Regular training builds discipline, which translates into better focus, time management, and healthier lifestyle choices</p>
          </div>

          <div className="hover:shadow-2xl hover:scale-105 hover:bg-gray-900 transition-all duration-300 max-w-[330px] bg-gray-800/40 rounded-2xl shadow-xl p-3 md:p-6 mx-auto flex flex-col ">
            <div className="relative w-[200px] h-[130px] rounded-lg overflow-hidden mb-4 mx-auto">
              <Image src="/gym/gym2.png" alt="Gym" layout="fill" objectFit="cover" objectPosition="center" className="bg-transparent" priority />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-2">Consistancy</h1>
            <p className="text-white text-sm">Regular gym sessions builts consistancy, improve long-term health, and develop unstoppable momentum in both fitness and life</p>
          </div>

          <div className="hover:shadow-2xl hover:scale-105 hover:bg-gray-900 transition-all duration-300 max-w-[330px] bg-gray-800/40 rounded-2xl shadow-xl p-3 md:p-6 mx-auto flex flex-col ">
            <div className="relative w-[200px] h-[130px] rounded-lg overflow-hidden mb-4 mx-auto">
              <Image src="/gym/gym3.png" alt="Gym" layout="fill" objectFit="cover" objectPosition="center" className="bg-transparent" priority />
            </div>
            <h1 className="text-2xl font-extrabold text-white mb-2">Confidence</h1>
            <p className="text-white text-sm">Gym training boosts self-esteem and confidence — helping you feel better, look better, and carry yourself with pride</p>
          </div>

          <div className="hover:shadow-2xl hover:scale-105 hover:bg-gray-900 transition-all duration-300 max-w-[330px] bg-gray-800/40 rounded-2xl p-3 md:p-6 mx-auto flex flex-col ">
            <div className="relative w-[200px] h-[130px] rounded-lg overflow-hidden mb-4 mx-auto">
              <Image src="/gym/gym4.png" alt="Gym" layout="fill" objectFit="cover" objectPosition="center" className="bg-transparent" priority />
            </div>
            <h1 className="text-2xl  font-extrabold text-white mb-2">Strength</h1>
            <p className="text-white text-sm">Building strength not only transforms your physique but also strengthens your mindset, resilience, and inner power.</p>
          </div>
        </div>
      </section>

      <section ref={myRef} className="text-white py-10 min-h-screen flex items-center justify-center mt-15 md:mt-0">
        <div className="container">
          <h2 className="text-3xl text-center font-bold mb-10">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6 px-10">
            <div className="bg-gray-800 p-3 lg:p-6 rounded-xl text-center hover:scale-105 transition-all hover:bg-gray-900 duration-300">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-yellow-400 text-2xl mb-4">$20/mo</p>
              <ul className="container text-start list-disc ml-3 sm:ml-10 md:ml-3">
                <li>Access to equipments</li>
                <li>Locker facility</li>
                <li>Crdio for only 20 min daily</li>
                <li>Basic guidance</li>
              </ul>
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded">Choose Plan</button>
            </div>
            <div className="bg-gray-800 p-3 lg:p-6 rounded-xl text-center hover:scale-105 transition-all hover:bg-gray-900 duration-300">
              <h3 className="text-xl font-bold mb-2">Standard</h3>
              <p className="text-yellow-400 text-2xl mb-4">$35/mo</p>
              <ul className="container text-start list-disc ml-3 sm:ml-10 md:ml-3">
                <li>Everything in Basic</li>
                <li>24/7 gym access</li>
                <li>1 personal training/mo</li>
                <li>Access to group classes</li>
              </ul>
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded">Choose Plan</button>
            </div>
            <div className="bg-gray-800 p-3 lg:p-6 rounded-xl text-center hover:scale-105 transition-all hover:bg-gray-900 duration-300">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-yellow-400 text-2xl mb-4">$50/mo</p>
              <ul className="container text-start list-disc ml-3 sm:ml-10 md:ml-3">
                <li>Everything in Standard</li>
                <li>Weekly personal training</li>
                <li>Customized diet </li>
                <li>Customized workout plan</li>
              </ul>
              
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen w-full items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mt-20 mb-15 px-6">
          <div className="relative w-full h-[300px] ">
            <Image src="/gym/body.png" alt="Gym" layout="fill" objectFit="contain" className="bg-transparent" priority  />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-4xl font-extrabold text-white">Achieve Your Fitness Goal</h1>
            <p className="text-white text-sm">Personalized diet and training plans to keep you focused, consistent, and performing at your best — every day</p>
            <Link href="/training"><button className="bg-accent text-accent-foreground px-6 py-2 rounded-md font-medium w-max hover:bg-accent/80 transition">Get Started</button></Link>
          </div>
        </div>
      </section>

    </div>
    
    </>
  )
}

export default page

