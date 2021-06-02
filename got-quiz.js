const readline = require('readline-sync');
const chalk=require('chalk');
//const { greenBright } = require('chalk');

//chalk
const yellowBg=chalk.yellowBg;
const black=chalk.bold.black;
const megenta=chalk.bgMagenta;
const correct=chalk.bold.green;
const wrong=chalk.bold.red;
const blue=chalk.italic.bold.blue;
const bgCyan=chalk.bgCyan;
const greenBg=chalk.greenBg;
const brightGreen=chalk.bold.greenBright;
const yellow=chalk.italic.bold.yellow;


//questions
var score=0;
var one=[
    {
        question:"How did Joffrey die?",
        option:["Struck by an arrant crossbow shot","Poisoned at his own wedding feast","Thrown from the wall of Red Keep","Stabbed by a horde of small children"],
        answer:2
    },
    {
        question:"Which of the following is NOT one of Daenerys's dragons?",
        option:["Aegon","Drogon","Viserion","Reaghal"],
        answer:1
    },
    {
        question:"Which of the following was Sansa never married or engaged to?",
        option:["Tyrion Lannister","Ramsay Bolton","Loress Tyrell","Joffrey Baratheon"],
        answer:3
    },
    {
        question:"Which of these characters was NOT killed by Arya?",
        option:["Night King","Petyr Bealish","Tywin Lannister","Walder Frey"],
        answer:3
    },
    
    {
        question:"How are Jon and Daenerys related to each other?",
        option:["Cousins","Aunt/Nephew","Brother/Sister","They aren't"],
        answer:2
    },

];

var two=[
    {
        question:"Who did Brienne of Tarth lose her virginity to?",
        option:["Renly Baratheon","Margeary Tyrell","Tormand Gaintsbane","Jaime Lannister"],
        answer:4
    },
    
    {
        question:"Which of these characters never served as hand to a king (or queen)?",
        option:["Ned Stark","Ser Davos Seaworth","Tyrion Lannister","Jorah Mormont"],
        answer:4    
    },
    {
        question:"Who brought Jon Snow back from the dead?",
        option:["Brandon Stark","Melisandre","The Childrem of Forest","jaque H'ghar"],
        answer:2
    },
    {
        question:"How did Daenerys Targaryen eventually hatch her dragon eggs?",
        option:["In a lightning storm","In a funeral pyre","In a fireplace","n a frozen cave"],
        answer:2
    },
    {
        question:"Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
        option:["Pride in drawing blood first","Knowledge of poisons","Nighttime attacks","Ruby-colored armor"],
        answer:2
    }
];

const three=[
    {
        question:"What is the only thing that can put out volatile Wildfire?",
        option:["Sand","Water","Dragon's Blood","Sunlight"],
        answer:1
    },
    {
        question:"Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
        option:["Weirwood","Wildfire","Valyrian Steel","Snowballs"],
        answer:3
    },
    {
        question:"Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
        option:["Ghost","Lady","Nymeria","Summer"],
        answer:2
    },
    {
        question:"Arya's punishment for stealing from the Many-Face God is:",
        option:["Blindness","Memory Loss","Death","Uncontrollable laughter"],
        answer:1
    },
    {
        question:"What was the name of Ned Stark's greatsword?",
        option:["Northguard","Oathkeeper","Widow's Wail","Ice"],
        answer:4
    }
];

console.log();
const user=readline.question(black("Name : "));
console.log();
console.log("+--------------------------------------------------+")
console.log("|"+bgCyan(wrong.italic("            *****   GOT quiz   *****              "))+"|");
console.log();
console.log(`| Name : ${user}                                   |`);



//intro
//paragraph
console.log("+--------------------------------------------------+")
console.log(yellow(`Hello ${user},here are the rules`));
console.log();
console.log(wrong("Rule 1")+" : There are 3 Levels, each level has 5 questions.");
console.log(wrong("Rule 2")+" : Score atleast 4 in each section to crack next level");

//play
play();





//functions

function playLevel(level)
{
    for(ques in level)
    {
        const {question,option,answer}=level[ques]
        console.log()
        displayQuestion(level,ques)
        console.log();
        let userAnswer=parseInt(readline.question("Choice : "));
        while((userAnswer<1)||(userAnswer>4))
        {
            console.log();
            displayQuestion(level,ques);
            userAnswer=parseInt(readline.question("Please answer [1/2/3/4] -> "));
        }
        let correctAnswer=checkAnswer(answer,userAnswer)
        console.log();
        if(correctAnswer==true)
        {
            score++;
            console.log(" "+correct("Correct !!")+"                            Score : "+blue(score));
        }
        else
        {
            console.log(" "+wrong("Wrong !!")+"                              Score : "+blue(score));
        }
        console.log("----------------------------------------------------")
    }
    return score;
}

function checkAnswer(answer,userAnswer)
{
    return answer==userAnswer ? true : false;
}

function displayQuestion(level,index)
{
    const {question,option,answer}=level[index]
    console.log(megenta(">> "+question));
    console.log();
    for(op in option)
    {
        console.log(parseInt(op)+1+". "+option[op]);
    }   
}

function play()
{
    var scoreLevelOne=0
    var scoreLevelTwo=0;
    var scoreLevelThree=null;

    console.log(brightGreen("----------------------------------------------------"));
    console.log(blue.italic("                       LEVEL-1                       "));
    console.log(brightGreen("----------------------------------------------------"));
    scoreLevelOne=parseInt(playLevel(one));

    if(scoreLevelOne>3)
    {
        console.log(brightGreen("                   Level-2 Cracked"));
        console.log(brightGreen("----------------------------------------------------"));
        console.log(blue.italic("                       LEVEL-2                       "));
        console.log(brightGreen("----------------------------------------------------"));
        scoreLevelTwo=parseInt(playLevel(two));
    }
    else if(scoreLevelOne<4)
    {
        displayScore(scoreLevelOne);
    }

    if(scoreLevelTwo>6)
    {
        console.log(brightGreen("                   Level-3 Cracked"));
        console.log(brightGreen("----------------------------------------------------"));
        console.log(blue.italic("                       LEVEL-3                       "));
        console.log(brightGreen("----------------------------------------------------"));
        scoreLevelThree=parseInt(playLevel(three));
        displayScore(scoreLevelThree);
    }
    else if(scoreLevelTwo>4){
        displayScore(scoreLevelTwo);
    }
    let playAgain=readline.keyInYNStrict(yellow("Want to Play again ?"));
    //console.log(playAgain);
    if(playAgain==true)
    {
        score=0;
        play();
    }
}

function displayScore(finalScore)
{
    console.log(wrong("----------------------------------------------------"));
    console.log();
    console.log("                  "+brightGreen("Final score")+" : "+blue(finalScore));
    console.log();
    console.log(wrong("----------------------------------------------------"));
}