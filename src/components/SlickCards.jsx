import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from "react";
import { Link } from "react-router-dom";


const SlickCards = ({ genres }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    }

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    }

    if (genres === null) return;

    return (
        <div className="flex flex-col gap-2">
            <h1>Browse by Genres</h1>
            <div className="w-full overflow-hidden relative flex flex-col gap-2">
                <button className="absolute top-1/2 z-30 bg-gray-500 bg-opacity-50 text-white rounded-full w-10 h-10 flex justify-center items-center" onClick={goToPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className="absolute top-1/2 right-0 z-30 bg-gray-500 bg-opacity-50 text-white rounded-full w-10 h-10 flex justify-center items-center" onClick={goToNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <h1 className="font-medium text-2xl text-white gap-5">Browse by Genres</h1>
                <Slider {...settings} ref={sliderRef}>
                    {genres.map((genre) => {
                        return <Link to={`/movie/${genre.id}`} key={genre.id}>
                            <div className="h-24 w-48 bg-gray-800 flex rounded-md justify-center items-center">
                                <h1 className="text-white font-medium">{genre.name}</h1>
                            </div>
                        </Link>
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default SlickCards