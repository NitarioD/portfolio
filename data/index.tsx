import { IconHome } from "@tabler/icons-react";
import { BsInfoCircle } from "react-icons/bs";
import { FaFolderOpen, FaPhoneVolume } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";

export const navItems = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#hero",
  },

  {
    title: "About",
    icon: (
      <BsInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#about",
  },
  {
    title: "Projects",
    icon: (
      <FaFolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Tech Stack",
    icon: (
      <FaStackOverflow className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#stack",
  },
  {
    title: "Contact",
    icon: (
      <FaPhoneVolume className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Supabase Project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Crwn-clothing Ecommerce website",
    des: "Ecommerce website created with reactjs, uses redux for state management, stripe for payment and firebase for backend services",
    img: "/crwn.png",
    urlLink: "https://crwn-clothing-ecomm.netlify.app/",
    iconLists: [
      "/re.svg",
      "/stripe.png",
      "/ts.svg",
      "/redux.png",
      "/firebase.png",
      "jest.png",
    ],
    link: "https://crwn-clothing-ecomm.netlify.app/",
  },
  {
    id: 2,
    title: "Leno - Your productivity assistant",
    des: "A landing page for a productivity assistant company",
    img: "/leno.png",
    urlLink: "https://leno-site.netlify.app/",
    iconLists: ["/re.svg", "/scss.png"],
    link: "https://leno-site.netlify.app/",
  },
  {
    id: 3,
    title: "MERN-GPT",
    des: "A fullstack chatbot application with a GPT-3 powered chatbot",
    img: "/mern.png",
    urlLink: "https://chatbot.renegade.com.ng/",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "mongoose.png",
      "express.png",
      "openai.png",
    ],
    link: "https://chatbot.renegade.com.ng/",
  },
  {
    id: 4,
    title: "Richt - The Key To Fine Dining",
    des: "A landing page for a restuarant with a menu and reservation system.",
    img: "/getricht.png",
    urlLink: "https://gericht-rust.vercel.app/",
    iconLists: ["/re.svg"],
    link: "https://gericht-rust.vercel.app/",
  },
  {
    id: 5,
    title: "GPT-3 Modern UI/UX",
    des: "A landing page for a GPT-3 powered website that generates UI/UX designs.",
    img: "gpt.png",
    urlLink: "https://project-modern-ui-ux-gpt3-kappa.vercel.app/",
    iconLists: ["/re.svg"],
    link: "https://project-modern-ui-ux-gpt3-kappa.vercel.app/",
  },
  {
    id: 6,
    title: "Tutor Website",
    des: "Landing page for a tutor website",
    img: "/tutor.png",
    urlLink: "https://tutor-website-green.vercel.app/",
    iconLists: ["/re.svg", "/scss.png"],
    link: "https://tutor-website-green.vercel.app/",
  },
  {
    id: 7,
    title: "Monsters Website",
    des: "Landing page for a monsters website with search filter",
    img: "/monsters.png",
    urlLink: "https://monsters-rolodex-ashen.vercel.app/",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://monsters-rolodex-ashen.vercel.app/",
  },

  {
    id: 8,
    title: "Conductor.NG website",
    des: "Created a website from a figma design with NextJS. ",
    img: "/conductor.png",
    urlLink: "https://conductor-ng.vercel.app/",
    iconLists: ["/next.svg", "ts.svg", "/tail.svg"],
    link: "https://conductor-ng.vercel.app/",
  },
  {
    id: 9,
    title: "Lumina Creative website",
    des: "landing page for a creative agency",
    img: "/lumina.png",
    urlLink: "https://lumcreative.netlify.app/",
    iconLists: ["/html.png"],
    link: "https://lumcreative.netlify.app/",
  },
];

export const stackDetails = [
  {
    review: 4,
    imgIcon: "TbBrandNextjs",
    title: "NextJS",
  },
  {
    review: 4.5,
    imgIcon: "FaNodeJs",
    title: "NodeJS",
  },
  {
    review: 4.5,
    imgIcon: "BiLogoTailwindCss",
    title: "TailwindCSS",
  },
  {
    review: 4,
    imgIcon: "GrReactjs",
    title: "React",
  },
  {
    review: 4,
    imgIcon: "SiTypescript",
    title: "TypeScript",
  },
  {
    review: 3.5,
    imgIcon: "BiLogoRedux",
    title: "Redux",
  },
  {
    review: 3.5,
    imgIcon: "SiGraphql",
    title: "GraphQL",
  },
  {
    review: 4,
    imgIcon: "SiMongodb",
    title: "Mongodb",
  },
  {
    review: 4,
    imgIcon: "SiExpress",
    title: "Express",
  },
  {
    review: 4,
    imgIcon: "SiSupabase",
    title: "Supabase",
  },
];

export const companies = [
  {
    id: 1,
    name: "Conductor",
    img: "/conductor.svg",
  },
  {
    id: 2,
    name: "SGF",
    img: "/sgf.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, Next.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance backend Project",
    desc: "Designed and developed the backend of an ecommerce website and a carpool app using supabase for one and firebase for the other. ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a customer service project using MERN stack, ensuring high performance and responsiveness.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/NitarioD",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/jolaadunola/",
  },
];

export const email_addr = "nitariod@gmail.com";
