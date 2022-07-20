function Drawer({onClose, onRemove, items = []}){
    return(
        <div className="overlay">
            <div className="drawer">
                <h2>
                    Корзина <img onClick={onClose} className="removeBtn" src="img/btn-remove.svg" alt="Remove"/>
                </h2>

                    {items.length > 0 ?(
                        <div>
                            <div className="items">
                            {items.map((obj) => (
                            <div className="cartItem">
                            <div 
                            style={{ backgroundImage: `url(${obj.imageUrl})` }} 
                            className="cartItemImg"></div>
            
                            <div className="cartItemText">
                            <p>{obj.title}</p>
                            <b>{obj.price} руб.</b>
                            </div>
                            <img 
                            onClick={() => onRemove(obj.id)} 
                            className="removeBtn" 
                            src="img/btn-remove.svg" 
                            alt="Remove"/>
                            </div>                 
                        ))}
                        </div>
                        <div className="cartTotalBlock">
                        <ul>
                            <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                            </li>
                            <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button className="greenButton">
                            Оформить заказ
                            <img src="img/arrow.svg" alt="Arrow"/>
                        </button>
                        </div>
                    </div>

                ) : (
                    <div className="cartEmpty">
                    <img className="emptyCartImg" src="/img/empty-cart.jpg" alt="Empty cart"/>
                    <h2>Корзина пустая</h2>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button onClick={onClose} className="greenButton">
                        <img src="/img/arrow.svg" alt="Arrow"/>
                        Вернуться назад
                    </button>
                </div>
                )}



    

        </div>
    </div>
    );
}

export default Drawer;