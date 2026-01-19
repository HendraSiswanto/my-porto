import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 flex justify-center">Contact</h1>

      <p className="text-gray-600 mb-12 flex justify-center items-center">
        Interested in working together or have an opportunity? Feel free to
        reach out through any of the platforms below.
      </p>

      <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="
            rounded-2xl border border-gray-200 bg-white p-6
            border-l-4 border-l-gray-200
            transition-all duration-300
            hover:-translate-y-0.5 hover:shadow-lg hover:border-l-blue-400
          "
        >
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="text-gray-600 mb-4">Let’s talk directly</p>
          <Link
            href="mailto:etik.hendra@gmail.com"
            className="text-blue-600 font-medium hover:underline"
          >
            etik.hendra@gmail.com
          </Link>
        </div>

        <div
          className="
            rounded-2xl border border-gray-200 bg-white p-6
            border-l-4 border-l-gray-200
            transition-all duration-300
            hover:-translate-y-0.5 hover:shadow-lg hover:border-l-blue-400
          "
        >
          <h2 className="text-lg font-semibold mb-2">GitHub</h2>
          <p className="text-gray-600 mb-4">See my projects & code</p>
          <Link
            href="https://github.com/HendraSiswanto"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            github.com/HendraSiswanto
          </Link>
        </div>

        <div
          className="
            rounded-2xl border border-gray-200 bg-white p-6
            border-l-4 border-l-gray-200
            transition-all duration-300
            hover:-translate-y-0.5 hover:shadow-lg hover:border-l-blue-400
          "
        >
          <h2 className="text-lg font-semibold mb-2">LinkedIn</h2>
          <p className="text-gray-600 mb-4">Let’s connect professionally</p>
          <Link
            href="https://linkedin.com/in/hendrasiswanto"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            linkedin.com/in/hendrasiswanto
          </Link>
        </div>

        <div
          className="
            rounded-2xl border border-gray-200 bg-white p-6
            border-l-4 border-l-gray-200
            transition-all duration-300
            hover:-translate-y-0.5 hover:shadow-lg hover:border-l-blue-400
          "
        >
          <h2 className="text-lg font-semibold mb-2">Vercel</h2>
          <p className="text-gray-600 mb-4">Deployed projects</p>
          <Link
            href="https://vercel.com/hendra-siswantos-projects"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            vercel.com/hendra-siswanto-projects
          </Link>
        </div>
        <div
          className="
          rounded-2xl border border-gray-200 bg-white p-6
          border-l-4 border-l-gray-200
          transition-all duration-300
          hover:-translate-y-0.5 hover:shadow-lg hover:border-l-blue-400
           "
        >
          <h2 className="text-lg font-semibold mb-2">Instagram</h2>
          <p className="text-gray-600 mb-4">Personal & creative side</p>
          <Link
            href="https://instagram.com/hendras__"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            instagram.com/hendras__
          </Link>
        </div>
      </div>
    </section>
  );
}
