# FomoFi - Cryptocurrency Investment Platform

A modern, responsive cryptocurrency investment platform built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Investment Plans**: Multiple investment tiers with different APY rates
- **Investment Calculator**: Interactive calculator with compound interest calculations
- **User Onboarding**: Step-by-step onboarding process
- **Payment Integration**: TRC20 USDT deposit support
- **Referral Program**: Multi-tier referral system with increasing commission rates
- **Customer Testimonials**: Social proof with customer reviews
- **FAQ Section**: Comprehensive frequently asked questions
- **Contact Forms**: Multiple contact and newsletter subscription forms
- **Mobile Responsive**: Fully responsive design for all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons, Lucide React
- **Forms**: React Hook Form
- **Utilities**: clsx for conditional styling

## 📦 Components

### Core Components
- `Header` - Navigation header with mobile menu
- `Hero` - Landing page hero section
- `Footer` - Site footer with social links

### Feature Components
- `FeaturesList` - Platform features showcase
- `PlansSection` - Investment plans comparison
- `InvestmentCalculator` - Interactive ROI calculator
- `OnboardingSteps` - User onboarding flow
- `PaymentInfo` - Payment methods and instructions
- `ReferralProgram` - Referral system details
- `Testimonials` - Customer testimonials carousel
- `FAQ` - Frequently asked questions
- `ContactForm` - Contact form with validation
- `NewsletterSubscribe` - Newsletter subscription

### UI Components
- `Button` - Reusable button component with variants
- `Icon` - Icon wrapper component

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fomo.v.3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
fomo.v.3/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Plans/            # Plan-related components
│   ├── ui/               # Reusable UI components
│   └── [component].tsx   # Individual components
├── hooks/                # Custom React hooks
│   └── useCalculator.ts  # Investment calculator logic
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── videos/          # Video assets
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Colors
The project uses a custom color scheme with lime-green accents. Main colors:
- Primary: `#00ff88` (lime-400)
- Background: Black/White
- Text: Gray scale

### Components
All components are modular and can be easily customized:
- Modify styling in individual component files
- Update content in component props/data
- Add new features by extending existing components

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components
1. Create component in `components/` directory
2. Export from the component file
3. Import and use in pages or other components

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Contact the development team for contribution guidelines.

## 📞 Support

For support and questions, contact the development team or use the contact form on the website.