
//task 1 --------------------------------------------------

function bigLetter(str) {
    return text.replace(/\b\w/g, function(str) {
        return str.toUpperCase();
    });
}

let text = "boyuy herifler cumlesi";
console.log(bigLetter(text));

//---------------------------------------------------------



//task 2 ---------------------------------------------------

function isPalindrome(str) {
    let text = str.length - 1;
    

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] == str[text]) {
            return true;
        }
       
        text ++;
    }
    return false;
}

let word = "ada";
console.log(isPalindrome(word));

//----------------------------------------------------------------

