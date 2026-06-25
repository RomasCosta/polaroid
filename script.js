function alternarMusica() {
        const musica = document.getElementById("musica-fundo");
        const icone = document.getElementById("icone-musica");

        if (musica.paused) {
            musica.play();
            // Adiciona uma classe CSS para fazer o ícone animar/girar
            icone.classList.add("tocando"); 
        } else {
            musica.pause();
            // Remove a animação quando pausa
            icone.classList.remove("tocando"); 
        }
}

        // Função para iniciar o rodízio de fotos
        function iniciarCarrosselPolaroid() {
            // Seleciona todas as imagens que têm a classe 'polaroid' 
            // (Isso inclui o personagem principal e os 4 itens flutuantes)
            // Excluímos o ícone de música para ele não entrar no rodízio
            const imagens = document.querySelectorAll('.scenery-container .polaroid');
            
            // Se não houver imagens suficientes, cancela
            if (imagens.length === 0) return;

            // Extrai todos os caminhos (src) atuais das imagens e guarda numa lista
            let fontesDeImagem = Array.from(imagens).map(img => img.src);

            // Define o tempo que cada foto fica no centro (ex: 5000 = 5 segundos)
            const tempoDeEspera = 5000; 

            setInterval(() => {
                // Passo 1: Faz todas as imagens sumirem suavemente
                imagens.forEach(img => img.classList.add('fade-out'));

                // Passo 2: Espera o "fade-out" terminar (0.5s) para trocar as fotos invisivelmente
                setTimeout(() => {
                    // Pega a última foto da lista e coloca no começo (Rodízio)
                    const ultimaFoto = fontesDeImagem.pop();
                    fontesDeImagem.unshift(ultimaFoto);

                    // Aplica a nova ordem de fotos nas tags <img> e faz elas aparecerem de novo
                    imagens.forEach((img, index) => {
                        img.src = fontesDeImagem[index];
                        img.classList.remove('fade-out');
                    });
                }, 500); // 500 milissegundos = tempo do fade do CSS

            }, tempoDeEspera);
        }

        // Inicia a função assim que a página carregar
        window.onload = iniciarCarrosselPolaroid;
