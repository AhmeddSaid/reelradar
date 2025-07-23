"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="mb-2 text-3xl font-bold text-red-600">
        Something went wrong
      </h2>
      <p className="mb-4 text-gray-400">{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded bg-primary px-4 py-2 text-white hover:opacity-90"
      >
        Try Again
      </button>
    </div>
  );
}
