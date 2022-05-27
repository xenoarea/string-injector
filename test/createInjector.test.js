import inject from '../src/createInjector.js'
import test from 'ava'

test('should replace single placeholder by value', (t) => {
    const valuesMap = {
        name: 'Xeno'
    }

    const output = inject('Hello, I am {{name}} !', valuesMap)

    t.is(output, `Hello, I am ${valuesMap.name} !`)
})

test('should replace multiple same placeholders by the same value', (t) => {
    const valuesMap = {
        word: 'Beetlejuice'
    }

    const output = inject('If you repeat three times his name he appears, {{word}}, {{word}}, {{word}} !', valuesMap)

    t.is(output, `If you repeat three times his name he appears, ${valuesMap.word}, ${valuesMap.word}, ${valuesMap.word} !`)
})

test('should not replace unfound value', (t) => {
    const valuesMap = {}

    const template = 'This {{placeholder}} should stay unchanged'

    const output = inject(template, valuesMap)

    t.is(output, template)
})

test('should replace placeholder by nested value', (t) => {
    const valuesMap = {
        sometimes: {
            you: {
                have: {
                    to: {
                        dig: 'treasure'
                    }
                }
            }
        }
    }

    const output = inject('We arrived on the island and we found a {{sometimes.you.have.to.dig}} !', valuesMap)

    t.is(output, `We arrived on the island and we found a ${valuesMap.sometimes.you.have.to.dig} !`)
})

test('should replace placeholders by values from an array', (t) => {
    const valuesMap = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ]

    const output = inject('The planets of our solar system are : {{0}}, {{1}}, {{2}}, {{3}}, {{4}}, {{5}}, {{6}} and {{7}}.', valuesMap)

    t.is(output, `The planets of our solar system are : ${valuesMap[0]}, ${valuesMap[1]}, ${valuesMap[2]}, ${valuesMap[3]}, ${valuesMap[4]}, ${valuesMap[5]}, ${valuesMap[6]} and ${valuesMap[7]}.`)
})

test('should replace placeholders by nested values from an object and array mixed values map', (t) => {
    const valuesMap = {
        items: [
            {
                planet: 'Earth',
                moons: ['Moon']
            },
            {
                planet: 'Mars',
                moons: ['Phobos', ' Deimos']
            }
        ]
    }

    const output = inject('The moon of {{items.0.planet}} is simply called {{items.0.moons.0}} and the moons of {{items.1.planet}} are {{items.1.moons.0}} and {{items.1.moons.1}}.', valuesMap)

    t.is(output, `The moon of ${valuesMap.items[0].planet} is simply called ${valuesMap.items[0].moons[0]} and the moons of ${valuesMap.items[1].planet} are ${valuesMap.items[1].moons[0]} and ${valuesMap.items[1].moons[1]}.`)
})

test('should replace placeholder by last value of an array when using last key', (t) => {
    const valuesMap = {
        solarSystem: [
            'Mercury',
            'Venus',
            'Earth',
            'Mars',
            'Jupiter',
            'Saturn',
            'Uranus',
            {
                planet: 'Neptune',
                moons: [
                    'Naiad',
                    'Thalassa',
                    'Despina',
                    'Galatea',
                    'Larissa',
                    'Hippocamp',
                    'Proteus'
                ]
            }
        ]
    }

    

    const output = inject('The last planet of the solar system is {{solarSystem.$.planet}} and its last moon is {{solarSystem.$.moons.$}}.', valuesMap)

    t.is(output, `The last planet of the solar system is ${valuesMap.solarSystem[valuesMap.solarSystem.length - 1].planet} and its last moon is ${valuesMap.solarSystem[valuesMap.solarSystem.length - 1].moons[valuesMap.solarSystem[valuesMap.solarSystem.length - 1].moons.length - 1]}.`)
})