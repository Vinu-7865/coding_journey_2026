const username = {
    name : 'alice',
    age: 20,
    address:{
        street: '123 main st',
        city: 'anytown',
        country: 'usa'
    }
}

const user1 = {}

Object.assign(user1,username) // copying properties from one object to another using Object.assign()

user1.address.street = 'jackson hills' // updating a nested property in the copied object