const MovieCredits = ({ castData }) => {
    return (
        <div className="flex flex-col gap-2 z-[99] py-5">
            <span className="font-medium">Cast & Crew</span>
            <div>
                <div className="flex gap-5 overflow-x-auto">
                    {castData?.map((cast) => {
                        return (
                            <div key={cast.id} className="flex text-center flex-col items-center gap-1">
                                <div className="w-28 h-28 overflow-hidden rounded-full flex items-center">
                                    <img src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} alt="cast" className="" />
                                </div>
                                <span className="text-sm font-medium whitespace-nowrap w-28 truncate">{cast.name}</span>
                                <span className="text-xs text-gray-400 whitespace-nowrap w-28 truncate">{cast.character}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieCredits