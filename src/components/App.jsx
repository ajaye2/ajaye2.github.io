import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Education from './Education/Education';
import WorkExperience from './WorkExperience/WorkExperience';
import Certificates from './Certificates/Certificates';
import Blogs from './Blogs/Blogs';


import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, educationData, certificatesData, workExperienceData, contactData, footerData, blogsData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [education, setEducation] = useState([]);
  const [workExperience, setworkExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setEducation([...educationData]);
    setworkExperience([...workExperienceData]);
    setProjects([...projectsData]);
    setBlogs([...blogsData]);
    setCertificates([...certificatesData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, education, certificates, workExperience, blogs, contact, footer }}>
      <Hero />
      <About />
      <Education />     {/* reduce image size */}
      <WorkExperience /> {/* reduce image size */}
      {/* Publications */} {/* Add details  */}
      <Projects />  {/* Add details  */}
      <Certificates /> {/* Certificates */}
      <Blogs />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
