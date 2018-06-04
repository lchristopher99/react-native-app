import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';

const fetchlocation = props => {
  return (
    <Button
      title="Get Location"
      onPress={props.onGetLocation}
      icon={{name: 'location-arrow', type: 'font-awesome'}}
      buttonStyle={{
        marginBottom: 30,
        backgroundColor: 'rgba(92, 99,216, 1)',
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
      }}
    />
  );
}

export default fetchlocation;
