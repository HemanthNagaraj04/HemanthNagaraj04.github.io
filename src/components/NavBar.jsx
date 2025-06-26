import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
const NavBar = () => {
    const navLinks = ["Home", "About", "Skills", "Portfolio", "Contact"]
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="sticky top-0 z-50">
            <div className="flex justify-between items-center p-4 w-full bg-black">
                <a
                    href="#Home"
                    className="font-extrabold text-3xl text-gray-200 hover:text-white cursor-pointer">
                    HN
                </a>
                <div className="hidden gap-8 mx-10 text-gray-300 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            className="hover:text-white">
                            <h2>{link}</h2>
                        </a>
                    ))}
                </div>
                <div className="mx-4 md:hidden">
                    {isOpen ?
                        <button className="text-white" onClick={() => { setIsOpen(false) }}><FaWindowClose size={24} /></button>
                        : <button className="text-white" onClick={() => { setIsOpen(true) }}><FaBars size={24} /></button>
                    }
                </div>
            </div>
            {isOpen && (
                <div className="w-full text-center bg-black text-white md:hidden flex flex-col gap-2 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link}`}
                            onClick={() => setIsOpen(false)}>
                            <h2>{link}</h2>
                        </a>
                    ))}
                </div>
            )}

        </div>
    );
};

export default NavBar;
