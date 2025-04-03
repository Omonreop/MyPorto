import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projects from "../data/projects";
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
              className="bg-white flex h-full flex-col   rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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

              <div className="p-6 flex flex-col flex-grow cursor-default">
                <h3 className="text-xl font-bold mb-2 ">{project.title}</h3>
                <p className="text-gray-600 mb-4 ">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
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
              {project.url && (
                <a href={project.url} target="_blank">
                  <div className="flex justify-center items-center hover:bg-gradient-to-r from-blue-600 to-teal-500 hover:text-white w-full gap-2 p-2">
                    <Eye size={24} />
                    <p className="">View Project</p>
                  </div>
                </a>
              )}
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
