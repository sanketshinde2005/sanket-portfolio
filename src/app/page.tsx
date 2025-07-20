import {
  Github,
  Linkedin,
  Code,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  Award,
  Briefcase,
  Users,
  Star,
  Trophy,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: [
        "C++",
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "HTML/CSS",
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Code className="w-6 h-6" />,
      color: "green",
      skills: [
        "AWS",
        "Docker",
        "Helm",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "GKE",
        "CI/CD",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Code className="w-6 h-6" />,
      color: "purple",
      skills: ["React", "Next.js", "Node.js", "Express.js", "Refine", "Flask"],
    },
    {
      title: "Databases & Tools",
      icon: <Code className="w-6 h-6" />,
      color: "orange",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Postman", "VS Code"],
    },
    {
      title: "Machine Learning",
      icon: <Code className="w-6 h-6" />,
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
      icon: <Code className="w-6 h-6" />,
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
      githubUrl: "https://github.com/sanketshinde2005/Wellify",
      liveUrl: "",
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
      githubUrl: "https://github.com/sanketshinde2005/Py-GPT",
      liveUrl: "",
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
      githubUrl: "https://github.com/Rishabh-0615/NeXJob",
      liveUrl: "https://nexjob-1ioj.onrender.com/",
      color: "purple",
    },
  ];

  const certificates = [
    {
      title: "Microsoft Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "May 2025",
      credentialId: "DP-900-2024-10-15",
      description:
        "Demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.",
      skills: [
        "Azure Data Services",
        "Data Storage",
        "Data Processing",
        "Data Analytics",
        "Data Visualization",
      ],
      certificateUrl:
        "https://drive.google.com/file/d/1SM0Uu-jQS8WkCmNFIkrzvC9lHPM16Qil/view?usp=drive_link",
      color: "blue",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "September 2024",
      credentialId: "CLF-C01-2024-09-20",
      description:
        "Validated overall understanding of the AWS Cloud, including basic global infrastructure, billing, and pricing.",
      skills: [
        "AWS Core Services",
        "Cloud Computing",
        "Security",
        "Billing & Pricing",
        "Support",
      ],
      certificateUrl: "https://aws.amazon.com/verification/sanket-shinde-clf",
      color: "orange",
    },
  ];

  const hackathons = [
    {
      title: "COEP - Inspiron 2025",
      position: "2nd Place - Runner Up",
      date: "March 2025",
      category: "Web Development",
      description:
        "Created a real-time job portal for recruiters and job seekers, featuring integrated interviews and code editor support.Implemented live code execution and secure meeting rooms with role-based access control.",
      teamSize: 4,
      prize: "Best - UI Award",
      technologies: [
        "React",
        "Monaco Plugins",
        "Jitsi Meet",
        "Node.js",
        "MongoDB",
      ],
      certificateUrl:
        "https://drive.google.com/drive/folders/1UXstlEdgYrgot4tRpqsqUUiNuj8Uec-x?usp=drive_link",
      color: "gold",
    },
    {
      title: "AIT's Innerve 2025",
      position: "Finalists",
      date: "February 2025",
      category: "Machine Learning",
      description:
        "Created a Machine Learning advanced model to detect the progress and status of road constuctions by satellite images of roads.",
      teamSize: 4,
      prize: "National Top 30",
      technologies: ["Web3.js", "React", "Node.js", "Machine Learning"],
      certificateUrl:
        "https://drive.google.com/file/d/1UQYMAZ8ibAvsLirijNRF1QEGrcDFl6sc/view?usp=drive_link",
      color: "silver",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      green: "bg-green-500/20 text-green-300 border-green-500/30",
      purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      orange: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      pink: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      indigo: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      gold: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      silver: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 flex items-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              Sanket Shinde
            </h1>
            <p className="text-xl sm:text-2xl text-blue-400 font-medium mb-6 animate-fade-in-delay-1">
              Software Engineering Student
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
              Hello everyone, I am Sanket Shinde. I am an Engineering
              Undergraduate specializing in Information Technology at Pune
              Institute of Computer Technology. A strong academic performer,
              also deeply passionate about Data Structures and Algorithms (DSA)
              and continuously improving my skills in web development. I am also
              keenly exploring the fields of Artificial Intelligence and Machine
              Learning (AI/ML), along with a growing interest in DevOps and
              cloud-native technologies. Always eager to learn and take on new
              challenges, I aim to build impactful tech solutions and grow as a
              well-rounded developer.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12 animate-fade-in-delay-3">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 9156857062</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>sanketshinde1827@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/sanket-shinde-067650288/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sanketshinde2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://leetcode.com/u/sanket_shinde_1310/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Code className="w-5 h-5" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Education
            </h2>
            <p className="text-xl text-gray-400">
              Academic journey and achievements
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-12 hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-blue-500/20 p-4 rounded-full border border-blue-500/30">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Bachelor of Engineering (IT)
                </h3>
                <h4 className="text-xl text-blue-400 font-semibold mb-4">
                  Information Technology
                </h4>
                <p className="text-lg text-gray-300 mb-4">
                  Pune Institute of Computer Technology (PICT)
                </p>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      CGPA: <strong className="text-green-400">9.72</strong>
                    </span>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                  <h5 className="font-semibold text-white mb-3">
                    Key Coursework
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Data Structures & Algorithms",
                      "Database Management Systems",
                      "Computer Networks",
                      "Operating Systems",
                      "Software Engineering",
                      "Machine Learning",
                      "Web Technologies",
                      "Cloud Computing",
                    ].map((course) => (
                      <div key={course} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Experience
            </h2>
            <p className="text-xl text-gray-400">
              Professional journey and contributions
            </p>
          </div>

          <div className="space-y-8">
            {/* Platform Engineering Internship */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
              <div className="flex items-start gap-6">
                <div className="bg-blue-500/20 p-4 rounded-full border border-blue-500/30">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Platform Engineering Intern
                      </h3>
                      <h4 className="text-xl text-blue-400 font-semibold mb-2">
                        Lightbeam.ai
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>April 2025 - Present</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>Hybrid</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-white mb-3">
                      Key Contributions:
                    </h5>
                    <ul className="space-y-3">
                      {[
                        "Developed and maintained CI/CD pipelines using Jenkins and GitLab CI, reducing deployment time by 20%",
                        "Implemented infrastructure as code using Terraform and GKE for AWS cloud resources",
                        "Containerized applications using Docker and orchestrated with Kubernetes, improving scalability",
                        "Set up monitoring and managment systems using Teleport for resource accessing in environments",
                        "Collaborated with development teams to optimize application performance and reliability",
                      ].map((contribution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "AWS",
                      "Docker",
                      "Kubernetes",
                      "Terraform",
                      "Jenkins",
                      "GKE",
                      "Helm",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Workday Training */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
              <div className="flex items-start gap-6">
                <div className="bg-green-500/20 p-4 rounded-full border border-green-500/30">
                  <Briefcase className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Workday HCM + VNDLY Training
                      </h3>
                      <h4 className="text-xl text-green-400 font-semibold mb-2">
                        Lightbeam.ai
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>March 2024 - May 2024</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-white mb-3">
                      Training Highlights:
                    </h5>
                    <ul className="space-y-3">
                      {[
                        "Completed comprehensive training on Workday HCM modules including Core HCM, Recruiting, and Talent Management",
                        "Gained expertise in VNDLY (Vendor Management System) for contingent workforce management",
                        "Learned integration patterns between Workday and third-party systems using APIs and web services",
                        "Developed skills in report building, calculated fields, and business process configuration",
                      ].map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Workday HCM",
                      "VNDLY",
                      "API Integration",
                      "Business Process",
                      "Reporting",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30"
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400">
              Technical expertise and proficiencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-full ${getColorClasses(
                      category.color
                    )}`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Projects
            </h2>
            <p className="text-xl text-gray-400">
              Showcasing innovative solutions and technical expertise
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8 sm:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold text-blue-400">
                          {project.title}
                        </h3>
                        <div className="flex gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            <Github className="w-5 h-5 text-gray-300" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5 text-gray-300" />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-semibold text-white mb-3">
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
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
                          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Certificates
            </h2>
            <p className="text-xl text-gray-400">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-blue-500/20 p-4 rounded-full border border-blue-500/30 flex-shrink-0">
                      <Award className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-lg font-semibold text-blue-400 mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">
                      Skills Validated:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Credential ID:</p>
                        <p className="font-mono text-sm text-gray-300">
                          {cert.credentialId}
                        </p>
                      </div>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Verify Certificate</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Achievements
            </h2>
            <p className="text-xl text-gray-400">
              Hackathon wins, awards, and recognitions
            </p>
          </div>

          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <div
                key={hackathon.title}
                className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-yellow-500/20 p-4 rounded-full border border-yellow-500/30 flex-shrink-0">
                      <Trophy className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {hackathon.title}
                          </h3>
                          <p className="text-lg font-semibold text-yellow-400 mb-1">
                            {hackathon.position}
                          </p>
                          <p className="text-gray-400">{hackathon.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{hackathon.date}</span>
                          </div>
                          <div className="text-2xl font-bold text-yellow-400">
                            {hackathon.prize}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {hackathon.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="w-5 h-5 text-gray-400" />
                            <span className="font-semibold text-white">
                              Team Size:
                            </span>
                          </div>
                          <p className="text-gray-300">
                            {hackathon.teamSize} members
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {hackathon.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <a
                        href={hackathon.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Certificate</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-Curricular Section */}
      <section id="extra-curricular" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Extra-Curricular Activities
            </h2>
            <p className="text-xl text-gray-400">
              Leadership, sports, competitions, and community involvement
            </p>
          </div>

          {/* Leadership Roles */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-400" />
              Leadership Roles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📢</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      Public Relations Lead
                    </h4>
                    <p className="text-blue-400 font-semibold mb-2">
                      PICT Robotics
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">December 2024 - Present</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Leading PR initiatives, managing social media presence,
                      and coordinating with external organizations for
                      sponsorships and collaborations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏏</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      Class Representative
                    </h4>
                    <p className="text-green-400 font-semibold mb-2">
                      Information Technology Department
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">2024 - Present</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Representing my class in college committee meet and
                      sharing valuable coordinations with technincal staff for
                      well being of class.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🧩</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      AIR 3 - Crossword Competition
                    </h4>
                    <p className="text-yellow-400 font-semibold mb-2">
                      National Championship
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">March 2024</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Achieved 3rd position nationally in the annual crossword
                      competition, demonstrating strong vocabulary and
                      problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">❤️</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      Community Volunteer
                    </h4>
                    <p className="text-red-400 font-semibold mb-2">
                      Multiple Organizations
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">2023 - Present</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Active volunteer in voluntering drives for various needs
                      and nobel causes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Activity Summary
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">2+</div>
                <p className="text-gray-400">Leadership Roles</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <p className="text-gray-400">Prizes Won</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <Star className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <p className="text-gray-400">Sports Activities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <Heart className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <p className="text-gray-400">Tech Stacks explored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/sanket-shinde-067650288/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/sanketshinde2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/sanket_shinde_1310/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              <Code className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Sanket Shinde. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
