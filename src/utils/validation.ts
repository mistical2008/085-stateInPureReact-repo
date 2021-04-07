type NumberRange = {min: number, max: number}

export const isNumInRange = (num: number, {min, max}: NumberRange): boolean => {
  if (num >= min && num <= max) return true;
  return false;
};

