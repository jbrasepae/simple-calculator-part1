const {add, multiply} = require("../src/simple_calculator.js")

describe( "add", function() {
    it("should add two numbers", function() {
        expect(add(1, 2)).toBe(3);
    })
    it("should add negative numbers", function(){
        expect(add(-1, -1)).toBe(-2);
    })
    it("should add multiple numbers", function(){
        expect(add(1,2,3,4,5)).toBe(15);
    })
})

describe( "multiply", function() {
    it("should multiply two numbers", function() {
        expect(multiply(1, 3)).toBe(3);
    })
    it("should multiply negative numbers", function() {
        expect(multiply(-1, 3)).toBe(-3);
    })
    it("should multiply multiple numbers", function() {
        expect(multiply(1,2,3,4,5)).toBe(120);
    })
    
})