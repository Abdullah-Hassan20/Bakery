"use client"
import {MapPin, Mail, Phone } from 'lucide-react';

function Footer() {
    return (
        <div>
            <footer className="bg-black text-white py-5 flex justify-between gap-3">

                <div className='flex items-center ml-1 sm:ml-10'>@ KRATOS FITNESS. All rights reserved.</div>

                <div className="flex flex-col items-center gap-2 mr-1 sm:mr-10 text-white ">
                    <h2 className="text-xl font-bold md:flex md:justify-start w-full">Contact Us</h2>
                    <div className="">
                        <div className="flex-col md:flex-row justify-around items-center gap-2">
                            <div className="text-xs md:text-sm flex items-center gap-1">
                                <MapPin size={20} className="text-yellow-400 " />
                                <p>Street 123, Sargodha</p>
                            </div>
                            <div className="text-xs md:text-sm flex items-center gap-1">
                                <Mail size={17} className="text-yellow-400" />
                                <p>contact@kratosfitness.com</p>
                            </div>
                            <div className="text-xs md:text-sm flex items-center gap-1">
                                <Phone size={17} className="text-yellow-400" />
                                <p>+92-302-0663387</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
