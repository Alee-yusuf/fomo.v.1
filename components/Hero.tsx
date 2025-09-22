
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                TAP. EARN. REPEAT.
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-lime-400">
                Mine Rewards
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold text-lime-400">
                Backed by Pro Traders.
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              FastFit is built for beginners and powered by pro traders. Choose from flexible 
              plans, tap daily to mine, bet earn rewards, gain, and reward because it&apos;s simple 
              to use and profitable to earn.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Start Mining Now
              </button>
              <button className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                See Pros
              </button>
            </div>
          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/heroImg.webp"
                alt="Bitcoin Mining Hologram"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;