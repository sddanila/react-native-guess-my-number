import { Pressable, StyleSheet, Text, View } from 'react-native'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
import Colors from '../../constants/colors'

export function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600}}
      >
          <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 6
  },
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28, 
    overflow: 'hidden'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})