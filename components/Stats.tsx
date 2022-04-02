function Stats() {
  const style = {
    box: `py-4 px-5 rounded mt-5 md:px-20 bg-white shadow-md`,
    boxHead: `text-2xl md:text-5xl font-bold text-blue-600`,
    boxPara: `mt-4 text-gray-700`,
  }
  return (
    <div className="mx-auto mt-20 bg-[#F9FAFB] px-2 py-14 text-center">
      <div>
        <h1 className="text-3xl font-bold">
          Trusted by developers from over 80 planets
        </h1>
        <p className="mt-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          voluptate aliquam repellat
        </p>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <div className={style.box}>
          <h1 className={style.boxHead}>100%</h1>
          <p className={style.boxPara}>Pepperoni</p>
        </div>
        <div className={style.box}>
          <h1 className={style.boxHead}>24/7</h1>
          <p className={style.boxPara}>Delivery</p>
        </div>
        <div className={style.box}>
          <h1 className={style.boxHead}>100k</h1>
          <p className={style.boxPara}>Calories</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
