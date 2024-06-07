import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Monitorization from "../Monitorization";
import Login from "../Auth/Login";
import { enableScreens } from "react-native-screens";
import Register from "../Auth/Register";
import RegisterPlant from "../Auth/Register-Plant";
import LiquidFillGaugeApp from "../Water-Level";
import WaterTips from "../Water-Tips";
import Soil from "../Soil";
import SoilTips from "../SoilTips";
import SunLight from "../SunLight";
import SunLightTips from "../SunLightTips";
const Stack = createStackNavigator();
enableScreens();
const Navigator = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                <Stack.Screen name="Monitorization" options={{ headerShown: false }} component={Monitorization} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
                <Stack.Screen name="Register-Plant" options={{ headerShown: false }} component={RegisterPlant} />
                <Stack.Screen name="Water" options={{ headerShown: false }} component={LiquidFillGaugeApp} />
                <Stack.Screen name="Water-Tips" options={{ headerShown: false }} component={WaterTips} />
                <Stack.Screen name="Soil" options={{ headerShown: false }} component={Soil} />
                <Stack.Screen name="Soil-Tips" options={{ headerShown: false }} component={SoilTips} />
                <Stack.Screen name="Sun-Light" options={{ headerShown: false }} component={SunLight} />
                <Stack.Screen name="SunLight-Tips" options={{ headerShown: false }} component={SunLightTips} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator