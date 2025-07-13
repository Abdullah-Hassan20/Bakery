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

const bakeryItems = [
  {
    title: "Cakes",
    href: "/bakery/cakes",
    description: "Custom-designed, deliciously moist cakes perfect for birthdays, weddings, and all your special moments.",
  },
  {
    title: "Pastries",
    href: "/bakery/pastries",
    description: "Flaky, creamy, and irresistibly fresh pastries — ideal for tea time or sweet cravings anytime.",
  },
  {
    title: "Cupcakes",
    href: "/bakery/cupcakes",
    description: "Miniature treats bursting with flavor and frosted to perfection — great for parties or personal indulgence.",
  },
];


export function Navbar() {
    return (
        <nav className="flex sticky top-0 w-full items-center justify-between p-2 bg-gradient-to-b from-pink-400 to-pink-900 shadow-2xl z-10">
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
                                Bakery Items
                            </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[320px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {bakeryItems.map((item,index) => (
                                    <DietListItem key={index} title={item.title} href={item.href} >
                                        {item.description}
                                    </DietListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="text-nowrap">
                        <NavigationMenuLink asChild>
                            <Link href="/contact" className={navigationMenuTriggerStyle()}>
                                <div className="flex items-center gap-1 font-bold text-white">
                                    <Star size={18} color="white" />
                                    Contact us
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <div className="w-full flex justify-center xl:justify-end xl:mr-10">
                <div className="flex-col font-bold text-2xl leading-tight w-fit">
                    <p className="text-white">NAFEES</p>
                    <p className="text-white flex">CAKE HOUSE</p>
                    <p className="text-white text-[10px]">Crafted with care & love.</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

