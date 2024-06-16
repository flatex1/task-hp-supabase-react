import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => {
  const mapData = {
    center: [55.751574, 37.573856], // Москва
    zoom: 10,
  };

  const coordinates = [
    [55.751574, 37.573856],
  ];

  return (
    <YMaps>
      <div>
        <Map defaultState={mapData} width="100%" height="400px">
          {coordinates.map((coordinate, index) => (
            <Placemark key={index} geometry={coordinate} />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
