import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h1>
          <p className="text-xl text-gray-600">
            Professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {/* Platform Engineering Internship */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      Platform Engineering Intern
                    </h2>
                    <h3 className="text-xl text-blue-600 font-semibold mb-2">
                      Lightbeam.ai
                    </h3>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>June 2024 - Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Contributions:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Developed and maintained CI/CD pipelines using Jenkins
                        and GitLab CI, reducing deployment time by 40%
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Implemented infrastructure as code using Terraform and
                        Ansible for AWS cloud resources
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Containerized applications using Docker and orchestrated
                        with Kubernetes, improving scalability
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Set up monitoring and alerting systems using Prometheus
                        and Grafana for production environments
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Collaborated with development teams to optimize
                        application performance and reliability
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "Terraform",
                    "Jenkins",
                    "Prometheus",
                    "Grafana",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Workday Training */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      Workday HCM + VNDLY Training
                    </h2>
                    <h3 className="text-xl text-green-600 font-semibold mb-2">
                      Lightbeam.ai
                    </h3>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>March 2024 - May 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Training Highlights:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Completed comprehensive training on Workday HCM modules
                        including Core HCM, Recruiting, and Talent Management
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Gained expertise in VNDLY (Vendor Management System) for
                        contingent workforce management
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Learned integration patterns between Workday and
                        third-party systems using APIs and web services
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        Developed skills in report building, calculated fields,
                        and business process configuration
                      </span>
                    </li>
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
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
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
    </div>
  );
}
