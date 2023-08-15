const variants = {
  primary: { yellow: 'bg-yellow', blue: 'bg-blue' },
  secondary: {
    red: 'before:bg-red after:bg-red',
    green: 'before:bg-green after:bg-green',
  },
  font: {
    red: 'text-red',
    green: 'text-green',
  },
  size: {
    s: 'h-[97px] max-lg:h-[70px]',
    m: 'h-[127px] max-lg:h-[86px]',
  },
};

export default variants;
