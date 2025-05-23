"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface AdvancedImageCarouselProps {
  images: string[]
  interval?: number
  alt: string
  className?: string
  showControls?: boolean
  showIndicators?: boolean
  pauseOnHover?: boolean
  onSlideChange?: (index: number) => void // Nova prop para notificar mudanças
}

export default function AdvancedImageCarousel({
  images,
  interval = 4000,
  alt,
  className,
  showControls = true,
  showIndicators = true,
  pauseOnHover = true,
  onSlideChange,
}: AdvancedImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    const newIndex = (currentImageIndex + 1) % images.length
    setCurrentImageIndex(newIndex)
    onSlideChange?.(newIndex) // Notifica sobre a mudança
  }, [currentImageIndex, images.length, onSlideChange])

  const goToPrevious = useCallback(() => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length
    setCurrentImageIndex(newIndex)
    onSlideChange?.(newIndex) // Notifica sobre a mudança
  }, [currentImageIndex, images.length, onSlideChange])

  const goToSlide = useCallback((index: number) => {
    setCurrentImageIndex(index)
    onSlideChange?.(index) // Notifica sobre a mudança
  }, [onSlideChange])

  // Notifica sobre a mudança inicial quando o componente é montado
  useEffect(() => {
    onSlideChange?.(currentImageIndex)
  }, [currentImageIndex, onSlideChange])

  useEffect(() => {
    if (isPaused) return

    const intervalId = setInterval(() => {
      goToNext()
    }, interval)

    return () => clearInterval(intervalId)
  }, [goToNext, interval, isPaused])

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden rounded-lg shadow-xl", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500",
            index === currentImageIndex ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`${alt} ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
            style={{
              width:'550px',
              height: '300px'
            }}
          />
        </div>
      ))}

      {/* Navigation Controls */}
      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                index === currentImageIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80",
              )}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}