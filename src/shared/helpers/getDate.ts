const getDate = (timestamp: number) => {
  const date = new Date(timestamp).toLocaleDateString('ru', {
    month: '2-digit',
    day: '2-digit',
  });
  return `${date}`;
};

export { getDate };
