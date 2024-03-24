import React from "react";
import myportfolio from "@/public/myportfolio.png"
import ML1 from "@/public/ML1.png"
import ML2 from "@/public/ML2.png"
import packman from "@/public/packman.jpg"
import movie from "@/public/Reccomendation.webp"
import cnn from "@/public/cnn.jpeg"
import prof from "@/public/prof.jpeg"
import { LuGraduationCap } from "react-icons/lu";
import { GrJava } from "react-icons/gr";
import { FaReact } from "react-icons/fa";

export const links = [
    {
        name: 'Home',
        hash: '#home'
    },
    {
        name: 'About',
        hash: '#about'
    },
    {
        name: 'Projects',
        hash: '#projects'
    },
    {
        name: 'Skills',
        hash: '#skills'
    },
    {
        name: 'Experience',
        hash: '#experience'
    },
    {
        name: 'Contact',
        hash: '#contact'
    },
] as const;

export const experiencesData = [
  {
    title: "Indian Institute of Information Technology Nagpur",
    location: "Nagpur, India",
    description:
      "I graduated with a BTech degree in Computer Science and Engineering after 4 years of studying. I immediately found a job as a Graduate Engineeering Trainee developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Software Developer Intern",
    location: "Nagpur, India",
    description:
      "I was an intern at Bizsense Solution's Pvt Ltd from July 2019 to Dec 2019. I created a sales application using React for the frontend and C# for the backend.",
    icon: React.createElement(FaReact),
    date: "2019",
  },
  {
    title: "Graduate Engineering Tainee",
    location: "Bengaluru, India",
    description:
      "I worked as a software developer at UNext Learning Pvt Ltd. form Sept 2020 to Sept 2021. I was maily tasked with the chnages needed to add new functionality to the existing edtech product.",
    icon: React.createElement(GrJava),
    date: "2020 - 2021",
  },
  {
    title: "University of Bristol",
    location: "Bristol, UK",
    description:
      "I obtained my Postgraduate Diploma in Management in February 2023, specializing in Management, Strategy, Finance, Operations, Marketing, and Leadership.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
] as const; 



export const projectsData = [
    {
      title: "Prof",
      description:
        "PROF is a software built in java for teachers, as an assistance tool for attendance, grade management, and, streamlining administrative tasks for educators.",
      tags: ["Java", "Java Mail API", "MySQL"],
      imageUrl: prof,
    },
    {
      title: "Pacman",
      description:
        "Implemented a goal-based agent using BFS as an uninformed search policy, enhancing the gaming experience.",
      tags: ["Python", "Aitifical Intellegence", "BFS", "Data Structures", ],
      imageUrl: packman,
    },
    {
      title: "FilmFusion",
      description:
        "Modelled an Item-based Collaborative Filtering Recommendation Algorithm in python for reccomending movies.",
      tags: ["Python", "ML"],
      imageUrl: movie,
    },
    ,
    {
      title: "Fashion-MNIST dataset",
      description:
        "Programmed a simple convolutional neural network in TensorFlow to solve an image classification task.",
      tags: ["Python", "Keras", "TensorFlow",],
      imageUrl: cnn,
    },
    {
      title: "Prachita's Portfolio",
      description:
        "I created my personal portfolio website for the recruites to showcase my skills, projects, and experience.",
      tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion", "Rsend", "React Email"],
      imageUrl: myportfolio,
    },
    {
      title: "ML Algorithm 1",
      description:
        "Implemented single-layer perceptron by training on breast cancer and seed datasets in C, significantly improving classification accuracy.",
      tags: ["C", "Machine Learning", "Dataset Classification"],
      imageUrl: ML1,
    },
    {
      title: "ML Algorithm 2",
      description:
        "Implemented multi-layer perceptron by training on breast cancer and seed datasets in C, significantly improving classification accuracy.",
      tags: ["C", "Machine Learning", "Dataset Classification"],
      imageUrl: ML2,
    },
    /*{
      title: "Student Record",
      description:
        "Built the backend functions only of a student record system using AVL tree data structure in C language.",
      tags: ["Java", "MySQL", "Java Mail"],
      imageUrl: corpcommentImg,
    },
    {
      title: "Book Record",
      description:
        "Built backend functions of book record using linked list data structure in C language.",
      tags: ["Python", "BFS", "Data Structures", "Aitifical Intellegence"],
      imageUrl: rmtdevImg,
    },*/
  ] as const;

export const skillsData = [
    'Java', 
    'C', 
    'Python',
    'SQL',
    'Git',
    'Jira',
    'MYSQL',
    'HTML',
    'CSS', 
    'JavaScript',
    'React',
    'Redux',
    'Next.js',
    'Node.js',
    'Power BI', 
    'Tableau',
    'Framer Motion'
]