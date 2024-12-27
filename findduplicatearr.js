//Find Duplicates from array
function findDuplicates(arr){
    const elementCount = {};
    const duplicates = [];
    for(let element of arr){
        elementCount[element] =(elementCount[element] || 0) + 1;
    }
    for(let element in elementCount){
        if(elementCount[element] > 1){
            duplicates.push(element);
        }
    }
    return duplicates;
}
const array = [1,2,3,4,5,6,3,2,1];
const result = findDuplicates(array);
console.log(result);

