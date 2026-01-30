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
      title: "Frameworks, Libraries & Platforms",
      icon: <Code className="w-6 h-6" />,
      color: "purple",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "Refine",
        "Flask",
        "Ant Design",
        "Tailwind CSS",
        "Linux",
        "Unix",
      ],
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
        "NLP",
        "PCA & LDA",
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
      title: "Introduction to Generative AI Concepts",
      issuer: "Microsoft",
      date: "September 2025",
      credentialId: "CLF-C01-2024-09-20",
      description:
        "Learned about Generative AI concepts, including large language models (LLMs), small language models (SLMs) & their applications, and ethical considerations.",
      skills: [
        "LLM",
        "SLM",
        "Generative AI Applications",
        "Prompt Engineering",
      ],
      certificateUrl:
        "https://drive.google.com/file/d/1NiasNfFHJSlRJoiVJWIV0FdXucGLsqCa/view?usp=drive_link",
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
    const colorMap: Record<string, string> = {
      blue: "bg-primary/10 text-primary border-primary/20",
      green: "bg-secondary/10 text-secondary border-secondary/20",
      purple: "bg-accent/10 text-accent border-accent/20",
      orange: "bg-primary/10 text-primary border-primary/20",
      pink: "bg-secondary/10 text-secondary border-secondary/20",
      indigo: "bg-accent/10 text-accent border-accent/20",
      gold: "bg-primary/10 text-primary border-primary/20",
      silver: "bg-secondary/10 text-secondary border-secondary/20",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-bg text-text transition-colors duration-300">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-bg via-primary/5 to-bg flex items-center justify-center pt-16"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center py-20">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text mb-4 animate-fade-in tracking-tight">
              Sanket Shinde
            </h1>
            <p className="text-lg sm:text-2xl text-primary font-medium mb-6 animate-fade-in-delay-1">
              Software Engineering Student
            </p>
            <p className="text-lg sm:text-1xl text-primary font-medium mb-6 animate-fade-in-delay-1">
              Upcoming Summer&apos;26 Intern @Barclays
            </p>
            <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
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

          <div className="mb-12 animate-fade-in-delay-3">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-3 text-muted group">
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 9156857062</span>
              </div>
              <div className="flex items-center gap-3 text-muted group">
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span>sanketshinde1827@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted group">
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="https://www.linkedin.com/in/sanket-shinde-067650288/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-bg px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sanketshinde2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-surface text-text border border-border px-6 py-3 rounded-xl font-medium hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://leetcode.com/u/sanket_shinde_1310/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
              >
                <Code className="w-5 h-5" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Education
            </h2>
            <p className="text-lg sm:text-xl text-muted">
              My academic journey and achievements.
            </p>
          </div>

          <div className="soft-card rounded-2xl p-6 sm:p-8 lg:p-12 hover-lift transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="bg-primary/10 p-4 rounded-full border border-primary/20 mx-auto sm:mx-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-text mb-2">
                  Bachelor of Engineering (IT)
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-4">
                  Information Technology
                </h4>
                <p className="text-lg text-muted mb-4">
                  Pune Institute of Computer Technology (PICT)
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-muted" />
                    <span className="text-text">2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-text">
                      CGPA: <strong className="text-secondary">9.72</strong>
                    </span>
                  </div>
                </div>
                <div className="bg-bg/50 rounded-lg p-4 sm:p-6 border border-border">
                  <h5 className="font-semibold text-text mb-3">
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
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted text-sm sm:text-base">
                          {course}
                        </span>
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
      <section id="experience" className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Experience
            </h2>
            <p className="text-lg sm:text-xl text-muted">
              Professional journey and contributions.
            </p>
          </div>
          <div className="space-y-8">
            <div className="soft-card rounded-2xl p-6 sm:p-8 hover-lift transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full border border-primary/20 mx-auto sm:mx-0">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
                        Platform Engineering Intern
                      </h3>
                      <h4 className="text-lg sm:text-xl text-primary font-semibold mb-2 sm:mb-0">
                        Lightbeam.ai
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 text-sm sm:text-base">
                      <div className="flex items-center gap-2 text-muted">
                        <Calendar className="w-4 h-4" />
                        <span>April 2025 - Present</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted">
                        <MapPin className="w-4 h-4" />
                        <span>Hybrid</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h5 className="font-semibold text-text mb-3">
                      Key Contributions:
                    </h5>
                    <ul className="space-y-3">
                      {[
                        "Developed & maintained CI/CD pipelines using Jenkins & GitLab CI, reducing deployment time by 20%",
                        "Implemented infrastructure as code using Terraform and GKE for AWS cloud resources",
                        "Containerized applications using Docker and orchestrated with Kubernetes, improving scalability",
                        "Set up monitoring and managment systems using Teleport for resource accessing in environments",
                        "Collaborated with development teams to optimize application performance and reliability",
                      ].map((contribution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted">{contribution}</span>
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
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="soft-card rounded-2xl p-6 sm:p-8 hover-lift transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-secondary/10 p-4 rounded-full border border-secondary/20 mx-auto sm:mx-0">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
                        Workday HCM + VNDLY Training
                      </h3>
                      <h4 className="text-lg sm:text-xl text-secondary font-semibold mb-2 sm:mb-0">
                        Lightbeam.ai
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 text-sm sm:text-base">
                      <div className="flex items-center gap-2 text-muted">
                        <Calendar className="w-4 h-4" />
                        <span>May 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted">
                        <MapPin className="w-4 h-4" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h5 className="font-semibold text-text mb-3">
                      Training Highlights:
                    </h5>
                    <ul className="space-y-3">
                      {[
                        "Completed comprehensive training on Workday HCM modules including Core HCM, Recruiting, etc.",
                        "Gained expertise in VNDLY (Vendor Management System) for contingent workforce management",
                        "Learned integration patterns between Workday and third-party systems using APIs and web services",
                        "Developed skills in report building, calculated fields, and business process configuration",
                      ].map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted">{highlight}</span>
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
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium border border-secondary/20"
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
      <section id="skills" className="py-16 sm:py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-muted">
              My technical expertise and proficiencies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="soft-card rounded-2xl p-6 sm:p-8 hover-lift transition-all duration-300"
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
                  <h3 className="text-xl sm:text-2xl font-bold text-text">
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
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Projects
            </h2>
            <p className="text-lg sm:text-xl text-muted">
              Showcasing innovative solutions and technical expertise.
            </p>
          </div>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="soft-card rounded-2xl overflow-hidden hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-text text-base sm:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-text mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-8">
                    <h4 className="font-semibold text-text mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
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
                      className="flex items-center gap-2 bg-primary text-bg px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-surface text-text border border-border px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl hover:bg-card transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding bg-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Certificates
            </h2>
            <p className="text-lg sm:text-xl text-muted">
              Professional certifications and achievements.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="soft-card rounded-2xl overflow-hidden hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-primary/10 p-4 rounded-full border border-primary/20 flex-shrink-0">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-text mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-primary mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-muted mb-4 text-sm sm:text-base">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-text leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-text mb-3">
                      Skills Validated:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted">Credential ID:</p>
                        <p className="font-mono text-xs sm:text-sm text-text">
                          {cert.credentialId}
                        </p>
                      </div>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-2 bg-primary text-bg px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:bg-primary/90"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Verify</span>
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
      <section id="achievements" className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Achievements
            </h2>
            <p className="text-lg sm:text-xl text-muted">
              Hackathon wins, awards, and recognitions.
            </p>
          </div>
          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <div
                key={hackathon.title}
                className="soft-card rounded-2xl overflow-hidden hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                    <div className="bg-accent/10 p-4 rounded-full border border-accent/20 flex-shrink-0 mx-auto sm:mx-0">
                      <Trophy className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="mb-4 sm:mb-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-text mb-2">
                            {hackathon.title}
                          </h3>
                          <p className="text-lg font-semibold text-accent mb-1">
                            {hackathon.position}
                          </p>
                          <p className="text-muted">{hackathon.category}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="flex items-center gap-2 text-muted mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{hackathon.date}</span>
                          </div>
                          <div className="text-xl sm:text-2xl font-bold text-accent">
                            {hackathon.prize}
                          </div>
                        </div>
                      </div>
                      <p className="text-text leading-relaxed mb-6">
                        {hackathon.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {hackathon.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-surface text-muted px-2 py-1 rounded text-sm border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={hackathon.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
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
      <section id="extra-curricular" className="section-padding bg-surface/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Extra-Curricular Activities
            </h2>
            <p className="text-lg sm:text-xl text-muted">
              Leadership, competitions, and community involvement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "📢",
                title: "Public Relations Lead",
                org: "PICT Robotics",
                date: "December 2024 - Present",
                desc: "Leading PR initiatives, managing social media, and coordinating sponsorships.",
              },
              {
                icon: "🧑‍🎓 ",
                title: "Class Representative",
                org: "IT Department",
                date: "July 2024 - Present",
                desc: "Representing my class and coordinating with faculty for the well-being of students.",
              },
              {
                icon: "🧩",
                title: "AIR 3 - Crossword Competition",
                org: "National Championship",
                date: "March 2021",
                desc: "Achieved 3rd position nationally, demonstrating strong vocabulary and problem-solving skills.",
              },
              {
                icon: "❤️",
                title: "Community Volunteer",
                org: "Multiple Organizations",
                date: "2023 - Present",
                desc: "Active volunteer in drives for various social and noble causes.",
              },
            ].map((activity) => (
              <div
                key={activity.title}
                className="soft-card rounded-xl p-6 hover-lift transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-text mb-1">
                      {activity.title}
                    </h4>
                    <p className="text-primary font-semibold mb-2">
                      {activity.org}
                    </p>
                    <div className="flex items-center gap-2 text-muted mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{activity.date}</span>
                    </div>
                    <p className="text-text text-sm leading-relaxed">
                      {activity.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="soft-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text mb-8 text-center">
              Activity Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  value: "2+",
                  label: "Leadership Roles",
                  color: "blue",
                },
                {
                  icon: <Trophy className="w-8 h-8 text-accent" />,
                  value: "5+",
                  label: "Prizes Won",
                  color: "yellow",
                },
                {
                  icon: <Star className="w-8 h-8 text-secondary" />,
                  value: "3",
                  label: "Sports Activities",
                  color: "green",
                },
                {
                  icon: <Heart className="w-8 h-8 text-primary" />,
                  value: "25+",
                  label: "Tech Stacks Explored",
                  color: "red",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`w-16 h-16 bg-${
                      stat.color === "blue" || stat.color === "red"
                        ? "primary"
                        : stat.color === "yellow"
                        ? "accent"
                        : "secondary"
                    }/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-${
                      stat.color === "blue" || stat.color === "red"
                        ? "primary"
                        : stat.color === "yellow"
                        ? "accent"
                        : "secondary"
                    }/20`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/sanket-shinde-067650288/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/sanketshinde2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/sanket_shinde_1310/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Code className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted">
            © 2025 Sanket Shinde. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
