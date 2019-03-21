var fail = require ('fail')
module.exports.function = function restartGame (announcer) {
  if(announcer != null) {
    // var score = new Array ()
    i = 0
    for (i=0; i<announcer.questionBank.questions.length; i++) {
      announcer.scoreBook.score[i].answer = {spelledWord:' '}
      announcer.scoreBook.score[i].result = false
      announcer.scoreBook.score[i].isRead = false

      // score[i].answer = {spelledWord:' '} 
      // score[i].result = false
      // score[i].isRead = false
    }

    announcer.scoreBook.correctAnswerCount = 0
    announcer.counter = -1
    return announcer
  } else {
    return null
  }
  return announcer
}
