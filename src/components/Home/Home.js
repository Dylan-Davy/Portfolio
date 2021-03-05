import React from 'react';
import styles from './Home.module.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import mail from '../../assets/mail.svg';

const Home = (props) => {
    return (
        <div className={styles['home']}>
            <h2>This webpage will be automatically updated when changes are made to the main branch on <a className='link link--text' href="https://github.com/Dylan-Davy/portfolio" target="_blank">Github</a>.</h2>
            <div className={styles['home__title']}>
                <div className={styles['home__row']}>
                    <p className={styles['home__blurb']}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className={styles['home__content']}>
                        <div className={styles['home__content-circle']}>
                            <p className={styles['home__content-name']}>Dylan Davy</p>
                        </div>
                        <a href="https://github.com/Dylan-Davy" target="_blank" className={[styles['home__link--1'], 'link link--svg'].join(' ')}><img src={github} alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/dylan-davy-a9071717a/" target="_blank" className={[styles['home__link--2'], 'link link--svg'].join(' ')}><img src={linkedin} alt="Linkedin" /></a>
                        <a href="mailto:dylandavy01@gmail.com" target="_blank" className={[styles['home__link--3'], 'link link--svg'].join(' ')}><img src={mail} alt="Mail" /></a>
                    </div>
                </div>
                <div className={styles['home__row']}>
                    <a href="#About" className={[styles['home__link'], 'link link--text'].join(' ')}>About</a>
                    <a href="#Projects" className={[styles['home__link'], 'link link--text'].join(' ')}>Projects</a>
                    <a href="#Skills" className={[styles['home__link'], 'link link--text'].join(' ')}>Skills</a>
                </div>
            </div>
        </div>
    )
}

export default Home;