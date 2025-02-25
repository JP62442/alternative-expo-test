"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-md">
        <h1
          className="text-6xl font-extrabold text-altMagenta"
          aria-label="Error 404 - Page Not Found"
        >
          404
        </h1>
        <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
        <p className="mt-2 text-sm text-white/80">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <button
            onClick={() => router.back()}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            aria-label="Go back to previous page"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="bg-altMagenta hover:bg-altMagentaLight text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            aria-label="Return to home page"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
