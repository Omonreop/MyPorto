import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-50" />
      <div className="container mx-auto px-4 relative ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-500 rounded-2xl transform rotate-6 blur-lg opacity-20" />
              <img
                src="/Profile.jpg"
                alt="Profile"
                className="rounded-2xl shadow-xl w-full relative z-10"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 text-justify ">
                Hello, I am a graduate of Bina Sarana Informatika University
                with a specialization in computer technology. I love learning
                new things and am detail-oriented and aspire to work in the
                fields of technology, programming, and computer networking.
                technology, programming, and computer networking. Proficient in
                computer computer programming, data processing, operating
                systems, web programs and computer networks.
              </p>

              <div className="pt-6">
                <a
                  href="#projects"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
