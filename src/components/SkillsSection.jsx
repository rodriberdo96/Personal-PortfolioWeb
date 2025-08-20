import React, { useState } from 'react';
import { cn } from '../lib/utils';

const skills = [
    //Frontend
    { name: 'HTML/CSS', level: '90', category: 'rontend' },
    { name: 'JavaScript', level: '85', category: 'frontend' },
    { name: 'React', level: '85', category: 'frontend' },
    { name: 'Vue.js', level: '70', category: 'frontend' },
    { name: 'Angular', level: '60', category: 'frontend' },
    { name: 'Bootstrap', level: '80', category: 'frontend' },
    { name: 'Tailwind CSS', level: '80', category: 'frontend' },
    { name: 'Next.js', level: '75', category: 'frontend' },

    //Backend
    { name: 'Node.js', level: '80', category: 'backend' },
    { name: 'Express.js', level: '75', category: 'backend' },
    { name: 'MySQL', level: '80', category: 'backend' },
    { name: 'PostgreSQL', level: '75', category: 'backend' },
    { name: 'MongoDB', level: '80', category: 'backend' },
    { name: 'SQLite', level: '60', category: 'backend' },

    //Tools
    { name: 'Git/Github', level: '85', category: 'tools'},
    { name: 'Docker', level: '75', category: 'tools' },
    { name: 'Figma', level: '80', category: 'tools' },
    { name: 'Visual Studio Code', level: '80', category: 'tools' },
];

const categories =["all", "frontend", "backend", "tools"];
export const SkillsSection = () => {
    const [activeCategory, SetActivecategory] = useState("all");

    const filteredSkills = skills.filter((skill)=> activeCategory === "all" || skill.category === activeCategory);  
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => SetActivecategory(category)}
                            className={ cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                                activeCategory === category
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary/70 text-foreground hover:bd-psecondary'
                            )}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>                                                            </div>
                        <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{ width: `${skill.level}%` }}
                        />
                        </div>
                            <div className="text-right mt-1 ">
                                <span className="text-sm text-muted-foreground">{skill.level}</span>% 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}