import Skills from "../components/Skills";

function About() {
    return ( 
        <>
            <div className="container mx-auto px-4 py-32 min-h-screen flex items-center justify-center flex-col">
                <div className="max-w-[1400px] px-32 mx-auto">
                    <h1 className="text-4xl font-bold text-center text-purple-950 mb-4">About Me</h1>
                    <p className="text-lg text-white text-center mb-8">
                        Hi, I'm João Pedro, a passionate developer with experience in both frontend and backend technologies.
                        I love creating beautiful and functional web applications. Here are some of the skills I have acquired over the years.
                    </p>
                </div>
                <Skills />
            </div>
        </>
     );
}

export default About;