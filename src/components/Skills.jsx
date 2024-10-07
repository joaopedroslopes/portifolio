import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

function Skills() {
    return ( 
        <>
            <div className="w-full">
                <div className="max-w-[1400px] mx-auto px-32">
                    <div className="mx-auto flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-purple-950 pb-4 text-center">Skills</h3>

                        <ul className="flex justify-start items-center flex-row flex-wrap gap-8 mb-2 bg-blue-50 p-8 rounded-2xl">
                            <span className="text-purple-500 text-2xl w-full text-center md:w-fit">Backend</span>
                            
                            <li className=" text-xl font-bold flex justify-center items-center flex-col">
                                <FaPython size="40px" />
                                Python
                            </li>
                            <li className=" text-xl font-bold flex justify-center items-center flex-col">
                                <FaNode size="40px" />
                                Node Js
                            </li>                         
                                                       
                        </ul>

                        <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
                            <span className="text-purple-500 text-2xl w-full text-center md:w-fit">Frontend</span>
                            <li className=" text-xl font-bold flex justify-center items-center flex-col">
                                <FaReact size="40px" />
                                React
                            </li>                            
                            <li className=" text-xl font-bold flex justify-center items-center flex-col">
                                <FaHtml5 size="40px" />
                                HTML
                            </li>
                            <li className=" text-xl font-bold flex justify-center items-center flex-col">
                                <FaCss3Alt size="40px" />
                                CSS
                            </li>
                            <li className=" text-xl font-bold flex justify-center items-center flex-col">
                                <SiTailwindcss size="40px" />
                                Tailwind CSS
                            </li>
                            <li className=" text-xl font-bold flex justify-center items-center flex-col">
                                <FaBootstrap size="40px" />
                                Bootstrap
                            </li>
                        </ul>

                        <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
                            <span className="text-purple-500 text-2xl w-full text-center md:w-fit">Data Science</span>
                            
                            <li className="text-xl font-bold flex justify-center items-center flex-col">
                                <SiNumpy size="40px" />
                                Numpy
                            </li>                            
                            <li className="text-xl font-bold flex justify-center items-center flex-col">
                                Matplotlib
                            </li>
                        </ul>

                        <ul className="flex items-center flex-row gap-8 flex-wrap mb-2 bg-blue-50 p-8 rounded-2xl">
                            <span className="text-purple-500 text-2xl w-full text-center lg:w-fit">Other</span>
                            <li className="text-xl font-bold flex justify-center items-center flex-col">
                                C#
                            </li>                            
                            <li className="text-xl font-bold flex justify-center items-center flex-col">
                                <FaGithub size="40px" />
                                git/GitHub
                            </li>
                            <li className="text-xl font-bold flex justify-center items-center flex-col">

                                Analytics
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Skills;