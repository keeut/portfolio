import React from 'react';
import TechStack from './techStack/techStack';
import styles from './skills.module.css'
import Title from '../title/title';
const Skills = (props) => {
    return(
       <article className={styles.article}>
           <Title name='SKILLS'/>
            <div className={styles.container}>
                <div className={styles.skills_container}>
                    <div className={styles.title}>front-end
                    </div>
                    <div className={styles.frontend_skills}></div>
                </div>
                <div className={styles.skills_container}>
                    <div className={styles.title}>back-end
                    </div>
                    <div className={styles.backend_skills}></div>
                </div>
                <div className={styles.skills_container}>
                    <div className={styles.title}>deployment
                    </div>
                    <div className={styles.frontend_skills}></div>
                </div>
                
                
            </div>
        </article>     
    )};

export default Skills;