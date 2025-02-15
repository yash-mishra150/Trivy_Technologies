import "./global.css";
import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./pages/HomePage";
import PayPage from "./pages/PayPage";
import GiniePage from "./pages/giniePage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBarContainer}>
      {/* Gradient Line */}
      <Svg width={width} height={60} viewBox={`0 0 ${width} 60`} style={styles.svgStyle}>
        <Defs>
          <LinearGradient id="topGradient" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0%" stopColor="black" stopOpacity="0" />
            <Stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <Stop offset="100%" stopColor="black" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Path
          d={`M0 50 Q${width / 2} -25 ${width} 50`}
          stroke="url(#topGradient)"
          strokeWidth={1}
          fill="none"
        />
      </Svg>

      {/* Custom Tab Buttons with  */}
      <View style={styles.tabBarInner}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          let iconComponent;
          if (route.name === "home") {
            iconComponent = <MaterialCommunityIcons name="home-variant" size={30} color={isFocused ? "white" : "gray"} />;
          } else if (route.name === "Yolo Pay") {
            iconComponent = <MaterialCommunityIcons name="qrcode-scan" size={30} color={isFocused ? "white" : "gray"} />;
          } else if (route.name === "Ginnie") {
            iconComponent = <MaterialCommunityIcons name="brightness-percent" size={30} color={isFocused ? "white" : "gray"} />;
          }

          const isPay = route.name === "Yolo Pay";

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(route.name)}
              style={[styles.tabButton, isPay && styles.payTab]}
            >
              <View
                style={[
                  styles.iconContainer,
                  {
                    borderColor: isFocused ? "#a3a3a3" : "#525252",
                    borderTopWidth: 1,
                    borderRightWidth: 1,
                  },
                  isPay && styles.payIconContainer,
                ]}
              >
                {iconComponent}
              </View>
              <Text style={[styles.label, isFocused && styles.activeLabel]}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="home" component={HomePage} />
        <Tab.Screen name="Yolo Pay" component={PayPage} />
        <Tab.Screen name="Ginnie" component={GiniePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// 🎨 Styles
const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  svgStyle: {
    position: "absolute",
    top: 0,
  },
  tabBarInner: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
  },
  payIconContainer: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginBottom: 5, // Moves "Pay" upwards
  },
  payTab: {
    marginTop: -20, // Moves "Pay" Up
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: "gray",
  },
  activeLabel: {
    color: "white",
  },
});

export default App;
