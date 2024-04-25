#!/usr/bin/env node
const sayHello = () => console.log("Es6 function - Hello World")
// Arrow function can be passed as parameters for callbacks
setTimeout(sayHello, 1000);

//arrow function with parameters
const oneParamArroFunc = name => {return "Hello" + name};
const twoParamsArrowFuncWithoutReturn = (first, last) => console.log("hello" + first + " "+ last);
const twoParamsTwoLinesArrowFunc = (first, last) => {
  const greeting = "hello ";
	return greeting+" "+first + " " + last;
}
