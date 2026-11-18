import React from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Menu,
  X,
  GraduationCap,
  Award,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react";
import {
  personalInfo,
  about,
  skills,
  projects,
  education,
  certificates,
} from "./data.js";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Certificates", "#certificates"],
    ["Contact", "#contact"],
  ];

  const validExternalLink = (url) =>
    url && !url.startsWith("YOUR_") && !url.startsWith("ADD_");

  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          Sonali Ainapure<span>.</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map(([label, link]) => (
            <a href={link} key={label} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav-contact">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Open to Software Development Opportunities
            </div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              {personalInfo.name}
              <span>.</span>
            </h1>
            <h2>{personalInfo.role}</h2>
            <p className="hero-description">{personalInfo.tagline}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowUpRight size={18} />
              </a>
              <a
                href={personalInfo.resume}
                className="btn btn-outline"
                download
              >
                Download Resume <Download size={17} />
              </a>
            </div>
            <div className="social-links">
              {validExternalLink(personalInfo.github) && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              )}
              {validExternalLink(personalInfo.linkedin) && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              )}
              {validExternalLink(personalInfo.email) && (
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail />
                </a>
              )}
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top">
              <span>DEVELOPER PROFILE</span>
              <Code2 size={20} />
            </div>
            <div className="avatar-circle">SA</div>
            <h3>{personalInfo.name}</h3>
            <p>Aspiring Software Developer</p>
            <div className="profile-divider" />
            <div className="profile-detail">
              <span>Education</span>
              <strong>M.Com IT – Pursuing</strong>
            </div>
            <div className="profile-detail">
              <span>Focus</span>
              <strong>Frontend & Full Stack</strong>
            </div>
            <div className="profile-detail">
              <span>Experience</span>
              <strong>Fresher</strong>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-icon">
              <UserRound size={42} />
            </div>
            <div>
              <h3>Building my journey in software development.</h3>
              <p>{about}</p>
              <div className="about-highlights">
                <div>
                  <Code2 />
                  <strong>Web Development</strong>
                  <span>Frontend & Backend</span>
                </div>
                <div>
                  <GraduationCap />
                  <strong>Education</strong>
                  <span>M.Com IT Pursuing</span>
                </div>
                <div>
                  <BriefcaseBusiness />
                  <strong>Career Goal</strong>
                  <span>Software Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>Technical Skills</h2>
            <p className="section-description">
              Technologies and tools I use while learning and building projects.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">MY RECENT WORK</p>
            <h2>Featured Projects</h2>
            <p className="section-description">
              Practical projects where I apply my development knowledge.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-number">0{index + 1}</span>
                  <Code2 size={24} />
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <h4>Key Features</h4>
                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="technology-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-links">
                  {validExternalLink(project.github) && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={17} /> GitHub
                    </a>
                  )}
                  {validExternalLink(project.live) && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
            <h2>Education</h2>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={item.degree}>
                <div className="timeline-icon">
                  <GraduationCap size={21} />
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.duration}</span>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  {item.university && <p>{item.university}</p>}
                  <strong>{item.result}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section certificates-section" id="certificates">
          <div className="section-heading">
            <p className="eyebrow">CONTINUOUS LEARNING</p>
            <h2>Certifications</h2>
          </div>
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <div className="certificate-card" key={certificate.name}>
                <div className="certificate-icon">
                  <Award size={27} />
                </div>
                <h3>{certificate.name}</h3>
                <p className="certificate-provider">{certificate.provider}</p>
                <p>{certificate.description}</p>
                {validExternalLink(certificate.link) && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Have an opportunity in mind?</h2>
            <p>
              I am looking forward to connecting with people and exploring
              opportunities in software development.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-light">
              Contact Me <Mail size={17} />
            </a>
            <div className="contact-details">
              {validExternalLink(personalInfo.email) && (
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail size={17} />
                  {personalInfo.email}
                </a>
              )}
              {validExternalLink(personalInfo.linkedin) && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} />
                  LinkedIn
                </a>
              )}
              {validExternalLink(personalInfo.github) && (
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  <Github size={17} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
