module.exports.getTiles = async () => {
  const letterSet = [
    Array(9).fill("A"),
    Array(2).fill("B"),
    Array(2).fill("C"),
    Array(4).fill("D"),
    Array(12).fill("E"),
    Array(2).fill("F"),
    Array(3).fill("G"),
    Array(2).fill("H"),
    Array(9).fill("I"),
    Array(1).fill("J"),
    Array(1).fill("K"),
    Array(4).fill("L"),
    Array(2).fill("M"),
    Array(6).fill("N"),
    Array(8).fill("O"),
    Array(2).fill("P"),
    Array(1).fill("Q"),
    Array(6).fill("R"),
    Array(4).fill("S"),
    Array(6).fill("T"),
    Array(4).fill("U"),
    Array(2).fill("V"),
    Array(2).fill("W"),
    Array(1).fill("X"),
    Array(2).fill("Y"),
    Array(1).fill("Z"),
    Array(2).fill(" "),
  ];
  return letterSet.flat();
};

module.exports.getTileScores = async () => {
  return [
    1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
    10,
  ];
};

module.exports.getTripleLetterScores = async () => {
  const tileScores = await this.getTileScores();
  const tripleLetterScores = [];
  for await (const tileScore of tileScores) {
    tripleLetterScores.push(tileScore * 3);
  }
  return tripleLetterScores;
};
