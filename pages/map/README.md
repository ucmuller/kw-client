#まず、vue2-google-mapsをインストール
yarn add vue2-google-maps

[参照](https://qiita.com/TinyKitten/items/090e6321b548de435eab)


#friendly-errors 01:38:28 * core-js/modules/es7.promise.finally in ./.nuxt/client.js
#friendly-errors 01:38:28 * core-js/modules/es7.symbol.async-iterator in ./.nuxt/client.js, ./.nuxt/components/nuxt-link.client.js
#friendly-errors 01:38:28 * core-js/modules/web.dom.iterable in ./.nuxt/client.js, ./.nuxt/components/nuxt-link.client.js
#もろもろ上記みたいなエラー出るので、
yarn add core-js@latest2.6.2
でバージョン選べるから
2.6.5を選ぶ。

[参照](https://www.suzu6.net/posts/127-nuxt-es6-error/)
