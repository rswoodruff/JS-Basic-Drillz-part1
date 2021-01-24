class StrangerStrings {

    getHelloWorld() {
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment) {
        return firstSegment + secondSegment;
    }

    getPrefix(input) {
        let firstThreeChar = ""
        for (let i = 0; i < 3; i++) {
            firstThreeChar += input[i];
        }
        return firstThreeChar;
    }

    getSuffix(input) {
        let lastThreeChar = "";
        for (let i = input.length -1; i >= 0; i--) {
            if (i >= input.length -3) {
                lastThreeChar += input[i];
            }    
        }
        let splitWord = lastThreeChar.split("");
        let reverseWord = splitWord.reverse();
        lastThreeChar = reverseWord.join("");

        return  lastThreeChar
    }

    getMiddleCharacter(input) {
        let middleChar = Math.floor(input.length / 2);
        return input[middleChar];
    }

    getFirstWord(input) {
        let output = "";
        for ( let i = 0; i < input.length; i++) {
            if ( input[i] == " ") {
                return output;
            }
            output += input[i];
        }
    }
    
    getSecondWord(spaceDelimnatedInput) {
        let secondWord = "";
        let indexSpace = 0;
        for (let i = 0; i < spaceDelimnatedInput.length; i++) {
            if (spaceDelimnatedInput[i] == " ") {
                indexSpace = i;
                break;
            }
        }
        for (let index = indexSpace + 1; index < spaceDelimnatedInput.length; index++) {
            secondWord += spaceDelimnatedInput[index];
        }
        return secondWord;
    }
    
    reverse(input) {
        let reverseOutput = "";
        for (let i = input.length -1; i >= 0; i--) {
            reverseOutput += input[i];
        }
        return reverseOutput;
    }
}

module.exports = StrangerStrings;