export const generateUnduplicatedNumbers = ({
  numbersLength,
  maxNumber,
}: {
  numbersLength: number;
  maxNumber: number;
}) => {
  const numbers: number[] = [];

  while (numbers.length < numbersLength) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    if (!numbers.includes(randomNumber)) {
      // NOTE: 번호는 중복되지 않는다
      numbers.push(randomNumber);
    }
  }

  return numbers;
};
