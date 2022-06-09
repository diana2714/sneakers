function App() {
  return (
  <div className="wrapper"> 
    <header> 
      <div className="headerLeft"> 
        <img width={40} height={40} src= "/img/logo.png" />
        <div className="headerInfo">
        <h3 className="Rs">React Sneackers</h3>
        <p className="store">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
          <li className="cart">
          <img width={18} height={18} src= "/img/cart.svg" />
            <span> 1205 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src= "/img/user.svg" />
          </li>
        </ul>
    </header>
  <div className="content"> 
      <h1 className="heading">Все кроссовки</h1>

  <div className="Sneakers"> 
    <div className="card"> 
          <img className="image_of_sneakers" width={133} height={112}src= "/img/sneakers/1.jpg" alt="Sneakers"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede </h5>
          <div className="cardBottom "> 
            <div className="cost"> 
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
              <button className="button">
                <img width={11} height={11} src= "/img/plus.svg" alt="Plus"/>
              </button>
          </div>
    </div>
    <div className="card"> 
          <img className="image_of_sneakers" width={133} height={112 }src= "/img/sneakers/2.jpg" alt="Sneakers"/>
          <h5>Мужские Кроссовки Nike Air Max 270 </h5>
          <div className="cardBottom "> 
            <div className="cost"> 
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
              <button className="button">
                <img width={11} height={11} src= "/img/plus.svg" alt="Plus"/>
              </button>
          </div>
    </div>
    <div className="card"> 
          <img className="image_of_sneakers" width={133} height={112}src= "/img/sneakers/3.jpg" alt="Sneakers"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom "> 
            <div className="cost"> 
              <span>Цена:</span>
              <b>8 499 руб.</b>
            </div>
              <button className="button">
                <img width={11} height={11} src= "/img/plus.svg" alt="Plus"/>
              </button>
          </div>
    </div>
    <div className="card"> 
          <img className="image_of_sneakers" width={133} height={112 }src= "/img/sneakers/4.jpg" alt="Sneakers"/>
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="cardBottom "> 
            <div className="cost"> 
              <span>Цена:</span>
              <b>8 999 руб.</b>
            </div>
              <button className="button">
                <img width={11} height={11} src= "/img/plus.svg" alt="Plus"/>
              </button>
          </div>
    </div>
  </div>
  </div>
</div>
  );
}

export default App;
