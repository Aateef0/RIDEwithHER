import {
  Shield,
  Users,
  DollarSign,
  MapPin,
  UserCheck,
  Heart,
  Route,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Safe Rides for Women,
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                By Women
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              A women-only two-wheeler ride service currently being tested in Indore
              to make transportation safer and more comfortable for women.
            </p>

            <div className="inline-block bg-purple-100 border border-purple-200 rounded-lg px-6 py-3 mb-8">
              <p className="text-sm text-purple-800 font-medium">
                Full service launch coming soon across Indore
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/KsGZqb3hcQlLJh0HViTa8J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Join Early Access
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About RIDEwithHER
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              RIDEwithHER is a women-first mobility initiative designed to provide safe
              and affordable two-wheeler rides where both the driver and the customer are
              women. We're building a trusted community focused on safety, comfort, and
              empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600">
                Women-only platform ensuring a secure ride experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comfort</h3>
              <p className="text-gray-600">
                Respectful and comfortable journey every time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Trust
              </h3>
              <p className="text-gray-600">
                Building a supportive network of women riders
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Affordable
              </h3>
              <p className="text-gray-600">
                Student-friendly pricing for daily commutes
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="inline-block bg-purple-50 border border-purple-200 rounded-lg px-6 py-3 text-sm text-purple-800">
              Currently in pilot testing phase
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Female Drivers Only
              </h3>
              <p className="text-gray-600 text-sm">
                All our drivers are verified women partners
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Female Customers Only
              </h3>
              <p className="text-gray-600 text-sm">
                Exclusive service for women riders
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Student-Friendly Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                Affordable rates for daily commutes
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Route className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flexible Distances
              </h3>
              <p className="text-gray-600 text-sm">
                Short and long distance rides available
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="inline-block bg-white border border-purple-200 rounded-lg px-6 py-3 text-sm text-purple-800">
              More features and full city-wide service coming soon
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How the Pilot Booking System Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to request your ride during our testing phase
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fill the Early Access Google Form
                </h3>
                <p className="text-gray-700">
                  Submit your details to register for the pilot program
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Join WhatsApp Business Group
                </h3>
                <p className="text-gray-700">
                  After submission, you'll receive a link to join our official WhatsApp
                  group
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Request Your Ride
                </h3>
                <p className="text-gray-700">
                  Inside the WhatsApp group, you'll receive another Google Form to
                  request a ride
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Get Matched with a Driver
                </h3>
                <p className="text-gray-700">
                  A verified female driver will be assigned based on availability
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 italic">
              This process is part of our pilot testing phase
            </p>
          </div>
        </div>
      </section>

      <section id="safety" className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Safety is Our Priority</h2>
            <p className="text-xl text-purple-100">
              Multiple layers of safety measures to ensure a secure experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <CheckCircle2 className="h-10 w-10 text-pink-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Women-Only System</h3>
              <p className="text-purple-100">
                Both drivers and riders are exclusively women, creating a safe and
                comfortable environment
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <CheckCircle2 className="h-10 w-10 text-pink-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Driver Verification</h3>
              <p className="text-purple-100">
                Basic verification process for all driver partners before onboarding
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <CheckCircle2 className="h-10 w-10 text-pink-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Official Communication</h3>
              <p className="text-purple-100">
                All ride coordination through official WhatsApp Business channel
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <CheckCircle2 className="h-10 w-10 text-pink-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Respectful Experience</h3>
              <p className="text-purple-100">
                Commitment to maintaining a respectful and comfortable ride experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
            <p className="text-lg text-gray-600">Currently operating in pilot mode</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Pickup Location
                  </h3>
                  <p className="text-gray-700 text-lg">Bhanwarkuan, Indore</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-pink-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Route className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Drop Locations
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Anywhere within Indore city limits
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="inline-block bg-purple-100 border border-purple-200 rounded-lg px-6 py-3 text-sm text-purple-800 font-medium">
              Service areas will expand across the city after the full launch
            </p>
          </div>
        </div>
      </section>

      <section id="policies" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Terms and Policies
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Women-Only Platform
                  </h3>
                  <p className="text-gray-700">
                    This service is exclusively for women riders and women drivers
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Respectful Behavior Required
                  </h3>
                  <p className="text-gray-700">
                    All users must maintain respectful and courteous behavior at all times
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Payment Process
                  </h3>
                  <p className="text-gray-700">
                    Payment is made directly to the driver after ride completion
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Pilot Phase Limitations
                  </h3>
                  <p className="text-gray-700">
                    Service is currently in testing mode with limited availability
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Driver Availability
                  </h3>
                  <p className="text-gray-700">
                    Ride availability depends on driver partners in your area
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
            Ready to Experience Safe Rides?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our early access program and be among the first to ride with RIDEwithHER
          </p>

          <a
            href="https://chat.whatsapp.com/KsGZqb3hcQlLJh0HViTa8J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Join Early Access and Request Your First Ride
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="mt-6 text-sm text-purple-100">
            Limited pilot access. Full service launching soon.
          </p>
        </div>
      </section>
    </div>
  );
}
