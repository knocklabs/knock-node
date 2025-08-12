# Changelog

## 1.11.6 (2025-08-11)

Full Changelog: [v1.11.5...v1.11.6](https://github.com/knocklabs/knock-node/compare/v1.11.5...v1.11.6)

### Bug Fixes

* properly serialize arrays of objects in query params ([#117](https://github.com/knocklabs/knock-node/issues/117)) ([c7b5aff](https://github.com/knocklabs/knock-node/commit/c7b5affbd242d0460059c7b3f802b496148fbd06))

## 1.11.5 (2025-08-11)

Full Changelog: [v1.11.4...v1.11.5](https://github.com/knocklabs/knock-node/compare/v1.11.4...v1.11.5)

### Chores

* **internal:** update comment in script ([abf094c](https://github.com/knocklabs/knock-node/commit/abf094c3da35438c2b45e1abf36b72e305f0d977))

## 1.11.4 (2025-08-09)

Full Changelog: [v1.11.3...v1.11.4](https://github.com/knocklabs/knock-node/compare/v1.11.3...v1.11.4)

### Chores

* update @stainless-api/prism-cli to v5.15.0 ([84cb94c](https://github.com/knocklabs/knock-node/commit/84cb94c8f0480fea39e58019e7ce958c98d71e99))

## 1.11.3 (2025-08-07)

Full Changelog: [v1.11.2...v1.11.3](https://github.com/knocklabs/knock-node/compare/v1.11.2...v1.11.3)

### Chores

* **internal:** move publish config ([76695ff](https://github.com/knocklabs/knock-node/commit/76695ffe2e870f0eb1c49bb6ee92b22d95cfb67f))

## 1.11.2 (2025-07-30)

Full Changelog: [v1.11.1...v1.11.2](https://github.com/knocklabs/knock-node/compare/v1.11.1...v1.11.2)

### Chores

* **internal:** remove redundant imports config ([886ee19](https://github.com/knocklabs/knock-node/commit/886ee1958eb0c168147f93ae660a4b78380a9099))

## 1.11.1 (2025-07-15)

Full Changelog: [v1.11.0...v1.11.1](https://github.com/knocklabs/knock-node/compare/v1.11.0...v1.11.1)

### Bug Fixes

* add `jose` as dependency, export `signUserToken` from package root ([#109](https://github.com/knocklabs/knock-node/issues/109)) ([061cd3f](https://github.com/knocklabs/knock-node/commit/061cd3f07afc2221f239a83f096feefd5be22754))

## 1.11.0 (2025-07-10)

Full Changelog: [v1.10.3...v1.11.0](https://github.com/knocklabs/knock-node/compare/v1.10.3...v1.11.0)

### Features

* **api:** api update ([647d271](https://github.com/knocklabs/knock-node/commit/647d2714cda96e42ac0a7816b3da0130a83978db))
* **api:** api update ([7a4ae6b](https://github.com/knocklabs/knock-node/commit/7a4ae6b5a7ed2317ffabb62d0ea762f292ee83a4))
* **api:** api update ([c713cd6](https://github.com/knocklabs/knock-node/commit/c713cd61a345818a81c51bd3467c566306c4d39a))
* **api:** api update ([cc912aa](https://github.com/knocklabs/knock-node/commit/cc912aa8707cebfd79d0301b471c1f38bce27d63))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([90c9bdd](https://github.com/knocklabs/knock-node/commit/90c9bdd59997ee1fd2fcd4e81f6869687e256dca))
* **client:** get fetchOptions type more reliably ([556dcce](https://github.com/knocklabs/knock-node/commit/556dcce102e461b5578627b9d007b3a6d90c92e3))


### Chores

* add docs to RequestOptions type ([4fc8c09](https://github.com/knocklabs/knock-node/commit/4fc8c09b1814c7889f4948bec2bd87d5805d24e4))
* **ci:** only run for pushes and fork pull requests ([4a906c7](https://github.com/knocklabs/knock-node/commit/4a906c7eef1f1eb31ea94d28107e9ae58a1417b2))
* **client:** improve path param validation ([f9dc449](https://github.com/knocklabs/knock-node/commit/f9dc44909dfaf17278992d446caa389f10748f06))
* make some internal functions async ([fde6b31](https://github.com/knocklabs/knock-node/commit/fde6b318974a544bfc349597ec8afdda10a5c950))


### Refactors

* **types:** replace Record with mapped types ([8377542](https://github.com/knocklabs/knock-node/commit/83775423c67655fe2c5e5c1b7449b355d1cf6d22))

## 1.10.3 (2025-06-21)

Full Changelog: [v1.10.2...v1.10.3](https://github.com/knocklabs/knock-node/compare/v1.10.2...v1.10.3)

### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([64b02a4](https://github.com/knocklabs/knock-node/commit/64b02a41d3110a7e336cba8ca38fd6af33785ed3))

## 1.10.2 (2025-06-19)

Full Changelog: [v1.10.1...v1.10.2](https://github.com/knocklabs/knock-node/compare/v1.10.1...v1.10.2)

### Chores

* **readme:** use better example snippet for undocumented params ([5b521fb](https://github.com/knocklabs/knock-node/commit/5b521fbfa92dcccd78811f33c6f7e962dd86639f))

## 1.10.1 (2025-06-18)

Full Changelog: [v1.10.0...v1.10.1](https://github.com/knocklabs/knock-node/compare/v1.10.0...v1.10.1)

### Chores

* **readme:** update badges ([a4c5e03](https://github.com/knocklabs/knock-node/commit/a4c5e03d3eb8f10c021c89487db0432cb68e7a0d))

## 1.10.0 (2025-06-17)

Full Changelog: [v1.9.0...v1.10.0](https://github.com/knocklabs/knock-node/compare/v1.9.0...v1.10.0)

### Features

* **client:** add support for endpoint-specific base URLs ([42eb7ac](https://github.com/knocklabs/knock-node/commit/42eb7ac920ef5a9a417dfd244868ce622d38305a))


### Chores

* **ci:** enable for pull requests ([427b10d](https://github.com/knocklabs/knock-node/commit/427b10df21ade119adc06c0ccd829587ab215ca0))
* **client:** refactor imports ([9a339e7](https://github.com/knocklabs/knock-node/commit/9a339e70b524b141a2ce3ef6bbd10bdd3ae92efd))

## 1.9.0 (2025-06-14)

Full Changelog: [v1.8.0...v1.9.0](https://github.com/knocklabs/knock-node/compare/v1.8.0...v1.9.0)

### Features

* **api:** api update ([25f4db0](https://github.com/knocklabs/knock-node/commit/25f4db034504609b4207883856e3249e1c628e2b))


### Bug Fixes

* publish script — handle NPM errors correctly ([989cb57](https://github.com/knocklabs/knock-node/commit/989cb57f585f7984cb6cdead765c4e1c5da4a94e))


### Chores

* **internal:** add pure annotations, make base APIResource abstract ([eb478b7](https://github.com/knocklabs/knock-node/commit/eb478b799a1ecd96bae6ed839a6eeec93d33fb5f))

## 1.8.0 (2025-06-12)

Full Changelog: [v1.7.0...v1.8.0](https://github.com/knocklabs/knock-node/compare/v1.7.0...v1.8.0)

### Features

* **api:** api update ([f48813c](https://github.com/knocklabs/knock-node/commit/f48813ce61f984e01549870970dc681b946ddd59))
* **api:** api update ([e83278e](https://github.com/knocklabs/knock-node/commit/e83278eec9c6216d8c3dccd293c067959bf6bf9d))


### Bug Fixes

* **kno-8729:** use jose instead of crypto so token signing works with vercel edge runtime ([#101](https://github.com/knocklabs/knock-node/issues/101)) ([698ffcc](https://github.com/knocklabs/knock-node/commit/698ffcc70f2ea352f0ef3aaf0b3f8abe6922e4bc))


### Chores

* avoid type error in certain environments ([e6c0c70](https://github.com/knocklabs/knock-node/commit/e6c0c7080a86996246bab9de762305e247ef74bd))

## 1.7.0 (2025-06-06)

Full Changelog: [v1.6.0...v1.7.0](https://github.com/knocklabs/knock-node/compare/v1.6.0...v1.7.0)

### Features

* **api:** api update ([66e8b25](https://github.com/knocklabs/knock-node/commit/66e8b25c66685eb4e854511802b411e961067a9a))

## 1.6.0 (2025-06-04)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/knocklabs/knock-node/compare/v1.5.0...v1.6.0)

### Features

* **api:** api update ([815d827](https://github.com/knocklabs/knock-node/commit/815d8276d76e3c91bf1ecc21909cdbf84e3ba71f))


### Chores

* adjust eslint.config.mjs ignore pattern ([eca74d1](https://github.com/knocklabs/knock-node/commit/eca74d1e3849c4c21ea142aa4627e72e3667d0d4))
* **docs:** use top-level-await in example snippets ([3723e9d](https://github.com/knocklabs/knock-node/commit/3723e9d73ce3e5786b0323297fcd489080923045))
* **internal:** fix readablestream types in node 20 ([0ba897c](https://github.com/knocklabs/knock-node/commit/0ba897c8ce8d58fd18fd622711ba92cf08f44b6b))

## 1.5.0 (2025-05-31)

Full Changelog: [v1.4.1...v1.5.0](https://github.com/knocklabs/knock-node/compare/v1.4.1...v1.5.0)

### Features

* **api:** api update ([433ddfd](https://github.com/knocklabs/knock-node/commit/433ddfdb6175b075fcdeb078c5e01bb1c973340d))


### Chores

* **deps:** bump eslint-plugin-prettier ([696950a](https://github.com/knocklabs/knock-node/commit/696950aee5d13ffca157b2aa32815c826d943e47))
* **internal:** update jest config ([70e7efc](https://github.com/knocklabs/knock-node/commit/70e7efce685e76413eea43a23b4e185a75098a04))

## 1.4.1 (2025-05-29)

Full Changelog: [v1.4.0...v1.4.1](https://github.com/knocklabs/knock-node/compare/v1.4.0...v1.4.1)

### Bug Fixes

* compat with more runtimes ([6a152ad](https://github.com/knocklabs/knock-node/commit/6a152added13cdae70de76cafc088267d07b40b4))

## 1.4.0 (2025-05-28)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/knocklabs/knock-node/compare/v1.3.0...v1.4.0)

### Features

* **api:** api update ([7761590](https://github.com/knocklabs/knock-node/commit/77615902c630f51fbd7ce37fa05ed19f168b24b2))
* **api:** api update ([2f9bc06](https://github.com/knocklabs/knock-node/commit/2f9bc06683ff51f56c39412b3bc80919a948ef20))


### Chores

* **docs:** grammar improvements ([56eb6f8](https://github.com/knocklabs/knock-node/commit/56eb6f8176eb356762bcf5587f09f8532d522916))
* improve publish-npm script --latest tag logic ([c5604a8](https://github.com/knocklabs/knock-node/commit/c5604a89bd05fd6d417405390c0ed6068fb1524f))

## 1.3.0 (2025-05-20)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/knocklabs/knock-node/compare/v1.2.0...v1.3.0)

### Features

* **api:** api update ([4e9dc75](https://github.com/knocklabs/knock-node/commit/4e9dc752e7eb25150fe817fca80936f8cb7df4f9))

## 1.2.0 (2025-05-15)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/knocklabs/knock-node/compare/v1.1.0...v1.2.0)

### Features

* **api:** api update ([6df1491](https://github.com/knocklabs/knock-node/commit/6df1491cf9105dc63fe74f5cb8b15f69e27c19c5))
* **api:** removes duplicate activities section ([1302808](https://github.com/knocklabs/knock-node/commit/130280874e2f34d80957861e69d085e3beb27976))


### Chores

* **package:** remove engines ([6fa64d3](https://github.com/knocklabs/knock-node/commit/6fa64d3fb23cea2855d227c742032ed5dcaf3efd))

## 1.1.0 (2025-05-10)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/knocklabs/knock-node/compare/v1.0.0...v1.1.0)

### Features

* **api:** api update ([df8e460](https://github.com/knocklabs/knock-node/commit/df8e460995bf852f40e333ceb993be46d32673c2))
* **client:** add withOptions helper ([e272a58](https://github.com/knocklabs/knock-node/commit/e272a58d3257d647395279e6e034898c9276d2af))


### Bug Fixes

* **client:** always overwrite when merging headers ([a2bfbc1](https://github.com/knocklabs/knock-node/commit/a2bfbc12e8e9910ab37c2bd34655d72cf27deae9))


### Chores

* **client:** drop support for EOL node versions ([3ed1d02](https://github.com/knocklabs/knock-node/commit/3ed1d02a87a993aa7af03491cea108981da11a71))


### Documentation

* add examples to tsdocs ([dd95831](https://github.com/knocklabs/knock-node/commit/dd95831208d5c08d01ac19a2500e7ae2fa216105))

## 1.0.0 (2025-05-01)

Full Changelog: [v0.6.19...v1.0.0](https://github.com/knocklabs/knock-node/compare/v0.6.19...v1.0.0)

### Features

* **api:** change bearer to apiKey ([b245f2c](https://github.com/knocklabs/knock-node/commit/b245f2cd9b59af73bc983884dcbfafe53eefbe68))
* **api:** manual updates ([79da2ff](https://github.com/knocklabs/knock-node/commit/79da2ffb193a6baec9002f74ff065ee54ae09a4c))
* **api:** manual updates ([81d0a1f](https://github.com/knocklabs/knock-node/commit/81d0a1f338c8a0f07f759b5cc7ea62f9072147ca))
* **api:** manual updates ([4ace741](https://github.com/knocklabs/knock-node/commit/4ace741974e8b5293778fc89b2ae819570ca0794))
* **kno-8545:** add token signer helper ([#90](https://github.com/knocklabs/knock-node/issues/90)) ([b834c94](https://github.com/knocklabs/knock-node/commit/b834c9446e93190cd6d5928ba676079ac47197fb))
* update java publishing ([80416c8](https://github.com/knocklabs/knock-node/commit/80416c802b7c48c7c618530956df08876457e153))


### Chores

* fix version numbers ([cd7ff55](https://github.com/knocklabs/knock-node/commit/cd7ff55a54a961b63913974974a5c12580986e83))
* **internal:** codegen related update ([d832dad](https://github.com/knocklabs/knock-node/commit/d832dadc7c9e278161eafa5f368eca81073d2049))
* sync repo ([136fc77](https://github.com/knocklabs/knock-node/commit/136fc778751681736957e34c29aa5a1e40b323e8))
* update release-please manifest ([b144e09](https://github.com/knocklabs/knock-node/commit/b144e09604b6c8e0d9015352a4563ee415678dd8))
* update SDK settings ([787f6f5](https://github.com/knocklabs/knock-node/commit/787f6f521b05ccb3bba4da4486f9d1c9c3892187))
* update SDK settings ([91594ca](https://github.com/knocklabs/knock-node/commit/91594ca4f6d70d577939eb91f56967a54d62005e))
* update SDK settings ([93bae45](https://github.com/knocklabs/knock-node/commit/93bae450e2de6f00363b79c2d9530bae60a2612e))


### Documentation

* **readme:** fix typo ([3f366b1](https://github.com/knocklabs/knock-node/commit/3f366b116219131179377a6db9ce63b2cfc144da))
