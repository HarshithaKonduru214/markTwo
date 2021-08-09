var readLineSync = require('readline-sync');

var score = 0
var userName = readLineSync.question('Please Enter Your Name? ')

console.log('Welcome ' + userName + ' to DO YOU KNOW MONEY HEIST!' );

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Right Answer!')
    score += 1;
  } else {
    console.log('Wrong Answer!');
    score -= 1;
  }

  console.log(score);
  console.log('---------------');
}

var highScores = [{
  name: 'Harshitha',
  score: 10},
  {name: 'Monica',
  score: 9}
]

var questions = [{
  question: `The heist was the brainchild of the Professor.
  A: True
  B: False `,
  answer: 'B'},
  {question: `The show is actually called La Casa de Papel, which literally translates to
  A: The Paper House
  B: The Outcasts `,
  answer: 'C'},
  {question: `In which country does Raquel track the Professor after the first heist?
  A: Thailand
  B: Philippines `,
  answer: 'B'},
  {question: `What relationship did Sergio Marquina and Berlin share?
  A: Lovers
  B: Brothers `,
  answer: 'B'},
  {question: `According to one fan theory, inspector Alicia and ___ are the same person.
  A: Tatiana
  B: Arianda `,
  answer: 'A'},
  {question: `“Let the matriarchy begin”: Whose words are these?
  A: Tokyo
  B: Nairobi `,
  answer: 'B'},
  {question: `Whose glasses contained a bug?
  A: Raquel
  B: Angel `,
  answer: 'B'},
  {question: `Even the professor was bestowed with an unofficial city name. What place is he named after?
  A: Vatican City
  B: Las Vegas `,
  answer: 'A'}
]

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer);
}
console.log('The Winners are: ');
for(var i=0; i<highScores.length;i++) {
  var currentScore = highScores[i];
  if(score < currentScore.score) {
    console.log(currentScore.name);
  }else {
    console.log(userName);
    console.log('Congrats on Winning!');
  }
}
