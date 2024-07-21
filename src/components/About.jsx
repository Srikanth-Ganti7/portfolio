import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options = {{
          max:45,
          scale:1,
          speed:450
        }}
        // className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>

    </Tilt>
  )

}

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className = {styles.sectionSubText}>Introduction</p>
        <h2 className = {styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants = {fadeIn("","",0.1,1)} className = "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
        <p>
        I am Balasai Srikanth Ganti, a highly motivated individual with a passion for new technologies. Currently pursuing a Master's in Computer Science at the University of Florida, I excel academically with a stellar CGPA.
        </p><br/>
        <p>
        My skills include Python, C++, JavaScript, Java, F#, and experience with databases like MySQL, MongoDB, and Elasticsearch. I am proficient in web technologies such as HTML, Figma, and CSS, and have design expertise in Adobe Photoshop and Illustrator.
        </p><br/>
        <p>
        Professionally, I have served as a Project Engineer at Wipro Ltd, enhancing business processes and system reliability. Additionally, I have experience as a Graphic Designer at the University of Florida and Ganges Valley School, along with internships at Indian Space Research Organization.
        </p><br/>
        <p>
        I am committed to volunteer work with Make A Difference, contributing to educational initiatives for underprivileged children. My projects include a 3D graphics rendering application, a library management system, and a Unity game, demonstrating my ability to tackle diverse challenges.
        </p><br/>
        <p>
        I continuously seek new technological challenges to learn and grow in this dynamic field.
        </p><br/>
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={services.title} index = {index}{...service}/>))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about")