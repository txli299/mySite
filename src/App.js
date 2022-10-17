
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import './App.css';
import {IoMenu,IoCodeWorking, IoLogoGithub, IoLogoLinkedin, IoMailOpen} from 'react-icons/io5';
import myImage from "./image/myImage.jpeg";
import yelp from "./image/yelp.png";
import order from "./image/orderSys.png";
import web from "./image/web.png";
import {AnimatePresence, motion} from "framer-motion"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  const [isActive,setIsActive]= useState(false)
  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen  min-h-screen flex-col items-center justify-center relative bg-primary bp-20">
      {/*Navigation bar*/}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Tuoxin Li</p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" >home</a>
            <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" >about</a>
            <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" >project</a>
            <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" >contact</a>
            <a href="https://www.dropbox.com/s/nst8uipy9z9itwi/TUOXIN%20LI%20RESUME.pdf?dl=0" className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Resume</a>
          </div>

          <motion.div 
          whileTap={{scale:0.5}}
          className="block md:hidden ml-auto cursor-pointer" onClick={()=>setIsActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase /"></IoMenu>

          </motion.div>

          {isActive &&(
            <motion.div 
              initial={{opacity:0,scale:0.5}}
              animate={{opacity:1,scale:1.1}}
              exit={{opacity:0,scale:0.5}}
              transition={{delay:"0.1s",type:"spring"}}
              className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
              <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}>home</a>
              <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}>about</a>
              <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}>project</a>
              <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}>contact</a>
              <motion.a 
              whileTap={{scale:0.8}}
              href="#" 
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">download</motion.a>
            
            </motion.div>
          )}
        </div>
      </nav>
      <div className="relative"  id="home"> 
        <Spline scene="https://prod.spline.design/lEhFaVzQkNkDTbnA/scene.splinecode" />
        <div className="absolute bottom-10 w-full justify-center items-center flex">
          <div className="shadow-md p-4 flex items-center justify-center bg-zinc-600 rounded-3xl">
            <p className="text-texBase">Press and drag to orbit</p>
          </div>
        </div>

      </div>

      {/* {main section} */}
      <main className="w-[80%] mt-5">
        {/* {About section} */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">
            {/* {image here} */}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-emerald-600 rounded-md relative">
                <img className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" src={myImage} alt=""></img>
              </div>
            </div>
            
            {/* {content} */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                I am a master student in computer science at Khoury college at Northeastern University. I have experience in designing and building full-stack web-app and object-oriented program. I am profient in Python, Java, HTML/CSS/JavaScript and Node.Js. I enjoying solving algorithms problems and I love to be excelsior! 
              </p>
              <p className="text-lg text-textBase italic font-bold">
              I am looking for soft engineer interships and co-ops!  
              </p>
              <motion.button 
              whileTap={{scale:0.8}}
              className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span href="https://www.dropbox.com/s/nst8uipy9z9itwi/TUOXIN%20LI%20RESUME.pdf?dl=0" className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Resume</span>
              </motion.button>
            </div>
        </section>
            {/* Time line */}
            <section className="w-full">
              <VerticalTimeline>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2022 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoCodeWorking />}
              >
                <h3 className="vertical-timeline-element-title">Teaching Asssistant</h3>
                <h4 className="vertical-timeline-element-subtitle">Northeastern University</h4>
                <p>
                  Assisting professor to teach several topics such as discrete math, data structure and Python
                </p>
                <p>
                  Helping students debug their Python projects
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date=""
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoCodeWorking />}
              >
                <h3 className="vertical-timeline-element-title">Northeastern University</h3>
                <h4 className="vertical-timeline-element-subtitle">Master of Science in Computer Science</h4>
                <h4 className="vertical-timeline-element-subtitle">2022 - 2024  </h4>
                <p>
                GPA:4.00/4.00
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Apr 2019 - Aug 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoCodeWorking />}
              >
                <h3 className="vertical-timeline-element-title">China Unicom</h3>
                <h4 className="vertical-timeline-element-subtitle">Information Specialist</h4>
                <p>
                  Analyzing, managing and reporting company's information databases
                </p>
                <p>
                  accessing information on behalf of the company and the clients and reporting.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date=""
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoCodeWorking />}
              >
                <h3 className="vertical-timeline-element-title">University of Florida</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor in Economics && Computer Science</h4>
                <h4 className="vertical-timeline-element-subtitle">Graduated at 2021  </h4>
                <p>
                GPA:3.88/4.00
                </p>
              </VerticalTimelineElement>

              </VerticalTimeline>
            </section>
            {/* Project section */}
            <section className="flex flex-wrap items-center justify-evenly my-24 gap-4" id="projects">
              <div className="border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
                <p className="text-lg text-textBase font-medium uppercase">Yelp Camp</p>
                <img src={yelp} className="w-full h-full object-cover rounded-md my-4" alt='yelp'></img>
                <div className="flex flex-1 items-center justify-center">
                <p className="text-lg text-gray-300">
                  Technologies
                  <span className="block text-sm text-gray-500">
                    CSS/HTML/JavaScript, Node.JS, Express.JS, MongoDB
                  </span>
                </p>
              </div>
              </div>
              <div className="border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
                <p className="text-lg text-textBase font-medium uppercase">Order information System</p>
                <img src={order} className="w-full h-full object-cover rounded-md my-4" alt='coding Sharing'></img>
                <div className="flex flex-1 items-center justify-center">
                <p className="text-lg text-gray-300">
                  Technologies
                  <span className="block text-sm text-gray-500">
                    Java, SpringBoot, MongoDB, Vue, Axios,Vuex
                  </span>
                </p>
              </div>
              </div>
              <div className="border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
                <p className="text-lg text-textBase font-medium uppercase">Coding comment and sharing WebSite</p>
                <img src={web} className="w-full h-full object-cover rounded-md my-4" alt='order management System'></img>
                <div className="flex flex-1 items-center justify-center">
                <p className="text-lg text-gray-300">
                  Technologies
                  <span className="block text-sm text-gray-500">
                    CSS/HTML/JavaScript, Node.JS, AJAX, MongoDB
                  </span>
                </p>
              </div>
              </div>
            </section>
            {/* Contact Sec */}
            <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
              <p className="text-2xl text-gray-400 capitalize">Contact me</p>
              <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
                <a href="https://github.com/txli299" className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                  <IoLogoGithub className="text-textBase text-3xl cursor-pointer"></IoLogoGithub>
                  <p className="text-lg text-textBase">Github</p>
                </a>
              </div>
              <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/tuoxinli/" className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                  <IoLogoLinkedin className="text-textBase text-3xl cursor-pointer"></IoLogoLinkedin >
                  <p className="text-lg text-textBase">LinkedIn</p>
                </a>
              </div>
              <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
                <a href="mailto:li.tuox@northeastern.edu" className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                  <IoMailOpen className="text-textBase text-3xl cursor-pointer"></IoMailOpen>
                  <p className="text-lg text-textBase">Email me</p>
                </a>
              </div>
            </section>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
