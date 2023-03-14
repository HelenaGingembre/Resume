import s from './Projects.module.css';

function Projects({ label, link, tech, linkGitHub }) {
  return (
    <li className={s.item}>
      <div className={s.flex}>
        <div>
          <a className={s.link} href={link} target="_blank" rel="noreferrer">
            {label}
          </a>
          <a
            className={s.link2}
            href={linkGitHub}
            target="_blank"
            rel="noreferrer"
          >
            {!linkGitHub ? '' : '(GitHub)'}
          </a>
        </div>
        <span>
          <b>[</b> <span className={s.name}>{tech}</span> <b>]</b>
        </span>
      </div>
    </li>
  );
}

export default Projects;
