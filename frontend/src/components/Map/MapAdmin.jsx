/* eslint-disable no-unused-vars */
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTrashcans } from '../../app/action-creators/trashcans.js';
import useStyles from './styles.js';
import trashFull from '../../assets/trashred.png';
import trashEmpty from '../../assets/trashgreen.png';
import trashUndefined from '../../assets/trashgray.png';
import trashWarning from '../../assets/trashyellow.png';

function MapAdmin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const trashcans = useSelector((state) => state.trashcans);
  function onClickMap(map, evt) {
    console.log(evt.lngLat);
  }

  const getIcon = (trashcan) => {
    const { length } = trashcan.percentFilled;
    if (!length) return trashUndefined;
    const lastTrashcan = trashcan.percentFilled[length - 1];

    if (lastTrashcan <= 0.25) return trashEmpty;
    if (lastTrashcan >= 0.8) return trashFull;
    return trashWarning;
  };

  useEffect(() => {
    dispatch(getTrashcans());
  }, []);

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoibGVvbmFyZG0wMSIsImEiOiJjbDV5N3l2YmExMG05M3FsdGM3aHlhMGc5In0.YQmFvDMgTteDL18unT0p-g',
  });
  return (
    <Map
      // eslint-disable-next-line react/jsx-no-bind
      onClick={onClickMap}
      className={classes.map}
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/leonardm01/cl5y86x1a000315pnspwhlcg9"
      center={[14.383267, 45.305503]}
      maxBounds={[
        [14.283084, 45.305503],
        [14.549883, 45.428794],
      ]}
      containerStyle={{
        height: '53vh',
        width: '75%',
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
    </Map>
  );
}

export default MapAdmin;
