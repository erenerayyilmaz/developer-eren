
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Outlier AI',
      position: 'AI Training Specialist',
      location: 'Remote',
      period: '2024 - Present',
      description: 'Contributing to AI model training and development. Working on improving AI responses and ensuring quality standards in machine learning applications.',
      technologies: ['AI/ML', 'Data Analysis', 'Quality Assurance', 'Remote Collaboration'],
      type: 'Contract'
    },
    {
      company: 'Aksoy Çözüm LTD. ŞTİ.',
      position: 'Software Developer Intern',
      location: 'Remote',
      period: '2024 (1 Month)',
      description: 'Completed mandatory internship focusing on software development practices. Gained hands-on experience with modern development tools and methodologies.',
      technologies: ['JavaScript', 'HTML/CSS', 'Software Development', 'Project Management'],
      type: 'Internship'
    },
    {
      company: 'Başarı Yapı Denetim',
      position: 'Software Developer Intern',
      location: 'Eskişehir, Turkey',
      period: '2023 (1 Month)',
      description: 'Completed mandatory internship in construction management software systems. Worked on digital solutions for construction oversight and project management.',
      technologies: ['Software Development', 'Construction Management', 'Digital Solutions'],
      type: 'Internship'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-100 text-green-800';
      case 'Internship':
        return 'bg-blue-100 text-blue-800';
      case 'Contract':
        return 'bg-purple-100 text-purple-800';
      case 'Part-time':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Work <span className="text-portfolio-blue">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development through internships and hands-on learning experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-portfolio-blue"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-portfolio-blue rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-portfolio-blue mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-portfolio-blue hover:text-white transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Background Note */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Graduate</h3>
            <p className="text-gray-600 leading-relaxed">
              As a recent Computer Engineering graduate, I am eager to begin my professional career in frontend development. 
              My internships have provided me with valuable hands-on experience and a solid foundation in software development principles.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start My Career</h3>
            <p className="text-blue-100 mb-6">
              I'm actively seeking frontend development opportunities and exciting projects to contribute to.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-portfolio-blue px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Let's Connect <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
