'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarHeart, ArrowRight, Users, Sparkles, Cake } from 'lucide-react'

export default function CelebrationsPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EC] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-black/5 text-[#0F0F0F] rounded-full px-4 py-1.5 mb-6 border border-black/10">
            <Cake className="w-4 h-4 text-[#5CB800]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Family & Celebrations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#0F0F0F]">Make Every Moment <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01]">Unforgettable.</span></h1>
          <p className="text-xl text-black/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether it's a family reunion, a milestone birthday, or a weekend gathering, Masakali London is the perfect venue for large groups seeking the best Indian food in the city.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-black/5">
            <Users className="w-10 h-10 text-[#5CB800] mb-4" />
            <h3 className="font-serif font-bold text-2xl mb-3">Spacious Group Seating</h3>
            <p className="text-black/60 text-sm">Comfortably accommodating large families and parties. Reserve large tables in advance so everyone can sit together.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-black/5">
            <Sparkles className="w-10 h-10 text-[#5CB800] mb-4" />
            <h3 className="font-serif font-bold text-2xl mb-3">Custom Set Menus</h3>
            <p className="text-black/60 text-sm">Take the stress out of ordering for a large group with our curated family-style sharing menus.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0F0F0F] text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7CFF01] rounded-full blur-[50px] opacity-20"></div>
            <CalendarHeart className="w-10 h-10 text-[#7CFF01] mb-4 relative z-10" />
            <h3 className="font-serif font-bold text-2xl mb-3 relative z-10">Book Your Event</h3>
            <p className="text-white/60 text-sm mb-6 relative z-10">Weekends fill up fast. Secure your large group booking today.</p>
            <Link href="/reserve?segment=celebrations" className="inline-flex items-center text-sm font-bold bg-[#7CFF01] text-black px-6 py-3 rounded-xl hover:bg-white transition-colors relative z-10">
              Check Availability <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
