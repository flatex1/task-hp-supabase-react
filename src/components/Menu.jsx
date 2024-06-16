import '../assets/css/main.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu-text">
          <h2 className="menu-logo main-block-title">delicious menu</h2>
          <p className="main-block-pre-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
        </div>
        <div className="menu-buttons">
          {['soupe', 'pizza', 'pasta', 'desert', 'wine', 'beer', 'drinks'].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className="menu-table">
          <div className="menu-table-element">
            <div className="name-price">pizza quatro stagioni . . . . 55,68 usd</div>
            <div className="dish-contents">Integer ullamcorper neque eu purus euismod</div>
          </div>
          {/* Повторите элемент для других блюд */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
