import React from 'react';
import Navigation from "../../components/Navigation/Navigation";
import styles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navigation />
            <div className={styles.Content}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout
