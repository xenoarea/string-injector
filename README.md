# string-injector
Little helper to replace placeholders by mapped values into a string

## Ecosystem

This package has been developped under node v17.9.0 (but probably works on earlier versions).

## Installation

```npm install --save @xenoarea/string-injector```

## Usage

```
import injectValues from '@xenoarea/string-injector'

const valuesMap = {
    name: 'Xeno',
    info: {
        gender: 'male',
        age: 31,
        hobbies: [
            'programmation',
            'pixel art'
        ]
    }
}

const template = 'I am {{name}}, a {{info.gender}} of {{info.age}} years old and I like doing {{info.hobbies.0}} and {{info.hobbies.$}}.'

const output = injectValues(template, valuesMap)

console.log(output) //output: I am Xeno, a male of 31 years old and I like doing programmation and pixel art.
```

## Syntax

In the example snippet above you can notice the usage of placeholders starging by `{{` and ending by `}}`.
Those placeholders are key path of where to find the replacement value in the given values map object.
Note also the usage of the `$` character in the key path. It means the last element of
an array is targeted.

## Find me on

- [Twitch](https://www.twitch.tv/xenoarea)
- [Twitter](https://twitter.com/xenoarea)
- [Instagram](https://www.instagram.com/xenoarea)

