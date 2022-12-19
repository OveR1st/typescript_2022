/**
 * Generics (61 lesson)
 */
const num61: Array<number> = [1, 2, 3];
async function test61() {
  const a61 = await new Promise<number>((res, rej) => {
    res(1);
  });
}

const check61: Record<string, boolean> = {
  drive: true,
  kpp: false,
  dasdaasd: true,
};
