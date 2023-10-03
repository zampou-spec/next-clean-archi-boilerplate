export const stringToColor = (string: string): string => {
  let i;
  let hash = 0;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

export const stringAvatar = (name: string) => {
  let localName = '';
  const splitName = name.split(' ');

  if (splitName.length == 1) {
    localName = `${splitName[0][0]}`;
  } else {
    localName = `${splitName[0][0]}${splitName[1][0]}`;
  }

  return {
    sx: {
      fontSize: '16px',
      fontWeight: '500',
      bgcolor: stringToColor(name)
    },
    children: localName.toUpperCase()
  };
};
