import { RefObject, useEffect, useState } from 'react'

interface MouseTilt {
  rotateX: number
  rotateY: number
}

export default function useMouseTilt(containerRef: RefObject<HTMLElement>): MouseTilt {
  const [rotate, setRotate] = useState<MouseTilt>({ rotateX: 0, rotateY: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width/2
      const centerY = rect.top + rect.height/2
      
      setRotate({
        rotateX: -(e.clientY - centerY) / 15,
        rotateY: (e.clientX - centerX) / 15
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [containerRef])

  return rotate
}
