# ObjectFilter

Object Filter Package

# Install

npm i filter-objects

# Usage


it will return a filtered object by key


const object = {
name:'user',
surname:'userSurname'
}

import objectFilter from 'filter-object'

objectFilter(object, 'name');

result => { surname:'userSurname'}

