module.exports = function check(str, bracketsConfig) {
  let arr = []

  if (str.length % 2 !=0) {
    return false
  }
  splitStr = str.split("")

  let bracket = {}

  for (i = 0; i <bracketsConfig.length; i++ ) {
    bracket[bracketsConfig[i][0]] = bracketsConfig[i][1]
  }

  for ( j = 0; j < splitStr.length; j++) {
    if (bracket[arr[arr.length - 1]] === splitStr[j]) {
      arr.pop()
    } else {
      arr.push(splitStr[j])
    }
  }
    return arr.length === 0
}
