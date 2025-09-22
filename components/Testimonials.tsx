"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, DollarSign, TrendingUp, Shield } from 'lucide-react';



const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Professional Trader',
      avatar: 'SJ',
      rating: 5,
      content: 'The platform has exceeded my expectations. The returns are consistent and the customer support is exceptional. I&apos;ve been investing for 8 months now and couldn&apos;t be happier.',
      investment: '$5,000',
      returns: '$1,200',
      duration: '8 months'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Software Engineer',
      avatar: 'MC',
      rating: 5,
      content: 'As a tech professional, I appreciate the platform&apos;s security measures and user interface. The mobile app makes it easy to track my investments on the go.',
      investment: '$2,500',
      returns: '$450',
      duration: '4 months'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      role: 'Business Owner',
      avatar: 'ER',
      rating: 5,
      content: 'I started with the starter plan and gradually moved to premium. The referral program has been an excellent additional income source. Highly recommended!',
      investment: '$15,000',
      returns: '$3,800',
      duration: '12 months'
    },
    {
      id: '4',
      name: 'David Thompson',
      role: 'Retired Teacher',
      avatar: 'DT',
      rating: 5,
      content: 'Perfect for someone like me who wants passive income. The daily withdrawals feature gives me peace of mind, and the returns help supplement my pension.',
      investment: '$8,000',
      returns: '$1,920',
      duration: '10 months'
    },
    {
      id: '5',
      name: 'Lisa Park',
      role: 'Marketing Manager',
      avatar: 'LP',
      rating: 5,
      content: 'The transparency and regular communication from the team builds trust. I&apos;ve referred several colleagues and they&apos;re all satisfied with their investments.',
      investment: '$3,200',
      returns: '$640',
      duration: '6 months'
    },
    {
      id: '6',
      name: 'James Wilson',
      role: 'Financial Advisor',
      avatar: 'JW',
      rating: 5,
      content: 'As a financial professional, I was initially skeptical. However, the consistent performance and regulatory compliance convinced me. Great platform!',
      investment: '$12,000',
      returns: '$2,880',
      duration: '9 months'
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prev - testimonialsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-lime-400 fill-lime-400' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
            <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHAT OUR <span className="text-lime-400">INVESTORS SAY</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied investors 
            have to say about their experience with FOMOFI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-black border border-lime-400/30 rounded-xl p-6 hover:border-lime-400 hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300 group hover:scale-105 transform h-full flex flex-col"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="text-lime-400 text-sm ml-2 font-medium">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Content */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-lime-400/20 to-lime-400/10 rounded-full flex items-center justify-center text-lime-400 font-bold border border-lime-400/30">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment Stats */}
                <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-3">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-gray-400 mb-1">INVESTED</div>
                      <div className="font-bold text-lime-400">
                        {testimonial.investment}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 mb-1">RETURNS</div>
                      <div className="font-bold text-lime-400">
                        +{testimonial.returns}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 mb-1">DURATION</div>
                      <div className="font-bold text-lime-400">
                        {testimonial.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={prevTestimonials}
              className="p-3 rounded-full bg-lime-400/10 border border-lime-400/30 hover:bg-lime-400/20 hover:border-lime-400 transition-all duration-300 group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={nextTestimonials}
              className="p-3 rounded-full bg-lime-400/10 border border-lime-400/30 hover:bg-lime-400/20 hover:border-lime-400 transition-all duration-300 group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-lime-400 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * testimonialsPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / testimonialsPerPage) === i
                    ? 'bg-lime-400 shadow-lg shadow-lime-400/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="relative">
          <div className="bg-black border border-lime-400/30 rounded-2xl p-8 hover:border-lime-400/50 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4 text-lime-400" />
                <span className="text-lime-400 text-sm font-medium uppercase tracking-wide">
                  Trusted Platform
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                TRUSTED BY <span className="text-lime-400">INVESTORS WORLDWIDE</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400/20 to-lime-400/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-lime-400/30 group-hover:to-lime-400/20 transition-all duration-300">
                  <Star className="w-8 h-8 text-lime-400" />
                </div>
                <div className="text-3xl font-bold text-lime-400 mb-1">4.9/5</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Average Rating</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400/20 to-lime-400/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-lime-400/30 group-hover:to-lime-400/20 transition-all duration-300">
                  <Users className="w-8 h-8 text-lime-400" />
                </div>
                <div className="text-3xl font-bold text-lime-400 mb-1">10,000+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Happy Investors</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400/20 to-lime-400/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-lime-400/30 group-hover:to-lime-400/20 transition-all duration-300">
                  <DollarSign className="w-8 h-8 text-lime-400" />
                </div>
                <div className="text-3xl font-bold text-lime-400 mb-1">$50M+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Total Invested</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400/20 to-lime-400/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-lime-400/30 group-hover:to-lime-400/20 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-lime-400" />
                </div>
                <div className="text-3xl font-bold text-lime-400 mb-1">99.2%</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-lime-400/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Testimonials;