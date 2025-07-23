'use client';

export default function BackButton() {
    return (
        <button onClick={() => window.history.back()}>
            Voltar
        </button>
    );
}