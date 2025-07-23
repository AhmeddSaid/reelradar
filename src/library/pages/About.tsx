import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-white sm:px-20">
      <section className="mb-16">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          🎬 About <span className="text-primary">Reel</span>Radar
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to <strong>ReelRadar</strong> — your one-stop destination for
          discovering movies you&apos;ll love. Whether you&apos;re searching for
          a cult classic, a blockbuster hit, or a hidden gem, we help you
          explore and keep track of your favorite films in style.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-semibold">🚀 Our Mission</h2>
        <p className="text-base leading-relaxed text-gray-300">
          Our mission is to make movie discovery effortless and enjoyable.
          Powered by the{" "}
          <a
            href="https://www.omdbapi.com/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            OMDb API
          </a>
          , ReelRadar delivers accurate and up-to-date movie details at
          lightning speed.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-semibold">
          🛠️ Built with Modern Tools
        </h2>
        <ul className="list-inside list-disc space-y-2 text-base text-gray-300">
          <li>
            ⚡ <strong>Next.js</strong> for blazing-fast performance and
            SEO-friendly pages
          </li>
          <li>
            🎨 <strong>Tailwind CSS</strong> for a sleek and responsive design
          </li>
          <li>
            📡 <strong>OMDb API</strong> to fetch rich movie data
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-semibold">💡 Why ReelRadar?</h2>
        <p className="text-base leading-relaxed text-gray-300">
          We built ReelRadar because we believe movie lovers deserve a
          lightweight, elegant, and distraction-free platform to explore cinema.
          Whether you’re just browsing or curating a list of favorites —
          ReelRadar has your back.
        </p>
      </section>

      <footer className="mt-20 border-t border-gray-700 pt-8">
        <h3 className="mb-4 text-2xl font-semibold">👨‍💻 Creator</h3>
        <p className="mb-4 text-base leading-relaxed text-gray-400">
          This project was created and coded with care by{" "}
          <strong className="text-primary">Ahmed Said</strong>. Feel free to
          check out my work and connect with me!
        </p>
        <div className="flex items-center space-x-6 text-xl text-gray-300">
          <a
            href="https://github.com/ahmedsaidadnan"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ahmedsaidadnan"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://ahmedsaidadnan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FaGlobe />
          </a>
        </div>
      </footer>
    </main>
  );
}
