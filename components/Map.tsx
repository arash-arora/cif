import { useState } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import 'mapbox-gl/dist/mapbox-gl.css'

function Map() {
  const coordinates = [
    {
      id: 1,
      latitude: 28.568405806709155,
      longitude: 77.1866887243079,
    },
    {
      id: 2,
      latitude: 28.51224367490927,
      longitude: 77.10101029691273,
    },
  ]
  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    height: '100vh',
    width: '100vw',
    zoom: 11,
  })
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/arasharora2001/cl1ni6161000514pb67s51iy1"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewport(evt.viewState)}
      {...viewport}
    >
      {coordinates.map((point) => (
        <Marker
          key={point.id}
          latitude={point.latitude}
          longitude={point.longitude}
          draggable
          // onDragEnd={handleDrag}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt=""
            className="w-8"
          />
        </Marker>
      ))}
    </ReactMapGl>
  )
}

export default Map
