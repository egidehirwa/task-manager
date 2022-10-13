// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["task1", "task2", "task3"]


const showtasks = () => {
    console.log(tasks)
}

showtasks()