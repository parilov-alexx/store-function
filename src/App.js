import './App.css';

function Store (item) {
  console.log(item);
  return <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item.item} />
      </div>
    </div>
}

function ShopItemFunc(item) {
  const newIitem = item.item;
  return <div className="main-content">
      <h2>{newIitem.brand}</h2>
      <h1>{newIitem.title}</h1>
      <h3>{newIitem.description}</h3>
      <div className="description">
      {newIitem.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{newIitem.currency}{ (newIitem.price).toFixed(2) }</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
}

export default Store;
