import '../assets/css/main.css';

const MainBlockSecond = () => {
  return (
    <div className="main-block main-block-second">
      <div className="container clearfix">
        <div className="mini-logo">our team</div>
        <div className="main-block-info-right">
          <h2 className="main-block-title">master chef</h2>
          <p className="main-block-pre-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
          <p className="main-block-text">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
        </div>
        <div className="main-block-border-element-left">
          <img className="main-block-img" src="src/assets/img/main/master-chef.png" alt="Master Chef" width="575" height="575" />
        </div>
      </div>
    </div>
  );
};

export default MainBlockSecond;
