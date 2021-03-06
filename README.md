[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Project details
## Tamanho de Fontes
- as fontes do elemento pai estão medidas em %.
- portanto foram usados as seguintes medidas.

```scss
html {
  font-size: 87.5%; // 14px

  @media only screen and (min-width: 768px) {
    font-size: 75%; // 12px
  }

  @media only screen and (min-width: 1080px) {
    font-size: 62.5%; // 10px
  }
}
```

- então `1rem` é equivalente a esses tamanhos em diferentes dimensões de telas.

## Padrões de commit
- git add .
- yarn commit
  - Select the type of change that you're committing:
    - informar o tipo commit está realizando.
  - What is the scope of this change (e.g. component or file name): (press enter to skip)
    - Informar o escopo que está trabalhando, pode ser um componente, tela ou tarefa, caso não seja necessário, apenas dar enter.
  - Write a short, imperative tense description of the change (max 86 chars):
    - Fazer uma breve descrição da atividade.
  - Provide a longer description of the change: (press enter to skip)
    - Poser ser usado para realizar uma longa descrição, caso não seja necessário, apenas dar enter.
  - Are there any breaking changes? (y/N)
    - Digitar `y` caso as alterações afetem comportamentos de outros componentes ou algo do tipo, caso não seja necessário, apenas digitar `N`.
  - Does this change affect any open issues? (y/N)
    - Digitar `y` caso esse commit finalize alguma issue que esteja aberta, caso não seja necessário, apenas digitar `N`.

- git push origin <your-branch>
