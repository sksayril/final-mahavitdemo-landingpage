import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block transition-transform duration-700 hover:scale-105">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
              Get in Touch
            </h2>
          </div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or inquiries about our financial services!
          </p>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-12 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="h-96 w-full bg-gray-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.20589677552!2d88.26495216412976!3d22.535564876205025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1712552415882!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-primary-100 pb-2">Send Us a Message</h3>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="transition-all duration-300 hover:translate-y-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-gray-50 p-2 outline-none"
                      />
                    </div>
                    <div className="transition-all duration-300 hover:translate-y-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-gray-50 p-2 outline-none"
                      />
                    </div>
                  </div>
                  <div className="transition-all duration-300 hover:translate-y-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-gray-50 p-2 outline-none"
                    />
                  </div>
                  <div className="transition-all duration-300 hover:translate-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-gray-50 p-2 outline-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 disabled:opacity-70"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform hover:shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-primary-100 pb-2">Contact Information</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4 transition-all duration-300 hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="rounded-full bg-primary-100 p-2 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">123 Financial District</p>
                    <p className="text-gray-600">Kolkata, West Bengal, India 700001</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4 transition-all duration-300 hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="rounded-full bg-primary-100 p-2 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4 transition-all duration-300 hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="rounded-full bg-primary-100 p-2 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@mahasamvit.com</p>
                    <p className="text-gray-600">support@mahasamvit.com</p>
                  </div>
                </motion.div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Facebook', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
                      { name: 'Twitter', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
                      { name: 'Instagram', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg> },
                      { name: 'LinkedIn', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> }
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href="#"
                        className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                        whileHover={{ y: -3, scale: 1.1 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Ready to transform your financial future?</h3>
              <p className="mt-2 text-primary-100">Schedule a free consultation with our expert team today.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
