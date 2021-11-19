# ObjectFilter

Object Filter Package

# Install

npm i filtered-object

# Usage

it will return a filtered object by key

<ins>Example</ins>

import objectFilter from 'filtered-object'

const object = {
name:'user',
surname:'userSurname'
}

objectFilter(object, 'name');

result => { surname:'userSurname'}
