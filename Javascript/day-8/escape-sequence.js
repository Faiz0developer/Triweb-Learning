/*
Hexadecimal escape sequence => '\x7A'
Unicode escape sequence => '\u007A'
 */

const chr = '\x7A'
console.log('Hexadecimal char', chr)     //z


const chr1 = '\u007A'
console.log('Unicode char', chr)    // z

if('\x7A'=='\u007A'){
    console.log('Yes')      //Yes
}

if('\x7A'==='\u007A'){
    console.log('Yes')      //Yes
}