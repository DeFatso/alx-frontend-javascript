export default function cleanSet(set, startString) {
  const str = [];

  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  for (const i of set) {
    if (i.startsWith(startString)) {
      str.push(i.slice(startString.length));
    }
  }

  return str.join('-');
}
