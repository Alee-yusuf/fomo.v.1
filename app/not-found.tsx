import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-lime-400 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
          
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Link
              href="/dashboard"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              Dashboard
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/admin"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
        
        {/* FÔMOFI Logo */}
        <div className="mt-12">
          <div className="text-lime-400 font-bold text-xl">
            FÔMOFI
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Your Investment Platform
          </p>
        </div>
      </div>
    </div>
  );
}