const Search = () => {
    return (
        <div className="fixed bg-black bg-opacity-75 flex flex-col items-center pt-28 w-full h-full z-40 overflow-hidden">
        <input type="text" placeholder="Search for movies and more..." className="p-4 outline-none rounded placeholder-gray-800 w-1/2 bg-gray-300" />
        </div>
    );
}

export default Search;