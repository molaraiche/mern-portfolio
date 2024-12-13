import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex items-center justify-between dark:text-white '>
      <div className='font-medium font-quicksand'>
        {new Date().getFullYear()} &copy; - Made by{" "}
        <span className='font-bold text-black-400'>molaraiche</span>{" "}
      </div>
      <div className='flex gap-5'>
        <a
          href='https://github.com/molaraiche'
          title='GitHub link to @molaraiche'
          target='_blank'
          className='hover:scale-150 ease-in duration-200'>
          <FaGithub className='w-8 h-8' />
        </a>
        <a
          href='https://www.instagram.com/molaraiche/'
          target='_blank'
          title='Instagram link to @molaraiche'
          className='hover:scale-150 ease-in duration-200'>
          <FaInstagramSquare className='w-8 h-8' />
        </a>
        <a
          href='https://www.linkedin.com/in/mohamedlaraiche/'
          title='LinkedIn link to @mohamedlaraiche'
          target='_blank'
          className='hover:scale-150 ease-in duration-200'>
          <FaLinkedin className='w-8 h-8' />
        </a>
        <a
          href='https://wa.link/tfszlu'
          target='_blank'
          title='Whatsapp link to @mohamedlaraiche'
          className='hover:scale-150 ease-in duration-200'>
          <FaWhatsapp className='w-8 h-8' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
