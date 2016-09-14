# Dia 1

- Instalação do NPM
  - https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04
- `npm init` partindo de uma pasta vazia
- `npm install webpack webpack-dev-server --save-dev`
- Criar `webpack.config.js` com apenas duas chaves: `entry` e `output` (esse arquivo é .js e precisa adicionar `module.exports = {}`) ([aqui](https://github.com/halan/treinamento-locaweb/blob/master/webpack.config.js#L2-L9))
  - Na chave entry: ` app: "./src/index.js"`
  - Na chave output: ` path: "./dist/"` e `filename: "[name].js"`
- Adiciona HTML simples em `./dist/index.html` chamando `app.js` ([aqui](https://github.com/halan/treinamento-locaweb/blob/master/dist/index.html))
- Adiciona scripts no package.json, `start` e `build` ([aqui](https://github.com/halan/treinamento-locaweb/blob/master/package.json#L7-L8))
  - O start com o comando: `webpack-dev-server -d --hot --inline --content-base "./dist/"`
  - O build com o comando: `webpack --optimize-minimize`
- `npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react`
- Adiciona arquivo de configuração do babel na pasta raiz com o nome `.babelrc` (não é js, é json puro)
  - Com o conteúdo: `{ presets: ['es2015', 'stage-0', 'react'] }` ([aqui](https://github.com/halan/treinamento-locaweb/blob/master/.babelrc))
- Adicionar chave `module` na configuração do webpack ([aqui](https://github.com/halan/treinamento-locaweb/blob/master/webpack.config.js#L11-L15))
  - Esta chave contem uma chave `loaders` com o seguinte conteúdo: `[ { test: /.js$/, loader: 'babel' } ]`

## Errata

O `-d` no `webpack-dev-server` não é de `development` e sim de `debug`. Ele é um atalho para outros parâmetros, vide o help do webpack abaixo:
```
  -d                                    shortcut for --debug --devtool sourcemap --output-pathinfo
  -p                                    shortcut for --optimize-minimize  
```

O `--optimize-minimize` que foi sugerido pode ser trocado pelo seu atalho: `-p`. Muito mais fácil de decorar pra usar.
