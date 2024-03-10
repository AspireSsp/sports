
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { Icon } from 'react-leaflet';
import L from 'leaflet';
import { get } from '../apis/api';
import { useDispatch, useSelector } from 'react-redux';

  const myIcon = new L.Icon({ // Create an L.Icon instance (Leaflet library)
    iconUrl: 'https://i.imgur.com/0mx6Fnu.png',
    iconSize: [25, 28],
  });

const Map = () => {
    const user = useSelector(state=> state.auth.user);
    const [userLocations, setUserLocations] = useState([]);
    const getLocations = async()=>{
      const response = await get('user/get/all');
        let sampleUserLocations = [];
        for(let user of response?.data?.users){
          const obj = {
            id: user?._id,
            coordinates: [user?.location?.lat, user?.location?.lon],
            locationName: user?.location?.name,
          }
        sampleUserLocations.push(obj);
      }

      setUserLocations(sampleUserLocations);
    }
    useEffect(() => {
      getLocations()
      }, [user]);
      const bounds = userLocations.map((user) => user.location);
      const mapBounds = bounds.length > 0 ? bounds : [[0, 0], [0, 0]];

  return (
    <div>
        <MapContainer
            center={[user?.location?.lat, user?.location?.lon]}
            zoom={13}
            style={{ height: '95vh', width: '100%', zIndex:'0' }}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            {userLocations.map((user) => (
                <Marker key={user.id} position={user.coordinates} icon={myIcon}>
                <Popup onMouseOver={() => { this.openPopup(); }}>
                    {user.locationName || 'Unknown Location'}
                </Popup>
                </Marker>
            ))}
        </MapContainer>
    </div>
  )
}

export default Map;


