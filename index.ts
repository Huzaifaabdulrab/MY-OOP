#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

//Student class
class Student {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

//Person class
class Person {
    public students: Student[] = [];
    addStudent(student: Student) {
        this.students.push(student);
    }
}

let programerName : string = ">>>>>>>>>>>>>>>>>>>>HUZAIFA ABDULRAB<<<<<<<<<<<<<<<<<<<<<<<<<";
console.log(chalk.underline.blueBright(programerName));


//inherit Perosn
const newPerson = new Person();


//async function
const programStart = async (newPerson: Person) => {
    do {
        //user input
        const answer = await inquirer.prompt({
            name: "userAnswer",
            type: "list",
            message: "Who would you like to talk to?",
            choices: ["Self", "Student", "Exit"] //choices
        });

        if (answer.userAnswer == "Self") {
            console.log(chalk.yellowBright("Hello, I am talking to myself..."));
            console.log(chalk.yellowBright("I am fine..."));
        } else if (answer.userAnswer == "Student") {
            let validStdName = false;
            let studentNameInput = "";

            while (!validStdName) {
                const studentAnswer = await inquirer.prompt({
                    name: "student",
                    type: "input",
                    message: "Which student would you like to talk to?"
                });

                if (isNaN(Number(studentAnswer.student))) {
                    studentNameInput = studentAnswer.student;
                    validStdName = true;
                } else {
                    console.log(chalk.red(`${studentAnswer.student} Please enter a valid name, not a number.`));
                }
            }

            const studentName = newPerson.students.find(student => student.name == studentNameInput);

            if (!studentName) {
                const newStudent = new Student(studentNameInput);
                newPerson.addStudent(newStudent);
                console.log(chalk.green(`Hello, I am ${newStudent.name} and I am fine.`));
                console.log(newPerson.students);
            } else {
                console.log(chalk.green(`Hello, I am ${studentName.name} and I am fine.`));
                console.log(newPerson.students);
            }
        } else if (answer.userAnswer == "Exit") {
            console.log(chalk.blue.bold(">>>>>>>>>>>>>>>>>>>>>>Thank you>>>>>>>>>>>>>>>>>>>>>>"));

            break;
        }
    } while (true);
};

programStart(newPerson); //Function call
