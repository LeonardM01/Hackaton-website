/* eslint-disable no-unused-vars */
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTrashcans } from '../../app/action-creators/trashcans.js';
import useStyles from './styles.js';
import trashFull from '../../assets/trashred.png';
import trashEmpty from '../../assets/trashgreen.png';
import trashUndefined from '../../assets/trashgray.png';
import trashWarning from '../../assets/trashyellow.png';

function MapAdmin({ editState: editTrash }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const trashcans = useSelector((state) => state.trashcans);
  const [changeType, setChangeType] = useState('');
  const [editMarker, setEditMarker] = useState(null);

  function onClickMap(map, evt) {
    const { lat: latitude, lng: longitude } = evt.lngLat;
    setEditMarker({ latitude, longitude, type: 'Preostali otpad' });
    editTrash({ latitude, longitude, type: 'Preostali otpad', mode: 'create' });
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

  const editClicked = (e) => {
    const _id = e.target.dataset.id;
    const trashcan = trashcans.find((can) => can._id === _id);
    const { length } = trashcan.percentFilled;
    const lastCan = trashcan.percentFilled[length - 1];
    const { longitude, latitude } = trashcan.coordinates;
    editTrash({ ...trashcan, longitude, latitude, mode: 'edit', lastCan });
  };

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
      style="mapbox://styles/leonardm01/cl5yvok7v000015mrjq8n97jj"
      center={[14.447347, 45.298818]}
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
          <Marker
            onClick={editClicked}
            key={trashcan._id}
            coordinates={[trashcan.coordinates.latitude, trashcan.coordinates.longitude]}
            anchor="bottom"
          >
            <img src={icon} height="10" data-id={trashcan._id} />
          </Marker>
        );
      })}
    </Map>
  );
}

export default MapAdmin;
