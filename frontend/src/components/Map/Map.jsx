import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import trashFull from '../../assets/trashred.png';
import trashEmpty from '../../assets/trashgreen.png';
import trashUndefined from '../../assets/trashgray.png';
import trashWarning from '../../assets/trashyellow.png';
import { getTrashcans } from '../../app/action-creators/trashcans.js';

import useStyles from './styles.js';

function Map() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrashcans());
  }, []);

  const trashcans = useSelector((state) => state.trashcans);
  const getIcon = (trashcan) => {
    const { length } = trashcan.percentFilled;
    if (!length) return trashUndefined;
    const lastTrashcan = trashcan.percentFilled[length - 1];

    if (lastTrashcan <= 0.25) return trashEmpty;
    if (lastTrashcan >= 0.8) return trashFull;
    return trashWarning;
  };
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
      scrollZoom="disable"
      className={classes.map}
    // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/leonardm01/cl5yvok7v000015mrjq8n97jj"
      center={[14.447347, 45.298818]}
      maxBounds={[[14.287347, 45.298818], [14.549883, 45.428794]]}
      containerStyle={{
        height: heightVar,
        width: '100vw',
        zoom: 2,
      }}
    >
      {trashcans.map((trashcan) => {
        // eslint-disable-next-line no-debugger
        const icon = getIcon(trashcan);
        return (
          <Marker key={trashcan._id} coordinates={[trashcan.coordinates.latitude, trashcan.coordinates.longitude]} anchor="bottom">
            <img src={icon} height="10" />
          </Marker>
        );
      })}
    </Map1>
  );
}

export default Map;
