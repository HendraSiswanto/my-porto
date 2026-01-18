import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Money Tracker – Full-Stack Finance App",
    description:
      "A full-stack web application for tracking income, expenses, categories, and balances with authentication.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Chakra UI",
      "Supabase",
      "Prisma",
      "Responsive UI",
      "Postgresql"
    ],
    live: "https://moneytracker-project.vercel.app/",
    github: "https://github.com/HendraSiswanto/Money-tracker",
    image: "/images/moneyTracker.png",
    featured: true,
  },
  {
    title: "To Do List App",
    description:
      "An Assignment for me to make a To Do List application for listing a task that must be done, statuses, and notes for each of them.",
    tech: ["Next.js", "React", "Tailwind", "TypeScript", "Responsive UI"],
    live: "https://hendra-todo.vercel.app/",
    github: "https://github.com/HendraSiswanto/hendra-todo",
    image: "/images/toDoList.jpeg",
  },
  {
    title: "Random Workout Generator",
    description:
      "A random app for creating a random workout section, timelaps, and showing the passed workout that have be done.",
    tech: ["Firebase", "React", "Chakra UI", "TypeScript", "Responsive UI"],
    live: "https://random-workout-steel.vercel.app/",
    github: "https://github.com/HendraSiswanto/random-workout",
    image: "/images/workoutGen.png",
  },
  {
    title: "Game Launcher - Learning Project",
    description:
      "A learning project that using a free access api that showing some list of game sorted by genre, data added, platforms, name, relevance, and average rating.",
    tech: ["Rest API", "React", "Chakra UI", "TypeScript", "Responsive UI"],
    live: "https://my-game-woad.vercel.app/",
    github: "https://github.com/HendraSiswanto/my-game",
    image: "/images/gameList.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-14 flex justify-center flex-col items-center">
        <h1 className="text-4xl font-bold mb-3">Projects</h1>
        <p className="text-gray-600">
          Selected projects that demonstrate my skills in frontend and
          full-stack development.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
