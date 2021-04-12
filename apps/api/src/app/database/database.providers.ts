import { createConnection } from 'typeorm';
import { getMetadataArgsStorage } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'sqlite',
        database: `./database.sqlite`,
        synchronize: true,
        logging: false,
        entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
        migrations: [
          __dirname + '/migrations/**/*{.ts,.js}',
        ],
        subscribers: [
          __dirname + '/subscribers/**/*{.ts,.js}',
        ],
        cli: {
          entitiesDir: `/entities`,
          migrationsDir: `/migrations`,
          subscribersDir: `/subscribers`,
        },
      }),
  },
];
