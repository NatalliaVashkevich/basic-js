const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = '';
  try {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date instance provided');
  }

  const month = date.getMonth();
  switch(month) {
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
   case 5:
   case 6:
   case 7:
      season = 'summer';
      break;
   case 8:
   case 9:
   case 10:
      season = 'autumn';
      break;
    default:
      season = 'winter';
  }
  
  return season;

} catch (e) {
  throw new Error('Invalid date!')
}
}

module.exports = {
  getSeason
};
