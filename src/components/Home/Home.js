import React from 'react';
import styles from './Home.module.scss';

const Home = (props) => {
    return (
        <div className={styles.Home}>
            <div className={styles.Title}>
                <h2>This webpage will be automatically updated when changes are made to the main branch on <a className={styles.Link} href="https://github.com/Dylan-Davy/portfolio">Github</a>.</h2>
            </div>
        </div>
    )
}

export default Home;