
import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Computer Engineering',
    university: 'Eskişehir Technical University',
    location: 'Eskişehir, Turkey',
    period: '2020 - 2025',
    gpa: '2.43/4.0',
    status: 'Graduate'
  };

  const certificates = [
    {
      title: 'Frontend Development Bootcamp',
      issuer: 'Various Online Platforms',
      year: '2024',
      description: 'Comprehensive training in modern frontend technologies and frameworks.',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Responsive Design']
    },
    {
      title: 'JavaScript Fundamentals',
      issuer: 'Online Learning Platform',
      year: '2023',
      description: 'In-depth study of JavaScript programming language and ES6+ features.',
      skills: ['JavaScript', 'ES6+', 'DOM Manipulation', 'Async Programming']
    },
    {
      title: 'Web Development Fundamentals',
      issuer: 'University Coursework',
      year: '2023',
      description: 'Foundation course covering basic web development concepts and technologies.',
      skills: ['HTML', 'CSS', 'Basic JavaScript', 'Web Design']
    }
  ];

  const relevantCourses = [
    'Data Structures & Algorithms',
    'Software Engineering',
    'Database Management Systems',
    'Web Programming',
    'Object-Oriented Programming',
    'Computer Networks',
    'Operating Systems',
    'Software Project Management',
    'Human-Computer Interaction',
    'Frontend Development'
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education & <span className="text-portfolio-blue">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and continuous learning journey in computer engineering and frontend development
          </p>
        </div>

        {/* University Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple p-8 rounded-2xl text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start mb-4 md:mb-0">
                <div className="p-3 bg-white/20 rounded-lg mr-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                  <h4 className="text-xl text-blue-100 mb-3">{education.university}</h4>
                  <div className="flex flex-wrap gap-4 text-blue-50">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/20 px-4 py-2 rounded-lg mb-2">
                  <span className="text-sm text-blue-100">GPA</span>
                  <div className="text-2xl font-bold">{education.gpa}</div>
                </div>
                <span className="text-sm text-blue-100">{education.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Relevant Coursework</h3>
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {relevantCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Additional Learning & Certificates</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-portfolio-blue/10 rounded-lg mr-3 mt-1">
                      <Award className="w-5 h-5 text-portfolio-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-portfolio-blue font-semibold mb-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {cert.year}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Academic Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-portfolio-blue mb-2">5</div>
                <div className="text-sm text-gray-600">Years of Study</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-portfolio-blue mb-2">2</div>
                <div className="text-sm text-gray-600">Internships Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-portfolio-blue mb-2">10+</div>
                <div className="text-sm text-gray-600">Relevant Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-portfolio-blue mb-2">2.43</div>
                <div className="text-sm text-gray-600">Final GPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
