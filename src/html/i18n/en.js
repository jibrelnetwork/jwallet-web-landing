module.exports = {
  language: {
    code: 'en',
    title: 'English',
  },
  meta: {
    title: 'Jwallet by the Jibrel Network',
    description: 'The Jwallet is the first institutional-grade Ethereum wallet. It works across desktop and mobile devices, and private keys never leave your device. The Jwallet comes preconfigured to work with your favorite tokens.',
    name: 'Jwallet by the Jibrel Network',
  },
  header: {
    items: [{
      href: '#benefits', // not translate
      title: 'Benefits',
      class: 'scroll', // not translate
    }, {
      href: '#features', // not translate
      title: 'Features',
      class: 'scroll', // not translate
    }, {
      href: '#feature-5', // not translate
      title: 'Apps',
      class: 'scroll', // not translate
    }],
    languages: [{
      href: '/',
      title: 'English',
    }, {
      href: '/ko.html',
      title: 'Korean',
    }],
    jWalletLink: '/jwallet',
    jWalletButtonTitle: 'Try Jwallet',
    menuButtonTitle: 'Menu',
  },
  start: {
    title: [
      'A better way to manage',
      'your tokens',
    ],
    subtitle: 'An institutional-grade wallet to manage your digital assets',
  },
  benefits: {
    items: [{
      title: 'Anywhere, anytime',
      description: 'The Jwallet is mobile friendly, so you can access your tokens everywhere you go. The web-version works on desktop and mobile browsers.',
    }, {
      title: 'The power of privacy',
      description: 'All user data, including imported or generated private keys are stored locally, meaning your private keys, remain just that… private.',
    }, {
      title: 'Made by geeks',
      description: 'We’ve done the complicated stuff so you won’t have to. the Jwallet introduces new features to Ethereum, like a standard URI scheme and QR code generator.',
    }],
  },
  features: {
    items: [{
      title: 'Stocked and Loaded',
      subtitle: 'The Jwallet is preconfigured to be compatible with the most popular ERC-20 tokens, straight out of the box, no configuration necessary',
      direction: 'left',
    }, {
      title: 'Bring Your Own Token (BYOT)',
      subtitle: 'Want to add a token that isn\'t listed or public yet? You can easily add your own, using the import token feature',
      direction: 'right',
    }, {
      title: 'Private Keys Always Stay Private',
      subtitle: 'With the Jwallet, all sensitive data never leaves your device. Your private keys are never shared with anyone, including us!',
      direction: 'left',
    }, {
      title: 'Banking-grade Tracking Tools',
      subtitle: 'See your transaction history, total value summaries and other traditional banking features you\'ve gotten used to',
      direction: 'right',
    }, {
      title: 'Multi-device support',
      subtitle: 'The web version of the Jwallet works across devices, with native iOS and Android versions',
      direction: 'left',
    }],
  },
  apps: {
    title: 'The Next Generation of Token Wallets has Arrived',
    subtitle: 'Manage all your digital assets easily and securely',
    items: [{
      title: 'Open Web App',
      href: 'https://app.jwallet.network/',
      class: 'web button', // not translate
      id: 'try-jwallet-web-app', // not translate
    }],
    android: {
      title: 'Get it on Google Play',
      imgsrc: 'https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png',
    },
    ios: {
      title: 'Download on the App Store',
      imgsrc: 'ios-en.svg',
    },
  },
  footer: {
    links: [{
      href: 'https://twitter.com/JibrelNetwork',
      type: 'twitter',
      title: 'Twitter',
    }, {
      href: 'https://www.reddit.com/r/JibrelNetwork',
      type: 'reddit',
      title: 'Reddit',
    }, {
      href: 'https://bitcointalk.org/index.php?topic=2057487.0',
      type: 'bitcointalk',
      title: 'Bitcointalk',
    }, {
      href: 'https://open.kakao.com/o/ghfXgFE',
      type: 'kakaotalk',
      title: 'Kakaotalk',
    }, {
      href: 'https://medium.com/@jibrelnetwork',
      type: 'medium',
      title: 'Medium',
    }, {
      href: 'https://www.youtube.com/channel/UChRHMyaETb7M9OwfQQodh7g',
      type: 'youtube',
      title: 'Youtube',
    }, {
      href: 'https://t.me/jibrel_network',
      type: 'telegram',
      title: 'Telegram',
    }],
    copy: [
      '© 2019 Jibrel Network. All Rights Reserved.',
      'Baarerstrasse 10, 6302 Zug, Switzerland',
    ],
    attributions: [
      'Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.',
      'IOS is a trademark or registered trademark of Cisco in the U.S. and other countries and is used under license.',
      'Google Play, the Google Play logo and Android are trademarks of Google LLC.'
    ],
  },
  timestamp: Date.now(),
}
