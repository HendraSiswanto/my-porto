import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <section className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-500 mb-2">Hi, I’m Hendra </p>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Frontend Developer
            </h1>

            <p className="text-gray-600 max-w-md mb-8">
              build clean, responsive, and user-focused web applications using
              React and Next.js.
            </p>

            <div className="flex gap-4">
              <a
                href="/projects"
                className=" shadow-lg px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="/cv.pdf"
                className="shadow-lg px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end relative">
            <div className="relative w-64 h-80 md:w-80 md:h-105">
              <div
                className="absolute inset-0 -z-10 rounded-full 
      bg-linear-to-tr from-blue-100 via-blue-200 to-gray-200 
      blur-2xl scale-110"
              ></div>

              <Image
                src="/images/profile.png"
                alt="Hendra profile photo"
                fill
                className="absolute inset-0 object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
