import { motion} from "framer-motion";
import fadeUpVariants from "../UI/Animations"

const Footer = () => {
    return (
        <div>
            <motion.footer
                variants={fadeUpVariants}
                className="py-6 px-4 md:px-6 border-t border-muted text-muted-foreground animate-fade-up">
                <div className="container flex items-center justify-between">
                    <p className="text-sm">&copy; 2024 Ansh Maurya</p>
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
