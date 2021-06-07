import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.out}>
      <Text>3D VIEW</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  out: {justifyContent: 'center', flex: 1, alignItems: 'center'},
});
