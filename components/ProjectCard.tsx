import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  github: string;
  featured?: boolean
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  live,
  github,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border bg-white
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${
          featured
            ? "border-blue-300 shadow-lg"
            : "border-gray-200"
        }
      `}
    >
      {featured && (
        <span
          className="
            absolute top-4 left-4 z-10
            rounded-full bg-blue-600 px-3 py-1
            text-xs font-semibold text-white
          "
        >
          Featured Project
        </span>
      )}


      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover transition-transform duration-500
            group-hover:scale-105
          "
          priority={featured}
        />
      </div>

  
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

      
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="text-sm rounded-full bg-gray-100 px-3 py-1 text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {live && (
            <Link
              href={live}
              target="_blank"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Live Demo
            </Link>
          )}
          <Link
            href={github}
            target="_blank"
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
