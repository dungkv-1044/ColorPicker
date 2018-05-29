import {
    StyleSheet, Platform
} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA'
    },
    header: {
      height: 80,
      backgroundColor: '#ECEFF1',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      // elevation: 1 // for android shadow
    },
    headerTitle: {
      fontSize: 18,
      color: 'red',
      marginTop: Platform.select({
        ios: 20,
        android: 10
      }),
    },
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    subBody: {
      width: 300,
      height: 300,
      flexDirection: 'column'
    },
    textInput: {
      width: 50,
      height: 30,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 3,
      alignItems: 'center',
      textAlign: 'center',
      paddingBottom: Platform.select({
        ios: 0,
        android: 5
      }),
    },
    slideView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    slider: {
      width: 180,
      marginLeft: 5,
      marginRight: 5
    }
  });

  export default styles;