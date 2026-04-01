import {
  Calendar,
  Users,
  DollarSign,
  Heart,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
} from 'lucide-react';

export default function DriverPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Earn With Your Scooty
              </span>
              <br />
              <span className="text-gray-900">Become a RIDEwithHER Driver Partner</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              RIDEwithHER is inviting women in Indore to become driver partners and help
              build a safer mobility network for women.
            </p>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Apply as Driver Partner
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Become a Driver Partner?
            </h2>
            <p className="text-lg text-gray-600">
              Join a community empowering women through safe mobility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Flexible Working Hours
              </h3>
              <p className="text-gray-700">
                Choose your own schedule and work when it suits you best
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Women-Only Environment
              </h3>
              <p className="text-gray-700">
                Safe and comfortable work environment with women riders only
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Earn Extra Income
              </h3>
              <p className="text-gray-700">
                Generate additional income using your own scooter or motorcycle
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Support Women's Safety
              </h3>
              <p className="text-gray-700">
                Be part of a mission to make transportation safer for women
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Driver Partner Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Simple requirements to get started with RIDEwithHER
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Women Aged 18+
                  </h3>
                  <p className="text-gray-700">
                    Must be 18 years or older to become a driver partner
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Valid Driving License
                  </h3>
                  <p className="text-gray-700">
                    Must possess a valid two-wheeler driving license
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Own Scooter or Motorcycle
                  </h3>
                  <p className="text-gray-700">
                    Must have your own two-wheeler in good working condition
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Good Communication Skills
                  </h3>
                  <p className="text-gray-700">
                    Comfortable interacting with female riders in a respectful manner
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
              How It Works for Drivers
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Submit Application
                </h3>
                <p className="text-gray-700">
                  Fill out the driver partner registration form with your details
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Verification Process
                </h3>
                <p className="text-gray-700">
                  Our team will verify your documents and conduct a basic screening
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Onboarding & Orientation
                </h3>
                <p className="text-gray-700">
                  Get familiar with our platform, safety guidelines, and customer service
                  standards
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Start Earning
                </h3>
                <p className="text-gray-700">
                  Begin accepting ride requests and earn on your own schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Driver Partner Agreement Summary
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <FileText className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Independent Partners
                  </h3>
                  <p className="text-gray-700">
                    Driver partners are independent contractors, not employees of
                    RIDEwithHER. You maintain full control over your business operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Calendar className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Flexible Schedule
                  </h3>
                  <p className="text-gray-700">
                    Drivers have complete freedom to choose their working hours, days, and
                    service areas. Work as much or as little as you want.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Safety & Conduct Standards
                  </h3>
                  <p className="text-gray-700">
                    All drivers must adhere to our safety guidelines, maintain professional
                    conduct, and provide respectful service to all riders at all times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <DollarSign className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Earnings & Payment
                  </h3>
                  <p className="text-gray-700">
                    During the pilot phase, payments are collected directly from riders.
                    Commission structure will be finalized before the full launch.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Heart className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Community Values
                  </h3>
                  <p className="text-gray-700">
                    As part of the RIDEwithHER community, drivers commit to supporting
                    women's safety and empowerment through reliable, respectful service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the RIDEwithHER community and help build safer mobility for women
          </p>

          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Apply as Driver Partner Now
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="mt-6 text-sm text-purple-100">
            Applications are being reviewed on a rolling basis
          </p>
        </div>
      </section>
    </div>
  );
}
