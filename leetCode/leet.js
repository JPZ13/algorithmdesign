var simplifyPath = function(path) {
  
  var path = [];

  var getStrStart = function( i ) {

    while ( str[ i ] === '/' ) {
      i++
    }
    return i;
  }

  var getStrEnd = function( i ) {
    
    while ( i < str.length && str[ i ] !== '/' ) {
      i++
    }
    i--
    return i;
  }

  var getSubStr = function( start ) {

    var strStart = getStrStart( start );
    var strEnd = getStrEnd( start );

    var subStr = str.substring( strStart, strEnd );

    if ( subStr === '.' ) {
      return strEnd;
    }

    if ( subStr === '..' ) {
      path.pop();
      return strEnd;
    }

    path.push( subStr );
    return strEnd;
  }

  var index = getStrStart( 0 );

  while ( index < str.length - 2 ) {
    index = getSubStr( index )
  }

  var help = '/';

  if ( path.length === 0 ) {
    return help;
  }

  var temp = path.join( '/' );

  return help.concat( temp );
};
