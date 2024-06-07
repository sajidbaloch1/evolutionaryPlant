import { useNavigation } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

const Soil = () => {
    const navigation = useNavigation();
    const navigateToWater = () => {
        navigation.navigate('Soil-Tips');
    }
    return (
        <View style={styles.container}>
            <Image style={{ width: "100%", height: "80%" }} source={require('../public/images/soil.jpg')} />
            <TouchableOpacity
                onPress={navigateToWater}
                style={{ borderRadius: 5 }}
            >
                <LinearGradient


                    colors={['#4DDC98', '#6ADC4E']}
                    style={{ borderRadius: 15, padding: 2, width: 350, marginTop: 20 }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../public/images/tips.png')} // Replace 'your-image.png' with the path to your image file
                            style={{ width: 60, height: 50, marginRight: 10 }} // Adjust the width, height, and margin as needed
                        />
                        <Text style={styles.skipButton}>
                            {'Tips'}
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    // gif: {
    //     width: 200, // Adjust width and height as needed
    //     height: 200,
    //     marginTop: 20, // Adjust spacing as needed
    //   },
    skipButton: {
        fontSize: 16, color: '#FFFFFF', textAlign: 'center'
    },
});
export default Soil