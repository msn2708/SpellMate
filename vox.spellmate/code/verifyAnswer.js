var console = require ('console')
module.exports.function = function verifyAnswer (announcer, answer) {

  var counter = announcer.counter
  var currentQuestion = announcer.questionBank.questions[counter].challengeWord.toLowerCase()
  var spelledWord = answer.spelledWord
  var localAnswer = spelledWord.replace(/\s/g,'').toLowerCase()


  // var retAnnouncer = announcer
  // var retAnnouncer = jQuery.extend(true, {}, announcer);
  var retAnnouncer = JSON.parse(JSON.stringify(announcer));

  console.log ("SpelledWord: " + localAnswer)
  console.log ("Question: " + currentQuestion)

  if(currentQuestion.localeCompare(localAnswer) == 0) {
    retAnnouncer.scoreBook.score[counter].answer.spelledWord = localAnswer
    retAnnouncer.scoreBook.score[counter].result = true
    retAnnouncer.scoreBook.score[counter].question.challengeWord = currentQuestion

  } else {
    retAnnouncer.scoreBook.score[counter].answer.spelledWord = localAnswer
    retAnnouncer.scoreBook.score[counter].result = false
    retAnnouncer.scoreBook.score[counter].question.challengeWord = currentQuestion
  }

  return retAnnouncer
}
