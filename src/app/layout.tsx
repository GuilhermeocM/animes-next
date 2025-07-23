import '@/styles/globals.css';

export const metadata = {
    title: 'Anime Hero',
    description: 'Catálogo de animes com detalhes e trailer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    );
}