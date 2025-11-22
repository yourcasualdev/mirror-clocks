export type LocalizedText = {
  tr: string;
  en: string;
};

type MirrorHour = {
  time: string;
  title: LocalizedText;
  meaning: LocalizedText;
  category: string;
  // Rich content fields for SEO
  numerology?: LocalizedText;
  astrology?: LocalizedText;
  loveAndRelationships?: LocalizedText;
  careerAndMoney?: LocalizedText;
  spiritualGuidance?: LocalizedText;
  actionSteps?: LocalizedText;
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
    numerology: {
      tr: "00:00, gece yarısı ve yeni bir günün başlangıcıdır. Numerolojide 0, sonsuz potansiyeli, boşluğu ve her şeyin kaynağını temsil eder. Dört sıfır bir arada, bu enerjinin en güçlü halidir - alfa ve omega, başlangıç ve son. Bu saat, geçmişten tam bir kopuş ve yepyeni bir sayfa açma anıdır. 0, aynı zamanda evrensel enerjinin kendisidir; her şeyi içerir ama hiçbir şey değildir. Bu saatte olumlamalar ve niyetler son derece güçlüdür çünkü sıfırdan başlıyorsunuz. Yeni bir gün, yeni bir sen, yeni bir hayat. Bu saati görmek, hayatınızda büyük bir dönüşümün eşiğinde olduğunuz ve eski versiyonunuzu geride bırakmanız gerektiği anlamına gelir.",
      en: "00:00 is midnight and the beginning of a new day. In numerology, 0 represents infinite potential, the void, and the source of everything. Four zeros together is the most powerful form of this energy - alpha and omega, beginning and end. This hour is the moment of complete separation from the past and opening a brand new page. 0 is also universal energy itself; it contains everything but is nothing. Affirmations and intentions at this hour are extremely powerful because you're starting from zero. A new day, a new you, a new life. Seeing this hour means you're on the threshold of a major transformation in your life and need to leave your old version behind.",
    },
    astrology: {
      tr: "Astrolojik olarak 00:00, Güneş'in gece yarısı konumudur - en derinde, en karanlıkta, ama yeniden doğuşun hemen öncesinde. Pluton'un dönüşüm enerjisiyle rezonansa girer. Pluton, ölüm ve yeniden doğuşun, köklü değişimlerin ve iç gücün gezegenidir. Akrep burcu enerjisi bu saatte yoğundur. Ay'ın hangi evde olduğuna göre yenilenmenin hangi alanda yaşanacağı belirlenir. Örneğin 4. evdeyse (ev, aile) aile içi bir yenilik; 10. evdeyse (kariyer) iş hayatında yeni bir başlangıç söz konusu olabilir. Eclipse dönemlerinde ya da Yeni Ay'da 00:00'ı görmek, manifestasyon gücünün katlanarak arttığı anlamına gelir.",
      en: "Astrologically, 00:00 is the Sun's midnight position - at its deepest, darkest, but just before rebirth. It resonates with Pluto's transformational energy. Pluto is the planet of death and rebirth, radical changes, and inner power. Scorpio energy is intense at this hour. The area where renewal will occur is determined by which house the Moon is in. For example, if it's in the 4th house (home, family) there may be a renewal within the family; if in the 10th house (career) there may be a new beginning in work life. Seeing 00:00 during eclipse periods or on a New Moon means manifestation power increases exponentially.",
    },
    loveAndRelationships: {
      tr: "Aşk hayatınız için 00:00, yepyeni bir başlangıç yapmak isteyenler için mükemmel bir saattir. Eski ilişkilerden, acılardan, kırgınlıklardan arınma zamanıdır. Eğer bir ilişki sizin için artık sağlıklı değilse, bu saat size bunu bırakma cesareti verir. Eğer yeni bir aşk arıyorsanız, geçmişi tamamen kapatıp kendinizi yeni bir bağa açmak için ideal bir andır. Bir ilişkideyseniz, partnerinizle ilişkinizi sıfırlayabilir, yeni bir döngüye başlayabilirsiniz - sanki yeniden tanışıyormuş gibi. 00:00 ayrıca kendinizi sevmeye başlamanın da saatidir. Başkalarından önce, kendinizle barışın. Kendi değerinizi bilin ve kendinize yeni bir şans tanıyın.",
      en: "For your love life, 00:00 is perfect for those wanting to make a brand new start. It's time to cleanse from old relationships, pains, and hurts. If a relationship is no longer healthy for you, this hour gives you the courage to let it go. If you're looking for new love, it's an ideal moment to completely close the past and open yourself to a new connection. If you're in a relationship, you can reset your relationship with your partner, start a new cycle - as if meeting again for the first time. 00:00 is also the hour to start loving yourself. Before others, make peace with yourself. Know your worth and give yourself a new chance.",
    },
    careerAndMoney: {
      tr: "Kariyer açısından 00:00, yeni bir işe başlamak, girişim kurmak ya da tamamen farklı bir alana geçiş yapmak için güçlü bir enerjidir. Eski iş yerinden, toksik çalışma ortamlarından ya da sizi sınırlayan yapılardan ayrılma cesaretini size verir. Finansal olarak sıfırdan başlamaktan korkmayın - bazen temizlenmek gerekir ki yeni bolluk gelsin. Bu saat, risk almayı ve kendi yolunuzu çizmeyi destekler. Patronunuza değil, kendi vizyonunuza hizmet etmenin zamanı gelebilir. Yeni bir iş fikriniz varsa, bu saatte iş planınızı yazmaya başlayın. Evren sizin yeni başlangıcınızı destekliyor.",
      en: "Career-wise, 00:00 is powerful energy for starting a new job, founding a startup, or transitioning to a completely different field. It gives you the courage to leave old workplaces, toxic work environments, or structures that limit you. Financially, don't be afraid to start from zero - sometimes you need to cleanse so new abundance can come. This hour supports taking risks and charting your own path. The time may come to serve your own vision, not your boss's. If you have a new business idea, start writing your business plan at this hour. The universe supports your new beginning.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 00:00, en derin iç yolculuk saatidir. Meditasyon, günlük yazma, afetme ritüelleri ve enerji temizliği için ideal bir zamandır. Siyah turmalin veya obsidyen gibi koruyucu taşlar bu saatte negatif enerjileri temizler. Beyaz mum yakıp, geçmişi bırakma niyeti koyabilirsiniz. Tütsü yakın, alanınızı temizleyin. Eski bir 'ben'i bırakıp yeni bir 'ben'e merhaba diyorsanız, sembolik bir ritüel yapabilirsiniz - eski bir fotoğrafınızı yakabilir ya da geçmişi temsil eden bir şeyi gömerebilirsiniz. Gece yarısı ayini, kadim geleneklerde dönüşüm için kullanılır. Kendinize 'Ben yeniyim, ben özgürüm, ben güçlüyüm' deyin.",
      en: "Spiritually, 00:00 is the hour of the deepest inner journey. It's an ideal time for meditation, journaling, forgiveness rituals, and energy cleansing. Protective stones like black tourmaline or obsidian cleanse negative energies at this hour. You can light a white candle and set an intention to release the past. Burn incense, cleanse your space. If you're leaving an old 'you' and saying hello to a new 'you,' you can perform a symbolic ritual - burn an old photo of yourself or bury something representing the past. Midnight ceremonies are used for transformation in ancient traditions. Say to yourself 'I am new, I am free, I am powerful.'",
    },
    actionSteps: {
      tr: "• Bir kağıda bırakmak istediğiniz her şeyi yazın ve bu kağıdı yırtıp atın\n• Aynaya bakın ve 'Eski ben gitti, yeni ben burada' deyin\n• Duş alın ve tüm negatif enerjiyi akıp gittiğini hayal edin\n• Yatak odanızı yeniden düzenleyin, eski eşyalardan kurtulun\n• Yeni bir hedef belirleyin ve ilk adımı atmak için bir plan yapın\n• Bir beyaz mum yakıp 10 dakika meditasyon yapın, yeni başlangıcınızı kutlayın\n• Sabah uyandığınızda ilk düşüncenizin olumlu olmasına dikkat edin - bu yeni döngünüzün tonunu belirler",
      en: "• Write everything you want to let go of on paper and tear up and discard this paper\n• Look in the mirror and say 'The old me is gone, the new me is here'\n• Take a shower and imagine all negative energy flowing away\n• Reorganize your bedroom, get rid of old items\n• Set a new goal and make a plan to take the first step\n• Light a white candle and meditate for 10 minutes, celebrate your new beginning\n• When you wake up in the morning, make sure your first thought is positive - this sets the tone for your new cycle",
    },
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
    numerology: {
      tr: "01:01 saati, 1 rakamının iki kez tekrarlandığı güçlü bir kombinasyondur. Numerolojide 1 sayısı, yeni başlangıçları, liderliği, bağımsızlığı ve bireyselliği temsil eder. Bu saatin toplamı (0+1+0+1=2) aynı zamanda 2 sayısının enerjisini de taşır. 2, ikiliği, ortaklığı ve dengeyi simgeler. Bu saat size hem kendi başınıza güçlü olduğunuzu hem de başkalarıyla bağlantılarınızın önemini hatırlatır. Özellikle bu saati sık görüyorsanız, hayatınızda yeni bir başlangıç yapma ya da birileriyle daha derin bir bağ kurma zamanının geldiğini işaret edebilir.",
      en: "The time 01:01 is a powerful combination where the number 1 is repeated twice. In numerology, the number 1 represents new beginnings, leadership, independence, and individuality. The sum of this time (0+1+0+1=2) also carries the energy of the number 2. The number 2 symbolizes duality, partnership, and balance. This hour reminds you that you are powerful on your own while also highlighting the importance of your connections with others. If you see this time frequently, it may signal that it's time for a new beginning in your life or to form deeper bonds with others.",
    },
    astrology: {
      tr: "Astrolojik açıdan 01:01, Güneş'in enerjisini taşır. Güneş, kişisel kimliğin, özgüvenin ve yaşam gücünün gezegenidir. Bu saat diliminde Ay'ın etkisi de hissedilir, çünkü gece saatleri Ay'ın hakimiyeti altındadır. Güneş ve Ay'ın bu kombinasyonu, bilinçaltınızla bilincinizin buluştuğu bir andır. Koç ve Aslan burçlarının enerjileriyle rezonansa girer - cesaret, tutku ve öne çıkma arzusu. Eğer aşk haritanızda bu burçlar güçlüyse, 01:01'i görmek sizin için özel bir anlam taşıyabilir. Bu saat aynı zamanda romantik bir bakışın, gizli bir hayranın ya da yeni bir aşkın habercisi olabilir.",
      en: "Astrologically, 01:01 carries the energy of the Sun. The Sun is the planet of personal identity, self-confidence, and life force. During this time, the influence of the Moon is also felt, as nighttime hours are under the Moon's dominion. This combination of Sun and Moon is a moment where your subconscious meets your conscious mind. It resonates with the energies of Aries and Leo - courage, passion, and the desire to stand out. If these signs are strong in your birth chart, seeing 01:01 might hold special meaning for you. This hour can also be a messenger of a romantic glance, a secret admirer, or new love.",
    },
    loveAndRelationships: {
      tr: "Aşk ve ilişkiler açısından 01:01, içinizde gizli duygular beslenen birinin varlığına işaret eder. Bu kişi size olan ilgisini henüz tam olarak göstermemiş olabilir, ancak sizi dikkatle izliyor ve düşünüyor. Eğer bir ilişkideyseniz, partneriniz sizi eskisinden daha farklı görmeye başlamış ve size karşı daha derin duygular beslemeye başlamış olabilir. Bekar iseniz, yakında hayatınıza girecek biri tarafından fark edildiğinizi bilmelisiniz. Bu saat aynı zamanda kendinizi ifade etmenin ve gerçek hislerinizi açıklamanın önemini vurgular. Sessiz kalmak yerine cesaretli olun ve kalbinizi konuşturun. İlişkilerde denge kurmak, hem vermek hem de almak önemlidir.",
      en: "In terms of love and relationships, 01:01 indicates the presence of someone who harbors secret feelings for you. This person may not have fully shown their interest yet, but they are carefully watching and thinking about you. If you're in a relationship, your partner may have started to see you differently and developed deeper feelings for you. If you're single, know that you're being noticed by someone who will soon enter your life. This hour also emphasizes the importance of expressing yourself and revealing your true feelings. Instead of staying silent, be courageous and let your heart speak. In relationships, finding balance is important - both giving and receiving matter.",
    },
    careerAndMoney: {
      tr: "Kariyer ve para konularında 01:01, liderlik pozisyonuna geçme ya da bir projede öne çıkma fırsatını işaret eder. Yetenekleriniz ve çalışmalarınız dikkat çekiyor, biri sizi yakından takip ediyor olabilir. Bu kişi bir yönetici, mentor ya da iş ortağı adayı olabilir. Finansal açıdan, yeni bir gelir kaynağı için doğru zamandır. Girişimcilik düşünüyorsanız ya da yan gelir elde etmek istiyorsanız, bu saat size cesaret veriyor. Ancak aceleci kararlar almaktan kaçının. Kendinize güvenin, ama aynı zamanda başkalarından da öğrenmeye açık olun. Ekip çalışması ve işbirlikleri bu dönemde size avantaj sağlayabilir.",
      en: "In career and money matters, 01:01 signals an opportunity to move into a leadership position or stand out in a project. Your talents and work are attracting attention, someone might be closely following you. This person could be a manager, mentor, or potential business partner. Financially, it's the right time for a new income source. If you're considering entrepreneurship or want to earn side income, this hour gives you courage. However, avoid making hasty decisions. Believe in yourself, but also remain open to learning from others. Teamwork and collaborations can give you an advantage during this period.",
    },
    spiritualGuidance: {
      tr: "Ruhsal açıdan 01:01, evrenin size özel bir mesaj gönderdiği andır. Manevi rehberleriniz sizinle iletişim kurmaya çalışıyor. Bu saatte meditasyon yapmak, günlük tutmak ya da içsel yolculuğunuza zaman ayırmak çok faydalı olacaktır. Ayna saati görmek, senkronisitenin bir işaretidir - doğru yolda olduğunuzu ve desteklendiğinizi gösterir. Sezgilerinizi dinleyin, içinizden gelen ilk düşünce genellikle doğru olandır. Uyumadan önce şükran pratiği yapın, gün içinde yaşadığınız güzelliklere odaklanın. Pembe ya da kırmızı renkli mumlar yakarak çakranızı dengeleyebilir, gül kurusu ya da yasemin kokusu ile alanınızı temizleyebilirsiniz. Bu saat size 'görülüyorsun ve değerlisin' diyor.",
      en: "Spiritually, 01:01 is a moment when the universe sends you a special message. Your spiritual guides are trying to communicate with you. Meditating, journaling, or dedicating time to your inner journey at this hour will be very beneficial. Seeing mirror hours is a sign of synchronicity - it shows you're on the right path and supported. Listen to your intuition, the first thought that comes to you is usually the right one. Practice gratitude before sleeping, focus on the beautiful moments you experienced during the day. You can balance your chakra by lighting pink or red candles, and cleanse your space with rose or jasmine scents. This hour is telling you 'you are seen and you are valuable.'",
    },
    actionSteps: {
      tr: "• Bugün kendinize dair olumlu bir şey söyleyin - aynada kendinize gülümseyin\n• Sizi düşündüğünü hissettiğiniz kişiye bir mesaj gönderin, ilk adımı atmaktan çekinmeyin\n• Bir kağıda 'Ben değerliyim ve görülmeyi hak ediyorum' yazın ve görünür bir yere koyun\n• Pembe ya da kırmızı tonlarda bir şeyler giyin, bu renkler dikkat çekme enerjisini artırır\n• Bir şükür listesi yapın - sizi seven ve fark eden insanlar için minnet duygusunu hissedin\n• Yeni bir beceri öğrenmeye başlayın ya da bir hobiye zaman ayırın, kendinize yatırım yapın",
      en: "• Say something positive about yourself today - smile at yourself in the mirror\n• Send a message to the person you feel is thinking about you, don't hesitate to take the first step\n• Write 'I am valuable and deserve to be seen' on a paper and place it somewhere visible\n• Wear something in pink or red tones, these colors increase attention-drawing energy\n• Make a gratitude list - feel thankful for people who love and notice you\n• Start learning a new skill or dedicate time to a hobby, invest in yourself",
    },
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
    numerology: {
      tr: "02:02, 2 rakamının dört kez tekrarlanmasıyla oluşan, son derece hassas ve dişil bir enerjiye sahiptir. 2 sayısı işbirliği, diplomasi, sezgi ve duyarlılığı temsil eder. Toplamı 4 (2+2=4) olan bu saat, aynı zamanda pratiklik ve düzen arayışını da simgeler. Bu saat, ikili ilişkilerde dengeyi bulma ve çatışmaları çözme zamanının geldiğini gösterir. Empati yeteneğinizin zirve yaptığı bir andır. Karşınızdaki kişinin söyleyemediklerini duyabilme kapasitesine sahipsiniz.",
      en: "02:02 possesses an extremely sensitive and feminine energy, formed by the repetition of the number 2 four times. The number 2 represents cooperation, diplomacy, intuition, and sensitivity. With a sum of 4 (2+2=4), this hour also symbolizes practicality and the search for order. This hour indicates that it's time to find balance in relationships and resolve conflicts. It's a moment when your empathy skills are at their peak. You have the capacity to hear what the person in front of you cannot say.",
    },
    astrology: {
      tr: "Astrolojik olarak 02:02, Ay ve Venüs'ün yumuşak etkileşimini yansıtır. Yengeç ve Terazi burçlarının enerjisiyle rezonansa girer. Yengeç koruyuculuğu ve duygusallığı, Terazi ise uyumu ve estetiği getirir. Bu saatte sezgileriniz çok açıktır. Rüyalarınız haberci olabilir. Eğer haritanızda su grubu burçları (Yengeç, Akrep, Balık) baskınsa, bu saati gördüğünüzde psişik yetenekleriniz artabilir. Duygusal derinleşme ve içsel huzur için mükemmel bir zamandır.",
      en: "Astrologically, 02:02 reflects the soft interaction of the Moon and Venus. It resonates with the energies of Cancer and Libra. Cancer brings protectiveness and emotionality, while Libra brings harmony and aesthetics. Your intuition is very open at this hour. Your dreams can be messengers. If water signs (Cancer, Scorpio, Pisces) are dominant in your chart, your psychic abilities may increase when you see this hour. It is an excellent time for emotional deepening and inner peace.",
    },
    loveAndRelationships: {
      tr: "Aşkta 02:02, gizli kalmış duyguların ve platonik aşkların saatidir. Biri sizi uzaktan seviyor olabilir. Eğer bir ilişkiniz varsa, partnerinizle telepatik bir bağ kurabilirsiniz. Birbirinizi düşünmeden arayabilir ya da aynı anda aynı şeyi söyleyebilirsiniz. Bu saat, ilişkideki sorunları konuşmadan, sadece hissederek çözebileceğiniz bir frekans sunar. Bekar iseniz, nazik ve anlayışlı biriyle tanışma ihtimaliniz yüksektir. Bu kişi ruhunuzu okşayacak bir yapıya sahip olacaktır.",
      en: "In love, 02:02 is the hour of hidden feelings and platonic loves. Someone might be loving you from afar. If you are in a relationship, you can establish a telepathic bond with your partner. You might call each other without thinking or say the same thing at the same time. This hour offers a frequency where you can resolve relationship issues just by feeling, without speaking. If you are single, there is a high chance of meeting someone gentle and understanding. This person will have a nature that soothes your soul.",
    },
    careerAndMoney: {
      tr: "Kariyerde 02:02, işbirliği ve ortaklıkların önemini vurgular. Tek başınıza hareket etmek yerine, başkalarından destek almalısınız. Bir ekip çalışması size başarı getirecektir. Finansal konularda, sezgilerinize güvenin ama mantığı elden bırakmayın. Bir sözleşme ya da anlaşma yapacaksanız, detayları iyi inceleyin. Bu saat, diplomatik yeteneklerinizi kullanarak iş yerindeki gerginlikleri çözebileceğiniz bir zamandır.",
      en: "In career, 02:02 emphasizes the importance of cooperation and partnerships. Instead of acting alone, you should seek support from others. Teamwork will bring you success. In financial matters, trust your intuition but don't abandon logic. If you are going to make a contract or agreement, examine the details well. This hour is a time when you can resolve tensions in the workplace using your diplomatic skills.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 02:02, iç sesinizi dinlemeniz gerektiğini söyler. Melekleriniz size 'sabırlı ol, her şey yoluna girecek' mesajını veriyor. Bu saatte meditasyon yapmak, özellikle kalp çakrasını şifalandırmak için çok etkilidir. Ay taşı veya selenit kullanarak enerjinizi dengeleyebilirsiniz. Su ile temas etmek (duş almak, su içmek) bu saatin enerjisini aktive eder.",
      en: "Spiritually, 02:02 tells you to listen to your inner voice. Your angels are giving you the message 'be patient, everything will be fine.' Meditating at this hour is very effective, especially for healing the heart chakra. You can balance your energy using moonstone or selenite. Contact with water (taking a shower, drinking water) activates the energy of this hour.",
    },
    actionSteps: {
      tr: "• Bir bardak su için ve niyetinizi suya fısıldayın\n• Sevdiğiniz birine sebepsizce güzel bir mesaj atın\n• Rüyalarınızı not etmek için başucunuza bir defter koyun\n• Gümüş takılar takın, Ay enerjisini çeker\n• Bir sorununuz varsa, uyumadan önce cevabını rüyanızda görmeye niyet edin",
      en: "• Drink a glass of water and whisper your intention into the water\n• Send a nice message to a loved one for no reason\n• Put a notebook by your bedside to record your dreams\n• Wear silver jewelry, it attracts Moon energy\n• If you have a problem, intend to see the answer in your dream before sleeping",
    },
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
    numerology: {
      tr: "03:03, 3 rakamının enerjisini taşır. 3, iletişim, yaratıcılık, sosyal ilişkiler ve kendini ifade etmeyi simgeler. Toplamı 6 (3+3=6) olan bu saat, aynı zamanda aile, sevgi ve sorumluluk temalarını gündeme getirir. Bu saat, düşüncelerinizin ve sözlerinizin yaratıcı gücüne dikkat çeker. İletişim kanallarının açık olduğu, kendinizi ifade etmenin kolaylaştığı bir zamandır.",
      en: "03:03 carries the energy of the number 3. 3 symbolizes communication, creativity, social relationships, and self-expression. With a sum of 6 (3+3=6), this hour also brings up themes of family, love, and responsibility. This hour draws attention to the creative power of your thoughts and words. It is a time when communication channels are open and expressing yourself becomes easier.",
    },
    astrology: {
      tr: "Astrolojik olarak 03:03, Merkür ve Jüpiter etkisindedir. Merkür iletişimi, Jüpiter ise genişlemeyi ve şansı temsil eder. İkizler ve Yay burçlarının enerjisiyle uyumludur. Bu saatte zihniniz çok aktiftir, fikirler havada uçuşur. Telepatik iletişim için en güçlü saatlerden biridir. Eğer birini düşünüyorsanız, o da sizi düşünüyor olabilir.",
      en: "Astrologically, 03:03 is under the influence of Mercury and Jupiter. Mercury represents communication, while Jupiter represents expansion and luck. It is compatible with the energies of Gemini and Sagittarius. At this hour, your mind is very active, ideas are flying around. It is one of the strongest hours for telepathic communication. If you are thinking of someone, they might be thinking of you too.",
    },
    loveAndRelationships: {
      tr: "Aşkta 03:03, iletişimin önemini vurgular. Partnerinizle konuşmanız gereken konular varsa, şimdi tam zamanı. Yanlış anlaşılmaların çözülebileceği bir andır. Bekar iseniz, sosyal çevrenizden biriyle yakınlaşabilirsiniz. Bu kişiyle sohbet etmekten büyük keyif alacaksınız. Zihinsel uyumun ön planda olduğu bir ilişki başlayabilir.",
      en: "In love, 03:03 emphasizes the importance of communication. If there are issues you need to discuss with your partner, now is the time. It is a moment when misunderstandings can be resolved. If you are single, you might get closer to someone from your social circle. You will enjoy chatting with this person very much. A relationship where mental compatibility is at the forefront may begin.",
    },
    careerAndMoney: {
      tr: "Kariyerde 03:03, yaratıcı projeler ve iletişim odaklı işler için harikadır. Yazarlık, pazarlama, öğretim gibi alanlarda başarı vaat eder. Yeni fikirlerinizi paylaşmaktan çekinmeyin. İş seyahatleri gündeme gelebilir. Finansal olarak, iletişim becerilerinizi kullanarak kazanç elde edebilirsiniz.",
      en: "In career, 03:03 is great for creative projects and communication-focused jobs. It promises success in fields like writing, marketing, and teaching. Don't hesitate to share your new ideas. Business trips may come up. Financially, you can earn income by using your communication skills.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 03:03, Yükselmiş Üstatların (Ascended Masters) sizinle olduğunu gösterir. Onlardan rehberlik isteyebilirsiniz. Boğaz çakrası ile ilişkilidir; doğrularınızı söylemekten korkmayın. Mavi renkli taşlar (lapis lazuli, akuamarin) bu saatin enerjisini destekler.",
      en: "Spiritually, 03:03 shows that the Ascended Masters are with you. You can ask them for guidance. It is associated with the throat chakra; don't be afraid to speak your truth. Blue stones (lapis lazuli, aquamarine) support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Aklınıza gelen ilk kişiyi arayın veya mesaj atın\n• Yaratıcı bir şeyler yazın veya çizin\n• Mavi bir mum yakın ve boğaz çakranıza odaklanın\n• 'Ben kendimi özgürce ifade ediyorum' olumlamasını yapın\n• Sosyal bir etkinliğe katılın veya plan yapın",
      en: "• Call or message the first person that comes to mind\n• Write or draw something creative\n• Light a blue candle and focus on your throat chakra\n• Affirm 'I express myself freely'\n• Join a social event or make a plan",
    },
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
    numerology: {
      tr: "04:04, 4 rakamının istikrar, düzen ve güven enerjisini taşır. Toplamı 8 (4+4=8) olan bu saat, maddi ve manevi dengenin, gücün ve başarının habercisidir. 4 sayısı aynı zamanda dört elementi (ateş, su, hava, toprak) ve dört yönü temsil eder. Hayatınızda sağlam temeller atma zamanıdır. Disiplinli çalışmanın ödüllerini alacağınız bir dönemdesiniz.",
      en: "04:04 carries the energy of stability, order, and trust of the number 4. With a sum of 8 (4+4=8), this hour is a harbinger of material and spiritual balance, power, and success. The number 4 also represents the four elements (fire, water, air, earth) and the four directions. It is time to lay solid foundations in your life. You are in a period where you will receive the rewards of disciplined work.",
    },
    astrology: {
      tr: "Astrolojik olarak 04:04, Satürn ve Uranüs etkisindedir. Satürn disiplini, Uranüs ise değişimi getirir. Kova ve Oğlak burçlarının enerjisiyle uyumludur. Bu saat, hayatınızdaki yapıları gözden geçirmeniz ve gerekirse yeniden inşa etmeniz gerektiğini söyler. Doğayla bağlantı kurmak bu saatte size iyi gelecektir.",
      en: "Astrologically, 04:04 is under the influence of Saturn and Uranus. Saturn brings discipline, while Uranus brings change. It is compatible with the energies of Aquarius and Capricorn. This hour tells you to review the structures in your life and rebuild them if necessary. Connecting with nature will be good for you at this hour.",
    },
    loveAndRelationships: {
      tr: "Aşkta 04:04, güven ve sadakatin önemini vurgular. İlişkinizde sağlam bir temel oluşturmak için çalışmalısınız. Geçici hevesler yerine uzun vadeli bağlara odaklanın. Eğer bir sorununuz varsa, bunu olgunlukla ve sabırla çözebilirsiniz. Bekar iseniz, size güven verecek, ayakları yere basan biriyle tanışabilirsiniz.",
      en: "In love, 04:04 emphasizes the importance of trust and loyalty. You should work to build a solid foundation in your relationship. Focus on long-term bonds instead of temporary whims. If you have a problem, you can solve it with maturity and patience. If you are single, you might meet someone grounded who will give you confidence.",
    },
    careerAndMoney: {
      tr: "Kariyerde 04:04, sıkı çalışmanın ve organizasyonun zamanıdır. İşlerinizi düzene koyun, planlı hareket edin. Finansal olarak yatırım yapmak, birikim yapmak için uygun bir zamandır. Gayrimenkul veya toprakla ilgili işler şanslı olabilir. Sabırlı olun, başarınız kalıcı olacaktır.",
      en: "In career, 04:04 is the time for hard work and organization. Organize your work, act according to plan. Financially, it is a suitable time to invest and save. Real estate or land-related businesses can be lucky. Be patient, your success will be lasting.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 04:04, doğa ruhları ve elementlerle bağlantı kurma zamanıdır. Kök çakranızla ilgilidir; topraklanma çalışmaları yapın. Doğada yürüyüş yapmak, ağaçlara dokunmak enerjinizi dengeler. Yeşil ve kahverengi tonları bu saatin renkleridir.",
      en: "Spiritually, 04:04 is the time to connect with nature spirits and elements. It is related to your root chakra; do grounding exercises. Walking in nature, touching trees balances your energy. Green and brown tones are the colors of this hour.",
    },
    actionSteps: {
      tr: "• Çıplak ayakla toprağa basın veya bir ağaca sarılın\n• Evinizi veya çalışma masanızı düzenleyin\n• Finansal hedeflerinizi bir kağıda yazın\n• Yeşil bir bitki edinin ve bakımını üstlenin\n• 'Ben güvendeyim ve destekleniyorum' olumlamasını yapın",
      en: "• Step on the soil with bare feet or hug a tree\n• Organize your home or desk\n• Write your financial goals on a paper\n• Get a green plant and take care of it\n• Affirm 'I am safe and supported'",
    },
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
    numerology: {
      tr: "05:05, 5 rakamının değişim, özgürlük ve macera enerjisini taşır. Toplamı 1 (5+5=10 -> 1+0=1) olan bu saat, yeni başlangıçları ve bireyselliği de simgeler. Hayatınızda bir döngünün kapandığını ve yenisinin başladığını gösterir. Enerjiniz yüksektir, yerinizde duramazsınız. Seyahatler, yeni deneyimler ve sürprizler kapıdadır.",
      en: "05:05 carries the energy of change, freedom, and adventure of the number 5. With a sum of 1 (5+5=10 -> 1+0=1), this hour also symbolizes new beginnings and individuality. It shows that a cycle in your life is closing and a new one is beginning. Your energy is high, you can't stand still. Travels, new experiences, and surprises are at the door.",
    },
    astrology: {
      tr: "Astrolojik olarak 05:05, Merkür ve Mars etkisindedir. Hızlı düşünme, hızlı hareket etme ve cesaret verir. İkizler ve Koç burçlarının enerjisiyle uyumludur. Bu saatte ani kararlar alabilirsiniz. İletişim trafiğiniz artabilir. Geçmişten gelen haberler, Merkür retrosu etkisine benzer şekilde gündeme gelebilir.",
      en: "Astrologically, 05:05 is under the influence of Mercury and Mars. It gives quick thinking, quick action, and courage. It is compatible with the energies of Gemini and Aries. You might make sudden decisions at this hour. Your communication traffic may increase. News from the past may come up, similar to the Mercury retrograde effect.",
    },
    loveAndRelationships: {
      tr: "Aşkta 05:05, heyecan ve tutku arayışını gösterir. İlişkinizde monotonluktan sıkılmış olabilirsiniz; yenilik yapma zamanı. Eski sevgililer bu dönemde geri dönebilir, ancak dikkatli olun; geçmişi tekrar etmek yerine ders alıp ilerlemek daha iyidir. Bekar iseniz, sizi heyecanlandıracak, sıra dışı biriyle tanışabilirsiniz.",
      en: "In love, 05:05 shows the search for excitement and passion. You might be bored with monotony in your relationship; it's time to innovate. Ex-lovers may return during this period, but be careful; it is better to learn lessons and move forward instead of repeating the past. If you are single, you might meet someone unusual who will excite you.",
    },
    careerAndMoney: {
      tr: "Kariyerde 05:05, değişiklik yapma isteğini tetikler. İş değiştirmek, yeni bir projeye başlamak veya farklı bir alana yönelmek isteyebilirsiniz. Pazarlama, satış, turizm gibi hareketli sektörlerde şanslısınız. Risk alma eğiliminiz artabilir, ancak hesaplı riskler alın.",
      en: "In career, 05:05 triggers the desire to make changes. You might want to change jobs, start a new project, or turn to a different field. You are lucky in active sectors like marketing, sales, and tourism. Your tendency to take risks may increase, but take calculated risks.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 05:05, özgürleşme zamanıdır. Sizi kısıtlayan inançlardan, bağımlılıklardan kurtulun. Meditasyon yaparken hareketli teknikleri (dans, yürüyüş meditasyonu) deneyebilirsiniz. Turuncu renk ve karnelyan taşı bu saatin enerjisini dengeler.",
      en: "Spiritually, 05:05 is the time for liberation. Get rid of limiting beliefs and addictions. You can try active techniques (dance, walking meditation) while meditating. Orange color and carnelian stone balance the energy of this hour.",
    },
    actionSteps: {
      tr: "• Rutininizi bozacak bir şey yapın\n• Uzun zamandır gitmediğiniz bir yere gidin\n• Eski bir arkadaşınızı arayın\n• Turuncu bir kıyafet veya aksesuar kullanın\n• 'Ben değişime ve yeniliklere açığım' olumlamasını yapın",
      en: "• Do something that breaks your routine\n• Go to a place you haven't been to for a long time\n• Call an old friend\n• Use an orange outfit or accessory\n• Affirm 'I am open to change and innovation'",
    },
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
    numerology: {
      tr: "06:06, 6 rakamının sevgi, uyum, aile ve sorumluluk enerjisini taşır. Toplamı 3 (6+6=12 -> 1+2=3) olan bu saat, iletişimin ve yaratıcılığın sevgiyle birleştiği bir noktadır. Evrensel sevgi, şefkat ve hizmet etme arzusu ön plandadır. Bu saat, kendinizi ve başkalarını koşulsuz sevme dersini hatırlatır.",
      en: "06:06 carries the energy of love, harmony, family, and responsibility of the number 6. With a sum of 3 (6+6=12 -> 1+2=3), this hour is a point where communication and creativity merge with love. Universal love, compassion, and the desire to serve are at the forefront. This hour reminds you of the lesson of loving yourself and others unconditionally.",
    },
    astrology: {
      tr: "Astrolojik olarak 06:06, Venüs ve Jüpiter'in koruyucu etkisindedir. Boğa ve Terazi burçlarının enerjisiyle uyumludur. Güzellik, sanat ve estetik konuları gündeme gelir. Evinizde dekorasyon değişikliği yapmak, kendinize bakım yapmak için harika bir zamandır. İlişkilerde iyileşme ve şifalanma enerjisi hakimdir.",
      en: "Astrologically, 06:06 is under the protective influence of Venus and Jupiter. It is compatible with the energies of Taurus and Libra. Beauty, art, and aesthetic issues come up. It is a great time to make decoration changes in your home and take care of yourself. Healing and recovery energy prevails in relationships.",
    },
    loveAndRelationships: {
      tr: "Aşkta 06:06, uyum ve denge arayışıdır. Partnerinizle romantik anlar yaşayabilir, birbirinize olan sevginizi tazeleyebilirsiniz. Ailevi sorunlar varsa, bunları sevgiyle çözebilirsiniz. Bekar iseniz, sanatsal yönü güçlü, nazik biriyle tanışabilirsiniz. Evlilik veya nişan gibi ciddi adımlar için uygun bir saattir.",
      en: "In love, 06:06 is the search for harmony and balance. You can experience romantic moments with your partner and refresh your love for each other. If there are family problems, you can solve them with love. If you are single, you might meet someone gentle with a strong artistic side. It is a suitable hour for serious steps like marriage or engagement.",
    },
    careerAndMoney: {
      tr: "Kariyerde 06:06, hizmet odaklı işlerde başarı getirir. Sağlık, eğitim, danışmanlık veya sanat alanlarında çalışıyorsanız verimli bir dönemdesiniz. İş ortamında huzuru sağlamak, çalışma arkadaşlarınızla iyi ilişkiler kurmak size kazanç sağlayacaktır.",
      en: "In career, 06:06 brings success in service-oriented jobs. If you work in health, education, consulting, or art fields, you are in a productive period. Ensuring peace in the work environment and establishing good relationships with your colleagues will bring you profit.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 06:06, kalp çakrasını açma zamanıdır. Kendinizi affedin, başkalarını affedin. Sevgi frekansında kalın. Gül kuvars veya zümrüt taşı kullanmak kalbinizi şifalandırır. Pembe ve yeşil renkleri bu saatin enerjisini yükseltir.",
      en: "Spiritually, 06:06 is the time to open the heart chakra. Forgive yourself, forgive others. Stay in the frequency of love. Using rose quartz or emerald stone heals your heart. Pink and green colors raise the energy of this hour.",
    },
    actionSteps: {
      tr: "• Kendinize veya bir başkasına çiçek alın\n• Evinizde güzel bir köşe hazırlayın\n• Sevdiğiniz bir şarkıyı dinleyin ve eşlik edin\n• 'Ben sevgiyi hak ediyorum ve sevgiyi çekiyorum' olumlamasını yapın\n• Birine yardım edin veya bağış yapın",
      en: "• Buy flowers for yourself or someone else\n• Prepare a beautiful corner in your home\n• Listen to a favorite song and sing along\n• Affirm 'I deserve love and I attract love'\n• Help someone or make a donation",
    },
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
    numerology: {
      tr: "07:07, 7 rakamının mistik, ruhani ve entelektüel enerjisini taşır. 7, bilgeliği, içsel keşfi ve şansı simgeler. Toplamı 14 (7+7=14 -> 1+4=5) olan bu saat, aynı zamanda değişim ve özgürlük enerjisiyle de bağlantılıdır. Zihinsel ve ruhsal uyanışın birleştiği bir noktadasınız. Evrenin gizemlerini çözmeye ve kendi gerçeğinizi bulmaya yakınsınız.",
      en: "07:07 carries the mystical, spiritual, and intellectual energy of the number 7. 7 symbolizes wisdom, inner discovery, and luck. With a sum of 14 (7+7=14 -> 1+4=5), this hour is also connected to the energy of change and freedom. You are at a point where mental and spiritual awakening merge. You are close to solving the mysteries of the universe and finding your own truth.",
    },
    astrology: {
      tr: "Astrolojik olarak 07:07, Neptün ve Uranüs etkisindedir. Balık ve Kova burçlarının enerjisiyle uyumludur. Sezgileriniz ve hayal gücünüz çok güçlüdür. Bu saatte ilham perileri sizi ziyaret edebilir. Sanatsal veya bilimsel bir buluş yapabilirsiniz. Spiritüel konulara ilginiz artabilir.",
      en: "Astrologically, 07:07 is under the influence of Neptune and Uranus. It is compatible with the energies of Pisces and Aquarius. Your intuition and imagination are very strong. Muses may visit you at this hour. You might make an artistic or scientific discovery. Your interest in spiritual matters may increase.",
    },
    loveAndRelationships: {
      tr: "Aşkta 07:07, ruhsal bağların ve derin sohbetlerin zamanıdır. Partnerinizle felsefi konuları konuşabilir, birbirinizin zihnini keşfedebilirsiniz. Yüzeysel ilişkiler sizi tatmin etmez. Bekar iseniz, zekasıyla sizi etkileyecek, gizemli biriyle tanışabilirsiniz. Bu kişi size farklı bakış açıları kazandıracaktır.",
      en: "In love, 07:07 is the time for spiritual bonds and deep conversations. You can discuss philosophical topics with your partner and explore each other's minds. Superficial relationships do not satisfy you. If you are single, you might meet someone mysterious who will impress you with their intelligence. This person will give you different perspectives.",
    },
    careerAndMoney: {
      tr: "Kariyerde 07:07, araştırma, analiz ve eğitim konularında başarı getirir. Akademik çalışmalar, yazılım veya strateji geliştirme işleri için uygundur. Şans faktörü yanınızdadır; beklemediğiniz bir yerden teklif alabilirsiniz. Finansal olarak, bilgiye yatırım yapmak size kazanç sağlayacaktır.",
      en: "In career, 07:07 brings success in research, analysis, and education. It is suitable for academic studies, software, or strategy development jobs. The luck factor is on your side; you might receive an offer from an unexpected place. Financially, investing in knowledge will bring you profit.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 07:07, uyanış çağrısıdır. Meditasyon, yoga veya dua etmek için mükemmel bir zamandır. Üçüncü göz çakranız aktiftir; rüyalarınıza ve vizyonlarınıza dikkat edin. Mor ve lacivert renkleri, ametist taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 07:07 is a wake-up call. It is an excellent time for meditation, yoga, or prayer. Your third eye chakra is active; pay attention to your dreams and visions. Purple and navy blue colors, amethyst stone support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Bir kitap okumaya başlayın veya araştırma yapın\n• Meditasyon yaparak zihninizi boşaltın\n• Rüyalarınızı yorumlamaya çalışın\n• Mor bir mum yakın ve üçüncü gözünüze odaklanın\n• 'Ben evrenin bilgeliğine açığım' olumlamasını yapın",
      en: "• Start reading a book or doing research\n• Clear your mind by meditating\n• Try to interpret your dreams\n• Light a purple candle and focus on your third eye\n• Affirm 'I am open to the wisdom of the universe'",
    },
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
    numerology: {
      tr: "08:08, 8 rakamının güç, otorite, bolluk ve sonsuzluk enerjisini taşır. 8, karmik dengeyi ve adaleti simgeler. Toplamı 16 (8+8=16 -> 1+6=7) olan bu saat, maddi başarıyı ruhsal bilgelikle birleştirmeniz gerektiğini söyler. Ektiğinizi biçme zamanıdır. Finansal konularda büyük bir potansiyele sahipsiniz.",
      en: "08:08 carries the energy of power, authority, abundance, and infinity of the number 8. 8 symbolizes karmic balance and justice. With a sum of 16 (8+8=16 -> 1+6=7), this hour tells you to combine material success with spiritual wisdom. It is time to reap what you sow. You have great potential in financial matters.",
    },
    astrology: {
      tr: "Astrolojik olarak 08:08, Satürn ve Mars etkisindedir. Oğlak ve Akrep burçlarının enerjisiyle uyumludur. Disiplin, kararlılık ve dönüşüm gücü verir. Zorlukların üstesinden gelme kapasiteniz yüksektir. Bu saat, hedeflerinize ulaşmak için gereken iradeyi size sağlar.",
      en: "Astrologically, 08:08 is under the influence of Saturn and Mars. It is compatible with the energies of Capricorn and Scorpio. It gives discipline, determination, and transformation power. Your capacity to overcome difficulties is high. This hour provides you with the will needed to reach your goals.",
    },
    loveAndRelationships: {
      tr: "Aşkta 08:08, denge ve adalet arayışıdır. İlişkinizde alma-verme dengesini kurmalısınız. Eğer haksızlığa uğradıysanız, karma yerini bulacaktır. Güçlü ve tutkulu bir ilişki yaşayabilirsiniz. Bekar iseniz, iş ortamından veya kariyerinizle ilgili bir yerden biriyle tanışabilirsiniz.",
      en: "In love, 08:08 is the search for balance and justice. You must establish the balance of giving and receiving in your relationship. If you have been treated unfairly, karma will find its place. You can experience a strong and passionate relationship. If you are single, you might meet someone from the work environment or related to your career.",
    },
    careerAndMoney: {
      tr: "Kariyerde 08:08, yükseliş ve başarı zamanıdır. Terfi alabilir, maaş artışı yaşayabilir veya kendi işinizi kurabilirsiniz. Liderlik vasıflarınız ön plandadır. Finansal yatırımlar için çok şanslı bir saattir, ancak dürüstlükten ödün vermeyin.",
      en: "In career, 08:08 is the time for rise and success. You might get a promotion, a salary increase, or start your own business. Your leadership qualities are at the forefront. It is a very lucky hour for financial investments, but do not compromise on honesty.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 08:08, karmik temizlik zamanıdır. Geçmişin yüklerinden kurtulun. Adalet duygunuzu güçlendirin. Solar pleksus çakrası ile ilişkilidir; özgüven çalışmaları yapın. Sarı renk ve sitrin taşı bu saatin enerjisini çeker.",
      en: "Spiritually, 08:08 is the time for karmic cleansing. Get rid of the burdens of the past. Strengthen your sense of justice. It is related to the solar plexus chakra; do self-confidence exercises. Yellow color and citrine stone attract the energy of this hour.",
    },
    actionSteps: {
      tr: "• Bütçenizi gözden geçirin ve plan yapın\n• İş yerinde inisiyatif alın\n• Sarı bir mum yakın ve bolluk dileyin\n• 'Ben bolluğu ve bereketi hak ediyorum' olumlamasını yapın\n• Birine adil davranın veya hakkını teslim edin",
      en: "• Review your budget and make a plan\n• Take initiative at work\n• Light a yellow candle and wish for abundance\n• Affirm 'I deserve abundance and prosperity'\n• Treat someone fairly or give them their due",
    },
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
    numerology: {
      tr: "09:09, 9 rakamının tamamlanma, hümanizm ve evrensel sevgi enerjisini taşır. 9, bir döngünün sonunu ve bilgeliği temsil eder. Toplamı 18 (9+9=18 -> 1+8=9) olan bu saat, yine 9 enerjisine döner. Bu, güçlü bir kapanış ve ruhsal olgunluk işaretidir. Başkalarına yardım etme, rehberlik etme potansiyeliniz yüksektir.",
      en: "09:09 carries the energy of completion, humanism, and universal love of the number 9. 9 represents the end of a cycle and wisdom. With a sum of 18 (9+9=18 -> 1+8=9), this hour returns to the energy of 9. This is a sign of strong closure and spiritual maturity. Your potential to help and guide others is high.",
    },
    astrology: {
      tr: "Astrolojik olarak 09:09, Mars ve Neptün etkisindedir. Koç ve Balık burçlarının enerjisiyle uyumludur. Cesaret ve şefkat bir aradadır. İnsanlık için bir şeyler yapma arzusu duyabilirsiniz. Bu saat, egodan sıyrılıp bütüne hizmet etme zamanıdır.",
      en: "Astrologically, 09:09 is under the influence of Mars and Neptune. It is compatible with the energies of Aries and Pisces. Courage and compassion are together. You might feel a desire to do something for humanity. This hour is the time to shed the ego and serve the whole.",
    },
    loveAndRelationships: {
      tr: "Aşkta 09:09, koşulsuz sevgiyi ve fedakarlığı gösterir. Partnerinizi olduğu gibi kabul etmelisiniz. Eğer toksik bir ilişki içindeyseniz, bunu bitirme gücünü kendinizde bulabilirsiniz. Bekar iseniz, yardımsever ve duyarlı biriyle tanışabilirsiniz. Ruhsal bir bağ kurmak önceliğinizdir.",
      en: "In love, 09:09 shows unconditional love and sacrifice. You must accept your partner as they are. If you are in a toxic relationship, you can find the strength in yourself to end it. If you are single, you might meet someone helpful and sensitive. Establishing a spiritual bond is your priority.",
    },
    careerAndMoney: {
      tr: "Kariyerde 09:09, sosyal sorumluluk projeleri ve insani yardım işleri için uygundur. Doktorluk, hemşirelik, sosyal hizmetler gibi alanlarda başarı getirir. Para kazanmaktan çok, manevi tatmin arayışındasınız. Ancak evren, iyiliklerinizi karşılıksız bırakmayacaktır.",
      en: "In career, 09:09 is suitable for social responsibility projects and humanitarian aid work. It brings success in fields like medicine, nursing, and social services. You are in search of spiritual satisfaction rather than earning money. However, the universe will not leave your kindness unrewarded.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 09:09, içsel bilgeliğinize güvenme zamanıdır. Meditasyon yaparak iç sesinizi dinleyin. Yalnız kalmak ve kendinizi dinlemek size iyi gelecektir. İnziva veya ruhsal kamplar için uygun bir dönemdir. Altın rengi bu saatin enerjisini yansıtır.",
      en: "Spiritually, 09:09 is the time to trust your inner wisdom. Listen to your inner voice by meditating. Being alone and listening to yourself will be good for you. It is a suitable period for retreat or spiritual camps. Gold color reflects the energy of this hour.",
    },
    actionSteps: {
      tr: "• Birine karşılıksız yardım edin\n• Yalnız başınıza bir yürüyüşe çıkın\n• Günlük tutarak hislerinizi yazın\n• 'Ben evrenin bir parçasıyım ve sevgi doluyum' olumlamasını yapın\n• Eski eşyalarınızı bağışlayın",
      en: "• Help someone unconditionally\n• Go for a walk alone\n• Write your feelings by keeping a journal\n• Affirm 'I am a part of the universe and I am full of love'\n• Donate your old items",
    },
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
    numerology: {
      tr: "10:10, 1 ve 0 rakamlarının güçlü kombinasyonudur. 1 yeni başlangıçları, 0 ise sonsuz potansiyeli simgeler. Toplamı 2 (1+0+1+0=2) olan bu saat, aynı zamanda ortaklık ve denge enerjisi taşır. Hayatınızda yepyeni bir sayfa açılıyor. Şans ve fırsatlar kapınızda. Kendinize güvenin ve adım atın.",
      en: "10:10 is a powerful combination of numbers 1 and 0. 1 symbolizes new beginnings, and 0 symbolizes infinite potential. With a sum of 2 (1+0+1+0=2), this hour also carries the energy of partnership and balance. A brand new page is opening in your life. Luck and opportunities are at your door. Believe in yourself and take a step.",
    },
    astrology: {
      tr: "Astrolojik olarak 10:10, Güneş ve Uranüs etkisindedir. Aslan ve Kova burçlarının enerjisiyle uyumludur. Parlama, dikkat çekme ve özgün olma zamanıdır. Sürpriz gelişmeler yaşanabilir. Sosyal çevreniz genişleyebilir.",
      en: "Astrologically, 10:10 is under the influence of the Sun and Uranus. It is compatible with the energies of Leo and Aquarius. It is time to shine, attract attention, and be original. Surprise developments may occur. Your social circle may expand.",
    },
    loveAndRelationships: {
      tr: "Aşkta 10:10, heyecan verici gelişmeleri müjdeler. Bekar iseniz, ilk görüşte aşk yaşayabilirsiniz. Bu kişi hayatınızı değiştirecek bir etkiye sahip olabilir. İlişkiniz varsa, birlikte yeni bir hobiye başlayabilir veya seyahate çıkabilirsiniz. İlişkinize taze kan geliyor.",
      en: "In love, 10:10 heralds exciting developments. If you are single, you might experience love at first sight. This person might have a life-changing effect. If you are in a relationship, you can start a new hobby together or go on a trip. Fresh blood is coming to your relationship.",
    },
    careerAndMoney: {
      tr: "Kariyerde 10:10, tanınma ve başarı getirir. Projeleriniz onaylanabilir, ödül alabilirsiniz. Girişimcilik için harika bir zamandır. Kendi işinizi kurmak istiyorsanız, evren sizi destekliyor. Finansal olarak beklenmedik kazançlar olabilir.",
      en: "In career, 10:10 brings recognition and success. Your projects may be approved, you may receive an award. It is a great time for entrepreneurship. If you want to start your own business, the universe supports you. There may be unexpected financial gains.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 10:10, pozitif düşünmenin gücünü hatırlatır. Neye odaklanırsanız onu büyütürsünüz. İyimser olun. Taç çakrası ile ilişkilidir; evrensel bilgiye açıksınız. Beyaz ve altın renkleri bu saatin enerjisini yükseltir.",
      en: "Spiritually, 10:10 reminds you of the power of positive thinking. Whatever you focus on, you magnify. Be optimistic. It is related to the crown chakra; you are open to universal knowledge. White and gold colors raise the energy of this hour.",
    },
    actionSteps: {
      tr: "• Yeni bir yere gidin veya yeni bir rota deneyin\n• Kendinize güven telkin edin\n• Bir vizyon panosu hazırlayın\n• 'Ben şanslıyım ve fırsatları çekiyorum' olumlamasını yapın\n• Sosyal medyada aktif olun",
      en: "• Go to a new place or try a new route\n• Instill confidence in yourself\n• Prepare a vision board\n• Affirm 'I am lucky and I attract opportunities'\n• Be active on social media",
    },
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
    numerology: {
      tr: "11:11, numerolojide en güçlü ve kutsal sayı dizilerinden biridir. 11 bir 'usta sayı' (master number) olup, ruhsal uyanışı, sezgiyi ve aydınlanmayı temsil eder. İki kere 11 görmek, bu enerjinin iki katına çıktığı anlamına gelir. Bu saat, evrenle tam bir uyum içinde olduğunuz ve manifestasyon gücünüzün zirveye ulaştığı bir andır. Toplamı 4 (1+1+1+1=4) olan bu kombinasyon, aynı zamanda sağlam temeller kurma, istikrar ve gerçekleştirme enerjisini taşır. 11:11'i görmek, düşüncelerinizin hızla gerçekleşmeye başladığının bir işaretidir. Bu yüzden zihninizi pozitif tutmak son derece önemlidir.",
      en: "11:11 is one of the most powerful and sacred number sequences in numerology. 11 is a 'master number' representing spiritual awakening, intuition, and enlightenment. Seeing 11 twice means this energy is doubled. This hour is a moment when you are in perfect harmony with the universe and your manifestation power reaches its peak. This combination, with a sum of 4 (1+1+1+1=4), also carries the energy of building solid foundations, stability, and realization. Seeing 11:11 is a sign that your thoughts are beginning to manifest rapidly. Therefore, keeping your mind positive is extremely important.",
    },
    astrology: {
      tr: "Astrolojik olarak 11:11, Uranüs ve Neptün gezegenlerinin birleşik enerjisini yansıtır. Uranüs ani değişimleri, yaratıcılığı ve özgünlüğü; Neptün ise rüyaları, sezgileri ve maneviyatı simgeler. Bu saat, Kova ve Balık burçlarının titreşimleriyle rezonansa girer. Eğer bu burçlar doğum haritanızda baskınsa, 11:11'i sıkça görebilirsiniz. Bu saat aynı zamanda astral düzlemlerle bağlantının en güçlü olduğu bir kapıdır. Evrensel bilinçle doğrudan hat kurar gibisiniz. Ay'ın hangi burçta olduğuna bakın - bu dönemde Ay'ın burcu, dilek tutma konusunu belirleyebilir. Örneğin Boğa'dayken maddi dilekler, Balık'tayken manevi dilekler daha güçlüdür.",
      en: "Astrologically, 11:11 reflects the combined energy of the planets Uranus and Neptune. Uranus symbolizes sudden changes, creativity, and originality; while Neptune represents dreams, intuition, and spirituality. This hour resonates with the vibrations of Aquarius and Pisces. If these signs are dominant in your birth chart, you may frequently see 11:11. This hour is also a portal where the connection to astral planes is strongest. It's as if you have a direct line to universal consciousness. Check which sign the Moon is in - during this period, the Moon's sign can determine the theme for wish-making. For example, material wishes are stronger when in Taurus, spiritual wishes when in Pisces.",
    },
    loveAndRelationships: {
      tr: "Aşk hayatınız için 11:11, büyülü fırsatların kapısıdır. Eğer bekar ve aşk arıyorsanız, bu saatte tutacağınız dilek gerçekleşme potansiyeli taşır. Ruh eşinizi çekmek için bu an ideal bir zamandır. Hayal ettiğiniz ilişkiyi detaylıca düşünün, o kişiyle nasıl hissedeceğinizi canlandırın. Bir ilişkideyseniz, partnerinizle aranızdaki bağın derinleşmesi için niyet belirleyebilirsiniz. Bu saat ayrıca geçmişteki aşkların hatırlanabileceği, eski bir sevgiliden haber alabileceğiniz ya da bitmemiş bir ilişkinin kapanışını yapabileceğiniz bir andır. İkizler ruhlar birbirini bu frekansta daha güçlü hisseder. Kalbinizi açın ve sevginin sizin için ne anlama geldiğini netleştirin.",
      en: "For your love life, 11:11 is a portal to magical opportunities. If you're single and seeking love, a wish made at this hour carries the potential to manifest. This is an ideal time to attract your soulmate. Think in detail about the relationship you imagine, visualize how you would feel with that person. If you're in a relationship, you can set intentions for deepening the bond with your partner. This hour is also when past loves may be remembered, you might hear from an ex, or find closure for an unfinished relationship. Twin flames feel each other more strongly at this frequency. Open your heart and clarify what love means to you.",
    },
    careerAndMoney: {
      tr: "Kariyer ve finansal başarı için 11:11, manifestasyon ceremeti yapabileceğiniz en uygun saattir. Büyük hayallerinizi gerçek kılmak istiyorsanız, bu saatte net niyetler belirleyin. İş hayatında yeni bir fırsat, terfi ya da iş teklifi yakında gelebilir. Yaratıcı projeleriniz dikkat çekebilir ve sizi öne çıkarabilir. Finansal olarak bolluk diliyorsanız, bu saatte 'Ben bollukla uyum içindeyim' gibi olumlamalar tekrarlayın. Kendinize ve yeteneklerinize inanmalısınız. 11:11, aynı zamanda risk almanın iyi sonuç verebileceği bir enerjidir - ama bu riskin bilinçli ve sezgisel olması gerekir. Yatırım, girişim ya da iş ortaklığı konusundaki kararlarınızı bu frekansla destekleyin.",
      en: "For career and financial success, 11:11 is the most suitable hour to perform manifestation rituals. If you want to make your big dreams come true, set clear intentions at this hour. A new opportunity, promotion, or job offer in work life may come soon. Your creative projects can attract attention and make you stand out. If you're wishing for financial abundance, repeat affirmations like 'I am in harmony with abundance' at this hour. You must believe in yourself and your talents. 11:11 is also an energy where taking risks can yield good results - but this risk needs to be conscious and intuitive. Support your decisions about investment, entrepreneurship, or business partnerships with this frequency.",
    },
    spiritualGuidance: {
      tr: "11:11, ruhsal bir uyanış çağrısıdır. Bu saati görmek, manevi yolculuğunuzun hızlandığının ve yüksek bilinçle bağlantınızın arttığının işaretidir. Melek sayısı olarak da bilinen 11:11, koruyucu meleklerinizin size 'buradayız, seni destekliyoruz' dediği bir mesajdır. Bu saatte meditasyon yapmak, kristallerle çalışmak ya da enerji temizliği yapmak çok etkilidir. Ametist, şeffaf kuvars ya da lapis lazuli gibi taşlar bu frekansta güçlenir. Mor renk, bu saatin rengidir - mor mumlar yakabilir ya da mor kıyafetler giyebilirsiniz. En önemlisi, bu saatte şükran duygusuyla bir dilek tutun ve evrenin bu dileği duyduğuna inanın. Günlüğünüze bu saatte ne düşündüğünüzü yazın, ileride dönüp baktığınızda çoğunun gerçekleştiğini göreceksiniz.",
      en: "11:11 is a call to spiritual awakening. Seeing this hour is a sign that your spiritual journey is accelerating and your connection with higher consciousness is increasing. Also known as an angel number, 11:11 is a message from your guardian angels saying 'we are here, we support you.' Meditating, working with crystals, or doing energy cleansing at this hour is very effective. Stones like amethyst, clear quartz, or lapis lazuli become empowered at this frequency. Purple is the color of this hour - you can light purple candles or wear purple clothing. Most importantly, make a wish with gratitude at this hour and believe the universe hears it. Write in your journal what you were thinking at this hour, when you look back later you'll see that most have manifested.",
    },
    actionSteps: {
      tr: "• Bir kağıt alın ve en büyük dileğinizi yazın - bunu sakın kimseyle paylaşmayın\n• Gözlerinizi kapatın, derin bir nefes alın ve dileğinizin gerçekleştiğini hayal edin\n• 'Teşekkür ederim, bu ya da daha iyisi bana geliyor' deyin\n• Mor ya da beyaz bir mum yakın, dileklerinizi evrene gönderin\n• Günlüğünüze bu anı ve hislerinizi yazın, tarih ve saati not edin\n• Bir ametist taşı yanınızda taşımaya başlayın, bu frekansı korumanıza yardımcı olur\n• 11:11'i tekrar gördüğünüzde aynı dileği tekrarlayın, evren size cevap verene kadar",
      en: "• Take a paper and write your biggest wish - don't share this with anyone\n• Close your eyes, take a deep breath, and imagine your wish coming true\n• Say 'Thank you, this or better is coming to me'\n• Light a purple or white candle, send your wishes to the universe\n• Write this moment and your feelings in your journal, note the date and time\n• Start carrying an amethyst stone with you, it helps maintain this frequency\n• When you see 11:11 again, repeat the same wish until the universe responds",
    },
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
    numerology: {
      tr: "12:12, 1 ve 2 rakamlarının enerjisini birleştirir. 1 liderlik ve yeni başlangıçlar, 2 ise denge, uyum ve işbirliğidir. Toplamı 6 (1+2+1+2=6) olan bu saat, sevgi, aile ve sorumluluk enerjisini taşır. Hayatınızda dengeyi bulma ve hedeflerinize ulaşmak için işbirliği yapma zamanıdır. Meleklerinizin sizi desteklediğini gösterir.",
      en: "12:12 combines the energies of numbers 1 and 2. 1 is leadership and new beginnings, 2 is balance, harmony, and cooperation. With a sum of 6 (1+2+1+2=6), this hour carries the energy of love, family, and responsibility. It is time to find balance in your life and cooperate to reach your goals. It shows that your angels support you.",
    },
    astrology: {
      tr: "Astrolojik olarak 12:12, Güneş ve Jüpiter etkisindedir. Aslan ve Yay burçlarının enerjisiyle uyumludur. İyimserlik, büyüme ve genişleme enerjisi verir. Şanslı bir saattir. Eğitim, seyahat ve felsefi konular gündeme gelebilir. Ufkunuzu genişletme zamanıdır.",
      en: "Astrologically, 12:12 is under the influence of the Sun and Jupiter. It is compatible with the energies of Leo and Sagittarius. It gives optimism, growth, and expansion energy. It is a lucky hour. Education, travel, and philosophical issues may come up. It is time to broaden your horizons.",
    },
    loveAndRelationships: {
      tr: "Aşkta 12:12, ciddiyet ve bağlılık zamanıdır. Partneriniz sizinle ilgili gelecek planları yapıyor olabilir. Evlilik teklifi veya birlikte yaşama kararı gündeme gelebilir. Bekar iseniz, uzun vadeli bir ilişki yaşayabileceğiniz biriyle tanışabilirsiniz. İlişkinizde dengeyi sağlamak önemlidir.",
      en: "In love, 12:12 is the time for seriousness and commitment. Your partner might be making future plans about you. A marriage proposal or decision to live together may come up. If you are single, you might meet someone with whom you can have a long-term relationship. It is important to maintain balance in your relationship.",
    },
    careerAndMoney: {
      tr: "Kariyerde 12:12, takım çalışması ve ortaklıklar için uygundur. İş arkadaşlarınızla uyum içinde çalışmak size başarı getirecektir. Sorumluluklarınız artabilir, ancak bunların altından kalkacak güce sahipsiniz. Finansal olarak dengeli bir dönemdesiniz.",
      en: "In career, 12:12 is suitable for teamwork and partnerships. Working in harmony with your colleagues will bring you success. Your responsibilities may increase, but you have the strength to handle them. You are in a financially balanced period.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 12:12, düşüncelerinizi kontrol etme uyarısıdır. Pozitif düşünceler pozitif sonuçlar doğurur. Melekleriniz size rehberlik ediyor; işaretleri takip edin. Kalp çakrası ile ilişkilidir; sevgiye odaklanın. Yeşil renk ve yeşim taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 12:12 is a warning to control your thoughts. Positive thoughts bring positive results. Your angels are guiding you; follow the signs. It is related to the heart chakra; focus on love. Green color and jade stone support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Gelecek hedeflerinizi yazın\n• Partnerinizle veya ortağınızla konuşun\n• Doğada vakit geçirin\n• 'Ben dengedeyim ve huzurluyum' olumlamasını yapın\n• Birine teşekkür edin",
      en: "• Write your future goals\n• Talk to your partner or business partner\n• Spend time in nature\n• Affirm 'I am balanced and peaceful'\n• Thank someone",
    },
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
      tr: "Zorluklar bitiyor",
      en: "Hardships are ending",
    },
    meaning: {
      tr: "Yaşadığın sıkıntılı süreç sona eriyor. Artık önün açık, ferah bir döneme giriyorsun.",
      en: "The troubled period you've been going through is ending. Your path is clear now, you're entering a spacious period.",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "16:16, 1 ve 6 rakamlarının enerjisini taşır. 1 yeni başlangıçlar, 6 ise denge ve şifadır. Toplamı 14 (1+6+1+6=14 -> 1+4=5) olan bu saat, değişim ve özgürleşme enerjisiyle bağlantılıdır. 16 sayısı 'Yıkılan Kule' tarot kartıyla ilişkilendirilir; bu, eski yapıların yıkılıp yerine daha sağlamlarının kurulacağını gösterir. Zorlukların ardından gelen aydınlanmayı simgeler.",
      en: "16:16 carries the energy of numbers 1 and 6. 1 is new beginnings, 6 is balance and healing. With a sum of 14 (1+6+1+6=14 -> 1+4=5), this hour is connected to change and liberation energy. The number 16 is associated with the 'Tower' tarot card; this shows that old structures will collapse and stronger ones will be built in their place. It symbolizes the enlightenment that comes after difficulties.",
    },
    astrology: {
      tr: "Astrolojik olarak 16:16, Mars ve Satürn etkisindedir. Koç ve Oğlak burçlarının enerjisiyle uyumludur. Dayanıklılık, sabır ve mücadele gücü verir. Zorlukları aşma kapasiteniz yüksektir. Bu saat, küllerinden yeniden doğma enerjisi taşır.",
      en: "Astrologically, 16:16 is under the influence of Mars and Saturn. It is compatible with the energies of Aries and Capricorn. It gives endurance, patience, and fighting power. Your capacity to overcome difficulties is high. This hour carries the energy of rising from the ashes.",
    },
    loveAndRelationships: {
      tr: "Aşkta 16:16, temizlik ve arınma zamanıdır. İlişkinizde sorunlar varsa, bunları halının altına süpürmek yerine yüzleşmelisiniz. Belki de bitmesi gereken bir ilişki bitecek ve size daha iyisinin kapısını açacaktır. Bekar iseniz, geçmişin yaralarını sarıp yeni bir aşka hazır hale geliyorsunuz.",
      en: "In love, 16:16 is the time for cleansing and purification. If there are problems in your relationship, you must face them instead of sweeping them under the rug. Perhaps a relationship that needs to end will end and open the door to a better one for you. If you are single, you are healing the wounds of the past and becoming ready for a new love.",
    },
    careerAndMoney: {
      tr: "Kariyerde 16:16, yeniden yapılanma zamanıdır. İş yerinde değişiklikler olabilir, pozisyonunuz değişebilir. Başarısızlık gibi görünen olaylar aslında sizi daha iyi bir yere taşıyacak basamaklardır. Finansal olarak temkinli olun, gereksiz risklerden kaçının.",
      en: "In career, 16:16 is the time for restructuring. There may be changes in the workplace, your position may change. Events that seem like failure are actually steps that will carry you to a better place. Financially, be cautious, avoid unnecessary risks.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 16:16, egoyu yıkma çağrısıdır. Gurur ve kibirden arının. Alçakgönüllü olun. Meditasyon yaparak içsel huzuru bulun. Taç çakrası ile ilişkilidir. Mor ve beyaz renkleri, obsidyen taşı bu saatin enerjisini dengeler.",
      en: "Spiritually, 16:16 is a call to destroy the ego. Purify yourself from pride and arrogance. Be humble. Find inner peace by meditating. It is related to the crown chakra. Purple and white colors, obsidian stone balance the energy of this hour.",
    },
    actionSteps: {
      tr: "• Evinizde veya ofisinizde gereksiz eşyaları atın\n• Birine karşı hatanızı kabul edin ve özür dileyin\n• Meditasyon yaparak zihninizi boşaltın\n• 'Ben her zorluğun üstesinden gelirim' olumlamasını yapın\n• Doğada yürüyüş yapın",
      en: "• Throw away unnecessary items in your home or office\n• Admit your mistake to someone and apologize\n• Clear your mind by meditating\n• Affirm 'I overcome every difficulty'\n• Go for a walk in nature",
    },
  },
  {
    time: "17:17",
    title: {
      tr: "Yaratıcılık artıyor",
      en: "Creativity rising",
    },
    meaning: {
      tr: "İlham perileri yanında. Sanatsal veya yaratıcı bir proje için harika bir dönemdesin.",
      en: "Muses are by your side. You are in a great period for an artistic or creative project.",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "17:17, 1 ve 7 rakamlarının enerjisini taşır. 1 liderlik, 7 ise bilgelik ve maneviyattır. Toplamı 16 (1+7+1+7=16 -> 1+6=7) olan bu saat, yine 7 enerjisine döner. Bu, güçlü bir ruhsal koruma ve şans işaretidir. 17 sayısı 'Yıldız' tarot kartıyla ilişkilendirilir; umut, ilham ve kozmik bağlantıyı simgeler. Hayallerinizi gerçekleştirme gücüne sahipsiniz.",
      en: "17:17 carries the energy of numbers 1 and 7. 1 is leadership, 7 is wisdom and spirituality. With a sum of 16 (1+7+1+7=16 -> 1+6=7), this hour returns to the energy of 7. This is a sign of strong spiritual protection and luck. The number 17 is associated with the 'Star' tarot card; it symbolizes hope, inspiration, and cosmic connection. You have the power to make your dreams come true.",
    },
    astrology: {
      tr: "Astrolojik olarak 17:17, Güneş ve Satürn etkisindedir. Aslan ve Oğlak burçlarının enerjisiyle uyumludur. Yaratıcılık ve disiplin bir aradadır. Sanatsal projelerinizi somutlaştırmak için mükemmel bir zamandır. Tanınma ve itibar kazanabilirsiniz.",
      en: "Astrologically, 17:17 is under the influence of the Sun and Saturn. It is compatible with the energies of Leo and Capricorn. Creativity and discipline are together. It is an excellent time to materialize your artistic projects. You can gain recognition and reputation.",
    },
    loveAndRelationships: {
      tr: "Aşkta 17:17, umut ve yenilenme zamanıdır. İlişkinizde sorunlar varsa, bunları aşacak gücü bulacaksınız. Partnerinizle ortak hayaller kurabilirsiniz. Bekar iseniz, hayalinizdeki gibi biriyle tanışma şansınız yüksektir. Bu kişi sanatçı ruhlu veya entelektüel olabilir.",
      en: "In love, 17:17 is the time for hope and renewal. If there are problems in your relationship, you will find the strength to overcome them. You can dream common dreams with your partner. If you are single, your chance of meeting someone like in your dreams is high. This person might be artistic or intellectual.",
    },
    careerAndMoney: {
      tr: "Kariyerde 17:17, parlama zamanıdır. Yeteneklerinizi sergileyin, sahneye çıkın. Yazarlık, oyunculuk, tasarım gibi alanlarda başarı kesindir. Finansal olarak şanslı bir dönemdesiniz; yatırımlarınız değer kazanabilir.",
      en: "In career, 17:17 is the time to shine. Show your talents, get on stage. Success is certain in fields like writing, acting, design. You are in a financially lucky period; your investments may gain value.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 17:17, evrenle bağlantı kurma zamanıdır. Yıldızlara bakın, gökyüzünü izleyin. İlham alın. Üçüncü göz ve taç çakrası ile ilişkilidir. Mavi ve mor renkleri, lapis lazuli taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 17:17 is the time to connect with the universe. Look at the stars, watch the sky. Get inspired. It is related to the third eye and crown chakra. Blue and purple colors, lapis lazuli stone support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Bir sanat eseri yaratın veya müze gezin\n• Gökyüzünü ve yıldızları izleyin\n• Hayallerinizi bir kağıda yazın\n• 'Ben yaratıcıyım ve ilham doluyum' olumlamasını yapın\n• Mavi bir kıyafet giyin",
      en: "• Create an artwork or visit a museum\n• Watch the sky and stars\n• Write your dreams on a paper\n• Affirm 'I am creative and full of inspiration'\n• Wear a blue outfit",
    },
  },
  {
    time: "18:18",
    title: {
      tr: "Bolluk akıyor",
      en: "Abundance flowing",
    },
    meaning: {
      tr: "Maddi konularda şansın dönüyor. Beklediğin para ya da fırsat sana doğru geliyor.",
      en: "Your luck in financial matters is turning. The money or opportunity you've been waiting for is coming to you.",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "18:18, 1 ve 8 rakamlarının enerjisini taşır. 1 liderlik, 8 ise güç ve bolluktur. Toplamı 18 (1+8+1+8=18 -> 1+8=9) olan bu saat, tamamlanma ve bilgelik enerjisiyle bağlantılıdır. 18 sayısı aynı zamanda Ay kartıyla ilişkilendirilir; sezgiler, rüyalar ve bilinçaltı konularını gündeme getirir. Maddi başarı ile ruhsal tatmin arasında denge kurmanız gerektiğini söyler.",
      en: "18:18 carries the energy of numbers 1 and 8. 1 is leadership, 8 is power and abundance. With a sum of 18 (1+8+1+8=18 -> 1+8=9), this hour is connected to completion and wisdom energy. The number 18 is also associated with the Moon card; it brings up intuition, dreams, and subconscious issues. It tells you that you need to establish a balance between material success and spiritual satisfaction.",
    },
    astrology: {
      tr: "Astrolojik olarak 18:18, Ay ve Mars etkisindedir. Yengeç ve Akrep burçlarının enerjisiyle uyumludur. Duygusal derinlik ve mücadele gücü bir aradadır. Sezgileriniz size yol gösterecektir. Rüyalarınızın rehberliğine güvenin.",
      en: "Astrologically, 18:18 is under the influence of the Moon and Mars. It is compatible with the energies of Cancer and Scorpio. Emotional depth and fighting power are together. Your intuition will guide you. Trust the guidance of your dreams.",
    },
    loveAndRelationships: {
      tr: "Aşkta 18:18, duygusal derinleşme zamanıdır. Partnerinizle aranızdaki bağ güçleniyor. Birbirinizi kelimeler olmadan da anlayabilirsiniz. Bekar iseniz, sizi ruhsal olarak tamamlayacak biriyle karşılaşabilirsiniz. Ancak korkularınızın sizi engellemesine izin vermeyin.",
      en: "In love, 18:18 is the time for emotional deepening. The bond between you and your partner is strengthening. You can understand each other without words. If you are single, you might encounter someone who will complete you spiritually. However, do not let your fears stop you.",
    },
    careerAndMoney: {
      tr: "Kariyerde 18:18, finansal başarı ve kazanç müjdesidir. Yatırımlarınızın karşılığını alabilirsiniz. İş hayatında sezgilerinizi kullanarak doğru kararlar verebilirsiniz. Gayrimenkul veya evle ilgili işlerde şanslısınız.",
      en: "In career, 18:18 heralds financial success and gain. You can get the return on your investments. You can make the right decisions in business life by using your intuition. You are lucky in real estate or home-related businesses.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 18:18, bilinçaltı temizliği zamanıdır. Korkularınızla yüzleşin ve onları serbest bırakın. Ay ritüelleri yapmak için uygundur. Üçüncü göz çakrası ile ilişkilidir. Gümüş ve beyaz renkleri, ay taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 18:18 is the time for subconscious cleansing. Face your fears and release them. It is suitable for performing Moon rituals. It is related to the third eye chakra. Silver and white colors, moonstone support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Rüyalarınızı yazın ve analiz edin\n• Birikim yapmaya başlayın\n• Korkularınızı bir kağıda yazıp yakın\n• 'Ben bolluk içindeyim ve güvendeyim' olumlamasını yapın\n• Gümüş bir takı takın",
      en: "• Write and analyze your dreams\n• Start saving\n• Write your fears on a paper and burn it\n• Affirm 'I am in abundance and I am safe'\n• Wear a silver jewelry",
    },
  },
  {
    time: "19:19",
    title: {
      tr: "Sabırlı ol",
      en: "Be patient",
    },
    meaning: {
      tr: "İstediğin şey için biraz daha zamana ihtiyaç var. Acele etme, her şey doğru zamanda olacak.",
      en: "A little more time is needed for what you want. Don't rush, everything will happen at the right time.",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "19:19, 1 ve 9 rakamlarının enerjisini taşır. 1 başlangıç, 9 ise bitiştir. Toplamı 20 (1+9+1+9=20 -> 2+0=2) olan bu saat, sabır, işbirliği ve diplomasi enerjisiyle bağlantılıdır. Bir döngünün sonuna geldiniz ve yenisine başlamak üzeresiniz. Ancak bu geçiş sürecinde sabırlı olmanız ve akışa güvenmeniz gerekiyor.",
      en: "19:19 carries the energy of numbers 1 and 9. 1 is beginning, 9 is ending. With a sum of 20 (1+9+1+9=20 -> 2+0=2), this hour is connected to patience, cooperation, and diplomacy energy. You have come to the end of a cycle and are about to start a new one. However, you need to be patient and trust the flow during this transition process.",
    },
    astrology: {
      tr: "Astrolojik olarak 19:19, Güneş ve Mars etkisindedir. Aslan ve Koç burçlarının enerjisiyle uyumludur. Enerjiniz yüksek olsa da, onu kontrollü kullanmalısınız. Öfke veya sabırsızlık size zarar verebilir. Spor yapmak veya fiziksel aktivite enerjinizi dengelemenize yardımcı olur.",
      en: "Astrologically, 19:19 is under the influence of the Sun and Mars. It is compatible with the energies of Leo and Aries. Even though your energy is high, you must use it in a controlled manner. Anger or impatience can harm you. Doing sports or physical activity helps you balance your energy.",
    },
    loveAndRelationships: {
      tr: "Aşkta 19:19, sabır sınavıdır. İlişkinizde her şey istediğiniz hızda ilerlemeyebilir. Partnerinize zaman tanıyın. Bekar iseniz, doğru kişi doğru zamanda karşınıza çıkacaktır; aceleci davranıp yanlış kararlar vermeyin.",
      en: "In love, 19:19 is a test of patience. Everything in your relationship may not progress at the speed you want. Give your partner time. If you are single, the right person will appear at the right time; do not act hastily and make wrong decisions.",
    },
    careerAndMoney: {
      tr: "Kariyerde 19:19, meyveleri toplama öncesi son aşamadır. Projeleriniz sonuçlanmak üzere. Pes etmeyin, son bir gayretle hedefe ulaşacaksınız. Finansal olarak istikrarlı bir döneme giriyorsunuz.",
      en: "In career, 19:19 is the final stage before harvesting the fruits. Your projects are about to be finalized. Do not give up, you will reach the goal with a final effort. You are entering a financially stable period.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 19:19, evrensel zamanlamaya güvenme dersidir. Her şeyin bir zamanı vardır. Meditasyon yaparak sabrınızı geliştirin. Solar pleksus çakrası ile ilişkilidir. Sarı ve altın renkleri, sitrin taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 19:19 is a lesson in trusting universal timing. Everything has a time. Develop your patience by meditating. It is related to the solar plexus chakra. Yellow and gold colors, citrine stone support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Sabır gerektiren bir aktivite yapın (puzzle, örgü vb.)\n• Spor yapın veya yürüyüşe çıkın\n• Güneşin doğuşunu veya batışını izleyin\n• 'Ben evrensel zamanlamaya güveniyorum' olumlamasını yapın\n• Altın rengi bir aksesuar takın",
      en: "• Do an activity that requires patience (puzzle, knitting, etc.)\n• Do sports or go for a walk\n• Watch the sunrise or sunset\n• Affirm 'I trust universal timing'\n• Wear a gold accessory",
    },
  },
  {
    time: "20:20",
    title: {
      tr: "Acele etme",
      en: "Don't rush",
    },
    meaning: {
      tr: "Karar vermeden önce iyice düşün. Detayları gözden kaçırma, sakin kal.",
      en: "Think carefully before making a decision. Don't overlook details, stay calm.",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "20:20, 2 ve 0 rakamlarının enerjisini taşır. 2 işbirliği ve denge, 0 ise potansiyeldir. Toplamı 4 (2+0+2+0=4) olan bu saat, düzen, pratiklik ve sabır enerjisiyle bağlantılıdır. Aceleci davranmamanız, adımlarınızı sağlam atmanız gerektiğini söyler. Ayrıntılara dikkat etmek size kazandıracaktır.",
      en: "20:20 carries the energy of numbers 2 and 0. 2 is cooperation and balance, 0 is potential. With a sum of 4 (2+0+2+0=4), this hour is connected to order, practicality, and patience energy. It tells you not to act hastily and to take solid steps. Paying attention to details will bring you gain.",
    },
    astrology: {
      tr: "Astrolojik olarak 20:20, Ay ve Satürn etkisindedir. Yengeç ve Oğlak burçlarının enerjisiyle uyumludur. Duygusal güvenlik ve maddi istikrar arayışı bir aradadır. Sorumluluklarınızın bilincinde olmalısınız. Geçmiş tecrübelerinizden ders çıkarın.",
      en: "Astrologically, 20:20 is under the influence of the Moon and Saturn. It is compatible with the energies of Cancer and Capricorn. The search for emotional security and material stability are together. You must be aware of your responsibilities. Learn from your past experiences.",
    },
    loveAndRelationships: {
      tr: "Aşkta 20:20, dürüstlük ve sadakat zamanıdır. Partnerinize karşı açık olun. Gizli saklı işler yapmayın. İlişkinizin temellerini sağlamlaştırmak için konuşun. Bekar iseniz, size güven verecek, ciddi düşünen biriyle tanışabilirsiniz.",
      en: "In love, 20:20 is the time for honesty and loyalty. Be open to your partner. Do not do things in secret. Talk to strengthen the foundations of your relationship. If you are single, you might meet someone serious who will give you confidence.",
    },
    careerAndMoney: {
      tr: "Kariyerde 20:20, analiz ve planlama zamanıdır. Bir projeye başlamadan önce tüm riskleri hesaplayın. Acele karar vermeyin. Finansal olarak bütçenizi kontrol altında tutun. Tasarruf yapmak için iyi bir dönemdir.",
      en: "In career, 20:20 is the time for analysis and planning. Calculate all risks before starting a project. Do not make hasty decisions. Financially, keep your budget under control. It is a good period to save.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 20:20, içsel dengeyi bulma çağrısıdır. Duygularınızla mantığınızı dengeleyin. Meditasyon yaparak zihninizi sakinleştirin. Üçüncü göz çakrası ile ilişkilidir. İndigo ve gümüş renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 20:20 is a call to find inner balance. Balance your emotions with your logic. Calm your mind by meditating. It is related to the third eye chakra. Indigo and silver colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Bir yapılacaklar listesi hazırlayın\n• Bütçe planlaması yapın\n• Sessiz bir ortamda kitap okuyun\n• 'Ben sakin ve dengeliyim' olumlamasını yapın\n• Gümüş bir obje bulundurun",
      en: "• Prepare a to-do list\n• Make a budget plan\n• Read a book in a quiet environment\n• Affirm 'I am calm and balanced'\n• Keep a silver object",
    },
  },
  {
    time: "21:21",
    title: {
      tr: "Başarı seninle",
      en: "Success is with you",
    },
    meaning: {
      tr: "Büyük bir başarıya imza atmak üzeresin. Kendine güven ve yolunda ilerle.",
      en: "You are about to achieve great success. Believe in yourself and move forward on your path.",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "21:21, 2 ve 1 rakamlarının enerjisini taşır. 21 sayısı 'Dünya' tarot kartıyla ilişkilendirilir; bu, tamamlanma, başarı ve zafer demektir. Toplamı 6 (2+1+2+1=6) olan bu saat, uyum ve denge enerjisiyle de bağlantılıdır. Uzun süredir uğraştığınız bir işin meyvesini almak üzeresiniz. Evren sizi alkışlıyor.",
      en: "21:21 carries the energy of numbers 2 and 1. The number 21 is associated with the 'World' tarot card; this means completion, success, and victory. With a sum of 6 (2+1+2+1=6), this hour is also connected to harmony and balance energy. You are about to reap the fruits of a work you have been dealing with for a long time. The universe is applauding you.",
    },
    astrology: {
      tr: "Astrolojik olarak 21:21, Jüpiter ve Güneş etkisindedir. Yay ve Aslan burçlarının enerjisiyle uyumludur. Şans, başarı ve genişleme enerjisi çok yüksektir. Tanınma, ödül alma veya terfi etme olasılığınız yüksektir. Kendinize olan güveniniz zirve yapacak.",
      en: "Astrologically, 21:21 is under the influence of Jupiter and the Sun. It is compatible with the energies of Sagittarius and Leo. Luck, success, and expansion energy are very high. Your probability of being recognized, receiving an award, or being promoted is high. Your self-confidence will peak.",
    },
    loveAndRelationships: {
      tr: "Aşkta 21:21, mutluluk ve tamamlanma zamanıdır. İlişkinizde bir üst seviyeye geçebilirsiniz (evlilik, çocuk vb.). Partnerinizle uyumunuz mükemmeldir. Bekar iseniz, hayatınızın aşkıyla karşılaşabilir ve çok mutlu bir ilişkiye başlayabilirsiniz.",
      en: "In love, 21:21 is the time for happiness and completion. You can move to a higher level in your relationship (marriage, children, etc.). Your harmony with your partner is perfect. If you are single, you might meet the love of your life and start a very happy relationship.",
    },
    careerAndMoney: {
      tr: "Kariyerde 21:21, zafer zamanıdır. Hedeflerinize ulaştınız veya ulaşmak üzeresiniz. Başarınız takdir edilecek. Uluslararası işler veya seyahatler gündeme gelebilir. Finansal olarak bolluk içindesiniz.",
      en: "In career, 21:21 is the time for victory. You have reached or are about to reach your goals. Your success will be appreciated. International business or travel may come up. You are in financial abundance.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 21:21, bütünlük hissidir. Kendinizi evrenle bir hissedersiniz. Şükran duymak için harika bir zamandır. Taç çakrası ile ilişkilidir. Mor ve altın renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 21:21 is the feeling of wholeness. You feel one with the universe. It is a great time to feel gratitude. It is related to the crown chakra. Purple and gold colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Başarılarınızı kutlayın\n• Şükran günlüğü tutun\n• Kendinize bir ödül verin\n• 'Ben başarılıyım ve tamamlanmış hissediyorum' olumlamasını yapın\n• Mor bir kıyafet giyin",
      en: "• Celebrate your successes\n• Keep a gratitude journal\n• Give yourself a reward\n• Affirm 'I am successful and I feel complete'\n• Wear a purple outfit",
    },
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
    numerology: {
      tr: "22:22, 22 usta sayısının iki kez tekrarlandığı son derece güçlü bir kombinasyondur. 22 sayısı 'usta inşaatçı' olarak bilinir ve büyük rüyaları gerçeğe dönüştürme gücünü taşır. Bu saat, manifestasyonun en üst seviyede olduğu anlardandır. Toplamı 8 (2+2+2+2=8) olan bu kombinasyon, sonsuzluk, bolluk, denge ve karmik adaletin enerjisini taşır. 8 rakamının yan yatmış hali sonsuzluk işareti olup, aynı zamanda veren ve alan dengesini simgeler. 22:22 görmek, hayatınızda büyük dönüşümlerin yaşanacağını ve özellikle ruhsal bir bağın güçleneceğini işaret eder. Ruh eşi, ikiz alev ya da can dostu gibi derin bağlantılar için bu saat çok anlamlıdır.",
      en: "22:22 is an extremely powerful combination where the master number 22 is repeated twice. The number 22 is known as the 'master builder' and carries the power to turn big dreams into reality. This hour is one of the moments when manifestation is at its highest level. This combination with a sum of 8 (2+2+2+2=8) carries the energy of infinity, abundance, balance, and karmic justice. The number 8 on its side is the infinity symbol and also represents the balance of giving and receiving. Seeing 22:22 indicates that major transformations will occur in your life and especially that a spiritual connection will strengthen. This hour is very meaningful for deep connections like soulmates, twin flames, or kindred spirits.",
    },
    astrology: {
      tr: "Astrolojik olarak 22:22, Venüs ve Neptün'ün enerjilerini bir araya getirir. Venüs aşkı, güzelliği ve uyumu; Neptün ise ruhsal bağları, rüyaları ve koşulsuz sevgiyi temsil eder. Bu saat, Boğa, Terazi ve Balık burçlarının titreşimleriyle uyum içindedir. Ay'ın 7. evde (ilişkiler evi) olduğu zamanlarda 22:22'yi görmek, ruh eşinizle karşılaşma ihtimalini artırır. Bu saat aynı zamanda gecelerin en derin anlarından biridir - rüya dünyasına geçiş başlamıştır. Bu saatte gördüğünüz rüyalar, gelecekteki aşkınız ya da hayat yolculuğunuz hakkında ipuçları taşıyabilir. Jüpiter'in olumlu açılarında 22:22 görmek, kadersel bir buluşmanın yakın olduğu anlamına gelir.",
      en: "Astrologically, 22:22 brings together the energies of Venus and Neptune. Venus represents love, beauty, and harmony; while Neptune represents spiritual bonds, dreams, and unconditional love. This hour is in harmony with the vibrations of Taurus, Libra, and Pisces. Seeing 22:22 when the Moon is in the 7th house (house of relationships) increases the likelihood of meeting your soulmate. This hour is also one of the deepest moments of the night - the transition to the dream world has begun. Dreams you have at this hour can carry clues about your future love or life journey. Seeing 22:22 during positive aspects of Jupiter means a destined meeting is near.",
    },
    loveAndRelationships: {
      tr: "22:22, aşk hayatınız için en büyülü ve anlamlı saatlerden biridir. Eğer bekar iseniz ve bu saati sıkça görüyorsanız, ruh eşinizle karşılaşma ihtimaliniz çok yüksektir. Evren sizi birbirinize yaklaştırıyor olabilir. Tanışacağınız kişi, sadece bir sevgili değil, ruhunuzla derin bir bağ kuracağınız biri olacak. Bir ilişkideyseniz, partnerinizle aranızdaki bağın ruhsal bir boyut kazandığını görebilirsiniz. Belki de bu kişi sizin ruh eşinizdir ve bu bağı daha da derinleştirme zamanı gelmiştir. 22:22 aynı zamanda geçmiş hayatlardan gelen bağlantıları da işaret edebilir. Birini ilk gördüğünüzde tanıdık geliyorsa, bu bir tesadüf değildir. Kalbinize güvenin ve bu enerjiyi kucaklayın.",
      en: "22:22 is one of the most magical and meaningful hours for your love life. If you're single and frequently see this hour, the likelihood of meeting your soulmate is very high. The universe might be bringing you closer together. The person you'll meet will not just be a lover, but someone with whom you'll form a deep soul connection. If you're in a relationship, you might see that the bond with your partner is gaining a spiritual dimension. Perhaps this person is your soulmate and it's time to deepen this connection even further. 22:22 can also indicate connections from past lives. If someone feels familiar when you first see them, it's not a coincidence. Trust your heart and embrace this energy.",
    },
    careerAndMoney: {
      tr: "Kariyer açısından 22:22, büyük projelerin hayata geçirilebileceği bir dönemin habercisidir. İş ortaklıkları, özellikle ruhsal ve değer olarak uyumlu olduğunuz kişilerle kuracağınız ortaklıklar, bu dönemde çok başarılı olabilir. Finansal bolluk yolda olabilir, ancak bu bolluk sadece para değil aynı zamanda tatmin ve anlam dolu bir kariyeri de içerir. Yaratıcı işlerle, sanatla ya da insanlara değer katan hizmetlerle uğraşıyorsanız, bu saat sizin için çok olumludur. Kendinizi ifade etme, yeteneklerinizi gösterme ve başkalarına ilham verme fırsatları kapınızdadır. Büyük düşünün, çünkü 22:22 büyük hayalleri gerçeğe dönüştürme enerjisidir.",
      en: "Career-wise, 22:22 heralds a period when big projects can be realized. Business partnerships, especially those with people you're spiritually and value-aligned with, can be very successful during this period. Financial abundance may be on its way, but this abundance includes not only money but also a fulfilling and meaningful career. If you're involved in creative work, art, or services that add value to people, this hour is very positive for you. Opportunities to express yourself, showcase your talents, and inspire others are at your door. Think big, because 22:22 is the energy of turning great dreams into reality.",
    },
    spiritualGuidance: {
      tr: "22:22, ruhsal gelişiminizin zirve noktalarından birini işaret eder. Bu saat, yüksek bilinçle tam bir uyum içinde olduğunuzu gösterir. Meditasyon, yoga, enerji çalışmaları ya da ruhsal pratikler için en uygun saattir. Gül kuarsi, rodonit ya da pembe turmalin gibi taşlar bu frekansta kalp çakranızı açar ve güçlendirir. Bu saatte aşk meleği Chamuel veya ruh eşi rehberliği için dua edebilirsiniz. Pembe ve gümüş renkleri bu saatin renkleridir. Pembe bir mum yakıp, 'Evren beni ruh eşimle buluşturuyor' gibi bir olumlama yapabilirsiniz. Gece yatmadan önce 22:22'yi görürseniz, bir dilek tutun ve sabah uyandığınızda gördüğünüz ilk rüyayı not edin - bu rüya size mesajlar taşıyor olabilir.",
      en: "22:22 marks one of the peak points of your spiritual development. This hour shows you're in perfect harmony with higher consciousness. It's the most suitable hour for meditation, yoga, energy work, or spiritual practices. Stones like rose quartz, rhodonite, or pink tourmaline open and strengthen your heart chakra at this frequency. At this hour you can pray to the love angel Chamuel or for soulmate guidance. Pink and silver are the colors of this hour. You can light a pink candle and make an affirmation like 'The universe is bringing me together with my soulmate.' If you see 22:22 before going to bed at night, make a wish and note the first dream you have when you wake up in the morning - this dream might carry messages for you.",
    },
    actionSteps: {
      tr: "• Kalbinizi açın ve 'Ben ruh eşimle buluşmaya hazırım' diyin\n• Pembe bir gül kuarsi taşı edinin ve kalp çakranızın üzerinde tutun\n• Sevgi dolu bir enerji meditasyonu yapın, kendinizi sevgiyle doldurun\n• İdeal partnerinizin özelliklerini bir listede yazın, detaylı olun\n• Geçmişten gelen kırgınlıkları bırakın, affetmeyi seçin\n• Sosyal ortamlara çıkın, yeni insanlarla tanışın - kader sizi bekliyor olabilir\n• Günlüğünüze 'Bugün 22:22 gördüm' yazın ve o anki hislerinizi kaydedin",
      en: "• Open your heart and say 'I am ready to meet my soulmate'\n• Get a pink rose quartz stone and hold it over your heart chakra\n• Do a loving energy meditation, fill yourself with love\n• Write a list of your ideal partner's qualities, be detailed\n• Let go of past hurts, choose to forgive\n• Go to social settings, meet new people - fate might be waiting for you\n• Write in your journal 'I saw 22:22 today' and record your feelings at that moment",
    },
  },
  {
    time: "23:23",
    title: {
      tr: "İletişim önemli",
      en: "Communication is key",
    },
    meaning: {
      tr: "Partnerinle ya da yakınlarınla konuşman gereken konular var. İletişim kanallarını açık tut.",
      en: "There are issues you need to discuss with your partner or loved ones. Keep communication channels open.",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "23:23, 2 ve 3 rakamlarının enerjisini taşır. 2 işbirliği, 3 ise iletişimdir. Toplamı 10 (2+3+2+3=10 -> 1+0=1) olan bu saat, yeni başlangıçlar ve liderlik enerjisiyle bağlantılıdır. İletişim becerilerinizi kullanarak insanları etkileme gücüne sahipsiniz. Sosyal çevrenizde popülerliğiniz artabilir.",
      en: "23:23 carries the energy of numbers 2 and 3. 2 is cooperation, 3 is communication. With a sum of 10 (2+3+2+3=10 -> 1+0=1), this hour is connected to new beginnings and leadership energy. You have the power to influence people using your communication skills. Your popularity in your social circle may increase.",
    },
    astrology: {
      tr: "Astrolojik olarak 23:23, Merkür ve Jüpiter etkisindedir. İkizler ve Yay burçlarının enerjisiyle uyumludur. Hareketli, neşeli ve konuşkan bir enerjidir. Seyahatler, eğitimler ve sosyal etkinlikler için uygundur. Esnek olmanız gereken durumlar olabilir.",
      en: "Astrologically, 23:23 is under the influence of Mercury and Jupiter. It is compatible with the energies of Gemini and Sagittarius. It is an active, cheerful, and talkative energy. It is suitable for travels, trainings, and social events. There may be situations where you need to be flexible.",
    },
    loveAndRelationships: {
      tr: "Aşkta 23:23, diyalog zamanıdır. Partnerinizle her şeyi konuşabilir, sorunları çözebilirsiniz. Birlikte eğlenceli vakit geçirmek ilişkinizi güçlendirecektir. Bekar iseniz, sosyal ortamlarda tanışacağınız biriyle güzel bir iletişim kurabilirsiniz.",
      en: "In love, 23:23 is the time for dialogue. You can talk about everything with your partner and solve problems. Having fun together will strengthen your relationship. If you are single, you can establish good communication with someone you meet in social environments.",
    },
    careerAndMoney: {
      tr: "Kariyerde 23:23, ağ kurma (networking) zamanıdır. Yeni insanlarla tanışmak size iş kapıları açacaktır. Pazarlama, satış ve medya alanlarında başarı getirir. Finansal olarak, iletişim becerileriniz sayesinde kazanç elde edebilirsiniz.",
      en: "In career, 23:23 is the time for networking. Meeting new people will open business doors for you. It brings success in marketing, sales, and media fields. Financially, you can earn income thanks to your communication skills.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 23:23, esneklik dersidir. Hayatın akışına uyum sağlayın. Direnmeyin. Boğaz çakrası ile ilişkilidir. Mavi ve turkuaz renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 23:23 is a lesson in flexibility. Adapt to the flow of life. Do not resist. It is related to the throat chakra. Blue and turquoise colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Sosyal bir etkinliğe katılın\n• Eski bir arkadaşınızı arayın\n• Mavi bir fular veya kravat takın\n• 'Ben kendimi kolaylıkla ifade ediyorum' olumlamasını yapın\n• Seyahat planı yapın",
      en: "• Join a social event\n• Call an old friend\n• Wear a blue scarf or tie\n• Affirm 'I express myself easily'\n• Make a travel plan",
    },
  },
  {
    time: "01:10",
    title: {
      tr: "Geçmiş seni özlüyor",
      en: "The past misses you",
    },
    meaning: {
      tr: "Eski bir tanıdık ya da aşk seni hâlâ aklında tutuyor olabilir. Belki de bir kapanış ya da yeniden doğuş zamanı gelmiştir.",
      en: "An old acquaintance or love might still be keeping you in mind. Perhaps it's time for closure or rebirth.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "01:10, 1 ve 0 rakamlarının enerjisini taşır. 1 bireysellik, 0 ise sonsuzluktur. Toplamı 2 (1+1=2) olan bu saat, sezgi, duyarlılık ve ortaklık enerjisiyle bağlantılıdır. Ters ayna saati olması, bilinçaltı mesajlarına işaret eder. İç sesinizi dinlemeniz gereken bir zamandasınız.",
      en: "01:10 carries the energy of numbers 1 and 0. 1 is individuality, 0 is infinity. With a sum of 2 (1+1=2), this hour is connected to intuition, sensitivity, and partnership energy. Being a reverse mirror hour points to subconscious messages. You are in a time where you need to listen to your inner voice.",
    },
    astrology: {
      tr: "Astrolojik olarak 01:10, Ay ve Venüs etkisindedir. Yengeç ve Terazi burçlarının enerjisiyle uyumludur. Duygusal hassasiyet ve estetik anlayışı ön plandadır. Sanatsal faaliyetler ve romantik jestler için uygundur.",
      en: "Astrologically, 01:10 is under the influence of the Moon and Venus. It is compatible with the energies of Cancer and Libra. Emotional sensitivity and aesthetic understanding are at the forefront. It is suitable for artistic activities and romantic gestures.",
    },
    loveAndRelationships: {
      tr: "Aşkta 01:10, gizli hayranlık ve platonik aşkı simgeler. Birisi size karşı yoğun duygular besliyor olabilir. Mevcut ilişkinizde ise daha fazla şefkat ve ilgi göstermeniz gerekebilir. Duygularınızı saklamayın.",
      en: "In love, 01:10 symbolizes secret admiration and platonic love. Someone might be harboring intense feelings for you. In your current relationship, you might need to show more compassion and attention. Do not hide your feelings.",
    },
    careerAndMoney: {
      tr: "Kariyerde 01:10, işbirliği ve diplomasi zamanıdır. Tek başınıza hareket etmek yerine ekip çalışmasına önem verin. İş arkadaşlarınızla ilişkilerinizi güçlendirin. Finansal olarak dengeli bir dönemdesiniz.",
      en: "In career, 01:10 is the time for cooperation and diplomacy. Instead of acting alone, give importance to teamwork. Strengthen your relationships with your colleagues. You are in a financially balanced period.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 01:10, sezgisel uyanış zamanıdır. Rüyalarınız ve hisleriniz size rehberlik ediyor. Sakral çakra ile ilişkilidir. Turuncu ve gümüş renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 01:10 is the time for intuitive awakening. Your dreams and feelings are guiding you. It is related to the sacral chakra. Orange and silver colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Eski bir arkadaşınızı arayın\n• Duygularınızı ifade eden bir mektup yazın (göndermek zorunda değilsiniz)\n• Turuncu bir obje bulundurun\n• 'Ben duygularımla barışığım' olumlamasını yapın\n• Sanatsal bir aktivite yapın",
      en: "• Call an old friend\n• Write a letter expressing your feelings (you don't have to send it)\n• Keep an orange object\n• Affirm 'I am at peace with my emotions'\n• Do an artistic activity",
    },
  },
  {
    time: "02:20",
    title: {
      tr: "İyi haberler yolda",
      en: "Good news on the way",
    },
    meaning: {
      tr: "Beklediğin o güzel haber çok yakında gelecek. Umudunu kaybetme.",
      en: "That good news you've been waiting for is coming very soon. Don't lose hope.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "02:20, 2 ve 0 rakamlarının enerjisini taşır. 2 denge, 0 ise potansiyeldir. Toplamı 4 (2+2=4) olan bu saat, sabır, düzen ve istikrar enerjisiyle bağlantılıdır. Ters ayna saati olarak, sabrınızın ödüllendirileceğini müjdeler. Emeklerinizin karşılığını alacaksınız.",
      en: "02:20 carries the energy of numbers 2 and 0. 2 is balance, 0 is potential. With a sum of 4 (2+2=4), this hour is connected to patience, order, and stability energy. As a reverse mirror hour, it heralds that your patience will be rewarded. You will get the return on your efforts.",
    },
    astrology: {
      tr: "Astrolojik olarak 02:20, Satürn ve Venüs etkisindedir. Oğlak ve Boğa burçlarının enerjisiyle uyumludur. Kalıcı değerler yaratma ve maddi güvenlik konuları ön plandadır. Disiplinli çalışmanızın meyvelerini toplayacaksınız.",
      en: "Astrologically, 02:20 is under the influence of Saturn and Venus. It is compatible with the energies of Capricorn and Taurus. Creating lasting values and material security issues are at the forefront. You will reap the fruits of your disciplined work.",
    },
    loveAndRelationships: {
      tr: "Aşkta 02:20, sadakat ve güven zamanıdır. İlişkiniz sağlam temellere oturuyor. Partnerinizle geleceğe dair planlar yapabilirsiniz. Bekar iseniz, ciddi ve güvenilir biriyle tanışabilirsiniz.",
      en: "In love, 02:20 is the time for loyalty and trust. Your relationship is settling on solid foundations. You can make plans for the future with your partner. If you are single, you might meet someone serious and reliable.",
    },
    careerAndMoney: {
      tr: "Kariyerde 02:20, terfi veya zam haberi getirebilir. İşinizdeki başarınız üstleriniz tarafından fark ediliyor. Finansal olarak yatırım yapmak için uygun bir zamandır. Gayrimenkul konularında şanslısınız.",
      en: "In career, 02:20 might bring promotion or raise news. Your success in your job is being noticed by your superiors. It is a suitable time to invest financially. You are lucky in real estate matters.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 02:20, topraklanma zamanıdır. Doğada vakit geçirin. Kök çakrası ile ilişkilidir. Kahverengi ve yeşil renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 02:20 is the time for grounding. Spend time in nature. It is related to the root chakra. Brown and green colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Doğada yürüyüş yapın\n• Evinizde düzenleme yapın\n• Yatırım planlarınızı gözden geçirin\n• 'Ben güvendeyim ve destekleniyorum' olumlamasını yapın\n• Yeşil bir bitki ekin veya bakın",
      en: "• Go for a walk in nature\n• Organize your home\n• Review your investment plans\n• Affirm 'I am safe and supported'\n• Plant or care for a green plant",
    },
  },
  {
    time: "03:30",
    title: {
      tr: "Arzuların belirginleşiyor",
      en: "Desires becoming clear",
    },
    meaning: {
      tr: "Ne istediğini artık daha net biliyorsun. Hedeflerine odaklan ve harekete geç.",
      en: "You now know more clearly what you want. Focus on your goals and take action.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "03:30, 3 ve 0 rakamlarının enerjisini taşır. 3 yaratıcılık, 0 ise sonsuzluktur. Toplamı 6 (3+3=6) olan bu saat, aile, sevgi ve sorumluluk enerjisiyle bağlantılıdır. Ters ayna saati olarak, içsel arzularınızın ve yeteneklerinizin farkına varmanızı sağlar. Kendinizi ifade etme zamanı.",
      en: "03:30 carries the energy of numbers 3 and 0. 3 is creativity, 0 is infinity. With a sum of 6 (3+3=6), this hour is connected to family, love, and responsibility energy. As a reverse mirror hour, it allows you to realize your inner desires and talents. It is time to express yourself.",
    },
    astrology: {
      tr: "Astrolojik olarak 03:30, Júpiter ve Venüs etkisindedir. Yay ve Terazi burçlarının enerjisiyle uyumludur. Sosyal ilişkiler, sanat ve adalet konuları ön plandadır. Çevrenizdeki insanlara yardım etme isteğiniz artabilir.",
      en: "Astrologically, 03:30 is under the influence of Jupiter and Venus. It is compatible with the energies of Sagittarius and Libra. Social relationships, art, and justice issues are at the forefront. Your desire to help people around you may increase.",
    },
    loveAndRelationships: {
      tr: "Aşkta 03:30, uyum ve denge arayışıdır. Partnerinizle keyifli vakit geçirebilir, sanatsal etkinliklere katılabilirsiniz. Bekar iseniz, sosyal çevrenizden biriyle yakınlaşabilirsiniz. Çekiciliğiniz artıyor.",
      en: "In love, 03:30 is the search for harmony and balance. You can have a pleasant time with your partner, participate in artistic events. If you are single, you might get closer to someone from your social circle. Your attractiveness is increasing.",
    },
    careerAndMoney: {
      tr: "Kariyerde 03:30, yaratıcı projeler için harika bir zamandır. Fikirlerinizi paylaşmaktan çekinmeyin. İletişim ve halkla ilişkiler alanlarında başarı vaat eder. Finansal olarak, hobilerinizden kazanç elde edebilirsiniz.",
      en: "In career, 03:30 is a great time for creative projects. Do not hesitate to share your ideas. It promises success in communication and public relations fields. Financially, you can earn income from your hobbies.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 03:30, kalp çakrasını açma zamanıdır. Sevgi enerjisini yayın. Affedici olun. Pembe ve yeşil renkleri, pembe kuvars taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 03:30 is the time to open the heart chakra. Radiate love energy. Be forgiving. Pink and green colors, rose quartz stone support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Yaratıcı bir şeyler yapın (resim, müzik, yazı)\n• Sevdiklerinize vakit ayırın\n• Kendinize bakım yapın\n• 'Ben sevgiyim ve yaratıcılığım akıyor' olumlamasını yapın\n• Pembe bir kıyafet giyin",
      en: "• Do something creative (painting, music, writing)\n• Spend time with your loved ones\n• Take care of yourself\n• Affirm 'I am love and my creativity is flowing'\n• Wear a pink outfit",
    },
  },
  {
    time: "04:40",
    title: {
      tr: "Güç sende",
      en: "Power is yours",
    },
    meaning: {
      tr: "Kendi gücünün farkına var. Zorlukların üstesinden gelebilecek kapasiteye sahipsin.",
      en: "Realize your own power. You have the capacity to overcome difficulties.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "04:40, 4 ve 0 rakamlarının enerjisini taşır. 4 düzen, 0 ise potansiyeldir. Toplamı 8 (4+4=8) olan bu saat, güç, otorite ve maddi başarı enerjisiyle bağlantılıdır. Ters ayna saati olarak, içsel gücünüzü keşfetmenizi ve liderlik özelliklerinizi ortaya koymanızı söyler.",
      en: "04:40 carries the energy of numbers 4 and 0. 4 is order, 0 is potential. With a sum of 8 (4+4=8), this hour is connected to power, authority, and material success energy. As a reverse mirror hour, it tells you to discover your inner power and reveal your leadership qualities.",
    },
    astrology: {
      tr: "Astrolojik olarak 04:40, Satürn ve Mars etkisindedir. Oğlak ve Koç burçlarının enerjisiyle uyumludur. Hırs, kararlılık ve disiplin ön plandadır. Hedeflerinize ulaşmak için gereken enerjiye sahipsiniz.",
      en: "Astrologically, 04:40 is under the influence of Saturn and Mars. It is compatible with the energies of Capricorn and Aries. Ambition, determination, and discipline are at the forefront. You have the energy needed to reach your goals.",
    },
    loveAndRelationships: {
      tr: "Aşkta 04:40, sorumluluk alma zamanıdır. İlişkiniz için mücadele etmeniz gerekebilir. Partnerinize destek olun. Bekar iseniz, güçlü ve karizmatik biriyle tanışabilirsiniz.",
      en: "In love, 04:40 is the time to take responsibility. You might need to fight for your relationship. Support your partner. If you are single, you might meet someone strong and charismatic.",
    },
    careerAndMoney: {
      tr: "Kariyerde 04:40, yükseliş zamanıdır. Yönetici pozisyonuna gelebilir veya kendi işinizi kurabilirsiniz. Çok çalışmanızın karşılığını alacaksınız. Finansal olarak güçleniyorsunuz.",
      en: "In career, 04:40 is the time for rise. You can come to a manager position or start your own business. You will get the return on your hard work. You are getting stronger financially.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 04:40, özgüven geliştirme zamanıdır. Kendinize inanın. Solar pleksus çakrası ile ilişkilidir. Sarı ve altın renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 04:40 is the time to develop self-confidence. Believe in yourself. It is related to the solar plexus chakra. Yellow and gold colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Hedeflerinizi belirleyin ve plan yapın\n• Liderlik özelliklerinizi geliştirin\n• Spor yaparak gücünüzü artırın\n• 'Ben güçlüyüm ve başarabilirim' olumlamasını yapın\n• Altın rengi bir aksesuar takın",
      en: "• Set your goals and make a plan\n• Develop your leadership qualities\n• Increase your strength by doing sports\n• Affirm 'I am strong and I can succeed'\n• Wear a gold accessory",
    },
  },
  {
    time: "05:50",
    title: {
      tr: "Sürpriz gelişme",
      en: "Surprise development",
    },
    meaning: {
      tr: "Hiç beklemediğin bir anda güzel bir sürprizle karşılaşabilirsin. Hazırlıklı ol.",
      en: "You might encounter a nice surprise when you least expect it. Be prepared.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "05:50, 5 ve 0 rakamlarının enerjisini taşır. 5 değişim, 0 ise sonsuzluktur. Toplamı 10 (5+5=10 -> 1+0=1) olan bu saat, yeni başlangıçlar ve macera enerjisiyle bağlantılıdır. Ters ayna saati olarak, hayatınızda ani ve olumlu değişikliklerin olacağını müjdeler. Rutinden çıkma zamanı.",
      en: "05:50 carries the energy of numbers 5 and 0. 5 is change, 0 is infinity. With a sum of 10 (5+5=10 -> 1+0=1), this hour is connected to new beginnings and adventure energy. As a reverse mirror hour, it heralds that sudden and positive changes will happen in your life. It is time to get out of the routine.",
    },
    astrology: {
      tr: "Astrolojik olarak 05:50, Merkür ve Uranüs etkisindedir. İkizler ve Kova burçlarının enerjisiyle uyumludur. Özgürlük, yenilik ve iletişim konuları ön plandadır. Sıradışı fikirlerinizle dikkat çekebilirsiniz.",
      en: "Astrologically, 05:50 is under the influence of Mercury and Uranus. It is compatible with the energies of Gemini and Aquarius. Freedom, innovation, and communication issues are at the forefront. You can attract attention with your unusual ideas.",
    },
    loveAndRelationships: {
      tr: "Aşkta 05:50, heyecan ve yenilik zamanıdır. İlişkinize renk katacak sürprizler yapın. Bekar iseniz, sıra dışı bir ortamda ilginç biriyle tanışabilirsiniz. Aşk hayatınız hareketleniyor.",
      en: "In love, 05:50 is the time for excitement and novelty. Make surprises that will add color to your relationship. If you are single, you might meet someone interesting in an unusual environment. Your love life is getting active.",
    },
    careerAndMoney: {
      tr: "Kariyerde 05:50, fırsatlar zamanıdır. Yeni bir iş teklifi alabilir veya farklı bir sektöre geçiş yapabilirsiniz. Değişime açık olun. Finansal olarak beklenmedik kazançlar olabilir.",
      en: "In career, 05:50 is the time for opportunities. You might receive a new job offer or switch to a different sector. Be open to change. Financially, there may be unexpected gains.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 05:50, özgürleşme zamanıdır. Sizi kısıtlayan inançlardan kurtulun. Boğaz çakrası ile ilişkilidir. Mavi ve turkuaz renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 05:50 is the time for liberation. Get rid of beliefs that restrict you. It is related to the throat chakra. Blue and turquoise colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Rutininizi değiştirin, farklı bir yoldan gidin\n• Yeni bir hobi deneyin\n• Spontane bir geziye çıkın\n• 'Ben değişime açığım ve hayatı seviyorum' olumlamasını yapın\n• Turkuaz bir takı takın",
      en: "• Change your routine, go a different way\n• Try a new hobby\n• Go on a spontaneous trip\n• Affirm 'I am open to change and I love life'\n• Wear a turquoise jewelry",
    },
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
      tr: "Olumsuz düşünceler",
      en: "Negative thoughts",
    },
    meaning: {
      tr: "Zihnini kurcalayan kötü düşüncelerden arınmalısın. Olaylara daha pozitif bakmayı dene.",
      en: "You should cleanse yourself of bad thoughts troubling your mind. Try to look at things more positively.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "13:31, 1 ve 3 rakamlarının enerjisini taşır. Toplamı 8 (1+3+3+1=8) olan bu saat, karma, güç ve dönüşüm enerjisiyle bağlantılıdır. Ters ayna olması, zihinsel kalıplarınızın sizi engellediğini gösterir. Kendi kendinizin düşmanı olmayın.",
      en: "13:31 carries the energy of numbers 1 and 3. With a sum of 8 (1+3+3+1=8), this hour is connected to karma, power, and transformation energy. Being a reverse mirror indicates that your mental patterns are hindering you. Do not be your own enemy.",
    },
    astrology: {
      tr: "Astrolojik olarak 13:31, Mars ve Satürn etkisindedir. Koç ve Oğlak burçlarının enerjisiyle uyumludur. Zorluklar ve engellerle karşılaşabilirsiniz, ancak bunlar sizi güçlendirmek içindir. Disiplinli olun.",
      en: "Astrologically, 13:31 is under the influence of Mars and Saturn. It is compatible with the energies of Aries and Capricorn. You may encounter difficulties and obstacles, but these are to strengthen you. Be disciplined.",
    },
    loveAndRelationships: {
      tr: "Aşkta 13:31, karamsarlık uyarısıdır. İlişkinizde sürekli sorun aramak yerine güzelliklere odaklanın. Geçmiş hayal kırıklıklarınızın bugününüzü etkilemesine izin vermeyin. Bekar iseniz, umutsuzluğa kapılmayın.",
      en: "In love, 13:31 is a warning of pessimism. Instead of constantly looking for problems in your relationship, focus on the beauties. Do not let your past disappointments affect your present. If you are single, do not despair.",
    },
    careerAndMoney: {
      tr: "Kariyerde 13:31, stres ve baskı zamanıdır. İş yükünüz artabilir. Ancak bu süreç geçicidir. Sabırlı olun ve planlı çalışın. Finansal konularda borçlanmaktan kaçının.",
      en: "In career, 13:31 is the time for stress and pressure. Your workload may increase. However, this process is temporary. Be patient and work planned. Avoid getting into debt in financial matters.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 13:31, zihinsel detoks zamanıdır. Olumsuz inanç kalıplarınızı fark edin ve dönüştürün. Kök çakra ile ilişkilidir. Kırmızı ve siyah renkleri, oniks taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 13:31 is the time for mental detox. Realize and transform your negative belief patterns. It is related to the root chakra. Red and black colors, onyx stone support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Olumsuz düşüncelerinizi bir kağıda yazıp yırtın\n• Doğada yürüyüş yaparak topraklanın\n• Kırmızı bir obje bulundurun\n• 'Ben gücümü elime alıyorum' olumlamasını yapın\n• Bir şükran listesi hazırlayın",
      en: "• Write your negative thoughts on a paper and tear it up\n• Ground yourself by walking in nature\n• Keep a red object\n• Affirm 'I am taking my power into my hands'\n• Prepare a gratitude list",
    },
  },
  {
    time: "14:41",
    title: {
      tr: "Şans seninle",
      en: "Luck is with you",
    },
    meaning: {
      tr: "Beklenmedik bir yerden güzel bir haber gelebilir. Şans kapını çalmak üzere.",
      en: "Good news might come from an unexpected place. Luck is about to knock on your door.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "14:41, 1 ve 4 rakamlarının enerjisini taşır. Toplamı 10 (1+4+4+1=10 -> 1+0=1) olan bu saat, yeni başlangıçlar, özgürlük ve macera enerjisiyle bağlantılıdır. Ters ayna olması, şansın beklenmedik bir şekilde geleceğini gösterir. Fırsatları değerlendirmeye hazır olun.",
      en: "14:41 carries the energy of numbers 1 and 4. With a sum of 10 (1+4+4+1=10 -> 1+0=1), this hour is connected to new beginnings, freedom, and adventure energy. Being a reverse mirror indicates that luck will come unexpectedly. Be ready to evaluate opportunities.",
    },
    astrology: {
      tr: "Astrolojik olarak 14:41, Jüpiter ve Uranüs etkisindedir. Yay ve Kova burçlarının enerjisiyle uyumludur. Sürpriz gelişmeler, ani değişimler ve özgürleşme isteği ön plandadır. Rutinin dışına çıkın.",
      en: "Astrologically, 14:41 is under the influence of Jupiter and Uranus. It is compatible with the energies of Sagittarius and Aquarius. Surprise developments, sudden changes, and the desire for liberation are at the forefront. Get out of the routine.",
    },
    loveAndRelationships: {
      tr: "Aşkta 14:41, heyecan ve yenilik zamanıdır. İlişkinize renk katacak sürprizler yapın. Bekar iseniz, sıra dışı bir ortamda veya beklenmedik bir anda aşkı bulabilirsiniz. Maceraya açık olun.",
      en: "In love, 14:41 is the time for excitement and novelty. Make surprises that will add color to your relationship. If you are single, you can find love in an unusual environment or at an unexpected moment. Be open to adventure.",
    },
    careerAndMoney: {
      tr: "Kariyerde 14:41, fırsatlar zamanıdır. Yeni bir iş teklifi veya proje gündeme gelebilir. Risk almaktan korkmayın. Finansal olarak şanslı bir dönemdesiniz, piyango gibi şans oyunlarında şansınızı deneyebilirsiniz.",
      en: "In career, 14:41 is the time for opportunities. A new job offer or project may come up. Do not be afraid to take risks. You are in a financially lucky period, you can try your luck in games of chance like lottery.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 14:41, özgürleşme çağrısıdır. Sizi kısıtlayan inançlardan ve bağlardan kurtulun. Solar pleksus çakrası ile ilişkilidir. Sarı ve elektrik mavisi renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 14:41 is a call for liberation. Get rid of beliefs and bonds that restrict you. It is related to the solar plexus chakra. Yellow and electric blue colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Rutininizi değiştirecek bir şey yapın\n• Yeni bir yere gidin\n• Mavi veya sarı bir kıyafet giyin\n• 'Ben şanslıyım ve fırsatlara açığım' olumlamasını yapın\n• Bir dilek tutun",
      en: "• Do something that will change your routine\n• Go to a new place\n• Wear a blue or yellow outfit\n• Affirm 'I am lucky and open to opportunities'\n• Make a wish",
    },
  },
  {
    time: "15:51",
    title: {
      tr: "Eski bir aşk",
      en: "An old love",
    },
    meaning: {
      tr: "Geçmişten gelen biri tekrar hayatına girmek isteyebilir. Karar senin, ama dikkatli ol.",
      en: "Someone from the past might want to re-enter your life. The decision is yours, but be careful.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "15:51, 1 ve 5 rakamlarının enerjisini taşır. Toplamı 12 (1+5+5+1=12 -> 1+2=3) olan bu saat, iletişim, yaratıcılık ve değişim enerjisiyle bağlantılıdır. Ters ayna olması, geçmişin bugünü etkilemeye çalıştığını gösterir. Değişime direnip direnmemek sizin elinizde.",
      en: "15:51 carries the energy of numbers 1 and 5. With a sum of 12 (1+5+5+1=12 -> 1+2=3), this hour is connected to communication, creativity, and change energy. Being a reverse mirror indicates that the past is trying to affect the present. It is in your hands whether to resist change or not.",
    },
    astrology: {
      tr: "Astrolojik olarak 15:51, Merkür ve Plüton etkisindedir. İkizler ve Akrep burçlarının enerjisiyle uyumludur. Derin dönüşümler, sırlar ve tutkulu iletişimler gündeme gelebilir. Geçmişle yüzleşmeye hazır olun.",
      en: "Astrologically, 15:51 is under the influence of Mercury and Pluto. It is compatible with the energies of Gemini and Scorpio. Deep transformations, secrets, and passionate communications may come up. Be ready to face the past.",
    },
    loveAndRelationships: {
      tr: "Aşkta 15:51, geçmişle hesaplaşma zamanıdır. Eski sevgiliniz dönebilir veya eski bir konu tekrar açılabilir. Bu sefer farklı bir sonuç almak istiyorsanız, farklı davranmalısınız. Tutkularınıza yenik düşmeyin.",
      en: "In love, 15:51 is the time to reckon with the past. Your ex may return or an old issue may reopen. If you want to get a different result this time, you must act differently. Do not succumb to your passions.",
    },
    careerAndMoney: {
      tr: "Kariyerde 15:51, değişim rüzgarları estirir. İş değişikliği veya pozisyon değişikliği düşünebilirsiniz. Ancak ani kararlar vermeyin. Finansal olarak harcamalarınıza dikkat edin.",
      en: "In career, 15:51 blows winds of change. You can consider a job change or position change. However, do not make sudden decisions. Financially, pay attention to your expenses.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 15:51, dönüşüm ve yenilenme zamanıdır. Eskiyi bırakıp yeniye yer açın. Boğaz çakrası ile ilişkilidir. Mavi ve mor renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 15:51 is the time for transformation and renewal. Leave the old and make room for the new. It is related to the throat chakra. Blue and purple colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Geçmişle ilgili bir bağ kesme ritüeli yapın\n• Evinizde kullanmadığınız eşyaları atın\n• Mavi bir aksesuar takın\n• 'Ben değişimi kucaklıyorum' olumlamasını yapın\n• Günlük tutarak hislerinizi boşaltın",
      en: "• Perform a cord-cutting ritual related to the past\n• Throw away items you don't use in your home\n• Wear a blue accessory\n• Affirm 'I embrace change'\n• Empty your feelings by keeping a journal",
    },
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
    numerology: {
      tr: "20:02, 2 ve 0 rakamlarının enerjisini taşır. Toplamı 4 (2+0+0+2=4) olan bu saat, düzen, istikrar ve sabır enerjisiyle bağlantılıdır. Ters ayna olması, ilişkilerde veya projelerde bir kopukluk olduğunu gösterir. Sabırla ve özenle bu kopukluğu gidermeniz gerekir.",
      en: "20:02 carries the energy of numbers 2 and 0. With a sum of 4 (2+0+0+2=4), this hour is connected to order, stability, and patience energy. Being a reverse mirror indicates a disconnection in relationships or projects. You need to repair this disconnection with patience and care.",
    },
    astrology: {
      tr: "Astrolojik olarak 20:02, Ay ve Satürn etkisindedir. Yengeç ve Oğlak burçlarının enerjisiyle uyumludur. Duygusal soğukluk veya mesafe hissedebilirsiniz. Ancak bu, ilişkinin temellerini sağlamlaştırmak için bir fırsattır.",
      en: "Astrologically, 20:02 is under the influence of the Moon and Saturn. It is compatible with the energies of Cancer and Capricorn. You may feel emotional coldness or distance. However, this is an opportunity to strengthen the foundations of the relationship.",
    },
    loveAndRelationships: {
      tr: "Aşkta 20:02, özlem ve hasret zamanıdır. Partnerinizden uzak olabilirsiniz veya yan yanayken bile uzak hissedebilirsiniz. İletişim kurarak bu mesafeyi aşın. Bekar iseniz, geçmişte kalan birini özlüyor olabilirsiniz.",
      en: "In love, 20:02 is the time for longing and yearning. You may be far from your partner or feel distant even when side by side. Overcome this distance by communicating. If you are single, you may be missing someone from the past.",
    },
    careerAndMoney: {
      tr: "Kariyerde 20:02, disiplin ve odaklanma gerektirir. İşleriniz yavaş ilerleyebilir. Pes etmeyin. Finansal olarak birikim yapma zamanıdır. Gereksiz harcamalardan kaçının.",
      en: "In career, 20:02 requires discipline and focus. Your work may progress slowly. Do not give up. It is time to save financially. Avoid unnecessary expenses.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 20:02, içsel sessizlik zamanıdır. Kendi içinize dönün ve cevapları orada arayın. Üçüncü göz çakrası ile ilişkilidir. İndigo ve gümüş renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 20:02 is the time for inner silence. Turn inward and look for answers there. It is related to the third eye chakra. Indigo and silver colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Sevdiğiniz kişiye bir mesaj atın veya arayın\n• Meditasyon yaparak iç huzurunuzu bulun\n• Gümüş bir obje bulundurun\n• 'Ben sevgiyi ve yakınlığı hak ediyorum' olumlamasını yapın\n• Bir kitap okuyun",
      en: "• Send a message or call your loved one\n• Find your inner peace by meditating\n• Keep a silver object\n• Affirm 'I deserve love and closeness'\n• Read a book",
    },
  },
  {
    time: "21:12",
    title: {
      tr: "Sana ihtiyacı var",
      en: "They need you",
    },
    meaning: {
      tr: "Sevdiğin birinin desteğine ihtiyacı olabilir. Etrafına dikkatlice bak, yardım elini uzat.",
      en: "Someone you love might need your support. Look around carefully, extend a helping hand.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "21:12, 2 ve 1 rakamlarının enerjisini taşır. Toplamı 6 (2+1+1+2=6) olan bu saat, hizmet, aile ve sorumluluk enerjisiyle bağlantılıdır. Ters ayna olması, birinin sessiz çığlığını duymanız gerektiğini gösterir. Empati yeteneğinizi kullanın.",
      en: "21:12 carries the energy of numbers 2 and 1. With a sum of 6 (2+1+1+2=6), this hour is connected to service, family, and responsibility energy. Being a reverse mirror indicates that you need to hear someone's silent scream. Use your empathy skills.",
    },
    astrology: {
      tr: "Astrolojik olarak 21:12, Jüpiter ve Ay etkisindedir. Yay ve Yengeç burçlarının enerjisiyle uyumludur. Koruyucu ve besleyici bir enerji hakimdir. Sevdiklerinize kol kanat gerin.",
      en: "Astrologically, 21:12 is under the influence of Jupiter and the Moon. It is compatible with the energies of Sagittarius and Cancer. A protective and nurturing energy prevails. Watch over your loved ones.",
    },
    loveAndRelationships: {
      tr: "Aşkta 21:12, fedakarlık zamanıdır. Partnerinizin zor bir dönemden geçiyor olabilir. Ona destek olun. Bekar iseniz, yardımseverliğinizle birinin kalbini çalabilirsiniz.",
      en: "In love, 21:12 is the time for sacrifice. Your partner may be going through a difficult time. Support them. If you are single, you can steal someone's heart with your helpfulness.",
    },
    careerAndMoney: {
      tr: "Kariyerde 21:12, ekip çalışması ve yardımlaşma zamanıdır. İş arkadaşlarınıza destek olun. Bu iyiliğiniz size başarı olarak dönecektir. Finansal olarak cömert olabilirsiniz, ancak sınırlarınızı koruyun.",
      en: "In career, 21:12 is the time for teamwork and cooperation. Support your colleagues. This kindness will return to you as success. You can be financially generous, but maintain your boundaries.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 21:12, hizmet etme çağrısıdır. Başkalarına yardım ederek ruhsal olarak büyürsünüz. Kalp çakrası ile ilişkilidir. Yeşil ve pembe renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 21:12 is a call to serve. You grow spiritually by helping others. It is related to the heart chakra. Green and pink colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Birine yardım edin veya bağış yapın\n• Sevdiklerinizi arayıp hatırlarını sorun\n• Yeşil bir kıyafet giyin\n• 'Ben sevgi ve şefkat doluyum' olumlamasını yapın\n• Gönüllü çalışmalara katılın",
      en: "• Help someone or make a donation\n• Call your loved ones and ask how they are\n• Wear a green outfit\n• Affirm 'I am full of love and compassion'\n• Participate in volunteer work",
    },
  },
  {
    time: "23:32",
    title: {
      tr: "Dikkatli ol",
      en: "Be careful",
    },
    meaning: {
      tr: "Biri senin hakkında konuşuyor ya da arkandan iş çeviriyor olabilir. Kimseye hemen güvenme.",
      en: "Someone might be talking about you or plotting behind your back. Don't trust anyone immediately.",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "23:32, 2 ve 3 rakamlarının enerjisini taşır. Toplamı 10 (2+3+3+2=10 -> 1+0=1) olan bu saat, iletişim ve zeka enerjisiyle bağlantılıdır. Ters ayna olması, iletişimin kötüye kullanılabileceğini gösterir. Dedikodulara ve manipülasyonlara karşı uyanık olun.",
      en: "23:32 carries the energy of numbers 2 and 3. With a sum of 10 (2+3+3+2=10 -> 1+0=1), this hour is connected to communication and intelligence energy. Being a reverse mirror indicates that communication can be misused. Be alert to gossip and manipulation.",
    },
    astrology: {
      tr: "Astrolojik olarak 23:32, Merkür ve Mars etkisindedir. İkizler ve Koç burçlarının enerjisiyle uyumludur. Keskin bir zeka ve hızlı bir dil, ancak aynı zamanda çatışma potansiyeli taşır. Tartışmalardan kaçının.",
      en: "Astrologically, 23:32 is under the influence of Mercury and Mars. It is compatible with the energies of Gemini and Aries. Sharp intelligence and a quick tongue, but also carries the potential for conflict. Avoid arguments.",
    },
    loveAndRelationships: {
      tr: "Aşkta 23:32, güvensizlik uyarısıdır. İlişkinizde şüpheleriniz varsa, bunları açıkça konuşun. Ancak suçlayıcı olmayın. Bekar iseniz, yeni tanıştığınız kişilere karşı temkinli yaklaşın.",
      en: "In love, 23:32 is a warning of mistrust. If you have doubts in your relationship, talk about them openly. But do not be accusatory. If you are single, approach people you just met with caution.",
    },
    careerAndMoney: {
      tr: "Kariyerde 23:32, stratejik olma zamanıdır. Hamlelerinizi iyi hesaplayın. İş yerindeki politik oyunlara dahil olmayın. Finansal olarak riskli yatırımlardan uzak durun.",
      en: "In career, 23:32 is the time to be strategic. Calculate your moves well. Do not get involved in political games at work. Stay away from risky investments financially.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 23:32, korunma ihtiyacıdır. Enerji alanınızı koruyun. Boğaz çakrası ile ilişkilidir. Mavi ve turkuaz renkleri, turkuaz taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 23:32 is the need for protection. Protect your energy field. It is related to the throat chakra. Blue and turquoise colors, turquoise stone support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Koruyucu bir dua veya mantra okuyun\n• Mavi bir nazar boncuğu taşıyın\n• Sırlarınızı kendinize saklayın\n• 'Ben güvendeyim ve korunuyorum' olumlamasını yapın\n• Tuzlu su banyosu yaparak enerjinizi temizleyin",
      en: "• Recite a protective prayer or mantra\n• Carry a blue evil eye bead\n• Keep your secrets to yourself\n• Affirm 'I am safe and protected'\n• Cleanse your energy by taking a salt water bath",
    },
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
    numerology: {
      tr: "01:11, 1 rakamının üç kez tekrarlandığı güçlü bir enerjiye sahiptir. 1 sayısı yeni başlangıçlar, liderlik ve yaratıcılık demektir. Toplamı 3 (1+1+1=3) olan bu saat, iletişim, ifade ve büyüme enerjisiyle bağlantılıdır. Düşüncelerinizin hızla gerçeğe dönüştüğü bir evredesiniz. Niyetlerinize dikkat edin.",
      en: "01:11 has a powerful energy where the number 1 is repeated three times. Number 1 means new beginnings, leadership, and creativity. With a sum of 3 (1+1+1=3), this hour is connected to communication, expression, and growth energy. You are in a phase where your thoughts are rapidly turning into reality. Pay attention to your intentions.",
    },
    astrology: {
      tr: "Astrolojik olarak 01:11, Güneş ve Merkür etkisindedir. Aslan ve İkizler burçlarının enerjisiyle uyumludur. Zihinsel aktivite ve yaratıcılık zirvededir. Kendinizi ifade etmek için harika bir zamandır.",
      en: "Astrologically, 01:11 is under the influence of the Sun and Mercury. It is compatible with the energies of Leo and Gemini. Mental activity and creativity are at their peak. It is a great time to express yourself.",
    },
    loveAndRelationships: {
      tr: "Aşkta 01:11, yeni başlangıçlar müjdesidir. Yeni bir ilişkiye başlayabilir veya mevcut ilişkinizde yeni bir sayfa açabilirsiniz. Duygularınızı açıkça ifade edin. Bekar iseniz, zekanızla birini etkileyebilirsiniz.",
      en: "In love, 01:11 is a herald of new beginnings. You can start a new relationship or turn a new page in your current relationship. Express your feelings openly. If you are single, you can impress someone with your intelligence.",
    },
    careerAndMoney: {
      tr: "Kariyerde 01:11, liderlik fırsatları sunar. Projelerinizde inisiyatif alın. Fikirleriniz kabul görecektir. Finansal olarak yeni gelir kapıları açılabilir.",
      en: "In career, 01:11 offers leadership opportunities. Take initiative in your projects. Your ideas will be accepted. Financially, new income doors may open.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 01:11, uyanış çağrısıdır. Farkındalığınız artıyor. Meditasyon ve vizyonlama çalışmaları yapın. Taç çakrası ile ilişkilidir. Beyaz ve altın renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 01:11 is a wake-up call. Your awareness is increasing. Do meditation and visualization exercises. It is related to the crown chakra. White and gold colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Bir vizyon panosu hazırlayın\n• Olumlu olumlamalar yapın\n• Yeni bir projeye başlayın\n• 'Ben yaratıcı gücümü kabul ediyorum' olumlamasını yapın\n• Altın rengi bir takı takın",
      en: "• Prepare a vision board\n• Make positive affirmations\n• Start a new project\n• Affirm 'I accept my creative power'\n• Wear a gold jewelry",
    },
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
    numerology: {
      tr: "02:22, 2 rakamının üç kez tekrarlandığı uyumlu bir enerjiye sahiptir. 2 sayısı işbirliği, denge ve diplomasi demektir. Toplamı 6 (2+2+2=6) olan bu saat, aile, sevgi ve sorumluluk enerjisiyle bağlantılıdır. Hayatınızdaki dengesizlikleri gidermeniz gerektiğini söyler.",
      en: "02:22 has a harmonious energy where the number 2 is repeated three times. Number 2 means cooperation, balance, and diplomacy. With a sum of 6 (2+2+2=6), this hour is connected to family, love, and responsibility energy. It tells you that you need to eliminate imbalances in your life.",
    },
    astrology: {
      tr: "Astrolojik olarak 02:22, Ay ve Venüs etkisindedir. Yengeç ve Terazi burçlarının enerjisiyle uyumludur. Duygusal hassasiyet ve estetik anlayışı ön plandadır. İlişkilerde uyum arayışı artar.",
      en: "Astrologically, 02:22 is under the influence of the Moon and Venus. It is compatible with the energies of Cancer and Libra. Emotional sensitivity and aesthetic understanding are at the forefront. The search for harmony in relationships increases.",
    },
    loveAndRelationships: {
      tr: "Aşkta 02:22, romantizm ve şefkat zamanıdır. Partnerinizle romantik anlar yaşayabilirsiniz. Sorunları konuşarak çözün. Bekar iseniz, nazik ve anlayışlı biriyle tanışabilirsiniz.",
      en: "In love, 02:22 is the time for romance and compassion. You can experience romantic moments with your partner. Solve problems by talking. If you are single, you might meet someone gentle and understanding.",
    },
    careerAndMoney: {
      tr: "Kariyerde 02:22, işbirliği zamanıdır. Ekip çalışmalarında başarılı olursunuz. Diplomatik yeteneklerinizi kullanın. Finansal olarak dengeli bir bütçe yapın.",
      en: "In career, 02:22 is the time for cooperation. You will be successful in team work. Use your diplomatic skills. Financially, make a balanced budget.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 02:22, içsel barış zamanıdır. Kendinizi ve başkalarını affedin. Kalp çakrası ile ilişkilidir. Pembe ve yeşil renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 02:22 is the time for inner peace. Forgive yourself and others. It is related to the heart chakra. Pink and green colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Evinizi düzenleyin ve güzelleştirin\n• Sevdiklerinize vakit ayırın\n• Barışçıl bir çözüm bulun\n• 'Ben huzur ve denge içindeyim' olumlamasını yapın\n• Pembe kuvars taşı taşıyın",
      en: "• Organize and beautify your home\n• Spend time with your loved ones\n• Find a peaceful solution\n• Affirm 'I am in peace and balance'\n• Carry a rose quartz stone",
    },
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
    numerology: {
      tr: "03:33, 3 rakamının üç kez tekrarlandığı yaratıcı bir enerjiye sahiptir. 3 sayısı ifade, neşe ve büyüme demektir. Toplamı 9 (3+3+3=9) olan bu saat, tamamlanma, bilgelik ve evrensel sevgi enerjisiyle bağlantılıdır. Yüksek benliğinizle bağlantı kurmanız için bir çağrıdır.",
      en: "03:33 has a creative energy where the number 3 is repeated three times. Number 3 means expression, joy, and growth. With a sum of 9 (3+3+3=9), this hour is connected to completion, wisdom, and universal love energy. It is a call to connect with your higher self.",
    },
    astrology: {
      tr: "Astrolojik olarak 03:33, Jüpiter ve Neptün etkisindedir. Yay ve Balık burçlarının enerjisiyle uyumludur. Ruhsal genişleme ve sezgisel güç artar. Rüyalarınız size mesaj veriyor olabilir.",
      en: "Astrologically, 03:33 is under the influence of Jupiter and Neptune. It is compatible with the energies of Sagittarius and Pisces. Spiritual expansion and intuitive power increase. Your dreams might be giving you messages.",
    },
    loveAndRelationships: {
      tr: "Aşkta 03:33, ruhsal bağların güçlendiği zamandır. İlişkinizde daha derin bir anlam arayabilirsiniz. Partnerinizle ruhsal konuları konuşun. Bekar iseniz, ruh eşinizle karşılaşma ihtimaliniz yüksektir.",
      en: "In love, 03:33 is the time when spiritual bonds strengthen. You may seek a deeper meaning in your relationship. Talk about spiritual matters with your partner. If you are single, the probability of meeting your soulmate is high.",
    },
    careerAndMoney: {
      tr: "Kariyerde 03:33, ilham ve vizyon zamanıdır. Büyük düşünün. Sanatsal ve yaratıcı işlerde başarı getirir. Finansal olarak bolluk bilincine odaklanın.",
      en: "In career, 03:33 is the time for inspiration and vision. Think big. It brings success in artistic and creative works. Financially, focus on abundance consciousness.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 03:33, rehberlik alma zamanıdır. Meleklerinizin ve rehberlerinizin yanınızda olduğunu bilin. Üçüncü göz çakrası ile ilişkilidir. Mor ve lacivert renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 03:33 is the time to receive guidance. Know that your angels and guides are with you. It is related to the third eye chakra. Purple and dark blue colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Meditasyon yapın ve rehberlerinizle konuşun\n• Rüyalarınızı not edin\n• Yaratıcı bir hobi edinin\n• 'Ben evrensel bilgelikle bağlantıdayım' olumlamasını yapın\n• Ametist taşı taşıyın",
      en: "• Meditate and talk to your guides\n• Note your dreams\n• Get a creative hobby\n• Affirm 'I am connected to universal wisdom'\n• Carry an amethyst stone",
    },
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
    numerology: {
      tr: "04:44, 4 rakamının üç kez tekrarlandığı istikrarlı bir enerjiye sahiptir. 4 sayısı düzen, sabır ve çalışma demektir. Toplamı 12 (4+4+4=12 -> 1+2=3) olan bu saat, yaratıcılık ve iletişim enerjisiyle de bağlantılıdır. Emeklerinizin karşılığını alacağınız bir dönemdesiniz.",
      en: "04:44 has a stable energy where the number 4 is repeated three times. Number 4 means order, patience, and work. With a sum of 12 (4+4+4=12 -> 1+2=3), this hour is also connected to creativity and communication energy. You are in a period where you will get the return on your efforts.",
    },
    astrology: {
      tr: "Astrolojik olarak 04:44, Satürn ve Uranüs etkisindedir. Oğlak ve Kova burçlarının enerjisiyle uyumludur. Disiplinli çalışma ve yenilikçi fikirler bir aradadır. Kalıcı başarılar elde edebilirsiniz.",
      en: "Astrologically, 04:44 is under the influence of Saturn and Uranus. It is compatible with the energies of Capricorn and Aquarius. Disciplined work and innovative ideas are together. You can achieve lasting successes.",
    },
    loveAndRelationships: {
      tr: "Aşkta 04:44, güven ve sadakat zamanıdır. İlişkinizin temellerini sağlamlaştırın. Geleceğe dair planlar yapın. Bekar iseniz, ciddi ve güvenilir biriyle tanışabilirsiniz.",
      en: "In love, 04:44 is the time for trust and loyalty. Strengthen the foundations of your relationship. Make plans for the future. If you are single, you might meet someone serious and reliable.",
    },
    careerAndMoney: {
      tr: "Kariyerde 04:44, yükseliş ve başarı zamanıdır. Çok çalışmanız takdir edilecektir. Terfi veya zam alabilirsiniz. Finansal olarak yatırımlarınız değer kazanabilir.",
      en: "In career, 04:44 is the time for rise and success. Your hard work will be appreciated. You may get a promotion or raise. Financially, your investments may gain value.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 04:44, topraklanma zamanıdır. Doğayla bağ kurun. Kök çakra ile ilişkilidir. Kırmızı ve kahverengi renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 04:44 is the time for grounding. Connect with nature. It is related to the root chakra. Red and brown colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Uzun vadeli planlar yapın\n• Doğada vakit geçirin\n• Evinizde tadilat veya düzenleme yapın\n• 'Ben güvendeyim ve sağlam adımlarla ilerliyorum' olumlamasını yapın\n• Kırmızı jasper taşı taşıyın",
      en: "• Make long-term plans\n• Spend time in nature\n• Do renovation or organization in your home\n• Affirm 'I am safe and moving forward with solid steps'\n• Carry a red jasper stone",
    },
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
    numerology: {
      tr: "05:55, 5 rakamının üç kez tekrarlandığı dinamik bir enerjiye sahiptir. 5 sayısı değişim, özgürlük ve macera demektir. Toplamı 15 (5+5+5=15 -> 1+5=6) olan bu saat, uyum ve sorumluluk enerjisiyle de bağlantılıdır. Hayatınızda büyük değişikliklerin olacağını müjdeler.",
      en: "05:55 has a dynamic energy where the number 5 is repeated three times. Number 5 means change, freedom, and adventure. With a sum of 15 (5+5+5=15 -> 1+5=6), this hour is also connected to harmony and responsibility energy. It heralds that major changes will occur in your life.",
    },
    astrology: {
      tr: "Astrolojik olarak 05:55, Merkür ve Uranüs etkisindedir. İkizler ve Kova burçlarının enerjisiyle uyumludur. Hızlı düşünme, ani kararlar ve sürprizler gündeme gelir. Esnek olmalısınız.",
      en: "Astrologically, 05:55 is under the influence of Mercury and Uranus. It is compatible with the energies of Gemini and Aquarius. Quick thinking, sudden decisions, and surprises come up. You must be flexible.",
    },
    loveAndRelationships: {
      tr: "Aşkta 05:55, heyecan ve tutku zamanıdır. İlişkinizde rutinden çıkın. Farklı aktiviteler yapın. Bekar iseniz, sıra dışı biriyle tanışabilir ve yıldırım aşkına tutulabilirsiniz.",
      en: "In love, 05:55 is the time for excitement and passion. Get out of the routine in your relationship. Do different activities. If you are single, you might meet someone unusual and fall in love at first sight.",
    },
    careerAndMoney: {
      tr: "Kariyerde 05:55, fırsatlar ve değişiklikler zamanıdır. İş değiştirebilir veya yeni bir projeye başlayabilirsiniz. Seyahatler gündeme gelebilir. Finansal olarak risk alabilirsiniz ama dikkatli olun.",
      en: "In career, 05:55 is the time for opportunities and changes. You can change jobs or start a new project. Travels may come up. Financially, you can take risks but be careful.",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 05:55, özgürleşme zamanıdır. Sizi tutan her şeyi bırakın. Boğaz çakrası ile ilişkilidir. Mavi ve turkuaz renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 05:55 is the time for liberation. Let go of everything holding you back. It is related to the throat chakra. Blue and turquoise colors support the energy of this hour.",
    },
    actionSteps: {
      tr: "• Seyahate çıkın veya yeni bir yer keşfedin\n• Rutininizi değiştirin\n• Yeni bir şeyler öğrenin\n• 'Ben değişimi kucaklıyorum ve özgürüm' olumlamasını yapın\n• Turkuaz taşı taşıyın",
      en: "• Go on a trip or discover a new place\n• Change your routine\n• Learn something new\n• Affirm 'I embrace change and I am free'\n• Carry a turquoise stone",
    },
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
