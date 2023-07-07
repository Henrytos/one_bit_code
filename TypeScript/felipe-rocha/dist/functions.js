"use strict";
const sum = (a, b) => {
    return (a + b).toString();
};
const value = sum(1, 2);
const log = (menssage) => {
    console.log(menssage);
};
log(sum(2, 2));
log(value);
log("hello world");
