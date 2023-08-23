const fs = require('fs')
const zodiacText = fs.readFileSync('./Horoskop.txt', 'utf-8')

const arrOfSignsSplitted = zodiacText.split('***')


const finalObjectsWithSigns = Array.from({length: 12}, () => ({}))

arrOfSignsSplitted.forEach((sign, index) => {
    const currentSign = sign.trim().split('\r\n')
    currentSign.forEach(signDetail => {
        finalObjectsWithSigns[index][signDetail.split(': ')[0]] = signDetail.split(': ')[1]
    })
})

console.log(finalObjectsWithSigns)

// fs.writeFileSync('./JSONHoroskop.txt', JSON.stringify(finalObjectsWithSigns), 'utf-8')