import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [roundsNumber, setRoundsNumber] = useState(0)

  const [fonstLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fonstLoaded) {
    return <AppLoading />
  }

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setRoundsNumber(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null)
    setRoundsNumber(0)
  }

  let screen = <StartGameScreen startGameHandler={startGameHandler}/>
  if(userNumber) {
    screen = <GameScreen
      userNumber={userNumber}
      onGameOver={gameOverHandler}
    />
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen
                roundsNumber={roundsNumber}
                userNumber={userNumber}
                onStartNewGame={startNewGameHandler}
              />
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary800, Colors.accent500]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.25
  }
});
