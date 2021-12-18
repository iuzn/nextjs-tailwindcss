import {Buttons} from "../components/buttons";

function HomePage() {


  return (
    <>
      <div className="flex justify-center items-center mx-auto w-full">
        <div className="container-center">
          <Buttons cellCount={2} rowCount={143} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
