# catho-edu-assignment

- [Run with docker-compose](#run-with-docker-compose)
- [Run mannually](#run-manually-(development))
- [Tests](#tests)

# Run with docker-compose
```bash
git clone git@github.com:thiagoloddi/catho-edu-assignment.git
cd catho-edu-assignment
docker-compose up
```

When running this command the Docker file will also automatically popoulate the database with the sample data. You can edit the sample data at `scripts/data.sample.json`

Access `localhost:8080` in your browser to start using the application.

# Run manually (development)

## Install
```bash
git clone git@github.com:thiagoloddi/catho-edu-assignment.git
cd catho-edu-assignment
npm install
```

## Build
```bash
npm run build # Run this command with environment variable `NODE_ENV='local'` to run in watch mode.
```

## Populate DB
To populate the DB with the sample data run the following command. You can edit the sample data at `scripts/data.sample.json`

## Run
```bash
npm start
```

Or, for watch mode:
```bash
npm run dev
```

Access `localhost:8080` in your browser to start using the application.

# Tests
Run tests:
```bash
npm run test
```

Update snapshots:
```bash
npm run test:update
```