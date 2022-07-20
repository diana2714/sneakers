function Header(props){
    return(
        <header> 
        <div className="headerLeft"> 
          <img width={40} height={40} src= "/img/logo.png" alt="logo" />
          <div className="headerInfo">
          <h3 className="Rs">React Sneackers</h3>
          <p className="store">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
            <li onClick={props.onClickCart} className="cart">
            <img width={18} height={18} src= "/img/cart.svg" alt="logotype" />
              <span> 1205 руб.</span>
            </li>
            <li>
            <img width={18} height={18} src= "/img/user.svg" alt="user"/>
            </li>
          </ul>
      </header>
    );
}

export default Header; 