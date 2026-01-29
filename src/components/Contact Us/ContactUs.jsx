import React from "react";
import contactUsVideoFrame from "../../assets/videos/contact-us-video-frame.mp4";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactUs = () => {

  return (
    <div>
      {/* video frame */}
      <div className="relative h-64 md:h-125 w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover brightness-80"
        >
          <source src={contactUsVideoFrame} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full bg-white/40 py-4 md:py-8 flex flex-col items-center justify-center">
            <h1
              className="text-white text-5xl md:text-8xl font-black tracking-tighter italic"
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
              CONTACT US
            </h1>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-2"></div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              GET IN <span className="text-red-600">TOUCH</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? Our team is here to
              help you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gray-50 rounded-xl transition-all hover:shadow-md">
                <MapPin className="text-red-600 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">
                    CORPORATE OFFICE (ABUL KHAIR GROUP)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    D.T. Road, Pahartali, Chittagong, 4217
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-xl transition-all hover:shadow-md">
                <MapPin className="text-red-600 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">DHAKA OFFICE</h4>
                  <p className="text-gray-600 text-sm">
                    Level-13, Plot-6, Road-93, North Avenue, Gulshan-2 Dhaka,
                    1212
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-xl transition-all hover:shadow-md">
                <Phone className="text-red-600 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600 text-sm">+8802333314541-4</p>
                  <p className="text-gray-600 text-sm">
                    +880-2-8881221, 8881223
                  </p>
                  <p className="text-gray-600 text-sm">
                    +880-2-8881057, 8881051-2
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-xl transition-all hover:shadow-md">
                <Mail className="text-red-600 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm">
                    info@abulkhairgroup.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Shah Cement Business</option>
                    <option>Steel Products (AKS)</option>
                    <option>Consumer Goods</option>
                    <option>Career Opportunity</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-max px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-200"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
