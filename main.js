// xify - returns the same string, but with every character replaced by an 'x'
// Examples:
// xify('hello') -> 'xxxxx'
// xify('hi there') -> 'xxxxxxxx'

function xify(string){

    let output = '';
    
    for (let i = 0; i < string.length; i++){
        output += 'x';
    }

return output;
}

console.log(xify('hello'));
console.log();


// yellingChars - returns the given string with an exclamation point after each character
// Examples:
// yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
// yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
// Hints:
// We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.

function yellingChars(string){
    
    let output = '';

    for (let i = 0; i < string.length; i++){
        output += string[i];
        output += '!';
    }

    return output;
}

console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello'));
console.log();



// indexedChars - adds the index of each character before that character in the given string
// Examples:
// indexedChars('hello') -> '0h1e2l3l4o'
// indexedChars('bye') -> '0b1y2e'
// Hints:
// We can add something BEFORE the current character as well!

function indexedChars(string){

    let output = '';

    for (let i = 0; i < string.length; i++) {
        output += i; 
        output += string[i];
    }

    return output;

}

console.log(indexedChars('hello'));
console.log();

// numberedChars - adds the number of each character before that character in the given string
// Examples:
// numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
// numberedChars('bye') -> '(1)b(2)y(3)e'
// Hints:
// there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!

function numberedChars(string){

    let output  = '';

    for (let i = 0; i < string.length; i++){
        output += '(';
        output += i + 1;
        output += ')';
        output += string[i];
    }

    return output;
}

console.log(numberedChars('hello'))
console.log(numberedChars('bye'))


// exclaim - returns the given sentence with every question mark or period changed to an exclamation point
// Examples:
// exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
// exclaim('This is fine.') -> 'This is fine!'

function exclaim(string){

    let output  = '';

    for (let i = 0; i <= string.length; i++){
        if  ( string[i] === '?' ){
            string[i] = '!' 
        }
        else {

        }
    }

    return output;
}

console.log(exclaim('What are you doing? Are you a fool?'))



// repeatIt - returns the given string repeated n times, where n is the second parameter
// Examples:
// repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
// repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'


function repeatIt (string, num) {
    let output = '';
    
    
    for (let i = 0; i < num; i++) {
            output += string
        
        }
      return output
    }
    
    console.log(repeatIt("fivetimes", 5));
    console.log();
    
//fivetimesfivetimesfivetimesfivetimesfivetimes
//012345

// truncate - shortens a long string to 15 characters plus an ellipsis(...)
// Examples:
// truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
// truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."


function truncate (string) {
    return string.slice(0,16) + '…';
}

console.log(truncate("Well, that's just, like, your opinion man."));
console.log();

// Emailify - creates an email from a two - part name
// Examples:
// Emailify('john doe') -> 'john.doe@gmail.com'
// Emailify('Jane Smith') -> 'jane.smith@gmail.com'


function Emailify (name) {
    
    let output = '';

    for (const character of name){
        if (character === ' '){
            output += '.'
        } 
        
        else {
            output += character.toLowerCase();
        }
        
    }
    output += '@codeimmersives.com'
    return output;
}

console.log(Emailify('John doe'));


// reverse - reverses the given string
// Examples:
// reverse('colin') -> 'niloc'
// reverse('mesuara') -> 'arausem'





// onlyVowels - returns only the vowels from a word
// Examples:
// onlyVowels('Colin Jaffe') -> 'oiae'
// onlyVowels('quickly') -> 'ui'
// onlyVowels('Anthony DeRosa') -> 'Aoeoa'





// crazyCase - returns the given string with alternating lower and upper cases
// Examples:
// crazyCase('hello') -> 'hElLo'
// crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
// crazyCase('YELLING') -> 'yElLiNg'





// titleCase - returns a transformed version of the given string where every word starts with a capital letter and every non - word - starting letter is lowercased
// Examples:
// titleCase('return of the king') -> 'Return Of The King'
// titleCase('cOde iMMerSives') -> 'Code Immersives'





// camelCase - returns the given string in camel case
// Examples:
// camelCase('oh Hello') -> 'ohHello'
// camelCase('well yeah of course') -> 'wellYeahOfCourse'
// camelCase('Boy howdy') -> 'boyHowdy'





// crazyCase2ReturnOfCrazyCase - same as crazyCase, but does NOT count spaces as letters to upper or lower case (see examples below!)
// Examples:
// crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
// crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'