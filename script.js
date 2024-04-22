var user1 = ['Izadora Benedetti', '29092006']
function logar() {
    let usuario = document.getElementById('name').value;
    if (usuario === "") {
        document.getElementById('Usuario span').textContent = 'Nome sem dados.';
        document.getElementById('Usuario span').style.display = 'block';
        document.getElementById('Usuario span').style.color = 'red';
        return; // Não vai funcionar se não colocar o nome.
    } else {
        document.getElementById('Usuario span').textContent = '';
        document.getElementById('Usuario span').style.display = 'none';
    }

    // Averiguar se a senha esta certa.
    let senha = document.getElementById('password').value;
    if (senha.length < 8) {
        document.getElementById('Senha span').textContent = 'Senha Inválida. Digite ao menos 8 caracteres.';
        document.getElementById('Senha span').style.display = 'block';
        document.getElementById('Senha span').style.color = 'red';
        return; // Para se  a senha for muito curta, o usuario colocar um senha com mais de oito digitos
    } else {
        document.getElementById('Senha span').textContent = '';
        document.getElementById('Senha span').style.display = 'nome';
    }

    // Verifica se o nome de usuário e a senha estão certos como esta no var 
    if (usuario === user1[0] && senha === user1[1]) {
        // Ir para a página logado se os dados estiverem certo
    window.location.href = 'prox.html'

    } else {
        // Informar que os dados estão errados para o usuario
        document.getElementById('span-login').textContent = 'Nome de Usuário ou Senha Invalidos.';
        document.getElementById('span-login').style.display = 'block';
        document.getElementById('span-login').style.color = 'red';
        return; 
    }
}