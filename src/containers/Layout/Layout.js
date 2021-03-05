import React from 'react';
import styles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div className={styles.Content}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout
