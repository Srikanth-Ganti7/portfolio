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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
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
          I am Balasai Srikanth Ganti, an enthusiastic and highly motivated individual with a deep passion for new technologies and a relentless drive to push my boundaries. Currently, I am pursuing a Master's in Computer Science at the University of Florida, where I maintain a stellar CGPA, reflecting my commitment to academic excellence.
        </p><br/>
        <p>
          My technical skills span a wide range of programming languages, including Python, C++, JavaScript, Java, and F#, and I have hands-on experience with databases such as MySQL, MongoDB, and Elasticsearch. I am also proficient in web technologies like HTML, Figma, and CSS, and have a keen eye for design with expertise in Adobe Photoshop and Adobe Illustrator.
        </p><br/>
        <p>
          Professionally, I have worked as a Project Engineer at Wipro Ltd, where I played a crucial role in improving business processes and enhancing system reliability. My experience extends to roles such as a Graphic Designer at University of Florida office of advancement, Ganges Valley School and internships at Indian Space Research Organization, where I gained valuable insights and practical experience.
        </p><br/>
        <p>
          Beyond my professional roles, I am dedicated to making a positive impact through volunteer work with Make A Difference, where I have contributed to educational initiatives for underprivileged children. My technical projects, ranging from developing a 3D graphics rendering application to creating a library management system and a Unity game, showcase my ability to tackle diverse challenges and innovate.
        </p><br/>
        <p>
          I am always eager to embrace new technological challenges, continuously pushing myself to learn and grow in this ever-evolving field.
        </p><br/>
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={services.title} index = {index}{...service}/>))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about")