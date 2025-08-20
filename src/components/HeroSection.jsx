import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative flex min-h-screen  flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto  text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Rodrigo 
                            </span>
                        <span className="text-gradient ml2 opacity-0 animate-fade-in-delay-2 ">
                            {" "}
                            Berdomas
                            </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Front End Developer turning ideas into smooth, interactive websites.
                        Let’s build something awesome — let’s connect!
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View my work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-6 w-6 text-primary " />
            </div>
        </section>
    )
}