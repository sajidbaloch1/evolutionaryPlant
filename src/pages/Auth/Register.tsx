import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';

const Register = () => {
    const navigation = useNavigation();

    const navigateToDetails = () => {
        navigation.navigate('Register-Plant');
    };
    const navigateToSignIn = () => {
        navigation.navigate('Login')
    }
    return (
        <LinearGradient
        colors={['#00796B', '#8BC34A']} // Dark green to green gradient
          style={styles.background}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <View style={styles.container}>
            <Text style={styles.heading}>Get Register Now</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter your name"
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter your email"
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter your password"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.submitButton}
                    onPress={navigateToDetails}
                >
                    <Text style={styles.submitButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
    
            <Text style={styles.signinText}>Have an account? <Text style={styles.anchor}
                onPress={navigateToSignIn}
            > Sign Up </Text></Text>
        </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,

        marginBottom: 20,
        color: '#fff',
    },
    inputContainer: {
        padding: 20,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#fff',
        paddingHorizontal: 10,

    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    submitButton: {
        backgroundColor: '#009688',
        paddingVertical: 15,
        borderRadius: 35,
        marginTop: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        // borderRadius: 35,

    },
    signinText: {
        textAlign: 'center',
        color: '#000'
    },
    anchor: {
        color: '#0F3DDE'
    }
});
export default Register