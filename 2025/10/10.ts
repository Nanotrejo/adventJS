export { maxDepth };

function maxDepth(s: string): number {
  let currentDepth = 0;
  let maxDepthFound = 0;

  for (const char of s) {
    if (char === '[') {
      currentDepth++;
      maxDepthFound = Math.max(maxDepthFound, currentDepth);
    } else if (char === ']') {
      currentDepth--;
      if (currentDepth < 0) {
        return -1;
      }
    }
  }

  return currentDepth === 0 ? maxDepthFound : -1;
}
