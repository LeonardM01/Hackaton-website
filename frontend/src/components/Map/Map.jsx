import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import useStyles from './styles.js';

function Map() {
  const classes = useStyles();
  console.log('pomoz boze');

  const Map1 = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoibGVvbmFyZG0wMSIsImEiOiJjbDV5N3l2YmExMG05M3FsdGM3aHlhMGc5In0.YQmFvDMgTteDL18unT0p-g',
  });

  return (
    <Map1
      onClick={console.log(coordinates)}
      className={classes.map}
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
      >
        <img src="https://repair.eu/wp-content/uploads/2019/09/R2REurope.png" height="10" />
      </Marker>
    </Map1>
  );
}

export default Map;
