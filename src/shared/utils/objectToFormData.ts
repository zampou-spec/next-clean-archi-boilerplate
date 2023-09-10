export const objectToFormData = (obj: Record<string, string | number | File>): FormData => {
  const formData = new FormData();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === 'string') {
        formData.append(key, value);
      } else if (typeof value === 'number') {
        formData.append(key, value.toString());
      }
    }
  }

  return formData;
};
