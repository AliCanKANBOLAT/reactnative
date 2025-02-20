import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function Card() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        
        <Text style={styles.title}>Card</Text>
      </View>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 300,
    backgroundColor: 'lightblue',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333', 
  },
});
