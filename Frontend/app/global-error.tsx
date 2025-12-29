'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
                    <button
                        onClick={() => reset()}
                        className="bg-[#fd3752] text-white px-6 py-2 rounded hover:bg-[#e62e46] transition-colors"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
