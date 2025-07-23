import styles from '@/styles/Details.module.css';
import BackButton from '@/components/BackButton';

async function getAnime(id: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await res.json();
    return data.data;
}

export default async function AnimeDetails({
    params,
}: {
    params: { id: string };
}) {
    const anime = await getAnime(params.id);

    return (
        <div className={styles.container}>
            <BackButton />
            <h1>{anime.title}</h1>

            <div className={styles.detailsContent}>
                <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    width={225}
                    height={320}
                />

                <div className={styles.textContent}>
                    <p>{anime.synopsis}</p>

                    {anime.trailer?.embed_url ? (
                        <iframe
                            src={anime.trailer.embed_url}
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>Trailer não disponível.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
