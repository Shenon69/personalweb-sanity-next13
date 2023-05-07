import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  const styles = {
    nameGradient:
      "bg-gradient-to-r from-orange-400 via-red-500 bg-clip-text text-transparent to-purple-600",
  };

  return (
    <div className="max-w-5xl mx-auto py-20 px-10 md:px-10 lg:px-0">
      <h1 className="text-7xl font-extrabold ">
        Hello I&apos;m{" "}
        <span className={styles.nameGradient}>Shenon</span>!
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! Check out my projects...
      </p>

      <h2 className="mt-24 text-3xl font-bold text-gray-700">My projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">

            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"

              />
            )}

            <div className="font-extrabold text-gray-600 mt-2">{project.name}</div>
          </Link>
        ))
        }
      </div>
    </div >
  );
}
