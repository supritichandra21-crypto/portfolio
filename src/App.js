import './App.css';

const profile = {
  name: 'Supriti Chandra',
  title: 'MSc Physics Student | Aspiring Research Scientist',
  email: 'aarav.mehta.physics@gmail.com',
  phone: '+91 9876543210',
  location: 'Medinipur, India',
  linkedIn: 'https://linkedin.com/in/aarav-mehta',
  github: 'https://github.com/aarav-physics',
  portfolio: 'http://Krishna:1514',
};

const education = [
  {
    degree: 'MSc in Physics',
    institution: 'Medinipur College (Autonomous)',
    year: '2024 - Present',
    subjects: ['Quantum Mechanics', 'Classical Mechanics', 'Electrodynamics', 'Statistical Physics'],
  },
  {
    degree: 'BSc in Physics (Honours)',
    institution: 'Medinipur College (Autonomous)',
    year: '2021 - 2024',
    subjects: [],
  },
];

const skills = [
  {
    group: 'Technical Skills',
    items: ['Python', 'C++', 'MATLAB', 'Basic React', 'HTML/CSS'],
  },
  {
    group: 'Physics Tools',
    items: ['LaTeX', 'Origin', 'Wolfram Mathematica'],
  },
  {
    group: 'Soft Skills',
    items: ['Analytical Thinking', 'Problem-solving', 'Communication', 'Time Management'],
  },
];

const projects = [
  {
    name: 'Quantum Particle in a Box Simulation',
    description: 'Simulated the wavefunction and probability density of a particle in a 1D box.',
    tools: ['Python', 'NumPy', 'Matplotlib'],
    outcome: 'Strengthened understanding of quantum boundary conditions and eigenvalues.',
  },
  {
    name: 'RC Circuit Analysis',
    description: 'Studied charging and discharging behavior of capacitors experimentally and theoretically.',
    tools: ['MATLAB', 'Lab Instruments'],
    outcome: 'Verified theoretical results with experimental data.',
  },
  {
    name: 'Personal Portfolio Website',
    description: 'Built a responsive personal website to showcase academic work and projects.',
    tools: ['React', 'Tailwind CSS'],
    outcome: 'Created a professional online presence.',
  },
];

const achievements = [
  'Secured top 10% rank in undergraduate physics program',
  'Completed multiple academic projects with distinction',
  'Participated in inter-college science competitions',
];

const certifications = ['Python Programming for Beginners (Coursera)', 'Introduction to Data Analysis (Udemy)'];

const interests = ['Quantum Physics', 'Space Science', 'Scientific Computing', 'Teaching & Mentoring'];

const navItems = [
  ['About', '#about'],
  ['Equation', '#signature-equation'],
  ['Education', '#education'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

function App() {
  const heroImage = `${process.env.PUBLIC_URL}/physics-hero.png`;

  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          SC
        </a>
        <nav className="nav-links">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={heroImage} alt="Abstract physics visualization with waves and particle traces" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">MSc Physics Student</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-copy">
              I explore theoretical and applied physics through simulations, experiments, and clear teaching.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                <span aria-hidden="true">@</span>
                Email
              </a>
              <a className="button secondary" href="#projects">
                <span aria-hidden="true">-></span>
                View Projects
              </a>
            </div>
          </div>
        </section>

        <section className="snapshot" aria-label="Portfolio highlights">
          <article>
            <span>Current Degree</span>
            <strong>MSc Physics</strong>
          </article>
          <article>
            <span>Projects</span>
            <strong>Simulation, circuits, web</strong>
          </article>
          <article>
            <span>Experience</span>
            <strong>Physics tutor since 2023</strong>
          </article>
          <article>
            <span>Location</span>
            <strong>{profile.location}</strong>
          </article>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2 id="about-title">Curious about the rules behind the universe.</h2>
          </div>
          <div className="about-grid">
            <p>
              I am an enthusiastic MSc Physics student with a strong curiosity about the fundamental principles
              governing the universe. I enjoy exploring complex theories and translating them into practical
              applications through simulations and computational tools.
            </p>
            <div className="focus-panel">
              <h3>Academic Interests</h3>
              <div className="tag-list">
                {interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="equation-section" id="signature-equation" aria-labelledby="equation-title">
          <div className="equation-copy">
            <p className="eyebrow">Signature Equation</p>
            <h2 id="equation-title">Schrodinger Equation</h2>
            <p>
              A compact reminder of the quantum idea that fascinates me most: the state of a system evolves
              with time, and mathematics gives that evolution a precise language.
            </p>
          </div>
          <article className="equation-card" aria-label="Time-dependent Schrodinger equation">
            <p className="equation-kicker">Quantum Mechanics</p>
            <div className="equation-line" aria-hidden="true">
              <span>i&hbar;</span>
              <span className="fraction">
                <span>&part;&Psi;</span>
                <span>&part;t</span>
              </span>
              <span>=</span>
              <span>H&#770;&Psi;</span>
            </div>
            <p className="equation-note">Time-dependent form for a quantum state.</p>
          </article>
        </section>

        <section className="section band" id="education" aria-labelledby="education-title">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2 id="education-title">Physics training grounded in core theory.</h2>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.degree}>
                <p className="timeline-year">{item.year}</p>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  {item.subjects.length > 0 && (
                    <div className="subject-list">
                      {item.subjects.map((subject) => (
                        <span key={subject}>{subject}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title">Tools for research, computation, and communication.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.group}>
                <h3>{skill.group}</h3>
                <div className="tag-list compact">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section band" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2 id="projects-title">Academic work with measurable learning outcomes.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <p className="project-index">0{index + 1}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tool-row">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <p className="outcome">{project.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-column" aria-label="Experience and achievements">
          <article className="feature-block">
            <p className="eyebrow">Experience</p>
            <h2>Physics Tutor</h2>
            <p className="muted">Independent, part-time | 2023 - Present</p>
            <p>
              Teaching high school students, simplifying physics concepts, and preparing clear study materials for
              exam-focused learning.
            </p>
          </article>

          <article className="feature-block">
            <p className="eyebrow">Achievements</p>
            <ul className="clean-list">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section band detail-grid" aria-label="Certifications and declaration">
          <article>
            <p className="eyebrow">Certifications</p>
            <ul className="clean-list">
              {certifications.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className="eyebrow">Declaration</p>
            <p>I hereby declare that the above information is true to the best of my knowledge.</p>
          </article>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Available for academic collaboration, tutoring, and research conversations.</h2>
        </div>
        <div className="contact-links" aria-label="Contact links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.portfolio} target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
