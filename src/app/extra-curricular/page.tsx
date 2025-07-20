import { Users, Star, Trophy, Heart, Calendar } from "lucide-react";

export default function ExtraCurricularPage() {
  const leadership = [
    {
      role: "Public Relations Lead",
      organization: "PICT Computer Society",
      duration: "August 2023 - Present",
      description:
        "Leading PR initiatives, managing social media presence, and coordinating with external organizations for events and collaborations.",
      achievements: [
        "Increased social media engagement by 150%",
        "Organized 5+ technical workshops",
        "Managed PR for annual tech fest with 2000+ participants",
      ],
      icon: "📢",
      color: "blue",
    },
    {
      role: "Technical Team Member",
      organization: "Google Developer Student Club (GDSC)",
      duration: "September 2022 - July 2023",
      description:
        "Contributed to technical workshops, mentored junior students, and participated in Google technology events.",
      achievements: [
        "Conducted workshops on React and Firebase",
        "Mentored 20+ students in web development",
        "Organized Google I/O Extended event",
      ],
      icon: "💻",
      color: "green",
    },
    {
      role: "Event Coordinator",
      organization: "IEEE PICT Student Branch",
      duration: "January 2022 - August 2022",
      description:
        "Coordinated technical events, managed logistics, and facilitated knowledge sharing sessions.",
      achievements: [
        "Successfully organized 3 technical seminars",
        "Managed event logistics for 500+ attendees",
        "Coordinated with industry experts as speakers",
      ],
      icon: "🎯",
      color: "purple",
    },
  ];

  const competitions = [
    {
      title: "All India Rank 3 - Crossword Competition",
      event: "National Crossword Championship 2024",
      date: "March 2024",
      description:
        "Achieved 3rd position nationally in the annual crossword competition, demonstrating strong vocabulary and problem-solving skills.",
      icon: "🧩",
      color: "gold",
    },
    {
      title: "State Level Winner - Quiz Competition",
      event: "Maharashtra Technical Quiz 2023",
      date: "November 2023",
      description:
        "Won the state-level technical quiz competition covering computer science, mathematics, and general knowledge.",
      icon: "🧠",
      color: "silver",
    },
    {
      title: "Inter-College Debate Winner",
      event: "PICT Annual Debate Competition",
      date: "September 2023",
      description:
        'First place in inter-college debate competition on "Impact of AI on Future Employment".',
      icon: "🎤",
      color: "bronze",
    },
  ];

  const sports = [
    {
      sport: "Cricket",
      level: "College Team Captain",
      achievements: [
        "Led college cricket team to inter-university championship",
        "Best batsman award in college tournament 2023",
        "Organized annual cricket tournament",
      ],
      duration: "2022 - Present",
      icon: "🏏",
    },
    {
      sport: "Table Tennis",
      level: "District Level Player",
      achievements: [
        "District level table tennis championship participant",
        "College table tennis team member",
        "Won multiple inter-college tournaments",
      ],
      duration: "2021 - Present",
      icon: "🏓",
    },
    {
      sport: "Marathon Running",
      level: "Amateur Runner",
      achievements: [
        "Completed Pune International Marathon 2024",
        "Regular participant in 10K runs",
        "Fitness enthusiast and running club member",
      ],
      duration: "2020 - Present",
      icon: "🏃‍♂️",
    },
  ];

  const volunteer = [
    {
      activity: "Teaching Underprivileged Children",
      organization: "Teach for India",
      description:
        "Volunteer teacher for computer basics and mathematics for underprivileged children in rural areas.",
      duration: "2023 - Present",
      impact: "50+ children taught",
      icon: "📚",
    },
    {
      activity: "Blood Donation Drives",
      organization: "Red Cross Society",
      description:
        "Regular blood donor and organizer of blood donation camps in college and community.",
      duration: "2022 - Present",
      impact: "15+ donations organized",
      icon: "❤️",
    },
    {
      activity: "Environmental Conservation",
      organization: "Green Earth Initiative",
      description:
        "Participated in tree plantation drives and environmental awareness campaigns.",
      duration: "2021 - Present",
      impact: "200+ trees planted",
      icon: "🌱",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      gold: "bg-yellow-100 text-yellow-600 border-yellow-200",
      silver: "bg-gray-100 text-gray-600 border-gray-200",
      bronze: "bg-orange-100 text-orange-600 border-orange-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Extra-Curricular Activities
          </h1>
          <p className="text-xl text-gray-600">
            Leadership, sports, competitions, and community involvement
          </p>
        </div>

        {/* Leadership Roles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-600" />
            Leadership Roles
          </h2>

          <div className="space-y-6">
            {leadership.map((role, index) => (
              <div
                key={role.role}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 ${
                  getColorClasses(role.color).split(" ")[2]
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{role.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {role.role}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2">
                          {role.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{role.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {role.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {role.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions & Rankings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-600" />
            Competitions & Rankings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((comp, index) => (
              <div
                key={comp.title}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 ${
                  getColorClasses(comp.color).split(" ")[2]
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{comp.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-1">
                    {comp.event}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{comp.date}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sports Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Star className="w-8 h-8 text-green-600" />
            Sports & Athletics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport, index) => (
              <div
                key={sport.sport}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{sport.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {sport.sport}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    {sport.level}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{sport.duration}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {sport.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Work */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-600" />
            Volunteer Work & Community Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteer.map((activity, index) => (
              <div
                key={activity.activity}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{activity.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {activity.activity}
                  </h3>
                  <p className="text-red-600 font-semibold text-sm mb-2">
                    {activity.organization}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{activity.duration}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>

                <div className="bg-red-50 rounded-lg p-3 text-center">
                  <p className="text-red-600 font-semibold text-sm">
                    Impact: {activity.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Extra-Curricular Summary
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <p className="text-gray-600">Leadership Roles</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <p className="text-gray-600">Competition Wins</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <p className="text-gray-600">Sports Activities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <p className="text-gray-600">Volunteer Activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
