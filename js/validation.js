const validator = new JustValidate('#form-login', {
    errorFieldCssClass: 'is-invalid',
    successFieldCssClass: 'is-valid',
    validateOnBlur: true,
    validateOnInput: true,
});

validator.addField(
    '#email',
    [
        { rule: 'required', errorMessage: 'O campo de email não pode ser vazio.' },
        { rule: 'email', errorMessage: 'Digite um email válido' },
    ],
    { errorsContainer: '[data-erro-for="email"]' }
)

    .addField(
        '#senha',
        [
            { rule: 'required', errorMessage: 'O campo de senha não pode ser vazio.' },
            { rule: 'minLength', value: 6, errorMessage: 'A senha deve ter pelo menos 6 caracteres.' }
        ],
       { errorsContainer: '[data-erro-for="senha"]' }
    );