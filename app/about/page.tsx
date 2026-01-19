export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 flex  justify-center">About Me</h1>

      <div className="space-y-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold">Hendra</span>, a
            frontend-focused developer who enjoys building clean, responsive,
            and user-friendly web applications.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-3">What I Do</h2>
          <p className="text-gray-700 leading-relaxed">
            I mainly work with modern JavaScript frameworks like{" "}
            <span className="font-medium">React</span> and{" "}
            <span className="font-medium">Next.js</span>, focusing on reusable
            components, clear UI structure, and maintainable code. I enjoy
            turning ideas into real products that feel smooth and intuitive to
            use.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-3">Currently Learning</h2>
          <p className="text-gray-700 leading-relaxed">
            Recently, I’ve been building full-stack projects such as a{" "}
            <span className="font-medium">Money Tracker</span> application,
            working with authentication, databases, and APIs while still keeping
            performance and user experience in mind.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-3">What I’m Looking For</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m currently looking for an{" "}
            <span className="font-medium">
              internship or junior frontend role
            </span>{" "}
            where I can grow as a developer, learn from experienced engineers,
            and contribute to real-world products.
          </p>
        </div>
      </div>
    </section>
  );
}
