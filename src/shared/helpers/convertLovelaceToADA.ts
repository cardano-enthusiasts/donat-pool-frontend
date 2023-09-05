function convertLovelaceToADA(lovelace: number | string) {
  return Number(lovelace) / 1000000;
}

export default convertLovelaceToADA;
