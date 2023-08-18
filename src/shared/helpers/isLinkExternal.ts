const isLinkExternal = (href: string): boolean => {
  return Boolean(href && (href.indexOf('http://') !== -1 || href.indexOf('https://') !== -1));
};

export default isLinkExternal;
