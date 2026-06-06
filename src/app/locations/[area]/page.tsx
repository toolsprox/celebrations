'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Star, Clock, ChefHat } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function LocationPage() {
  const params = useParams()
  // Clean up the URL parameter (e.g., 'kings-cross' -> 'Kings Cross')
  const rawArea = params.area as string || 'London'
  const areaName = rawArea.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.10] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-[#7CFF01]/10 text-[#5CB800] rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Local Dining in {areaName}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">The Best Indian Restaurant <br/>Near <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01]">{areaName}</span></h1>
          <p className="text-lg text-black/60 mb-8">
            Looking for authentic, elevated Indian cuisine near {areaName}? Masakali London is just a stone's throw away. Whether you're planning a corporate lunch, a weekend date night, or dinner with the family, experience the vibrant flavors of India right in your neighborhood.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/reserve" className="bg-[#0F0F0F] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#7CFF01] hover:text-black transition-all flex items-center shadow-lg">
              Book Your Table <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Tailored Segments Section */}
        <div className="py-12 border-t border-black/5 mt-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Perfect For Any Occasion in {areaName}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/corporate" className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform group">
              <h3 className="font-bold text-xl mb-3 group-hover:text-[#5CB800] transition-colors">Corporate Dining</h3>
              <p className="text-black/60 text-sm">Impress clients or host team lunches with our dedicated corporate packages just minutes from {areaName}.</p>
            </Link>
            <Link href="/celebrations" className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform group">
              <h3 className="font-bold text-xl mb-3 group-hover:text-[#5CB800] transition-colors">Family & Celebrations</h3>
              <p className="text-black/60 text-sm">Large tables and sharing menus available for birthday parties and family gatherings near {areaName}.</p>
            </Link>
            <Link href="/students" className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform group">
              <h3 className="font-bold text-xl mb-3 group-hover:text-[#5CB800] transition-colors">Student Discounts</h3>
              <p className="text-black/60 text-sm">Studying near {areaName}? Show your ID for exclusive student pricing on premium Indian dishes.</p>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-[#0F0F0F] rounded-[2.5rem] p-12 text-white text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#7CFF01] rounded-full blur-[100px] opacity-20"></div>
           <ChefHat className="w-12 h-12 text-[#7CFF01] mx-auto mb-6 relative z-10" />
           <h2 className="text-3xl font-serif font-bold mb-4 relative z-10">Experience Masakali Tonight</h2>
           <p className="text-white/60 mb-8 max-w-lg mx-auto relative z-10">Our chefs are preparing London's finest Indian cuisine just moments away from {areaName}.</p>
           <Link href="/menu" className="inline-flex bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-[#7CFF01] transition-colors relative z-10">
             View Our Menu
           </Link>
        </div>
      </div>
    </main>
  )
}
