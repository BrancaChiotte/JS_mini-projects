
var userName = prompt("What is your name?");

if (userName != null) {
    console.log("Hello, " + userName + "!");
}
else {
    console.log("Hello stranger!");
}


var userQuestion = prompt("Please ask a question!");
var randomNumber = Math.floor(Math.random() * 8);

var eightBall = " ";

if (randomNumber === 0) {
   eightBall = "Better not tell you now.";
} else if (randomNumber === 1) {
   eightBall = "Concentrate and ask again.";
} else if (randomNumber === 2) {
   eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
   eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
   eightBall = "My reply is no.";
} else if (randomNumber === 5) {
   eightBall = "My sources say no";
} else if (randomNumber === 6) {
   eightBall = "Outlook not so good";
} else {
   eightBall = "Signs point to yes";
}


// switch (randomNumber){
//   case 0:
//     eightBall = 'It is certain';
//     break;
//   case 1:
//     eightBall = 'It is decidedly so';
//     break;
//   case 2:
//     eightBall = 'Reply hazy try again';
//     break;
//   case 3:
//     eightBall = 'Cannot predict now';
//     break;
//   case 4:
//     eightBall = 'Dont count on it';
//     break;
//   case 5:
//     eightBall = 'My sources say no';
//     break;
//   case 6:
//     eightBall = 'Outlook not so good';
//     break;
//   case 7:
//     eightBall = 'Signs point to yes';
//     break;
// }


console.log(userName + ' question was: ' + userQuestion);
console.log('The eight ball answer: ' + eightBall);
