import { useNavigation } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
    const navigation = useNavigation();

    const navigateToDetails = () => {
        navigation.navigate('Login'); 
    };
    return (
        <View style={styles.homeStyle}>
            <Image source={require('../public/images/img2.png')} style={styles.homeImage} />
            <Text style={styles.wel}>Welcome To</Text>
            <Text style={styles.homeText}>Evolutionary Plant</Text>

            <Text style={styles.para}>Revolutionizing plant health through evolutionary insights and real-time monitoring for sustainable growth.</Text>

            <TouchableOpacity
                onPress={navigateToDetails}
                style={{ borderRadius: 5 }}>
                <LinearGradient
                    colors={['#4DDC98', '#6ADC4E']}
                    style={{ borderRadius: 15, padding: 15, width: 350, marginTop: 20, }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={styles.skipButton}>
                        {'Login'}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
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
        marginTop: 20,
        color: '#FFFFFF',
        fontSize: 17.63,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 30.85
    },
    skipButton: {
        fontSize: 16, color: '#FFFFFF', textAlign: 'center'
    },
    wel: {
        marginTop: 20,
        color: '#FFFFFF',
        fontSize: 17.63,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 30.85
    }

})

export default Home