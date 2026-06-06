'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, ArrowRight, CheckCircle2, ShieldCheck, GlassWater } from 'lucide-react'

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white relative overflow-hidden font-sans pt-32 pb-16">
      <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.05] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#7CFF01]/10 text-[#7CFF01] rounded-full px-4 py-1.5 mb-6 border border-[#7CFF01]/20">
              <Briefcase className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Corporate Dining</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Impress Your Clients. <br/><span className="text-[#7CFF01]">Seal the Deal.</span></h1>
            <p className="text-white/60 text-lg mb-8">
              Masakali London offers the ultimate setting for business lunches and corporate dinners. With private tables, discreet service, and London's best Indian cuisine, we provide an upscale atmosphere guaranteed to leave a lasting impression.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white/80"><CheckCircle2 className="w-5 h-5 text-[#7CFF01] mr-3" /> Dedicated Corporate Packages</div>
              <div className="flex items-center text-white/80"><CheckCircle2 className="w-5 h-5 text-[#7CFF01] mr-3" /> Private & Semi-Private Dining Areas</div>
              <div className="flex items-center text-white/80"><CheckCircle2 className="w-5 h-5 text-[#7CFF01] mr-3" /> Expedited Lunch Menus for Busy Schedules</div>
            </div>

            <div className="flex gap-4">
              <Link href="/reserve?segment=corporate" className="bg-[#7CFF01] text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-all flex items-center shadow-lg">
                Book Corporate Table <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10"
          >
            <Image src="/images/hero_bbq_chicken.png" alt="Upscale Indian Dining" fill className="object-cover mix-blend-screen opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 glass-card-dark p-6 rounded-2xl border border-white/10">
              <ShieldCheck className="w-8 h-8 text-[#7CFF01] mb-2" />
              <h3 className="font-bold text-lg text-white mb-1">Corporate Accounts Available</h3>
              <p className="text-white/50 text-sm">Contact our management team to set up a corporate tab for seamless billing.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
