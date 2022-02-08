import React from 'react';
import styles from './title.module.css'
const Title = (props) => (

    <div className={styles.title}>{props.name}</div>
    );

export default Title;