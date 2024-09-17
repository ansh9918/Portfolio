import { motion} from "framer-motion";
import { useState } from "react";
import fadeUpVariants from "../UI/Animations"
import { Button } from "../UI/Button";
import { XIcon } from "@heroicons/react/outline";
import containerVariants from "../UI/Animations"

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId); // Get the target section by ID
        if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target section
        }
        setIsMobileMenuOpen(false);
    };
  return (
    <div>
      <motion.header variants={fadeUpVariants} className="fixed z-10 top-0 left-0 right-0 backdrop-blur-lg py-6 px-4 md:px-10 flex items-center justify-between border-b border-muted">
                <a
                    href=""
                    className="flex items-center gap-4 text-xl font-bold">
                    <CodeIcon className="w-6 h-6" />
                    Ansh Maurya
                </a>
                <nav className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => scrollToSection("about")}
                        className="text-md font-medium hover:underline underline-offset-4">
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="text-md font-medium hover:underline underline-offset-4">
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="text-md font-medium hover:underline underline-offset-4">
                        Contact
                    </button>
                </nav>
                <Button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? (
                        <XIcon className="w-6 h-6" />
                    ) : (
                        <MenuIcon className="w-6 h-6" />
                    )}
                </Button>

                {/* Mobile Menu */}
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: isMobileMenuOpen ? "0%" : "-100%" }}
                    transition={{ duration: 0.5 }}
                    variants={containerVariants}
                    className={`fixed top-0 left-0 right-0 shadow-lg bg-sky-950 transform transition-transform duration-150 ease-in-out z-40 md:hidden ${
                        isMobileMenuOpen
                            ? "translate-y-0"
                            : "translate-y-[-100%]"
                    } h-[50vh] rounded-b-3xl`}>
                    <div className="flex flex-col items-center justify-center h-full p-6 space-y-6 overflow-auto">
                        <button
                            className="absolute top-4 right-4"
                            onClick={() => setIsMobileMenuOpen(false)}>
                            <XIcon className="w-8 h-8 text-white" />
                        </button>

                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-lg font-medium hover:underline">
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-lg font-medium hover:underline">
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-lg font-medium hover:underline">
                            Contact
                        </button>
                    </div>
                </motion.div>
            </motion.header>
    </div>
  )
}

function CodeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

export default Header
