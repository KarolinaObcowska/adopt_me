import React, {useState, createRef} from "react";
import HeroImg1 from '../images/hero.svg'
import HeroImg2 from '../images/hero2.svg'
import HeroImg3 from '../images/hero3.svg'

const images = [HeroImg1, HeroImg2, HeroImg3]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    setCurrentImage(i)
    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    })
  }

  const totalImages = images.length

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0)
    } else {
      scrollToImage(currentImage + 1)
    }
  }

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1)
    } else {
      scrollToImage(currentImage - 1)
    }
  }

  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  )

  const arrowStyle = 'absolute text-white text-2xl z-2 bg-gray-700 h-10 w-10 rounded-full opacity-75 flex items-center justify-center'
  
  return (
    <div className="absolute top-20 sm:top-32 w-screen bg-white-100 flex justify-center">
      <div className="flex items-center flex-col justify-center flex-wrap md:w-4/5 w-screen">
        <div className='carousel'>
        {sliderControl(true)}
        {images.map((img, i) => (
          <div className='w-full flex-shrink-0' key={img} ref={refs[i]}>
            <img src={img} className='object-fit m-auto w-full sm:max-w-md' alt='woman with dog'/>
        </div>
        ))}
        {sliderControl()}
        </div>
        <div className='text-center flex-1'>
          <h1 className='text-xl text-gray-700'>Make new friends!</h1>
          <p className='text-gray-500'>Discover thousands of pets waiting <br />
          for loving homes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
