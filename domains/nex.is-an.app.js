addSubDomain({
    description: 'Subdomains for my personal homelab',
    domain: 'is-an.app',
    subdomain: 'nex',
    owner: {
      email: 'nexos.dons@gmail.com',
    },
    record: {
      A: [
        '5.181.187.182',
      ],
    },
    nested: [
        {
          subdomain: 'flix',
          record: {
            A: [
              '5.181.187.182',
            ],
          },
          proxy: true,
        },
        {
          subdomain: 'proxymanager',
          record: {
            A: [
              '5.181.187.182',
            ],
          },
          proxy: true,
        },
        {
            subdomain: 'films',
            record: {
              A: [
                '5.181.187.182',
              ],
            },
            proxy: true,
          },
      ],
    })