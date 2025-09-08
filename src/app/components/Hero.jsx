function Hero({ completed, total }) {
  return (
    <section className="flex border border-PaleForest items-center justify-around self-center w-[97%] max-w-md p-[30px] rounded-[20px] mt-[100px]">
      <div>
        <p>Complete the tasks</p>
      </div>
      <div className="flex bg-Groove w-36 h-36 rounded-full text-[48px] items-center justify-center text-center text-PaleForest">
        {completed}/{total}
      </div>
    </section>
  );
}

export default Hero;
