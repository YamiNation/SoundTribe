import { StyleSheet } from "react-native";
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flex: 1,
      height: 0,
    },
    box: {
      position: "relative",
      width: 60,
      height: 60,
      marginTop: -30,
    },
    addButton: {
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    addButtonInner: {
      alignItems: "center",
      justifyContent: "center",
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    addButtonIcon: {
      width: 40,
      height: 40,
      tintColor:"#fff",
    },
    item: {
      position: "absolute",
      top: 5,
      left: 5,
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    itemIcon: {
      width: 32,
      height: 32,
    },
  });

export default styles;