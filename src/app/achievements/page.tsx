import { Trophy, ExternalLink, Calendar, Users, Medal } from "lucide-react";

export default function AchievementsPage() {
  const hackathons = [
    {
      title: "Smart India Hackathon 2024",
      position: "1st Place - Winner",
      date: "December 2024",
      category: "Software Edition",
      description:
        "Developed an AI-powered healthcare solution for rural areas, addressing the problem statement of improving healthcare accessibility in remote regions.",
      teamSize: 6,
      prize: "₹1,00,000",
      technologies: ["React", "Python", "TensorFlow", "AWS", "MongoDB"],
      certificateUrl:
        "https://sih.gov.in/certificates/2024/winner/sanket-shinde",
      color: "gold",
    },
    {
      title: "HackIndia 2024",
      position: "2nd Place - Runner Up",
      date: "October 2024",
      category: "Open Innovation",
      description:
        "Created a blockchain-based supply chain management system that ensures transparency and traceability in food distribution networks.",
      teamSize: 4,
      prize: "₹50,000",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      certificateUrl:
        "https://hackindia.com/certificates/2024/runner-up/sanket-shinde",
      color: "silver",
    },
    {
      title: "CodeFest PICT 2024",
      position: "1st Place - Winner",
      date: "September 2024",
      category: "Web Development",
      description:
        "Built a comprehensive e-learning platform with real-time collaboration features, interactive coding environments, and AI-powered personalized learning paths.",
      teamSize: 3,
      prize: "₹25,000",
      technologies: [
        "Next.js",
        "Socket.io",
        "PostgreSQL",
        "Docker",
        "OpenAI API",
      ],
      certificateUrl: "https://pict.edu/codefest/2024/winner/sanket-shinde",
      color: "gold",
    },
    {
      title: "TechCrunch Disrupt Hackathon",
      position: "3rd Place - Second Runner Up",
      date: "August 2024",
      category: "Fintech",
      description:
        "Developed a micro-investment platform for students, enabling them to invest small amounts in diversified portfolios with educational content.",
      teamSize: 5,
      prize: "$2,000",
      technologies: ["Flutter", "Firebase", "Python", "FastAPI", "Stripe"],
      certificateUrl:
        "https://techcrunch.com/disrupt/2024/hackathon/sanket-shinde",
      color: "bronze",
    },
  ];

  const otherAchievements = [
    {
      title: "Google Summer of Code 2024",
      description:
        "Selected as a contributor for TensorFlow project, worked on improving model optimization tools.",
      date: "May - August 2024",
      icon: "🌟",
      color: "blue",
    },
    {
      title: "Dean's List Recognition",
      description:
        "Achieved Dean's List recognition for academic excellence with 9.72 CGPA.",
      date: "Academic Year 2023-24",
      icon: "🎓",
      color: "green",
    },
    {
      title: "Best Student Developer Award",
      description:
        "Recognized as the best student developer at PICT for outstanding contributions to open source.",
      date: "March 2024",
      icon: "👨‍💻",
      color: "purple",
    },
    {
      title: "Technical Paper Publication",
      description:
        'Published research paper on "AI-Driven DevOps Automation" in IEEE conference proceedings.',
      date: "February 2024",
      icon: "📄",
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      gold: {
        bg: "bg-yellow-50",
        border: "border-yellow-300",
        text: "text-yellow-700",
        button: "bg-yellow-600 hover:bg-yellow-700",
        icon: "bg-yellow-100 text-yellow-600",
      },
      silver: {
        bg: "bg-gray-50",
        border: "border-gray-300",
        text: "text-gray-700",
        button: "bg-gray-600 hover:bg-gray-700",
        icon: "bg-gray-100 text-gray-600",
      },
      bronze: {
        bg: "bg-orange-50",
        border: "border-orange-300",
        text: "text-orange-700",
        button: "bg-orange-600 hover:bg-orange-700",
        icon: "bg-orange-100 text-orange-600",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        icon: "bg-blue-100 text-blue-600",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        icon: "bg-green-100 text-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        icon: "bg-purple-100 text-purple-600",
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-700",
        icon: "bg-indigo-100 text-indigo-600",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Achievements
          </h1>
          <p className="text-xl text-gray-600">
            Hackathon wins, awards, and recognitions
          </p>
        </div>

        {/* Hackathon Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Hackathon Victories
          </h2>

          <div className="space-y-8">
            {hackathons.map((hackathon, index) => {
              const colors = getColorClasses(hackathon.color);
              return (
                <div
                  key={hackathon.title}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 ${colors.border}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div
                        className={`p-4 rounded-full ${colors.icon} flex-shrink-0`}
                      >
                        <Trophy className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {hackathon.title}
                            </h3>
                            <p
                              className={`text-lg font-semibold ${colors.text} mb-1`}
                            >
                              {hackathon.position}
                            </p>
                            <p className="text-gray-600">
                              {hackathon.category}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                              <Calendar className="w-4 h-4" />
                              <span>{hackathon.date}</span>
                            </div>
                            <div
                              className={`text-2xl font-bold ${colors.text}`}
                            >
                              {hackathon.prize}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {hackathon.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="w-5 h-5 text-gray-500" />
                              <span className="font-semibold text-gray-900">
                                Team Size:
                              </span>
                            </div>
                            <p className="text-gray-700">
                              {hackathon.teamSize} members
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {hackathon.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
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
                          className={`inline-flex items-center gap-2 ${colors.button} text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>View Certificate</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherAchievements.map((achievement, index) => {
              const colors = getColorClasses(achievement.color);
              return (
                <div
                  key={achievement.title}
                  className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 ${colors.border}`}
                  style={{
                    animationDelay: `${(index + hackathons.length) * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Achievement Summary
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
              <p className="text-gray-600">Total Awards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Medal className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
              <p className="text-gray-600">Hackathon Wins</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ₹1.75L
              </div>
              <p className="text-gray-600">Prize Money</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2024</div>
              <p className="text-gray-600">Active Year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
