import { strategie1, strategie2 } from ".";

const Strategies = () => {
  return (
    <>
      <div className="min-h-screen bg-black py-[100px] text-white">
        <div className="max-w-[1240px] m-auto pt-10">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-left text-4xl font-bold uppercase">
            Les strategies
          </h3>

          <div className="flex justify-between items-center mt-[100px] gap-10">
            <div className="flex-1 basic-1/4" data-aos="fade-left">
              <h3 className="text-4xl uppercase text-gray-500 font-bold">
                Premiere semaine{" "}
                <span className="text-coral-red bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  1994-2001
                </span>
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
            <div className="flex-1" data-aos="fade-right">
              <img
                src={strategie1}
                className="transition-opacity w-full rounded-xl sm:flex-col"
                alt="Image"
              />
            </div>
          </div>

          <div className="flex flex-reverse justify-between items-center my-[100px] gap-10">
            <div className="flex-1 sm:flex-col" data-aos="fade-right">
              <img
                src={strategie2}
                className="w-full rounded-xl sm:flex-col"
                alt="Image"
              />
            </div>
            <div className="flex-1 basic-1/4" data-aos="fade-left">
              <h3 className="text-4xl uppercase text-gray-500 font-bold">
                Deuxieme semaine:
                <span className="text-coral-red bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  {" "}
                  2001-2008
                </span>
              </h3>
              <p className="text-2xl text-left">
                Liberer, soigner et restaurer les coeurs desseches.
                <small>
                  Proverbe 24,11; Ezechiel 11, 19-20; Marc 16, 16-20; Proverbes
                  27,23
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strategies;
