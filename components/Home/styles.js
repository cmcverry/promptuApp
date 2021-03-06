import { StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#637CAC',
      alignItems: 'center',
      justifyContent: 'center'
    },

    title: {
        marginBottom: '4%',
        width: '100%',
        textAlign: "center",
        fontFamily: 'monospace',
        fontSize: 60,
        fontWeight: '500'
    },

    sub: {
      marginBottom: '2%',
      width: '100%',
      textAlign: "center",
      fontFamily: 'monospace',
      fontSize: 15,
      fontWeight: '500'
    },

    input: {
      height: 35,
      width: 260,
      marginRight: 10,
      marginBottom: 20,
      borderWidth: 1,
      padding: 5,
      backgroundColor: "white",
      fontFamily: 'monospace'
    },
  });

  export default styles;