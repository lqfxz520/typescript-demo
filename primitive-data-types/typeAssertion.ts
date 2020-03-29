interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  if (typeof animal.swim === 'function') {
      return true;
  }
  return false;
}

// index.ts:11:23 - error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat'.

interface Cat1 {
  name: string;
  run(): void;
}
interface Fish1 {
  name: string;
  swim(): void;
}

function isFish1(animal: Cat1 | Fish1) {
  if (typeof (animal as Fish).swim === 'function') {
      return true;
  }
  return false;
}