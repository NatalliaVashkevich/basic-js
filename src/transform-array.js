const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
      let res = [];
      for( let i = 0; i < arr.length; i += 1 ) {
        const current = arr[i];
        if( current === '--discard-next') {
          i += 2;
        } else if( current === '--discard-prev' ) {
          if (i > 0) {
            res.splice(i - 1, 1);
          }  
        } else if( current === '--double-next' ) {
          if(i + 1 < arr.length){
          res.push(arr[i + 1]);
          }
        } else if (current === '--double-prev' ) {
          if(i > 0) {
          res.push(arr[i - 1]);
          }
        } else {
          res.push(current);
        }
        
      }
  return res;
}

module.exports = {
  transform
};
