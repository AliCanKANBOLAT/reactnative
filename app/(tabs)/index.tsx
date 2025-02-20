import React from 'react';
import Card from "../../components/Card"
import { View, Text, Image, ScrollView, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Başlık */}
      <Text style={styles.title}>Sweedy Cat</Text>

      <View style={styles.container}>
        <Text style={styles.text}>Hello sweedy, how are you today?</Text>

        {/* Resim */}
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={styles.image}
        />

        {/* Butonlar */}
        <View style={styles.buttonContainer}>
          <Button 
            onPress={() => console.log('Button 1 is pressed')} 
            title="Press me" 
            color="#841584" 
          />
          <Button 
            onPress={() => console.log('Button 2 is pressed')} 
            title="Press me" 
            color="#305cec" 
          />
        </View>

        {/* Kart Bileşeni */}
        <Card />
      </View>

      {/* TextInput Alanı */}
      <TextInput
        style={styles.input}
        placeholder="Type something..."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20, // Daha iyi bir görünüm için padding ekledim
  },
  container: {
    width: '90%',
    backgroundColor: '#e78787',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10, // Köşeleri yuvarlat
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row', // Butonları yan yana koyduk
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default App;
