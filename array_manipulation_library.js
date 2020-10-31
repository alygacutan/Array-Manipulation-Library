  // HELPER FUNCTION; DO NOT EDIT
Array.isEqual = function (array1, array2) {
    if (!array1 || !array2)
        return false

    if (array1.length !== array2.length)
        return false

    for (i = 0, l = array1.length; i < l; i++) {

        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (Array.isEqual(array1[i], array2[i]))
                return false  
        }           
        else if (array1[i] !== array2[i]) { 
            return false
        }           
    }       
    return true;
}
// HELPER FUNCTION; DO NOT EDIT

/*
Let's create an array manipulation library called '_' where we implement functions such as:
Map - like each but would return an array with altered contents depending on the function
Reduce - reduce an array into a value, can accept optional initial value
Head - get the initial value of the array
Tail - get the last value of the array
Join - join the array elements into a string given a parameter
*/

// FILL OUT THE FUNCTIONS *****************

const $ = {
  filter: function (array, cond) {
    const newArray = array;
    if(array.length > 0 || array != undefined){
      newArray.forEach((element,index) => {
        if(!cond(element)){
          newArray.splice(index, array.length-index);
        }
      });
      return newArray
    }else return array;
    
  },
  map: function (array, fxn) {
    const newArray=[];
    array.forEach((item,i)=>{
      newArray[i]=fxn(item);
    })
    return newArray;
  },
  reduce: function (array, fxn, num) {
    var int = 0, sum=0;
    array.forEach(item=>{
      sum=fxn(item,int);
      int=sum;
    });
    if(num!=null){
      if(array.length>0){
        return sum+num;
      }else return num;
    }else if(array.length<1){
      return array;
    }else return sum;
  },
  head: function (array) {
    return array[0];
  },
  tail: function (array) {
    return array[array.length-1];
  },
  join: function (array, char) {
    var newString="";
    array.forEach((item,i)=>{
      newString=newString.concat(item);
      if(i<array.length-1){
        newString=newString.concat(char);
      }
    })
    return newString;
  }
};

// *****************************************

// TESTS

(_ => {
  console.log('Running _.filter...');

  // Filtering array
  console.log(
    Array.isEqual($.filter([1, 2, 3], function (num) { return num < 2 }),[1])
  );

  // Filtering empty array
  console.log(
    Array.isEqual($.filter([], function (num) { return num < 2 }),[])
  );

  console.log('Running _.map...');

  // Mapping array
  console.log(
    Array.isEqual($.map([5, 6, 7], function (num) { return num + 3 }),[8, 9, 10])
  );

  // Mapping empty array
  console.log(
    Array.isEqual($.map([], function (num) { return num < 2 }),[])
  );

  console.log('Running _.reduce...');

  // Adding numbers
  console.log(
    ($.reduce([1, 2, 3], function (acc, num) { return acc + num }) === 6)
  );

  // Adding empty list
  console.log(
    Array.isEqual($.reduce([], function (acc, num) { return acc + num }),[])
  );

  // Adding with initial value
  console.log(
    ($.reduce([], function (acc, num) { return acc + num }, 0) === 0)
  );

  console.log(
    ($.reduce([1, 2, 3], function (acc, num) { return acc + num }, 4) === 10)
  );

  console.log('Running _.head...');

  // Getting top of array
  console.log(
    ($.head([1, 2, 3]) === 1)
  );

  // Getting top of empty array
  console.log(
    ($.head([]) === undefined)
  );

  console.log('Running _.tail...');

  // Getting tail of array
  console.log(
    ($.tail([1, 2, 3]) === 3)
  );

  // Getting tail of empty array
  console.log(
    ($.tail([]) === undefined)
  );

  console.log('Running _.join...');

  // Joining array
  console.log(
    ($.join(['to','be', 1], '-') === 'to-be-1')
  );

  // Joining empty array
  console.log(
    ($.join([], '-') === '')
  );
})();
