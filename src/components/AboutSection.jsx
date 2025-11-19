import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container max-w-5xl mx-auto ">
                <h2 className="text-3xl  md:text-4xl font-bold text-center mb-12 ">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <img 
                            src="/FotoPersonal.jpeg" 
                            alt="Rodri Berdomas" 
                            className="w-35 h-35 object-cover rounded-full shadow-xl border border-primary/20 mx-auto"
                        />
                        <h3 className="text-2xl font-semibold"> Passionate Web Developer </h3>

                        <p className="text-muted-foreground">With 2 years of experience in web development, I specialize in creating responsive, accesible, 
                            and performant web applications. 
                            My journey began with a fascination for technology and a desire to build interactive experiences.

                        </p>

                        <p className="text-muted-foreground">
                            I have a strong foundation in HTML, CSS, JavaScript, React, and Node, and I'm always eager to learn new technologies and frameworks.
                            My goal is to create user-friendly interfaces that not only look great but also provide a seamless user experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get in Touch
                            </a>
                            <a href="/_Rodrigo Berdomas CV English (8).pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 tansition-colors duration-300">
                                {" "}
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Builds modern, responsive websites that combine clean code, 
                                        intuitive design, and smooth functionality to deliver engaging user experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI / UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Creates intuitive, 
                                        visually appealing interfaces that enhance usability and keep users engaged from the first click.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Performance Optimization</h4>
                                    <p className="text-muted-foreground">
                                        Builds fast-loading, 
                                        efficient websites by improving code, assets, and architecture for a smooth user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}