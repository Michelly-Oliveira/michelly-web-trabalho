const formElement = document.querySelector('#form');

formElement.addEventListener('submit', e => {
	// Impedir o comportamento default do form, de tentar enviar os dados
	e.preventDefault();

	// comportamento customizado para informar o usuário de que a mensagem foi enviada
	alert('Mensagem enviada com sucesso!');
});
