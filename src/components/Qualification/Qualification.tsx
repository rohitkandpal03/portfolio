import React, { useState } from "react";
import styles from "./Qualification.module.css";

interface Education {
  title: string;
  institution: string;
  years: string;
}

interface Experience {
  title: string;
  company: string;
  years: string;
}

const Qualification: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const education: Education[] = [
    {
      title: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Amrapali Institute Of Technology And Science, Haldwani",
      years: "2016 - 2020",
    },
  ];

  const experience: Experience[] = [
    {
      title: "Senior Software Engineer",
      company: "Webuters Technologies Pvt. Ltd., Noida",
      years: "Feb 2022 - Present",
    },
    {
      title: "Software Engineer",
      company: "Rubico IT Private Limited, Haridwar",
      years: "Nov 2020 - Feb 2022",
    },
    {
      title: "Software Engineer (Trainee)",
      company: "Qualitest Infotech Pvt. Ltd., Noida",
      years: "Jan 2020 - Oct 2020",
    },
  ];

  return (
    <section className={styles.qualification} id="qualification">
      <h2 className="section-title">Qualification</h2>
      <h3 className={styles.sectionSubtitle}>My personal journey</h3>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "education" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
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
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          Education
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "experience" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
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
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          Experience
        </button>
      </div>

      <div className={styles.timeline}>
        {activeTab === "education"
          ? education.map((item, index) => (
              <div className={styles.timelineItem} key={index}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineSubtitle}>{item.institution}</p>
                  <div className={styles.timelineDate}>
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {item.years}
                  </div>
                </div>
              </div>
            ))
          : experience.map((item, index) => (
              <div className={styles.timelineItem} key={index}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineSubtitle}>{item.company}</p>
                  <div className={styles.timelineDate}>
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {item.years}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Qualification;
