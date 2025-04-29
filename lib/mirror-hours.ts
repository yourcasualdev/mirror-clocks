type MirrorHour = {
  time: string;
  title: string;
  meaning: string;
  category: string;
};

const mirrorHoursData: MirrorHour[] = [
  {
    time: "00:00",
    title: "Yeni bir döngü başlıyor",
    meaning:
      "Evren sana yepyeni bir başlangıç sunuyor. Geçmişi arkanda bırakmak ve cesur adımlar atmak için doğru zamandasın.",
    category: "Tam Ayna",
  },
  {
    time: "01:01",
    title: "Göz önündesin",
    meaning:
      "Biri seni dikkatle izliyor ve sana dair güçlü duygular besliyor. Bu ilgi seni rahatsız etmiyorsa kendini açmayı düşünebilirsin.",
    category: "Tam Ayna",
  },
  {
    time: "02:02",
    title: "Sessiz sevgi",
    meaning:
      "Birinin sana karşı hisleri var ama bunları açıkça dile getiremiyor. Kalbindeki sessizliği hissetmeye çalış.",
    category: "Tam Ayna",
  },
  {
    time: "03:03",
    title: "Zihninde sen varsın",
    meaning:
      "Seni sürekli düşünen biri var, özellikle geceleri. Bu bağ düşündüğünden daha derin olabilir.",
    category: "Tam Ayna",
  },
  {
    time: "04:04",
    title: "Koruyucu enerjiler aktif",
    meaning:
      "Hayatında görünmeyen ama güçlü bir koruyucu enerji seni izliyor. Ruhsal destek sana çok yakın.",
    category: "Tam Ayna",
  },
  {
    time: "05:05",
    title: "Geçmiş kapıyı çalabilir",
    meaning:
      "Eski bir tanıdık ya da aşktan haber alabilirsin. Bu karşılaşma seni düşündürecek.",
    category: "Tam Ayna",
  },
  {
    time: "06:06",
    title: "Duygusal bağ güçleniyor",
    meaning:
      "Aile içindeki ya da romantik bir ilişkide duygusal derinlik artıyor. Kalbinle konuşmanın tam zamanı.",
    category: "Tam Ayna",
  },
  {
    time: "07:07",
    title: "Şans kapıda",
    meaning:
      "Evren sana şansını denemen için bir kapı açıyor. Yeni bir iş, teklif ya da tanışma mümkün.",
    category: "Tam Ayna",
  },
  {
    time: "08:08",
    title: "Bolluk enerjisi",
    meaning:
      "Maddi veya manevi bir kazanç kapıda. Evren, emeklerinin karşılığını vermeye hazırlanıyor.",
    category: "Tam Ayna",
  },
  {
    time: "09:09",
    title: "Kendine yönel",
    meaning:
      "Başkasını anlamadan önce kendini dinle. İçsel huzurun anahtarı şu anda sende saklı.",
    category: "Tam Ayna",
  },
  {
    time: "10:10",
    title: "Yeni bir tanışma",
    meaning:
      "Yakın zamanda hayatına yeni biri girebilir. Bu karşılaşma duygusal anlamda iz bırakacak.",
    category: "Tam Ayna",
  },
  {
    time: "11:11",
    title: "Dilek zamanı",
    meaning:
      "Evren dileklerini dinliyor. İçinden geçen neyse, şimdi onu netleştirme vakti.",
    category: "Tam Ayna",
  },
  {
    time: "12:12",
    title: "Ciddi düşünüyor",
    meaning:
      "İlişkinizin özellikle ortalarındaysanız bu saate denk geldiğinizde bilin ki sizinle ilgili artık daha ciddi kararlar almak ve adımlar atmak istiyor. Bu yüzden sizin de bu konuda hazırlıklı olmanızda fayda var.",
    category: "Tam Ayna",
  },
  {
    time: "13:13",
    title: "Güç sende",
    meaning:
      "Kendine güvenin arttığı bir dönemdesin. Cesur kararlar alabilir, hayatına yön verebilirsin.",
    category: "Tam Ayna",
  },
  {
    time: "14:14",
    title: "Aklından çıkmıyorsun",
    meaning:
      "Sürekli seni düşünüyor olabilir. Özellikle gün içinde sıkça seni hatırlıyor ve belki de aramak ya da yazmak için cesaret toplamaya çalışıyor.",
    category: "Tam Ayna",
  },
  {
    time: "15:15",
    title: "Yüreğinde bir kıpırtı var",
    meaning:
      "Kalbini çarpıtan biri olabilir. Bu duygular karşılıklı olabilir, işaretleri takip et.",
    category: "Tam Ayna",
  },
  {
    time: "16:16",
    title: "Kendine dön",
    meaning:
      "Dış dünya seni yoruyor olabilir. Biraz geri çekilip içsel huzuruna yönelmen gerekebilir.",
    category: "Tam Ayna",
  },
  {
    time: "17:17",
    title: "Yolculuk var",
    meaning:
      "Bir seyahat ya da ruhsal bir geçiş seni bekliyor. Yeni yerler ya da yeni insanlar ufukta.",
    category: "Tam Ayna",
  },
  {
    time: "18:18",
    title: "Kapanış ve rahatlama",
    meaning:
      "Günün ya da bir dönemin kapanışı seni rahatlatabilir. Gevşe, artık yüklerini bırakma zamanı.",
    category: "Tam Ayna",
  },
  {
    time: "19:19",
    title: "Geçmiş seni çağırıyor",
    meaning:
      "Unuttuğunu sandığın bir duygu yeniden canlanabilir. Bazı şeyler kapanmadıysa, yüzleşme zamanı.",
    category: "Tam Ayna",
  },
  {
    time: "20:20",
    title: "Onun da kalbi sende",
    meaning:
      "Bir bağ karşılıklı olabilir. Bu saatte onu düşünüyorsan, o da seni hissediyor olabilir.",
    category: "Tam Ayna",
  },
  {
    time: "21:21",
    title: "Gönül ilişkisi",
    meaning:
      "Romantik bir karşılaşma ya da duygusal yakınlaşma ihtimali yüksek. Kalbinin sesini dinle.",
    category: "Tam Ayna",
  },
  {
    time: "22:22",
    title: "Ruh eşi enerjisi",
    meaning:
      "Hayatına giren biri ruh eşin olabilir. Bu bağı hafife alma, evren seni yönlendiriyor.",
    category: "Tam Ayna",
  },
  {
    time: "23:23",
    title: "Kapanış ve kabullenme",
    meaning:
      "Günün sonuna gelirken, olanları olduğu gibi kabul et. Huzur bazen sadece bırakmaktan geçer.",
    category: "Tam Ayna",
  },
  {
    time: "01:10",
    title: "Geçmiş seni özlüyor",
    meaning:
      "Eski bir tanıdık ya da aşk seni hâlâ aklında tutuyor olabilir. Belki de bir kapanış ya da yeniden doğuş zamanı gelmiştir.",
    category: "Ters Ayna",
  },
  {
    time: "02:20",
    title: "Beklenmedik bir mesaj",
    meaning:
      "Uzun süredir sesini duymadığın birinden bir ileti alabilirsin. Kalbinde yer etmiş biri yeniden gündemine girebilir.",
    category: "Ters Ayna",
  },
  {
    time: "03:30",
    title: "İç dünyanda fırtına",
    meaning:
      "Zihninde cevapsız sorular olabilir. Bu saat, iç sesini dinleyip gerçek hislerini keşfetmen için bir davet.",
    category: "Ters Ayna",
  },
  {
    time: "04:40",
    title: "Aynı duygular",
    meaning:
      "Birinin seninle aynı duyguları paylaşması mümkün. Ancak her iki taraf da beklemede olabilir.",
    category: "Ters Ayna",
  },
  {
    time: "05:50",
    title: "Kararsızlık enerjisi",
    meaning:
      "Biri seninle ilgili bir karar vermekte zorlanıyor. Bu durum geçici olsa da, dikkatli olmanda fayda var.",
    category: "Ters Ayna",
  },
  {
    time: "10:01",
    title: "Haber seni bulacak",
    meaning:
      "Kulağına bir dedikodu ya da ilginç bir haber gelebilir. Duyduklarını sorgulamadan önce doğruluğunu tart.",
    category: "Ters Ayna",
  },
  {
    time: "12:21",
    title: "Kalbine yakın",
    meaning:
      "Birinin seni düşündüğü ve sana duygusal olarak yaklaştığı bir an. Bu bağ giderek güçleniyor olabilir.",
    category: "Ters Ayna",
  },
  {
    time: "13:31",
    title: "Sana kırgın olabilir",
    meaning:
      "Geçmişte yaşanan bir kırgınlık hâlâ birinin kalbinde iz bırakmış olabilir. Gönül almayı düşünmelisin.",
    category: "Ters Ayna",
  },
  {
    time: "14:41",
    title: "İçgüdülerin seni uyarıyor",
    meaning:
      "Bir şeylerin ters gittiğini hissediyorsan haklı olabilirsin. Bu saat, dikkatli olman gerektiğini fısıldar.",
    category: "Ters Ayna",
  },
  {
    time: "15:51",
    title: "Karma çalışıyor",
    meaning:
      "Yaptıkların ya da yapmadıkların bir şekilde sana geri dönüyor olabilir. İyilikle kalmaya devam et.",
    category: "Ters Ayna",
  },
  {
    time: "20:02",
    title: "Aranızda mesafe var",
    meaning:
      "Fiziksel ya da duygusal bir uzaklık ilişkine etki ediyor olabilir. Köprü kurmak için sen ilk adımı atabilirsin.",
    category: "Ters Ayna",
  },
  {
    time: "21:12",
    title: "Onun da kalbi dalgalı",
    meaning:
      "Seni düşündüğü kesin ama kafası karışık olabilir. Bu kararsızlık sana da yansıyorsa biraz geri çekilmek iyi olabilir.",
    category: "Ters Ayna",
  },
  {
    time: "23:32",
    title: "Yorgun ama bağlı",
    meaning:
      "Aranızdaki bağ güçlü fakat zaman zaman bu bağ yıpranmış hissedebilir. Dinlenmek ve yenilenmek gerek.",
    category: "Ters Ayna",
  },
  {
    time: "01:11",
    title: "Düşüncelerin güç kazanıyor",
    meaning:
      "Ne düşünüyorsan o olmaya başlıyor. Zihnini negatiften arındır ve niyetlerine odaklan, evren seni duyuyor.",
    category: "Üçlü Ayna",
  },
  {
    time: "02:22",
    title: "Denge arayışı",
    meaning:
      "İçinde ya da ilişkinde bir denge kurman gerekiyor. Her şeyin uyumla ilerlemesi için önce kendi iç huzurunu bulmalısın.",
    category: "Üçlü Ayna",
  },
  {
    time: "03:33",
    title: "Yolun açık, destek seninle",
    meaning:
      "Manevi rehberler ve evren sana arkanızda olduğunu hissettirmeye çalışıyor. Kararsız kaldıysan iç sesini takip et.",
    category: "Üçlü Ayna",
  },
  {
    time: "04:44",
    title: "Köklü değişim geliyor",
    meaning:
      "Hayatında sağlam temeller kurmak üzeresin. Bu saat, sıkı çalışmanın ve sabrın ödüllendirileceğini müjdeliyor.",
    category: "Üçlü Ayna",
  },
  {
    time: "05:55",
    title: "Ani bir gelişmeye hazır ol",
    meaning:
      "Beklenmedik bir haber ya da değişim kapında. Bu yenilik önce seni sarsabilir ama sonunda hayrına olacak.",
    category: "Üçlü Ayna",
  },
];

export function isMirrorHour(time: string): boolean {
  return mirrorHoursData.some((hour) => hour.time === time);
}

export function getMirrorHourMeaning(time: string): string {
  const hour = mirrorHoursData.find((hour) => hour.time === time);
  return hour ? hour.meaning : "";
}

export function getAllMirrorHours(): MirrorHour[] {
  return mirrorHoursData;
}
