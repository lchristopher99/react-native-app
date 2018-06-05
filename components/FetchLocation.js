import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';

// fetchLocation is the default exported const for this file.
const fetchlocation = props => {
// The following return statement is what is returned by the default const for the page: fetchLocation.
// It contains a button element imported from react-native-elements (dependency) that has 
// an onPress props declaration: props.onGetLocation - handler located in App.js.
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
