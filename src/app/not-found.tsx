import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <h1>Página não existe</h1>
            <br />
            <Link href='/'>
                Voltar para home
            </Link>
        </div>
    )
}