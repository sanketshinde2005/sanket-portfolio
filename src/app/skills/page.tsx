import { Code, Server, Database, Brain, Wrench, Globe } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "C++",
        "SQL",
        "HTML/CSS",
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Server className="w-6 h-6" />,
      color: "green",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "Ansible",
        "GitLab CI/CD",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-6 h-6" />,
      color: "purple",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "Django",
        "Flask",
        "Spring Boot",
      ],
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-6 h-6" />,
      color: "orange",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Git",
        "Postman",
        "VS Code",
      ],
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "pink",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "OpenCV",
      ],
    },
    {
      title: "Core Subjects",
      icon: <Wrench className="w-6 h-6" />,
      color: "indigo",
      skills: [
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      pink: "bg-pink-100 text-pink-800 border-pink-200",
      indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600">
            Technical expertise and proficiencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-full ${getIconColorClasses(
                    category.color
                  )}`}
                >
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${getColorClasses(
                      category.color
                    )}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Proficiency Levels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">A</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced</h3>
              <p className="text-sm text-gray-600 mb-3">
                Professional level expertise
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "JavaScript", "React", "AWS", "Docker"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">I</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Intermediate</h3>
              <p className="text-sm text-gray-600 mb-3">
                Solid working knowledge
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Java", "Node.js", "Kubernetes", "ML", "Django"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">B</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Beginner</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learning and exploring
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["C++", "Spring Boot", "Terraform", "PyTorch"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
