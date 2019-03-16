var console = require('console')
module.exports.function = function askNextQuestion (announcer) {
  var retAnnouncer = JSON.parse(JSON.stringify(announcer))
  var currentIndex = announcer.counter

  if(currentIndex >= 0) {
    console.log("CurrentIndex: " + currentIndex)
    console.log("questionBank Length: ") + announcer.questionBank.questions.length
    
    if (currentIndex < (announcer.questionBank.questions.length-1)) {
      announcer.counter = currentIndex + 1
    } else {
      announcer.counter = -1
    }
  } 
  return announcer
}