import LeftContainer from '../LeftContainer/LeftContainer'
import RightContainer from '../RightContainer/RightContainer'
import HeroSkills from '../HeroSkills/HeroSkills'

const Hero = () => {
  return (
    <div id="hero" className='h-[80vh] px-5 flex flex-col items-center justify-center pt-20 mb-20'>
      <section className="flex flex-col-reverse items-center justify-center md:flex-row md:ml-17 lg:ml-30 lg:w-[80vw] md:h-100 md:mb-10 md:mr-10 md:gap-7 xl:mt-10">
        <LeftContainer/>
        <RightContainer/>
      </section>
      <HeroSkills/>
      <hr />
    </div>
  )
}

export default Hero