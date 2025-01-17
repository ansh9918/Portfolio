import { motion } from "framer-motion";
import fadeUpVariants from "../UI/Animations";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white">
            <motion.footer
                variants={fadeUpVariants}
                className="py-6 px-4 md:px-6 border-t border-gray-700 text-gray-400 animate-fade-up">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm mb-4 md:mb-0">
                        &copy; 2024 Ansh Maurya
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-sm hover:underline underline-offset-4">
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="text-sm hover:underline underline-offset-4">
                            Terms
                        </a>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
};

export default Footer;
