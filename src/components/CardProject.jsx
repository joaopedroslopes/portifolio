import { NavLink } from 'react-router-dom';


function CardProject(props) {

    const cardProps = props.cardProps;

    return ( 

        cardProps.map(({ id, title, description, technologies, icon_image }) => (
            <div className="mt-10">
                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-xl max-w-[1000px]'>
                    <h1 className='font-bold text-lg md:text-xl text-purple-500 pb-4'>{title}</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-5 aspect-h-3'>
                            <img src={icon_image} alt="" />
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs sm:text-sm md:text-base'>
                                {description}
                            </p>
                            <cite className='inline-flex items-center mt-4 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    {technologies}
                                </p>
                            </cite>
                            <div className='flex pt-4 space-x-4'>
                                <div>
                                    <NavLink to={`/projects/${id}`} className=" md:px-12 md:py-3 px-5 py-1 font-normal text-sm text-gray-200 md:font-medium text-culturedWhite bg-purple-500 rounded shadow hover:bg-purple-950 hover:bg-carolinaBlue focus:outline-none focus:ring">About</NavLink>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>
            </div>
        ))
        
     );
}

export default CardProject;