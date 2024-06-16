import '../assets/css/main.css';

const MainEvents = () => {
  return (
    <div className="main-block main-events">
      <div className="container">
        <div className="top-events clearfix">
          <div className="mini-logo">private events</div>
          <div className="main-block-border-element-left">
            <img className="main-block-img" src="https://aushniidrgdnhohvezpw.supabase.co/storage/v1/object/public/images/wedding.png" alt="Wedding" width="575" height="575" />
            <div className="main-block-img-text">weddings</div>
          </div>
          <div className="main-block-border-element-right">
            <img className="main-block-img" src="https://aushniidrgdnhohvezpw.supabase.co/storage/v1/object/public/images/parties.png" alt="Parties" width="575" height="575" />
            <div className="main-block-img-text">corporate parties</div>
          </div>
        </div>
        <div className="private-event-contact-info">
          For private events please call: <b>+40 729 131 637/+40 726 458 782</b> or use the contact form.
        </div>
      </div>
    </div>
  );
};

export default MainEvents;
