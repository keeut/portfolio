import React from 'react';
import styles from './intro.module.css'


const Intro = (props) => {
    
    return(
    <div className={styles.container}>
        <div className={styles.title}>
            <div>김태남</div>
            <div>신입 웹 개발자</div>
            <div>포트폴리오</div>
        </div>
        <div className={styles.explain}>마우스를 올려주세요</div>

        <div className={styles.container_circle}>
            <div className={styles.box_1}>who are you</div>
            <div className={styles.box_2}>skills</div>
            <div className={styles.box_3}>projects</div>
            <div className={styles.box_4}>more</div>
            <div className={styles.circle}>
        </div>
        </div>
    </div>
        )};

export default Intro;