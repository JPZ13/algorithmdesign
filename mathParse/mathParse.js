'use strict';


const mathParse = ( mathStr ) => {
  if ( mathStr.length === 1 ) {
    return JSON.parse( mathStr );
  }

  const operators = {
    '^': true,
    '*': true,
    '/': true,
    '+': true,
    '-': true
  };
  
  // parenthesis handling
  let parenStart = null;
  let parenEnd = null;
  for ( let i = 0; i < mathStr.length; i++ ) {
    if ( mathStr[ i ] === '(' ) {
      parenStart = i;
    }
    if ( mathStr[ i ] === ')' ) {
      parenEnd = i;
      let parenStr = mathStr.substring( parenStart, parenEnd + 1 );
      mathStr = mathStr.replace( parenStr, JSON.stringify( parens( parenStr ) ))
    } 
  }

  // operator  handling
  // exponents
  for ( let i = 0; i < mathStr.length; i++ ) {
    if ( mathStr[ i ] === '^' ) {
      let rightBound = i + 1;
      let leftBound = i - 1;
      for ( leftBound = i - 1; leftBound >= 0; leftBound-- ) {
        if ( mathStr[ leftBound ] in operators ) {
          leftBound++;
          break;
        }
      }
      for ( rightBound = i + 1; rightBound < mathStr.length; rightBound++ ) {
        if ( mathStr[ rightBound ] in operators ) {
          rightBound--;
          break;
        }
      }
      let tupleStr = mathStr.substring( leftBound, rightBound + 1 );
      mathStr = mathStr.replace( tupleStr, JSON.stringify( evalTuple( tupleStr ) ));
    }
  }
  
  // multiplication & division
  for ( let i = 0; i < mathStr.length; i++ ) {
    if ( mathStr[ i ] === '*' || mathStr[ i ] === '/' ) {
      let rightBound = i - 1;
      let leftBound = i + 1;
      for ( leftBound = i - 1; leftBound >= 0; leftBound-- ) {
        if ( mathStr[ leftBound ] in operators ) {
          leftBound++;
          break;
        }
      }
      for ( rightBound = i + 1; rightBound < mathStr.length; rightBound++ ) {
        if ( mathStr[ rightBound ] in operators ) {
          rightBound--;
          break;
        }
      }
      let tupleStr = mathStr.substring( leftBound, rightBound + 1 );
      mathStr = mathStr.replace( tupleStr, JSON.stringify( evalTuple( tupleStr )));
      i = 0;
    }
  }

  // addition & subtraction
  for ( let i = 0; i < mathStr.length; i++ ) {
    if ( mathStr[ i ] === '+' || mathStr[ i ] === '-' ) {
      let rightBound = i + 1;
      let leftBound = i - 1;
      for ( leftBound = i - 1; leftBound >= 0; leftBound-- ) {
        if ( mathStr[ leftBound ] in operators ) {
          leftBound++;
          break;
        }
      }
      for ( rightBound = i + 1; rightBound < mathStr.length; rightBound++ ) {
        if ( mathStr[ rightBound ] in operators ) {
          rightBound--;
          break;
        }
      }
      let tupleStr = mathStr.substring( leftBound, rightBound + 1 );
      let tupleRes = evalTuple( tupleStr );
      tupleRes = JSON.stringify( tupleRes );
      mathStr = mathStr.replace( tupleStr, tupleRes);
      i = 0;
    }
  }

  return JSON.parse( mathStr );
};

const parens = ( parenStr ) => {
  return mathParse( parenStr.substring( 1, parenStr.length - 1 ));
};

const evalTuple = ( tupleStr ) => {

  const operators = {
    '^': true,
    '*': true,
    '/': true,
    '+': true,
    '-': true
  };
  
  let opIndex = 0;

  for ( opIndex = 0; opIndex < tupleStr.length; opIndex++ ) {
    if ( tupleStr[ opIndex ] in operators ) {
      break;
    }
  }

  let numOne = JSON.parse( tupleStr.substring( 0, opIndex ) );
  
  let numTwo = JSON.parse( tupleStr.substring( opIndex + 1 ) );

  let operator = tupleStr[ opIndex ];

  if ( operator === '^' ) {
    return Math.pow( numOne, numTwo );
  }

  if ( operator === '*' ) {
    return numOne * numTwo;
  }

  if ( operator === '/' ) {
    return numOne / numTwo;
  }

  if ( operator === '+' ) {
    return numOne + numTwo;
  }

  if ( operator === '-' ) {
    return numOne - numTwo;
  }

};


module.exports.mathParse = mathParse;
