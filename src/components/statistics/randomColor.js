const colors = [
  '#03cffc',
  '#a103fc',
  '#d1524f',
  '#43aba9',
  '#c9ac8d',
  '#eaf081',
  '#7aba50',
];

export function randomColor() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return colors[randomIntegerFromInterval(0, colors.length - 1)];
}
