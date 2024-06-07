import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const WaterTips = () => {
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
        <Text style={styles.text}>Monitor water levels regularly using sensors to ensure optimal hydration for your plants.</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bullet}>2.</Text>
        <Text style={styles.text}>Avoid overwatering, as it can lead to root rot and other health issues. Use water level data to adjust watering frequency.</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bullet}>3.</Text>
        <Text style={styles.text}>Maintain a balanced nutrient solution in your hydroponic system to support plant growth and vitality.</Text>
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

export default WaterTips;
