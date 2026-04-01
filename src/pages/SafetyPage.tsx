import {
  Shield,
  UserCheck,
  MessageCircle,
  Eye,
  AlertCircle,
  CheckCircle2,
  Lock,
  Users,
  Heart,
} from 'lucide-react';

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Safety
              </span>
              <br />
              <span className="text-gray-900">is Our Top Priority</span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              At RIDEwithHER, we've built our platform from the ground up with safety at
              the core. Every feature, every policy, and every decision is made with your
              security and comfort in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Safety Commitments
            </h2>
            <p className="text-lg text-gray-600">
              Multiple layers of protection for every ride
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Women-Only Platform
              </h3>
              <p className="text-gray-700">
                Both drivers and riders are exclusively women, creating a safe and
                comfortable environment for all users.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <UserCheck className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Driver Verification
              </h3>
              <p className="text-gray-700">
                All drivers go through a basic verification process including license
                validation and background screening.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Official Communication
              </h3>
              <p className="text-gray-700">
                All ride coordination happens through our official WhatsApp Business
                channel for transparency and safety.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ride Tracking
              </h3>
              <p className="text-gray-700">
                During the pilot phase, rides are coordinated through WhatsApp. Full GPS
                tracking will be added in the complete app.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Privacy Protection
              </h3>
              <p className="text-gray-700">
                Your personal information is kept confidential and shared only with your
                assigned driver for the specific ride.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Emergency Support
              </h3>
              <p className="text-gray-700">
                Direct communication channels to report any issues or concerns during or
                after your ride.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety Guidelines for Riders
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Verify Your Driver
                  </h3>
                  <p className="text-gray-700">
                    Always confirm the driver's name and vehicle details before getting on
                    the ride. This information will be shared with you through our official
                    WhatsApp channel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Share Your Ride Details
                  </h3>
                  <p className="text-gray-700">
                    Let a trusted friend or family member know about your ride details,
                    including pickup and drop locations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Stay Alert
                  </h3>
                  <p className="text-gray-700">
                    While our platform is designed for safety, always stay aware of your
                    surroundings and trust your instincts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Wear a Helmet
                  </h3>
                  <p className="text-gray-700">
                    Always wear the helmet provided by the driver. Your physical safety is
                    just as important as your personal security.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Report Any Issues
                  </h3>
                  <p className="text-gray-700">
                    If you experience any uncomfortable situations or safety concerns,
                    report them immediately through our WhatsApp Business channel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Maintain Respectful Behavior
                  </h3>
                  <p className="text-gray-700">
                    Treat your driver with respect and courtesy. RIDEwithHER is built on
                    mutual respect and support among women.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety Standards for Drivers
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-purple-200">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Valid Documentation
                  </h3>
                  <p className="text-gray-700">
                    All drivers must maintain valid driving licenses and vehicle
                    registration documents at all times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Vehicle Safety
                  </h3>
                  <p className="text-gray-700">
                    Scooters and motorcycles must be in good working condition with
                    functional brakes, lights, and safety equipment including helmets.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Professional Conduct
                  </h3>
                  <p className="text-gray-700">
                    Drivers must maintain professional behavior, respect rider privacy, and
                    provide a comfortable, harassment-free experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Safe Driving Practices
                  </h3>
                  <p className="text-gray-700">
                    Follow all traffic rules, maintain safe speeds, and prioritize rider
                    safety over speed or convenience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Zero Tolerance Policy
                  </h3>
                  <p className="text-gray-700">
                    Any form of harassment, inappropriate behavior, or safety violations
                    will result in immediate removal from the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How to Report Safety Concerns</h2>
            <p className="text-xl text-purple-100">
              We take all safety reports seriously and respond promptly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <MessageCircle className="h-8 w-8 text-pink-300 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">WhatsApp Business</h3>
                  <p className="text-purple-100 mb-4">
                    Contact our official WhatsApp Business number to report any safety
                    concerns during or after a ride.
                  </p>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-pink-300 transition-colors"
                  >
                    <span>+91 99999 99999</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-pink-300 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Emergency Situations</h3>
                  <p className="text-purple-100 mb-4">
                    In case of immediate danger or emergency, always call local authorities
                    first, then notify us.
                  </p>
                  <p className="text-white font-semibold">Police: 100 | Women Helpline: 1091</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Our Response Commitment
            </h3>
            <p className="text-purple-100 text-center max-w-3xl mx-auto">
              All safety reports are reviewed within 24 hours. We investigate thoroughly,
              take appropriate action, and keep you informed throughout the process. Your
              safety and peace of mind are our responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Building a Safer Community Together
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            RIDEwithHER is more than just a ride service—it's a community of women
            supporting women. Every rider and driver plays a role in maintaining the safe,
            respectful environment we've built. Together, we're creating a mobility
            solution where women can travel with confidence and peace of mind.
          </p>
        </div>
      </section>
    </div>
  );
}
