"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function PersonalizedTraining() {
    return (
        <section className="flex min-h-screen w-full items-center justify-center px-6 bg-gradient-to-r from-gray-950 to-gray-700" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mt-20 mb-15 px-6">
                <div className="relative w-full h-[300px] ">
                    <Image src="/gym/train.png" alt="Gym" layout="fill" objectFit="contain" className="bg-transparent" priority />
                </div>
                <div className="flex flex-col justify-center gap-4 text-white">
                    <h1 className="text-4xl font-extrabold text-white">Personalized Training Plans</h1>
                    <p className="text-white text-sm">A tailored approach to help you smash your fitness goals</p>
                    <ul className="text-left text-lg md:text-xl mb-8 list-disc list-inside space-y-2 px-4 md:px-10">
                        <li>Customized workout routines based on your body type & goals</li>
                        <li>Nutrition guidance by certified professionals</li>
                        <li>Progress tracking & weekly evaluations</li>
                        <li>One-on-one or group session options</li>
                    </ul>
                    <Link href="/training"><button className="bg-accent text-accent-foreground px-6 py-2 rounded-md font-medium w-max hover:bg-accent/80 transition">Get Started</button></Link>
                </div>
            </div>
        </section>
    );
}
