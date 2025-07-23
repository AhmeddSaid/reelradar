import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center px-4 text-center text-white">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
        Lost in the Reel?
      </h2>
      <p className="mb-10 max-w-md text-lg text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Try heading back or discover something new.
      </p>
      <Link
        href="/"
        className="hover:bg-primary/90 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-text transition-all"
      >
        <FaArrowLeft />
        Go Home
      </Link>
    </main>
  );
}
