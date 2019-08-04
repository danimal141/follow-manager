# follow-manager [![CircleCI](https://circleci.com/gh/danimal141/follow-manager.svg?style=svg&circle-token=0dfbb7e978e255ba5e5c5e2a552d3f685385e1d4)](https://circleci.com/gh/danimal141/follow-manager)

## Development

### Setup / update

- `yarn install`

### iOS

- `yarn ios`

#### How to debug

```
$ brew update && brew cask install react-native-debugger
$ open 'rndebugger://set-debugger-loc?host=localhost&port=19001'

Press 'command + d' on the Simulator -> Select 'Debug Remote JS' to start debugging.
```

### Android

- `yarn android`

### Lint

- `yarn lint`

### Test

- `yarn test:snapshot` # Update snapshots
- `yarn test`
