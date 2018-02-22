/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = [];
 for (var i = 0; i < preferences.length; i++) {
   var lover1, lover2, lover3;
   if (i + 1 != preferences[i]) {
     lover1 = preferences[i];
     lover2 = preferences[lover1 - 1];
     lover3 = preferences[lover2 - 1];
     if (lover3 - 1 === i) {
               if(arr.indexOf(lover1) < 0 && arr.indexOf(lover2)<0 &&  arr.indexOf(lover3)< 0){
       arr.push(lover1, lover2, lover3)
       }
       }

             }
       }
       return arr.length/3;
};
