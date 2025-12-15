import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [        
    {
        id: 1,
        title: 'Interior Design Portfolio',
        description: 'A portfolio website for an interior designer, showcasing projects and services offered made with Squarespace.',
        image: '/projects/HaksInterior.png',
        tags: ['Squarespace','HTML', 'Javascript', 'CSS'],  
        DemoURL: 'https://www.hakz.ae/',
    },

    {
        id: 2,
        title: 'Food Delivery Web App',
        description: 'Full-stack web application demonstrating end-to-end development: REST API design, authentication with JWT, database modeling with MongoDB, and a responsive React frontend with Stripe payment integration. This demo application was created independently for self-development and technical growth',
        image: '/projects/food_del_webapp.png',
        tags: ['HTML', 'bootstrap', 'JavaScript'],
        githubURL: 'https://github.com/rodriberdo96/Food_Delivery_App',  
        DemoURL: 'https://fooddelapprodri.netlify.app/',
    },
    {
        id: 3,
        title: 'System Course Website',
        description: 'A responsive website for a system course, showcasing course details and resources. This demo application was created independently for self-development and technical growth',
        image: '/projects/System_Course.png',
        tags: ['HTML', 'bootstrap', 'JavaScript'],
        githubURL: 'https://github.com/rodriberdo96/Pagina-de-cursos',  
        DemoURL: 'https://system-course.netlify.app/',
    },
    {
        id: 4,
        title: 'Workshop Website',
        description: ' A website for a workshop company, providing information and portfolio and clients.This demo application was created independently for self-development and technical growth',
        image: '/projects/Landing2.png',
        tags: ['HTML', 'Javascript', 'CSS'],
        githubURL: 'https://github.com/rodriberdo96/landing_page',  
        DemoURL: 'https://landingro2.netlify.app/',
    },
    {
        id: 5,
        title: 'Housing Website',
        description: 'A housing website that allows users to search for properties, view details, and contact agents. This demo application was created independently for self-development and technical growth',
        image: '/projects/HousinLanding3.png',
        tags: ['HTML', 'Javascript', 'CSS'],
        githubURL: 'https://github.com/rodriberdo96/landing_page2',  
        DemoURL: 'https://landingro.netlify.app/',
    }
];


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            {" "}
            <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity. Click on the project title to view more details or visit the live demo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-secondary border text-secondary-foreground px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.DemoURL || project.demoURL}
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > 
                                        <ExternalLink size ={20}/>
                                    </a>

                                    {project.githubURL && (
                                        <a href={project.githubURL} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size ={20}/>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/rodriberdo96" 
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank" 
                rel="noopener noreferrer"
                >
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>

}