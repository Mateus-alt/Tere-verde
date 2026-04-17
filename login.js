const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const botaoLogin = document.getElementById('botaoLogin');

function mostrarMensagem(texto) {
    let mensagem = document.getElementById('loginMessage');
    if (!mensagem) {
        mensagem = document.createElement('div');
        mensagem.id = 'loginMessage';
        mensagem.style.color = '#a00';
        mensagem.style.marginTop = '12px';
        mensagem.style.fontWeight = '700';
        mensagem.style.textAlign = 'center';
        mensagem.style.fontSize = '14px';
        mensagem.style.backgroundColor = '#f8d7da';
        mensagem.style.padding = '10px';
        mensagem.style.border = '1px solid #f5c2c7';
        mensagem.style.borderRadius = '8px';
        // Insere a mensagem logo após o botão
        botaoLogin.parentNode.insertBefore(mensagem, botaoLogin.nextSibling);
    }
    mensagem.textContent = texto;
}

const adminUsuario = 'admin';
const adminSenha = 'admin';

botaoLogin.addEventListener('click', function (event) {
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!usuario || !senha) {
        event.preventDefault();
        mostrarMensagem('Usuário ou senha não informados');
        return;
    }

    if (usuario !== adminUsuario || senha !== adminSenha) {
        event.preventDefault();
        mostrarMensagem('Usuário ou senha inválidos');
        return;
    }

    const mensagem = document.getElementById('loginMessage');
    if (mensagem) {
        mensagem.remove();
    }

    alert('🔓 Login bem-sucedido! Redirecionando para o painel de eventos...');
    window.location.href = "admin_eventos.html"; 
});
