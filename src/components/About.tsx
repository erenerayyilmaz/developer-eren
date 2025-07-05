
import React from 'react';
import { MapPin, Calendar, User, Award } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Born', value: 'July 20, 2001' },
    { icon: MapPin, label: 'Location', value: 'Yıldırım, Bursa, Turkey' },
    { icon: User, label: 'Status', value: 'Single' },
    { icon: Award, label: 'Driving License', value: 'B Class' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-portfolio-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a Computer Engineering graduate from Eskişehir Technical University, I am passionate about creating 
              innovative software solutions that make a real difference. My journey in technology began with curiosity 
              and has evolved into a deep commitment to frontend development.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I thrive in collaborative environments where I can contribute to meaningful projects while continuously 
              learning and growing. My experience spans from internships at Başarı Yapı Denetim and Aksoy Çözüm, 
              where I gained hands-on experience in software development and project management.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I believe in the power of clean, maintainable code and user-centered design. 
              I'm always eager to take on new challenges and contribute to projects that push the boundaries 
              of what's possible with modern frontend technologies.
            </p>

            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-portfolio-blue">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">{info.label}</span>
                    <p className="font-semibold text-gray-800">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Preview */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Stats</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">Frontend Development</span>
                  <span className="text-portfolio-blue font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-portfolio-blue h-3 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">JavaScript/TypeScript</span>
                  <span className="text-portfolio-blue font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-portfolio-blue h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">React Development</span>
                  <span className="text-portfolio-blue font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-portfolio-blue h-3 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">Problem Solving</span>
                  <span className="text-portfolio-blue font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-portfolio-blue h-3 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-portfolio-blue">4+</div>
                  <div className="text-sm text-gray-600">Years Learning</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-portfolio-blue">10+</div>
                  <div className="text-sm text-gray-600">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
