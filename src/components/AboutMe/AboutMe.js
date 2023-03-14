import Projects from '../Projects';
import Experience from '../Experience';
import Education from '../Education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, experience, education }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2 className={s.profession}>Front-end Developer</h2>
        <h1 className={s.name}>Olena Izotova(Gingembre)</h1>
        <p className={s.description}>
          I am a Front-end Developer looking for an interesting opportunity. I
          am passionate about constantly learning new technologies and I like
          working as part of a team to create user-friendly web applications. I
          have sound knowledge of HTML5, CSS3, React JavaScript. I speak
          intermediate French and pre-intermediate English. I am eager to
          develop skills in a dynamic environment and to contribute to the
          success of the company. Coding, constant learning and working towards
          a goal are important for me.
        </p>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Projects</h3>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Teamwork</span> projects
        </h4>
        <ol className={s.list}>
          {commandProjects.map(({ id, label, link, linkGitHub, tech }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              linkGitHub={linkGitHub}
              tech={tech}
            />
          ))}
        </ol>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>My personal</span> projects
        </h4>
        <ol>
          {ownProjects.map(({ id, label, link, linkGitHub, tech }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              linkGitHub={linkGitHub}
              tech={tech}
            />
          ))}
        </ol>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          {experience.map(
            ({
              id,
              profession,
              company,
              description,
              link,
              time,
              country,
              duties,
            }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                description={description}
                link={link}
                time={time}
                country={country}
                duties={duties}
              />
            )
          )}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Education</h3>
        <ul>
          {education.map(({ id, university, label, time, link }) => (
            <Education
              key={id}
              university={university}
              label={label}
              time={time}
              link={link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;
