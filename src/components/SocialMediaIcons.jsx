import github from '../assets/github-mark-white.png'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration 500'
        href='https://www.linkedin.com/in/timothy-esposito/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='linkedin-link' src='../assets/linkedin.png' />
      </a>

      <a
        className='hover:opacity-50 transition duration 500'
        href='https://github.com/timoespo'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='github-link' src={github} height='30px' width='30px' />
      </a>
      <a
        className='hover:opacity-50 transition duration 500'
        href='https://twitter.com/timoespo'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='twitter-link' src='../assets/twitter.png' />
      </a>
    </div>
  )
}

export default SocialMediaIcons
