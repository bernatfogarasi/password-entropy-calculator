const calculate_entropy = (text) => {
  var pools = [
    { characters: "0123456789", used: false },
    {
      characters: "abcdefghijklmnopqrstuvwxyz",
      used: false,
    },
    {
      characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      used: false,
    },
    {
      characters: "`~!@#$%^&*()-=_+[{]}\\|;':\",.<>/?",
      used: false,
    },
  ];
  var pool_size = 0;
  for (character of text) {
    pools
      .filter((pool) => !pool.used && pool.characters.includes(character))
      .map((pool) => {
        pool_size += pool.characters.length;
        pool.used = true;
      });
  }
  return (text.length * Math.log(pool_size)) / Math.log(2);
};

const password = "NoT?-mY!_pAsSwOrD*";
const entropy = calculate_entropy(password);
console.log(`Entropy=${Math.round(entropy)}`);
