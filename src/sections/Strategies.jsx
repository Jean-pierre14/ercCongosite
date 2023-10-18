const Strategies = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-[1240px] m-auto pt-10">
          <h3 className="text-left text-4xl font-bold uppercase">
            Les strategies
          </h3>

          <div className="flex justify-between mt-[100px] gap-10">
            <div className="flex-1">
              <h3 className="text-4xl uppercase text-gray-500 font-bold">
                Premiere semaine{" "}
                <span className="text-coral-red">1994-2001</span>
              </h3>
              <p className="text-2xl text-left">
                Precher la bonne nouvelle et rassembler les gens au sein d'une
                meme famille (crhetienne).{" "}
                <small>
                  Ezechiel 37, 1-10; 1 Rois 18, 30-46; Mathieu 2,30; Apocalypse
                  5,9-10
                </small>
              </p>
            </div>
            <div className="flex-1">
              <img src="" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strategies;
