import { useMemo } from "react";

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

// export function randomize(arr) {
//   useMemo(() => {
//     const randomizedArr = arr
//       .map((i) => ({
//         i,
//         sort: Math.random(),
//       }))
//       .sort((a, b) => a.sort - b.sort)
//       .map(({ i }) => i);

//     return randomizedArr;
//   }, [arr]);
// }
