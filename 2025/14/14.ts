export { findGiftPath };

type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  const search = (obj: any, path: Path = []): Path | null => {
    for (const key in obj) {
      const value = obj[key];
      const currentPath = [...path, key];

      if (value === gift) {
        return currentPath;
      }

      if (typeof value === 'object' && value !== null) {
        const result = search(value, currentPath);
        if (result) return result;
      }
    }

    return null;
  };

  return search(workshop) || [];
}
