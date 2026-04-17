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
        mostrarMensagem('Usuario ou senha não informado');
        return;
    }

    if (usuario !== adminUsuario || senha !== adminSenha) {
        event.preventDefault();
        mostrarMensagem('Usuario ou senha inválidos');
        return;
    }

    const mensagem = document.getElementById('loginMessage');
    if (mensagem) {
        mensagem.remove();
    }

    mostrarMensagem('Login bem-sucedido');
    // Aqui você pode adicionar a lógica de redirecionamento para a área administrativa.
    botaoLogin.addEventListener('click', function (event) {
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!usuario || !senha) {
        event.preventDefault();
        mostrarMensagem('Usuário ou senha não informados');
        return;
    }

    // Mantendo a validação original do Lorran (admin/admin)
    if (usuario !== adminUsuario || senha !== adminSenha) {
        event.preventDefault();
        mostrarMensagem('Usuário ou senha inválidos');
        return;
    }

    // Se o login estiver correto:
    const mensagem = document.getElementById('loginMessage');
    if (mensagem) {
        mensagem.remove();
    }

    // 1. Mensagem de sucesso
    alert('🔓 Login bem-sucedido! Redirecionando para o painel de eventos...');
    window.location.href = "admin_eventos.html"; 
});
