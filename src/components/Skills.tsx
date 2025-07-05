import React from 'react';
import { Code, Database, Globe, Wrench, Users, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Globe,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 75 },
        { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 70 },
        { name: 'Python', level: 65 },
        { name: 'C++', level: 60 },
        { name: 'SQL', level: 70 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'npm/yarn', level: 75 },
        { name: 'Webpack', level: 60 },
        { name: 'Chrome DevTools', level: 85 },
        { name: 'Figma', level: 70 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 85 },
        { name: 'Adaptability', level: 90 },
        { name: 'Time Management', level: 80 },
        { name: 'Critical Thinking', level: 85 }
      ]
    }
  ];

  const languages = [
    { name: 'Turkish', level: 'Native', percentage: 100 },
    { name: 'English', level: 'Advanced', percentage: 85 },
    { name: 'French', level: 'Beginner', percentage: 30 }
  ];

  const hobbies = [
    { name: 'Table Tennis', icon: '🏓' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Reading', icon: '📚' },
    { name: 'Anime', icon: '🎌' },
    { name: 'Music', icon: '🎵' },
    { name: 'Cinema', icon: '🎬' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Skills & <span className="text-portfolio-blue">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills with a focus on frontend development
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-portfolio-blue/10 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-portfolio-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-portfolio-purple/10 rounded-lg mr-4">
              <Globe className="w-6 h-6 text-portfolio-purple" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Languages</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="text-portfolio-purple"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${lang.percentage}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-800">{lang.percentage}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800">{lang.name}</h4>
                <p className="text-sm text-gray-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <Brain className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Hobbies & Interests</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hobbies.map((hobby, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-portfolio-blue/5 transition-colors duration-200">
                <div className="text-3xl mb-2">{hobby.icon}</div>
                <span className="text-sm font-medium text-gray-700">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
