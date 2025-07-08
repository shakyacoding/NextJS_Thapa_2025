import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <div className="flex justify-center align-middle mt-45">
                <div>

                    <h1>404 </h1>
                    <br />
                    <h2>Page Not Found</h2>
                    <br />
                    <button className="bg-black text-2xl text-white border-2 border-black p-2">
                        <Link href="/">

                            <span>Go Home page</span>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}