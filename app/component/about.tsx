"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const {ref} = useSectionInView("About");
  
  return (
    <motion.section
    ref={ref}
    className='mb-28 mt-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity : 0, y : 100}}
    animate={{opacity : 1, y : 0}}
    transition={{delay:0.175}}
    id="about"
    >
        
        <SectionHeading> About Me</SectionHeading>

        <p className='mb-8 mt-4'>
        After completing my Bachelor's degree in{" "}
        <span className="font-medium underline">Computer Science and Engineering</span>
        ,  I began my journey in software development and later transitioned into data engineering, 
        where I discovered my interest in building scalable data systems. I gained hands-on experience as a {" "}
        <span className="font-medium underline">Software Developer at UNext Learning</span>
        , where I worked on backend development for an edtech platform using {" "}
        <span className="font-medium "> Java</span>{" "}
        during the pandemic. 
        </p>
        <p className='mb-8 mt-4'>Currently, I work as a {" "}
        <span className="font-medium underline">Data Engineer</span>
        , focusing on building and maintaining data pipelines and workflows. 
        I’ve worked with tools and technologies such as,{" "}
        <span className="italic underline">Python</span>,{" "}
        <span className="italic underline">SQL</span>,{" "}
        <span className="italic underline">Snowflake</span>,{" "}
        <span className="italic underline">Prefect</span>, and{" "}
        <span className="italic underline">Terraform</span>{" "}
        to design reliable, scalable, and maintainable data solutions. 
        I particularly enjoy solving complex data problems, optimizing workflows, 
        and building systems that create real impact.
        My core strengths lie in {" "}
        <span className="font-medium ">data engineering, workflow orchestration, 
          and infrastructure-driven development</span>
        , supported by tools like {" "} 
        <span className="italic underline">Prefect</span>{" "} 
        for orchestration, {" "} 
        <span className="italic underline">Snowflake</span>{" "} 
        for data warehousing, {" "} 
        <span className="italic underline">Terraform</span>{" "} 
        for infrastructure as code, along with {" "} 
        <span className="italic underline">Git</span>{" "} 
        for version control.{" "}
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        unwinding with <span className="font-medium">mobile games</span>, watching{" "}
        <span className="font-medium">movies</span>, reading fictional{" "}
        <span className="font-medium">books</span>.{" "}
        <span className="font-medium">Dancing</span> is a passion of mine,{" "}
        and recenlty I've also taken interest in <span className="font-medium">cooking</span>.

        </p>
    </motion.section>
  )
}
