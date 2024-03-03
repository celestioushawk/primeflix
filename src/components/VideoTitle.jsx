const VideoTitle = ({ videoTitle, videoSummary }) => {
    return (
        <div className="flex flex-col gap-5 z-10 bg-gradient-to-r from-black h-full px-10 py-40 text-white">
            <h1 className="text-5xl font-medium">{videoTitle}</h1>
            <p className="text-sm w-1/2">{videoSummary}</p>
            <div className="flex items-center gap-3">
                <button className="px-5 py-3 inline-flex items-center gap-2 bg-white text-black text-sm rounded">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span>Play Now</span>
                </button>
                <button className="px-5 py-3 inline-flex items-center gap-2 bg-opacity-50 bg-gray-400 text-sm rounded">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>

                    </span>
                    <span>Know More</span>
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;