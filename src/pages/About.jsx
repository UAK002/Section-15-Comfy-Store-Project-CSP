const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
        consequuntur aperiam tempora exercitationem fuga autem debitis alias
        quisquam aspernatur provident illum sequi ipsa consequatur nulla omnis
        eveniet vel. In dolores aperiam animi quae quibusdam fugit distinctio
        magni ea excepturi neque!
      </p>
    </>
  );
};
export default About;
