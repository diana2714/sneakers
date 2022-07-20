import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js';
 

function App() {
  const[items, setItems ] = React.useState([]); 
  const[cartItems, setCartItems ] = React.useState([]);
  const[favorites, setFavorites ] = React.useState([]);  
  const[searchValue, setSearchValue ] = React.useState(''); 
  const [cartOpened, setCartOpened] = React.useState(false); 

  React.useEffect(() => {
      axios.get('https://62cbe8c98042b16aa7c4db5c.mockapi.io/items').then((res) =>{
        setItems(res.data);
      });
      axios.get('https://62cbe8c98042b16aa7c4db5c.mockapi.io/cart').then((res) =>{
      setCartItems(res.data);
      });
  },[]);

  const onAddToCart = (obj) => {
    axios.post('https://62cbe8c98042b16aa7c4db5c.mockapi.io/cart', obj);
    setCartItems((prev) =>[...prev, obj ]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete (`https://62cbe8c98042b16aa7c4db5c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddFavorite = (obj) => {
    axios.post('https://62cbe8c98042b16aa7c4db5c.mockapi.io/favorites', obj);
    setFavorites((prev) =>[...prev, obj ]);
  };

  const onSearchChangeInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
  <div className="wrapper"> 
    {cartOpened && 
     <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveFromCart}/>}
    <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content"> 
        <div className="Searching"> 
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block">
            <img className="searchIcon" src="/img/search.svg" alt="Search"/>
            {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="img/btn-remove.svg" alt="Clear"/>}
            <input onChange={onSearchChangeInput} value={searchValue} placeholder="Поиск..."/> 
          </div>
        </div>

        <div className="Sneakers"> 
        {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
              <Card 
              key ={index}
              title={item.title}
              price={item.price } 
              imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddFavorite(obj)} 
              onPlus={(obj)=> onAddToCart(obj)} 
              />  
          ))}
        </div> 
      </div>
  </div>
  );
}

export default App;
