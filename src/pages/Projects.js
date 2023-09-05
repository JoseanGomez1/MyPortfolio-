import { useState, useEffect } from "react";

import styles from './projects.css'; 


function Projects(props) {
 
  const [projects, setProjects] = useState(null);

 
  const getProjectsData = async () => {


    const response = await fetch("./projects.json");

		
    const data = await response.json();

		
    setProjects(data);

  };


  useEffect(() => getProjectsData(), []);


  const loaded = () => {
    return projects.map((project) => (
      <div key={project.id}>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} className={styles.smallImage} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live site</button>
        </a>
      </div>
    ));
  };
  

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;