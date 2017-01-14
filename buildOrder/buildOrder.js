'use strict';

class Project {
  constructor( name ) {
    this.name = name;
    this.dependsOn = [];
    this.supports = [];
  }
}

const contains = ( arr, target ) => {
  // this is a slightly sub-optimal implementation,
  // but I felt like using reduce
  return arr.reduce( ( memo, item ) => {
    if ( item === target ) {
      memo = true;
    }
    return memo;
  }, false);
};

const buildOrder = ( projArr, depArr ) => {

  let leftOvers = [];
  let orderQueue = [];

  depArr.forEach( ( pair ) => {
    pair[ 0 ].supports.push( pair[ 1 ] );
    pair[ 1 ].dependsOn.push( pair[ 0 ] );
  });

  projArr.forEach( ( project ) => {
    if ( project.dependsOn.length === 0 && project.supports.length === 0 ) {
      leftOvers.push( project );
    } else if ( project.dependsOn.length === 0 && project.supports.length > 0 ) {
      orderQueue.push( project );
    }
  });

  const queueBuild = ( index ) => {
    orderQueue[ index ].supports.forEach( ( dependency ) => {
      // not a huge fan of the time complexity on the contain
      // checking - TODO: figure out how to reduce aside
      // from re-implementing contains
      if ( !contains( orderQueue, dependency ) ) {
        orderQueue.push( dependency );
      }
    });
    if ( index < orderQueue.length - 1 ) {
      queueBuild( index + 1 );
    }
  };

  queueBuild( 0 );

  return orderQueue.concat( leftOvers );
};

module.exports.Project = Project;
module.exports.buildOrder = buildOrder;
