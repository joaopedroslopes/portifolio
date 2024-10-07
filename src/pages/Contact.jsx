import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nome:', formData.name);
        console.log('Email:', formData.email);
        console.log('Mensagem:', formData.message);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return ( 
        <>
            <div className="container mx-auto px-4 py-32 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-20">
                <div className='lg:col-span-2 max-w-lg'>
                    <h1 className='font-bold text-4xl lg:text-6xl text-purple-950'>
                        Let's Talk
                    </h1>
                    <p className='max-w-xl text-lg mt-4 text-gray-100'>
                        Have any questions? Send me a message here! I respond quickly (within 48 hours).
                    </p>
                    <p className='max-w-xl text-lg mt-4 font-bold text-purple-950'>
                        Additional ways to get in touch:
                    </p>
                    <p className='max-w-xl text-lg mt-2 text-purple-950 font-medium'>
                        LinkedIn:
                        <a
                            className='text-gray-100 font-light hover:underline'
                            href='https://www.linkedin.com/in/joão-pedro-l-38347820a/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            /in/joão-pedro-l-38347820a
                        </a>
                    </p>
                    <p className='max-w-xl text-lg text-purple-950 font-medium'>
                        Email: 
                        <a
                            className='text-gray-100 font-light hover:underline'
                            href='mailto:jp01.bao@gmail.com'
                        >
                            jp01.bao@gmail.com
                        </a>
                    </p>
                    <p className='max-w-xl text-lg text-purple-950 font-medium'>
                        GitHub: 
                        <a
                            className='text-gray-100 font-light hover:underline'
                            href='https://github.com/joaopedroslopes'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            joaopedroslopes
                        </a>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="mb-4">
                        <label className="block text-purple-950 text-base font-bold mb-2" htmlFor="name">
                            Nome
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-950 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-purple-950 text-base font-bold mb-2" htmlFor="email">
                            Email   
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-950 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-purple-950 text-base font-bold mb-2" htmlFor="message">
                            Mensagem
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-950 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            type="submit" 
                            className="bg-purple-950 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;