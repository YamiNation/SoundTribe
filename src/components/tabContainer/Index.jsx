import React from "react";
import {View, Animated} from "react-native";
import {useTabMenu} from "../context/TabContext";
import styles from "./Styles";

const TabContainer = ({children}) => {
  const {opened} = useTabMenu();

  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  return (
    <View style={styles.container}>
      {children}
      {opened && (
        <Animated.View
          style={[
            styles.overlay,
            {
              backgroundColor: animation.interpolate({
                inputRange: [0, 1],
                outputRange: ["transparent", "#161719"],
              }),
            },
          ]}
        />
      )}
    </View>
  );
};

export default TabContainer;