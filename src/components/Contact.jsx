import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef,useState,useEffect } from "react";
import fadeUpVariants from "../UI/Animations"
import { Input } from "../UI/Input";
import { Textarea } from "../UI/Textarea";
import { Button } from "../UI/Button";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission status
    const [message, setMessage] = useState("");
    
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm("service_oo6yu0f", "template_a4rpe8w", form.current, {
                publicKey: "cVkqcCGve9QSJelKc",
            })
            .then(
                () => {
                    alert("Message sent!! Told you its working...");
                    setMessage("Email sent successfully!"); // Display success message
                    form.current.reset(); // Reset the form
                    setIsSubmitting(false);
                },
                (error) => {
                    alert("There was some problem..", error.txt);
                    setMessage("Failed to send email. Please try again."); // Display error message
                    setIsSubmitting(false);
                }
            );
    };

    const { ref: contactRef, inView: contactInView } = useInView({
        threshold: 0.2,
    });
    const contactControls = useAnimation();
    useEffect(() => {
        if (contactInView) {
            contactControls.start({ opacity: 1, y: 0 });
        }
    }, [contactInView,contactControls]);
    
  return (
    <div>
      <motion.section
                    ref={contactRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={contactControls}
                    transition={{ duration: 0.8 }}
                    variants={fadeUpVariants}
                    id="contact"
                    className="container px-4 md:px-6 py-12 md:py-24">
                    <motion.div className="space-y-4 animate-fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Contact Me
                        </h2>
                        <p className="text-muted-foreground">
                            Have a project in mind? Let&apos;s chat!
                        </p>
                        <p className="text-muted-foreground">
                            Don&apos;t doubt my work !!! Its working contact
                            form
                        </p>
                    </motion.div>
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        className="max-w-md mx-auto mt-8 space-y-4">
                        <Input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            className="w-full"
                            required
                        />
                        <Input
                            type="email"
                            name="emailid"
                            placeholder="Email"
                            className="w-full"
                            required
                        />
                        <Textarea
                            placeholder="Message"
                            name="message"
                            cols="30"
                            rows="6"
                            required
                            className="w-full"
                        />
                        <Button
                            type="submit"
                            value="Send"
                            className={`w-full p-2 rounded text-white ${
                                isSubmitting ? "bg-gray-400" : "bg-blue-500"
                            }`}
                            disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send"}
                        </Button>
                        {message && (
                            <p className="mt-4 text-center">{message}</p>
                        )}
                    </motion.form>
                </motion.section>
    </div>
  )
}

export default Contact
