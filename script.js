function altTheme(){
    const fundo = document.body
    const icone = document.querySelector('ion-icon#botao')
    const foto = document.querySelector('img')

    if (!fundo.classList.contains('dark')){ //alterar tema para escuro
        fundo.classList.add('dark')
        icone.setAttribute('name', 'moon-outline')
        foto.setAttribute('src', './assets/perfil-foto-2.jpg')

    } else if (fundo.classList.contains('dark')){ //alterar tema para claro
        fundo.classList.remove('dark')
        icone.setAttribute('name', 'sunny-outline')
        foto.setAttribute('src', './assets/perfil-foto.jpeg')
    }
}