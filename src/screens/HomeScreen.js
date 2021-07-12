import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList,  } from "react-native";

const HomeScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button title="Reset" onPress={() => setColors([])}/>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, colorGenerator()])
        }}
      />
      <FlatList 
        style={styles.colorsContainer}
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View 
            style={{ height: 100, width: 100, backgroundColor: `${item}` }} 
          />        
        )}
      />
      {/* <View style={{ height: 100, width: 100, backgroundColor: `${colorGenerator()}` }} /> */}
    </View>
  );
};

const colorGenerator = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return (`rgb(${R},${G},${B})`);
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  
});

export default HomeScreen;
