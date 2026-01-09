# jstemplate

```js
"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// *************Factorial****************
function factorial(n) {
  
  var len,
      currNum,
      currProd,
      arr = [],
      mainArr = [],
      sum = '0',
      mainprod = n,
      finalValue,
      currLen,
      diff;

  while(n > 1) {

    currNum = (n - 1).toString();
    len = currNum.length;
    currLen = len - 1;

    while(len--) {
      
      currProd = multiplyStrings(currNum[len],mainprod);
      diff = (currLen - len);

      while(diff--) {
        currProd += '0';
      }

      arr.push(currProd);
    }

    len = arr.length;
    
    while(len--) {
      sum = addStrings(arr[len],sum);
    }

    mainprod = sum;
    sum = '0';
    arr = [];
    n--;

  }

  return mainprod;
}

// ******************add string************
function addStrings(a,b) {

  a = a.toString();
  b = b.toString();
  
  var aLen = a.length,
      bLen = b.length;
  
  if(aLen < bLen) {
      a = addLeadingZero(a, bLen - aLen);
  }
  
  if(bLen < aLen) {
      b = addLeadingZero(b,aLen - bLen);
  }

  var commonLen = a.length,
      mainSum = '',
      currentSum,
      lastRemainder;
      
  while(commonLen--) {
      currentSum = parseInt(a[commonLen]) + parseInt(b[commonLen]);
      if(lastRemainder) {
          currentSum += lastRemainder;
          lastRemainder = null
      }
      
      if(currentSum.toString().length > 1 && commonLen >= 1) {
          lastRemainder = parseInt(currentSum.toString()[0]);
          currentSum = currentSum.toString()[1];
      }

      if(commonLen == 0) {
        currentSum = reverse(currentSum);
      }
      mainSum += currentSum;
  }
  
  mainSum = reverse(mainSum);
  return mainSum;
}
// *****************reverse***************
function reverse(s) {
  s = s.toString();
  var o = '';
  for (var i = s.length - 1; i >= 0; i--) {
    o += s[i];   
  }
  return o;
}

// ****************addleadingzero***************8

function addLeadingZero(num,len) {
    while(len--) {
        num = '0' + num;
    }
    return num;
}


// ********** Code Start **********

function main() {
  // your code goes here
}

```

### fast use

```js
"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
  
}


```
