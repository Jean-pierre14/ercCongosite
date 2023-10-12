import mision from "../assets/images/ercImages/IMG-20221007-WA0033.jpg";

const Vision = () => {
  return (
    <>
      <div className=" max-w-[1240px] mx-auto">
        <h2 className="mt-10 font-palanquin text-4xl max-sm:text-[42px] py-5 max-sm:leading-[82px] font-bold">
          Vision de l'<span className="text-coral-red"> e</span>vangelical
          <span className="text-coral-red"> r</span>estoration
          <span className="text-coral-red"> c</span>hurch
        </h2>

        <div className="flex justify-between items-center max-xl:flex-col-reverse gap-10">
          <div className="flex-1">
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              dolor doloribus totam. Officia sed amet sit rerum fuga sapiente
              suscipit, reiciendis tempore asperiores nesciunt doloribus saepe
              quidem quasi ex nemo.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={mision}
              alt="Image"
              className="w-full rounded rounded-lg w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
