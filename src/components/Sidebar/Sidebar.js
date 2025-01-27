import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import Language from '../Language';
import PropTypes from 'prop-types';
import styleSidebar from './Sidebar.module.css';
import myPhoto from '../../assets/img/photo.jpg';
import sv from '../../assets/CVFrontend Developer.pdf';

function Sidebar({ contacts, techSkills, softSkills, language, langCv }) {
  return (
    <aside className={styleSidebar.sidebar}>
      <div className={styleSidebar.section}>
        <img
          src={myPhoto}
          alt="Olena Izotova(Gingembre)"
          className={styleSidebar.photo}
        />
      </div>
      <div className={styleSidebar.section}>
        <h3 className={styleSidebar.title}>Contacts</h3>
        <ul>
          {contacts.map(({ id, link, text, text_fr }) => (
            <Contacts key={id} link={link} text={langCv ? text : text_fr} />
          ))}
        </ul>
      </div>
      <div className={styleSidebar.section}>
        <h3 className={styleSidebar.title}>
          {langCv ? 'Tech Skills' : 'Compétences techniques'}
        </h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={styleSidebar.section}>
        <h3 className={styleSidebar.title}>
          {langCv ? 'Soft Skills' : 'Compétences générales'}
        </h3>
        <ul>
          {softSkills.map(({ id, label, label_fr }) => (
            <SoftSkills key={id} label={langCv ? label : label_fr} />
          ))}
        </ul>
      </div>
      <div className={styleSidebar.section}>
        <h3 className={styleSidebar.title}>
          {' '}
          {langCv ? 'Language' : 'Langue'}
        </h3>
        <ul>
          {language.map(({ id, label, label_fr }) => (
            <Language key={id} label={langCv ? label : label_fr} />
          ))}
        </ul>
      </div>

      <div className={styleSidebar.section}>
        <a
          className={styleSidebar.link}
          href={sv}
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          {langCv ? 'Download CV' : 'Télécharger le CV'}
        </a>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
