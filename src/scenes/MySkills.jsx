import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  return (
    <section id='skills' className='pt-10 pb-24'>
      {/* Header and Image Section */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-fairplay font-semibold text-4xl mb-5'>
            My <span className='text-red'>Skills</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7'>
            As a full stack web developer proficient in JavaScript, I have
            expertise in both front-end and back-end development. My skills
            include creating responsive user interfaces, building RESTful APIs,
            working with databases, and deploying applications to production
            environments.
          </p>
        </motion.div>

        <div className='mt-16 md:mt-0'>
          {isAboveMediumScreens ? (
            <div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10            before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]'>
              <img
                alt='skills'
                className='z-10'
                src='assets/skills-image.png'
              />
            </div>
          ) : (
            <img alt='skills' className='z-10' src='assets/skills-image.png' />
          )}
        </div>
      </div>

      {/* Skills */}
      <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* Experience */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>01</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Experience
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]'></div>
          </div>
          <p className='mt-5'>
            I have honed my skills in JavaScript, HTML, and CSS, and have
            experience with various web development frameworks and libraries.
            Additionally, I have experience working collaboratively with
            cross-functional teams and managing project timelines.
          </p>
        </motion.div>

        {/* Innovative */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>02</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Innovative
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]'></div>
          </div>
          <p className='mt-5'>
            As a creative and forward-thinking web developer, I am passionate
            about leveraging innovative solutions to enhance user experiences
            and streamline development processes. Whether it's exploring new
            technologies or devising creative approaches to solve complex
            problems, I am committed to pushing the boundaries of what is
            possible in web development. I am constantly seeking out new
            opportunities to learn and grow, and am excited to bring fresh
            perspectives and ideas to the table.
          </p>
        </motion.div>

        {/* Imaginative */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>03</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Imaginative
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]'></div>
          </div>
          <p className='mt-5'>
            With a boundless imagination and a love for problem-solving, I
            approach web development with a creative and innovative mindset. I
            enjoy exploring new ideas and approaches to web development, and I
            am always eager to find unique and imaginative solutions to complex
            challenges. Whether it's brainstorming new features or designing
            engaging user experiences, I am committed to bringing a sense of
            creativity and imagination to every project I work on.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MySkills
