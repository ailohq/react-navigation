# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 5.6.0 (2020-06-17)


### Bug Fixes

* add catch to thenable returned by getInitialState ([d6fa279](https://github.com/react-navigation/react-navigation/commit/d6fa279d9371c7a6403d10d209a2a64147891c63))
* add info about android launchMode in useLinking error ([d94e43c](https://github.com/react-navigation/react-navigation/commit/d94e43c3c8625b209a5c883b8cb560496d07fda7))
* add licenses ([0c159db](https://github.com/react-navigation/react-navigation/commit/0c159db4c9bc85e83b5cfe6819ab2562669a4d8f))
* default linking enabled to true ([c7b8e2e](https://github.com/react-navigation/react-navigation/commit/c7b8e2e9666733143eef156b27f3e4995c36b856))
* don't call getNode if ref is already scrollable ([#162](https://github.com/react-navigation/react-navigation/issues/162)) ([66551f2](https://github.com/react-navigation/react-navigation/commit/66551f29d48e0ab1e707c0be962d4db867226225))
* don't throw when using 'useLinking'. fixes [#8171](https://github.com/react-navigation/react-navigation/issues/8171) ([10eca8b](https://github.com/react-navigation/react-navigation/commit/10eca8b92edbce6dbef8abaf189e4b59a29b3748))
* export types from /native ([af1722d](https://github.com/react-navigation/react-navigation/commit/af1722d1e915f3ec234df202f74c4b4c631472c7))
* fix building typescript definitions. closes [#8216](https://github.com/react-navigation/react-navigation/issues/8216) ([47a1229](https://github.com/react-navigation/react-navigation/commit/47a12298378747edd2d22e54dc1c8677f98c49b4))
* fix path to typescript definitions ([f182315](https://github.com/react-navigation/react-navigation/commit/f18231541b3ea7efd31ef7550011b4684f3dfa43))
* fix peer deps and add git urls ([6b4fc74](https://github.com/react-navigation/react-navigation/commit/6b4fc7459278a3ae2a50fda1f5ba4691bc2b807b))
* fix stack nested in tab always getting reset ([dead4e8](https://github.com/react-navigation/react-navigation/commit/dead4e826a91915dc5902c7faf83a58efec845d8))
* fix types for linking options ([d14f38b](https://github.com/react-navigation/react-navigation/commit/d14f38b80ad569d5828c1919cea426c659173924))
* handle both null and undefined in useScrollToTop ([c951027](https://github.com/react-navigation/react-navigation/commit/c951027ebb7a7cc4102fa5a064af17ae036a6d44))
* handle in-page go back when there's no history ([6bdf6ae](https://github.com/react-navigation/react-navigation/commit/6bdf6ae4ed0f83ac1deb3172d9075a6a2adbbe11)), closes [#7852](https://github.com/react-navigation/react-navigation/issues/7852)
* make getInitialState async on web ([6c6102b](https://github.com/react-navigation/react-navigation/commit/6c6102b4597b5f0e3eada9e802bc5c171ee988d0))
* make sure paths aren't aliased when building definitions ([65a5dac](https://github.com/react-navigation/react-navigation/commit/65a5dac2bf887f4ba081ab15bd4c9870bb15697f)), closes [#265](https://github.com/react-navigation/react-navigation/issues/265)
* render fallback only if linking is enabled. closes [#8161](https://github.com/react-navigation/react-navigation/issues/8161) ([1c075ff](https://github.com/react-navigation/react-navigation/commit/1c075ffb169d233ed0515efea264a5a69b4de52e))
* return a promise-like from getInitialState ([#8210](https://github.com/react-navigation/react-navigation/issues/8210)) ([85ae378](https://github.com/react-navigation/react-navigation/commit/85ae378d8cb1073895b281e13ebccee881d4c062))
* return onPress instead of onClick for useLinkProps ([ae5442e](https://github.com/react-navigation/react-navigation/commit/ae5442ebe812b91fa1f12164f27d1aeed918ab0e))
* return undefined for buildLink if linking is not enabled ([9fd2635](https://github.com/react-navigation/react-navigation/commit/9fd2635756362c8da79656b4d9b101bebaaf7003))
* support scroll to top in navigators nested in tab ([50dea65](https://github.com/react-navigation/react-navigation/commit/50dea653771031f10bf66e9a192c7a192952b92b))


### Features

* add `useLinkBuilder` hook to build links ([2792f43](https://github.com/react-navigation/react-navigation/commit/2792f438fe45428fe193e3708fee7ad61966cbf4))
* add a `ServerContainer` component for SSR ([#8297](https://github.com/react-navigation/react-navigation/issues/8297)) ([68e750d](https://github.com/react-navigation/react-navigation/commit/68e750d5a6d198a2f5bdb86ba631de0a27732943))
* add a PathConfig type ([60cb3c9](https://github.com/react-navigation/react-navigation/commit/60cb3c9ba76d7ef166c9fe8b55f23728975b5b6e))
* add a useLinkProps hook ([f2291d1](https://github.com/react-navigation/react-navigation/commit/f2291d110faa2aa8e10c9133c1c0c28d54af7917))
* add action prop to Link ([942d2be](https://github.com/react-navigation/react-navigation/commit/942d2be2c72720469475ce12ec8df23825994dbf))
* add custom theme support ([#211](https://github.com/react-navigation/react-navigation/issues/211)) ([00fc616](https://github.com/react-navigation/react-navigation/commit/00fc616de0572bade8aa85052cdc8290360b1d7f))
* add error if multiple instances of useLinking are used ([#310](https://github.com/react-navigation/react-navigation/issues/310)) ([4bc0c8f](https://github.com/react-navigation/react-navigation/commit/4bc0c8f66f98c0f8ce4e766648125640d01780c4))
* add hook for deep link support ([35987ae](https://github.com/react-navigation/react-navigation/commit/35987ae3699b44cb47b39ea0c050b4074e77aad6))
* add hook to scroll to top on tab press ([9e1104c](https://github.com/react-navigation/react-navigation/commit/9e1104c31ff4b63099d38f4f2b5b7e33d8e82ce7))
* add Link component as useLinkTo hook for navigating to links ([2573b5b](https://github.com/react-navigation/react-navigation/commit/2573b5beaac1240434e52f3f57bb29da2f541c88))
* add native container ([d26b77f](https://github.com/react-navigation/react-navigation/commit/d26b77f9c977cec122c343d10fd2cd0a59596058))
* add native container with back button integration ([#48](https://github.com/react-navigation/react-navigation/issues/48)) ([b7735af](https://github.com/react-navigation/react-navigation/commit/b7735af7fccccf231cc61eed1ba7fa3e841f770d))
* add nested config in deep linking ([#210](https://github.com/react-navigation/react-navigation/issues/210)) ([8002d51](https://github.com/react-navigation/react-navigation/commit/8002d5179524a7211c37760a4ed45e8c12af4358)), closes [#154](https://github.com/react-navigation/react-navigation/issues/154)
* add permanent drawer type ([#7818](https://github.com/react-navigation/react-navigation/issues/7818)) ([6a5d0a0](https://github.com/react-navigation/react-navigation/commit/6a5d0a035afae60d91aef78401ec8826295746fe))
* add ref to get current options in `ServerContainer` ([#8333](https://github.com/react-navigation/react-navigation/issues/8333)) ([0b1a718](https://github.com/react-navigation/react-navigation/commit/0b1a718756e208d84b20e45ca56004332308ad54))
* handle animated component wrappers in `useScrollToTop` ([#81](https://github.com/react-navigation/react-navigation/issues/81)) ([cdbf1e9](https://github.com/react-navigation/react-navigation/commit/cdbf1e97f9648230ba1239b99791193e08ba0989))
* handle more methods in useScrollToTop ([f9e8c7e](https://github.com/react-navigation/react-navigation/commit/f9e8c7e80f6f327ffe62cdbd4bc1af8ed3420d5c))
* initial version of native stack ([#102](https://github.com/react-navigation/react-navigation/issues/102)) ([ba3f718](https://github.com/react-navigation/react-navigation/commit/ba3f718ab3868ddd5754b22945a867fdf7e93b7f))
* initialState should take priority over deep link ([039017b](https://github.com/react-navigation/react-navigation/commit/039017bc2af69120d2d10e8f2c8a62919c37eb65))
* integrate with history API on web ([5a3f835](https://github.com/react-navigation/react-navigation/commit/5a3f8356b05bff7ed20893a5db6804612da3e568))
* let the navigator specify if default can be prevented ([da67e13](https://github.com/react-navigation/react-navigation/commit/da67e134d2157201360427d3c10da24f24cae7aa))
* make deep link handling more flexible ([849d952](https://github.com/react-navigation/react-navigation/commit/849d952703b500a9781fd201e4525e712cd3338f))
* make example run as bare react-native project as well ([#85](https://github.com/react-navigation/react-navigation/issues/85)) ([d16c20c](https://github.com/react-navigation/react-navigation/commit/d16c20cd390000cd960ad753001386142eb9e281))





## [5.5.1](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.5.0...@react-navigation/native@5.5.1) (2020-06-06)

**Note:** Version bump only for package @react-navigation/native





# [5.5.0](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.4.3...@react-navigation/native@5.5.0) (2020-05-27)


### Bug Fixes

* export types from /native ([af1722d](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/af1722d1e915f3ec234df202f74c4b4c631472c7))


### Features

* add a `ServerContainer` component for SSR ([#8297](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/8297)) ([68e750d](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/68e750d5a6d198a2f5bdb86ba631de0a27732943))
* add ref to get current options in `ServerContainer` ([#8333](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/8333)) ([0b1a718](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/0b1a718756e208d84b20e45ca56004332308ad54))





## [5.4.3](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.4.2...@react-navigation/native@5.4.3) (2020-05-23)

**Note:** Version bump only for package @react-navigation/native





## [5.4.2](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.4.1...@react-navigation/native@5.4.2) (2020-05-20)

**Note:** Version bump only for package @react-navigation/native





## [5.4.1](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.4.0...@react-navigation/native@5.4.1) (2020-05-20)

**Note:** Version bump only for package @react-navigation/native





# [5.4.0](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.3.2...@react-navigation/native@5.4.0) (2020-05-16)


### Bug Fixes

* fix types for linking options ([d14f38b](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/d14f38b80ad569d5828c1919cea426c659173924))


### Features

* add a PathConfig type ([60cb3c9](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/60cb3c9ba76d7ef166c9fe8b55f23728975b5b6e))





## [5.3.2](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.3.1...@react-navigation/native@5.3.2) (2020-05-14)

**Note:** Version bump only for package @react-navigation/native





## [5.3.1](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.3.0...@react-navigation/native@5.3.1) (2020-05-14)

**Note:** Version bump only for package @react-navigation/native





# [5.3.0](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.2.6...@react-navigation/native@5.3.0) (2020-05-10)


### Features

* initialState should take priority over deep link ([039017b](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/039017bc2af69120d2d10e8f2c8a62919c37eb65))





## [5.2.6](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.2.5...@react-navigation/native@5.2.6) (2020-05-08)


### Bug Fixes

* fix building typescript definitions. closes [#8216](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/8216) ([47a1229](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/47a12298378747edd2d22e54dc1c8677f98c49b4))





## [5.2.5](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.2.4...@react-navigation/native@5.2.5) (2020-05-08)


### Bug Fixes

* return a promise-like from getInitialState ([#8210](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/8210)) ([85ae378](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/85ae378d8cb1073895b281e13ebccee881d4c062))





## [5.2.4](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.2.3...@react-navigation/native@5.2.4) (2020-05-05)


### Bug Fixes

* return undefined for buildLink if linking is not enabled ([9fd2635](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/9fd2635756362c8da79656b4d9b101bebaaf7003))





## [5.2.3](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.2.2...@react-navigation/native@5.2.3) (2020-05-01)


### Bug Fixes

* default linking enabled to true ([c7b8e2e](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/c7b8e2e9666733143eef156b27f3e4995c36b856))





## [5.2.2](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.2.1...@react-navigation/native@5.2.2) (2020-05-01)


### Bug Fixes

* don't throw when using 'useLinking'. fixes [#8171](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/8171) ([10eca8b](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/10eca8b92edbce6dbef8abaf189e4b59a29b3748))





## [5.2.1](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.2.0...@react-navigation/native@5.2.1) (2020-04-30)


### Bug Fixes

* render fallback only if linking is enabled. closes [#8161](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/8161) ([1c075ff](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/1c075ffb169d233ed0515efea264a5a69b4de52e))





# [5.2.0](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.1.7...@react-navigation/native@5.2.0) (2020-04-30)


### Bug Fixes

* add catch to thenable returned by getInitialState ([d6fa279](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/d6fa279d9371c7a6403d10d209a2a64147891c63))
* return onPress instead of onClick for useLinkProps ([ae5442e](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/ae5442ebe812b91fa1f12164f27d1aeed918ab0e))


### Features

* add `useLinkBuilder` hook to build links ([2792f43](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/2792f438fe45428fe193e3708fee7ad61966cbf4))
* add a useLinkProps hook ([f2291d1](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/f2291d110faa2aa8e10c9133c1c0c28d54af7917))
* add action prop to Link ([942d2be](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/942d2be2c72720469475ce12ec8df23825994dbf))
* add Link component as useLinkTo hook for navigating to links ([2573b5b](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/2573b5beaac1240434e52f3f57bb29da2f541c88))





## [5.1.7](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.1.6...@react-navigation/native@5.1.7) (2020-04-27)

**Note:** Version bump only for package @react-navigation/native





## [5.1.6](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.1.5...@react-navigation/native@5.1.6) (2020-04-17)


### Bug Fixes

* handle in-page go back when there's no history ([6bdf6ae](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/6bdf6ae4ed0f83ac1deb3172d9075a6a2adbbe11)), closes [#7852](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/7852)





## [5.1.5](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.1.4...@react-navigation/native@5.1.5) (2020-04-08)

**Note:** Version bump only for package @react-navigation/native





## [5.1.4](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.1.3...@react-navigation/native@5.1.4) (2020-03-30)

**Note:** Version bump only for package @react-navigation/native





## [5.1.3](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.1.2...@react-navigation/native@5.1.3) (2020-03-23)


### Bug Fixes

* add info about android launchMode in useLinking error ([d94e43c](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/d94e43c3c8625b209a5c883b8cb560496d07fda7))





## [5.1.2](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.1.1...@react-navigation/native@5.1.2) (2020-03-22)

**Note:** Version bump only for package @react-navigation/native





## [5.1.1](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.1.0...@react-navigation/native@5.1.1) (2020-03-19)

**Note:** Version bump only for package @react-navigation/native





# [5.1.0](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.10...@react-navigation/native@5.1.0) (2020-03-17)


### Features

* add permanent drawer type ([#7818](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/7818)) ([6a5d0a0](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/6a5d0a035afae60d91aef78401ec8826295746fe))





## [5.0.10](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.9...@react-navigation/native@5.0.10) (2020-03-16)

**Note:** Version bump only for package @react-navigation/native





## [5.0.9](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.8...@react-navigation/native@5.0.9) (2020-03-03)

**Note:** Version bump only for package @react-navigation/native





## [5.0.8](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.7...@react-navigation/native@5.0.8) (2020-02-26)

**Note:** Version bump only for package @react-navigation/native





## [5.0.7](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.6...@react-navigation/native@5.0.7) (2020-02-21)

**Note:** Version bump only for package @react-navigation/native





## [5.0.6](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.5...@react-navigation/native@5.0.6) (2020-02-19)

**Note:** Version bump only for package @react-navigation/native





## [5.0.5](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.4...@react-navigation/native@5.0.5) (2020-02-14)

**Note:** Version bump only for package @react-navigation/native





## [5.0.4](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.3...@react-navigation/native@5.0.4) (2020-02-14)

**Note:** Version bump only for package @react-navigation/native





## [5.0.3](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.2...@react-navigation/native@5.0.3) (2020-02-12)

**Note:** Version bump only for package @react-navigation/native





## [5.0.2](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.1...@react-navigation/native@5.0.2) (2020-02-11)


### Bug Fixes

* make getInitialState async on web ([6c6102b](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/6c6102b4597b5f0e3eada9e802bc5c171ee988d0))





## [5.0.1](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.35...@react-navigation/native@5.0.1) (2020-02-10)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.35](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.34...@react-navigation/native@5.0.0-alpha.35) (2020-02-04)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.34](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.33...@react-navigation/native@5.0.0-alpha.34) (2020-02-04)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.33](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.32...@react-navigation/native@5.0.0-alpha.33) (2020-02-03)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.32](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.29...@react-navigation/native@5.0.0-alpha.32) (2020-02-02)


### Bug Fixes

* add licenses ([0c159db](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/0c159db4c9bc85e83b5cfe6819ab2562669a4d8f))


### Features

* add error if multiple instances of useLinking are used ([#310](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/310)) ([4bc0c8f](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/4bc0c8f66f98c0f8ce4e766648125640d01780c4))
* integrate with history API on web ([5a3f835](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/5a3f8356b05bff7ed20893a5db6804612da3e568))





# [5.0.0-alpha.30](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.29...@react-navigation/native@5.0.0-alpha.30) (2020-02-02)


### Bug Fixes

* add licenses ([0c159db](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/0c159db4c9bc85e83b5cfe6819ab2562669a4d8f))


### Features

* add error if multiple instances of useLinking are used ([#310](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/310)) ([4bc0c8f](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/4bc0c8f66f98c0f8ce4e766648125640d01780c4))
* integrate with history API on web ([5a3f835](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/5a3f8356b05bff7ed20893a5db6804612da3e568))





# [5.0.0-alpha.29](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.28...@react-navigation/native@5.0.0-alpha.29) (2020-01-24)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.28](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.27...@react-navigation/native@5.0.0-alpha.28) (2020-01-23)


### Features

* let the navigator specify if default can be prevented ([da67e13](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/da67e134d2157201360427d3c10da24f24cae7aa))





# [5.0.0-alpha.27](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.26...@react-navigation/native@5.0.0-alpha.27) (2020-01-14)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.26](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.25...@react-navigation/native@5.0.0-alpha.26) (2020-01-13)


### Bug Fixes

* make sure paths aren't aliased when building definitions ([65a5dac](https://github.com/react-navigation/react-navigation/tree/main/packages/native/commit/65a5dac2bf887f4ba081ab15bd4c9870bb15697f)), closes [#265](https://github.com/react-navigation/react-navigation/tree/main/packages/native/issues/265)





# [5.0.0-alpha.25](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.24...@react-navigation/native@5.0.0-alpha.25) (2020-01-13)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.24](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.22...@react-navigation/native@5.0.0-alpha.24) (2020-01-09)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.23](https://github.com/react-navigation/react-navigation/tree/main/packages/native/compare/@react-navigation/native@5.0.0-alpha.22...@react-navigation/native@5.0.0-alpha.23) (2020-01-09)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.22](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.21...@react-navigation/native@5.0.0-alpha.22) (2020-01-01)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.21](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.20...@react-navigation/native@5.0.0-alpha.21) (2019-12-19)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.20](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.19...@react-navigation/native@5.0.0-alpha.20) (2019-12-16)


### Features

* add nested config in deep linking ([#210](https://github.com/react-navigation/navigation-ex/issues/210)) ([8002d51](https://github.com/react-navigation/navigation-ex/commit/8002d5179524a7211c37760a4ed45e8c12af4358)), closes [#154](https://github.com/react-navigation/navigation-ex/issues/154)





# [5.0.0-alpha.19](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.18...@react-navigation/native@5.0.0-alpha.19) (2019-12-14)


### Features

* add custom theme support ([#211](https://github.com/react-navigation/navigation-ex/issues/211)) ([00fc616](https://github.com/react-navigation/navigation-ex/commit/00fc616de0572bade8aa85052cdc8290360b1d7f))





# [5.0.0-alpha.18](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.17...@react-navigation/native@5.0.0-alpha.18) (2019-12-11)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.17](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.16...@react-navigation/native@5.0.0-alpha.17) (2019-12-10)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.16](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.15...@react-navigation/native@5.0.0-alpha.16) (2019-11-17)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.15](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.14...@react-navigation/native@5.0.0-alpha.15) (2019-11-08)


### Bug Fixes

* don't call getNode if ref is already scrollable ([#162](https://github.com/react-navigation/navigation-ex/issues/162)) ([66551f2](https://github.com/react-navigation/navigation-ex/commit/66551f2))





# [5.0.0-alpha.14](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.13...@react-navigation/native@5.0.0-alpha.14) (2019-10-30)


### Bug Fixes

* support scroll to top in navigators nested in tab ([50dea65](https://github.com/react-navigation/navigation-ex/commit/50dea65))





# [5.0.0-alpha.13](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.12...@react-navigation/native@5.0.0-alpha.13) (2019-10-22)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.12](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.11...@react-navigation/native@5.0.0-alpha.12) (2019-10-15)


### Features

* initial version of native stack ([#102](https://github.com/react-navigation/navigation-ex/issues/102)) ([ba3f718](https://github.com/react-navigation/navigation-ex/commit/ba3f718))





# [5.0.0-alpha.11](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.10...@react-navigation/native@5.0.0-alpha.11) (2019-10-06)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.10](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.9...@react-navigation/native@5.0.0-alpha.10) (2019-10-03)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.9](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.8...@react-navigation/native@5.0.0-alpha.9) (2019-10-03)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.8](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.7...@react-navigation/native@5.0.0-alpha.8) (2019-09-16)


### Features

* make deep link handling more flexible ([849d952](https://github.com/react-navigation/navigation-ex/commit/849d952))
* make example run as bare react-native project as well ([#85](https://github.com/react-navigation/navigation-ex/issues/85)) ([d16c20c](https://github.com/react-navigation/navigation-ex/commit/d16c20c))





# [5.0.0-alpha.7](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.5...@react-navigation/native@5.0.0-alpha.7) (2019-08-31)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.6](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.5...@react-navigation/native@5.0.0-alpha.6) (2019-08-31)

**Note:** Version bump only for package @react-navigation/native





# [5.0.0-alpha.5](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.4...@react-navigation/native@5.0.0-alpha.5) (2019-08-29)


### Bug Fixes

* handle both null and undefined in useScrollToTop ([c951027](https://github.com/react-navigation/navigation-ex/commit/c951027))


### Features

* handle animated component wrappers in `useScrollToTop` ([#81](https://github.com/react-navigation/navigation-ex/issues/81)) ([cdbf1e9](https://github.com/react-navigation/navigation-ex/commit/cdbf1e9))
* handle more methods in useScrollToTop ([f9e8c7e](https://github.com/react-navigation/navigation-ex/commit/f9e8c7e))





# [5.0.0-alpha.4](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.3...@react-navigation/native@5.0.0-alpha.4) (2019-08-28)


### Bug Fixes

* fix stack nested in tab always getting reset ([dead4e8](https://github.com/react-navigation/navigation-ex/commit/dead4e8))





# [5.0.0-alpha.3](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.2...@react-navigation/native@5.0.0-alpha.3) (2019-08-27)


### Features

* add hook to scroll to top on tab press ([9e1104c](https://github.com/react-navigation/navigation-ex/commit/9e1104c))
* add native container ([d26b77f](https://github.com/react-navigation/navigation-ex/commit/d26b77f))





# [5.0.0-alpha.2](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/native@5.0.0-alpha.1...@react-navigation/native@5.0.0-alpha.2) (2019-08-22)


### Bug Fixes

* fix path to typescript definitions ([f182315](https://github.com/react-navigation/navigation-ex/commit/f182315))





# 5.0.0-alpha.1 (2019-08-21)


### Bug Fixes

* fix peer deps and add git urls ([6b4fc74](https://github.com/react-navigation/navigation-ex/commit/6b4fc74))


### Features

* add hook for deep link support ([35987ae](https://github.com/react-navigation/navigation-ex/commit/35987ae))
* add native container with back button integration ([#48](https://github.com/react-navigation/navigation-ex/issues/48)) ([b7735af](https://github.com/react-navigation/navigation-ex/commit/b7735af))
