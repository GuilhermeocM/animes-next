import AnimeCard from '@/components/AnimeCard';
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import ToggleButton from '@/components/ToggleButton';

export const dynamic = 'force-dynamic'; // força SSR (opcional)

async function getAnimes() {
    const res = await fetch('https://api.jikan.moe/v4/anime?order_by=popularity&limit=25');
    const data = await res.json();
    return data.data;
}

export default async function HomePage() {
    const animes = await getAnimes();
    const comNota = animes.filter((a: any) => a.score !== null);
    const melhores = [...comNota].sort((a, b) => b.score - a.score);
    const ordenados = [...comNota].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <>
        <div className="container">
            <Sidebar />
            <main className="main-content">
                <Banner />
                <ToggleButton />
                <section>
                    <h2>Melhores avaliações</h2>
                    <div className="card-container">
                        {melhores.map((anime) => (
                            <AnimeCard key={anime.mal_id} anime={anime} />
                        ))}
                    </div>
                </section>
                <section>
                    <h2>Por ordem alfabética</h2>
                    <div className="card-container">
                        {ordenados.map((anime) => (
                            <AnimeCard key={anime.mal_id} anime={anime} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
        </>
    );
}