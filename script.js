function altTheme(){
    const fundo = document.body
    const icone = document.querySelector('ion-icon#botao')
    const foto = document.querySelector('img')

    if (!fundo.classList.contains('dark')){ //alterar tema para escuro
        foto.setAttribute('src', './assets/perfil-foto-2.jpg')
        icone.setAttribute('name', 'moon-outline')
        fundo.classList.add('dark')

    } else if (fundo.classList.contains('dark')){ //alterar tema para claro
        icone.setAttribute('name', 'sunny-outline')
        foto.setAttribute('src', './assets/perfil-foto.jpeg')
        fundo.classList.remove('dark')
    }
}