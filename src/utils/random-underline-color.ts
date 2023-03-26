const randomUnderlineColor = () => {
  const colors = ['red.500', 'green.500', 'blue.500', 'yellow.500', 'purple.500', 'pink.500'];
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

export default randomUnderlineColor;
