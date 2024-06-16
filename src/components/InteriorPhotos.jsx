import '../assets/css/main.css';

const InteriorPhotos = () => {
  return (
    <div className="interior-photos">
      {['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png'].map((img, index) => (
        <img key={index} src={`https://aushniidrgdnhohvezpw.supabase.co/storage/v1/object/public/images/${img}`} alt={img} width="360" height="360" />
      ))}
    </div>
  );
};

export default InteriorPhotos;
