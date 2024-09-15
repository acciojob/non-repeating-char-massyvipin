function firstNonRepeatedChar(str) {
	const charFeqCount = {};
 for (let char of str) {
 	if (charFeqCount[char]) {
 		charFeqCount[char]+=1;
 	}
	 else{
		 charFeqCount[char] = 1;
	 }
 }
	for(let char of str){
		if(charFeqCount[char]===1){
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
