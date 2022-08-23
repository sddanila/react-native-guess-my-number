import { StyleSheet, View } from 'react-native'

import Colors from '../../constants/colors'

export default function Card({ children }) {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary800,
    marginTop: 36,
    padding: 20,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 10, // Android specific styling
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})