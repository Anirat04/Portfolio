// import bannerIMG from '../../../../assets/Images/man5_big.jpeg'
import bannerIMG from '../../../../assets/Images/myPhoto.jpg'
import { MdDownload } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
// import resume from "../../../../assets/"
const Banner = () => {
    return (
        <div>
            <div
                className="bannerContainer bg-[#31313a] max-w-[480px] mx-auto md:mx-0 overflow-hidden rounded-md relative"
                style={{ boxShadow: "3px 0 8px rgba(0, 0, 0, 0.5)" }}
            >
                <div className="pictureDiv min-h-[384px]">
                    <img src={bannerIMG} className="min-h-[384px]" alt="" />
                </div>
                <div className="text-div text-center mb-[100px] mt-[20px] relative">
                    <div className='z-10 relative'>
                        <h1 className='text-[32px] font-bold text-white'>Tanbir Haque Anil</h1>
                        <TypeAnimation
                            sequence={[
                                'Web Developer',  // Types 'Web Development'
                                2000,               // Waits 2s
                                ' ',                // Types a space (to erase the text)
                                1000,               // Waits 1s
                                'Web Developer',  // Types 'Web Development' again
                                2000,               // Waits 2s
                                () => {
                                    console.log('Sequence completed');
                                },
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            className='text-16px text-[#78cc6d]'
                        />
                        <ul className='flex justify-center gap-2 mt-[20px] text-white'>
                            <Link>
                                <li className='hover:text-[#61ce70] transition ease-linear'><FaGithub /></li>
                            </Link>
                            <Link>
                                <li className='hover:text-[#61ce70] transition ease-linear'><FaLinkedin /></li>
                            </Link>
                            <Link>
                                <li className='hover:text-[#61ce70] transition ease-linear'><FaTwitter /></li>
                            </Link>
                            <Link>
                                <li className='hover:text-[#61ce70] transition ease-linear'><FaFacebook /></li>
                            </Link>
                            <Link>
                                <li className='hover:text-[#61ce70] transition ease-linear'><FaInstagram /></li>
                            </Link>
                        </ul>
                    </div>
                    <div className='rightdiv h-[200px] w-full absolute bg-[#31313a] top-[-29px] left-[-60px] rotate-[10deg] z-0]'></div>
                    <div className='leftdiv h-[200px] w-full absolute bg-[#31313a] top-[-29px] right-[-60px] -rotate-[10deg] z-0'></div>
                </div>
                <div className="btnDiv uppercase font-bold text-white text-[14px] grid grid-cols-2 justify-center border-[#54545d] border-t-[1px] relative">
                    <div className='border-[#54545d] border-r-[1px] py-5'>
                        <h3 className='flex gap-3 items-center justify-center hover:text-[#78cc6d]'>
                            <a href="/public/TanbirHaqueAnilResume (6).pdf" download>
                                download CV
                            </a>
                            <MdDownload />
                        </h3>
                    </div>
                    <div className='py-5'>
                        <Link to='/contact'>
                            <h3 className='flex gap-3 items-center justify-center hover:text-[#78cc6d]'>
                                Contact me
                                <IoMdMail />
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;