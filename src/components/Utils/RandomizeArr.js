export function randomize(arr) {
  const randomizedArr = arr
    .map((i) => ({
      i,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ i }) => i);

  return randomizedArr;
}
