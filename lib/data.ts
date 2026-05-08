import React from "react";
import myportfolio from "@/public/myportfolio.png"
import packman from "@/public/packman.jpg"
import movie from "@/public/Reccomendation.webp"
import audio from "@/public/audio.jpg"
import prof from "@/public/prof.jpeg"
import { LuGraduationCap } from "react-icons/lu";
import { GrDatabase, GrJava } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import sales from"@/public/sales.jpg"
import terraform from"@/public/terraform.jpg"

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
  {
    title: "Data Engineer Associate",
    location: "Nagpur, India",
    description:
      "Currently working as a Data Engineer at Fulz Technologies, focusing on building and maintaining scalable data pipelines. Involved in developing ETL workflows, orchestrating pipelines using Prefect, and implementing data processing solutions with Snowflake and Python. Also worked on automating data ingestion, monitoring workflows, and improving pipeline reliability and performance.",
    icon: React.createElement(GrDatabase), // or another relevant icon
    date: "2024 - Present",
  },
] as const; 

export const projectsData = [
  {
    title: "Audio Intelligence Data Pipeline",
    description:
     "End-to-end data pipeline ingesting global music chart data from Last.fm API into Snowflake using medallion architecture.",
    tags: [
      "Python",
      "Prefect",
      "dbt",
      "Snowflake",
      "Data Engineering",
      "ETL",
    ],
    imageUrl: audio,
    year: 2026,
    links: {
      github: "https://github.com/2Prachita/audio_intelligence",
      demo: "",
    },
  },
  {
    title: "Prefect + Terraform Deployment Framework",
    description:
      "Built a modular infrastructure-as-code framework using Terraform to deploy and manage Prefect flows and deployments.",
    tags: ["Terraform", "Prefect", "IaC ", "CI/CD"],
    imageUrl: terraform,
    year: 2026,
    links: {
      github: "https://github.com/2Prachita/prefect-terraform",
      demo: "",
    },
  },
  {
    title: "Data Engineering Pipelines with Prefect",
    description:
      "Designed-implemented data pipelines using Prefect, including automated ingestion, parallel processing, and report generation workflows.",
    tags: ["Python", "Prefect", "ETL", "Parallel Processing"],
    imageUrl: sales,
    year: 2025,
    links: {
      github: "https://github.com/2Prachita/",
      demo: "",
    },
  },
  {
    title: "Prachita's Portfolio",
    description:
      "Designed and developed a personal portfolio website to showcase projects, skills, and experience, with smooth animations and responsive UI.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion"],
    imageUrl: myportfolio,
    year: 2024,
    links: {
      demo: "https://prachita.vercel.app/",
      github: "https://github.com/2Prachita/my-portfolio",
    },
  },
  {
    title: "Pacman AI Agent",
    description:
      "Implemented a goal-based AI agent using BFS as an uninformed search algorithm to navigate and solve the Pacman environment.",
    tags: ["Python", "Artificial Intelligence", "BFS", "Algorithms"],
    imageUrl: packman,
    year: 2020,
    links: {
      github: "",
      demo: "",
    },
  },
  {
    title: "FilmFusion",
    description:
      "Built an item-based collaborative filtering recommendation system in Python to suggest movies based on user similarity and preferences.",
    tags: ["Python", "Machine Learning", "Recommendation Systems"],
    imageUrl: movie,
    year: 2018,
    links: {
      github: "",
      demo: "",
    },
  },
  {
    title: "PROF",
    description:
      "Developed a Java-based application to assist educators with attendance tracking, grade management, and administrative workflows.",
    tags: ["Java", "MySQL"],
    imageUrl: prof,
    year: 2018,
    links: {
      github: "https://github.com/TushRinPrach",
      demo: "",
    },
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Snowflake",
  "Prefect",
  "AzureDevOps",
  "dbt",
  "Terraform",
  "ETL / Data Pipelines",
  "Data Modeling",
  "Workflow Orchestration",
  "AWS",
  "Git",
  "CI/CD",
  "Linux",
  "REST APIs",
];