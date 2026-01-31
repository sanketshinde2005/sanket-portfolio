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
import TechStackIcons from "@/components/tech-stack-icons";
import SkillsSection from "@/components/skills-section";
import HeroBackgroundWrapper from "@/components/hero-background-wrapper";

export default function HomePage() {
  const projects = [
    {
      title: "SkillSwap",
      description:
        "SkillSwap is a student-driven platform where learners exchange skills, collaborate on real knowledge, and grow together.",
      techStack: [
        "Spring Boot",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Tailwind CSS",
        "Docker",
      ],
      features: [
        "AI-powered skill matching system",
        "Real-time collaboration tools",
        "Progress tracking and badges",
        "Community discussion forums",
        "Skill verification system",
      ],
      githubUrl: "https://github.com/sanketshinde2005/SkillSwap",
      liveUrl: "https://skillswap-sigma-swart.vercel.app/",
      color: "red",
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
        "FastAPI",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Docker",
        "OpenAI API",
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
        "Created a real-time job portal for recruiters and job seekers, featuring integrated interviews and code editor support. Implemented live code execution and secure meeting rooms with role-based access control.",
      teamSize: 4,
      prize: "Best - UI Award",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "WebSockets",
        "Monaco Editor",
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
        "Created a Machine Learning advanced model to detect the progress and status of road constructions by satellite images of roads.",
      teamSize: 4,
      prize: "National Top 30",
      technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Flask"],
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
      orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      pink: "bg-pink-500/10 text-pink-500 border-pink-500/20",
      indigo: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
      gold: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      silver: "bg-gray-400/10 text-gray-400 border-gray-400/20",
      red: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-bg text-text transition-colors duration-300">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[90vh] sm:min-h-screen relative flex items-center justify-center pt-32 pb-20 sm:pt-24 sm:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-primary/5 to-bg -z-10" />

        {/* Mobile Fallback - Soft Radial Glow */}
        <div className="absolute inset-0 flex items-center justify-center md:hidden -z-10 opacity-40 mix-blend-plus-lighter pointer-events-none">
          <div className="w-64 h-64 bg-primary/30 rounded-full blur-[80px] animate-pulse-slow" />
          <div className="absolute w-48 h-48 bg-secondary/30 rounded-full blur-[60px] translate-x-10 translate-y-10 animate-pulse-slow delay-700" />
        </div>

        {/* Optimized Background - Desktop Only */}
        <HeroBackgroundWrapper />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center relative z-10">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-text mb-4 animate-fade-in tracking-tight">
              Sanket Shinde
            </h1>
            <p className="text-xl sm:text-2xl text-primary font-medium mb-3 sm:mb-6 animate-fade-in-delay-1">
              Software Engineering Student
            </p>
            <p className="text-lg sm:text-xl text-primary/80 font-medium mb-6 animate-fade-in-delay-1">
              Upcoming Summer&apos;26 Intern @Barclays
            </p>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2 px-4 sm:px-0">
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
      <section id="education" className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-16">
            {/* Left Column - Sticky Headline */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-text">
                  Education
                </h2>
              </div>
              <p className="text-lg text-muted mb-8 text-balance">
                My academic journey has been driven by a passion for computer
                science and a commitment to excellence.
              </p>

              <div className="hidden lg:block space-y-4">
                <div className="flex items-center gap-3 text-text/80">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>2023 - Present</span>
                </div>
                <div className="flex items-center gap-3 text-text/80">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Pune, India</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-8">
              <div className="soft-card rounded-2xl p-6 sm:p-10 hover-lift transition-all duration-300 border-l-4 border-l-primary">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-text mb-2">
                    Bachelor of Engineering
                  </h3>
                  <h4 className="text-xl text-primary font-semibold mb-4">
                    Information Technology
                  </h4>
                  <p className="text-lg text-text font-medium mb-2">
                    Pune Institute of Computer Technology (PICT)
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4 lg:hidden">
                    <span className="flex items-center gap-2 text-sm text-muted">
                      <Calendar className="w-4 h-4" /> 2023 - Present
                    </span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg border border-secondary/20">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-text font-medium">
                      CGPA: <strong className="text-secondary">9.72</strong>
                    </span>
                  </div>
                </div>

                <div className="bg-surface/50 rounded-xl p-6 border border-border">
                  <h5 className="font-semibold text-text mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Key Coursework
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted text-sm sm:text-base hover:text-text transition-colors">
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
      <section id="experience" className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-16">
            {/* Left Column - Sticky Headline */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-text">
                  Experience
                </h2>
              </div>
              <p className="text-lg text-muted mb-8 text-balance">
                Professional journey, key contributions, and industry exposure.
              </p>
            </div>

            {/* Right Column - Timeline Cards */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Role 1 */}
              <div className="group relative pl-8 border-l-2 border-border/50 hover:border-primary/50 transition-colors duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-bg transition-transform group-hover:scale-110" />

                <div className="soft-card rounded-2xl p-6 sm:p-8 hover-lift transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
                        Platform Engineering Intern
                      </h3>
                      <h4 className="text-lg sm:text-xl text-primary font-semibold">
                        Lightbeam.ai
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-muted mt-2 sm:mt-0">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> April 2025 - Present
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Hybrid
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h5 className="font-semibold text-text border-b border-border/50 pb-2 inline-block">
                      Key Contributions
                    </h5>
                    <ul className="space-y-3">
                      {[
                        "Developed & maintained CI/CD pipelines using Jenkins & GitLab CI, reducing deployment time by 20%",
                        "Implemented infrastructure as code using Terraform and GKE for AWS cloud resources",
                        "Containerized applications using Docker and orchestrated with Kubernetes, improving scalability",
                        "Set up monitoring and management systems using Teleport for resource accessing in environments",
                        "Collaborated with development teams to optimize application performance and reliability",
                      ].map((contribution, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{contribution}</span>
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
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Role 2 */}
              <div className="group relative pl-8 border-l-2 border-border/50 hover:border-secondary/50 transition-colors duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-bg transition-transform group-hover:scale-110" />

                <div className="soft-card rounded-2xl p-6 sm:p-8 hover-lift transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text mb-1">
                        Workday HCM + VNDLY Training
                      </h3>
                      <h4 className="text-lg sm:text-xl text-secondary font-semibold">
                        Lightbeam.ai
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-muted mt-2 sm:mt-0">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> May 2025
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Remote
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h5 className="font-semibold text-text border-b border-border/50 pb-2 inline-block">
                      Training Highlights
                    </h5>
                    <ul className="space-y-3">
                      {[
                        "Completed comprehensive training on Workday HCM modules including Core HCM, Recruiting, etc.",
                        "Gained expertise in VNDLY (Vendor Management System) for contingent workforce management",
                        "Learned integration patterns between Workday and third-party systems using APIs and web services",
                        "Developed skills in report building, calculated fields, and business process configuration",
                      ].map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
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
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium border border-secondary/20"
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

      {/* Skills Section - Using the new component */}
      <section id="skills" className="relative">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 sm:mb-32">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
              Projects
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise.
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`flex flex-col gap-12 lg:gap-20 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 lg:w-5/12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-primary rounded-full" />
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted leading-relaxed mb-8 text-balance">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-text font-semibold mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3 text-muted group"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors duration-300" />
                            <span className="group-hover:text-text transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-text font-semibold mb-4">
                      Technology Stack
                    </h4>
                    <TechStackIcons
                      technologies={project.techStack}
                      size={20}
                      showNames={true}
                    />
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-text text-bg px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-surface border border-border text-text px-6 py-3 rounded-full font-medium hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual / Tech Stack Showcase */}
                <div className="flex-1 lg:w-7/12 w-full">
                  <div className="relative group">
                    {/* Abstract Card Stack Effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-95 opacity-50 transition-transform duration-500 group-hover:rotate-6 sm:block hidden" />
                    <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform -rotate-3 scale-95 opacity-50 transition-transform duration-500 group-hover:-rotate-6 sm:block hidden" />

                    <div className="relative bg-surface rounded-3xl border border-border p-8 sm:p-12 shadow-2xl overflow-hidden hover:border-primary/30 transition-colors duration-500 group-hover:shadow-primary/10">
                      {/* Decorative Background Mesh */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />

                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                          <Code className="w-10 h-10 text-primary" />
                        </div>
                        <h4 className="text-2xl font-bold text-text mb-2">
                          Tech Stack Visualized
                        </h4>
                        <p className="text-muted">
                          Interactive technology showcase
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <TechStackIcons
                          technologies={project.techStack}
                          size={32}
                          showNames={false}
                          className="justify-center"
                        />
                      </div>

                      <div className="mt-8 pt-8 border-t border-border/50 text-center">
                        <p className="text-sm text-muted">
                          Hover over icons to see technology names
                        </p>
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
      <section
        id="certificates"
        className="section-padding bg-surface/30 relative"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

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
                className="soft-card rounded-2xl overflow-hidden hover-lift transition-all duration-300 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-primary/10 p-4 rounded-full border border-primary/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
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
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20 hover:scale-105 transition-transform duration-200"
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
                        <p className="font-mono text-xs sm:text-sm text-text bg-surface px-3 py-1 rounded border border-border inline-block">
                          {cert.credentialId}
                        </p>
                      </div>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-2 bg-primary text-bg px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:bg-primary/90 hover:shadow-primary/30"
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
      <section id="achievements" className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

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
                className="soft-card rounded-2xl overflow-hidden hover-lift transition-all duration-300 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                    <div className="bg-accent/10 p-4 rounded-full border border-accent/20 flex-shrink-0 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="mb-4 sm:mb-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
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
                          <div className="text-xl sm:text-2xl font-bold text-accent bg-accent/10 px-4 py-2 rounded-lg border border-accent/20">
                            {hackathon.prize}
                          </div>
                        </div>
                      </div>
                      <p className="text-text leading-relaxed mb-6">
                        {hackathon.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-text mb-3">
                          Technologies Used:
                        </h4>
                        <TechStackIcons
                          technologies={hackathon.technologies}
                          size={18}
                          showNames={true}
                        />
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
      <section
        id="extra-curricular"
        className="section-padding bg-surface/30 relative"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

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
                className="soft-card rounded-xl p-6 hover-lift transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
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
                  icon: <Code className="w-8 h-8 text-primary" />,
                  value: "25+",
                  label: "Tech Stacks Explored",
                  color: "red",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div
                    className={`w-16 h-16 ${
                      stat.color === "blue" || stat.color === "red"
                        ? "bg-primary/10 border-primary/20"
                        : stat.color === "yellow"
                          ? "bg-accent/10 border-accent/20"
                          : "bg-secondary/10 border-secondary/20"
                    } rounded-full flex items-center justify-center mx-auto mb-4 border group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted text-sm sm:text-base group-hover:text-text transition-colors">
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
              className="text-muted hover:text-primary transition-colors hover:scale-110 inline-block"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/sanketshinde2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors hover:scale-110 inline-block"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/sanket_shinde_1310/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors hover:scale-110 inline-block"
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
