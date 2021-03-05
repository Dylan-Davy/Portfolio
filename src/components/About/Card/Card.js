import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={styles['card']}>
            <div className={[styles['card__side'], styles['card__side--front']].join(' ')}>
                <h2 className={'header--secondary'}>{props.heading}</h2>
            </div>
            <div className={[styles['card__side'], styles['card__side--back']].join(' ')}>
                <h2 className={'header--secondary'}>{props.heading}</h2>
            </div>
        </div>
    )
}

export default Card;
