# hKnife
some tool-like methods of javascript

# usage
## install
`npm install hknife --save`

## use in your code
```js
import hKnife from 'hknife';

hKnife.camelCase('good-name'); // 'goodName'
```

# tool methods

## trim
trim spaces of str
```js
console.log(hKnife.trim('  hi, what is your name?  ')); // 'hi, what is your name?'
```

## leftTrim
trim left spaces of str
```js
console.log(hKnife.leftTrim('  hi, what is your name?  ')); // 'hi, what is your name?  '
```

## rightTrim
trim right spaces of str
```js
console.log(hKnife.rightTrim('  hi, what is your name?  ')); // '  hi, what is your name?'
```

## camelCase
transform hyphen to camel case
```js
console.log(hKnife.camelCase('good-name')); // 'goodName'
```