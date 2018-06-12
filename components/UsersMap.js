import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from "react-native-maps";

// UsersMap is the default exported const for this file.
// Since App is considered the parent class, props callback is declared in functional component below (UsersMap (child) )
// so as to pass the prop: userLocation to the child component.
const UsersMap = props => {
  // The following variable is initially declared null so that it can wait to be populated with data (ie. lat and long) 
  // before being rendered.
  let userLocationMarker = null;

  // The following conditional checks whether the statement (ie. is props.userLocation not null? if so, continue) is 
  // truish before returning the JSX element.
  if (props.userLocation) {
    userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>
  }

  // Although the newly set state of the other users has been generated and stored within an array, those coords wont be much help without a marker.
  // The following displays markers for every coord logged within firebase (ie. other users).
  // new constant is created to display all other users locations within a new mapview marker element.
  const otherUsersMarkers = props.otherUsersLocations.map(otherUsersMarker => ( // props.otherUsersLocations is a global prop created w/n App class.
    <MapView.Marker coordinate={otherUsersMarker} key={otherUsersMarker.id}/> // const is taking the array of data w/n prop: otherUsersLocations, and adding it to the map method which will display the MapView.Marker JSX element for every obj w/n the array
  )); // functional component is called otherUsersMarker ~not~ otherUsersMarkers (this is the const name) and it is equal to the following JSX element
      // The marker takes a coordinate argument and a key argument...
      // the coordinate arg is technically equal to an individual index within the array: otherUsersLocations, bound to the prop: otherUsersLocations which is then assigned to the map methods parent: otherUsersMarker...same concept applies below
      // coordinate arg is technically equal to otherUsersLocationsArray...function loops through and grabs both lat and long and just ignores id
      // the id arg is technically equal to the id stored within otherUsersLocationsArray.id

  // The following return statement is what is returned by the default const for the page: UsersMap.
  // It contains a MapView element wrapped within a View JSX element.
  return (
    <View style={styles.mapView} >
      <MapView
        initialRegion={{
          // initial region is set to random x, y coords
          latitude: 37,
          longitude: -86,
          latitudeDelta: 0,
          longitudeDelta: 0
        }}
        //
        region={props.userLocation}
        style={styles.Map}>

        {userLocationMarker} {/* This is a conditionally rendered variable (let: see above) */}
        {otherUsersMarkers} {/* const can then be outputted to the MapView */}
      </MapView>
    </View>
  )
};

// stylesheet below styles the mapview (container) and map (map element) above...stored within a const so as to better 
// modularize code.
const styles = StyleSheet.create({
  mapView: {
    height: '100%',
    width: '100%',
    zIndex: 0
  },
  Map: {
    height: '100%',
    width: '100%'
  }
});

export default UsersMap;
