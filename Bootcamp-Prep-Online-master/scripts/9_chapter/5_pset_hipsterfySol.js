function hipsterfy(sentence) {
  var hipsterfiedWords = [];
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    hipsterfiedWords.push(hipsterfyWord(word));
  }

  var hipsterfiedSentence = hipsterfiedWords.join(" ");
  return hipsterfiedSentence;
}

function hipsterfyWord(word) {
  var vowels = ["a","e","i","o","u"];

  for (var i = word.length - 1; i >= 0; i -= 1) {
    if (vowels.indexOf(word[i]) !== -1) {
      var hipsterWord = word.slice(0, i) + word.slice(i + 1);
      return hipsterWord;
    }
  }

  return word;
}
