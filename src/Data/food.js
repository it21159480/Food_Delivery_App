const foods = [

    {
        id: "1",
        name: "Spicy Garlic Noodles",
        type: "Chinese",
        price: "$20",
        image: { uri: ("https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles-3.jpg") },
        details: "Spicy Garlic Noodles are a flavorful and indulgent dish characterized by tender egg noodles tossed in a spicy and aromatic garlic sauce. This dish typically combines the heat of red chili flakes or chili oil with the pungent and savory flavors of minced garlic. It is a popular Asian-inspired noodle dish that offers a delightful balance of spice and umami, making it a favorite for those who enjoy bold and zesty flavors. Spicy Garlic Noodles can be customized with various toppings such as vegetables, protein (like shrimp or chicken), and herbs to suit individual preferences, making it a versatile and satisfying meal.",
        location: [

            latitude = 6.9267378440439735,
            longitude = 79.86535683456795,
            uri = ("https://lh5.googleusercontent.com/p/AF1QipPJELGPvAuoMVfJDhI4vAwXc8qXXev7rtFcTbfi=w408-h274-k-no")
        ]
        ,
        category: "food"
        ,review : 365,
        rating : 4.8
    },
    {
        id: "2",
        name: "Biriyani",
        type: "Indian",
        price: "$45",
        image: { uri: ("https://www.unileverfoodsolutions.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/nasi-biriyani/main-header.jpg") },
        details: "Biryani is a beloved South Asian rice dish, renowned for its exquisite blend of aromatic spices, tender meat (such as chicken, mutton, or beef), or vegetables, all layered with fragrant, long-grain basmati rice. This culinary masterpiece is a symphony of flavors, where spices like cardamom, cinnamon, and saffron come together to create a harmonious and delicious melody. Garnished with fried onions, fresh herbs, and sometimes boiled eggs, biryani is a celebratory dish cherished for its complexity of taste and cultural significance, often gracing festive tables and special occasions across the Indian subcontinent and beyond.",
        location: [
            latitude = 6.904811162210102,
            longitude = 79.95249365827819,
            uri = ("https://lh5.googleusercontent.com/p/AF1QipMX6P-n1gKBJEzQrds0jahxkvG_u0_a81-Wz3xK=s387-k-no")
        ],
        category: "food"
        ,review : 250,
        rating : 4.2
    },
    {
        id: "3",
        name: "Vegetarian Burritos",
        type: "Mexican Cuisine",
        price: "$15",
        image: { uri: ("https://www.mexicanplease.com/wp-content/uploads/2022/06/Vegetarian-Breakfast-Burritos-11.jpg") },
        details: "Vegetarian burritos are a delicious and satisfying Mexican-inspired dish that consists of a tortilla wrap filled with a variety of vegetarian ingredients. These ingredients often include cooked rice, beans (such as black beans or pinto beans), sautéed or grilled vegetables (like bell peppers, onions, and zucchini), cheese, salsa, guacamole, and sour cream.",
        location: [
            latitude = 6.904834270669651,
            longitude = 79.9518797545788,
            uri = "https://lh5.googleusercontent.com/p/AF1QipPQxVJ8kNS18weA3YC9fo4Cgbk1Hxi2Di21z_lk=w203-h100-k-no-pi-10-ya26.960016-ro-0-fo100"
        ],
        category: "food"
        ,review : 120,
        rating : 3.9
    },
    {
        id: "4",
        name: "Creamy Boursin Pasta",
        type: "Italian Cuisine",
        price: "$30",
        image: { uri: ("https://thedizzycook.com/wp-content/uploads/2019/12/Boursin-pasta.jpg") },
        details: "Creamy Boursin Pasta - is a delectable pasta dish characterized by a luscious and velvety sauce made with Boursin cheese. This dish combines perfectly cooked pasta with the rich and creamy Boursin cheese, resulting in a harmonious blend of flavors. Boursin cheese, known for its garlic and herb infusion, infuses the pasta with a delightful combination of creamy texture and savory, aromatic notes. It is a quick and easy yet indulgent meal that is sure to satisfy your cravings for a creamy pasta delight.",
        location: [
            latitude = 6.9069342448316355,
            longitude = 79.97153652698803,
            uri = "https://lh5.googleusercontent.com/p/AF1QipM9GkVVTmcxNGpeO7BmY4Wj3jPEYwe4kVgdxmXS=w408-h408-k-no"
        ],
        category: "food"
        ,review : 500,
        rating : 4.5
    },
    {
        id: "5",
        name: "Chicken Alfredo",
        type: "Italian-American Pasta",
        price: "$25",
        image: { uri: ("https://hips.hearstapps.com/hmg-prod/images/chicken-alfredo-index-64ee1026c82a9.jpg?crop=0.9994472084024323xw:1xh;center,top&resize=1200:*") },
        details: "Chicken Alfredo is a classic Italian-American pasta dish that consists of tender pieces of chicken served over fettuccine pasta, all coated in a rich and creamy Alfredo sauce. The sauce is typically made with butter, heavy cream, garlic, and Parmesan cheese, creating a velvety and indulgent texture. It is a comforting and decadent dish known for its creamy, cheesy, and savory flavors, often garnished with parsley and additional grated Parmesan cheese.",
        location: [
            latitude = 6.9046571792741736,
            longitude = 79.95473933367313,
            uri = "https://lh5.googleusercontent.com/p/AF1QipOmbu6m-KRgDAtuuv4-rsgyOcSb1fXOlZeFATHU=w101-h72-n-k-no-nu"
        ],
        category: "food"
        ,review : 432,
        rating : 4.2
    },
    {
        id: "6",
        name: "Margherita Pizza",
        type: "Italian Pizza",
        price: "$45",
        image: { uri: ("https://static.toiimg.com/thumb/56868564.cms?width=1200&height=900") },
        details: "Margherita Pizza is a classic Italian pizza known for its simplicity and vibrant flavors. It features a thin crust topped with three basic ingredients: ripe tomatoes, fresh mozzarella cheese, and fragrant basil leaves. The combination of these elements results in a harmonious and delicious dish. The tomato sauce represents the red of the Italian flag, the mozzarella cheese adds creaminess, and the basil leaves contribute a burst of aromatic freshness. Margherita Pizza is a timeless favorite and a symbol of authentic Italian pizza craftsmanship.",
        location: [
            latitude = 6.906530864531055,
            longitude = 79.95012272080791,
            uri = "https://lh5.googleusercontent.com/p/AF1QipMThmrL_mDkogCTZeylKSLiDGwnVvByASPHXK9K=w408-h286-k-no"
        ],
        category: "food"
        ,review : 234,
        rating : 3.8
    },
    {
        id: "7",
        name: "Cheese Sandwich",
        type: "American Cuisine",
        price: "$15",
        image: { uri: ("https://assets.epicurious.com/photos/59b2bccaed60845e59e6d3d1/4:3/w_4992,h_3744,c_limit/shutterstock_321217517.jpg") },
        details: "A Grilled Cheese Sandwich is a classic comfort food made by placing slices of cheese between two slices of bread, then grilling or toasting the sandwich until the bread is crispy and the cheese melts, creating a warm and gooey filling. It is a simple yet satisfying dish loved by people of all ages, often served with tomato soup or as a quick and delicious snack or meal.",
        location: [
            latitude = 6.900720934023799,
            longitude = 79.95710112884535,
            uri = "https://lh5.googleusercontent.com/p/AF1QipMkOyaCII1n3GxuB-47FFRTsjZgxLA-c382oQ3R=w408-h541-k-no"
        ],
        category: "food"
        ,review : 800,
        rating : 4.9
    },
    {
        id: "8",
        name: "Caprese Salad",
        type: "Italian",
        price: "$20",
        image: { uri: ("https://www.cubesnjuliennes.com/wp-content/uploads/2022/08/Caprese-Salad-Recipe.jpg") },
        details: "The salad is often drizzled with extra-virgin olive oil, seasoned with salt and pepper, and sometimes finished with a balsamic vinegar reduction for an extra burst of flavor. Caprese Salad is not only visually appealing with its red, white, and green color palette (resembling the Italian flag) but also delights the palate with its harmonious combination of ingredients. It is a perfect appetizer or side dish, particularly during the summer months when tomatoes and basil are at their peak freshness.",
        location: [
            latitude = 6.906303007856024,
            longitude = 79.96420179997583,
            uri = "https://lh5.googleusercontent.com/p/AF1QipNh3IzhAwRywfJN23MsZs51RbrModb8192-BN_c=w408-h306-k-no"
        ],
        category: "food"
        ,review : 180,
        rating : 3.8
    },
    {
        id: "9",
        name: "Mojito",
        type: "Cocktail",
        price: "$10",
        location: [
            latitude = 6.905068970280983,
            longitude = 79.85404691511827,
            uri = "https://lh5.googleusercontent.com/p/AF1QipM22St9bSHXEOmRhBF9Yg8OvbR8jMSaFrBQtt7-=w408-h544-k-no"
        ],
        image: { uri: ("https://agratefulmeal.com/wp-content/uploads/2023/02/blue-mojito-curacao-cocktail-featured.jpg") },
        details: "The Mojito is a classic Cuban cocktail known for its refreshing taste and vibrant flavors. It's made with white rum, fresh lime juice, mint leaves, sugar, and soda water. The combination of sweet, citrusy, and minty flavors makes it a popular choice for hot summer days. It's typically served over ice in a tall glass and garnished with a sprig of mint and a slice of lime.",
        category: "drink"
        ,review : 150,
        rating : 4.3
    },
    {
        id: "10",
        name: "Espresso",
        type: "Coffee",
        price: "$3",
        location: [
            latitude = 6.92004537054849,
            longitude = 79.85725916948536,
            uri = "https://lh5.googleusercontent.com/p/AF1QipPdMj7soGVyL5rAYKWD7-a8fGfYn1qyqyGot6iM=w408-h306-k-no"
        ],
        image: { uri: ("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/1200px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg") },
        details: "Espresso is a concentrated coffee beverage brewed by forcing hot water through finely-ground coffee beans. It's known for its strong flavor and rich aroma. Espresso is the base for many other coffee drinks, such as lattes, cappuccinos, and macchiatos. It's typically served in a small cup called a demitasse and enjoyed as a quick pick-me-up or after-dinner drink.",
        category: "drink"
        ,review : 70,
        rating : 4.6
    },
    {
        id: "11",
        name: "Matcha Latte",
        type: "Tea",
        price: "$5",
        location: [
            latitude = 6.92004537054849,
            longitude = 79.85725916948536,
            uri = "https://lh5.googleusercontent.com/p/AF1QipPdMj7soGVyL5rAYKWD7-a8fGfYn1qyqyGot6iM=w408-h306-k-no"
        ],
        image: { uri: ("https://img.cuisineaz.com/660x660/2016/03/20/i107863-matcha-latte.jpg") },
        details: "Matcha latte is a Japanese-inspired beverage made with finely-ground green tea powder (matcha), steamed milk, and a touch of sweetener. It has a vibrant green color and a rich, creamy texture. Matcha is known for its antioxidant properties and is often praised for its potential health benefits. Matcha lattes are enjoyed for their unique flavor profile and calming effects.",
        category: "drink"
        ,review : 90,
        rating : 4.1
    }, {
        id: "12",
        name: "Iced Tea",
        type: "Tea",
        price: "$3",
        location: [
            latitude = 6.916832879488375,
            longitude = 79.85286614328726,
            uri = "https://lh5.googleusercontent.com/p/AF1QipNyvBzcmBeZy_felWSSMCqh3UlXWnWN2dH6uiok=w650-h240-k-no"
        ],
        image: { uri: ("https://www.allrecipes.com/thmb/REETjYFdVRmMtwVHPT66VmQVmmI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/109190-smooth-sweet-tea-DDMFS-4x3-9e849a386d414cb2b852099f02b6782d.jpg") },
        details: "Iced tea is a refreshing beverage made by steeping tea leaves in cold water and then served over ice. It can be sweetened with sugar, flavored with lemon or other fruits, and garnished with mint leaves. Iced tea is a popular summer drink known for its thirst-quenching properties and versatility. It comes in various flavors and can be enjoyed plain or with added ingredients like honey, peach, or raspberry.",
        category: "drink"
        ,review : 275,
        rating : 4.7
    },
    {
        id: "13",
        name: "Orange Juice",
        type: "Juice",
        price: "$4",
        location: [
            latitude = 6.909400778004179,
            longitude = 79.8668427751342,
            uri = "https://lh5.googleusercontent.com/p/AF1QipMhe4FD1TAdVrEHvxBSjgJDzA2iIeahcRWFuoM=w426-h240-k-no"
        ],
        image: { uri: ("https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg") },
        details: "Orange juice is a popular breakfast beverage made by squeezing fresh oranges to extract their juice. It's known for its bright color, tangy flavor, and high vitamin C content. Orange juice can be enjoyed on its own or mixed with other fruits to create delicious blends. It's often served chilled and is a refreshing option to start the day.",
        category: "drink"
        ,review : 654,
        rating : 4.8
    },
    {
        id: "14",
        name: "Piña Colada",
        type: "Cocktail",
        price: "$12",
        location: [
            latitude = 6.927698418095218,
            longitude = 79.84452327645333,
            uri = "https://lh5.googleusercontent.com/p/AF1QipNPmC5rBJ3e_6JCTKph0fdWbrfYF0nWm3TJmGz7=w426-h240-k-no"
        ],
        image: { uri: ("https://www.tammileetips.com/wp-content/uploads/2013/07/Pina-Colada-Recipe.jpg") },
        details: "Piña colada is a tropical cocktail made with rum, coconut cream, and pineapple juice. It's typically blended with ice to create a smooth and creamy texture. Piña colada is known for its sweet and fruity flavor, reminiscent of a tropical vacation. It's often garnished with a pineapple wedge and a maraschino cherry. Piña colada is a popular choice for beach parties and poolside lounging.",
        category: "drink"
        ,review : 365,
        rating : 4.5
    }
]
 export default foods;