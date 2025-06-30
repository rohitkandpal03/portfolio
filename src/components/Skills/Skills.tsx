import React from "react";
import styles from "./Skills.module.css";

interface Skill {
  name: string;
  level: string;
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "React", level: "Advanced" },
    { name: "Redux", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", level: "Intermidate" },
    { name: "Firebase", level: "Advanced" },
  ];

  const toolsSkills: Skill[] = [
    { name: "Git", level: "Advanced" },
    { name: "VSCode", level: "Advanced" },
    { name: "Postman", level: "Intermediate" },
    { name: "JIRA", level: "Intermediate" },
  ];

  const teamSkills: Skill[] = [
    { name: "Agile SDLC", level: "Advanced" },
    { name: "Sprint Planning", level: "Advanced" },
    { name: "R&D", level: "Advanced" },
    { name: "Requirement Gathering", level: "Advanced" },
  ];

  const softSkills: Skill[] = [
    { name: "Communication", level: "Advanced" },
    { name: "Teamwork", level: "Advanced" },
    { name: "Problem Solving", level: "Advanced" },
    { name: "Time Management", level: "Advanced" },
  ];

  return (
    <section className={styles.skills} id="skills">
      <h2 className="section-title">Skills</h2>
      <h3 className={styles.sectionSubtitle}>My technical level</h3>

      <div className={styles.skillsContainer}>
        <div className={styles.skillsCard}>
          <h3 className={styles.skillsTitle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Frontend Development
          </h3>
          <div className={styles.skillsList}>
            {frontendSkills.map((skill, index) => (
              <div className={styles.skillItem} key={index}>
                <div className={styles.skillName}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {skill.name}
                </div>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillsCard}>
          <h3 className={styles.skillsTitle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            Backend Development
          </h3>
          <div className={styles.skillsList}>
            {backendSkills.map((skill, index) => (
              <div className={styles.skillItem} key={index}>
                <div className={styles.skillName}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {skill.name}
                </div>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillsCard}>
          <h3 className={styles.skillsTitle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Tools
          </h3>
          <div className={styles.skillsList}>
            {toolsSkills.map((skill, index) => (
              <div className={styles.skillItem} key={index}>
                <div className={styles.skillName}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {skill.name}
                </div>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillsCard}>
          <h3 className={styles.skillsTitle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Team Activities
          </h3>
          <div className={styles.skillsList}>
            {teamSkills.map((skill, index) => (
              <div className={styles.skillItem} key={index}>
                <div className={styles.skillName}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {skill.name}
                </div>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillsCard}>
          <h3 className={styles.skillsTitle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            Soft Skills
          </h3>
          <div className={styles.skillsList}>
            {softSkills.map((skill, index) => (
              <div className={styles.skillItem} key={index}>
                <div className={styles.skillName}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {skill.name}
                </div>
                <span className={styles.skillLevel}>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
