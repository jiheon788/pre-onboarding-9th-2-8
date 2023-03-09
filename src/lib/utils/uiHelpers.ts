const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (timeStamp: string) => {
  const [year, month, day] = timeStamp.split(' ')[0].split('.').map(Number);
  return `${months[month - 1]} ${day}, ${year}`;
};

export const formatNumToWon = (pureNumber: number) =>
  `￦ ${pureNumber?.toLocaleString('ko-KR')}`;
