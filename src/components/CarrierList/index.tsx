import { StyleSheet, View, Text, Image, FlatList, Pressable, Alert } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
const CarrierList = ({ items }) => {
  // navigation para navegar entre screens
  const navigation = useNavigation();
  //mostrar todo 
  const onShowAllPressed = () => {
    Alert.alert('Show All Carriers')
  }
  const onSelectCarrierPressed = ({ id, name }: { id: String, name: String }) => {
    navigation.navigate("Products", {
      category: "carrier",
      subCategory: {
        id,
        name
      }
    });
  }
  return (
    <View>
      {/* Header */}
      <View style={styles.headerList}>
        <Text style={{ fontWeight: "bold" }} >Carriers</Text>
        <Pressable style={styles.textShowAll} onPress={onShowAllPressed}>
          <Text>
            Show All
          </Text>
          <FontAwesome
            name='play'
            size={12}
            color='#1c1b19'
            style={styles.arrow}
          />
        </Pressable>
      </View>
      {/* List */}
      <FlatList
        data={items}
        renderItem={
          ({ item, index }) => (
            <Pressable onPress={() => onSelectCarrierPressed(item)}>
              <View style={styles.card}>
                <Image style={styles.image} source={{ uri: item.image }} />
              </View>
            </Pressable>
          )
        }
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default CarrierList


const styles = StyleSheet.create({

  image: {
    height: 100,
    width: 150,
    resizeMode: 'contain'
  },
  card: {
    margin: 2,
    borderWidth: 1,
    width: 160,
    borderColor: '#d1d1d1',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  arrow: {
    marginLeft: 2,
  },
  textShowAll: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})