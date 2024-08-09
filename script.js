function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lower case for a case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    
    // Use the indexOf method to find the index of lowerSubStr in lowerStr
    return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

