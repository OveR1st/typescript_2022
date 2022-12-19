function toString63<T>(data: T): string | undefined {
  if (typeof data == 'string') {
    return data;
  } else if (typeof data == 'number') {
    return data.toString();
  } else if (typeof data == 'object') {
    return JSON.stringify(data);
  } else {
    return;
  }
}

const res63 = toString63(2);

/**
 * Author
 */

function toString63Author<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString();
  }
  switch (typeof data) {
    case 'string':
      return data;
    case 'number':
    case 'symbol':
    case 'bigint':
    case 'boolean':
    case 'function':
      return data.toString();

    case 'object':
      return JSON.stringify(data);
    default:
      return undefined;
  }
}

console.log(toString63Author(3));
console.log(toString63Author(true));
console.log(toString63Author(['a', 'b']));
console.log(toString63Author({ a: 1 }));
