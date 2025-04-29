type MirrorHour = {
  time: string
  meaning: string
  category: string
}

const mirrorHoursData: MirrorHour[] = [
  {
    time: "00:00",
    meaning: "A moment of pure potential. This mirror hour signifies new beginnings and infinite possibilities.",
    category: "Palindrome",
  },
  {
    time: "01:10",
    meaning: "Your guardian angels are trying to communicate with you. Pay attention to your intuition.",
    category: "Mirror",
  },
  {
    time: "01:01",
    meaning: "A sign of independence and leadership. Trust your abilities to forge your own path.",
    category: "Palindrome",
  },
  {
    time: "02:20",
    meaning:
      "Balance is coming into your life. This mirror hour suggests harmony between different aspects of your being.",
    category: "Mirror",
  },
  {
    time: "02:02",
    meaning: "Cooperation and diplomacy are highlighted. Your relationships will benefit from compromise.",
    category: "Palindrome",
  },
  {
    time: "03:30",
    meaning: "Your creative energies are at their peak. Express yourself and share your unique gifts.",
    category: "Mirror",
  },
  {
    time: "03:03",
    meaning: "Communication is key right now. Your words have power to transform situations.",
    category: "Palindrome",
  },
  {
    time: "04:40",
    meaning: "A foundation is being built. This mirror hour suggests stability and security are developing.",
    category: "Mirror",
  },
  {
    time: "04:04",
    meaning: "Structure and organization will lead to success. Create systems that support your goals.",
    category: "Palindrome",
  },
  {
    time: "05:50",
    meaning: "Change is on the horizon. Embrace new experiences and opportunities for growth.",
    category: "Mirror",
  },
  {
    time: "05:05",
    meaning: "Freedom and adventure await. Break free from limitations and explore new possibilities.",
    category: "Palindrome",
  },
  {
    time: "06:06",
    meaning: "Material needs are being addressed. This mirror hour relates to home, family, and security.",
    category: "Palindrome",
  },
  {
    time: "07:07",
    meaning: "Spiritual awakening and inner wisdom. Trust the journey of self-discovery.",
    category: "Palindrome",
  },
  {
    time: "08:08",
    meaning: "Abundance and prosperity are flowing to you. Recognize and appreciate the wealth in your life.",
    category: "Palindrome",
  },
  {
    time: "09:09",
    meaning: "A cycle is completing. Prepare for culmination and the beginning of something new.",
    category: "Palindrome",
  },
  {
    time: "10:01",
    meaning: "Your thoughts are manifesting rapidly. Focus on positive intentions and desires.",
    category: "Mirror",
  },
  {
    time: "10:10",
    meaning: "Divine guidance is available to you. Pay attention to signs and synchronicities.",
    category: "Palindrome",
  },
  {
    time: "11:11",
    meaning: "A powerful moment of manifestation. Make a wish as your thoughts align with universal energy.",
    category: "Palindrome",
  },
  {
    time: "12:21",
    meaning: "Balance between spiritual and material worlds. Integration of different aspects of self.",
    category: "Mirror",
  },
  {
    time: "12:12",
    meaning: "Spiritual awakening and enlightenment. You're aligning with your higher purpose.",
    category: "Palindrome",
  },
  {
    time: "13:31",
    meaning: "Creative expression and joy. Share your unique gifts with the world.",
    category: "Mirror",
  },
  {
    time: "14:41",
    meaning: "Building foundations for the future. Your efforts now will create lasting results.",
    category: "Mirror",
  },
  {
    time: "15:51",
    meaning: "Transformation and positive change. Embrace the evolution of your life path.",
    category: "Mirror",
  },
  {
    time: "16:61",
    meaning: "Harmony in home and relationships. Nurture connections with loved ones.",
    category: "Mirror",
  },
  {
    time: "17:71",
    meaning: "Spiritual insights and wisdom. Listen to your inner voice and intuition.",
    category: "Mirror",
  },
  {
    time: "18:81",
    meaning: "Material abundance and success. Your hard work is being recognized and rewarded.",
    category: "Mirror",
  },
  {
    time: "19:91",
    meaning: "Completion and fulfillment. A cycle is ending, making way for new beginnings.",
    category: "Mirror",
  },
  {
    time: "20:02",
    meaning: "Partnerships and cooperation. Working with others will bring success.",
    category: "Mirror",
  },
  {
    time: "21:12",
    meaning: "Spiritual guidance and protection. Your angels are watching over you.",
    category: "Mirror",
  },
  {
    time: "22:22",
    meaning: "Master builder energy. You have the power to create the life you desire.",
    category: "Palindrome",
  },
  {
    time: "23:32",
    meaning: "Joy and creative expression. Share your unique perspective with the world.",
    category: "Mirror",
  },
]

export function isMirrorHour(time: string): boolean {
  return mirrorHoursData.some((hour) => hour.time === time)
}

export function getMirrorHourMeaning(time: string): string {
  const hour = mirrorHoursData.find((hour) => hour.time === time)
  return hour ? hour.meaning : ""
}

export function getAllMirrorHours(): MirrorHour[] {
  return mirrorHoursData
}
