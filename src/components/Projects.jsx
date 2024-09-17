import { motion, useAnimation} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import fadeUpVariants from "../UI/Animations"
import { Card, CardFooter, CardContent } from "../UI/Card";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired, // title must be a string and is required
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    giturl: PropTypes.string.isRequired,
     // description must be a string and is required
};


const Projects = () => {
    const projectControls = useAnimation();
    

    // Observe when sections come into view
    
    const { ref: projectRef, inView: projectInView } = useInView({
        threshold: 0.2,
    });
    useEffect(() => {
        
        if (projectInView) {
            projectControls.start({ opacity: 1, y: 0 });
        }
        
    }, [projectInView, projectControls]);
  return (
    <div>
      <motion.section
                    ref={projectRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={projectControls}
                    transition={{ duration: 0.8 }}
                    variants={fadeUpVariants}
                    
                    id="projects"
                    className="container mx-auto px-4 md:px-6 py-12">
                    {/* Header */}
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            My Projects
                        </h2>
                        <p className="text-muted-foreground">
                            Check out some of the projects I&apos;ve worked on.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <motion.div className="mt-8 flex flex-col gap-8 md:gap-10 lg:gap-12 py-8 md:flex-row flex-wrap justify-center items-center">
                        <ProjectCard
                            title="OneClickProjects"
                            description="In Production"
                            className="bg-gradient-to-r from-blue-500 to-teal-500"
                        />
                        <ProjectCard
                            title="My Portfolio"
                            description="A web application about me made with React, Tailwind CSS, Framer Motion, etc."
                            url="https://anshportfolio-swart.vercel.app/"
                            giturl="https://github.com/ansh9918/Portfolio"
                        />
                    </motion.div>
                </motion.section>
    </div>
  )
}

function ProjectCard({ title, description, giturl, url}) {
    return (
        <Card className="flex flex-col overflow-hidden border border-cyan-100 rounded-2xl p-4 hover:shadow-xl hover:shadow-cyan-700 transition-shadow duration-200 w-full max-w-sm md:max-w-sm lg:max-w-sm">
            {/* Card Content */}
            <CardContent className="p-0 flex-grow">
                <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            </CardContent>

            {/* Card Footer */}
            <CardFooter className="p-4 flex flex-col items-center space-y-4 flex-grow">
                {/* Title and Description */}
                <div className="w-full text-center space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-cyan-200">
                        {title}
                    </h3>
                    <p className="text-sm md:text-base text-cyan-100">
                        {description}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                    <a
                        href={url}
                        target="_blank"
                        className="w-full sm:w-auto h-10 inline-flex items-center justify-center rounded-xl bg-primary px-6 text-sm md:text-md font-medium text-white shadow transition-transform duration-150 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:scale-105">
                        View Project
                    </a>
                    <a
                        href={giturl}
                        target="_blank"
                        className="w-full sm:w-auto h-10 inline-flex items-center justify-center rounded-xl bg-secondary px-6 text-sm md:text-md font-medium text-white shadow transition-transform duration-150 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:scale-105">
                        View Code
                    </a>
                </div>
            </CardFooter>
        </Card>
    );
}

export default Projects
