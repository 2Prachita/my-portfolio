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
        ,  I embarked on a journey to deepen my expertise in software development. 
        I gained practical experience as a{" "}
        <span className="font-medium underline">Software Developer at UNext Learning</span>{" "}
        where I engineered the backend of a sophisticated edtech product using,{" "}
        <span className="font-medium "> Java</span>
        , contributing to the advancement of online education during the pandemic.
        What excites me most about programming is the{" "}
        <span className="italic underline">thrill of problem-solving</span>{" "}
        and the{" "} 
        <span className="italic underline">satisfaction of finding solutions</span>.{" "}
        My core stack includes{" "}
        <span className="font-medium ">C, Java, Python, HTML/CSS, React JS, SQL, and JavaScript</span>
        , with proficiency in tools like{" "} 
        <span className="font-medium ">Eclipse, Git, and Visual Studio Code</span>.{" "}
        I am eager to expand my knowledge and am currently looking a {" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        unwinding with <span className="font-medium">mobile games</span>
        , immersing myself in captivating{" "}
        <span className="font-medium">movies</span>
        , and delving into the imaginative worlds of fictional{" "}
        <span className="font-medium">books</span>.
        Dancing is another passion of mine, providing a creative outlet and a way to stay active.{" "}
        Recenlty I've taken interest in <span className="font-medium">cooking</span>.

        </p>
    </motion.section>
  )
}
