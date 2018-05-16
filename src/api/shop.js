/**
 * Mocking client-server processing
 */
const _products = [
  {
    "id": "1",
    "title": "Rustic Frozen Gloves",
    "image": "http://lorempixel.com/640/480/business",
    "price": "395.00",
    "quantity": 71
  },
  {
    "id": "2",
    "title": "Intelligent Steel Pants",
    "image": "http://lorempixel.com/640/480/abstract",
    "price": "751.00",
    "quantity": 63
  },
  {
    "id": "3",
    "title": "Rustic Plastic Car",
    "image": "http://lorempixel.com/640/480/nightlife",
    "price": "320.00",
    "quantity": 91
  },
  {
    "id": "4",
    "title": "Unbranded Soft Table",
    "image": "http://lorempixel.com/640/480/nightlife",
    "price": "648.00",
    "quantity": 40
  },
  {
    "id": "5",
    "title": "Unbranded Fresh Keyboard",
    "image": "http://lorempixel.com/640/480/animals",
    "price": "373.00",
    "quantity": 4
  },
  {
    "id": "6",
    "title": "Small Plastic Pizza",
    "image": "http://lorempixel.com/640/480/cats",
    "price": "983.00",
    "quantity": 12
  },
  {
    "id": "7",
    "title": "Refined Soft Tuna",
    "image": "http://lorempixel.com/640/480/nature",
    "price": "292.00",
    "quantity": 84
  },
  {
    "id": "8",
    "title": "Handmade Plastic Bike",
    "image": "http://lorempixel.com/640/480/fashion",
    "price": "749.00",
    "quantity": 6
  },
  {
    "id": "9",
    "title": "Ergonomic Wooden Fish",
    "image": "http://lorempixel.com/640/480/technics",
    "price": "417.00",
    "quantity": 33
  },
  {
    "id": "10",
    "title": "Handmade Plastic Fish",
    "image": "http://lorempixel.com/640/480/cats",
    "price": "204.00",
    "quantity": 36
  },
  {
    "id": "11",
    "title": "Ergonomic Wooden Soap",
    "image": "http://lorempixel.com/640/480/nature",
    "price": "451.00",
    "quantity": 25
  },
  {
    "id": "12",
    "title": "Rustic Soft Chips",
    "image": "http://lorempixel.com/640/480/animals",
    "price": "701.00",
    "quantity": 5
  },
  {
    "id": "13",
    "title": "Rustic Rubber Salad",
    "image": "http://lorempixel.com/640/480/people",
    "price": "919.00",
    "quantity": 40
  },
  {
    "id": "14",
    "title": "Practical Frozen Shoes",
    "image": "http://lorempixel.com/640/480/people",
    "price": "585.00",
    "quantity": 88
  },
  {
    "id": "15",
    "title": "Rustic Concrete Chips",
    "image": "http://lorempixel.com/640/480/cats",
    "price": "779.00",
    "quantity": 5
  },
  {
    "id": "16",
    "title": "Rustic Soft Sausages",
    "image": "http://lorempixel.com/640/480/animals",
    "price": "904.00",
    "quantity": 57
  },
  {
    "id": "17",
    "title": "Intelligent Wooden Hat",
    "image": "http://lorempixel.com/640/480/sports",
    "price": "554.00",
    "quantity": 24
  },
  {
    "id": "18",
    "title": "Practical Granite Computer",
    "image": "http://lorempixel.com/640/480/food",
    "price": "56.00",
    "quantity": 70
  },
  {
    "id": "19",
    "title": "Gorgeous Concrete Chips",
    "image": "http://lorempixel.com/640/480/fashion",
    "price": "28.00",
    "quantity": 85
  },
  {
    "id": "20",
    "title": "Gorgeous Metal Soap",
    "image": "http://lorempixel.com/640/480/people",
    "price": "392.00",
    "quantity": 14
  },
  {
    "id": "21",
    "title": "Incredible Metal Keyboard",
    "image": "http://lorempixel.com/640/480/cats",
    "price": "45.00",
    "quantity": 95
  },
  {
    "id": "22",
    "title": "Handcrafted Soft Bike",
    "image": "http://lorempixel.com/640/480/transport",
    "price": "292.00",
    "quantity": 11
  },
  {
    "id": "23",
    "title": "Refined Soft Sausages",
    "image": "http://lorempixel.com/640/480/fashion",
    "price": "512.00",
    "quantity": 76
  },
  {
    "id": "24",
    "title": "Incredible Granite Pants",
    "image": "http://lorempixel.com/640/480/abstract",
    "price": "210.00",
    "quantity": 9
  },
  {
    "id": "25",
    "title": "Sleek Granite Salad",
    "image": "http://lorempixel.com/640/480/people",
    "price": "363.00",
    "quantity": 31
  },
  {
    "id": "26",
    "title": "Small Wooden Hat",
    "image": "http://lorempixel.com/640/480/food",
    "price": "530.00",
    "quantity": 72
  },
  {
    "id": "27",
    "title": "Incredible Soft Bacon",
    "image": "http://lorempixel.com/640/480/animals",
    "price": "68.00",
    "quantity": 7
  },
  {
    "id": "28",
    "title": "Rustic Soft Sausages",
    "image": "http://lorempixel.com/640/480/people",
    "price": "954.00",
    "quantity": 90
  },
  {
    "id": "29",
    "title": "Practical Steel Ball",
    "image": "http://lorempixel.com/640/480/technics",
    "price": "742.00",
    "quantity": 43
  },
  {
    "id": "30",
    "title": "Handcrafted Soft Keyboard",
    "image": "http://lorempixel.com/640/480/transport",
    "price": "305.00",
    "quantity": 96
  },
  {
    "id": "31",
    "title": "Rustic Steel Bacon",
    "image": "http://lorempixel.com/640/480/food",
    "price": "206.00",
    "quantity": 49
  },
  {
    "id": "32",
    "title": "Fantastic Cotton Chair",
    "image": "http://lorempixel.com/640/480/animals",
    "price": "241.00",
    "quantity": 36
  },
  {
    "id": "33",
    "title": "Gorgeous Rubber Mouse",
    "image": "http://lorempixel.com/640/480/cats",
    "price": "164.00",
    "quantity": 95
  },
  {
    "id": "34",
    "title": "Ergonomic Granite Chair",
    "image": "http://lorempixel.com/640/480/fashion",
    "price": "575.00",
    "quantity": 90
  },
  {
    "id": "35",
    "title": "Generic Fresh Salad",
    "image": "http://lorempixel.com/640/480/people",
    "price": "217.00",
    "quantity": 90
  },
  {
    "id": "36",
    "title": "Refined Rubber Computer",
    "image": "http://lorempixel.com/640/480/cats",
    "price": "472.00",
    "quantity": 82
  },
  {
    "id": "37",
    "title": "Handcrafted Fresh Chips",
    "image": "http://lorempixel.com/640/480/animals",
    "price": "959.00",
    "quantity": 36
  },
  {
    "id": "38",
    "title": "Small Granite Keyboard",
    "image": "http://lorempixel.com/640/480/animals",
    "price": "680.00",
    "quantity": 12
  },
  {
    "id": "39",
    "title": "Fantastic Frozen Shirt",
    "image": "http://lorempixel.com/640/480/city",
    "price": "571.00",
    "quantity": 73
  },
  {
    "id": "40",
    "title": "Gorgeous Steel Computer",
    "image": "http://lorempixel.com/640/480/transport",
    "price": "38.00",
    "quantity": 73
  },
  {
    "id": "41",
    "title": "Practical Fresh Computer",
    "image": "http://lorempixel.com/640/480/business",
    "price": "127.00",
    "quantity": 39
  },
  {
    "id": "42",
    "title": "Awesome Soft Gloves",
    "image": "http://lorempixel.com/640/480/abstract",
    "price": "63.00",
    "quantity": 54
  },
  {
    "id": "43",
    "title": "Gorgeous Soft Car",
    "image": "http://lorempixel.com/640/480/cats",
    "price": "314.00",
    "quantity": 48
  },
  {
    "id": "44",
    "title": "Handmade Plastic Chips",
    "image": "http://lorempixel.com/640/480/nature",
    "price": "87.00",
    "quantity": 24
  },
  {
    "id": "45",
    "title": "Handmade Granite Chicken",
    "image": "http://lorempixel.com/640/480/food",
    "price": "470.00",
    "quantity": 80
  },
  {
    "id": "46",
    "title": "Handcrafted Rubber Chips",
    "image": "http://lorempixel.com/640/480/food",
    "price": "473.00",
    "quantity": 48
  },
  {
    "id": "47",
    "title": "Rustic Metal Pants",
    "image": "http://lorempixel.com/640/480/sports",
    "price": "306.00",
    "quantity": 86
  },
  {
    "id": "48",
    "title": "Handcrafted Cotton Cheese",
    "image": "http://lorempixel.com/640/480/city",
    "price": "488.00",
    "quantity": 41
  },
  {
    "id": "49",
    "title": "Incredible Concrete Cheese",
    "image": "http://lorempixel.com/640/480/cats",
    "price": "573.00",
    "quantity": 73
  },
  {
    "id": "50",
    "title": "Incredible Cotton Soap",
    "image": "http://lorempixel.com/640/480/business",
    "price": "398.00",
    "quantity": 69
  }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 1000)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
