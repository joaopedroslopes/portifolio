import { NavLink } from "react-router-dom";

function Home() {
    return ( 
        <>
            <div className='flex px-4 md:py-32 mx-auto h-screen items-center'>
                <div className='text-center mx-auto'>
                    <h1 className='text-4xl text-white font-extrabold md:text-6xl'>
                        João Pedro
                    </h1>
                    <h1 className='text-4xl text-purple-950 font-extrabold md:text-6xl'>
                        Software Engineer
                    </h1>
                    <p className='text-sm mt-4 sm:leading-relaxed md:text-xl text-gray-200'>
                        Software Engineering studant at FIAP and Full Stack Enthusiast
                    </p>
                    <div className='flex flex-wrap justify-center mt-8'>
                        <NavLink to={'/contact'}>
                            <a
                                className='px-12 py-3 text-sm text-gray-200 font-medium text-culturedWhite bg-purple-950 rounded shadow hover:bg-purple-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                Contact Me
                            </a>
                        </NavLink>
                        {/* <NavLink to={'/resume'}>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-12 py-3 text-sm text-gray-200 font-medium text-culturedWhite bg-purple-950 rounded shadow hover:bg-purple-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                Resume
                            </a>
                        </NavLink> */}
                    </div>
                </div>
            </div>
        </>
     );
}

export default Home;