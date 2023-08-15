const isLinkExternal = (href: string): boolean => {
  return Boolean(href && (href.indexOf('http://') !== 0 || href.indexOf('https://') !== 0));
};

export default isLinkExternal;
