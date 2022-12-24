import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPhp,
  DiSass
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "php", name: "php", icon: <DiPhp /> },
  { id: "sass", name: "sass", icon: <DiSass/> }
];

const TechnologiesContainer = () => {
  return <section className="technologies-container">
  <h2>Tecnologias</h2>
  <div className="technologies-grid">
    {technologies.map((tech) => (
      <div className="technology-card" id={tech.id} key={tech.id}>
        {tech.icon}
        <div className="technology-info">
          <h3>{tech.name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    ))}
  </div>
</section>
}


export default TechnologiesContainer