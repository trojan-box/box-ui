# trojan box

## Development

Install dependencies with npm:

```bash
npm install
```

Start a local Ethereum chain using truffle:

```bash
truffle develop
```

Open a fresh terminal window and deploy the contracts:

```bash
truffle migrate
```

## Testing

Make sure the truffle environment is running, then run tests

```bash
# Start ethereum chain if it's not already running
truffle develop

# In a new terminal, test application gas expenditures
truffle test test/test_ares.js

# Run all tests
truffle test
```

## Deploy

```bash
truffle migrate --network $NETWORK_NAME
```

