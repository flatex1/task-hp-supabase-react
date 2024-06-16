import '../assets/css/main.css';

const InteriorPhotos = () => {
  return (
    <div className="interior-photos">
      {['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png'].map((img, index) => (
        <img key={index} src={`src/assets/img/main/interior-photos/${img}`} alt={img} width="360" height="360" />
      ))}
    </div>
  );
};

export default InteriorPhotos;
