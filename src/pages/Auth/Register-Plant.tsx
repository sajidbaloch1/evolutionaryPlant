import  { useState, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RNCamera } from "react-native-camera";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const RegisterPlant = () => {
  const [category, setCategory] = useState("");
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('Monitorization');
  };
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <LinearGradient
        colors={['#00796B', '#8BC34A']} // Dark green to green gradient
          style={styles.background}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
    <View style={styles.container}>
      <Text style={styles.heading}>Get Plant Register Now</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Plant Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your plant name"
        />
        <Text style={styles.label}>Select Category</Text>
        {/* Render your picker component here */}

        <TouchableOpacity
          style={styles.cameraButton}
          onPress={takePicture}
        >
          <Text style={styles.cameraButtonText}>Open Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={navigateToDetails}
        >
          <Text style={styles.submitButtonText}>Register Plant</Text>
        </TouchableOpacity>
      </View>

      {/* <Text style={styles.signinText}>
        Have an account?{" "}
        <Text style={styles.anchor}>Sign Up</Text>
      </Text> */}
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 20,
    color: "#fff",
  },
  inputContainer: {
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#fff",
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: "#009688",
    paddingVertical: 15,
    borderRadius: 35,
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  signinText: {
    textAlign: "center",
    color: "#000",
  },
  anchor: {
    color: "#0F3DDE",
  },
  cameraButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    borderRadius: 35,
    marginBottom: 10,
  },
  cameraButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterPlant;
