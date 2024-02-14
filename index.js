import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess:"
    }
]);
const { userGuess } = answers;
if (userGuess === systemGeneratedNo) {
    console.log(userGuess, "userGuess", systemGeneratedNo, "Sys");
    console.log("Yeaaa Your answer is correct \n you win!");
}
else {
    console.log("Please try again Better luck next time!");
}
