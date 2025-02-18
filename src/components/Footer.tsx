import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text mb-4">
              Rafly Purnomo Aji
            </h3>
            <p className="text-gray-600">
              Building the future through elegant code and innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Omonreop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rafly-purnomo-aji-025479280/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                target="_blank"
                href="mailto:rafly.purnomo08@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Created with ❤️. By Rafly Purnomo
            Aji.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
