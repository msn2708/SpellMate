var WORDS = require ("./lib/words");
var console = require('console');

module.exports.function = function initQuestionBank () {
  var i = 0;
  var questions = new Array ()
  for(i=0; i < WORDS.length; i++) {
    questions[i] = {}
    questions[i].challengeWord = WORDS[i]
    questions[i].index = i
    
    // console.log("WORDS[i]::" + WORDS[i])
    console.log(questions[i])
  }

  return {questions:questions}
// return {questions:{question:{challengeWord:"First",index:0},question:{challengeWord:"Second",index:0}}}
  // return {questions:{{challengeWord:"First",index:0},{challengeWord:"Second",index:1}}}
}
