"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, DollarSign, TrendingUp } from 'lucide-react';



const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: '1',
      name: 'Ahmed Hassan',
      role: 'Software Engineer',
      avatar: 'AH',
      rating: 5,
      content: 'Yaar, honestly speaking, FÔMOFI has been a game changer for me. Main ne 6 months pehle start kiya tha and ab tak ka experience bilkul solid hai. Daily mining ka concept bohot easy hai aur returns bhi consistent aa rahe hain.',
      investment: '$3,000',
      returns: '$720',
      duration: '6 months'
    },
    {
      id: '2',
      name: 'Fatima Khan',
      role: 'Business Owner',
      avatar: 'FK',
      rating: 5,
      content: 'Main ne bohot sare platforms try kiye hain but FÔMOFI ka system sabse transparent hai. Customer support bhi bahut responsive hai. Meri family ko bhi recommend kiya hai aur sab khush hain.',
      investment: '$5,500',
      returns: '$1,320',
      duration: '8 months'
    },
    {
      id: '3',
      name: 'Muhammad Ali',
      role: 'Marketing Manager',
      avatar: 'MA',
      rating: 5,
      content: 'Bhai, initially main skeptical tha but after seeing consistent returns for 4 months, ab main confident hun. Referral program se extra income bhi mil rahi hai. Highly recommended hai!',
      investment: '$2,200',
      returns: '$440',
      duration: '4 months'
    },
    {
      id: '4',
      name: 'Ayesha Malik',
      role: 'Teacher',
      avatar: 'AM',
      rating: 5,
      content: 'As a teacher, meri salary limited hai but FÔMOFI se jo passive income aa rahi hai, woh mere monthly expenses mein bohot help kar rahi hai. Simple hai aur secure bhi.',
      investment: '$1,800',
      returns: '$540',
      duration: '10 months'
    },
    {
      id: '5',
      name: 'Usman Sheikh',
      role: 'Freelancer',
      avatar: 'US',
      rating: 5,
      content: 'Freelancing ke saath saath yeh platform use kar raha hun. Daily tap karna just 2 minutes ka kaam hai aur monthly returns dekh kar khushi hoti hai. Team ka support bhi excellent hai.',
      investment: '$4,200',
      returns: '$1,050',
      duration: '7 months'
    },
    {
      id: '6',
      name: 'Zainab Ahmed',
      role: 'Doctor',
      avatar: 'ZA',
      rating: 5,
      content: 'Medical field mein busy schedule hai but FÔMOFI ka simple interface makes it easy to manage. Returns consistent hain aur withdrawal process bhi smooth hai. Definitely worth it!',
      investment: '$6,800',
      returns: '$1,632',
      duration: '9 months'
    },
    {
      id: '7',
      name: 'Bilal Raza',
      role: 'Shopkeeper',
      avatar: 'BR',
      rating: 5,
      content: 'Dukaan ke saath saath yeh investment kar raha hun. Pehle dar tha ke online investment safe hai ya nahi, but FÔMOFI ne trust build kiya hai. Har month regular returns mil rahe hain.',
      investment: '$2,800',
      returns: '$672',
      duration: '5 months'
    },
    {
      id: '8',
      name: 'Sana Tariq',
      role: 'Housewife',
      avatar: 'ST',
      rating: 5,
      content: 'Ghar baithe paise kamane ka yeh best tarika hai. Husband ki permission se start kiya tha aur ab woh bhi impressed hain. Simple hai aur safe bhi. Recommend karti hun sabko!',
      investment: '$1,500',
      returns: '$450',
      duration: '6 months'
    },
    {
      id: '9',
      name: 'Tariq Mahmood',
      role: 'Retired Officer',
      avatar: 'TM',
      rating: 5,
      content: 'Retirement ke baad pension ke saath yeh additional income bohot helpful hai. Age mein technology samajhna mushkil tha but FÔMOFI ka interface user-friendly hai. Satisfied hun bilkul.',
      investment: '$7,500',
      returns: '$2,250',
      duration: '12 months'
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
        className={`w-4 h-4 ${i < rating ? 'text-[#00d4ff] fill-[#00d4ff]' : 'text-slate-600'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-8" 
             style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-6" 
             style={{ background: 'radial-gradient(circle, #0099cc 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What Our <span style={{ 
              background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Investors Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied investors 
            have to say about their experience with FÔMOFI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-6 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500 group hover:scale-105 transform h-full flex flex-col"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="text-[#00d4ff] text-sm ml-2 font-medium">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Content */}
                <blockquote className="text-slate-300 mb-6 leading-relaxed flex-grow group-hover:text-slate-200 transition-colors duration-300">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-full flex items-center justify-center text-[#00d4ff] font-bold border border-[#00d4ff]/30">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment Stats */}
                <div className="bg-[#00d4ff]/5 border border-[#00d4ff]/20 rounded-lg p-3">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-slate-400 mb-1">INVESTED</div>
                      <div className="font-bold text-[#00d4ff]">
                        {testimonial.investment}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400 mb-1">RETURNS</div>
                      <div className="font-bold text-[#00d4ff]">
                        +{testimonial.returns}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400 mb-1">DURATION</div>
                      <div className="font-bold text-[#00d4ff]">
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
              className="p-3 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 hover:bg-[#00d4ff]/20 hover:border-[#00d4ff] transition-all duration-300 group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={nextTestimonials}
              className="p-3 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 hover:bg-[#00d4ff]/20 hover:border-[#00d4ff] transition-all duration-300 group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-[#00d4ff] group-hover:scale-110 transition-transform duration-300" />
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
                    ? 'bg-[#00d4ff] shadow-lg shadow-[#00d4ff]/50'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="relative">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#00d4ff]/20 shadow-2xl p-8 hover:shadow-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Trusted by <span style={{ 
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Investors Worldwide</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div className="text-3xl font-bold text-[#00d4ff] mb-1">4.9/5</div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">Average Rating</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div className="text-3xl font-bold text-[#00d4ff] mb-1">967+</div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">Happy Investors</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div className="text-3xl font-bold text-[#00d4ff] mb-1">$2.4M+</div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">Total Invested</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-[#00d4ff]/30 group-hover:to-[#00d4ff]/20 transition-all duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div className="text-3xl font-bold text-[#00d4ff] mb-1">99.2%</div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;