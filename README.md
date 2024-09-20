# Validação de Formulário
## Aula 2 - 06/09/2024

Formulário composto por:

* Nome: Campo de preenchimento obrigatório. O usuário deve informar o nome para que o cadastro seja validado corretamente.

* E-mail: Campo de preenchimento obrigatório. O e-mail informado será validado para garantir que esteja em um formato adequado (ex: nome@dominio.com).

* Senha: Campo de preenchimento obrigatório. A senha deve conter no mínimo 8 caracteres para garantir maior segurança no cadastro.

* Confirmação de Senha: Campo de preenchimento obrigatório. A senha informada neste campo deve coincidir exatamente com a senha digitada no campo anterior. Caso contrário, uma mensagem de erro será exibida, solicitando a correção.

# Validação de Email
```
// Função para validar o formato de e-mail
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
```
A função isValidEmail utiliza uma expressão regular para verificar se o formato do e-mail fornecido é válido. Ela retorna true se o e-mail for válido e false caso contrário. A expressão regular utilizada valida que:

* O e-mail não contém espaços.
* Há uma parte antes do símbolo @ (geralmente o nome do usuário).
* Após o @, há um domínio, que deve ter um nome e um sufixo (ex: .com, .org, etc.).

Por que essa validação é importante? <br>
Garantir que o e-mail está no formato correto ajuda a evitar erros na submissão de formulários e assegura que o usuário esteja inserindo dados adequados para o propósito pretendido