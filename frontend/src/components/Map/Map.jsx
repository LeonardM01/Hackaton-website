import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const apiKey = process.env.MAP_BOX_PUBLIC_API_KEY;
function Map() {
  console.log('pomoz boze');
  const Map1 = ReactMapboxGl({
    accessToken:
      `${apiKey}`,
  });

  return (
    <Map1
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/leonardm01/cl5y86x1a000315pnspwhlcg9"
      center={[14.443267, 45.326423]}
      maxBounds={[[14.283084, 45.305503], [14.549883, 45.428794]]}
      containerStyle={{
        height: '53vh',
        width: '100vw',
        zoom: 2,
      }}
    >
      <Marker
        coordinates={[14.443267, 45.326423]}
        anchor="bottom"
      ><img src="https://repair.eu/wp-content/uploads/2019/09/R2REurope.png" height="10" />
      </Marker>
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[14.443267, 45.326423]} />
      </Layer>
    </Map1>
  );
}

export default Map;
