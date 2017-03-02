var Tree = function( val ) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var flatten = function( tree ) {

  if ( tree === null || tree === undefined ) {
    return;
  }
  

  let help = tree.right;

  tree.right = tree.left;

  tree.left = null;

  flatten( help );
  flatten( tree.right );

  while ( tree && tree.right !== null ) {
    tree = tree.right;
  }


  tree.right = help;
  
};

module.exports.Tree = Tree;
module.exports.flatten = flatten;
