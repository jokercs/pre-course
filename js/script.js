// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
//   const keys = [];
//   const values = [];

//  for (const key in apartment) {
//   console.log(key);
//   console.log(apartment[key])
//   keys.push(key);
//   values.push(apartment[key]);
//  };

// console.log(keys);
// console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//       if (apartment.hasOwnProperty(key)){
//         keys.push(key);
//         values.push(apartment[key]);
        

//       }
      
//   // Change code above this line
// }
//       console.log(keys);
//       console.log(values);


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);  
// }


// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   console.log(keys)
//     for (const key of keys){
//       propCount += 1;
//     }
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }
//   //console.log(propCount);
//   return propCount;
  
//   // Change code above this line
// }


// countProps({
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   console.log(values);
//   for (const salar of values){
//     totalSalary += salar;
    
//   }
//   console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
  
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })

// const products1 = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//  for (const product of products1) {
//    if (productName === product.name){
//     return product.price;
//    }  
//  }
//  return null;

//   // Change code above this line
// }
//  console.log(getProductPrice("Droid"));
//  console.log(getProductPrice("Rada"));
//  console.log(getProductPrice("Scanner"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const prop = [];
// for (let product of products) {
//   const keys = Object.keys(product);
//   for (const key of keys) {
//      if (key === propName){
//     prop.push(product[propName]);
//     }

//    }
//   }
//     console.log(prop)
//   // Change code above this line
// }
// getAllPropValues("name");
// getAllPropValues("price");
// getAllPropValues("quantity");

// Или

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const prop = [];
// for (let product of products) {
//   if( product[propName] !== undefined) {
//     prop.push(product[propName]);
    
//   }
 
//   }
//   console.log(prop);
//   return prop;
//   // Change code above this line
// }
// getAllPropValues("name");
// getAllPropValues("price");
// getAllPropValues("quantity");
// Это можно сделать в теле функции.
// function doStuffWithBook(book) {
//     const { title, numberOfPages, downloads, rating, public } = book;
//     console.log(title);
//     console.log(numberOfPages);
//     // И так далее
//   }
  
//   // Или в сигнатуре (подписи), разницы нет.
//   function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
//     console.log(title);
//     console.log(numberOfPages);
//     // И так далее
//   }


//   const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
  
//   // const highToday = forecast.today.high;
//   // const lowToday = forecast.today.low;
//   // const todayIcon = forecast.today.icon;
//   // const highTomorrow = forecast.tomorrow.high;
//   // const lowTomorrow = forecast.tomorrow.low;
//   // const tomorrowIcon = forecast.tomorrow.icon;
//   const {today: {low : lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",}, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

//   const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }


// Change code below this line
// function findMatches(args, ...numbers) {
//   const matches = []; // Don't change this line
//  for(const number of numbers){
//    for (let i = 0; i<args.length; i+=1){
//     if(args[i] === number){
//       matches.push(number);
//    }
   
//    }
   
//  }
//   // Change code above this line
//   console.log(matches);
//   return matches;
// }


// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7, 5)
// //findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return this.potions;
// },

//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());


//Работа с массивом объектов, обращение, добавление, удаление, замена по имени.
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ], 
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for (const potion of this.potions){
        
//         if (potion.name === newPotion.name) {
  
//           return  `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }
//       }
//          return this.potions.push(newPotion);
        
//     },
//     removePotion(potionName) {
    
//      let count = 0;
//       for (const potion of this.potions){
//         count += 1;
//         if (potion.name === potionName){
//           // console.log(this.potions);
//           count = count - 1;
//           const newPotions = this.potions.splice(count, 1);
//       console.log(newPotions);
//       return newPotions;     
//        }   
//       }
      
//     },
//     updatePotionName(oldName, newName) {
  
//       for (const potion of this.potions){
//         if (potion.name === oldName) {
//           console.log(oldName);
//           console.log(newName);
//           console.log(potion.name);
//           return potion.name = newName;
//         }
//       }
//     },
    
//     // Change code above this line
//    };
  
//   // console.log(atTheOldToad.getPotions());
//   // atTheOldToad.addPotion({ name: "Speed potion", price: 620 });
//   // atTheOldToad.addPotion({ name: "Power potion", price: 270 });
//   // atTheOldToad.addPotion({ name: "Invisibility", price: 270 });
//   // console.log(atTheOldToad.getPotions());
//   atTheOldToad.removePotion("Stone skin");
//   //atTheOldToad.removePotion("Speed potion");
//   console.log(atTheOldToad.getPotions());
//   // atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
//   // console.log(atTheOldToad.getPotions());