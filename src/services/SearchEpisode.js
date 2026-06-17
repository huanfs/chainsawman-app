export async function SearchEpisode({episode}){
    const apiUrl = import.meta.env.VITE_API_URL;
        try {
            const title = {
                title: episode
            }
            const search = await fetch(`${apiUrl}/play`,{
                method: "POST",
                body: JSON.stringify(title),
                headers:{
                    "Content-Type":"application/json",
                }
            });
            
            if (!search.ok) {
                //throw new Error(`Erro na requisição: ${search.status}`);
                return false;
            }
            
            const response = await search.json();

            return response.episode;

            //setVideoSource(resultado.episodio);
        } catch (err) {
            console.error("Erro ao reproduzir episódio:", err);
        }
    }