import React from 'react';
import styles from './projects.module.css'
import Title from '../title/title';

const Projects = () => {
    return (
        <article className={styles.article}>
            <Title name = 'PROJECTS'/>
            <div className={styles.container}></div>

            
        </article>
    );
};

export default Projects;