const Search = () => {
  return (
    <div className="h-28 mt-32 mx-40">
      <div className=" h-14 flex items-center">
      <input type="search" className="bg-white h-10 w-60 mt-2 mx-2 ring-2 ring-black rounded-full pl-3 transition duration-200 ease-in-out " placeholder="Search" />
        <button className=" bg-white h-10 w-20 mt-2 mx-2 ring-2 ring-black rounded-full">Search</button>
      </div>
      </div>
  )
}

export default Search