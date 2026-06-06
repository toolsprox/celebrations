'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight, MapPin, Star, Clock } from 'lucide-react'

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.10] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-[#7CFF01]/10 text-[#5CB800] rounded-full px-4 py-1.5 mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Student Exclusive</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Premium Indian Dining, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01]">Student Prices.</span></h1>
          <p className="text-lg text-black/60 mb-8">
            Looking for an affordable Indian restaurant in London without compromising on quality? Show your student ID and unlock exclusive discounts for you and your mates. Perfect for end-of-term celebrations or a quick, high-quality bite near UCL and King's College.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/reserve?segment=student" className="bg-[#0F0F0F] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#7CFF01] hover:text-black transition-all flex items-center shadow-lg">
              Book a Table <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform">
            <Star className="w-8 h-8 text-[#7CFF01] mb-4" />
            <h3 className="font-bold text-xl mb-3">Top Rated for Groups</h3>
            <p className="text-black/60 text-sm">Spacious tables and a vibrant atmosphere, perfect for societies and large friend groups.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform border border-[#7CFF01]/30">
            <MapPin className="w-8 h-8 text-[#7CFF01] mb-4" />
            <h3 className="font-bold text-xl mb-3">Central Location</h3>
            <p className="text-black/60 text-sm">Located right near major university campuses in Kings Cross and Euston. Easy to get to.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform">
            <Clock className="w-8 h-8 text-[#7CFF01] mb-4" />
            <h3 className="font-bold text-xl mb-3">Late Night Eats</h3>
            <p className="text-black/60 text-sm">Open late Thursday through Sunday to satisfy those post-library or pre-night-out cravings.</p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
