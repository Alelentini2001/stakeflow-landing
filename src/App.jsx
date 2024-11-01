import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronRight,
  Github,
  Twitter,
  Shield,
  Coins,
  Zap,
  PieChart,
  Users,
  ArrowUpRight,
  Lock,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './components/ui/Button';
import { Badge } from './components/ui/Badge';
import { Card } from './components/ui/Card';
import { TextGenerateEffect } from './components/ui/text-generate-effect';
import { BackgroundGradient } from './components/ui/background-gradient';
import { SparklesCore } from './components/ui/sparkles';
import { blockchainLogos } from './assets';
import { CodeBlock } from './components/ui/CodeBlock';
import './styles/fonts.css';

gsap.registerPlugin(ScrollTrigger);

function Logo({ className = 'w-10 h-10' }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Outer Ring - Security */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke="url(#ringGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0, rotate: -90 }}
        animate={{ pathLength: 1, rotate: 0 }}
        transition={{
          pathLength: { duration: 1.5, ease: 'easeInOut' },
          rotate: { duration: 1.5, ease: 'easeInOut' },
        }}
      />

      {/* Dynamic Flow Lines - Velocity */}
      <motion.path
        d="M30 50C30 40 70 40 70 50C70 60 30 60 30 50"
        stroke="url(#flowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Central Energy Ring - Innovation */}
      <motion.circle
        cx="50"
        cy="50"
        r="20"
        stroke="url(#innerGradient)"
        strokeWidth="3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Pulse Effect */}
      <motion.circle
        cx="50"
        cy="50"
        r="15"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Core Dot */}
      <motion.circle
        cx="50"
        cy="50"
        r="4"
        fill="white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 1,
          type: 'spring',
          stiffness: 400,
        }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <motion.stop
            offset="0%"
            stopColor="#0EA5E9"
            animate={{
              stopColor: ['#0EA5E9', '#2563EB', '#0EA5E9'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <Card className="feature-card">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
}

function StatCard({ value, label }) {
  return (
    <Card className="text-center">
      <div className="text-3xl font-bold text-blue-500 mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </Card>
  );
}

function AnimatedLogo({ className = 'w-10 h-10' }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        filter: 'brightness(1.2)',
      }}
      whileTap={{
        scale: 0.95,
        filter: 'brightness(0.9)',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
    >
      <Logo className={className} />
    </motion.div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const heroWords = [
    'Gas-Free Payments',
    'Staking Rewards',
    'DeFi Innovation',
    'Web3 Future',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <AnimatedLogo className="w-8 h-8" />
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-gray-300 hover:text-white">
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-white"
                >
                  How it Works
                </a>
                <a
                  href="#tokenomics"
                  className="text-gray-300 hover:text-white"
                >
                  Tokenomics
                </a>
                <a
                  href="#developers"
                  className="text-gray-300 hover:text-white"
                >
                  Developers
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm">Launch App</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-blue-500/10 text-blue-500 border border-blue-500/20">
              Revolutionizing Web3 Payments
            </Badge>

            <div className="mb-6">
              <h1 className={`text-7xl font-bold mb-4 font-space-grotesk`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  StakeFlow
                </span>
              </h1>
              <TextGenerateEffect
                words={heroWords}
                className="text-6xl font-bold"
              />
            </div>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Enable gas-free cryptocurrency transactions powered by our
              innovative staking pool mechanism. Join thousands of users already
              benefiting from our revolutionary platform.
            </p>

            <div className="flex gap-4 justify-center mb-12">
              {/* <BackgroundGradient className="rounded-[22px] p-1">
                <Button size="lg" className="dark:bg-zinc-900">
                  Start Building <ChevronRight className="ml-2" />
                </Button>
              </BackgroundGradient> */}
              <Button size="lg" className="dark:bg-zinc-900">
                Start Building <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>

            {/* Added Stats Banner */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <BackgroundGradient className="rounded-[22px] p-6 text-center">
                <div className="text-3xl font-bold text-blue-500">$10M+</div>
                <div className="text-sm text-gray-400">Total Value Locked</div>
              </BackgroundGradient>
              <BackgroundGradient className="rounded-[22px] p-6 text-center">
                <div className="text-3xl font-bold text-purple-500">100K+</div>
                <div className="text-sm text-gray-400">Transactions</div>
              </BackgroundGradient>
              <BackgroundGradient className="rounded-[22px] p-6 text-center">
                <div className="text-3xl font-bold text-blue-500">50K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </BackgroundGradient>
            </div>

            {/* Add Supported Blockchains */}
            <div className="mt-12 flex justify-center gap-8 items-center flex-wrap">
              {Object.entries(blockchainLogos).map(([name, logo]) => (
                <BackgroundGradient
                  key={name}
                  className="rounded-full p-2 hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </BackgroundGradient>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Example Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Simple Integration
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <CodeBlock
                code={`import { StakeFlow } from '@stakeflow/sdk';

// Initialize StakeFlow
const stakeflow = new StakeFlow({
  apiKey: 'your-api-key',
  network: 'ethereum'
});

// Create gas-free payment
const payment = await stakeflow.createPayment({
  amount: '0.1',
  token: 'ETH',
  recipient: '0x...'
});

// Execute transaction
const result = await payment.execute();`}
                language="javascript"
                disableCopy={true}
              />
            </div>

            <BackgroundGradient className="rounded-[22px] p-6">
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="border border-gray-800 rounded-xl p-6">
                  {/* Company Brand Section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <span className="text-blue-500 font-bold">D</span>
                      </div>
                      <span className="font-semibold">DemoApp</span>
                    </div>
                    <div className="text-sm text-gray-400">Secure Payment</div>
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Amount</span>
                      <span className="font-semibold">0.1 ETH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Network Fee</span>
                      <span className="text-green-500">
                        Covered by StakeFlow
                      </span>
                    </div>
                    <div className="border-t border-gray-800 my-4"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total</span>
                      <span className="font-bold text-lg">0.1 ETH</span>
                    </div>
                  </div>

                  {/* Payment Button */}
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                    Confirm Payment
                  </button>

                  {/* Security Badge */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Lock className="w-4 h-4" />
                    <span>Secured by StakeFlow</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-4">
                  Easily customize the payment interface to match your brand.
                  Add your logo, colors, and style to create a seamless
                  experience.
                </p>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </section>

      {/* Security Section - New */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Enterprise-Grade Security
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <BackgroundGradient className="rounded-[22px] p-6">
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-green-500" />}
                title="Audited Smart Contracts"
                description="All contracts are audited by leading security firms and open-source for transparency."
              />
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] p-6">
              <FeatureCard
                icon={<Lock className="w-8 h-8 text-yellow-500" />}
                title="Multi-Sig Security"
                description="Critical operations require multiple signatures from trusted parties."
              />
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] p-6">
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-red-500" />}
                title="Insurance Coverage"
                description="All staked assets are covered by our comprehensive insurance policy."
              />
            </BackgroundGradient>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Revolutionary Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <BackgroundGradient className="rounded-[22px] p-6">
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-blue-500" />}
                title="Gas-Free Transactions"
                description="Never worry about gas fees again. Our platform covers gas fees for users lacking sufficient funds."
              />
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] p-6">
              <FeatureCard
                icon={<Coins className="w-8 h-8 text-purple-500" />}
                title="Staking Rewards"
                description="Earn passive income by staking tokens in our pool. Share in transaction fees and platform revenue."
              />
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] p-6">
              <FeatureCard
                icon={<Zap className="w-8 h-8 text-yellow-500" />}
                title="Instant Processing"
                description="Experience lightning-fast transactions with our optimized processing system."
              />
            </BackgroundGradient>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    User Initiates Transaction
                  </h3>
                  <p className="text-gray-400">
                    User wants to make a transaction but lacks gas fees
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Platform Covers Gas
                  </h3>
                  <p className="text-gray-400">
                    Our platform automatically covers the gas fees from the
                    staking pool
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fee Distribution</h3>
                  <p className="text-gray-400">
                    1% fee is collected and distributed between stakers and
                    platform
                  </p>
                </div>
              </div>
            </div>

            <BackgroundGradient className="rounded-[22px] p-6">
              <div className="aspect-square relative bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0">
                  <SparklesCore
                    id="howItWorksSparkles"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={40}
                    className="w-full h-full"
                    particleColor="#60A5FA"
                    speed={0.5}
                    particleWander={2}
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <AnimatedLogo className="w-24 h-24" />
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <motion.span
                        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-lg"
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.div
                        className="relative text-5xl font-bold"
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        style={{
                          backgroundImage:
                            'linear-gradient(to right, #60A5FA, #8B5CF6, #60A5FA)',
                          backgroundSize: '200% auto',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        StakeFlow
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Additional floating sparkles */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          y: [-20, 20],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Tokenomics</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <BackgroundGradient className="rounded-[22px] p-8">
              <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Staking Pool</span>
                  <span className="text-blue-500">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Community Rewards</span>
                  <span className="text-blue-500">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Team & Development</span>
                  <span className="text-blue-500">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Marketing & Partnerships</span>
                  <span className="text-blue-500">15%</span>
                </div>
              </div>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] p-8">
              <h3 className="text-2xl font-bold mb-6">Fee Structure</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Platform Fee</span>
                  <span className="text-purple-500">1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Staker Rewards</span>
                  <span className="text-purple-500">0.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Platform Operations</span>
                  <span className="text-purple-500">0.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Gas Coverage</span>
                  <span className="text-purple-500">Variable</span>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section id="developers" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Built for Developers
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Easy Integration</h3>
              <p className="text-gray-400">
                Integrate our gas-free payment solution with just a few lines of
                code.
              </p>
              <BackgroundGradient className="rounded-[22px] p-4">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-gray-300">
                    {`import { StakeFlow } from '@stakeflow/sdk';

const payment = new StakeFlow({
  apiKey: 'your-api-key'
});

// Initialize gas-free transaction
await payment.sendTransaction({
  to: receiver,
  amount: value
});`}
                  </code>
                </pre>
              </BackgroundGradient>
            </div>

            <div className="space-y-8">
              <BackgroundGradient className="rounded-[22px] p-6">
                <h3 className="text-xl font-bold mb-4">Developer Resources</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-blue-500" />
                    <span>Comprehensive Documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-blue-500" />
                    <span>API Reference</span>
                  </li>
                </ul>
              </BackgroundGradient>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with expanded content */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <AnimatedLogo className="w-8 h-8 mb-4" />
              <p className="text-gray-400">
                The future of gas-free Web3 payments.
              </p>
              <div className="flex gap-4 mt-4">
                <Button variant="ghost" size="sm">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#tokenomics"
                    className="text-gray-400 hover:text-white"
                  >
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-gray-400 hover:text-white">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Developers</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    SDK
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 StakeFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
