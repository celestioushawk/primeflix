import React from 'react'

const SingleMovieShimmer = () => {
    return (
        <section className="bg-black h-full pt-28 text-white col-span-3 flex  items-center pl-10">
            <div className="flex flex-col gap-5">
                <h1 className="shimmer w-full h-24"></h1>
                <p className="shimmer w-96 h-8"></p>
                <p className="shimmer w-96 h-8"></p>
                <p className="shimmer w-80 h-8"></p>
                <div className="flex flex-col gap-1">
                    <h2 className="shimmer w-40 h-12"></h2>
                    <div className="flex items-center gap-2">
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <span className='shimmer w-44 h-12'></span>
                </div>
            </div>
        </section>
    )
}

export default SingleMovieShimmer