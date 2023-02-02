import s from './Language.module.css';

function Language({ label }) {
  return (
    <li className={s.item}>
      <span className={s.text}>{label}</span>
    </li>
  );
}

export default Language;
