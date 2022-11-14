/**
 * Union types 21 lesson (сужениие типов)
 */
function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log('id string', id);
  } else if (typeof id === 'number') {
    console.log('id number', id);
  } else {
    console.log('id boolean', id);
  }
}

// logId(2);
// logId('dd');
// logId(false);

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log('err Array', err);
  } else {
    console.log('err string', err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log('a', obj.a);
  } else {
    console.log('b', obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log('a', a);
  } else {
  }
}

/**
 * Literal types 22 lesson
 */
// enum RequestType {
//   GET = 'GET',
//   POST = 'POST',
// }

function fetchWithAuth(url: string, method: 'POST' | 'GET'): 1 | -1 {
  fetch(url, method);
  return 1;
}

let a = 'dsadd';
const b3 = 'dsadd';

const method = 'POST';
//warning
fetchWithAuth('fdfd', method);
