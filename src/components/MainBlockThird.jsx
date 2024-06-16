import '../assets/css/main.css';

const MainBlockThird = () => {
  return (
    <div className="main-block main-block-third">
      <div className="container clearfix">
        <div className="main-block-info-left">
          <h2 className="main-block-title">book a table</h2>
          <form className="main-block-form" action="index.html" method="post">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone" />
            <select defaultValue="" required>
              <option value="" hidden>People</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <input type="text" name="date" placeholder="Date (mm/dd)" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} required />
            <select defaultValue="" required>
              <option value="" hidden>Time</option>
              <option value="12:00">12:00</option>
              <option value="14:00">14:00</option>
              <option value="16:00">16:00</option>
              <option value="18:00">18:00</option>
              <option value="20:00">20:00</option>
              <option value="22:00">22:00</option>
            </select>
            <button className="btn btn-book" type="submit" name="button">book now</button>
          </form>
        </div>
        <div className="main-block-border-element-right">
          <img className="main-block-img" src="src/assets/img/main/book.png" alt="Book Table" width="575" height="575" />
        </div>
      </div>
    </div>
  );
};

export default MainBlockThird;
