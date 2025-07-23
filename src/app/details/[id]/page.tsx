import styles from '../../../styles/Details.module.css';
import BackButton from '../../../components/BackButton';
import type { Metadata } from 'next';

type AnimeProps = {
    title: string;
    synopsis: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
    trailer?: {
        embed_url: string;
    };
};

async function getAnime(id: string): Promise<AnimeProps> {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await res.json();
    return data.data;
}

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params; // Desestruturando para pegar o id

    try {
        const anime = await getAnime(id);
        return {
            title: `${anime.title} - Anime Hero`,
            description: anime.synopsis,
            openGraph: {
                images: [anime.images.jpg.image_url],
            },
        };
    } catch (error) {
        return {
            title: 'Detalhes do Anime',
            description: 'Página de detalhes do anime',
        };
    }
}

export default async function AnimeDetails({ params }: Props) {
    const { id } = await params; // Desestruturando para pegar o id

    try {
        const anime = await getAnime(id);

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
                        className={styles.poster}
                    />

                    <div className={styles.textContent}>
                        <p>{anime.synopsis}</p>

                        {anime.trailer?.embed_url ? (
                            <div className={styles.trailerContainer}>
                                <iframe
                                    src={anime.trailer.embed_url}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={`Trailer de ${anime.title}`}
                                    className={styles.trailer}
                                />
                            </div>
                        ) : (
                            <p>Trailer não disponível.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className={styles.container}>
                <BackButton />
                <h1>Erro ao carregar anime</h1>
                <p>O anime solicitado não pôde ser carregado.</p>
            </div>
        );
    }
}
