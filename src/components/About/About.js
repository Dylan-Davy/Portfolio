import React from 'react';
import styles from './About.module.scss';
import Card from './Card/Card';

const About = (props) => {
    return (
        <div id="About" className={styles.about}>
            <h1 className={'header--primary'}>About</h1>
            <div className={styles['about__content']}>
                <Card heading='Card 1' />
                <Card heading='Card 2' />
                <Card heading='Card 3' />
            </div>
        </div>
    )
}

export default About;