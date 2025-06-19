import { degenerativeAI } from "./degenerativeAI.js";
import { expect } from "chai";
import { describe, it } from "mocha";

//what is the code supposed to do?

/**
 * @param: N number of lines with N0 = number of wires needed
 *                                N1-n = int L -> length of the wire; c -> color of the wire
 * @returns: int representing the minimum length of each wires needed to assemble the device
 */

describe ("Tests on degenerativeAI", function (){

    describe ("Successful test: ", function(){
        it ("Should return : 12, when the input is the following: [7, {11: 'yellow', 8: 'blue', 3: 'red', 2: 'green', 4: 'blue', 5: 'red', 2: 'red'}]", function(){
            expect(degenerativeAI([7, {11: 'yellow', 8: 'blue', 3: 'red', 2: 'green', 4: 'blue', 5: 'red', 2: 'red'}])).to.equal(54);
        });
        it ("Should return: 54, when the input is the following: [10, {11: 'blue', 12: 'yellow', 14: 'blue', 15: 'blue', 13: 'red', 11: 'red', 6: 'yellow', 14: 'green', 9: 'red', 14: 'blue'}]", function(){
            expect(degenerativeAI([10, {11: 'blue', 12: 'yellow', 14: 'blue', 15: 'blue', 13: 'red', 11: 'red', 6: 'yellow', 14: 'green', 9: 'red', 14: 'blue'}])).to.equal(54);
        });
        it ("Should return: 262, when the input is the following: [15, {73: 'yellow', 77: 'orange', 51: 'green', 80: 'purple', 66: 'orange', 77: 'purple', 45: 'blue', 19: 'orange', 80: 'green', 97: 'blue', 48: 'purple', 47: 'red', 50: 'orange', 31: 'red', 50: 'orange'}]", function(){
            expect(degenerativeAI([15, {73: 'yellow', 77: 'orange', 51: 'green', 80: 'purple', 66: 'orange', 77: 'purple', 45: 'blue', 19: 'orange', 80: 'green', 97: 'blue', 48: 'purple', 47: 'red', 50: 'orange', 31: 'red', 50: 'orange'}])).to.equal(262)
        });
    });


});