function calculate(operation) {
  if(operationValidator(operation)){
    const regexExp = /[0-9]+|\D/g;
  let splitEachOperation = operation.match(regexExp);
  let operatorIndex = null;
  let firtValue = null;
  let secondValue = null;
  let result = null;

  while (splitEachOperation.length > 1) {
    if (findIndex(splitEachOperation, "*") > -1) {
      operatorIndex = findIndex(splitEachOperation, "*");
      firtValue = splitEachOperation[operatorIndex - 1];
      secondValue = splitEachOperation[operatorIndex + 1];
      result = processor(firtValue, secondValue, "*");
      splitEachOperation.splice(operatorIndex - 1, 3, result);
    } else if (findIndex(splitEachOperation, "/") > -1) {
      operatorIndex = findIndex(splitEachOperation, "/");
      firtValue = splitEachOperation[operatorIndex - 1];
      secondValue = splitEachOperation[operatorIndex + 1];
      result = processor(firtValue, secondValue, "/");
      splitEachOperation.splice(operatorIndex - 1, 3, result);
    } else if (findIndex(splitEachOperation, "+") > -1) {
      operatorIndex = findIndex(splitEachOperation, "+");
      firtValue = splitEachOperation[operatorIndex - 1];
      secondValue = splitEachOperation[operatorIndex + 1];
      result = processor(firtValue, secondValue, "+");
      splitEachOperation.splice(operatorIndex - 1, 3, result);
    } else if (findIndex(splitEachOperation, "-") > -1) {
      operatorIndex = findIndex(splitEachOperation, "-");
      firtValue = splitEachOperation[operatorIndex - 1];
      secondValue = splitEachOperation[operatorIndex + 1];
      result = processor(firtValue, secondValue, "-");
      splitEachOperation.splice(operatorIndex - 1, 3, result);
    }
  }
  return splitEachOperation[0].toString();
  }
  
  else{
     return "Wrong Input"
  }
  
  
}

 function findIndex(arr, o) {
  return arr.indexOf(o);
}

 function processor(firstVal, secondVal, operator) {
  let firstInt = parseInt(firstVal);
  let secondInt = parseInt(secondVal);
  switch (operator) {
    case "*":
      return firstInt * secondInt;
    case "/":
      return firstInt / secondInt;
    case "+":
      return firstInt + secondInt;
    case "-":
      return firstInt - secondInt;
  }
}

function operationValidator(operation) {
  let splittedOperation = operation.match(/[0-9]+|\D/g);

  let temp = -1;
  splittedOperation.map((i) => {
    if (isNumber(i)) {
      temp += 1;
    } else {
      temp -= 1;
    }
  });

  if (temp < 0) {
    return false;
  } else {
    return true;
  }
}

 function isNumber(item) {
  return /[0-9]+/.test(item);
}



export default calculate;