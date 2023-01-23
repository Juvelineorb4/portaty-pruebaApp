import { StyleSheet, View, Text, FlatList, Pressable, Alert, Image } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'


const BrandList = ({ items }) => {
  const navigation = useNavigation();
  const onSelectBrandPressed = ({ id, name }: { id: String, name: String }) => {
    navigation.navigate("Products", {
      category: 'brand',
      subCategory: {
        id,
        name
      }
    })
  }
  // funcion que permite colocar en mayuscula la primera letra
  const LetterFirstUp = (i: String) => {
    return i ? i[0].toUpperCase() + i.slice(1) : "";
  }
  return (
    <View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {
          items.map((item, index) => (
            <Pressable style={styles.card} key={index} onPress={() => onSelectBrandPressed(item)}>
              <View style={{ height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                {item.image ? <Image style={styles.image} source={{ uri: item.image }} /> : <FontAwesome name={item.name.toLowerCase()} size={40} />}
              </View>
              <Text >{LetterFirstUp(item.name)}</Text>
            </Pressable>
          ))
        }
      </View>
    </View>
  )
}

export default BrandList
const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 2,
    borderWidth: 1,
    minWidth: 160,
    height: 160,
    borderColor: '#d1d1d1',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'center'
  }
})