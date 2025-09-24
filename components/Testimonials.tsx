"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, DollarSign, TrendingUp } from 'lucide-react';



const Testimonials = () => {
  const [testimonials] = useState([
    // 1. English - Short praise
    {
      id: '1',
      name: 'Sarah',
      avatar: 'SR',
      rating: 5,
      content: 'Good job team!',
      investment: '$2,000',
      returns: '$600',
      duration: '4 months'
    },
    
    // 2. Urdu - Gifts for family
    {
      id: '2',
      name: 'Sara Khan',
      avatar: 'SK',
      rating: 5,
      content: 'Pehli baar apne bachon ko birthday par wo cycle dilai jo wo bahut din se maang rahe thay! FÔMOFI ki waja se ab main apnay ghar walon ko khush karsakti hoon. Verification sirf 20 minute mein ho gaya tha!',
      investment: '$3,000',
      returns: '$900',
      duration: '5 months'
    },

    // 3. English - More free time
    {
      id: '3',
      name: 'Ali Hassan',
      avatar: 'AH',
      rating: 4,
      content: 'As a teacher, I needed extra income without extra work. FÔMOFI gives me that! Just 2 minutes daily, and I earn while focusing on my students. The app is simple and reliable.',
      investment: '$2,000',
      returns: '$600',
      duration: '4 months'
    },

    // 4. Urdu - Travel
    {
      id: '4',
      name: 'Zainab Malik',
      avatar: 'ZM',
      rating: 5,
      content: 'Maine apne pehle 4 mahine ke profits se Murree ka family tour karaya! Ab tak ka best experience raha. App thoda slow hota hai kabhi kabhi lekin paise time pe aajate hain.',
      investment: '$4,500',
      returns: '$1,350',
      duration: '6 months'
    },

    // 5. English - Helping family
    {
      id: '5',
      name: 'Usman Khan',
      avatar: 'UK',
      rating: 5,
      content: 'Being the eldest son, family responsibilities were overwhelming. Now, my FÔMOFI earnings help me support my siblings\' education. The best investment I\'ve ever made!',
      investment: '$6,000',
      returns: '$1,800',
      duration: '7 months'
    },

    // 6. Urdu - Short and sweet
    {
      id: '6',
      name: 'Kamran',
      avatar: 'KR',
      rating: 5,
      content: 'Mashallah! Bohat acha!',
      investment: '$1,000',
      returns: '$300',
      duration: '3 months'
    },

    // 7. English - Side income
    {
      id: '7',
      name: 'Bilal Ahmed',
      avatar: 'BA',
      rating: 5,
      content: 'As a freelancer, income was never consistent. FÔMOFI gives me that stability. Even in slow months, I have this passive income. The 15-minute verification was a pleasant surprise!',
      investment: '$4,000',
      returns: '$1,200',
      duration: '6 months'
    },

    // 8. Urdu - Daily expenses
    {
      id: '8',
      name: 'Fatima Noor',
      avatar: 'FN',
      rating: 4,
      content: 'Ghar ka kharcha chalanay mein bohat madad mili hai FÔMOFI se. Har mahine 30-35k ka profit aata hai jo groceries aur bills mein kaam aata hai. Verification 25 minute mein ho gaya tha.',
      investment: '$3,500',
      returns: '$1,050',
      duration: '5 months'
    },

    // 7. English - Side income
    {
      id: '7',
      name: 'Bilal Ahmed',
      avatar: 'BA',
      rating: 5,
      content: 'As a freelancer, income was never consistent. FÔMOFI gives me that stability. Even in slow months, I have this passive income. The 15-minute verification was a pleasant surprise!',
      investment: '$4,000',
      returns: '$1,200',
      duration: '6 months'
    },

    // 8. Urdu - Mixed review
    {
      id: '8',
      name: 'Sana Khan',
      avatar: 'SK',
      rating: 3,
      content: 'Thik thak hai, verification 1 ghaye mein hua tha. Paisay to time pe aajate hain lekin app kabhi kabhi hang hota hai. Support ne 1 din baad reply diya tha.',
      investment: '$2,500',
      returns: '$750',
      duration: '4 months'
    },

    // 9. English - Business investment
    {
      id: '9',
      name: 'Tariq Mehmood',
      avatar: 'TM',
      rating: 5,
      content: 'Used my FÔMOFI profits to start a small home-based catering business! The platform is so reliable that I can focus on my new venture with peace of mind.',
      investment: '$5,000',
      returns: '$1,500',
      duration: '6 months'
    },

    // 10. Urdu - Student success
    {
      id: '10',
      name: 'Ayesha Riaz',
      avatar: 'AR',
      rating: 5,
      content: 'Medical ki student hoon, FÔMOFI se jo paise milte hain wo meri books aur hostel fees mein kaam aate hain. Bohat acha hai, verification bhi 15 minute mein ho gaya tha!',
      investment: '$1,500',
      returns: '$450',
      duration: '3 months'
    },

    // 11. English - Retirement fund
    {
      id: '11',
      name: 'Khalid Mahmood',
      avatar: 'KM',
      rating: 5,
      content: 'Retired now, and FÔMOFI gives me a sense of financial security. The monthly returns cover my medicines and some leisure activities. Simple to use at any age!',
      investment: '$7,000',
      returns: '$2,100',
      duration: '9 months'
    },

    // 12. Urdu - Simple appreciation
    {
      id: '12',
      name: 'Imran',
      avatar: 'IM',
      rating: 5,
      content: 'Kamal ka platform hai!',
      investment: '$3,000',
      returns: '$900',
      duration: '5 months'
    },
    
    // 13. Urdu - Mixed review
    {
      id: '13',
      name: 'Nadia Shah',
      avatar: 'NS',
      rating: 4,
      content: 'Acha hai lekin withdrawal process thora complicated hai. Pehli baar 24 hours lag gaye the paise anay mein. Lekin ab regularly 2-3 ghante lagte hain. Paisa aata hai to theek hai.',
      investment: '$3,000',
      returns: '$900',
      duration: '5 months'
    },

    // 13. English - Wedding savings
    {
      id: '13',
      name: 'Asad Ali',
      avatar: 'AA',
      rating: 5,
      content: 'Saving for my sister\'s wedding was tough until I found FÔMOFI. In just 6 months, I\'ve earned enough to cover half the wedding expenses. The platform is a lifesaver!',
      investment: '$8,000',
      returns: '$2,400',
      duration: '6 months'
    },

    // 14. Urdu - Housewife's success
    {
      id: '14',
      name: 'Sadia Akhtar',
      avatar: 'SA',
      rating: 5,
      content: 'Ghar baithe paise kamana asaan nahi hota, lekin FÔMOFI ne mumkin kar diya! Ab main apne liye bhi kuch kharid sakti hoon bina kisi se maange. Verification 30 minute mein ho gaya tha.',
      investment: '$2,000',
      returns: '$600',
      duration: '4 months'
    },

    // 15. English - Final success story
    {
      id: '15',
      name: 'Faisal Khan',
      avatar: 'FK',
      rating: 5,
      content: 'From skeptic to believer! Started with $100 just to test, now I\'m earning enough to cover my car EMI. The best financial decision I made last year. Verification was done in 20 minutes!',
      investment: '$5,000',
      returns: '$1,500',
      duration: '6 months'
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