import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-32 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                Rafly Purnomo Aji
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Information Technology Enthusiasts
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <em>"Tace, Patientia, Constant."</em>
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://github.com/Omonreop"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafly-purnomo-aji-025479280/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rafly.purnomo08@gmail.com"
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6281385042192&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="animate-bounce"
          >
            <a
              href="#about"
              className="inline-block p-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronDown size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
