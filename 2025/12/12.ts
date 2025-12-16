export { elfBattle };

function elfBattle(elf1: string, elf2: string): number {
  let hp1 = 3;
  let hp2 = 3;
  const rounds = Math.max(elf1.length, elf2.length);

  const calculateDamage = (attacker: string, defender: string): number => {
    if (attacker === 'F') return 2;
    if (attacker === 'A' && defender !== 'B') return 1;
    return 0;
  };

  for (let i = 0; i < rounds && hp1 > 0 && hp2 > 0; i++) {
    const move1 = elf1[i] || '';
    const move2 = elf2[i] || '';

    hp1 -= calculateDamage(move2, move1);
    hp2 -= calculateDamage(move1, move2);
  }

  if (hp1 === hp2 || (hp1 <= 0 && hp2 <= 0)) return 0;
  return hp1 > hp2 ? 1 : 2;
}
