var WORDS = require ("./lib/words");

module.exports.function = function initAnnouncer () {
  var i = 0;
  var questions = new Array ()
  for(i=0; i < WORDS.length; i++) {
    questions[i] = {}
    questions[i].challengeWord = WORDS[i]
    questions[i].index = i
    // console.log("Questions " + questions[i].challengeWord)
  }

  // return {questionBank:{questions:questions}, counter:0}

  if(questions != null) {
    var score = new Array ()
    i = 0
    for (i=0; i<questions.length; i++) {
      score[i] = {}
      score[i].question = questions[i]
      score[i].answer = {spelledWord:' '} 
      score[i].result = false
    }
    return {questionBank:{questions:questions}, scoreBook:{score:score, correctAnswerCount:0}, counter:-1}
  } else {
    return null
  }
}