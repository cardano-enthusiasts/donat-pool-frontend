const ROUTES = {
  home: '/',
  allFundraisings: '/all-projects',
  userFundraisings: '/my-projects',
  newFundraising: '/new-project',
  roadmap: '/roadmap',
  faq: '/faq',
  termsOfUse: 'terms-of-use',
  mock: '/mock-address',
} as const;

const testnetNami = {
  wallet: 'Nami',
  isMainnet: false,
} as const;

export { ROUTES, testnetNami };
