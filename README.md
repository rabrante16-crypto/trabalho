# Site — Rodrigo Abrante Garcia (Consultor Licenciado iGreen Energy)

Site de página única (one-page), em HTML/CSS/JS puro, para divulgação do trabalho
de Rodrigo Abrante Garcia como consultor independente licenciado da iGreen Energy.
O layout segue a estrutura padrão usada por sites de licenciados iGreen: hero,
mecanismo da Conexão Green, produtos, aplicativo, vantagens, contato e rodapé,
tudo em uma rolagem contínua com navegação por âncoras.

## Estrutura

```
index.html      Página única com todas as seções (navegação por âncoras: #sobre,
                 #como-funciona, #planos, #aplicativo, #contato)
css/style.css    Estilos (cores em variáveis no topo do arquivo)
js/main.js       Menu mobile, botões de WhatsApp e formulário de contato
assets/          Logo oficial (logo-igreen.png) e outras imagens
```

## Como abrir localmente

Basta abrir `index.html` no navegador, ou rodar um servidor local simples:

```
python3 -m http.server 8080
```

e acessar `http://localhost:8080`.

## Personalização pendente

- **Logo**: `assets/logo-igreen.png` foi extraído das páginas do manual de marca
  em PDF (recorte com fundo transparente). Se você conseguir o arquivo vetorial
  ou PNG oficial em alta resolução, substitua esse arquivo pelo original.
- **Cores oficiais**: definidas em `css/style.css` (bloco `:root`) a partir do
  manual de marca — verde fluorescente `#18ff00`, verde médio `#28a828`, verde
  escuro `#154715`. A seção de contato e o bloco de recrutamento usam laranja
  (`#ee6c0c`), seguindo o padrão visual do modelo de referência.
- **Links de cadastro**: os botões atuais direcionam para o WhatsApp
  ((21) 98424-9375). Quando os links oficiais de cadastro por plano estiverem
  definidos, é possível trocar os botões da seção `#planos` para apontar
  diretamente para cada link, em vez do fluxo manual via WhatsApp.
- **Número de WhatsApp**: definido em `js/main.js` na constante `WHATSAPP_NUMBER`.

## Aviso legal

O rodapé contém um aviso deixando claro que este é um site pessoal de
divulgação de um consultor independente licenciado, e não o site institucional
oficial da iGreen Energy. Recomenda-se manter esse aviso.
