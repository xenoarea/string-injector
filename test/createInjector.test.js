import { expect } from "chai"
import inject from "../src/createInjector.js"

describe('createInjector', () => {

    it('should replace single placeholder by value', () => {
        const valuesMap = {
            name: 'Xeno'
        }

        const output = inject('Hello, I am {{name}} !', valuesMap)

        expect(output).equal(`Hello, I am ${valuesMap.name} !`)
    })

    it('should replace multiple same placeholders by the same value', () => {
        const valuesMap = {
            word: 'Beetlejuice'
        }

        const output = inject('If you repeat three times his name he appears, {{word}}, {{word}}, {{word}} !', valuesMap)

        expect(output).equal(`If you repeat three times his name he appears, ${valuesMap.word}, ${valuesMap.word}, ${valuesMap.word} !`)
    })

    it('should not replace unfound value', () => {
        const valuesMap = {}

        const template = 'This {{placeholder}} should stay unchanged'

        const output = inject(template, valuesMap)

        expect(output).equal(template)
    })

    it('should replace placeholder by nested value', () => {
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

        expect(output).equal(`We arrived on the island and we found a ${valuesMap.sometimes.you.have.to.dig} !`)
    })

    it('should replace placeholders by values from an array', () => {
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

        expect(output).equal(`The planets of our solar system are : ${valuesMap[0]}, ${valuesMap[1]}, ${valuesMap[2]}, ${valuesMap[3]}, ${valuesMap[4]}, ${valuesMap[5]}, ${valuesMap[6]} and ${valuesMap[7]}.`)
    })

    it('should replace placeholders by nested values from an object and array mixed values map', () => {
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

        expect(output).equal(`The moon of ${valuesMap.items[0].planet} is simply called ${valuesMap.items[0].moons[0]} and the moons of ${valuesMap.items[1].planet} are ${valuesMap.items[1].moons[0]} and ${valuesMap.items[1].moons[1]}.`)
    })

    it('should replace placeholder by last value of an array when using last key', () => {
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

        expect(output).equal(`The last planet of the solar system is ${valuesMap.solarSystem[valuesMap.solarSystem.length - 1].planet} and its last moon is ${valuesMap.solarSystem[valuesMap.solarSystem.length - 1].moons[valuesMap.solarSystem[valuesMap.solarSystem.length - 1].moons.length - 1]}.`)
    })
})
