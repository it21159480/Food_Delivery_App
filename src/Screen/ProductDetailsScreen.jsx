import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import COLORS from '../Data/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopFoodCard from '../Components/TopFoodCard';
import { Rating } from 'react-native-elements';

const ProductDetailsScreen = ({ navigation, route }) => {
  const item = route.params;

  const handleBookNow = () => {
    navigation.navigate('BookingScreen', { food: item })
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={item.image}>
        <View style={style.header}>
          <View style={{ backgroundColor: COLORS.primary, borderRadius: 20,justifyContent:'center' , padding:5}}>
            <Icon
              name="arrow-back-ios"
              size={25}
              color={COLORS.white}
              onPress={navigation.goBack}
              style={{left:5}}
            />
          </View>

        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <Icon name="place" color={COLORS.white} size={28} onPress={() => navigation.navigate('UserMap', { location: item.location })} />
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
       
          <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row" }}>
                <Rating readonly type='custom' tintColor={'white'} ratingBackgroundColor={COLORS.grey} ratingColor={COLORS.primary} fractions={1} startingValue={item.rating} imageSize={20} />
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>{item.rating}</Text>
            </View>
            <Text style={{ fontSize: 13, color: COLORS.grey }}>{item.review} reviews</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ lineHeight: 20, color: COLORS.grey, textAlign: 'justify' }}>
              {item.details}
            </Text>
          </View>
        </View>
        <View style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 20,
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Per Price
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginLeft: 5,
              }}>
              {item.price}
            </Text>

          </View>
        </View>
        <TouchableOpacity onPress={handleBookNow} style={style.btn}>
          <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Pre - Order</Text>
        </TouchableOpacity>
      </View>
      <TopFoodCard navigation={navigation} />
    </ScrollView>
  )
}
const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 150,
    paddingLeft: 30,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',

  },
});


export default ProductDetailsScreen