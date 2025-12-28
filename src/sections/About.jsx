import { Code2, Rocket, ShieldCheck, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'writing code that is easy to read and maintain.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'optimizing applications for speed and efficiency.',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description: 'implementing best practices to protect data and privacy.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'working effectively within diverse teams.',
  },
];

export const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden '>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Columns */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm  font-medium tracking-wider uppercase'>
                About Me
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Building the future,{' '}
              <span className='font-serif italic font-normal text-white'>
                {' '}
                one line of code at a time.
              </span>
            </h2>

            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                I'm a passionate software developer with a strong focus on
                creating efficient, scalable, and user-friendly applications. My
                journey in tech began with a curiosity for how things work, and
                it has evolved into a career dedicated to solving complex
                problems through clean and innovative code.
              </p>
              <p>
                I'm also committed to continuous learning and staying up-to-date
                with the latest industry trends and technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "My mission is to leverage technology to create impactful
                solutions that enhance user experiences and drive business
                success."
              </p>
            </div>
          </div>

          {/* Right Column -Highlights */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className='glass p-6 rounded-2xl animate-fade-in '
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center  justify-center mb-4 hover:bg-primary/20'>
                  <item.icon className='w-6 h-6 text-primary ' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
