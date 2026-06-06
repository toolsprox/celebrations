'use client'

import { useRef, useState, ReactElement, cloneElement } from 'react'
import { motion } from 'framer-motion'

interface MagneticProps {
  children: ReactElement
  pullPower?: number
}

export default function Magnetic({ children, pullPower = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    if (!ref.current) return
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate distance from center of element
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    setPosition({ x: middleX * pullPower, y: middleY * pullPower })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
