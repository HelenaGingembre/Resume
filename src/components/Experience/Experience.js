import s from './Experience.module.css';

function Experience({
  profession,
  profession_fr,
  company,
  description,
  link,
  time,
  country,
  duties,
  lang,
}) {
  return (
    <li className={s.item}>
      <h4 className={s.title}>
        {lang ? profession : profession_fr} <span> </span>
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
        {duties.map(({ id, duty, duty_fr }) => (
          <li key={id} className={s.duty}>
            {lang ? duty : duty_fr}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Experience;
