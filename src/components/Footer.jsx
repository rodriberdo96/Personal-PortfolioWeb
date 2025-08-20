import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return <footer className="py-2 px-4 bg-card relative border-t border-border mt-12 pt-3 flex flex-wrap justify-between items-center">
        {" "}
        <p classname= "text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rodri Berdomas — All rights reserved.
        </p>
        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary hover:text-primary-foreground">
            <ArrowUp />
        </a>
    </footer>
}