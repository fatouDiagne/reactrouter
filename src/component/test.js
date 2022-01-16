
// import {Data} from '.....'

// const [user, setUser] = useState({
//     name: '',
//     age: ''
// })

// let arr = Data.slice();
//     arr.push(user)

// const onInputChange = (e) => {
//     setUser({...user, [e.target.name]: [e.target.value]})
// }

// const handleSubmit = async (e) => {
//     await axios.get("")
// }

// // champ input name
// name = "name"
// onChange = {(e) => onInputChange(e)}


// // champ input age
// name = "age"
// onChange = {(e) => onInputChange(e)}





const arr = [
    {
        "1": 1,
        "2": 2
    },
    {
        "3": 3,
        "4": 4
    }
]

let newArr = arr.slice()
// console.log(newArr)
let test = {
    "4": 4
}

const test1 = newArr.concat(test)
console.log(test1)