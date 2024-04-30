import React from 'react';
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,   
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
// import foods from '../Data/Food.json';
import foods from '../Data/food'
import COLORS from '../Data/colors';

const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;


const TopFoodCard = ({ navigation }) => {

    const foodsCategory = foods.filter(food => food.category === 'food');
    const drinksCategory = foods.filter(food => food.category === 'drink');


    const TopFood = ({ food }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetailsScreen', food)}>
                <View style={style.topFoodCard}>
                    <Image style={style.topFoodCardImage} source={food.image} />
                    <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'normal', color: COLORS.grey }}>
                            {food.type}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.grey }}>Populer Food</Text>
                </View>
                <FlatList
                    data={foodsCategory.slice(0,4)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 20,
                        marginTop: 20,
                        paddingBottom: 30,
                    }}
                    renderItem={({ item }) => <TopFood food={item} />}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.grey }}>Beverages</Text>
                </View>
                <FlatList
                    data={drinksCategory.slice(0,4)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 20,
                        marginTop: 20,
                        paddingBottom: 30,
                    }}
                    renderItem={({ item }) => <TopFood food={item} />}
                />


            </ScrollView>
        </SafeAreaView>
  )
}
const style = StyleSheet.create({
    topFoodCard: {
        height: 160,
        width: 220,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    topFoodCardImage: {
        height: 100,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
})
export default TopFoodCard