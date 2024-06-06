import Link from "next/link";

export default function Searchbar() {
    return (
        <div className="flex  items-center">
            <Link href="/">
                <h1 className="text-white text-2xl tex">Tablaturas Chris</h1>
            </Link>
            <input
                type="text"
                placeholder="Buscar..."
                className="h-10 mx-10 rounded-xl p-3" />
        </div>
    )
}