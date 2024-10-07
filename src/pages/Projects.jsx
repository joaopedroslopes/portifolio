import CardProject from "../components/CardProject";
import CardInfos from "../data/projects.json"

function Projects() {
    return ( 
        <>
            <div className="container mx-auto px-4 py-32 min-h-screen flex items-center justify-center flex-col">
                <CardProject cardProps={CardInfos} />
            </div>
        </>
     );
}

export default Projects;