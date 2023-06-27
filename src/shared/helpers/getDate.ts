const getDate = (timestamp) => {
  const date = new Date(timestamp).toLocaleDateString('ru', {
    month: '2-digit',
    day: '2-digit',
  });
  return `${date}`;
};

export { getDate };
