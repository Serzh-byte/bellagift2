"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CuteDigitalCard() {
  const [isOpened, setIsOpened] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleOpenEnvelope = () => {
    setIsOpened(true)
    // Show hearts first, then message after animation
    setTimeout(() => {
      setShowMessage(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/solomon-islands-bg.png)",
          filter: "blur(8px)",
        }}
      />
      {/* Soft overlay to ensure readability */}
      <div className="absolute inset-0 bg-white/40" />

      <div className="relative max-w-md w-full z-10">
        {!isOpened ? (
          // Envelope component
          <div className="relative">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 shadow-lg p-8 text-center">
              {/* Envelope illustration */}
              <div className="relative mx-auto w-48 h-32 mb-6">
                {/* Envelope body */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg border-2 border-pink-200 shadow-md"></div>

                {/* Envelope flap */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-br from-pink-300 to-blue-300 rounded-t-lg border-2 border-pink-200 transform-gpu origin-bottom"></div>

                {/* Heart seal - Updated to use the specific heart emoji */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl">💞</div>
              </div>

              <h1 className="text-2xl font-bold text-gray-800 mb-4 text-balance font-rounded">
                A little something for you 💞
              </h1>

              <Button
                onClick={handleOpenEnvelope}
                className="bg-pink-400 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Open me 💌
              </Button>
            </Card>
          </div>
        ) : (
          // Opened envelope with message
          <div className="relative">
            {/* Floating hearts animation - Updated all hearts to use 💞 */}
            {isOpened && !showMessage && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute text-2xl heart-float`}
                    style={{
                      left: `${20 + i * 10}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    💞
                  </div>
                ))}
              </div>
            )}

            {/* Message card */}
            {showMessage && (
              <Card className={`bg-white/95 backdrop-blur-sm border-2 border-pink-200 shadow-xl p-8 bounce-in`}>
                <div className="text-center space-y-6">
                  <div className="text-4xl mb-4">💞</div>

                  <div className="space-y-4 text-gray-800 leading-relaxed font-rounded">
                    <p className="text-lg font-medium text-balance">You'll do just fine at work today 💞</p>

                    <p className="text-base text-pretty">
                      Think of the positives — like the paycheck or the fact that we'll see each other in just 3 days!
                    </p>

                    <p className="text-base text-pretty">
                      Don't focus on how long the shift feels, because the 9 hours will pass quickly if you don't fixate
                      on them.
                    </p>

                    <p className="text-lg font-semibold text-pink-600">You got this 💪💞</p>
                  </div>

                  <div className="pt-4 border-t border-pink-200">
                    <p className="text-sm font-medium text-gray-600 italic font-rounded">laf laf – your baby 🥰</p>
                  </div>

                  {/* Reset button */}
                  <Button
                    onClick={() => {
                      setIsOpened(false)
                      setShowMessage(false)
                    }}
                    variant="outline"
                    className="mt-6 text-sm border-pink-300 text-pink-600 hover:bg-pink-50"
                  >
                    Read again 💞
                  </Button>
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
