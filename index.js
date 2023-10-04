// code your solution here
function saturdayFun(value = "roller-skate") {
    return `This Saturday, I want to ${value}!`
}

saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(value = "go to the office") {
    return `This Monday, I will ${value}.`;
}

mondayWork();
mondayWork("work from home");


function wrapAdjective(emphasis) {
    return function (adjective) {
        return `You are ${emphasis}${adjective}${emphasis}!`;
    };
}

let emphatic = wrapAdjective()("a hard worker");

