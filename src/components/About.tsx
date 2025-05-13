export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-red-500 font-bold mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-gray-300 mb-4">
            Write your introduction here. Share your background, experience, and what drives you in the tech world.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            {/* Add your skills here */}
          </div>
        </div>
      </div>
    </section>
  );
} 