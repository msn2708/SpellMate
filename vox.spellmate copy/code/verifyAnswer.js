var console = require ('console')
module.exports.function = function verifyAnswer (announcer, answer) {

  var counter = announcer.counter
  if(counter == -100)
    return announcer
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
    retAnnouncer.scoreBook.correctAnswerCount += 1
  } else {
    retAnnouncer.scoreBook.score[counter].answer.spelledWord = localAnswer
    retAnnouncer.scoreBook.score[counter].result = false
    retAnnouncer.scoreBook.score[counter].question.challengeWord = currentQuestion
  }

  if(retAnnouncer.counter == retAnnouncer.questionBank.questions.length-1) {
    retAnnouncer.counter = -100
  }
  return retAnnouncer
}
