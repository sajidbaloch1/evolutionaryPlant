import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const Monitorization = () => {
    const navigation = useNavigation();

    const navigateToWater = () => {
        navigation.navigate('Water');
    }

    const navigateToSoil = () => {
        navigation.navigate('Soil');
    }

    const navigateToSunLight = () => {
        navigation.navigate('Sun-Light');
    }

    return (
        <View style={styles.homeStyle}>
            <TouchableOpacity style={styles.alertIconContainer}>
                <Image source={require('../public/images/alert.png')} style={styles.alertIcon} />
            </TouchableOpacity>

            <Image source={require('../public/images/img1.png')} style={styles.homeImage} />

            <Text style={styles.homeText}>{'Plant Name'}</Text>

            <Text style={styles.para}>Monitor your plants regularly to ensure they are healthy and thriving.</Text>

            <View style={styles.Images}>

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Image source={require('../public/images/1.jpg')} style={styles.img1} />
                    <Text style={styles.text} onPress={navigateToSoil}>Soil Moisture</Text>
                </View>

                <View>
                    <Image source={require('../public/images/images.png')} style={{ ...styles.img1, ...styles.img1Color }} />
                    <Text style={styles.text} onPress={navigateToSunLight}> Sunlight</Text>
                </View>

                <View>
                    <Image source={require('../public/images/3.png')} style={styles.img1} />
                    <Text style={styles.text} onPress={navigateToWater}>Water Level</Text>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    homeStyle: {
        flex: 1,
        alignItems: 'center',
        fontFamily: 'Manrope',
        backgroundColor: '#171717',
        width: '100%',
        height: '100%'

    },
    alertIconContainer: {
        position: 'absolute',
        top: 20,
        right: -190,
        zIndex: 999,
    },
    alertIcon: {
        width: 40,
        height: 40,
    },
    homeImage: {
        width: '100%',
        height: 500,
    },
    homeText: {
        lineHeight: 38.35,
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 31.95
    },
    para: {
        color: '#FFFFFF',
        fontSize: 17.63,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 30.85,
        marginTop: 20
    },
    skipButton: {
        fontSize: 16, color: '#FFFFFF', textAlign: 'center',
    },
    groutBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    skipButton2: {
        fontSize: 16, color: '#FFFFFF', textAlign: 'center', fontWeight: '900',
    },
    img1: {
        width: 50, height: 50,
        borderRadius: 100,
    },
    Images: {
        display: 'flex',
        flexDirection: 'row',
        gap: 50,
        marginTop: 30
    },
    img1Color: {
        backgroundColor: ''
    },
    text: {
        fontSize: 16,
        color: "#FFF", // Adjust color as needed
      },

})


export default Monitorization