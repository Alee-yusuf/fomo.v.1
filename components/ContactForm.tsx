// TODO: Wire to actual API endpoint for form submission
// TODO: Add file upload functionality for attachments
// TODO: Integrate with CRM or support ticket system

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './ui/Button';
import Icon from './ui/Icon';
import { FiMail, FiMessageSquare, FiCheck, FiAlertCircle } from 'react-icons/fi';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'account', label: 'Account Issues' },
    { value: 'investment', label: 'Investment Questions' },
    { value: 'partnership', label: 'Partnership Opportunities' }
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      console.log('Contact form submission:', data);
      setIsSubmitted(true);
      reset();
    } catch {
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon={FiCheck} size="lg" className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for contacting us. We&apos;ve received your message and will get back to you 
              within 24 hours. For urgent matters, please use our live chat support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Send Another Message
              </Button>
              <Button>
                Go to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Icon icon={FiMessageSquare} size="xl" className="text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our investment platform? Need technical support? 
            We&apos;re here to help. Send us a message and we&apos;ll respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon icon={FiMail} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                  <p className="text-gray-600 mb-2">Get help via email</p>
                  <a href="mailto:support@fomo-platform.com" className="text-blue-600 hover:underline">
                    support@fomo-platform.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">💬</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                  <p className="text-gray-600 mb-2">Available 24/7 for instant help</p>
                  <button className="text-green-600 hover:underline">
                    Start Live Chat
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                  <p className="text-gray-600 mb-2">For premium members</p>
                  <span className="text-purple-600">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="pt-2 border-t border-blue-200">
                  <span className="font-medium">Live Chat & Email: 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <Icon icon={FiAlertCircle} size="sm" className="mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <Icon icon={FiAlertCircle} size="sm" className="mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('category', { required: 'Please select a category' })}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <Icon icon={FiAlertCircle} size="sm" className="mr-1" />
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Brief description of your inquiry"
                  {...register('subject', {
                    required: 'Subject is required',
                    minLength: {
                      value: 5,
                      message: 'Subject must be at least 5 characters'
                    }
                  })}
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <Icon icon={FiAlertCircle} size="sm" className="mr-1" />
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please provide detailed information about your inquiry..."
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 20,
                      message: 'Message must be at least 20 characters'
                    }
                  })}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <Icon icon={FiAlertCircle} size="sm" className="mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600 flex items-center">
                    <Icon icon={FiAlertCircle} size="sm" className="mr-2" />
                    {error}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                isLoading={isLoading}
                className="w-full"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;