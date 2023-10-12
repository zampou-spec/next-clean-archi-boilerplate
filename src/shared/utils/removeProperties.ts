const removeProperties = <T extends Record<string, string | number>>(obj: T, propertiesToDelete: string[]): T => {
  const newObj: T = { ...obj };

  for (const prop of propertiesToDelete) {
    if (Object.prototype.hasOwnProperty.call(newObj, prop)) {
      delete newObj[prop as keyof T];
    }
  }

  return newObj;
};

export default removeProperties;
