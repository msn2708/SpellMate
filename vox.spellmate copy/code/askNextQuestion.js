var console = require('console')
module.exports.function = function askNextQuestion (announcer) {
  var currentIndex = announcer.counter

  if(currentIndex >= -1) {
    if (currentIndex < (announcer.questionBank.questions.length-1)) {
      announcer.counter = announcer.counter + 1
    } else {
      announcer.counter = -100
      console.log("CurrentIndex: " + currentIndex)
      console.log("questionBank Length: ") + announcer.questionBank.questions.length
    }
  } 
  return announcer
}