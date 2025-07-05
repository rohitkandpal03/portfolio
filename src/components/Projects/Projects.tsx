import React, { useState } from "react";
import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Studio.ai",
      description:
        "Designed and implemented the project from scratch, including authentication features such as email-based magic link login, Google OAuth login, and secure logout functionality. Developed advanced pagination techniques, real-time content editing inside an iframe, and a custom AI-powered chat assistant for content creation. Collaborated closely with backend and QA teams to ensure a seamless user experience.",
      image: "/docs/studioAi.png",
      category: "AI Content Platform",
      technologies: [
        "React",
        "React Router",
        "Google OAuth",
        "AI",
        "TypeScript",
      ],
      demoLink: "https://studioai.officeiq.digital",
      codeLink: "",
    },
    {
      id: 2,
      title: "Office-IQ Document Intelligence",
      description:
        "Revolutionary document management application enabling intelligent interaction with documents through multiple data sources. Features advanced AI processing capabilities and seamless user experience.",
      image: "/docs/officeiqAi.png",
      category: "Enterprise Application",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "React ToolTip",
        "React Markdown",
      ],
      demoLink: "https://www.officeiq.ai/",
      codeLink: "",
    },
    {
      id: 3,
      title: "Bajaj Finserv Health Limited",
      description:
        "Developed user interfaces for web applications to streamline hospital operations. Translated design wireframes into responsive, performant code. Improved usability and user experience for hospital staff and patients. Implemented optimization techniques and conducted thorough testing, resulting in a 25% increase in user engagement.",
      image: "/docs/bajajFinservHealth.png",
      category: "Healthcare Solution",
      technologies: [
        "Next.js",
        "Typescript",
        "Redis",
        "React Query",
        "Emotion CSS",
        "Material UI",
        "Performance Optimization",
      ],
      demoLink: "https://www.bajajfinservhealth.in/hospitals",
      codeLink: "",
    },
    {
      id: 4,
      title: "Virtual Combine Sports Platform",
      description:
        "Comprehensive sports platform connecting coaches and athletes with team management, performance tracking, and national leaderboard functionality. Built for scalability and real-time data synchronization.",
      image: "/docs/virtualCombine.png",
      category: "Sports Management",
      technologies: ["React.js", "JavaScript", "Performance Tracking"],
      demoLink: "https://virtualcombine.com",
      codeLink: "",
    },
  ];

  const [filteredProjects] = useState<Project[]>(projects);

  // useEffect(() => {
  //   if (activeCategory === "All") {
  //     setFilteredProjects(projects);
  //   } else {
  //     setFilteredProjects(
  //       projects.filter((project) => project.category === activeCategory)
  //     );
  //   }
  // }, [activeCategory, projects]);

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      {/* <h3 className={styles.sectionSubtitle}>My recent work</h3> */}

      {/* <div className={styles.categories}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryBtn} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <div className={styles.projectImg}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectInfo}>
              <span className={styles.projectCategory}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTech}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {project.codeLink ? (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                ) : project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
