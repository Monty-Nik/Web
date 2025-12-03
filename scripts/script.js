 // const user = {}
 //
 // user.name = 'Nikita'
 // user.age = 20
 // user.isMarried = true
 // user.hobbies = ['reading', 'music', 'sports']
 // user.address = {
 //     city: 'Moscow',
 //     street: 'Lenina',
 //     house: 12
 // }
 // user.friends = ['John', 'Mary', 'Peter']
 //
 // user.sayLove = () => console.log('Sports, C++, Javascript, family,dogs, relax'),
 //
 // console.log(user)
 //
 //
 // const name = 'Peter';
 // const age =20;
 //
 // const user2= {
 //     name,
 //     age
 // }
 // console.log(user2)
 //
 // const getName = prompt('Enter your name')
 // const obj ={
 //     name: getName,
 //     age: 20,
 // }
 // console.log(obj)
 //
 // const obj1={name: 'John', age: 20}
 // const obj2= obj1
 //
 //
 // obj2.name = 'Peter'
 // obj2.age = 30
 // console.log(obj1)

//  const obj1 = {name: 'John', age: 20,
//              city: 'Moscow',
//             street: 'Lenina',
//              house: 12
//           }
//  const obj2 = {name: 'John', age: 20}
//
//  const areObjectsEqual = (obj1, obj2) => {
//     const keys1 = Object.keys(obj1)
//      const keys2 = Object.keys(obj2)
//
//      if(keys1.length !== keys2.length) {
//          return false
//      }
//
//      for(const key in keys1) {
//          const value1 = obj1[key]
//          const value2 = obj2[key]
//          const areValuesObjects = typeof value1 === 'object' && typeof value2 === 'object'
//
//          if(areValuesObjects) {
//              return areObjectsEqual(value1, value2)
//          }
//
//          if(value1 !== value2) {
//              return false
//          }
//      }
//      return true
//  }
// console.log('Равны ли объекты:', areObjectsEqual(obj1, obj2))


 // const obj1 = {name: 'John', age: 20}
 // const obj2 = {}
 //
 // for(const key in obj1) {
 //     obj2[key] = obj1[key]
 // }
 // obj2.name = 'Peter'
 // console.log("obj1:", obj1)
 // console.log("obj2:", obj2)


 // const obj1 = {
 //    name: 'John',
 //     age: 20,
 //    address: {
 //    city: 'Moscow',
 //    street: 'Lenina',
 //    house: 12
 // },
 // }
 //
 // console.log(obj1.address?.city)
 //
 // const userInfo = await fetch('https://jsonplaceholder.typicode.com/users/1')
 // renderUserName(userInfo, name)
 // renderCatalog()

 // const user = {
 //    name: 'John',
 //     age: 20,
 //     isDeveloper: true,
 //
 // }
 //
 // const{name, age, isDeveloper, address} = user
 // console.log('name:', name, 'age:', age, 'isDeveloper:', isDeveloper, address)


 // const logAddress =({city, street, house, apartament} ) => {
 //    console.log(`
 //    address: city. ${city}, st. ${street}, h. ${house}, № ${apartament}`)
 // }
 //
 // logAddress({
 //     city: 'Moscow',
 //     street: 'Lenina',
 //     house: 12,
 //     apartament: 101
 // })

 //
 // const user = {name: 'John', age: 20, isDeveloper: true}
 // const admin = {name: 'Peter', age: 30, isAdmin: true}
 //
 // const {name: userName} = user
 // const {isAdmin} = admin
 // console.log('userName:', userName, 'isAdmin:', isAdmin)

 // const user = {name: 'John', age: 20, city: 'Moscow'}
 // const user2 = {name: 'Peter', age: 30, }
 //
 // const {city = 'No city'} = user2
 // console.log('city:', city)

 // const user = {name: 'John', age: 20, city: 'Moscow'}
 // const user2 = {name: 'Peter', age: 30, }
 // const user3 = {name: 'Mary', age: 25, city: 'Saint Petersburg'}
 // const user4 = {name: 'John', age: 20, city: 'Moscow'}
 // const user5 = {name: 'Peter', age: 30, }
 // const user6 = {name: 'Mary', age: 25, city: 'Saint Petersburg'}
 // const user7 = {name: 'John', age: 20, city: 'Moscow'}
 // const user8 = {name: 'Peter', age: 30, }
 // const user9 = {name: 'Mary', age: 25, city: 'Saint Petersburg'}
 // const user10 = {name: 'John', age: 20, city: 'Moscow'}
 // const user11 = {name: 'Peter', age: 30, }
 //
 // const {city = 'No city'} = user2

// const user = {
//     name: 'John',
//     age: 23,
//     logThis: function() {
//         console.log(this)
//     },
//     address: {
//         city: 'Moscow',
//         street: 'Lenina',
//         house: 12,
//         logThis: function() {
//             console.log(this)
//         }
//     }
// }
//
// user.logThis()
//  user.address.logThis()

 // const user1={name: 'John', age: 20}
 // const user2={name: 'Peter', age: 30}
 //
 // function logInfo(){
 //    console.log(this)
 //     console.log(this.name)
 // }
 //
 // logInfo()
 //
 // user1.logInfo = logInfo

 //Задача 1
 // const calculator = {
 //    read() {
 //        this.a = +prompt('Enter first number', 0)
 //            this.b = +prompt('Enter second number', 0)
 //    },
 //     sum(){
 //        return this.a + this.b
 //     },
 //     nul(){
 //        return this.a * this.b
 //     },
 //
 // }
 //
 // calculator.read()
 // console.log('calculator', calculator)
 // console.log('Sum number', calculator.sum())
 // console.log('Nul number', calculator.nul())


 //задача 2 (cnegtymrb)
//  const ladder = {
//     step: 0,
//      up() {
//         this.step++
//          return this
//      },
//      down() {
//         this.step--
//          return this
//      },
//      showStep(){
//         console.log('Текущая ступенька:',this.step)
//          return this
//      }
//  };
//
// ladder
//     .up()
//     .up()
//     .down()
//     .showStep()
//     .down()
//     .showStep();


 //Методы примитивов


const value = prompt('Enter your name')

 const clearValue = value.trim().toLowerCase()

 if(clearValue.length === 0) {
     alert("Error! Name can't be empty")
 }

 if(clearValue.includes('admin')) {
     alert("Error! Name can't contain 'admin'")
 }

