"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { isMirrorHour, getMirrorHourMeaning } from "@/lib/mirror-hours"

export function CurrentClock() {
  const [currentTime, setCurrentTime] = useState("")
  const [isMirror, setIsMirror] = useState(false)
  const [meaning, setMeaning] = useState("")

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const timeString = `${hours}:${minutes}`

      setCurrentTime(timeString)

      const mirror = isMirrorHour(timeString)
      setIsMirror(mirror)

      if (mirror) {
        setMeaning(getMirrorHourMeaning(timeString))
      } else {
        setMeaning("")
      }
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-serif text-center mb-6 text-pink-800">Current Time</h2>
      <Card
        className={`w-full max-w-md border-2 ${isMirror ? "border-pink-400 shadow-lg shadow-pink-200" : "border-gray-200"} transition-all duration-500`}
      >
        <CardContent className="p-6">
          <div className="text-6xl md:text-7xl font-mono text-center py-8 tracking-widest">{currentTime}</div>
          {isMirror && (
            <div className="mt-4 text-center animate-fade-in">
              <div className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                Mirror Hour Detected!
              </div>
              <p className="text-purple-700">{meaning}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
