export interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  url?: string;
}

const projects: Project[] = [
  {
    title: "MERN STACK",
    description:
      "A website for booking and creating events, which features authentication, and account activation via email. ticket, category, and event management, integrated payment via midtrans. uploading images to cloudinary. using tailwind for the front view.",
    images: [
      "img/rpacara/rpacara-0.png",
      "img/rpacara/rpacara-1.png",
      "img/rpacara/rpacara-2.png",
      "img/rpacara/rpacara-3.png",
      "img/rpacara/rpacara-5.png",
      "img/rpacara/rpacara-6.png",
      "img/rpacara/rpacara-7.png",
      "img/rpacara/rpacara-8.png",
    ],
    tech: ["MongoDB", "Express", "React", "NodeJs", "Midtrans", "NextJs"],
    url: "https://rpacara.vercel.app/",
  },
  {
    title: "Code Flix",
    description:
      "There are several features, auth, plan and membership, membership checker with notifications, and payment gateway with midtrans.",
    images: [
      "img/codeflix/code-flix-1.png",
      "img/codeflix/code-flix-2.png",
      "img/codeflix/code-flix-3.png",
      "img/codeflix/code-flix-5.png",
      "img/codeflix/code-flix-6.png",
      "img/codeflix/code-flix-7.png",
      "img/codeflix/code-flix-8.png",
      "img/codeflix/code-flix-9.png",
      "img/codeflix/code-flix-10.png",
    ],
    tech: ["Laravel", "Midtrans", "Laravel Fortify", "MySql"],
    url: "https://github.com/Omonreop/laravel-codeflix",
  },
  {
    title: "Finance Tracker",
    description: "Financial data recording website built using nuxt js",
    images: [
      "img/financetrack/ft-1.png",
      "img/financetrack/ft-2.png",
      "img/financetrack/ft-3.png",
    ],
    tech: ["NuxtJs", "NuxtUI", "Vue", "Supabase"],
    url: "https://github.com/Omonreop/FinanceTracker-Nuxt",
  },
  {
    title: "MEVN Stack Store",
    description:
      "build a fullstack web, client side with Vue.js, and server side with node.js, express.js, and mongoDB.",
    images: [
      "img/mevn/mevn-1.png",
      "img/mevn/mevn-2.png",
      "img/mevn/mevn-3.png",
    ],
    tech: ["MongoDB", "Express", "Vue", "Node"],
    url: "https://github.com/Omonreop/vue-client-store",
  },
  {
    title: "BestPoints",
    description:
      "website built with node, express, mongoDB, and ejs template engine. has authentication, authorization, CRUD, and place review features.",
    images: [
      "img/bestpoint/bestpoint-1.png",
      "img/bestpoint/bestpoint-2.png",
      "img/bestpoint/bestpoint-3.png",
      "img/bestpoint/bestpoint-4.png",
      "img/bestpoint/bestpoint-5.png",
    ],
    tech: ["NodeJs", "Express", "MongoDB", "Bootstrap", "EJS"],
    url: "https://github.com/Omonreop/BestPoints",
  },
  {
    title: "Codeigniter E-Commerce",
    description:
      "E-commerce web built with codeigniter, has features of managing products, users, categories, orders, payments, and user roles.",
    images: [
      "img/CI/CI-1.png",
      "img/CI/CI-3.png",
      "img/CI/CI-2.png",
      "img/CI/CI-4.png",
      "img/CI/CI-6.png",
    ],
    tech: ["PHP", "Codeigniter", "MySql", "Bootstrap"],
    url: "https://github.com/Omonreop/rpashop-codeigniter-ecommerce",
  },
  {
    title: "IoT Project",
    description:
      "Design of TrafficLight Control and Monitoring System Using Arduino and ESP8266 Based on Internet of Things.",
    images: [
      "img/iot/arduino-2.jpg",
      "img/iot/arduino-1.jpg",
      "img/iot/arduino-3.jpg",
      "img/iot/arduino-4.jpg",
    ],
    tech: ["Arduino", "IoT", "Blynk", "ESP8266"],
    url: "https://github.com/Omonreop/Traffic-Light-Arduino-Project",
  },
  {
    title: "Company Profile",
    description:
      "Business website with a product catalog and a product CRUD system. by utilizing server-side tools like Express and Node.js, along with MongoDB for the database and EJS for templates.",
    images: ["img/bd/bd-1.png", "img/bd/bd-2.png", "img/bd/bd-3.png"],
    tech: ["EJS", "Express", "MonggoDB", "Node.js"],
  },
  {
    title: "Desktop Aplication",
    description:
      "A desktop application intended to facilitate the recording, storing, and printing of handietalkie repair data.",
    images: [
      "img/bidtik/bidtik-1.png",
      "img/bidtik/bidtik-2.png",
      "img/bidtik/bidtik-3.png",
    ],
    tech: ["Java", "Java Swing", "MySQL", "NetBeans"],
  },
];

export default projects;
