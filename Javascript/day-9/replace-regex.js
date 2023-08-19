const str = 'str 1 and str 2 is str 3' 
console.log('Originsl string - ',str)
console.log('Replace using only replace - ', str.replace('str','STR'))
//Replace using only replace -  STR 1 and str 2 is str 3


console.log('*****************REGEX REPLACE**************')

const regex = /str/i  // 'i' makes the expression case insensetive.
console.log('Replace using only replace and Regex - ', str.replace(regex,'STR'))
//Replace using only replace and Regex -  STR 1 and str 2 is str 3

const regex1 = /Str/   // case sensetive
console.log('Not replace - ', str.replace(regex1,'STR'))
//Not replace -  str 1 and str 2 is str 3

const regex2 = /str/g
console.log('ReplaceAll using Regex - ', str.replace(regex2,'STR'))
//ReplaceAll using Regex -  STR 1 and STR 2 is STR 3