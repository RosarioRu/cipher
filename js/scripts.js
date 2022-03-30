

let sentence = prompt("Enter a Sentence");

alert(sentence);

function firstLast(frase) {
  let first = (frase.charAt(0)).toUpperCase();
  let last = (frase.charAt(frase.length - 1)).toUpperCase();
  return first+last;
}

alert(firstLast(sentence));

function reverse() {
  let array=(firstLast(sentence)).split("");
  return((array.reverse()).join(""));
}

alert(reverse());

  