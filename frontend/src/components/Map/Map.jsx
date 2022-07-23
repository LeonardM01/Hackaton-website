import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMediaQuery } from '@mui/material';

import useStyles from './styles.js';

function Map() {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const classes = useStyles();
  console.log('pomoz boze');
  function onClickMap(map, evt) {
    console.log(evt.lngLat);
  }
  let heightVar = '53vh';
  isMobile ? heightVar = '30vh' : heightVar = '53vh';
  const Map1 = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoibGVvbmFyZG0wMSIsImEiOiJjbDV5N3l2YmExMG05M3FsdGM3aHlhMGc5In0.YQmFvDMgTteDL18unT0p-g',
  });
  return (
    <Map1
      // eslint-disable-next-line react/jsx-no-bind
      onClick={onClickMap}
      className={classes.map}
    // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/leonardm01/cl5y86x1a000315pnspwhlcg9"
      center={[14.447347, 45.298818]}
      maxBounds={[[14.287347, 45.298818], [14.549883, 45.428794]]}
      containerStyle={{
        height: heightVar,
        width: '100vw',
        zoom: 2,
      }}
    >
      <Marker
        coordinates={[14.283267, 45.326423]}
        anchor="bottom"
      >
        <img src="https://repair.eu/wp-content/uploads/2019/09/R2REurope.png" height="10" />
      </Marker>
    </Map1>
  );
}

export default Map;
