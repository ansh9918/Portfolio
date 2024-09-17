import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
    const upperMarquee = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT",
        "TAILWIND CSS",
        "REDUX",
        "FRAMER MOTION",
        "GIT",
        "SQL",
        "MONGODB",
        "JAVA",
        "AWS",
        "NODE.JS",
        "BOOTSTRAP",
    ];

    const lowerMarquee = [
        "BOOTSTRAP",
        "NODE.JS",
        "AWS",
        "JAVA",
        "MONGODB",
        "SQL",
        "GIT",
        "FRAMER MOTION",
        "REDUX",
        "TAILWIND CSS",
        "REACT",
        "JAVASCRIPT",
        "CSS",
        "HTML",
    ];

    return (
        <div className="container mx-auto space-y-32 px-32">
            <MarqueeItem texts={upperMarquee} from={0} to={"-100%"} />
            <MarqueeItem texts={lowerMarquee} from={"-100%"} to={0} />
        </div>
    );
};

export default Marquee;
