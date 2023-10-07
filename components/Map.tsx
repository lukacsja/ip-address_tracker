'use client';

import L, { LatLngExpression } from 'leaflet';
import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import Details from './Details';
import { geoData } from '@/lib/types';

const Map = () => {
  const [geoData, setgeoData] = useState<geoData | null>(null);
  const [coords, setCoords] = useState<LatLngExpression | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchgeoData = async () => {
      try {
        const response = await fetch('/api/getGeoData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(geoData),
        });

        if (response.ok) {
          const data = await response.json();
          setgeoData(data);
          setIsLoading(false);

          if (data.location) {
            const lat = data.location.lat;
            const lng = data.location.lng;
            setCoords([lat, lng]);
          }
        } else {
          throw new Error('Failed to fetch visitor information');
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchgeoData();
  }, []);

  return (
    <>
      <div className='h-full'>
        {isLoading ? (
          <p>LOADING</p>
        ) : (
          <MapContainer
            className='h-full w-full'
            center={coords || [12.12, 12.12]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker
              icon={
                new L.Icon({
                  iconUrl: '/icons/marker-icon.svg',
                  iconSize: [46, 56],
                  popupAnchor: [0, -40],
                  shadowUrl: MarkerShadow.src,
                  shadowSize: [50, 50],
                })
              }
              position={coords || [12.12, 12.12]}
            >
              <Popup>Your approximate position.</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
      {!isLoading && <Details geoData={geoData || null} />}
    </>
  );
};

export default Map;
