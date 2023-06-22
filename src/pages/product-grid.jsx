import { useEffect, useState } from "react";
const dummyData = {
  total: 400,
  data: [
    {
      title: "IMARA Women Black Solid Top",
      id: 1,
      size: "XL",
      product_type: "Top",
      type: "Clothing/Women/Tops/IMARA/More by IMARA",
      actual_color: "Black",
      brand: "IMARA",
      images:
        "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/88c6ad02-eab9-42c8-8b8e-cbcd8f015d36...",
      price: 959,
    },
    {
      title: "House of Pataudi Men Black Printed Straight Kurta",
      id: 2,
      size: "XL",
      product_type: "Straight Kurta",
      type: "Clothing/Men/Kurtas/House of Pataudi/More by House of Pataudi",
      actual_color: "Black",
      brand: "House of Pataudi",
      images:
        "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/7f473119-8e08-4548-b5f3-689c25b698b...",
      price: 799,
    },
    {
      title: "The White Willow Unisex Off-White Therapedic Memory Foam Pillow",
      id: 3,
      size: "S",
      product_type: "",
      type: "Home/Unisex/Pillows/The White Willow/More by The White Willow",
      actual_color: "White",
      brand: "The White Willow",
      images:
        "http://assets.myntassets.com/v1/assets/images/9245141/2019/4/10/c4aecdbc-1c39-4c4b-871c-db76742ce5fc...",
      price: 1399,
    },
    {
      title: "Dupatta Bazaar Pink Dupatta",
      id: 4,
      size: "Onesize",
      product_type: "Dupatta",
      type: "Clothing/Women/Dupatta/Dupatta Bazaar/More by Dupatta Bazaar",
      actual_color: "Pink",
      brand: "Dupatta Bazaar",
      images:
        "http://assets.myntassets.com/v1/assets/images/1314889/2016/4/20/11461153070320-Dupatta-Bazaar-Black-...",
      price: 349,
    },
    {
      title: "Manyavar Men Yellow & White Self Design Kurta with Churidar",
      id: 5,
      size: "S",
      product_type: "Kurta with Churidar",
      type: "Clothing/Men/Kurta Sets/Manyavar/More by Manyavar",
      actual_color: "Yellow | White",
      brand: "Manyavar",
      images:
        "http://assets.myntassets.com/v1/assets/images/7705322/2018/10/29/e9ea701d-93aa-460f-a0dc-e916afdb4f6...",
      price: 2999,
    },
    {
      title: "Wintage Men Beige Solid Kurta with Pyjamas",
      id: 6,
      size: "L",
      product_type: "Kurta with Pyjamas",
      type: "Clothing/Men/Kurta Sets/Wintage/More by Wintage",
      actual_color: "Beige",
      brand: "Wintage",
      images:
        "http://assets.myntassets.com/v1/assets/images/2160958/2017/10/5/11507205292287-Wintage-Men-Beige-Sol...",
      price: 979,
    },
    {
      title: "Geroo Women Green cotton hand block print skirt",
      id: 7,
      size: "34",
      product_type: "",
      type: "Clothing/Women/Skirts/Geroo Jaipur/More by Geroo Jaipur",
      actual_color: "Green",
      brand: "Geroo Jaipur",
      images:
        "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/ec7ea490-1f0a-47a2-952d-830bf7db955...",
      price: 1572,
    },
    {
      title: "The Indian Garage Co Men Blue & White Printed A-Line Kurta",
      id: 8,
      size: "XL",
      product_type: "A-Line Kurta",
      type: "Clothing/Men/Kurtas/The Indian Garage Co/More by The Indian Garage Co",
      actual_color: "Blue | White",
      brand: "The Indian Garage Co",
      images:
        "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802877-The-Indian-Garage-Co-...",
      price: 479,
    },
    {
      title: "Anouk Women Maroon Solid A-Line Kurta",
      id: 9,
      size: "XS",
      product_type: "A-Line Kurta",
      type: "Clothing/Women/Kurtas/Anouk/More by Anouk",
      actual_color: "Maroon",
      brand: "Anouk",
      images:
        "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/1ab6bfba-4825-4e59-ac0e-21e1ebb63ae...",
      price: 1359,
    },
    {
      title: "SALWAR STUDIO Boys Orange & White Printed Kurta with Pyjamas",
      id: 10,
      size: "3-4Y",
      product_type: "Kurta with Pyjamas",
      type: "Clothing/Boys/Kurta Sets/SALWAR STUDIO/More by SALWAR STUDIO",
      actual_color: "White | Orange",
      brand: "SALWAR STUDIO",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/524faa41-cecd-48b9-bfcf-f92b696e...",
      price: 586,
    },
    {
      title: "Clora Creation Women Navy Blue Wide Leg Printed Palazzos",
      id: 11,
      size: "40",
      product_type: "Printed Palazzos",
      type: "Clothing/Women/Palazzos/Clora Creation/More by Clora Creation",
      actual_color: "Blue | Navy",
      brand: "Clora Creation",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cd9e6d5d-50cf-4188-b229-8b890c4...",
      price: 979,
    },
    {
      title: "Libas Women Blue & White Striped Straight Kurta",
      id: 12,
      size: "S",
      product_type: "Straight Kurta",
      type: "Clothing/Women/Kurtas/Libas/More by Libas",
      actual_color: "Blue | White",
      brand: "Libas",
      images:
        "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/dad722b8-f2c0-4e7e-aa5f-a3814856f858...",
      price: 519,
    },
    {
      title: "Libas Women Coffee Brown Solid Kurta with Palazzos",
      id: 13,
      size: "M",
      product_type: "Kurta with Palazzos",
      type: "Clothing/Women/Kurta Sets/Libas/More by Libas",
      actual_color: "Brown | Coffee Brown",
      brand: "Libas",
      images:
        "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/8728af1c-969f-445c-b12d-12b6c3fb589e...",
      price: 1119,
    },
    {
      title: "Anouk Women Navy Printed Straight Kurta",
      id: 14,
      size: "XL",
      product_type: "Straight Kurta",
      type: "Clothing/Women/Kurtas/Anouk/More by Anouk",
      actual_color: "Navy",
      brand: "Anouk",
      images:
        "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674302-Anouk-Women-Navy-Blue...",
      price: 1099,
    },
    {
      title: "Global Desi White Net Sheer Shrug",
      id: 15,
      size: "XS",
      product_type: "Shrug",
      type: "Clothing/Women/Shrug/Global Desi/More by Global Desi",
      actual_color: "White",
      brand: "Global Desi",
      images:
        "http://assets.myntassets.com/v1/assets/images/1849998/2017/4/25/11493122405274-Global-Desi-White-Net...",
      price: 719,
    },
    {
      title: "Aj DEZInES Boys Black & Grey Sherwani Set",
      id: 16,
      size: "4-5Y",
      product_type: "",
      type: "Clothing/Boys/Sherwani/Aj DEZInES/More by Aj DEZInES",
      actual_color: "Black | Grey",
      brand: "Aj DEZInES",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/29/d01afe21-d928-4f8a-873c-766e1ea...",
      price: 1499,
    },
    {
      title:
        "612 league Boys Red & Beige Solid Kurta with Churidar and Waistcoat",
      id: 17,
      size: "4-5Y",
      product_type: "Kurta with Churidar",
      type: "Clothing/Boys/Kurta Sets/612 league/More by 612 league",
      actual_color: "Beige | Red",
      brand: "612 league",
      images:
        "http://assets.myntassets.com/v1/assets/images/8991019/2019/4/9/0da32239-9a9a-4179-bbcc-5deba07664f91...",
      price: 1047,
    },
    {
      title: "Jompers Men Red & Beige Self Design Kurta with Churidar",
      id: 18,
      size: "L",
      product_type: "Kurta with Churidar",
      type: "Clothing/Men/Kurta Sets/Jompers/More by Jompers",
      actual_color: "Beige | Red",
      brand: "Jompers",
      images:
        "http://assets.myntassets.com/v1/assets/images/7217185/2018/8/24/51335b38-a88e-49b3-affa-d2cc8e327d0e...",
      price: 1499,
    },
    {
      title: "Libas Women Red Printed A-Line Dress with Ethnic Jacket",
      id: 19,
      size: "M",
      product_type: "Ethnic Jacket",
      type: "Clothing/Women/Dresses/Libas/More by Libas",
      actual_color: "Red",
      brand: "Libas",
      images:
        "http://assets.myntassets.com/v1/assets/images/9088553/2019/3/28/e355672e-a2a8-46ff-a72d-142b49a7532e...",
      price: 989,
    },
    {
      title: "SOJANYA Boys Blue & Black Solid Kurta with Harem Pants",
      id: 20,
      size: "11-12Y",
      product_type: "Solid Kurta",
      type: "Clothing/Boys/Kurta Sets/SOJANYA/More by SOJANYA",
      actual_color: "Black | Blue",
      brand: "SOJANYA",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/3/14/9e668546-91c1-4b77-9752-8ece4f9...",
      price: 1599,
    },
    {
      title: "W Women Peach-Coloured & Golden Printed Wide Leg Palazzos",
      id: 21,
      size: "33",
      product_type: "Wide Leg Palazzo",
      type: "Clothing/Women/Palazzos/W/More by W",
      actual_color: "",
      brand: "W",
      images:
        "http://assets.myntassets.com/v1/assets/images/2289520/2017/12/12/11513080094279-W-Women-Peach-Colour...",
      price: 1099,
    },
    {
      title:
        "Story@home Yellow Geometric Flat 150 TC Cotton Queen Bedsheet with 2 Pillow Covers",
      id: 22,
      size: "Double Queen",
      product_type: "",
      type: "Home/Unisex/Bedsheets/Story@home/More by Story@home",
      actual_color: "Yellow",
      brand: "Story@home",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/18/fe9abbd4-ba85-4331-b6d8-1df9592...",
      price: 539,
    },
    {
      title: "Ethnicity Men Blue Solid A-Line Kurta",
      id: 23,
      size: "S",
      product_type: "A-Line Kurta",
      type: "Clothing/Men/Kurtas/Ethnicity/More by Ethnicity",
      actual_color: "Blue",
      brand: "Ethnicity",
      images:
        "http://assets.myntassets.com/v1/assets/images/7536405/2018/10/30/a131f716-8ef5-4cc3-9b0d-48422824085...",
      price: 1499,
    },
    {
      title: "British Club Men Green Printed Straight Kurta",
      id: 24,
      size: "XL",
      product_type: "Straight Kurta",
      type: "Clothing/Men/Kurtas/British Club/More by British Club",
      actual_color: "Green",
      brand: "British Club",
      images:
        "http://assets.myntassets.com/v1/assets/images/8339211/2019/1/11/377beeae-f6ee-480d-8b71-a23cb60c002b...",
      price: 678,
    },
    {
      title: "Fabindia Women Off-White Solid Straight Kurta",
      id: 25,
      size: "S",
      product_type: "Straight Kurta",
      type: "Clothing/Women/Kurtas/Fabindia/More by Fabindia",
      actual_color: "",
      brand: "Fabindia",
      images:
        "http://assets.myntassets.com/v1/assets/images/2527437/2018/8/3/b0324c50-320e-4d66-9018-6e893a3cb6b11...",
      price: 1190,
    },
    {
      title: "Sangria Women Cream-Coloured Solid Straight Kurta",
      id: 26,
      size: "XXL",
      product_type: "Straight Kurta",
      type: "Clothing/Women/Kurtas/Sangria/More by Sangria",
      actual_color: "",
      brand: "Sangria",
      images:
        "http://assets.myntassets.com/v1/assets/images/9731923/2019/5/21/11a4aee5-5041-4c51-ab04-5989dbe850d2...",
      price: 999,
    },
    {
      title: "Svanik Men Green & Beige Printed Straight Kurta",
      id: 27,
      size: "M",
      product_type: "Straight Kurta",
      type: "Clothing/Men/Kurtas/Svanik/More by Svanik",
      actual_color: "Beige | Green",
      brand: "Svanik",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/28/397a12f2-ff94-40eb-b49f-c524ba4...",
      price: 1214,
    },
    {
      title: "Manyavar Men Sea Green Self Design Kurta with Churidar",
      id: 28,
      size: "S",
      product_type: "Kurta with Churidar",
      type: "Clothing/Men/Kurta Sets/Manyavar/More by Manyavar",
      actual_color: "Green | Sea Green",
      brand: "Manyavar",
      images:
        "http://assets.myntassets.com/v1/assets/images/7432155/2018/9/19/1fb2f966-63c5-4cb1-a78d-12ab44faf1e2...",
      price: 4999,
    },
    {
      title:
        "Svanik Men Grey & Maroon Solid Kurta with Pyjamas and Nehru Jacket",
      id: 29,
      size: "XL",
      product_type: "Kurta with Pyjamas",
      type: "Clothing/Men/Kurta Sets/Svanik/More by Svanik",
      actual_color: "Maroon | Grey",
      brand: "Svanik",
      images:
        "http://assets.myntassets.com/v1/assets/images/7672921/2018/10/24/7714fbfc-3cc2-44fb-ae94-8c664098611...",
      price: 1599,
    },
    {
      title: "Rohit Bal Limited Men Black Yoke Design Kurta with Pyjamas",
      id: 30,
      size: "XL",
      product_type: "Kurta with Pyjamas",
      type: "Clothing/Men/Kurta Sets/Rohit Bal Limited/More by Rohit Bal Limited",
      actual_color: "Black",
      brand: "Rohit Bal Limited",
      images:
        "http://assets.myntassets.com/v1/assets/images/7024471/2018/9/22/57673c9e-5888-4d9c-9fa5-8ba0b8d89040...",
      price: 4600,
    },
    {
      title: "Anouk Women Red Printed A-Line Kurta",
      id: 31,
      size: "XS",
      product_type: "A-Line Kurta",
      type: "Clothing/Women/Kurtas/Anouk/More by Anouk",
      actual_color: "Red",
      brand: "Anouk",
      images:
        "http://assets.myntassets.com/v1/assets/images/2322993/2018/4/7/11523092701909-Anouk-Women-Red-Printe...",
      price: 2499,
    },
    {
      title: "Ishin Women Pink Self Design Straight Palazzos",
      id: 32,
      size: "36",
      product_type: "Straight Palazzo",
      type: "Clothing/Women/Palazzos/Ishin/More by Ishin",
      actual_color: "Pink",
      brand: "Ishin",
      images:
        "http://assets.myntassets.com/v1/assets/images/7057806/2018/7/31/ea90296f-5628-4718-bd94-18128d9bd292...",
      price: 494,
    },
    {
      title: "See Designs Men Blue Solid Kurta with Trousers",
      id: 33,
      size: "S",
      product_type: "Kurta with Trousers",
      type: "Clothing/Men/Kurta Sets/See Designs/More by See Designs",
      actual_color: "Blue",
      brand: "See Designs",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/2/20/6c11e68d-287e-4d90-8509-ec58df6...",
      price: 1199,
    },
    {
      title: "Biba Women Blue & White Printed Kurta with Trousers & Dupatta",
      id: 34,
      size: "XXL",
      product_type: "Kurta with Trousers & Dupatta",
      type: "Clothing/Women/Kurta Sets/Biba/More by Biba",
      actual_color: "Blue | White",
      brand: "Biba",
      images:
        "http://assets.myntassets.com/v1/assets/images/2529852/2018/3/12/11520832694042-SKD-4691520832693916-...",
      price: 2999,
    },
    {
      title: "Libas Women White & Magenta Printed A-Line Kurta",
      id: 35,
      size: "S",
      product_type: "A-Line Kurta",
      type: "Clothing/Women/Kurtas/Libas/More by Libas",
      actual_color: "White | Magenta",
      brand: "Libas",
      images:
        "http://assets.myntassets.com/v1/assets/images/7098780/2018/8/16/c6b0f495-16a9-43ba-8a3f-8ca44d889319...",
      price: 999,
    },
    {
      title: "Purple State Men Black Solid Straight Kurta",
      id: 36,
      size: "XXL",
      product_type: "Straight Kurta",
      type: "Clothing/Men/Kurtas/Purple State/More by Purple State",
      actual_color: "Black | Purple",
      brand: "Purple State",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/28/bdd6b797-8154-4770-a809-d93ba0d...",
      price: 779,
    },
    {
      title: "Shree Charcoal Grey Solid Tunic",
      id: 37,
      size: "XXL",
      product_type: "Tunic",
      type: "Clothing/Women/Tunics/Shree/More by Shree",
      actual_color: "Grey | Charcoal",
      brand: "Shree",
      images:
        "http://assets.myntassets.com/v1/assets/images/2366793/2018/1/10/11515579885947-Shree-Grey-Solid-Tuni...",
      price: 449,
    },
    {
      title: "SG YUVRAJ Boys Maroon & Navy Blue Solid Kurta with Trousers",
      id: 38,
      size: "5-6Y",
      product_type: "Kurta with Trousers",
      type: "Clothing/Boys/Kurta Sets/SG YUVRAJ/More by SG YUVRAJ",
      actual_color: "Maroon | Blue | Navy",
      brand: "SG YUVRAJ",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2019/7/18/0697bc97-9cdc-4081-abf4-f448eaf...",
      price: 1399,
    },
    {
      title: "Sangria Women Maroon Printed A-Line Kurta",
      id: 39,
      size: "S",
      product_type: "A-Line Kurta",
      type: "Clothing/Women/Kurtas/Sangria/More by Sangria",
      actual_color: "Maroon",
      brand: "Sangria",
      images:
        "http://assets.myntassets.com/v1/assets/images/productimage/2018/7/6/ccb08d41-d67a-479d-b3e9-d44e5fa5...",
      price: 749,
    },
    {
      title: "even Men Yellow Solid A-Line Kurta",
      id: 40,
      size: "M",
      product_type: "A-Line Kurta",
      type: "Clothing/Men/Kurtas/even/More by even",
      actual_color: "Yellow",
      brand: "even",
      images:
        "http://assets.myntassets.com/v1/assets/images/5351960/2018/4/19/11524115251293-NA-2321524115251074-1...",
      price: 765,
    },
    {
      title: "Shree Women Yellow & Purple Printed Straight Kurta",
      id: 41,
      size: "XXL",
      product_type: "Straight Kurta",
      type: "Clothing/Women/Kurtas/Shree/More by Shree",
      actual_color: "Yellow | Purple",
      brand: "Shree",
      images:
        "http://assets.myntassets.com/v1/assets/images/5647803/2018/10/24/43f77df9-d9d2-4e47-bc2c-6a3ed98e18c...",
      price: 539,
    },
    {
      title:
        "Rajesh Silk Mills Beige & Blue Embellished Semi-Stitched Lehenga & Blouse with Dupatta",
      id: 42,
      size: "Onesize",
      product_type: "Lehenga & Blouse with Dupatta",
      type: "Clothing/Women/Lehenga Choli/Rajesh Silk Mills/More by Rajesh Silk Mills",
      actual_color: "Beige | Blue",
      brand: "Rajesh Silk Mills",
      images:
        "http://assets.myntassets.com/v1/assets/images/7562189/2018/10/6/89208c7c-1887-4452-8ab2-23ae8401d024...",
      price: 929,
    },
    {
      title: "Global Desi Blue Treggings",
      id: 43,
      size: "L",
      product_type: "Treggings",
      type: "Clothing/Women/Leggings/Global Desi/More by Global Desi",
      actual_color: "Blue",
      brand: "Global Desi",
      images:
        "http://assets.myntassets.com/v1/assets/images/1057637/2017/3/24/11490330235688-Global-Desi-Blue-Treg...",
      price: 449,
    },
    {
      title: "Manu Men Maroon & Beige Solid Kurta with Pyjamas",
      id: 44,
      size: "L",
      product_type: "Kurta with Pyjamas",
      type: "Clothing/Men/Kurta Sets/Manu/More by Manu",
      actual_color: "Beige | Maroon",
      brand: "Manu",
      images:
        "http://assets.myntassets.com/v1/assets/images/2514715/2018/3/27/11522126915267-Manu-Maroon-Kurta-Set...",
      price: 1499,
    },
    {
      title: "I AM FOR YOU Women Orange & Black Printed A-Line Dress",
      id: 45,
      size: "XL",
      product_type: "A-Line Dress",
      type: "Clothing/Women/Dresses/I AM FOR YOU/More by I AM FOR YOU",
      actual_color: "Black | Orange",
      brand: "I AM FOR YOU",
      images:
        "http://assets.myntassets.com/v1/assets/images/9191279/2019/4/9/f41225c6-17fd-4035-b322-498bcf911ced1...",
      price: 999,
    },
    {
      title: "Libas Women Maroon Solid Straight Kurta",
      id: 46,
      size: "XS",
      product_type: "Straight Kurta",
      type: "Clothing/Women/Kurtas/Libas/More by Libas",
      actual_color: "Maroon",
      brand: "Libas",
      images:
        "http://assets.myntassets.com/v1/assets/images/7719028/2018/11/16/2f8f96f3-e034-44f4-9053-da463d8362e...",
      price: 599,
    },
    {
      title: "Libas Women Grey & Orange Checked Kurta with Palazzos",
      id: 47,
      size: "L",
      product_type: "Kurta with Palazzos",
      type: "Clothing/Women/Kurta Sets/Libas/More by Libas",
      actual_color: "Grey | Orange",
      brand: "Libas",
      images:
        "http://assets.myntassets.com/v1/assets/images/7719004/2018/11/21/c078035f-d0be-45c8-ab0c-b9ea3602fad...",
      price: 1599,
    },
    {
      title: "See Designs Men Blue Solid A-Line Kurta",
      id: 48,
      size: "XXL",
      product_type: "A-Line Kurta",
      type: "Clothing/Men/Kurtas/See Designs/More by See Designs",
      actual_color: "Blue",
      brand: "See Designs",
      images:
        "http://assets.myntassets.com/v1/assets/images/5524429/2018/4/26/11524739601948-na-9431524739601735-1...",
      price: 879,
    },
    {
      title:
        "CHRISTY Set of 2 Grey & Off-White Jacquard Patterned 20\\x 29.5\\ Rectangular Pillow Covers",
      id: 49,
      size: "Onesize",
      product_type: "",
      type: "Home/Unisex/Pillow Covers/CHRISTY/More by CHRISTY",
      actual_color: "Grey",
      brand: "CHRISTY",
      images:
        "http://assets.myntassets.com/v1/assets/images/4319575/2018/5/4/11525433354896-CHRISTY-Set-of-2-Grey-...",
      price: 898,
    },
    {
      title: "Libas Women Yellow & Golden Block Print Straight Kurta",
      id: 50,
      size: "L",
      product_type: "Straight Kurta",
      type: "Clothing/Women/Kurtas/Libas/More by Libas",
      actual_color: "Yellow",
      brand: "Libas",
      images:
        "http://assets.myntassets.com/v1/assets/images/9720211/2019/6/1/b32cb37c-4f46-4f8d-a8de-1c66e86bd8801...",
      price: 989,
    },
  ],
};
const images = [
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22120556/2023/2/25/986d6f97-fe9b-487a-9c64-f577e0a32c491677314970316KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset7.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22858200/2023/4/27/190af50d-4a62-42b2-93f6-aca26ae7c5961682582082917-Anaya-Womens-Cotton-Straight-Sleeveless-Suit-Set-46116825820-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20695836/2022/11/10/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270WomensRayonPrintedEmbroideredKurtaWithPantAndDupatta1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22858390/2023/4/22/98867d8f-995d-479d-bb27-f0e6ecc91cea1682141094782KurtaSets1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23479440/2023/5/30/f22b9e4a-7956-4df5-9214-2d4091e4ff781685460093655KurtaSets1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21320942/2022/12/27/aeb5364c-9221-4944-8567-aae54e728ab81672136428569KALINIWomenOrangeStraightPrintedKurtaWithTrouserDupatta1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22143838/2023/3/9/19485e92-d4cf-4d2e-8e10-01dacc0d4b4d1678359322683-anayna-Ethnic-Motifs-Printed-Kurta-5981678359322070-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17644452/2022/4/6/ef668fbb-c88a-4243-b9bd-3282d2a84afd1649238881413-Libas-Women-Kurtas-5701649238880836-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23002412/2023/5/3/3ca8bc21-fa42-4788-ba93-a30cb3ea9f581683114696978WEcruPrintedFestiveKurtaPantsDupattaSet1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17049122/2022/3/18/aeac2b37-ff10-4e1b-989a-224aad21142f1647603226632-Anouk-Women-Kurta-Sets-281647603226139-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20498352/2022/10/22/3424a72e-8518-4853-aa99-e48a0e1205841666419466834KALINIWomenPistaGreenStraightKurtawithTrouserDupatta1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21332980/2022/12/28/9ec77168-5a4e-4c6a-90e8-4cec3748048c1672223308334WomenMauvePrintedStraightKurtaWithWhiteSolidTrouser1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17932254/2022/5/12/4be8baea-c808-42d5-8f70-0db0f10bf3a61652343454751-Varanga-Women-Kurta-Sets-3301652343454044-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2477343/2022/5/10/6f8238c5-83f6-4ea1-88c5-e7e572e412b01652166526736-Libas-Hunter-Green-Patterned-Viscose-Pathani-Kurta-With-Shir-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22858248/2023/4/22/26649445-4226-477c-89e0-339a0759168a1682144204796KurtaSets1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17911110/2022/5/9/6ebd9d76-a223-4986-8abd-22c80d7018861652096800888-Anouk-Women-Kurta-Sets-1801652096800138-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22559294/2023/3/29/fd39a36f-a3c2-48a7-8d70-d896dd49213c1680086718106KhushalKwomenembroideryrayonkurtaandpalazzowithdupattaset7.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12894698/2022/4/18/9082e6bb-90ba-4ca3-b321-f182e844a6b01650283509769anaynaWomenPinkMagentaPrintedStrappyStraightKurta1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22889480/2023/4/25/2a8d4080-b096-4ce8-aa83-1458e840e60a1682410045978KurtaSets1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16707396/2022/2/3/998e73d4-f96a-4513-913f-1c48f9171e861643888609556-Anouk-Women-Kurta-Sets-8071643888608527-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20953150/2022/12/1/3a3864b2-fa53-4b50-8ecf-787347596ce31669892668710-Varanga-Women-Kurta-Sets-1081669892668125-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13169116/2021/9/1/f4743cd0-265e-4f57-8273-a5abb52501751630500433313-Libas-Women-Green-Pure-Cotton-Kurta-with-Palazzos--With-Dupa-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22851808/2023/4/21/a853d380-a775-443a-b90b-1f1234817bc31682075124802KurtaSets1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20725570/2023/3/7/cdfa2bb2-4794-41b5-852a-47796bd1be7f1678187630106-Anouk-Women-Maroon-Ethnic-Motifs-Printed-Kurta-with-Trousers-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21589912/2023/1/18/895674c1-2d15-408e-943f-a42d1733d3511674014421934KALINIWomenPurpleGeometricPrintedFlaredSleevesMirrorWorkSumm1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17709686/2022/4/7/206b36ca-ae0d-4e9b-86be-a57eb6dbf00d1649325253946-Varanga-Women-Kurtas-8891649325253498-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14046594/2022/6/9/5fba9594-3301-4881-ba56-d56a44570e831654747998773LibasWomenNavyBluePureCottonFloralPrintKurtawithPalazzosDupa1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22143844/2023/3/6/4200c59f-b121-4208-805e-083f260f5aa31678097771116-Anayna-Womens-Angrakha-Kurta-4291678097770436-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23525636/2023/6/9/85d3b2f1-3cd7-42cb-805e-251182d88c881686310176965-Chikankari-handwork-mirror-kurta-2621686310176459-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22294012/2023/3/11/50b5ec7f-047a-4256-b972-4a9a352676101678535950244HERENOWWomenYellowEthnicMotifsPrintedKeyholeNeckFlaredSleeve1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21599110/2023/1/18/994a7b64-fd73-4ec8-b792-d85d2305a9de1674040520970JanakdulariCreationWomenCottonPrintedKurtaAndPantSet6.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17251490/2022/3/10/c73748cb-9947-4e36-a251-f7a850bac72a1646887645805-Varanga-Women-Yellow-Yoke-Design-Kurta-With-Trousers-And-Dup-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7319901/2018/9/18/ede2810e-0a86-43aa-a7aa-27d3d95a9b5f1537268175318-Libas-Women-Pink--Grey-Printed-Kurta-with-Palazzos--Dupatta-4071537268175098-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22862270/2023/4/22/ba08abbd-cbb8-4acc-a2f5-9bf55c2214681682151936613FogBeigeWovenKurtaAndContrastDupattaWithHandWorkDetailing1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19231474/2022/7/23/cbc61e73-8d7e-415a-9ade-bc4b9daab57d1658563077615Kurtas1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15055280/2021/8/23/cc05048f-e86b-46da-b2da-420fabb59cf11629694542345-Libas-Women-Kurta-Sets-1261629694541678-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22143832/2023/3/9/0ccfe17e-ed44-4e18-8843-a59919a647ed1678359644052-anayna-Ethnic-Motifs-Printed-Kurta-9501678359643493-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22816686/2023/4/27/a56ad4a4-a38e-4c29-973b-ecc14916f4bb1682593785728-Varanga-Women-White-And-Green-Floral-Printed-Anarkali-Kurta--1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16707380/2022/2/3/de9d67d7-394c-422e-a016-d5bf5f2ec7491643888592182-Anouk-Women-Kurta-Sets-6761643888591217-1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18450546/2022/5/27/024c1946-27ca-429b-9769-6f3a29c153b51653645619480KALINIWomenBlueStraightKurtawithTrouserDupatta1.jpg",
  "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2477344/2018/2/22/11519301753318-Libas-Women-Maroon-Woven-Design-Pathani-Kurta-9511519301753051-1.jpg",
];
export const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((e) => e.json())
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(() => {
        setProducts(dummyData.data);
      });
  }, []);
  return (
    <ul>
      {products.map((product, i) => {
        return (
          <li key={product.id} className="list-item">
            <a href="#">
              <div className="product-image">
                <picture>
                  <img src={images[i % images.length]}></img>
                </picture>
              </div>
              <div className="product-metainfo">
                <h3 className="product-brand">{product.brand}</h3>
                <h4 className="product-product">{product.title}</h4>
                <div className="product-price">
                  <span>
                    <span className="product-discounted-price">
                      Rs. {product.price}
                    </span>
                    <span className="product-strike">
                      Rs. {product.price + 200}
                    </span>
                  </span>
                  <span className="product-discount-percentage">(72% OFF)</span>
                </div>
              </div>
            </a>
            {/* <h4>{product.brand}</h4>
            <span>{product.title}</span>
            <div>
              <span>{product.price}</span>
            </div> */}
          </li>
        );
      })}
    </ul>
  );
};
