import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

export const Camera = ({ initialProps }) => {
  const [
    { cameraRef, type, isRecording },
    { recordVideo, setIsRecording },
  ] = useCamera(initialProps);
  return (
    <View style={{ flex: 1 }}>
      <RNCamera 
      ref={cameraRef}
      permissionDialogTitle={"Permission to use Camera"} 
      permissionDialogMessage={'We need your permission to use your camera'}
      type={"back"}
      style={{ flex: 1 }} 
      captureAudio={false} />
      {/* {!isRecording && (
        <TouchableOpacity
          onPress={async () => {
            try {
              setIsRecording(true);
              const data = await recordVideo();
            } finally {
              setIsRecording(false);
            }
          }}
          style={{ width: '100%', height: 45 }}
        />
      )} */}
    </View>
  );
};