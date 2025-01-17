import Marquee from "./UI/Marquee";
import fadeUpVariants from "./UI/Animations";
import { motion } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import containerVariants from "./UI/Animations";
function MyPortfolio() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="dark bg-background text-foreground min-h-[100vh] flex flex-col">
            <Header />
            <motion.main
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                id="about"
                className="flex-1 py-16 md:py-24 lg:py-32">
                <About />
                <Projects />
                <motion.div
                    variants={fadeUpVariants}
                    className="container mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24 lg:mt-32 space-y-4 text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        My Skills
                    </h2>
                    <p className="text-muted-foreground">
                        Technologies I have worked with
                    </p>
                </motion.div>
                <motion.section
                    variants={fadeUpVariants}
                    id="skills"
                    className="container mx-auto w-full h-full py-24 md:py-32 lg:py-44 text-white flex justify-center items-center overflow-x-hidden">
                    <Marquee />
                </motion.section>
                <Contact />
            </motion.main>
            <Footer />
        </motion.div>
    );
}

export default MyPortfolio;
