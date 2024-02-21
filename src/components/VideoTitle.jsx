const VideoTitle = ({ videoTitle, videoSummary }) => {
    return (
        <div className="flex flex-col gap-5 z-10 bg-gradient-to-r from-black h-full px-10 py-40 text-white">
            <h1 className="text-6xl font-medium">{ videoTitle }</h1>
            <p className="text-sm w-1/2">{ videoSummary }</p>
            <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-red-600 text-sm rounded">Play Now</button>
            <button className="px-4 py-2 bg-gray-400 text-sm rounded">Know More</button>
            </div>
        </div>
    );
}

export default VideoTitle;