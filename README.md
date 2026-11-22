# 🔐 Fluxo de Autenticação: Login e Cadastro

Fluxo de autenticação com **tela de login** e **tela de cadastro**, feito com HTML, Bootstrap 5 e JavaScript, com validação em tempo real usando Just-Validate. O projeto faz parte de um treinamento de **autenticação com JavaScript**, **lógica** e **arquitetura**, com foco em interface limpa, acessibilidade e boa experiência do usuário.

## ✨ Funcionalidades

- **Login** com e-mail e senha
- **Cadastro** de novos usuários
- Navegação entre as telas ("Não tem conta? Criar conta")
- Layout responsivo e centralizado (mobile, tablet e desktop)
- Campos com `form-floating` do Bootstrap 5
- Ícones com Bootstrap Icons
- Validação em tempo real com Just-Validate
- Mensagens de erro exibidas abaixo de cada campo
- Alerta geral para erros de autenticação

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | Versão 5 | Estrutura das páginas |
| [Bootstrap](https://getbootstrap.com/) | 5.3.9 | Layout, componentes e responsividade |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.11.3 | Ícones dos campos |
| [Just-Validate](https://just-validate.dev/) | latest | Validação declarativa dos formulários |
| JavaScript | ES6+ | Lógica de validação e autenticação |

Todas as bibliotecas são carregadas por CDN, então não é preciso instalar nada.

## 📁 Estrutura do projeto

> Ajuste os nomes conforme os arquivos do seu projeto.

```text
.
├── index.html          # Tela de login
├── js/
│   └── interaction.js  # Interação de usuário
│   └── validation.js   # Regras de validação e lógica de autenticação
├── styles/
│   └── style.css   # Regras de validação e lógica de autenticação
└── README.md
```

## 🧱 Arquitetura

O projeto segue o princípio de **separação de responsabilidades**:

- **HTML**: estrutura e semântica de cada tela.
- **Bootstrap**: toda a parte visual, sem CSS customizado.
- **JavaScript**: regras de validação e lógica de autenticação, isoladas do HTML.

### Padrão dos erros com `data-erro-for`

Cada campo possui um container de erro identificado pelo atributo `data-erro-for`, que recebe o `id` do input correspondente:

```html
<div class="text-danger small mt-1" data-erro-for="email"></div>
```

No campo com ícone, esse container fica **fora do `.input-group`**. Dentro dele, a mensagem quebraria o layout do grupo; do lado de fora, ela aparece corretamente abaixo do campo. O mesmo padrão é usado em login e cadastro.

## 🔑 Fluxo de autenticação

```text
Cadastro ──► valida dados ──► cria a conta ──► Login
                                                 │
                         valida e-mail e senha ◄─┘
                                  │
                       sucesso ──► acesso liberado
                       erro    ──► alerta na tela
```

### Tela de login

| Elemento | ID / atributo | Função |
|---|---|---|
| Formulário | `#form-login` | Alvo da validação (`novalidate` desativa a validação nativa) |
| Campo de e-mail | `#email` | Entrada do usuário |
| Campo de senha | `#senha` | Entrada do usuário |
| Botão | `#btn-entrar` | Envio do formulário |
| Alerta geral | `#alerta` | Mensagens de erro de autenticação |
| Containers de erro | `[data-erro-for]` | Mensagens de cada campo |

### Tela de cadastro

> Ajuste os campos conforme o seu formulário.

Campos previstos: nome, e-mail, senha e confirmação de senha.

## ✅ Regras de validação

> Ajuste as tabelas conforme as regras definidas no seu `js/validation.js`.

**Login**

| Campo | Regras |
|---|---|
| E-mail | Obrigatório e com formato válido |
| Senha | Obrigatória |

**Cadastro**

| Campo | Regras |
|---|---|
| Nome | Obrigatório |
| E-mail | Obrigatório e com formato válido |
| Senha | Obrigatória e com tamanho mínimo |
| Confirmar senha | Obrigatória e igual à senha |

## 🚀 Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/Tiago-abraao/User-Authentication-Form-Validation
   cd User-Authentication-Form-Validation
   ```

2. Abra o `index.html` no navegador.

   Ou, se preferir um servidor local (por exemplo, a extensão **Live Server** do VS Code):

   ```bash
   npx serve .
   ```

É necessário ter conexão com a internet para carregar as bibliotecas pelos CDNs.

## ♿ Acessibilidade

- `lang="pt-br"` definido no documento
- `label` associado a cada campo
- `autocomplete` configurado (`username`, `current-password` e `new-password` no cadastro)
- Ícones decorativos com `aria-hidden="true"`
- Alerta com `role="alert"`

## 🗺️ Próximos passos

- [ ] Integrar login e cadastro com uma API
- [ ] Implementar recuperação de senha
- [ ] Proteger rotas para usuários autenticados
- [ ] Evoluir o projeto com React ou Angular
- [ ] Persistir os usuários em um banco de dados
