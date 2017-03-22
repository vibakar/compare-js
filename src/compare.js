module.exports = function(sentence1, sentence2) {
  // returns -1 if sentence is null or empty
    if (!sentence1 || !sentence2) {
        return -1;
    }
    let sentence1_array = sentence1.toLowerCase().split(' ');
    let sentence2_array = sentence2.toLowerCase().split(' ');
    let wordCount = 0;
    for (let u = 0; u < sentence1_array.length; u++) {
        for (let t = 0; t < sentence2_array.length; t++) {
            if (sentence1_array[u] === sentence2_array[t]) {
                wordCount++;
            }
        }
    }
    return wordCount;
}
