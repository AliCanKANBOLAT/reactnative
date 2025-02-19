import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button, StyleSheet} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Sweedy Cat</Text>
      <View style={styles.container}>
        <Text>Hello sweedy how are you today ?</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 300, height: 300}}
        />
        <Button onPress={()=> {
          console.log('Button is pressed');
        }} title="Press me" color="#841584" accessibilityLabel="Learn more about this purple button" />
        <Button onPress={()=> {
          console.log('Button is pressed');
        }} title="Press me" color="#305cec" accessibilityLabel="Learn more about this blue button" />
       
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me it is input field"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e78787',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;