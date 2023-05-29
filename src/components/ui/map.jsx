import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = ({
  lat,
  lng,
  height,
  zoom,
  showInfoWindow,
  mapCurrentPosition,
}) => {
  const containerStyle = {
    width: "100%",
    height: height || "420px",
  };

  const center = {
    lat: lat || 1.295831,
    lng: lng || 103.76261,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.YOUTUBE_API_KEY}`,
  });

  const [selectedMarker, setSelectedMarker] = useState();
  const [mapPosition, setMapPosition] = useState();
  const [infoWindowToggle, setInfoWindowToggle] = useState(false);

  const onMarkerDragEnd = (e) => {
    if (e.domEvent.type === "click") {
      setInfoWindowToggle(true);
    }
    const geocoder = new window.google.maps.Geocoder();
    const latLng = {
      lat: parseFloat(e.latLng.lat()),
      lng: parseFloat(e.latLng.lng()),
    };
    geocoder
      .geocode({ location: latLng })
      .then((response) => {
        if (response.results[0]) {
          if (mapCurrentPosition !== undefined) {
            mapCurrentPosition(response.results[0]?.formatted_address);
          }
          setSelectedMarker(response.results[0]);
          setMapPosition(latLng);
          setInfoWindowToggle(true);
        } else {
          window.alert("No results found");
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  };
  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapPosition || center}
        zoom={zoom || 15}
      >
        <Marker
          position={mapPosition || center}
          draggable={true}
          visible={true}
          icon={"/images/pin.png"}
          onDragEnd={(e) => onMarkerDragEnd(e)}
          onClick={(e) => onMarkerDragEnd(e)}
        >
          {showInfoWindow && infoWindowToggle && (
            <InfoWindow
              position={mapPosition || center}
              onCloseClick={() => setInfoWindowToggle(false)}
            >
              <p>{selectedMarker?.formatted_address}</p>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </>
  ) : (
    <div>Loading....</div>
  );
};

export default React.memo(Map);
