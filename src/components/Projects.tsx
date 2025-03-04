import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "MEVN Stack Store",
    description:
      "build a fullstack web, client side with Vue.js, and server side with node.js, express.js, and mongoDB.",
    images: ["/mevn-1.png", "/mevn-2.png", "/mevn-3.png"],
    tech: ["MongoDB", "Express", "Vue", "Node"],
  },
  {
    title: "BestPoints",
    description:
      "website built with node, express, mongoDB, and ejs template engine. has authentication, authorization, CRUD, and place review features.",
    images: [
      "/bestpoint-1.png",
      "/bestpoint-2.png",
      "/bestpoint-3.png",
      "/bestpoint-4.png",
      "/bestpoint-5.png",
    ],
    tech: ["NodeJs", "Express", "MongoDB", "Bootstrap", "EJS"],
  },
  {
    title: "Codeigniter E-Commerce",
    description:
      "E-commerce web built with codeigniter, has features of managing products, users, categories, orders, payments, and user roles.",
    images: ["/CI-1.png", "/CI-3.png", "/CI-2.png", "/CI-4.png", "/CI-6.png"],
    tech: ["PHP", "Codeigniter", "MySql", "Bootstrap"],
  },
  {
    title: "Company Profile",
    description:
      "Business website with a product catalog and a product CRUD system. by utilizing server-side tools like Express and Node.js, along with MongoDB for the database and EJS for templates.",
    images: ["/bd-1.png", "/bd-2.png", "/bd-3.png"],
    tech: ["EJS", "Express", "MonggoDB", "Node.js"],
  },
  {
    title: "Desktop Aplication",
    description:
      "A desktop application intended to facilitate the recording, storing, and printing of handietalkie repair data.",
    images: ["/bidtik-1.png", "/bidtik-2.png", "/bidtik-3.png"],
    tech: ["Java", "Java Swing", "MySQL", "NetBeans"],
  },
  {
    title: "IoT Project",
    description:
      "Design of TrafficLight Control and Monitoring System Using Arduino and ESP8266 Based on Internet of Things.",
    images: [
      "/arduino-2.jpg",
      "/arduino-1.jpg",
      "/arduino-3.jpg",
      "/arduino-4.jpg",
    ],
    tech: ["Arduino", "IoT", "Blynk", "ESP8266"],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-8  ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-64"
              >
                {project.images.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex}>
                    <img
                      src={image}
                      alt={`${project.title} ${imageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-6 ">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 flex justify-center p-4 text-gray-600 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-2 mt-8">
          <a
            href="https://github.com/Omonreop"
            target="_blank"
            className=" flex justify-center items-center gap-2"
          >
            <Github size={24} />
            <h1>See More Project..</h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
