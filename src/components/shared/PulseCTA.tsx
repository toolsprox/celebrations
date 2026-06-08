'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function PulseCTA({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) {
  return (
    <div className="relative inline-block">
      {/* Radar Ripple Rings */}
      <motion.div
        animate={{ scaleX: [1, 1.15], scaleY: [1, 1.3], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 bg-[#7CFF01] rounded-2xl z-0"
      />
      <motion.div
        animate={{ scaleX: [1, 1.15], scaleY: [1, 1.3], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
        className="absolute inset-0 bg-[#7CFF01] rounded-2xl z-0"
      />
      
      {/* Actual Button */}
      <Link href={href} className={`relative z-10 block ${className}`}>
        {children}
      </Link>
    </div>
  )
}
