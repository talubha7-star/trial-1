'use client'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'

function Section({ id, className = '', children }: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return <section id={id} className={`container ${className}`}>{children}</section>
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50 border-b">
        <Section className="flex items-center justify-between h-16">
          <a href="#home" className="font-bold text-xl tracking-tight">YourBrand</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a className="btn btn-primary hidden md:inline-flex group" href="#contact">
            Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"/>
          </a>
        </Section>
      </header>

      <Section id="home" className="py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Build a clean, modern website in minutes
            </motion.h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              This starter template gives you a beautiful foundation: accessible components, responsive layout,
              and sections you can tailor to your brand.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="btn btn-primary">Launch Demo</a>
              <a href="#about" className="btn">Learn More</a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {['Responsive out of the box','SEO-friendly structure','Utility-first styling','Clean components'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="card">
              <div className="p-6 border-b"><div className="font-semibold">Preview Card</div></div>
              <div className="p-6">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-100 to-sky-100 border" />
                <p className="mt-4 text-sm text-slate-600">Swap this with product screenshots, a promo image, or a short explainer.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="features" className="py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Features that matter</h2>
          <p className="mt-3 text-slate-600">A sensible starting point you can extend as your project grows.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {title: 'Fast & Responsive', desc: 'Modern Next.js + Tailwind for crisp layouts on any device.'},
            {title: 'Easy to Customize', desc: 'Edit text, colors, and sections quickly with utility classes.'},
            {title: 'Production-ready', desc: 'Clean structure and accessible defaults to ship faster.'}
          ].map((f) => (
            <div key={f.title} className="card">
              <div className="p-6 border-b"><div className="font-semibold">{f.title}</div></div>
              <div className="p-6 text-sm text-slate-600 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" className="py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">About YourBrand</h3>
            <p className="mt-4 text-slate-600">Add a concise mission statement here. Explain who you serve and the value you deliver.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white border">
                <div className="font-semibold">Mission</div>
                <p className="text-slate-600 mt-1">Short, memorable purpose that guides decisions.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border">
                <div className="font-semibold">Values</div>
                <p className="text-slate-600 mt-1">List 3–5 principles that shape how you work.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="text-3xl font-bold">10x</div><div className="text-slate-600">Faster setup</div></div>
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="text-3xl font-bold">100%</div><div className="text-slate-600">Responsive</div></div>
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="text-3xl font-bold">A11y</div><div className="text-slate-600">Accessible defaults</div></div>
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="text-3xl font-bold">SEO</div><div className="text-slate-600">Semantic HTML</div></div>
            </div>
          </div>
        </div>
      </Section>

      <div className="py-10">
        <Section>
          <div className="rounded-2xl border bg-gradient-to-r from-indigo-50 to-sky-50 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Ready to ship your site?</h4>
              <p className="text-slate-600">Replace placeholder copy and deploy to Vercel, Netlify, or your host.</p>
            </div>
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </div>
        </Section>
      </div>

      <Section id="contact" className="py-16">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-2 text-slate-600">Have a question? Reach out and we’ll get back to you.</p>
        </div>
        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card p-6">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" action="https://formspree.io/f/your-id" method="POST">
                <input name="first_name" placeholder="First name" className="input" required />
                <input name="last_name" placeholder="Last name" className="input" required />
                <input name="email" type="email" placeholder="Email" className="input sm:col-span-2" required />
                <textarea name="message" placeholder="Your message" className="textarea sm:col-span-2" required />
                <div className="sm:col-span-2">
                  <button className="btn btn-primary w-full" type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@yourbrand.com</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +27 00 000 0000</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Cape Town, South Africa</div>
          </div>
        </div>
      </Section>

      <footer className="py-10 border-t">
        <Section className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} YourBrand. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="nav-link">Privacy</a>
            <a href="#" className="nav-link">Terms</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </Section>
      </footer>
    </div>
  )
}
