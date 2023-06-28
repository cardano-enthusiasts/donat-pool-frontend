const texts = {
  phases: [
    {
      title: 'Phase 1 (finished)',
      items: [
        {
          title:
            'Protocol: on-chain and off-chain logic for starting, updating and closing protocol with Nami light-wallet',
          id: '1.0',
        },
        {
          title:
            'Donat.Pool: on-chain and off-chain logic for creating project and receiving raised funds with Nami light-wallet',
          id: '1.1',
        },
        {
          title:
            'Donate action: on-chain and off-chain logic for donating to an arbitrary project with Nami light-wallet',
          id: '1.2',
        },
        {
          title: 'Unit tests and endpoint tests',
          id: '1.3',
        },
        {
          title: 'Frontend for the implemented services',
          id: '1.4',
        },
        {
          title: 'Deploying to Cardano pre-production testnet',
          id: '1.5',
        },
        {
          title: 'Beta-testing in Cardano pre-production testnet',
          id: '1.6',
        },
      ],
    },
    {
      title: 'Phase 2',
      items: [
        {
          title: 'Implement new frontend design',
          id: '2.0',
        },
        {
          title: 'Deploy contracts to testnet',
          id: '2.1',
        },
      ],
    },

    {
      title: 'Phase 3',
      items: [
        {
          title:
            'Add more information about projects (category, image, detailed description)',
          id: '3.0',
        },

        {
          title:
            'Governance: minting DAO tokens and implementing the governance services:',
          id: '3.1',
        },
        {
          subItems: [
            {
              title: 'Managing protocol configuration logic',
              id: '3.2.0',
            },
            {
              title: 'Rewards distribution logic',
              id: '3.2.1',
            },
          ],
          id: '3.2',
        },
        {
          title: 'Deploy contracts to mainnet',
          id: '3.3',
        },

        {
          title: 'Start media',
          id: '3.4',
        },
        {
          title: 'Add possibility to see projects without connecting wallet',
          id: '3.5',
        },
        {
          title: 'Add filter by categories for projects page',
          id: '3.6',
        },
        {
          title: 'Add auxiliary light-wallets support:',
          id: '3.7',
        },
        {
          subItems: [
            {
              title: 'Flint',
              id: '3.8.0',
            },
            {
              title: 'Gero',
              id: '3.8.1',
            },

            {
              title: 'Lode',
              id: '3.8.2',
            },
            {
              title: 'Eternl',
              id: '3.8.3',
            },
            {
              title: 'NuFi',
              id: '3.8.4',
            },
          ],
          id: '3.8',
        },
      ],
    },
    {
      title: 'Phase 4',
      items: [
        {
          title: 'Add possibility to see list of closed projects',
          id: '4.0',
        },
        {
          title: 'Add projects verification',
          id: '4.1',
        },

        {
          title: 'Updating project in mainnet',
          id: '4.2',
        },
        {
          title: 'Create social media profiles and add links on website',
          id: '4.3',
        },
      ],
    },

    {
      title: 'Phase 5',
      items: [
        {
          title: 'Projects promoting logic',
          id: '5.0',
        },
        {
          title: 'Subscriptions for project creators',
          id: '5.1',
        },

        {
          title: 'Improve project verification',
          id: '5.2',
        },
        {
          title: 'Add logic for motivating contributors to make more donates',
          id: '5.3',
        },
        {
          title: '...',
          id: '5.4',
        },
      ],
    },
  ],
};

export { texts };
