import { useParams } from "react-router-dom";
import CardInfos from "../data/projects.json";
import NotFound from "./NotFound";

function ProjectDetail() {
    const { id } = useParams();
    const project = CardInfos.find((project) => project.id == id);

    return (
        <>
            {project ? (
                <div className="container mx-auto px-4 py-32 min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-purple-950 text-3xl md:text-4xl font-bold mb-4 text-center">{project.title}</h1>
                    <p className="text-gray-100 text-base md:text-lg text-center mb-8 max-w-[80%]">{project.description}</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                        <img className="w-full md:w-1/3 object-cover rounded-lg shadow-lg" src={`.${project.icon_image}`} alt="imagem 1" />
                        <img className="w-full md:w-1/3 object-cover rounded-lg shadow-lg" src={`.${project.image_1}`} alt="imagem 2" />
                        <img className="w-full md:w-1/3 object-cover rounded-lg shadow-lg" src={`.${project.image_2}`} alt="imagem 3" />
                    </div>
                    <a href={project.link} target="_blank" className="px-6 py-2 bg-purple-950 text-white rounded shadow hover:bg-purple-500 transition duration-300">
                        Acessar Repositório
                    </a>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
}

export default ProjectDetail;