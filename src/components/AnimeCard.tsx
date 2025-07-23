'use client';
import { useRouter } from 'next/navigation';
import styles from '@/styles/AnimeCard.module.css';

export default function AnimeCard({ anime }: { anime: any }) {
    const router = useRouter();

    return (
        <div className={styles.card} onClick={() => router.push(`/details/${anime.mal_id}`)}>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <div className={styles.rating}>{anime.score ?? 'N/A'} ⭐</div>
            <div className={styles.title}>{anime.title}</div>
        </div>
    );
}