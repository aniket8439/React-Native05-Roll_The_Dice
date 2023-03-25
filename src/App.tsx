import React, { PropsWithChildren, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from "../assets/One.png"
import DiceTwo from "../assets/Two.png"
import DiceThree from "../assets/Three.png"
import DiceFour from "../assets/Four.png"
import DiceFive from "../assets/Five.png"
import DiceSix from "../assets/Six.png"

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>

  )
}

function App(): JSX.Element {

  const [diceRoll1, setDiceRoll1] = useState<ImageSourcePropType>(DiceOne)
  const [diceRoll2, setDiceRoll2] = useState<ImageSourcePropType>(DiceSix)
  const [randomColor, setRandomColor] = useState("#FFF2F2")
  const [randomColor2, setRandomColor2] = useState("#EF5354")
  const [randomColor3, setRandomColor3] = useState("#E8BD0D")

  const rollDiceOnTap = () => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber1) {
      case 1:
        setDiceRoll1(DiceOne)
        break;
      case 2:
        setDiceRoll1(DiceTwo)
        break;
      case 3:
        setDiceRoll1(DiceThree)
        break;
      case 4:
        setDiceRoll1(DiceFour)
        break;
      case 5:
        setDiceRoll1(DiceFive)
        break;
      case 6:
        setDiceRoll1(DiceSix)
        setDiceRoll2(DiceFive)
        break;
      default:
        setDiceRoll1(DiceOne)
        break;

    }

    switch (randomNumber2) {
      case 1:
        setDiceRoll2(DiceOne)
        break;
      case 2:
        setDiceRoll2(DiceTwo)
        break;
      case 3:
        setDiceRoll2(DiceThree)
        break;
      case 4:
        setDiceRoll2(DiceFour)
        break;
      case 5:
        setDiceRoll2(DiceFive)
        break;
      case 6:
        setDiceRoll2(DiceSix)
        break;
      default:
        setDiceRoll2(DiceSix)
        break;
    }
  }

  const generateColor = () => {
    const hexRange = '123456789ABCDEF'
    let color = '#'
    let color2 = '#'
    let color3 = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
      color2 += hexRange[Math.floor(Math.random() * 16)]
      color3 += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomColor(color)
    setRandomColor2(color2)
    setRandomColor3(color3)
  }

  return (
    <>
      <StatusBar backgroundColor={"#000000"} />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <View style={styles.flex}>
          <View style={[styles.circle, { backgroundColor: randomColor2 }]}>
            <Text style={styles.actionbtntxt}>Hey</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: randomColor3 }]}>
            <Text style={styles.actionbtntxt}>There!</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Dice imageUrl={diceRoll1} />
          <Dice imageUrl={diceRoll2} />
        </View>
        <Pressable
          onPress={() => {
            rollDiceOnTap()
            generateColor()
          }}
          style={{ backgroundColor: "#CAD5E2", borderRadius: 10 }}
        >
          <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
        </Pressable>
        <View style={styles.flex}>
          <View style={[styles.circle, { backgroundColor: randomColor2 }]}>
            <Text style={styles.actionbtntxt}>Enjoy</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: randomColor3 }]}>
            <Text style={styles.actionbtntxt}>Dice Roll</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
    justifyContent: "center",
  },
  diceContainer: {
    margin: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  diceImage: {
    width: 170,
    height: 170,

  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#000',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10
  },
  flex: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 0
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  actionbtntxt: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center"
  },
});

export default App;
