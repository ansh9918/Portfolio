const Welcome: React.FC = () => {
  return (
    <section
      id="welcome"
      className="text-gray-200 z-40 flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none max-sm:h-screen max-sm:w-full max-sm:px-10">
      <p className="flex-1 text-3xl text-center font-roboto text-gray-400">
        Hey, I&apos;m Ansh Welcome to my
      </p>
      <h1 className="mt-7 text-9xl italic">portfolio</h1>

      <div className="sm:hidden m-7 bg-red-300/20 backdrop-blur-lg p-3 rounded-md absolute top-10">
        <p className="flex-1 text-[16px] text-center font-roboto text-gray-400">
          This Portfolio is designed for desktop/tablet screens only.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
