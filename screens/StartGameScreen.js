import { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'

import { PrimaryButton } from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

export default function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText) {
    console.log(enteredText)
    setEnteredNumber(enteredText)
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return
    }

    props.startGameHandler(chosenNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>
          Enter a Number
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={confirmInputHandler}
            >
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
            onPress={confirmInputHandler}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  }
})