export type LocalizedText = {
  tr: string;
  en: string;
};

type MirrorHour = {
  time: string;
  title: LocalizedText;
  meaning: LocalizedText;
  category: string;
};

const mirrorHoursData: MirrorHour[] = [
  {
    time: "00:00",
    title: {
      tr: "Yeni bir döngü başlıyor",
      en: "A new cycle begins",
    },
    meaning: {
      tr: "Evren sana yepyeni bir başlangıç sunuyor. Geçmişi arkanda bırakmak ve cesur adımlar atmak için doğru zamandasın.",
      en: "The universe offers you a brand new beginning. It's the right time to leave the past behind and take brave steps forward.",
    },
    category: "Tam Ayna",
  },
  {
    time: "01:01",
    title: {
      tr: "Göz önündesin",
      en: "You're in the spotlight",
    },
    meaning: {
      tr: "Biri seni dikkatle izliyor ve sana dair güçlü duygular besliyor. Bu ilgi seni rahatsız etmiyorsa kendini açmayı düşünebilirsin.",
      en: "Someone is watching you carefully and harboring strong feelings for you. If this attention doesn't bother you, you might consider opening up.",
    },
    category: "Tam Ayna",
  },
  {
    time: "02:02",
    title: {
      tr: "Sessiz sevgi",
      en: "Silent love",
    },
    meaning: {
      tr: "Birinin sana karşı hisleri var ama bunları açıkça dile getiremiyor. Kalbindeki sessizliği hissetmeye çalış.",
      en: "Someone has feelings for you but can't express them openly. Try to feel the silence in their heart.",
    },
    category: "Tam Ayna",
  },
  {
    time: "03:03",
    title: {
      tr: "Zihninde sen varsın",
      en: "You're on their mind",
    },
    meaning: {
      tr: "Seni sürekli düşünen biri var, özellikle geceleri. Bu bağ düşündüğünden daha derin olabilir.",
      en: "Someone is constantly thinking about you, especially at night. This connection might be deeper than you think.",
    },
    category: "Tam Ayna",
  },
  {
    time: "04:04",
    title: {
      tr: "Koruyucu enerjiler aktif",
      en: "Protective energies active",
    },
    meaning: {
      tr: "Hayatında görünmeyen ama güçlü bir koruyucu enerji seni izliyor. Ruhsal destek sana çok yakın.",
      en: "An invisible but strong protective energy is watching over you. Spiritual support is very close to you.",
    },
    category: "Tam Ayna",
  },
  {
    time: "05:05",
    title: {
      tr: "Geçmiş kapıyı çalabilir",
      en: "The past may knock",
    },
    meaning: {
      tr: "Eski bir tanıdık ya da aşktan haber alabilirsin. Bu karşılaşma seni düşündürecek.",
      en: "You might hear from an old acquaintance or love. This encounter will make you think.",
    },
    category: "Tam Ayna",
  },
  {
    time: "06:06",
    title: {
      tr: "Duygusal bağ güçleniyor",
      en: "Emotional bond strengthening",
    },
    meaning: {
      tr: "Aile içindeki ya da romantik bir ilişkide duygusal derinlik artıyor. Kalbinle konuşmanın tam zamanı.",
      en: "Emotional depth is increasing in a family or romantic relationship. It's time to listen to your heart.",
    },
    category: "Tam Ayna",
  },
  {
    time: "07:07",
    title: {
      tr: "Şans kapıda",
      en: "Luck is at your door",
    },
    meaning: {
      tr: "Evren sana şansını denemen için bir kapı açıyor. Yeni bir iş, teklif ya da tanışma mümkün.",
      en: "The universe is opening a door for you to try your luck. A new job, offer, or meeting is possible.",
    },
    category: "Tam Ayna",
  },
  {
    time: "08:08",
    title: {
      tr: "Bolluk enerjisi",
      en: "Abundance energy",
    },
    meaning: {
      tr: "Maddi veya manevi bir kazanç kapıda. Evren, emeklerinin karşılığını vermeye hazırlanıyor.",
      en: "Material or spiritual gain is at your door. The universe is preparing to reward your efforts.",
    },
    category: "Tam Ayna",
  },
  {
    time: "09:09",
    title: {
      tr: "Kendine yönel",
      en: "Turn inward",
    },
    meaning: {
      tr: "Başkasını anlamadan önce kendini dinle. İçsel huzurun anahtarı şu anda sende saklı.",
      en: "Listen to yourself before understanding others. The key to inner peace is hidden within you right now.",
    },
    category: "Tam Ayna",
  },
  {
    time: "10:10",
    title: {
      tr: "Yeni bir tanışma",
      en: "A new encounter",
    },
    meaning: {
      tr: "Yakın zamanda hayatına yeni biri girebilir. Bu karşılaşma duygusal anlamda iz bırakacak.",
      en: "Someone new might enter your life soon. This encounter will leave an emotional mark.",
    },
    category: "Tam Ayna",
  },
  {
    time: "11:11",
    title: {
      tr: "Dilek zamanı",
      en: "Make a wish",
    },
    meaning: {
      tr: "Evren dileklerini dinliyor. İçinden geçen neyse, şimdi onu netleştirme vakti.",
      en: "The universe is listening to your wishes. Whatever you're thinking, now is the time to clarify it.",
    },
    category: "Tam Ayna",
  },
  {
    time: "12:12",
    title: {
      tr: "Ciddi düşünüyor",
      en: "Serious thoughts",
    },
    meaning: {
      tr: "İlişkinizin özellikle ortalarındaysanız bu saate denk geldiğinizde bilin ki sizinle ilgili artık daha ciddi kararlar almak ve adımlar atmak istiyor. Bu yüzden sizin de bu konuda hazırlıklı olmanızda fayda var.",
      en: "If you're in the middle of your relationship, know that they want to take more serious decisions and steps about you. It's beneficial for you to be prepared for this.",
    },
    category: "Tam Ayna",
  },
  {
    time: "13:13",
    title: {
      tr: "Güç sende",
      en: "Power is within you",
    },
    meaning: {
      tr: "Kendine güvenin arttığı bir dönemdesin. Cesur kararlar alabilir, hayatına yön verebilirsin.",
      en: "You're in a period of increased self-confidence. You can make brave decisions and direct your life.",
    },
    category: "Tam Ayna",
  },
  {
    time: "14:14",
    title: {
      tr: "Aklından çıkmıyorsun",
      en: "Can't get you off their mind",
    },
    meaning: {
      tr: "Sürekli seni düşünüyor olabilir. Özellikle gün içinde sıkça seni hatırlıyor ve belki de aramak ya da yazmak için cesaret toplamaya çalışıyor.",
      en: "They might be thinking about you constantly. They remember you often during the day and might be gathering courage to call or write to you.",
    },
    category: "Tam Ayna",
  },
  {
    time: "15:15",
    title: {
      tr: "Yüreğinde bir kıpırtı var",
      en: "A flutter in their heart",
    },
    meaning: {
      tr: "Kalbini çarpıtan biri olabilir. Bu duygular karşılıklı olabilir, işaretleri takip et.",
      en: "Someone might be making your heart flutter. These feelings might be mutual, follow the signs.",
    },
    category: "Tam Ayna",
  },
  {
    time: "16:16",
    title: {
      tr: "Kendine dön",
      en: "Return to yourself",
    },
    meaning: {
      tr: "Dış dünya seni yoruyor olabilir. Biraz geri çekilip içsel huzuruna yönelmen gerekebilir.",
      en: "The outside world might be tiring you. You might need to step back and focus on your inner peace.",
    },
    category: "Tam Ayna",
  },
  {
    time: "17:17",
    title: {
      tr: "Yolculuk var",
      en: "Journey ahead",
    },
    meaning: {
      tr: "Bir seyahat ya da ruhsal bir geçiş seni bekliyor. Yeni yerler ya da yeni insanlar ufukta.",
      en: "A journey or spiritual transition awaits you. New places or new people are on the horizon.",
    },
    category: "Tam Ayna",
  },
  {
    time: "18:18",
    title: {
      tr: "Kapanış ve rahatlama",
      en: "Closure and relaxation",
    },
    meaning: {
      tr: "Günün ya da bir dönemin kapanışı seni rahatlatabilir. Gevşe, artık yüklerini bırakma zamanı.",
      en: "The end of the day or a period might bring you relief. Relax, it's time to let go of your burdens.",
    },
    category: "Tam Ayna",
  },
  {
    time: "19:19",
    title: {
      tr: "Geçmiş seni çağırıyor",
      en: "The past is calling",
    },
    meaning: {
      tr: "Unuttuğunu sandığın bir duygu yeniden canlanabilir. Bazı şeyler kapanmadıysa, yüzleşme zamanı.",
      en: "A feeling you thought you'd forgotten might resurface. If some things haven't closed, it's time to face them.",
    },
    category: "Tam Ayna",
  },
  {
    time: "20:20",
    title: {
      tr: "Onun da kalbi sende",
      en: "Their heart is with you too",
    },
    meaning: {
      tr: "Bir bağ karşılıklı olabilir. Bu saatte onu düşünüyorsan, o da seni hissediyor olabilir.",
      en: "A connection might be mutual. If you're thinking of them at this hour, they might be feeling you too.",
    },
    category: "Tam Ayna",
  },
  {
    time: "21:21",
    title: {
      tr: "Gönül ilişkisi",
      en: "Heart connection",
    },
    meaning: {
      tr: "Romantik bir karşılaşma ya da duygusal yakınlaşma ihtimali yüksek. Kalbinin sesini dinle.",
      en: "High chance of a romantic encounter or emotional connection. Listen to your heart's voice.",
    },
    category: "Tam Ayna",
  },
  {
    time: "22:22",
    title: {
      tr: "Ruh eşi enerjisi",
      en: "Soulmate energy",
    },
    meaning: {
      tr: "Hayatına giren biri ruh eşin olabilir. Bu bağı hafife alma, evren seni yönlendiriyor.",
      en: "Someone entering your life might be your soulmate. Don't take this connection lightly, the universe is guiding you.",
    },
    category: "Tam Ayna",
  },
  {
    time: "23:23",
    title: {
      tr: "Kapanış ve kabullenme",
      en: "Closure and acceptance",
    },
    meaning: {
      tr: "Günün sonuna gelirken, olanları olduğu gibi kabul et. Huzur bazen sadece bırakmaktan geçer.",
      en: "As the day ends, accept things as they are. Peace sometimes comes from just letting go.",
    },
    category: "Tam Ayna",
  },
  {
    time: "01:10",
    title: {
      tr: "Geçmiş seni özlüyor",
      en: "The past misses you",
    },
    meaning: {
      tr: "Eski bir tanıdık ya da aşk seni hâlâ aklında tutuyor olabilir. Belki de bir kapanış ya da yeniden doğuş zamanı gelmiştir.",
      en: "An old acquaintance or love might still be thinking of you. Perhaps it's time for closure or a rebirth.",
    },
    category: "Ters Ayna",
  },
  {
    time: "02:20",
    title: {
      tr: "Beklenmedik bir mesaj",
      en: "An unexpected message",
    },
    meaning: {
      tr: "Uzun süredir sesini duymadığın birinden bir ileti alabilirsin. Kalbinde yer etmiş biri yeniden gündemine girebilir.",
      en: "You might receive a message from someone you haven't heard from in a while. Someone who left a mark on your heart might re-enter your agenda.",
    },
    category: "Ters Ayna",
  },
  {
    time: "03:30",
    title: {
      tr: "İç dünyanda fırtına",
      en: "Storm in your inner world",
    },
    meaning: {
      tr: "Zihninde cevapsız sorular olabilir. Bu saat, iç sesini dinleyip gerçek hislerini keşfetmen için bir davet.",
      en: "You might have unanswered questions in your mind. This hour is an invitation to listen to your inner voice and discover your true feelings.",
    },
    category: "Ters Ayna",
  },
  {
    time: "04:40",
    title: {
      tr: "Aynı duygular",
      en: "Same feelings",
    },
    meaning: {
      tr: "Birinin seninle aynı duyguları paylaşması mümkün. Ancak her iki taraf da beklemede olabilir.",
      en: "Someone might share the same feelings as you. However, both sides might be waiting.",
    },
    category: "Ters Ayna",
  },
  {
    time: "05:50",
    title: {
      tr: "Kararsızlık enerjisi",
      en: "Energy of indecision",
    },
    meaning: {
      tr: "Biri seninle ilgili bir karar vermekte zorlanıyor. Bu durum geçici olsa da, dikkatli olmanda fayda var.",
      en: "Someone is struggling to make a decision about you. Although this situation is temporary, it's good to be careful.",
    },
    category: "Ters Ayna",
  },
  {
    time: "10:01",
    title: {
      tr: "Haber seni bulacak",
      en: "News will find you",
    },
    meaning: {
      tr: "Kulağına bir dedikodu ya da ilginç bir haber gelebilir. Duyduklarını sorgulamadan önce doğruluğunu tart.",
      en: "You might hear a rumor or interesting news. Weigh its truth before questioning what you hear.",
    },
    category: "Ters Ayna",
  },
  {
    time: "12:21",
    title: {
      tr: "Kalbine yakın",
      en: "Close to their heart",
    },
    meaning: {
      tr: "Birinin seni düşündüğü ve sana duygusal olarak yaklaştığı bir an. Bu bağ giderek güçleniyor olabilir.",
      en: "A moment when someone is thinking of you and emotionally approaching you. This connection might be growing stronger.",
    },
    category: "Ters Ayna",
  },
  {
    time: "13:31",
    title: {
      tr: "Sana kırgın olabilir",
      en: "They might be hurt",
    },
    meaning: {
      tr: "Geçmişte yaşanan bir kırgınlık hâlâ birinin kalbinde iz bırakmış olabilir. Gönül almayı düşünmelisin.",
      en: "A past hurt might still leave a mark on someone's heart. You should consider making amends.",
    },
    category: "Ters Ayna",
  },
  {
    time: "14:41",
    title: {
      tr: "İçgüdülerin seni uyarıyor",
      en: "Your instincts are warning you",
    },
    meaning: {
      tr: "Bir şeylerin ters gittiğini hissediyorsan haklı olabilirsin. Bu saat, dikkatli olman gerektiğini fısıldar.",
      en: "If you feel something's wrong, you might be right. This hour whispers that you need to be careful.",
    },
    category: "Ters Ayna",
  },
  {
    time: "15:51",
    title: {
      tr: "Karma çalışıyor",
      en: "Karma is working",
    },
    meaning: {
      tr: "Yaptıkların ya da yapmadıkların bir şekilde sana geri dönüyor olabilir. İyilikle kalmaya devam et.",
      en: "What you've done or haven't done might be coming back to you. Keep staying with goodness.",
    },
    category: "Ters Ayna",
  },
  {
    time: "20:02",
    title: {
      tr: "Aranızda mesafe var",
      en: "There's distance between you",
    },
    meaning: {
      tr: "Fiziksel ya da duygusal bir uzaklık ilişkine etki ediyor olabilir. Köprü kurmak için sen ilk adımı atabilirsin.",
      en: "A physical or emotional distance might be affecting your relationship. You can take the first step to build a bridge.",
    },
    category: "Ters Ayna",
  },
  {
    time: "21:12",
    title: {
      tr: "Onun da kalbi dalgalı",
      en: "Their heart is turbulent too",
    },
    meaning: {
      tr: "Seni düşündüğü kesin ama kafası karışık olabilir. Bu kararsızlık sana da yansıyorsa biraz geri çekilmek iyi olabilir.",
      en: "They're definitely thinking of you but might be confused. If this indecision reflects on you, it might be good to step back a bit.",
    },
    category: "Ters Ayna",
  },
  {
    time: "23:32",
    title: {
      tr: "Yorgun ama bağlı",
      en: "Tired but connected",
    },
    meaning: {
      tr: "Aranızdaki bağ güçlü fakat zaman zaman bu bağ yıpranmış hissedebilir. Dinlenmek ve yenilenmek gerek.",
      en: "The bond between you is strong but might feel worn at times. Rest and renewal are needed.",
    },
    category: "Ters Ayna",
  },
  {
    time: "01:11",
    title: {
      tr: "Düşüncelerin güç kazanıyor",
      en: "Your thoughts are gaining power",
    },
    meaning: {
      tr: "Ne düşünüyorsan o olmaya başlıyor. Zihnini negatiften arındır ve niyetlerine odaklan, evren seni duyuyor.",
      en: "What you think is starting to manifest. Clear your mind of negativity and focus on your intentions, the universe is listening.",
    },
    category: "Üçlü Ayna",
  },
  {
    time: "02:22",
    title: {
      tr: "Denge arayışı",
      en: "Seeking balance",
    },
    meaning: {
      tr: "İçinde ya da ilişkinde bir denge kurman gerekiyor. Her şeyin uyumla ilerlemesi için önce kendi iç huzurunu bulmalısın.",
      en: "You need to establish balance within yourself or in your relationship. To have everything progress harmoniously, you must first find your inner peace.",
    },
    category: "Üçlü Ayna",
  },
  {
    time: "03:33",
    title: {
      tr: "Yolun açık, destek seninle",
      en: "Your path is clear, support is with you",
    },
    meaning: {
      tr: "Manevi rehberler ve evren sana arkanızda olduğunu hissettirmeye çalışıyor. Kararsız kaldıysan iç sesini takip et.",
      en: "Spiritual guides and the universe are trying to show you they're behind you. If you're uncertain, follow your inner voice.",
    },
    category: "Üçlü Ayna",
  },
  {
    time: "04:44",
    title: {
      tr: "Köklü değişim geliyor",
      en: "Fundamental change is coming",
    },
    meaning: {
      tr: "Hayatında sağlam temeller kurmak üzeresin. Bu saat, sıkı çalışmanın ve sabrın ödüllendirileceğini müjdeliyor.",
      en: "You're about to build solid foundations in your life. This hour heralds that hard work and patience will be rewarded.",
    },
    category: "Üçlü Ayna",
  },
  {
    time: "05:55",
    title: {
      tr: "Ani bir gelişmeye hazır ol",
      en: "Be ready for a sudden development",
    },
    meaning: {
      tr: "Beklenmedik bir haber ya da değişim kapında. Bu yenilik önce seni sarsabilir ama sonunda hayrına olacak.",
      en: "An unexpected news or change is at your door. This novelty might shake you at first but will be for your benefit in the end.",
    },
    category: "Üçlü Ayna",
  },
];

// Helper function to map category to translation key
export function getCategoryTranslationKey(category: string): string {
  switch (category) {
    case "Tam Ayna":
      return "fullMirror";
    case "Ters Ayna":
      return "reverseMirror";
    case "Üçlü Ayna":
      return "tripleMirror";
    default:
      return category;
  }
}

export function isMirrorHour(time: string): MirrorHour | null {
  return mirrorHoursData.find((hour) => hour.time === time) || null;
}

export function getMirrorHourMeaning(
  time: string,
  locale: string = "tr"
): string {
  const mirrorHour = mirrorHoursData.find((hour) => hour.time === time);
  return mirrorHour ? mirrorHour.meaning[locale as keyof LocalizedText] : "";
}

export function getMirrorHourTitle(
  time: string,
  locale: string = "tr"
): string {
  const mirrorHour = mirrorHoursData.find((hour) => hour.time === time);
  return mirrorHour ? mirrorHour.title[locale as keyof LocalizedText] : "";
}

export function getMirrorHourCategory(time: string): string {
  const mirrorHour = mirrorHoursData.find((hour) => hour.time === time);
  return mirrorHour ? mirrorHour.category : "";
}

export function getAllMirrorHours(): MirrorHour[] {
  return mirrorHoursData;
}
