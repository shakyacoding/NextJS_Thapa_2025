"use client"
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter()
    return (
        <>
            <div className="flex justify-center align-middle mt-45">
                <div>

                    <div>

                        <h1>404 </h1>
                        <br />
                        <h2>Page Not Found</h2>
                        <br />
                        <button className="bg-amber-600 text-2xl text-white border-2 border-black p-2">
                            <Link href="/">

                                <span>Go Home page</span>
                            </Link>
                        </button>

                    </div>

                    <div className="mt-10">

                        <button
                            onClick={() => router.back()}
                            className="bg-orange-600 text-2xl text-white border-2 border-black p-2">

                            <span>Go Back</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}