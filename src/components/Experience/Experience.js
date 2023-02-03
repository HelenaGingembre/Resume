import s from './Experience.module.css';

function Experience({
  profession,
  company,
  description,
  link,
  time,
  country,
  duties,
}) {
  return (
    <li className={s.item}>
      <h4 className={s.title}>
        {profession} <span> </span>
        {/* <span className={s.company} link={link}>
          {company} 
        </span>*/}
        <a className={s.company} href={link} target="_blank" rel="noreferrer">
          {company}
        </a>
        <span className={s.description}>{description}</span>
      </h4>

      <span className={s.time}>
        {time}
        <span className={s.divider}> |</span> {country}
      </span>
      <ul>
        {duties.map(({ id, duty }) => (
          <li key={id} className={s.duty}>
            {duty}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Experience;
