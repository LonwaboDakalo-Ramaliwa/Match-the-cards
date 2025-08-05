import { useState } from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

export default function App() {

const [tile1] = useState(Math.floor(Math.random() * 3)+1);
const [tile2] = useState(Math.floor(Math.random() * 3)+1);
const [tile3] = useState(Math.floor(Math.random() * 3)+1);
const [tile4] = useState(Math.floor(Math.random() * 3)+1);
const [tile5] = useState(Math.floor(Math.random() * 3)+1);
const [tile6] = useState(Math.floor(Math.random() * 3)+1);

const [selected1, setselected1] = useState(false);
const [selected2, setselected2] = useState(false);
const [selected3, setselected3] = useState(false);
const [selected4, setselected4] = useState(false);
const [selected5, setselected5] = useState(false);
const [selected6, setselected6] = useState(false);

const [tileSelected, setTileSelected] = useState<boolean>(false);
const [selctionCount, setSelectionCount] = useState<number>(0)

const[firstSelected, setFirstSelected] = useState<number>(0);
const[secondSelected, setSecondSelected] = useState<number>(0);

const handleTileClick = (value: number, setSelected: (val: boolean) => void) => {
  setTileSelected(true);

setSelectionCount((prev) => {
  if (prev === 0) {
      setFirstSelected(value);
      return prev + 1;
  } else if (prev === 1) {
      setSecondSelected(value);
      return 0
  }
  return prev;
});
}
  /*if (firstSelected === 0){
    setFirstSelected(value);
  } else {
    if (secondSelected === 0 && value !== firstSelected){
      setSecondSelected(value);
    }
  //if (firstSelected === secondSelected) {
    //output "MATCHED"
  //}
  }
};*/

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Matching Game v1 </Text>
      <View style={styles.row}>
        <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile1, setselected1)}>
          <Text style={styles.tileText}>{selected1 ? tile1 : ''}</Text>
        </TouchableHighlight>

          <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile2, setselected2)}>
          <Text style={styles.tileText}>{selected2 ? tile2 : ''}</Text>
        </TouchableHighlight>

          <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile3, setselected3)}>
          <Text style={styles.tileText}>{selected3 ? tile3 : ''}</Text>
        </TouchableHighlight>
      </View>

       <View style={styles.row}>
        <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile4, setselected4)}>
          <Text style={styles.tileText}>{selected4 ? tile4 : ''}</Text>
        </TouchableHighlight>

          <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile5, setselected5)}>
          <Text style={styles.tileText}>{selected5 ? tile5 : ''}</Text>
        </TouchableHighlight>
        
          <TouchableHighlight style={styles.tile} onPress={() => handleTileClick(tile6, setselected6)}>
          <Text style={styles.tileText}>{selected6 ? tile6 : ''}</Text>
        </TouchableHighlight>
      </View>
      <Text>Selected Tiles:</Text>
      <Text>{firstSelected}</Text>
      <Text>{secondSelected}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
flexDirection: 'row',
  },
  tile: {
    width: 80,
    height: 80,
    backgroundColor: '#eee',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontSize: 20,
  },
});