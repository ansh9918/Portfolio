const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { type: "spring", stiffness: 50, damping: 20 } 
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.6 } }
};

export default {containerVariants, fadeUpVariants};