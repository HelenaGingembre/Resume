import Projects from '../Projects';
import Experience from '../Experience';
import Education from '../Education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({
  commandProjects,
  ownProjects,
  experience,
  education,
  onClick,
  langCv,
}) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h1 className={s.profession}>
          {langCv ? 'Front-end Developer' : 'Front-end développeur'}
        </h1>
        <button href="/" className={s.link_btn} onClick={onClick}>
          {langCv ? 'FR' : 'EN'}
        </button>
        <h2 className={s.name}>Olena Izotova (Gingembre)</h2>

        {langCv ? (
          <p className={s.description}>
            I am a Front-end Developer looking for an interesting opportunity. I
            am passionate about constantly learning new technologies and I like
            working as part of a team to create user-friendly web applications.
            I have sound knowledge of HTML5, CSS3, React JavaScript. I speak
            French and English(pre-intermediate). I am eager to develop skills
            in a dynamic environment and to contribute to the success of the
            company. Coding, constant learning and working towards a goal are
            important for me.
          </p>
        ) : (
          <p className={s.description}>
            Je suis un développeur Front-end à la recherche d'une opportunité
            intéressante. Je suis passionné par l'apprentissage constant de
            nouvelles technologies et j'aime travailler en équipe pour créer des
            applications web conviviales. J'ai de bonnes connaissances en HTML5,
            CSS3, React JavaScript. Je parle français et anglais
            (pré-intermédiaire). Je voudrais de développer des compétences dans
            un environnement dynamique et de contribuer au succès de
            l'entreprise. Le codage, l'apprentissage constant et le travail vers
            un objectif sont importants pour moi..
          </p>
        )}
      </div>
      <div className={s.section}>
        <h3 className={s.title}>{langCv ? 'Projects' : 'Projets'}</h3>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>
            {langCv ? 'Teamwork projects' : 'Projets en équipe'}
          </span>
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
          <span className={s.typeProject}>
            {langCv ? 'My personal projects' : 'Mes projets personnels'}
          </span>
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
        <h3 className={s.title}>
          {langCv ? 'Work Experience' : 'Expérience professionnelle'}
        </h3>
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
                lang={langCv}
              />
            )
          )}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}> {langCv ? 'Education' : 'Éducation'}</h3>
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
