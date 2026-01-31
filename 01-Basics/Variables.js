const accountId = 1039 // due to const it cant be changed
let accountEmail = "sarangakhade@prisms.in" // due to let you can reassign but cannot redeclare
var accountPassword = '12345' // oldest method but it gets messy with scopes
accountCity = 'Pune' // this can be done but never prefer this type of declaration
let accountState // we havent declared any value so o/p is undefined
// accountId = 2 //not allowed
accountEmail = 'akhadesarang1@gmail.com'
accountPassword = '543'
accountCity = 'mumbai'
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])