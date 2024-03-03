import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useEffect } from "react";
import OpenAI from "openai";

const MainContainer = () => {

    useEffect(() => {
        const openai = new OpenAI({
            apiKey: import.meta.env.VITE_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true,
        })
        async function main() {
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: 'Act as a movie recommandation system and get me names of recent funny indian movies in an array like format like ["Movie 1", "Movie 2"].' }],
                model: 'gpt-3.5-turbo',
            });
            console.log(chatCompletion)
        }
        // main()
    }, [])

    const movies = useSelector((state) => state.movies?.nowPlayingMovies);

    if (movies === null) return;

    const heroMovie = movies[1]

    return (
        <div className="bg-pink-200 relative h-[80vh] flex items-center overflow-hidden">
            <VideoTitle videoTitle={heroMovie?.original_title} videoSummary={heroMovie?.overview} />
            <VideoBackground videoID={heroMovie?.id} />
        </div>
    );
}

export default MainContainer;