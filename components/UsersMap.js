import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from "react-native-maps";

const UsersMap = props => {
  return (
    <View style={styles.mapView} >
      <MapView
        initialRegion={{
          latitude: 37,
          longitude: -86,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421
        }}
        region={props.userLocation}
        style={styles.Map} />
    </View>
  )
};

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
