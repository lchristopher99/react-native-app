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

  // The following return statement is what is returned by the default const for the page: UsersMap.
  // It contains a MapView element wrapped within a View JSX element.
  return (
    <View style={styles.mapView} >
      <MapView
        initialRegion={{
          // initial region is set to random x, y coords
          latitude: 37,
          longitude: -86,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421
        }}
        //
        region={props.userLocation}
        style={styles.Map}>

        {/* Line below is a conditionally rendered variable (let: see above) */}
        {userLocationMarker}
      </MapView>
    </View>
  )
};

// stylesheet below styles the mapview (container) and map (map element) above...stored within a const so as to better 
// modularize code.
const styles = StyleSheet.create({
  mapView: {
    height: '25%',
    width: '100%'
  },
  Map: {
    height: '100%',
    width: '100%'
  }
});

export default UsersMap;
