import React from 'react';
import styles from './Card.module.scss';

function Card({title, imageUrl, price, onFavorite, onPlus}){
    const [isAdded, setIsAdded ] = React.useState(false);
    const [isFavorite, setIsFavorite ] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({title, imageUrl, price});
        setIsFavorite(!isFavorite);
    };

    return(
        <div className={styles.card}> 
            <div className={styles.favorite} onClick={onClickFavorite}> 
                <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked"/>
            </div>
            <img className={styles.image_of_sneakers} width={133} height={112}src= {imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className={styles.cardBottom}> 
                <div className={styles.cost}> 
                <span>Цена:</span>
                <b>{price} руб.</b>
                </div>
                <div className={styles.plus} onClick={onClickPlus}>
                <img className={isAdded ? styles.icon_checked : styles.icon_plus } src={isAdded ?  "/img/btn_checked.svg" : "/img/plus.svg"} alt="Plus"/>
                </div>
                
            </div>
    </div>
    );
}

export default Card;

