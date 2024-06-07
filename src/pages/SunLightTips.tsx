import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const SunLightTips = () => {
  return (
    <LinearGradient
    colors={['#00796B', '#8BC34A']} // Dark green to green gradient
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
    <View style={styles.container}>
  <View style={styles.row}>
        <Text style={styles.bullet}>1.</Text>
        <Text style={styles.text}>Place your plants in areas with sufficient sunlight exposure. Most plants require at least 6-8 hours of sunlight per day.</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bullet}>2.</Text>
        <Text style={styles.text}>Monitor the intensity of sunlight and adjust the plant's placement accordingly. Too much direct sunlight can lead to sunburn or wilting.</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bullet}>3.</Text>
        <Text style={styles.text}>For indoor plants, consider using artificial grow lights to supplement natural sunlight, especially during the winter months.</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20, // Adjust the margin between points here
  },
  bullet: {
    fontSize: 20,
    marginRight: 10,
    marginBottom: 2, // Add margin bottom for space between bullet and text
    color: "#000", // Adjust color as needed
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#000", // Adjust color as needed
  },
});

export default SunLightTips;
