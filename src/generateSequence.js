const generateSequence = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i++) {  
    const currentElement = start + i * step;
    result.push(currentElement);
  }
  return result;
};

export default generateSequence;