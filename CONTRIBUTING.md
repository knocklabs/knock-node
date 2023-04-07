# Contributing

## Getting Started

1. Install [asdf](https://asdf-vm.com)
2. Install the asdf NodeJS and Yarn plugins

```bash
asdf plugin add nodejs
asdf plugin add yarn https://github.com/twuni/asdf-yarn.git
```

3. Run `asdf install` to install the versions of NodeJS and Yarn specified in the [.tool-versions](.tool-versions) file

## Running tests

```bash
yarn test
```

## Building

```bash
yarn build
```

## Formatting

```bash
yarn lint --fix
```
