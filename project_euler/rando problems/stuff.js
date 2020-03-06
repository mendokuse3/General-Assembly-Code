// checking if something is a panagram
const panagram2 = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']



const isPanagram = (arr) => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const joinedPanagram = arr.join("").toLowerCase();
    const sortedPanagram = joinedPanagram.split('').sort((a, b) => {
        if (a.toUpperCase() < b.toUpperCase()) {
            return -1;
        }
        if (a.toUpperCase() > b.toUpperCase()) {
            return 1;
        }
        return 0;
    });
    const removedDuplicates = [...new Set(sortedPanagram)];
    if (removedDuplicates.length === abc.split('').length){
        return true;
    }
    return false;
}

console.log(isPanagram(panagram2))