import { SiSass, SiNpm, SiReact, SiJavascript } from "react-icons/si";

import { GiLaptop } from "react-icons/gi";

import NextImg from "../../public/next.webp";
import GatsbyImg from "../../public/gatsby.webp";
import ReactImg from "../../public/react.webp";

export const data = [
  {
    id: 1,
    title: "Next & GraphQL",
    year: "2021",
    description:
      "Intuitive advertising site for Germany individual photographer.",
    image: NextImg,
    technologies: [
      { id: 1, title: "React", icon: <SiReact /> },
      { id: 2, title: "Sass", icon: <SiSass /> },
      { id: 3, title: "Axios", icon: <SiNpm /> },
      { id: 4, title: "Open Trivia API", icon: <GiLaptop /> },
    ],
    github: "https://github.com/jordanutz/quiz-time",
    codepen: "https://codepen.io/jordanutz/pen/mdOPWpE",
  },
  {
    id: 2,
    title: "Gatsby & Tailwindcss",
    year: "2021",
    image: GatsbyImg,
    description: "Body Building Service App for all age.",
    technologies: [
      { id: 4, title: "React", icon: <SiReact /> },
      { id: 5, title: "JavaScript", icon: <SiJavascript /> },
      { id: 6, title: "Sass", icon: <SiSass /> },
    ],
    github: "https://github.com/jordanutz/react-calculator",
    codepen: "https://codepen.io/jordanutz/pen/vYyZrwb",
  },
  {
    id: 3,
    title: "React & Redux-saga",
    year: "2021",
    image: ReactImg,
    description:
      "Saas for hotel with great image management and alignment, API integration",
    walkthrough: null,
    technologies: [
      { id: 7, title: "React", icon: <SiReact /> },
      { id: 8, title: "Sass", icon: <SiSass /> },
      { id: 9, title: "Axios", icon: <SiNpm /> },
      { id: 10, title: "WeatherAPI", icon: <GiLaptop /> },
    ],
    github: "https://github.com/jordanutz/weatherfi-2.0",
    codepen: "https://codepen.io/jordanutz/pen/RwozxwG",
    portfolio: true,
  },
];
