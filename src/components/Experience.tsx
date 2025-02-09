import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Operators and Admin",
    company: "CV. BDSHOOP Vespa",
    period: "April 2021 - Present",
    descriptions: [
      "Restocking and recording incoming goods to the warehouse and inputting data on available goods in e-commerce",
      "Advertise products on social media.",
      "Serve customer transactions that make purchases through e-commerce.",
      "Packing goods according to customer orders and sending ordered goods to logistics outlets.",
      "Create a company website that includes a product catalog and a CRUD system for. products. By using server-side technologies like Node.js and Express, as well as EJS for templating and MongoDB for the database.",
    ],
  },
  {
    role: "IT Support Internship",
    company: "BIDTIK Polda Metro Jaya",
    period: "September 2023 - December 2023",
    descriptions: [
      "Assist seniors in maintaining networks, devices and websites.",
      "Create a desktop application using NetBeans IDE with java language and MySql database to facilitate the input and printing of HandieTalkie repair and loan report data.",
    ],
  },
  {
    role: "Production Operator",
    company: "PT. Mayareksa Indonesia",
    period: "September 2020 - February 2021",
    descriptions: [
      "Assemble molding parts (top plate, cavity plate, core plate, ejector plate, ejector retainer x plate, bottom plate, etc.), and test the machine.",
      "Operate and supervise cnc machines in accordance with production stages.",
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
              Professional Experience
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-500 opacity-20" />
                )}

                <div className="absolute left-0 top-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full p-2 ">
                  <Briefcase size={16} className="text-white " />
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ml-3">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center text-gray-600 text-sm">
                        <Building2 size={16} className="mr-1" />
                        {exp.company}
                      </span>
                      <span className="flex items-center text-gray-600 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.descriptions.map((description, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 mt-2 mr-2 absolute" />
                        <span className="text-gray-700 ml-4">
                          {description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
