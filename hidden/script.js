let paragraph = document.querySelector('p').innerText;

const BLOCK_VARIANTS = ['░', '▒', '▓'];

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

function coverRandomCharacter() {
  const randomParagraphCharacterIndex = Math.floor(
    Math.random() * (paragraph.length - 0 + 1) + 0
  );
  //   const randomParagraphCharacter = paragraph[randomParagraphCharacterIndex];

  const randomBlock = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  paragraph[randomParagraphCharacterIndex] = BLOCK_VARIANTS[randomBlock];
  if (Math.floor(Math.random() * (10 - 1 + 1) + 1) > 9) {
    const newParagraph = paragraph.replaceAt(
      randomParagraphCharacterIndex,
      '░▒▓░▒▓░▒▓░▒▓'
    );
    document.querySelector('p').innerText = newParagraph;
  } else {
    const newParagraph = paragraph.replaceAt(
      randomParagraphCharacterIndex,
      BLOCK_VARIANTS[randomBlock]
    );

    document.querySelector('p').innerText = newParagraph;
  }
}
setInterval(coverRandomCharacter, 1000);
setInterval(coverRandomCharacter, 1200);
setInterval(coverRandomCharacter, 500);
setInterval(coverRandomCharacter, 2000);
setInterval(coverRandomCharacter, 600);
