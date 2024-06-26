import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FoodCard from '../Components/FoodCard';
import TopFoodCard from '../Components/TopFoodCard';
import foods from '../Data/food'
import COLORS from '../Data/colors'

const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const HomeScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredResults = foods.filter(
        (food) =>
          food.name.toLowerCase().includes(text.toLowerCase()) ||
          food.type.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  const Card = ({ searchFood }) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('ProductDetailsScreen', searchFood)}>
      <View style={style.card}>
        <Image source={searchFood.image} style={style.cardImage} />
        <View style={style.cardDetails}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{searchFood.name}</Text>
          <Text style={{ color: COLORS.grey, fontSize: 12 }}>{searchFood.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View style={{ paddingBottom: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hungry Time</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Teast Your </Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color:COLORS.primary}}>Food</Text>
          </View>
        </View>
        <Icon name='person-outline' size={38} color={COLORS.grey} onPress={() => navigation.navigate('OrderedPage')} />
      </View>
      <View style={style.searchInputContainer}>
        <Icon name='search' size={25} style={{ marginLeft: 20 }} />
        <TextInput
          placeholder='Search'
          style={{ fontSize: 18, paddingLeft: 10, }}
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      {searchQuery.trim() ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (<Card searchFood={item} />)}
          contentContainerStyle={style.flatListContainer}
        />
      ) : (
        <ScrollView showsHorizontalScrollIndicator={false}>
          <FoodCard navigation={navigation} />
          <TopFoodCard navigation={navigation} />
        </ScrollView>
      )
      }
    </SafeAreaView >
  )
}
const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 40,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  card: {
    elevation: 5,
    margin: 10,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    marginHorizontal: 30,
    height: 230
  },
  cardImage: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardDetails: {
    padding: 20,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
})

export default HomeScreen