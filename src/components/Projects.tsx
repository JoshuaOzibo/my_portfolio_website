export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <h1 className="text-center text-white text-5xl font-black">Project</h1>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <img src="/images/project1.png" alt="project1" />
          <h1 className="text-white text-2xl font-bold">
            On-Demand Rides Made Simple with a Powerful, User-Friendly App
            called Ryde
          </h1>
          <p>
            An app built with React Native, Expo, & TailwindCSS for a fast,
            user-friendly experience.
          </p>
        </div>
      </main>
    </section>
  );
}
