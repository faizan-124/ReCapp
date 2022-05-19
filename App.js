import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { Camera } from './components/camera';


const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const App = () => {
  const [cameraState, setCameraState] = useState(false)
 
  const camera = ()=>{
    console.warn("Camera pressed")
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.main}>
        
        {(cameraState ? (< Camera/>):(null))}
        <View style={styles.center}>
          <Text style={{fontSize: 35, shadowOpacity: .5, shadowOffset: {height: 1.5, width: 0}, shadowRadius: 0, shadowColor: 'white'}}>RecApp!</Text>
          <TouchableOpacity 
          onPress={()=>setCameraState(true)}
          style={styles.touchable}>
            <Text style={{fontSize: 15, padding: 10}}>Capture</Text>
          </TouchableOpacity>
          </View>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  main: {
    height: windowHeight,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#e4e4e4'
  },

  center: {
  
    marginTop: 200,
  },

  touchable: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 170,
    alignSelf: 'center',
    marginTop: 25
  }
});

export default App;
