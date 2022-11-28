/*
You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.  

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.
*/

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks =
  "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

console.log(wordBlanks);
