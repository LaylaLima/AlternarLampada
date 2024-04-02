var ligada = false; // Inicialmente, a lâmpada está desligada

        function alternarEstado() {
            var imagem = document.getElementById('ligar');
            
            // Verifica se a lâmpada está ligada ou desligada
            if (ligada) {
                // Se estiver ligada, desliga
                imagem.src = "Apagada.jpg";
                ligada = false;
            } else {
                // Se estiver desligada, liga
                imagem.src = "Ligada.jpg";
                ligada = true;
            }
        }