import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slidePrev = () => {
        console.log("Slide Prev");
        setActiveIndex(activeIndex - 1);
    };

    const slideNext = () => {
        console.log("Slide Next");
        setActiveIndex(activeIndex + 1);
    };


    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.map((item) => <HomeSectionCard product={item} />)
    return (
        <div className=' border '>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5 '>
                <AliceCarousel
                    key={activeIndex}
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex !== items.length - 5 &&
                    <Button
                        onClick={slideNext}
                        variant="contained"
                        className='z-50 '
                        sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", }}
                        aria-label='next'>
                        <KeyboardArrowLeftIcon
                            sx={{ transform: "rotate(90deg)", }}
                        />
                    </Button>
                }
                {
                    activeIndex !== 0 &&
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className='z-50 '
                        sx={{ position: "absolute", top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", }}
                        aria-label='prev'>
                        <KeyboardArrowLeftIcon
                            sx={{ transform: "rotate(90deg)", }}
                        />
                    </Button>
                }
            </div>
        </div>
    )
}

export default HomeSectionCarousel