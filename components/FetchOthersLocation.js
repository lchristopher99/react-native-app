import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';


// getLocationIsPressed = () => {
//   let getOtherLocationBtn = null;

//   if (this.state.getLocationPressed) {
//     getOtherLocationBtn =
//       <View style={styles.container}>
//         <Button
//           title="Get Other User Locations!"
//           onPress={props.onGetOtherLocation} // once clicked, this button activates the following handler: this.otherUsersHandler - located in App.js
//           icon={{name: 'users', type: 'font-awesome'}}
//           buttonStyle={{
//             marginBottom: 30,
//             backgroundColor: 'rgba(92, 99,216, 1)',
//             width: 300,
//             height: 45,
//             borderColor: "transparent",
//             borderWidth: 0,
//             borderRadius: 5
//           }}
//         />
//     </View>
//   }
// }

const fetchOthersLocation = props => {
  return (
    {getOtherLocationBtn}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    zIndex: 1,
    alignItems: 'center',
    bottom: 300
  }
});

export default fetchOthersLocation;
