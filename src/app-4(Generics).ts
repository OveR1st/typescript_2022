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
/**
 * function generic (62 lesson)
 */
function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res62 = logMiddleware<number>(10);

function getSplitedHalf62<T>(data: T[]): T[] {
  const l = data.length / 2;

  return data.splice(0, l);
}

const halflength62 = getSplitedHalf62<number>([4, 5, 6, 7]);
