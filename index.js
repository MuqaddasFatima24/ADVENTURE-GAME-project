import chalk from 'chalk';
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    ;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    ;
    fuelIncrease() {
        this.fuel = 100;
    }
    ;
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    ;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    ;
}
;
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name",
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
let p1 = new Player(player.name);
let p2 = new Player(opponent.select);
do {
    // SKELETON:
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life...."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red('${p1.name} fuel is ${p1.fuel}'));
                console.log(chalk.bold.green('#{p2.name} fuel is ${p2.fuel}'));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"));
                    process.exit();
                }
                ;
            }
            ;
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(chalk.bold.green('${p1.name} fuel is ${p1.fuel}'));
                console.log(chalk.bold.red('${p2.name} fuel is ${p2.fuel}'));
                if (p2.fuel <= 0) {
                    p2.fuelDecrease();
                    console.log(chalk.green.bold.italic("YOU WIN!"));
                    process.exit();
                }
                ;
            }
            ;
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green('You Drink Health Portion Fuel is ${p1.fuel}'));
            }
            ;
            if (ask.opt == "Run For Your Life....") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
            ;
        }
        ;
        //ASSASSIN:
        if (opponent.select == "Assassin") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select Your Opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life...."],
            });
            if (ask.opt == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red('${p1.name} fuel is ${p1.fuel}'));
                    console.log(chalk.bold.green('${p2.name} fue is ${p2.fuel}'));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"));
                        process.exit();
                    }
                    ;
                }
                ;
                if (num <= 0) {
                    p2.fuelDecrease();
                    console.log(chalk.bold.green('${p1.name} fuel is ${p1.fuel}'));
                    console.log(chalk.bold.green('${p2.name} fuel is ${p2.fuel}'));
                    if (p2.fuel <= 0) {
                        console.log(chalk.green.bold.italic("YOU WIN"));
                        process.exit();
                    }
                    ;
                }
                ;
                if (ask.opt == "Drink Portion") {
                    p1.fuelIncrease();
                    console.log(chalk.bold.italic.green('You Drink Health Portion Fuel is ${p1.fuel}'));
                }
                ;
                if (ask.opt == "Run For Your Life....") {
                    p1.fuelIncrease();
                    console.log(chalk.red.bold.italic("You Loose, BETTER LUCK Next Time"));
                    process.exit();
                }
                ;
            }
            ;
        }
        ;
        // ZOOMBIE:
        if (opponent.select == "Zoomie") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "Select Your Opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life...."],
            });
            if (ask.opt == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red('${p1.name} fuel is ${p1.fuel}'));
                    console.log(chalk.bold.green('${p2.name} fuel is ${p2.fuel}'));
                    if (p1.fuel <= 0) {
                        console.log(chalk.red.bold.italic("You Loose, BETTER LUCK Next Time"));
                        process.exit();
                    }
                    ;
                }
                ;
                if (num <= 0) {
                    p2.fuelDecrease();
                    console.log(chalk.bold.green('${p1.name} fuel is ${p1.fuel}'));
                    console.log(chalk.bold.red('${p2.name} fuel is ${p2.fuel}'));
                    if (p2.fuel <= 0) {
                        console.log(chalk.green.bold.italic("YOU WIN"));
                        process.exit();
                    }
                    ;
                }
                ;
                if (ask.opt == "Drink Portion") {
                    p1.fuelIncrease();
                    console.log(chalk.bold.italic.green('You Drink Health Portion Fuel is ${p1.fuel}'));
                }
                ;
                if (ask.opt == "run For Your Life....") {
                    console.log(chalk.red.bold.italic("You Loose, BETTER LUCK Next Time"));
                    process.exit();
                }
                ;
            }
            ;
        }
        ;
    }
    ;
} while (true);
