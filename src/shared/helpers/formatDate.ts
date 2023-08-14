const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString('ru', {
    month: '2-digit',
    day: '2-digit',
  });
};

export default formatDate;
