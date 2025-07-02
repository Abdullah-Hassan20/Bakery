"use client"
import Link from "next/link"
import { House, UtensilsCrossed, PillBottle, Star } from 'lucide-react';

import {
    DietListItem,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const dietPlans = [
    {
        title: "Muscle Gain Plan",
        href: "/diet/muscleGain",
        description: "A high-protein, calorie-surplus meal plan designed to support muscle hypertrophy and strength training.",
    },
    {
        title: "Fat Loss Plan",
        href: "/diet/fatLoss",
        description: "A calorie-deficit, low-carb diet focused on burning fat while maintaining lean muscle mass.",
    },
    {
        title: "Balanced Nutrition",
        href: "/diet/balanced",
        description: "A well-rounded diet plan combining protein, carbs, and healthy fats for general health and fitness.",
    },
    {
        title: "Keto Diet",
        href: "/diet/keto",
        description: "A low-carb, high-fat diet that shifts your body into ketosis, ideal for rapid fat loss and sustained energy.",
    },
    {
        title: "Intermittent Fasting",
        href: "/diet/intermittentFasting",
        description: "A timed eating schedule that improves metabolism and fat burn while simplifying your meal routine.",
    },
    {
        title: "Vegetarian Athlete Plan",
        href: "/diet/vegetarian",
        description: "A plant-based meal plan packed with protein and nutrients tailored for active individuals.",
    },
]

const supplements = [
    {
        title: "Whey Protein",
        href: "/supplements/whey-protein",
        description: "Fast-digesting protein ideal for muscle recovery and growth post-workout.",
    },
    {
        title: "Creatine Monohydrate",
        href: "/supplements/creatine",
        description: "Boosts strength, performance, and muscle volume during high-intensity training.",
    },
    {
        title: "Branched-Chain Amino Acids (BCAAs)",
        href: "/supplements/bcaas",
        description: "Reduces muscle soreness and supports endurance by preventing muscle breakdown.",
    },
    {
        title: "Pre-Workout",
        href: "/supplements/pre-workout",
        description: "Increases energy, focus, and pump before workouts with stimulants and nitric oxide boosters.",
    },
    {
        title: "Multivitamins",
        href: "/supplements/multivitamins",
        description: "Supports overall health and fills nutritional gaps to optimize performance.",
    },
    {
        title: "Fish Oil (Omega-3)",
        href: "/supplements/fish-oil",
        description: "Promotes heart health, joint flexibility, and reduces inflammation for active individuals.",
    },4
]

export function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-gradient-to-r from-gray-950 to-gray-600 p-5 shadow-2xl">
            <NavigationMenu className="w-full">
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/" className={navigationMenuTriggerStyle()}>
                                <div className="flex items-center gap-1 font-bold text-white">
                                    <House size={24} color="white" />
                                    Home
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <div className="flex items-center gap-1 font-bold text-white">
                                <UtensilsCrossed size={17} color="white" />
                                Diet Plans
                            </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[320px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {dietPlans.map((item,index) => (
                                    <DietListItem key={index} title={item.title} href={item.href}>
                                        {item.description}
                                    </DietListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <div className="flex items-center gap-1 font-bold text-white">
                                <PillBottle size={16} color="white" />
                                Supplements
                            </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[320px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {supplements.map((item,index) => (
                                    <DietListItem key={index} title={item.title} href={item.href}>
                                        {item.description}
                                    </DietListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="text-nowrap">
                        <NavigationMenuLink asChild>
                            <Link href="/training" className={navigationMenuTriggerStyle()}>
                                <div className="flex items-center gap-1 font-bold text-white">
                                    <Star size={18} color="white" />
                                    Personalized Training
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <div className="w-full flex justify-center xl:justify-end xl:mr-10">
                <div className="flex-col font-bold text-2xl leading-tight w-fit">
                    <p className="text-yellow-400">KRATOS</p>
                    <p className="text-red-500 flex">FITNESS</p>
                    <p className="text-white text-[10px]">Achieve your dream physique</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

