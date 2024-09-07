import { motion, useAnimation} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import fadeUpVariants from "../UI/Animations"
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaAward, FaFile } from "react-icons/fa";
import { FaBuildingNgo } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { MdPeopleAlt } from "react-icons/md";
import ResumeDoc from "../assets/Ansh Resume.pdf";

const About = () => {
    const aboutControls = useAnimation();
    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0.2,
    });
    useEffect(() => {
        if (aboutInView) {
            aboutControls.start({ opacity: 1, y: 0 });
        }
    }, [aboutInView, aboutControls]);





  return (
    <div>
       <motion.section ref={aboutRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={aboutControls}
                    transition={{ duration: 0.8 }}
                    variants={fadeUpVariants} className="container mx-auto text-center items-center px-4 sm:px-8">
                    {/* Intro Section */}
                    <motion.div className="space-y-6 my-12 md:my-32">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Ansh Maurya
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium">
                            Frontend Developer
                        </h2>
                        <div className="flex gap-4 justify-center items-center">
                            <a
                                href={ResumeDoc}
                                download="MyExampleDoc"
                                target="_blank"
                                className="h-10 inline-flex items-center rounded-xl bg-primary px-6 text-sm md:text-md font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                Resume
                            </a>
                            <a
                                href="http://www.linkedin.com/in/ansh-maurya-268235211"
                                target="_blank"
                                rel="noopener noreferrer">
                                <CiLinkedin className="h-8 w-8 hover:scale-125 duration-150 cursor-pointer" />
                            </a>
                            <a
                                href="https://github.com/ansh9918" // Corrected GitHub URL
                                target="_blank"
                                rel="noopener noreferrer">
                                <VscGithub className="h-8 w-8 hover:scale-125 duration-150 cursor-pointer" />
                            </a>
                        </div>
                    </motion.div>

                    {/* About Me Section */}
                    <motion.div className="my-16 md:my-32 space-y-4" id="abousection">
                        <p className="text-lg md:text-xl font-semibold text-cyan-300">
                            Get To Know More
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-cyan-100 mt-2">
                            About Me
                        </h1>

                        {/* Section Content */}
                        <motion.div className="mt-4 flex flex-col gap-10 px-4 md:px-32 py-10 h-auto md:flex-row items-center">
                            {/* Details Container */}
                            <motion.div variants={fadeUpVariants} className="w-full flex flex-col space-y-8">
                                {/* Experience and Education Containers */}
                                <motion.div className="flex flex-col md:flex-row justify-between gap-8 space-y-6 my-8 md:space-y-0 md:space-x-8">
                                    {/* Internships */}
                                    <div className="flex flex-col md:w-1/2 items-center justify-center border border-cyan-100 rounded-2xl p-6 md:px-12 space-y-2">
                                        <FaAward className="w-9 h-9 mx-auto text-cyan-100" />
                                        <h3 className="text-lg font-medium text-cyan-100">
                                            Internships
                                        </h3>
                                        <ul className="text-center">
                                            <li className="flex items-center justify-center gap-2">
                                                1Stop.ai | Aug 2023 - Nov 2023{" "}
                                                <a
                                                    href="https://drive.google.com/file/d/1FblLKf7m0NJn_fcL2EPguIPeVehT4eoi/view?usp=sharing"
                                                    target="_blank">
                                                    <FaFile className="cursor-pointer hover:scale-125 duration-75 w-3 h-3" /></a>
                                                
                                            </li>
                                            <li className="flex items-center justify-center gap-2">
                                                Internshala | May 2022 - July
                                                2022{" "}
                                                <a
                                                    href="https://drive.google.com/file/d/1LlIzGjDsHPmr5yKj4362f6gndveTWTkU/view?usp=drive_link"
                                                    target="_blank">
                                                    <FaFile className="cursor-pointer hover:scale-125 duration-75 w-3 h-3" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Education */}
                                    <div className="flex flex-col md:w-1/2 items-center justify-center border border-cyan-100 rounded-2xl p-6 md:px-12 space-y-2">
                                        <FaBuildingNgo className="w-9 h-9 mx-auto text-cyan-100" />
                                        <h3 className="text-lg font-medium text-cyan-100">
                                            Education
                                        </h3>
                                        <p className="text-center text-cyan-100">
                                            B.E. Bachelor&apos;s Degree 2020 -
                                            2024
                                            <br />
                                            Chandigarh University
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Certifications and NGO Work */}
                                <motion.div className="flex flex-col md:flex-row justify-between gap-8 space-y-6 my-8 md:space-y-0 md:space-x-8">
                                    {/* Certification */}
                                    <div className="flex flex-col md:w-1/2 items-center justify-center border border-cyan-100 rounded-2xl p-6 md:px-12 space-y-2">
                                        <GrCertificate className="w-9 h-9 mx-auto text-cyan-100" />
                                        <h3 className="text-lg font-medium text-cyan-100">
                                            Certification
                                        </h3>
                                        <ul className="text-center">
                                            <li className="flex items-center justify-center gap-2">
                                                Infosys - Java 11 Beyond Basics{" "}
                                                <a
                                                    href="https://drive.google.com/file/d/1P2lLEiXJfMiMmJZz_WN_6zs8EbwC5LB-/view?usp=drive_link"
                                                    target="_blank">
                                                    <FaFile className="cursor-pointer hover:scale-125 duration-75 w-3 h-3" />
                                                </a>
                                            </li>
                                            <li className="flex items-center justify-center gap-2">
                                                Coursera - Crash Course on
                                                Python{" "}
                                                <a
                                                    href="https://drive.google.com/file/d/16rRmMoQ0O9LaO83-32TBWCpLIBboNIIy/view?usp=drive_link"
                                                    target="_blank">
                                                    <FaFile className="cursor-pointer hover:scale-125 duration-75 w-3 h-3" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* NGO Work */}
                                    <div className="flex flex-col md:w-1/2 items-center justify-center border border-cyan-100 rounded-2xl p-6 md:px-12 space-y-2">
                                        <MdPeopleAlt className="w-9 h-9 mx-auto text-cyan-100" />
                                        <h3 className="text-lg font-medium text-cyan-100">
                                            Animal Trust
                                        </h3>
                                        <p className="text-center text-cyan-100">
                                            I have been working with local NGOs
                                            to provide food and shelter to stray
                                            animals. We also treat injured
                                            animals with severe wounds.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>

    </div>
  )
}

export default About
