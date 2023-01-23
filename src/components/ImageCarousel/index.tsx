import { StyleSheet, View, Animated, Image, useWindowDimensions, Text } from 'react-native'
import React, { useCallback, useState } from 'react'

//custom text
import second from './'

const ImageCarousel = ({ items }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const imageW = useWindowDimensions().width
  const imageH = imageW * 0.7
  const windowWidth = useWindowDimensions().width

  // Configruacion para el viewabilityConfigCallbackPairs
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const onViewableItemsChanged = useCallback(({ viewableItems }) => {

    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0)
    }
  }, []);
  const viewabilityConfigCallbackPairs = React.useRef([{ viewabilityConfig, onViewableItemsChanged }]);
  // termina la configuracion para el viewabilityConfigCallbackPairs




  return (
    <View style={styles.root} >
      <Animated.FlatList
        data={items}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ width: windowWidth, justifyContent: 'center', alignItems: 'center', }}>
            {/* image carousel */}
            <Image
              source={{ uri: item.image }}
              style={[{
                width: imageW,
                height: imageH,
              }, styles.image]}
            />
            {/* text center */}
            {item?.description && <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 30 }}>{item.description}</Text>
            </View>}
          </View>
        )}
        horizontal
        pagingEnabled
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      {/* dots image carousel */}
      <View style={[styles.dots, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'flex-end' }]}>
        {
          items.map((item, index) => {
            return (
              < View
                key={index}
                style={[styles.dot, { backgroundColor: index == activeIndex ? 'white' : '#c9c9c9' }]}
              />
            )
          })
        }
      </View>
    </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 25,
    borderWidth: 1,
    // backgroundColor: '#c9c9c9',
    // borderColor: '#ededed',
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,

  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5
  },
  image: {
    resizeMode: 'cover',
  }
})