import React from "react";
import {
  BookOpen,
  Award,
  Code,
  Briefcase,
  School,
  Star,
  Rocket,
  Coffee,
  Globe,
  Zap,
} from "lucide-react";

// Common Timeline component that can be used for both education and experience
const Timeline = ({ items, title, gradientColors }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-transparent rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-500">
        {title}
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b"
          style={{
            background: `linear-gradient(to bottom, ${gradientColors.from}, ${gradientColors.to})`,
          }}
        ></div>

        {/* Timeline items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              {/* Icon circle */}
              <div
                className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full shadow-md"
                style={{
                  background: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`,
                }}
              >
                {item.icon}
              </div>

              {/* Card */}
              <div className="ml-4 bg-transparent rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-500">
                    {item.date}
                  </p>
                  <p className="font-bold text-[#f8fafc]">{item.title}</p>
                  <p className="text-sm text-[#84858E]">{item.description}</p>
                  <p
                    className="text-sm font-medium mt-1"
                    style={{ color: gradientColors.from }}
                  >
                    {item.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Education Component
export const Education = () => {
  const educationItems = [
    {
      icon: <School className="h-5 w-5 text-white" />,
      date: "2018 - 2020",
      title: "Master's in Computer Science",
      description: "Stanford University, Palo Alto, CA",
      highlight: "Specialized in AI and Machine Learning",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-white" />,
      date: "2014 - 2018",
      title: "Bachelor's in Software Engineering",
      description: "MIT, Cambridge, MA",
      highlight: "Graduated with honors",
    },
    {
      icon: <Code className="h-5 w-5 text-white" />,
      date: "2017",
      title: "Full-Stack Development Certification",
      description: "Udacity, Online Program",
      highlight: "JavaScript & React Specialization",
    },
  ];

  return (
    <Timeline
      items={educationItems}
      title="Education"
      gradientColors={{ from: "#3b82f6", to: "#4f46e5" }}
    />
  );
};

// Experience Component
export const Experience = () => {
  const experienceItems = [
    {
      icon: <Briefcase className="h-5 w-5 text-white" />,
      date: "2020 - Present",
      title: "Senior Software Engineer",
      description: "Amazon, Seattle, WA",
      highlight: "Leading backend development for AWS services",
    },
    {
      icon: <Rocket className="h-5 w-5 text-white" />,
      date: "2018 - 2020",
      title: "Full Stack Developer",
      description: "Netflix, Los Gatos, CA",
      highlight: "Optimized recommendation algorithms",
    },
    {
      icon: <Star className="h-5 w-5 text-white" />,
      date: "Summer 2017",
      title: "Software Engineering Intern",
      description: "Google, Mountain View, CA",
      highlight: "Android development team",
    },
  ];

  return (
    <Timeline
      items={experienceItems}
      title="Experience"
      gradientColors={{ from: "#10b981", to: "#059669" }}
    />
  );
};

// Training Component
export const Training = () => {
  const trainingItems = [
    {
      icon: <Award className="h-5 w-5 text-white" />,
      date: "2019",
      title: "Machine Learning Specialization",
      description: "Coursera, Online Program",
      highlight: "Completed with distinction",
    },
    {
      icon: <Coffee className="h-5 w-5 text-white" />,
      date: "2018",
      title: "Data Science Bootcamp",
      description: "DataCamp, Online Program",
      highlight: "Python, R & SQL mastery",
    },
    {
      icon: <Globe className="h-5 w-5 text-white" />,
      date: "2016",
      title: "Cloud Computing Certificate",
      description: "AWS Training, Online",
      highlight: "AWS Solutions Architect certification",
    },
  ];

  return (
    <Timeline
      items={trainingItems}
      title="Training & Certifications"
      gradientColors={{ from: "#f59e0b", to: "#d97706" }}
    />
  );
};

// Main component that combines all sections

// export { Education, Experience, Training };

