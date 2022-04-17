let country = []
country.push('US')
country.push('UK')

console.log(country[0])
console.log(country[1])

console.log(country.includes('AU'))
console.log(country.includes('US'))

country.forEach(element => console.log(element))

country.map((value, index) => {
    console.log("index:" + index, "value:" + value)
})