import { ExternalLink, Github, Globe } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Wellify",
      description:
        "A comprehensive healthcare management platform that connects patients with healthcare providers, featuring appointment scheduling, medical records management, and telemedicine capabilities.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Stripe API",
      ],
      features: [
        "Real-time appointment booking system",
        "Secure patient data management",
        "Video consultation integration",
        "Payment gateway integration",
        "Doctor dashboard with analytics",
      ],
      githubUrl: "https://github.com/sanketshinde/wellify",
      liveUrl: "https://wellify-demo.vercel.app",
      color: "blue",
    },
    {
      title: "Py-GPT",
      description:
        "An intelligent Python code assistant powered by GPT models, designed to help developers write, debug, and optimize Python code with AI-powered suggestions and explanations.",
      techStack: [
        "Python",
        "OpenAI API",
        "Flask",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Docker",
      ],
      features: [
        "AI-powered code generation and completion",
        "Code explanation and documentation",
        "Bug detection and fixing suggestions",
        "Performance optimization recommendations",
        "Interactive code playground",
      ],
      githubUrl: "https://github.com/sanketshinde/py-gpt",
      liveUrl: "https://py-gpt-demo.vercel.app",
      color: "green",
    },
    {
      title: "NexJob",
      description:
        "A modern job portal platform that streamlines the hiring process for both job seekers and employers, featuring AI-powered job matching and comprehensive applicant tracking.",
      techStack: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "NextAuth.js",
        "Tailwind CSS",
        "Vercel",
      ],
      features: [
        "AI-powered job recommendation system",
        "Advanced search and filtering options",
        "Applicant tracking system (ATS)",
        "Real-time notifications",
        "Company profiles and reviews",
      ],
      githubUrl: "https://github.com/sanketshinde/nexjob",
      liveUrl: "https://nexjob-demo.vercel.app",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        tag: "bg-blue-100 text-blue-800",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        tag: "bg-green-100 text-green-800",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        tag: "bg-purple-100 text-purple-800",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-600">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={project.title}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 ${colors.border}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8 sm:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h2 className={`text-3xl font-bold ${colors.text}`}>
                          {project.title}
                        </h2>
                        <div className="flex gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <Github className="w-5 h-5 text-gray-700" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5 text-gray-700" />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Key Features:
                        </h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3"
                            >
                              <div
                                className={`w-2 h-2 ${colors.text.replace(
                                  "text-",
                                  "bg-"
                                )} rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Tech Stack:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${colors.tag}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 ${colors.button} text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <Globe className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>

                    <div
                      className={`lg:w-80 ${colors.bg} rounded-xl p-6 border ${colors.border}`}
                    >
                      <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center mb-4">
                        <div className="text-center">
                          <div
                            className={`w-16 h-16 ${colors.text.replace(
                              "text-",
                              "bg-"
                            )} rounded-full flex items-center justify-center mx-auto mb-2 opacity-20`}
                          >
                            <Globe className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-gray-500 text-sm">
                            Project Preview
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className={`font-semibold ${colors.text} mb-2`}>
                          {project.title}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Click the links above to explore the project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
