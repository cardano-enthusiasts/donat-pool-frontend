const ROUTES = {
  root: '/',
  allFundraisings: '/all-projects',
  userFundraisings: '/my-projects',
  newFundraising: '/new-project',
  roadmap: '/roadmap',
  faq: '/faq',
  mock: '/mock-address',
} as const;

const testnetNami = {
  wallet: 'Nami',
  isMainnet: false,
} as const;

export { ROUTES, testnetNami };
