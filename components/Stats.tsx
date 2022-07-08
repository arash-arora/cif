function Stats() {
  const style = {
    box: `py-4 px-5 rounded mt-5 lg:px-20 bg-white shadow-md`,
    boxHead: `text-2xl md:text-4xl lg:text-5xl font-bold text-green-800`,
    boxPara: `mt-4 text-gray-700`,
  }
  return (
    <div className="mx-auto mt-20 bg-[#F9FAFB] px-2 py-14 text-center">
      <div>
        <h1 className="text-4xl font-bold">
          Trusted by people from over 80 planets
        </h1>
        <p className="mt-3 text-gray-500">
          We at wavemakers believe in creating, designing, and manage
          entrepreneurship programs
        </p>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <div className={style.box}>
          <h1 className={style.boxHead}>500+</h1>
          <p className={style.boxPara}>Startups incubated</p>
        </div>
        <div className={style.box}>
          <h1 className={style.boxHead}>$50M</h1>
          <p className={style.boxPara}>Funds Raised</p>
        </div>
        <div className={style.box}>
          <h1 className={style.boxHead}>250+</h1>
          <p className={style.boxPara}>MSME Restructured</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
