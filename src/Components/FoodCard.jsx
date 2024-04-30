import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, } from 'react-native';
import foods from '../Data/food' // Adjusted import path
import COLORS from '../Data/colors'
import { Rating } from 'react-native-elements';


const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const FoodCard = ({ navigation }) => {
    const [activeCardIndex, setActiveCardIndex] = React.useState(0)
    const scrollX = React.useRef(new Animated.Value(0)).current


    const Card = ({ food, index }) => {
        const inputRange = [
            (index - 1) * cardWidth,
            index * cardWidth,
            (index + 1) * cardWidth,
        ];
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 0, 0.7],
        });
        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
        });

        const rating = food.rating;
        return (
            <TouchableOpacity
                disabled={activeCardIndex != index}
                activeOpacity={1}
                onPress={() => navigation.navigate('ProductDetailsScreen', food)}
            >
                <Animated.View style={{ ...style.card, transform: [{ scale }] }}>
                    <Animated.View style={{ ...style.cardOverLay, opacity }} />
                    <View style={style.priceTag}>
                        <Text
                            style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>
                            {food.price}
                        </Text>
                    </View>
                    <Image source={food.image} style={style.cardImage} />
                    <View style={style.cardDetails}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    {food.name}
                                </Text>
                                <Text style={{ color: "grey", fontSize: 14 }}>
                                    {food.type}
                                </Text>
                            </View>
                        </View>
                        <>
                            <Text style={{ color: 'gray', fontSize: 14,marginTop: 5, }}> {food.rating}</Text>
                        </>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                           
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Rating readonly type='custom' tintColor={'white'} ratingBackgroundColor={COLORS.grey} ratingColor={COLORS.primary}  fractions={1} startingValue={food.rating} imageSize={14} />
                            </View>
                            <Text style={{ fontSize: 14, color: "grey" }}>{food.review} reviews</Text>
                        </View>
                    </View>
                </Animated.View>
            </TouchableOpacity>

        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View>
                    <Animated.FlatList
                        onMomentumScrollEnd={(e) => {
                            setActiveCardIndex(
                                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
                            );
                        }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true },
                        )}
                        horizontal
                        data={foods}
                        contentContainerStyle={{
                            paddingVertical: 30,
                            paddingHorizontal: (width - cardWidth) / 2, // Center the active card
                        }}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => <Card food={item} index={index} />}
                        snapToInterval={cardWidth}
                    />

                </View>
               


            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    card: {
        height: 280,
        width: cardWidth,
        elevation: 15,
        // marginRight: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white,
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    priceTag: {
        height: 60,
        width: 80,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDetails: {
        height: 110,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%',
    },
    cardOverLay: {
        height: 280,
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 100,
        width: cardWidth,
        borderRadius: 15,
    },
})

export default FoodCard

