export async function SearchEpisode({episode}){
        try {
            const dados = {
                titulo: episode
            }
            const buscar = await fetch("http://localhost:3000/reproduzir",{
                method: "POST",
                body: JSON.stringify(dados),
                headers:{
                    "Content-Type":"application/json",
                }
            });
            
            if (!buscar.ok) {
                //throw new Error(`Erro na requisição: ${buscar.status}`);
                return false;
            }
            
            const resultado = await buscar.json();

            return resultado.episodio;

            //setVideoSource(resultado.episodio);
        } catch (error) {
            console.error("Erro ao reproduzir episódio:", error);
        }
    }