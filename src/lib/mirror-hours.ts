export type LocalizedText = {
  tr: string;
  en: string;
  zh?: string;
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
      zh: "新的循环开始",
    },
    meaning: {
      tr: "Evren sana yepyeni bir başlangıç sunuyor. Geçmişi arkanda bırakmak ve cesur adımlar atmak için doğru zamandasın.",
      en: "The universe offers you a brand new beginning. It's the right time to leave the past behind and take brave steps forward.",
      zh: "宇宙为你提供了一个全新的开始。现在是放下过去、勇敢向前迈进的正确时机。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "00:00, gece yarısı ve yeni bir günün başlangıcıdır. Numerolojide 0, sonsuz potansiyeli, boşluğu ve her şeyin kaynağını temsil eder. Dört sıfır bir arada, bu enerjinin en güçlü halidir - alfa ve omega, başlangıç ve son. Bu saat, geçmişten tam bir kopuş ve yepyeni bir sayfa açma anıdır. 0, aynı zamanda evrensel enerjinin kendisidir; her şeyi içerir ama hiçbir şey değildir. Bu saatte olumlamalar ve niyetler son derece güçlüdür çünkü sıfırdan başlıyorsunuz. Yeni bir gün, yeni bir sen, yeni bir hayat. Bu saati görmek, hayatınızda büyük bir dönüşümün eşiğinde olduğunuz ve eski versiyonunuzu geride bırakmanız gerektiği anlamına gelir.",
      en: "00:00 is midnight and the beginning of a new day. In numerology, 0 represents infinite potential, the void, and the source of everything. Four zeros together is the most powerful form of this energy - alpha and omega, beginning and end. This hour is the moment of complete separation from the past and opening a brand new page. 0 is also universal energy itself; it contains everything but is nothing. Affirmations and intentions at this hour are extremely powerful because you're starting from zero. A new day, a new you, a new life. Seeing this hour means you're on the threshold of a major transformation in your life and need to leave your old version behind.",
      zh: "00:00是午夜，也是新一天的开始。在数字命理学中，0代表无限的潜力、虚空和万物的源头。四个零在一起，是这种能量最强大的形式——阿尔法与欧米伽，开始与结束。这个时刻是与过去彻底分离、翻开全新一页的时刻。0也是宇宙能量本身；它包含一切却又什么都不是。在这个时刻，肯定语和意图极其强大，因为你正从零开始。新的一天，新的你，新的生活。看到这个时刻意味着你正处于生命中重大转变的边缘，需要放下旧的自己。",
    },
    astrology: {
      tr: "Astrolojik olarak 00:00, Güneş'in gece yarısı konumudur - en derinde, en karanlıkta, ama yeniden doğuşun hemen öncesinde. Pluton'un dönüşüm enerjisiyle rezonansa girer. Pluton, ölüm ve yeniden doğuşun, köklü değişimlerin ve iç gücün gezegenidir. Akrep burcu enerjisi bu saatte yoğundur. Ay'ın hangi evde olduğuna göre yenilenmenin hangi alanda yaşanacağı belirlenir. Örneğin 4. evdeyse (ev, aile) aile içi bir yenilik; 10. evdeyse (kariyer) iş hayatında yeni bir başlangıç söz konusu olabilir. Eclipse dönemlerinde ya da Yeni Ay'da 00:00'ı görmek, manifestasyon gücünün katlanarak arttığı anlamına gelir.",
      en: "Astrologically, 00:00 is the Sun's midnight position - at its deepest, darkest, but just before rebirth. It resonates with Pluto's transformational energy. Pluto is the planet of death and rebirth, radical changes, and inner power. Scorpio energy is intense at this hour. The area where renewal will occur is determined by which house the Moon is in. For example, if it's in the 4th house (home, family) there may be a renewal within the family; if in the 10th house (career) there may be a new beginning in work life. Seeing 00:00 during eclipse periods or on a New Moon means manifestation power increases exponentially.",
      zh: "从占星学角度来看，00:00是太阳的午夜位置——处于最深处、最黑暗处，但就在重生之前。它与冥王星的转化能量产生共鸣。冥王星是死亡与重生、根本变革和内在力量的行星。天蝎座的能量在这个时刻非常强烈。月亮所在的宫位决定了更新将在哪个领域发生。例如，如果在第4宫（家庭），可能会有家庭内部的更新；如果在第10宫（事业），可能会有工作生活的新开始。在日食或月食期间或新月时看到00:00，意味着显化力量呈指数级增长。",
    },
    loveAndRelationships: {
      tr: "Aşk hayatınız için 00:00, yepyeni bir başlangıç yapmak isteyenler için mükemmel bir saattir. Eski ilişkilerden, acılardan, kırgınlıklardan arınma zamanıdır. Eğer bir ilişki sizin için artık sağlıklı değilse, bu saat size bunu bırakma cesareti verir. Eğer yeni bir aşk arıyorsanız, geçmişi tamamen kapatıp kendinizi yeni bir bağa açmak için ideal bir andır. Bir ilişkideyseniz, partnerinizle ilişkinizi sıfırlayabilir, yeni bir döngüye başlayabilirsiniz - sanki yeniden tanışıyormuş gibi. 00:00 ayrıca kendinizi sevmeye başlamanın da saatidir. Başkalarından önce, kendinizle barışın. Kendi değerinizi bilin ve kendinize yeni bir şans tanıyın.",
      en: "For your love life, 00:00 is perfect for those wanting to make a brand new start. It's time to cleanse from old relationships, pains, and hurts. If a relationship is no longer healthy for you, this hour gives you the courage to let it go. If you're looking for new love, it's an ideal moment to completely close the past and open yourself to a new connection. If you're in a relationship, you can reset your relationship with your partner, start a new cycle - as if meeting again for the first time. 00:00 is also the hour to start loving yourself. Before others, make peace with yourself. Know your worth and give yourself a new chance.",
      zh: "对于你的爱情生活，00:00对于那些想要全新开始的人来说是完美的时刻。现在是从旧关系、痛苦和伤害中净化的时候了。如果一段关系对你来说不再健康，这个时刻会给你放手的勇气。如果你在寻找新的爱情，这是彻底关闭过去、向新的联系敞开心扉的理想时刻。如果你正在恋爱中，你可以重置与伴侣的关系，开始新的循环——就像第一次见面一样。00:00也是开始爱自己的时刻。在爱别人之前，先与自己和解。了解自己的价值，给自己一个新的机会。",
    },
    careerAndMoney: {
      tr: "Kariyer açısından 00:00, yeni bir işe başlamak, girişim kurmak ya da tamamen farklı bir alana geçiş yapmak için güçlü bir enerjidir. Eski iş yerinden, toksik çalışma ortamlarından ya da sizi sınırlayan yapılardan ayrılma cesaretini size verir. Finansal olarak sıfırdan başlamaktan korkmayın - bazen temizlenmek gerekir ki yeni bolluk gelsin. Bu saat, risk almayı ve kendi yolunuzu çizmeyi destekler. Patronunuza değil, kendi vizyonunuza hizmet etmenin zamanı gelebilir. Yeni bir iş fikriniz varsa, bu saatte iş planınızı yazmaya başlayın. Evren sizin yeni başlangıcınızı destekliyor.",
      en: "Career-wise, 00:00 is powerful energy for starting a new job, founding a startup, or transitioning to a completely different field. It gives you the courage to leave old workplaces, toxic work environments, or structures that limit you. Financially, don't be afraid to start from zero - sometimes you need to cleanse so new abundance can come. This hour supports taking risks and charting your own path. The time may come to serve your own vision, not your boss's. If you have a new business idea, start writing your business plan at this hour. The universe supports your new beginning.",
      zh: "从职业角度来看，00:00是开始新工作、创办公司或转向完全不同领域的强大能量。它给你勇气离开旧工作场所、有毒的工作环境或限制你的结构。在财务上，不要害怕从零开始——有时需要清理，新的丰盛才能到来。这个时刻支持冒险和开辟自己的道路。服务于自己的愿景而非老板的时候可能到了。如果你有新的商业想法，在这个时刻开始写你的商业计划。宇宙支持你的新开始。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 00:00, en derin iç yolculuk saatidir. Meditasyon, günlük yazma, afetme ritüelleri ve enerji temizliği için ideal bir zamandır. Siyah turmalin veya obsidyen gibi koruyucu taşlar bu saatte negatif enerjileri temizler. Beyaz mum yakıp, geçmişi bırakma niyeti koyabilirsiniz. Tütsü yakın, alanınızı temizleyin. Eski bir 'ben'i bırakıp yeni bir 'ben'e merhaba diyorsanız, sembolik bir ritüel yapabilirsiniz - eski bir fotoğrafınızı yakabilir ya da geçmişi temsil eden bir şeyi gömerebilirsiniz. Gece yarısı ayini, kadim geleneklerde dönüşüm için kullanılır. Kendinize 'Ben yeniyim, ben özgürüm, ben güçlüyüm' deyin.",
      en: "Spiritually, 00:00 is the hour of the deepest inner journey. It's an ideal time for meditation, journaling, forgiveness rituals, and energy cleansing. Protective stones like black tourmaline or obsidian cleanse negative energies at this hour. You can light a white candle and set an intention to release the past. Burn incense, cleanse your space. If you're leaving an old 'you' and saying hello to a new 'you,' you can perform a symbolic ritual - burn an old photo of yourself or bury something representing the past. Midnight ceremonies are used for transformation in ancient traditions. Say to yourself 'I am new, I am free, I am powerful.'",
      zh: "在灵性层面上，00:00是最深层内在旅程的时刻。这是冥想、写日记、宽恕仪式和能量清理的理想时间。黑色电气石或黑曜石等保护性水晶在这个时刻清除负面能量。你可以点燃白色蜡烛，设定释放过去的意图。燃烧香料，清洁你的空间。如果你要告别旧的自己、迎接新的自己，可以进行象征性的仪式——烧掉自己的旧照片或埋葬代表过去的东西。午夜仪式在古老传统中用于转化。对自己说'我是新的，我是自由的，我是强大的'。",
    },
    actionSteps: {
      tr: "• Bir kağıda bırakmak istediğiniz her şeyi yazın ve bu kağıdı yırtıp atın\n• Aynaya bakın ve 'Eski ben gitti, yeni ben burada' deyin\n• Duş alın ve tüm negatif enerjiyi akıp gittiğini hayal edin\n• Yatak odanızı yeniden düzenleyin, eski eşyalardan kurtulun\n• Yeni bir hedef belirleyin ve ilk adımı atmak için bir plan yapın\n• Bir beyaz mum yakıp 10 dakika meditasyon yapın, yeni başlangıcınızı kutlayın\n• Sabah uyandığınızda ilk düşüncenizin olumlu olmasına dikkat edin - bu yeni döngünüzün tonunu belirler",
      en: "• Write everything you want to let go of on paper and tear up and discard this paper\n• Look in the mirror and say 'The old me is gone, the new me is here'\n• Take a shower and imagine all negative energy flowing away\n• Reorganize your bedroom, get rid of old items\n• Set a new goal and make a plan to take the first step\n• Light a white candle and meditate for 10 minutes, celebrate your new beginning\n• When you wake up in the morning, make sure your first thought is positive - this sets the tone for your new cycle",
      zh: "• 在纸上写下你想放下的一切，然后撕碎并丢弃这张纸\n• 看着镜子说'旧的我已经离开，新的我在这里'\n• 洗个澡，想象所有负面能量都流走了\n• 重新整理你的卧室，扔掉旧物品\n• 设定一个新目标，制定迈出第一步的计划\n• 点燃白色蜡烛，冥想10分钟，庆祝你的新开始\n• 早上醒来时，确保你的第一个想法是积极的——这为你的新循环定下基调",
    },
  },
  {
    time: "01:01",
    title: {
      tr: "Göz önündesin",
      en: "You're in the spotlight",
      zh: "你在聚光灯下",
    },
    meaning: {
      tr: "Biri seni dikkatle izliyor ve sana dair güçlü duygular besliyor. Bu ilgi seni rahatsız etmiyorsa kendini açmayı düşünebilirsin.",
      en: "Someone is watching you carefully and harboring strong feelings for you. If this attention doesn't bother you, you might consider opening up.",
      zh: "有人在仔细观察你，对你怀有强烈的感情。如果这种关注不会让你感到困扰，你可以考虑敞开心扉。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "01:01 saati, 1 rakamının iki kez tekrarlandığı güçlü bir kombinasyondur. Numerolojide 1 sayısı, yeni başlangıçları, liderliği, bağımsızlığı ve bireyselliği temsil eder. Bu saatin toplamı (0+1+0+1=2) aynı zamanda 2 sayısının enerjisini de taşır. 2, ikiliği, ortaklığı ve dengeyi simgeler. Bu saat size hem kendi başınıza güçlü olduğunuzu hem de başkalarıyla bağlantılarınızın önemini hatırlatır. Özellikle bu saati sık görüyorsanız, hayatınızda yeni bir başlangıç yapma ya da birileriyle daha derin bir bağ kurma zamanının geldiğini işaret edebilir.",
      en: "The time 01:01 is a powerful combination where the number 1 is repeated twice. In numerology, the number 1 represents new beginnings, leadership, independence, and individuality. The sum of this time (0+1+0+1=2) also carries the energy of the number 2. The number 2 symbolizes duality, partnership, and balance. This hour reminds you that you are powerful on your own while also highlighting the importance of your connections with others. If you see this time frequently, it may signal that it's time for a new beginning in your life or to form deeper bonds with others.",
      zh: "01:01是数字1重复两次的强大组合。在数字命理学中，数字1代表新的开始、领导力、独立性和个性。这个时间的总和（0+1+0+1=2）也承载着数字2的能量。数字2象征着二元性、伙伴关系和平衡。这个时刻提醒你，你独自一人时很强大，同时也强调了与他人联系的重要性。如果你经常看到这个时间，可能预示着是时候在生活中开始新的篇章或与他人建立更深的联系了。",
    },
    astrology: {
      tr: "Astrolojik açıdan 01:01, Güneş'in enerjisini taşır. Güneş, kişisel kimliğin, özgüvenin ve yaşam gücünün gezegenidir. Bu saat diliminde Ay'ın etkisi de hissedilir, çünkü gece saatleri Ay'ın hakimiyeti altındadır. Güneş ve Ay'ın bu kombinasyonu, bilinçaltınızla bilincinizin buluştuğu bir andır. Koç ve Aslan burçlarının enerjileriyle rezonansa girer - cesaret, tutku ve öne çıkma arzusu. Eğer aşk haritanızda bu burçlar güçlüyse, 01:01'i görmek sizin için özel bir anlam taşıyabilir. Bu saat aynı zamanda romantik bir bakışın, gizli bir hayranın ya da yeni bir aşkın habercisi olabilir.",
      en: "Astrologically, 01:01 carries the energy of the Sun. The Sun is the planet of personal identity, self-confidence, and life force. During this time, the influence of the Moon is also felt, as nighttime hours are under the Moon's dominion. This combination of Sun and Moon is a moment where your subconscious meets your conscious mind. It resonates with the energies of Aries and Leo - courage, passion, and the desire to stand out. If these signs are strong in your birth chart, seeing 01:01 might hold special meaning for you. This hour can also be a messenger of a romantic glance, a secret admirer, or new love.",
      zh: "从占星学角度来看，01:01承载着太阳的能量。太阳是个人身份、自信和生命力的行星。在这个时刻，月亮的影响也能感受到，因为夜晚时分处于月亮的统治之下。太阳和月亮的这种组合是你的潜意识与意识相遇的时刻。它与白羊座和狮子座的能量产生共鸣——勇气、激情和脱颖而出的渴望。如果这些星座在你的星盘中很强，看到01:01可能对你有特殊意义。这个时刻也可能是浪漫目光、秘密仰慕者或新爱情的信使。",
    },
    loveAndRelationships: {
      tr: "Aşk ve ilişkiler açısından 01:01, içinizde gizli duygular beslenen birinin varlığına işaret eder. Bu kişi size olan ilgisini henüz tam olarak göstermemiş olabilir, ancak sizi dikkatle izliyor ve düşünüyor. Eğer bir ilişkideyseniz, partneriniz sizi eskisinden daha farklı görmeye başlamış ve size karşı daha derin duygular beslemeye başlamış olabilir. Bekar iseniz, yakında hayatınıza girecek biri tarafından fark edildiğinizi bilmelisiniz. Bu saat aynı zamanda kendinizi ifade etmenin ve gerçek hislerinizi açıklamanın önemini vurgular. Sessiz kalmak yerine cesaretli olun ve kalbinizi konuşturun. İlişkilerde denge kurmak, hem vermek hem de almak önemlidir.",
      en: "In terms of love and relationships, 01:01 indicates the presence of someone who harbors secret feelings for you. This person may not have fully shown their interest yet, but they are carefully watching and thinking about you. If you're in a relationship, your partner may have started to see you differently and developed deeper feelings for you. If you're single, know that you're being noticed by someone who will soon enter your life. This hour also emphasizes the importance of expressing yourself and revealing your true feelings. Instead of staying silent, be courageous and let your heart speak. In relationships, finding balance is important - both giving and receiving matter.",
      zh: "在爱情和关系方面，01:01表明有人对你怀有秘密的感情。这个人可能还没有完全表现出他们的兴趣，但他们正在仔细观察和思念你。如果你正在恋爱中，你的伴侣可能开始以不同的方式看待你，并对你产生了更深的感情。如果你单身，要知道即将进入你生活的人已经注意到了你。这个时刻也强调了表达自己和透露真实感受的重要性。不要保持沉默，要勇敢地让你的心说话。在关系中找到平衡很重要——给予和接受都很重要。",
    },
    careerAndMoney: {
      tr: "Kariyer ve para konularında 01:01, liderlik pozisyonuna geçme ya da bir projede öne çıkma fırsatını işaret eder. Yetenekleriniz ve çalışmalarınız dikkat çekiyor, biri sizi yakından takip ediyor olabilir. Bu kişi bir yönetici, mentor ya da iş ortağı adayı olabilir. Finansal açıdan, yeni bir gelir kaynağı için doğru zamandır. Girişimcilik düşünüyorsanız ya da yan gelir elde etmek istiyorsanız, bu saat size cesaret veriyor. Ancak aceleci kararlar almaktan kaçının. Kendinize güvenin, ama aynı zamanda başkalarından da öğrenmeye açık olun. Ekip çalışması ve işbirlikleri bu dönemde size avantaj sağlayabilir.",
      en: "In career and money matters, 01:01 signals an opportunity to move into a leadership position or stand out in a project. Your talents and work are attracting attention, someone might be closely following you. This person could be a manager, mentor, or potential business partner. Financially, it's the right time for a new income source. If you're considering entrepreneurship or want to earn side income, this hour gives you courage. However, avoid making hasty decisions. Believe in yourself, but also remain open to learning from others. Teamwork and collaborations can give you an advantage during this period.",
      zh: "在职业和金钱事务上，01:01预示着进入领导职位或在项目中脱颖而出的机会。你的才能和工作正在吸引注意，可能有人在密切关注你。这个人可能是经理、导师或潜在的商业伙伴。在财务上，现在是寻找新收入来源的正确时机。如果你正在考虑创业或想赚取副业收入，这个时刻给你勇气。但是，避免做出仓促的决定。相信自己，但也要对向他人学习保持开放。团队合作和协作在这个时期可以给你带来优势。",
    },
    spiritualGuidance: {
      tr: "Ruhsal açıdan 01:01, evrenin size özel bir mesaj gönderdiği andır. Manevi rehberleriniz sizinle iletişim kurmaya çalışıyor. Bu saatte meditasyon yapmak, günlük tutmak ya da içsel yolculuğunuza zaman ayırmak çok faydalı olacaktır. Ayna saati görmek, senkronisitenin bir işaretidir - doğru yolda olduğunuzu ve desteklendiğinizi gösterir. Sezgilerinizi dinleyin, içinizden gelen ilk düşünce genellikle doğru olandır. Uyumadan önce şükran pratiği yapın, gün içinde yaşadığınız güzelliklere odaklanın. Pembe ya da kırmızı renkli mumlar yakarak çakranızı dengeleyebilir, gül kurusu ya da yasemin kokusu ile alanınızı temizleyebilirsiniz. Bu saat size 'görülüyorsun ve değerlisin' diyor.",
      en: "Spiritually, 01:01 is a moment when the universe sends you a special message. Your spiritual guides are trying to communicate with you. Meditating, journaling, or dedicating time to your inner journey at this hour will be very beneficial. Seeing mirror hours is a sign of synchronicity - it shows you're on the right path and supported. Listen to your intuition, the first thought that comes to you is usually the right one. Practice gratitude before sleeping, focus on the beautiful moments you experienced during the day. You can balance your chakra by lighting pink or red candles, and cleanse your space with rose or jasmine scents. This hour is telling you 'you are seen and you are valuable.'",
      zh: "在灵性层面上，01:01是宇宙向你发送特殊信息的时刻。你的灵性向导正试图与你沟通。在这个时刻冥想、写日记或专注于你的内在旅程将非常有益。看到镜像时间是同步性的标志——它表明你在正确的道路上并得到支持。倾听你的直觉，你脑海中浮现的第一个想法通常是正确的。睡前练习感恩，专注于你白天经历的美好时刻。你可以通过点燃粉色或红色蜡烛来平衡你的脉轮，用玫瑰或茉莉花香清洁你的空间。这个时刻在告诉你'你被看见了，你是有价值的'。",
    },
    actionSteps: {
      tr: "• Bugün kendinize dair olumlu bir şey söyleyin - aynada kendinize gülümseyin\n• Sizi düşündüğünü hissettiğiniz kişiye bir mesaj gönderin, ilk adımı atmaktan çekinmeyin\n• Bir kağıda 'Ben değerliyim ve görülmeyi hak ediyorum' yazın ve görünür bir yere koyun\n• Pembe ya da kırmızı tonlarda bir şeyler giyin, bu renkler dikkat çekme enerjisini artırır\n• Bir şükür listesi yapın - sizi seven ve fark eden insanlar için minnet duygusunu hissedin\n• Yeni bir beceri öğrenmeye başlayın ya da bir hobiye zaman ayırın, kendinize yatırım yapın",
      en: "• Say something positive about yourself today - smile at yourself in the mirror\n• Send a message to the person you feel is thinking about you, don't hesitate to take the first step\n• Write 'I am valuable and deserve to be seen' on a paper and place it somewhere visible\n• Wear something in pink or red tones, these colors increase attention-drawing energy\n• Make a gratitude list - feel thankful for people who love and notice you\n• Start learning a new skill or dedicate time to a hobby, invest in yourself",
      zh: "• 今天对自己说一些积极的话——在镜子里对自己微笑\n• 给你觉得在想你的人发一条消息，不要犹豫迈出第一步\n• 在纸上写'我是有价值的，值得被看见'并放在显眼的地方\n• 穿粉色或红色调的衣服，这些颜色增加吸引注意力的能量\n• 列一个感恩清单——为爱你和注意你的人感到感激\n• 开始学习新技能或投入时间到爱好中，投资自己",
    },
  },
  {
    time: "02:02",
    title: {
      tr: "Sessiz sevgi",
      en: "Silent love",
      zh: "无声的爱",
    },
    meaning: {
      tr: "Birinin sana karşı hisleri var ama bunları açıkça dile getiremiyor. Kalbindeki sessizliği hissetmeye çalış.",
      en: "Someone has feelings for you but can't express them openly. Try to feel the silence in their heart.",
      zh: "有人对你有感情，但无法公开表达。试着感受他们心中的沉默。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "02:02, 2 rakamının dört kez tekrarlanmasıyla oluşan, son derece hassas ve dişil bir enerjiye sahiptir. 2 sayısı işbirliği, diplomasi, sezgi ve duyarlılığı temsil eder. Toplamı 4 (2+2=4) olan bu saat, aynı zamanda pratiklik ve düzen arayışını da simgeler. Bu saat, ikili ilişkilerde dengeyi bulma ve çatışmaları çözme zamanının geldiğini gösterir. Empati yeteneğinizin zirve yaptığı bir andır. Karşınızdaki kişinin söyleyemediklerini duyabilme kapasitesine sahipsiniz.",
      en: "02:02 possesses an extremely sensitive and feminine energy, formed by the repetition of the number 2 four times. The number 2 represents cooperation, diplomacy, intuition, and sensitivity. With a sum of 4 (2+2=4), this hour also symbolizes practicality and the search for order. This hour indicates that it's time to find balance in relationships and resolve conflicts. It's a moment when your empathy skills are at their peak. You have the capacity to hear what the person in front of you cannot say.",
      zh: "02:02拥有极其敏感和阴柔的能量，由数字2重复四次形成。数字2代表合作、外交、直觉和敏感性。总和为4（2+2=4）的这个时刻也象征着实用性和对秩序的追求。这个时刻表明是时候在关系中找到平衡并解决冲突了。这是你的同理心技能达到顶峰的时刻。你有能力听到对方无法说出的话。",
    },
    astrology: {
      tr: "Astrolojik olarak 02:02, Ay ve Venüs'ün yumuşak etkileşimini yansıtır. Yengeç ve Terazi burçlarının enerjisiyle rezonansa girer. Yengeç koruyuculuğu ve duygusallığı, Terazi ise uyumu ve estetiği getirir. Bu saatte sezgileriniz çok açıktır. Rüyalarınız haberci olabilir. Eğer haritanızda su grubu burçları (Yengeç, Akrep, Balık) baskınsa, bu saati gördüğünüzde psişik yetenekleriniz artabilir. Duygusal derinleşme ve içsel huzur için mükemmel bir zamandır.",
      en: "Astrologically, 02:02 reflects the soft interaction of the Moon and Venus. It resonates with the energies of Cancer and Libra. Cancer brings protectiveness and emotionality, while Libra brings harmony and aesthetics. Your intuition is very open at this hour. Your dreams can be messengers. If water signs (Cancer, Scorpio, Pisces) are dominant in your chart, your psychic abilities may increase when you see this hour. It is an excellent time for emotional deepening and inner peace.",
      zh: "从占星学角度来看，02:02反映了月亮和金星的柔和互动。它与巨蟹座和天秤座的能量产生共鸣。巨蟹座带来保护性和情感性，而天秤座带来和谐和美学。你的直觉在这个时刻非常开放。你的梦可能是信使。如果水象星座（巨蟹座、天蝎座、双鱼座）在你的星盘中占主导，当你看到这个时刻时，你的灵媒能力可能会增强。这是情感加深和内在平静的绝佳时刻。",
    },
    loveAndRelationships: {
      tr: "Aşkta 02:02, gizli kalmış duyguların ve platonik aşkların saatidir. Biri sizi uzaktan seviyor olabilir. Eğer bir ilişkiniz varsa, partnerinizle telepatik bir bağ kurabilirsiniz. Birbirinizi düşünmeden arayabilir ya da aynı anda aynı şeyi söyleyebilirsiniz. Bu saat, ilişkideki sorunları konuşmadan, sadece hissederek çözebileceğiniz bir frekans sunar. Bekar iseniz, nazik ve anlayışlı biriyle tanışma ihtimaliniz yüksektir. Bu kişi ruhunuzu okşayacak bir yapıya sahip olacaktır.",
      en: "In love, 02:02 is the hour of hidden feelings and platonic loves. Someone might be loving you from afar. If you are in a relationship, you can establish a telepathic bond with your partner. You might call each other without thinking or say the same thing at the same time. This hour offers a frequency where you can resolve relationship issues just by feeling, without speaking. If you are single, there is a high chance of meeting someone gentle and understanding. This person will have a nature that soothes your soul.",
      zh: "在爱情中，02:02是隐藏情感和柏拉图式爱情的时刻。可能有人在远处爱着你。如果你正在恋爱中，你可以与伴侣建立心灵感应的联系。你们可能不约而同地互相给对方打电话，或同时说同样的话。这个时刻提供了一种频率，让你可以不用说话，只需通过感受就能解决关系问题。如果你单身，很有可能遇到一个温柔体贴的人。这个人将拥有安抚你灵魂的天性。",
    },
    careerAndMoney: {
      tr: "Kariyerde 02:02, işbirliği ve ortaklıkların önemini vurgular. Tek başınıza hareket etmek yerine, başkalarından destek almalısınız. Bir ekip çalışması size başarı getirecektir. Finansal konularda, sezgilerinize güvenin ama mantığı elden bırakmayın. Bir sözleşme ya da anlaşma yapacaksanız, detayları iyi inceleyin. Bu saat, diplomatik yeteneklerinizi kullanarak iş yerindeki gerginlikleri çözebileceğiniz bir zamandır.",
      en: "In career, 02:02 emphasizes the importance of cooperation and partnerships. Instead of acting alone, you should seek support from others. Teamwork will bring you success. In financial matters, trust your intuition but don't abandon logic. If you are going to make a contract or agreement, examine the details well. This hour is a time when you can resolve tensions in the workplace using your diplomatic skills.",
      zh: "在职业方面，02:02强调合作和伙伴关系的重要性。不要单独行动，你应该寻求他人的支持。团队合作将带给你成功。在财务事务上，相信你的直觉，但不要放弃逻辑。如果你要签订合同或协议，要仔细检查细节。这个时刻是你可以运用外交技巧解决工作场所紧张局势的时候。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 02:02, iç sesinizi dinlemeniz gerektiğini söyler. Melekleriniz size 'sabırlı ol, her şey yoluna girecek' mesajını veriyor. Bu saatte meditasyon yapmak, özellikle kalp çakrasını şifalandırmak için çok etkilidir. Ay taşı veya selenit kullanarak enerjinizi dengeleyebilirsiniz. Su ile temas etmek (duş almak, su içmek) bu saatin enerjisini aktive eder.",
      en: "Spiritually, 02:02 tells you to listen to your inner voice. Your angels are giving you the message 'be patient, everything will be fine.' Meditating at this hour is very effective, especially for healing the heart chakra. You can balance your energy using moonstone or selenite. Contact with water (taking a shower, drinking water) activates the energy of this hour.",
      zh: "在灵性层面上，02:02告诉你要倾听内在的声音。你的天使正在给你传递信息'耐心一点，一切都会好起来的'。在这个时刻冥想非常有效，尤其是为了治愈心轮。你可以使用月光石或透石膏来平衡你的能量。与水接触（洗澡、喝水）激活这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Bir bardak su için ve niyetinizi suya fısıldayın\n• Sevdiğiniz birine sebepsizce güzel bir mesaj atın\n• Rüyalarınızı not etmek için başucunuza bir defter koyun\n• Gümüş takılar takın, Ay enerjisini çeker\n• Bir sorununuz varsa, uyumadan önce cevabını rüyanızda görmeye niyet edin",
      en: "• Drink a glass of water and whisper your intention into the water\n• Send a nice message to a loved one for no reason\n• Put a notebook by your bedside to record your dreams\n• Wear silver jewelry, it attracts Moon energy\n• If you have a problem, intend to see the answer in your dream before sleeping",
      zh: "• 喝一杯水，对着水轻声说出你的意图\n• 无缘无故地给所爱的人发一条美好的消息\n• 在床头放一个笔记本来记录你的梦\n• 佩戴银饰，它吸引月亮能量\n• 如果你有问题，睡前意图在梦中看到答案",
    },
  },
  {
    time: "03:03",
    title: {
      tr: "Zihninde sen varsın",
      en: "You're on their mind",
      zh: "你在他们的脑海中",
    },
    meaning: {
      tr: "Seni sürekli düşünen biri var, özellikle geceleri. Bu bağ düşündüğünden daha derin olabilir.",
      en: "Someone is constantly thinking about you, especially at night. This connection might be deeper than you think.",
      zh: "有人一直在想你，尤其是在晚上。这种联系可能比你想象的更深。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "03:03, 3 rakamının enerjisini taşır. 3, iletişim, yaratıcılık, sosyal ilişkiler ve kendini ifade etmeyi simgeler. Toplamı 6 (3+3=6) olan bu saat, aynı zamanda aile, sevgi ve sorumluluk temalarını gündeme getirir. Bu saat, düşüncelerinizin ve sözlerinizin yaratıcı gücüne dikkat çeker. İletişim kanallarının açık olduğu, kendinizi ifade etmenin kolaylaştığı bir zamandır.",
      en: "03:03 carries the energy of the number 3. 3 symbolizes communication, creativity, social relationships, and self-expression. With a sum of 6 (3+3=6), this hour also brings up themes of family, love, and responsibility. This hour draws attention to the creative power of your thoughts and words. It is a time when communication channels are open and expressing yourself becomes easier.",
      zh: "03:03 承载着数字 3 的能量。3 象征着沟通、创造力、社会关系和自我表达。这个时刻的总和为 6（3+3=6），同时也带来了家庭、爱和责任的主题。这个时刻让你注意到思想和语言的创造力。这是一个沟通渠道畅通、自我表达变得更容易的时刻。",
    },
    astrology: {
      tr: "Astrolojik olarak 03:03, Merkür ve Jüpiter etkisindedir. Merkür iletişimi, Jüpiter ise genişlemeyi ve şansı temsil eder. İkizler ve Yay burçlarının enerjisiyle uyumludur. Bu saatte zihniniz çok aktiftir, fikirler havada uçuşur. Telepatik iletişim için en güçlü saatlerden biridir. Eğer birini düşünüyorsanız, o da sizi düşünüyor olabilir.",
      en: "Astrologically, 03:03 is under the influence of Mercury and Jupiter. Mercury represents communication, while Jupiter represents expansion and luck. It is compatible with the energies of Gemini and Sagittarius. At this hour, your mind is very active, ideas are flying around. It is one of the strongest hours for telepathic communication. If you are thinking of someone, they might be thinking of you too.",
      zh: "从占星学角度来看，03:03 受水星和木星的影响。水星代表沟通，而木星代表扩张和幸运。它与双子座和射手座的能量相容。在这个时刻，你的思维非常活跃，各种想法在飞扬。这是心灵感应沟通最强的时刻之一。如果你在想某人，他们可能也在想你。",
    },
    loveAndRelationships: {
      tr: "Aşkta 03:03, iletişimin önemini vurgular. Partnerinizle konuşmanız gereken konular varsa, şimdi tam zamanı. Yanlış anlaşılmaların çözülebileceği bir andır. Bekar iseniz, sosyal çevrenizden biriyle yakınlaşabilirsiniz. Bu kişiyle sohbet etmekten büyük keyif alacaksınız. Zihinsel uyumun ön planda olduğu bir ilişki başlayabilir.",
      en: "In love, 03:03 emphasizes the importance of communication. If there are issues you need to discuss with your partner, now is the time. It is a moment when misunderstandings can be resolved. If you are single, you might get closer to someone from your social circle. You will enjoy chatting with this person very much. A relationship where mental compatibility is at the forefront may begin.",
      zh: "在爱情中，03:03 强调沟通的重要性。如果你有需要与伴侣讨论的问题，现在正是时候。这是一个可以消除误解的时刻。如果你单身，你可能会与社交圈中的某人走得更近。你会非常享受与这个人的聊天。一段以精神契合为重点的关系可能会开始。",
    },
    careerAndMoney: {
      tr: "Kariyerde 03:03, yaratıcı projeler ve iletişim odaklı işler için harikadır. Yazarlık, pazarlama, öğretim gibi alanlarda başarı vaat eder. Yeni fikirlerinizi paylaşmaktan çekinmeyin. İş seyahatleri gündeme gelebilir. Finansal olarak, iletişim becerilerinizi kullanarak kazanç elde edebilirsiniz.",
      en: "In career, 03:03 is great for creative projects and communication-focused jobs. It promises success in fields like writing, marketing, and teaching. Don't hesitate to share your new ideas. Business trips may come up. Financially, you can earn income by using your communication skills.",
      zh: "在职业方面，03:03 非常适合创意项目和以沟通为重点的工作。它预示着在写作、市场营销和教学等领域的成功。不要犹豫分享你的新想法。商务旅行可能会出现。在财务上，你可以通过利用沟通技巧获得收入。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 03:03, Yükselmiş Üstatların (Ascended Masters) sizinle olduğunu gösterir. Onlardan rehberlik isteyebilirsiniz. Boğaz çakrası ile ilişkilidir; doğrularınızı söylemekten korkmayın. Mavi renkli taşlar (lapis lazuli, akuamarin) bu saatin enerjisini destekler.",
      en: "Spiritually, 03:03 shows that the Ascended Masters are with you. You can ask them for guidance. It is associated with the throat chakra; don't be afraid to speak your truth. Blue stones (lapis lazuli, aquamarine) support the energy of this hour.",
      zh: "在灵性层面上，03:03 表明扬升大师（Ascended Masters）与你同在。你可以向他们寻求指引。它与喉轮有关；不要害怕说出你的真理。蓝色宝石（青金石、海蓝宝）支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Aklınıza gelen ilk kişiyi arayın veya mesaj atın\n• Yaratıcı bir şeyler yazın veya çizin\n• Mavi bir mum yakın ve boğaz çakranıza odaklanın\n• 'Ben kendimi özgürce ifade ediyorum' olumlamasını yapın\n• Sosyal bir etkinliğe katılın veya plan yapın",
      en: "• Call or message the first person that comes to mind\n• Write or draw something creative\n• Light a blue candle and focus on your throat chakra\n• Affirm 'I express myself freely'\n• Join a social event or make a plan",
      zh: "• 给脑海中出现的第一个人打电话或发信息\n• 写下或画出一些有创意的东西\n• 点燃蓝色蜡烛并专注于你的喉轮\n• 肯定'我自由地表达自己'\n• 参加社交活动或制定计划",
    },
  },
  {
    time: "04:04",
    title: {
      tr: "Koruyucu enerjiler aktif",
      en: "Protective energies active",
      zh: "保护能量活跃",
    },
    meaning: {
      tr: "Hayatında görünmeyen ama güçlü bir koruyucu enerji seni izliyor. Ruhsal destek sana çok yakın.",
      en: "An invisible but strong protective energy is watching over you. Spiritual support is very close to you.",
      zh: "一股看不见但强大的保护能量正在注视着你。精神支持离你很近。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "04:04, 4 rakamının istikrar, düzen ve güven enerjisini taşır. Toplamı 8 (4+4=8) olan bu saat, maddi ve manevi dengenin, gücün ve başarının habercisidir. 4 sayısı aynı zamanda dört elementi (ateş, su, hava, toprak) ve dört yönü temsil eder. Hayatınızda sağlam temeller atma zamanıdır. Disiplinli çalışmanın ödüllerini alacağınız bir dönemdesiniz.",
      en: "04:04 carries the energy of stability, order, and trust of the number 4. With a sum of 8 (4+4=8), this hour is a harbinger of material and spiritual balance, power, and success. The number 4 also represents the four elements (fire, water, air, earth) and the four directions. It is time to lay solid foundations in your life. You are in a period where you will receive the rewards of disciplined work.",
      zh: "04:04 承载着数字 4 的稳定、秩序和信任的能量。这个时刻的总和为 8（4+4=8），是物质和精神平衡、力量和成功的预兆。数字 4 也代表四元素（火、水、风、土）和四个方向。现在是在生活中打下坚实基础的时候。你正处于将获得纪律严明工作回报的时期。",
    },
    astrology: {
      tr: "Astrolojik olarak 04:04, Satürn ve Uranüs etkisindedir. Satürn disiplini, Uranüs ise değişimi getirir. Kova ve Oğlak burçlarının enerjisiyle uyumludur. Bu saat, hayatınızdaki yapıları gözden geçirmeniz ve gerekirse yeniden inşa etmeniz gerektiğini söyler. Doğayla bağlantı kurmak bu saatte size iyi gelecektir.",
      en: "Astrologically, 04:04 is under the influence of Saturn and Uranus. Saturn brings discipline, while Uranus brings change. It is compatible with the energies of Aquarius and Capricorn. This hour tells you to review the structures in your life and rebuild them if necessary. Connecting with nature will be good for you at this hour.",
      zh: "从占星学角度来看，04:04 受土星和天王星的影响。土星带来纪律，而天王星带来变化。它与水瓶座和摩羯座的能量相容。这个时刻告诉你审视生活中的结构，必要时进行重建。在这个时刻与大自然联系对你有好处。",
    },
    loveAndRelationships: {
      tr: "Aşkta 04:04, güven ve sadakatin önemini vurgular. İlişkinizde sağlam bir temel oluşturmak için çalışmalısınız. Geçici hevesler yerine uzun vadeli bağlara odaklanın. Eğer bir sorununuz varsa, bunu olgunlukla ve sabırla çözebilirsiniz. Bekar iseniz, size güven verecek, ayakları yere basan biriyle tanışabilirsiniz.",
      en: "In love, 04:04 emphasizes the importance of trust and loyalty. You should work to build a solid foundation in your relationship. Focus on long-term bonds instead of temporary whims. If you have a problem, you can solve it with maturity and patience. If you are single, you might meet someone grounded who will give you confidence.",
      zh: "在爱情中，04:04 强调信任和忠诚的重要性。你应该努力在关系中建立坚实的基础。专注于长期的纽带，而不是暂时的心血来潮。如果你有问题，可以用成熟和耐心来解决。如果你单身，你可能会遇到一个脚踏实地、能给你信心的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 04:04, sıkı çalışmanın ve organizasyonun zamanıdır. İşlerinizi düzene koyun, planlı hareket edin. Finansal olarak yatırım yapmak, birikim yapmak için uygun bir zamandır. Gayrimenkul veya toprakla ilgili işler şanslı olabilir. Sabırlı olun, başarınız kalıcı olacaktır.",
      en: "In career, 04:04 is the time for hard work and organization. Organize your work, act according to plan. Financially, it is a suitable time to invest and save. Real estate or land-related businesses can be lucky. Be patient, your success will be lasting.",
      zh: "在职业方面，04:04 是努力工作和组织的时候。整理你的工作，按计划行事。在财务上，这是投资和储蓄的合适时机。房地产或土地相关的业务可能会很幸运。要有耐心，你的成功将是持久的。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 04:04, doğa ruhları ve elementlerle bağlantı kurma zamanıdır. Kök çakranızla ilgilidir; topraklanma çalışmaları yapın. Doğada yürüyüş yapmak, ağaçlara dokunmak enerjinizi dengeler. Yeşil ve kahverengi tonları bu saatin enerjisini yükseltir.",
      en: "Spiritually, 04:04 is the time to connect with nature spirits and elements. It is related to your root chakra; do grounding exercises. Walking in nature, touching trees balances your energy. Green and brown tones are the colors of this hour.",
      zh: "在灵性层面上，04:04 是与自然精灵和元素连接的时刻。它与你的根轮有关；做接地练习。在大自然中散步、触摸树木可以平衡你的能量。绿色和棕色色调是这个时刻的颜色。",
    },
    actionSteps: {
      tr: "• Çıplak ayakla toprağa basın veya bir ağaca sarılın\n• Evinizi veya çalışma masanızı düzenleyin\n• Finansal hedeflerinizi bir kağıda yazın\n• Yeşil bir bitki edinin ve bakımını üstlenin\n• 'Ben güvendeyim ve destekleniyorum' olumlamasını yapın",
      en: "• Step on the soil with bare feet or hug a tree\n• Organize your home or desk\n• Write your financial goals on a paper\n• Get a green plant and take care of it\n• Affirm 'I am safe and supported'",
      zh: "• 赤脚踩在泥土上或拥抱一棵树\n• 整理你的家或办公桌\n• 在纸上写下你的财务目标\n• 养一株绿色植物并照顾它\n• 肯定'我很安全且受到支持'",
    },
  },
  {
    time: "05:05",
    title: {
      tr: "Geçmiş kapıyı çalabilir",
      en: "The past may knock",
      zh: "过去可能会敲门",
    },
    meaning: {
      tr: "Eski bir tanıdık ya da aşktan haber alabilirsin. Bu karşılaşma seni düşündürecek.",
      en: "You might hear from an old acquaintance or love. This encounter will make you think.",
      zh: "你可能会收到旧相识或旧爱的消息。这次相遇会让你深思。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "05:05, 5 rakamının değişim, özgürlük ve macera enerjisini taşır. Toplamı 1 (5+5=10 -> 1+0=1) olan bu saat, yeni başlangıçları ve bireyselliği de simgeler. Hayatınızda bir döngünün kapandığını ve yenisinin başladığını gösterir. Enerjiniz yüksektir, yerinizde duramazsınız. Seyahatler, yeni deneyimler ve sürprizler kapıdadır.",
      en: "05:05 carries the energy of change, freedom, and adventure of the number 5. With a sum of 1 (5+5=10 -> 1+0=1), this hour also symbolizes new beginnings and individuality. It shows that a cycle in your life is closing and a new one is beginning. Your energy is high, you can't stand still. Travels, new experiences, and surprises are at the door.",
      zh: "05:05 承载着数字 5 的变化、自由和冒险的能量。这个时刻的总和为 1（5+5=10 -> 1+0=1），也象征着新的开始和个性。它表明你生命中的一个循环正在结束，一个新的循环正在开始。你的能量很高，无法停滞不前。旅行、新体验和惊喜就在门口。",
    },
    astrology: {
      tr: "Astrolojik olarak 05:05, Merkür ve Mars etkisindedir. Hızlı düşünme, hızlı hareket etme ve cesaret verir. İkizler ve Koç burçlarının enerjisiyle uyumludur. Bu saatte ani kararlar alabilirsiniz. İletişim trafiğiniz artabilir. Geçmişten gelen haberler, Merkür retrosu etkisine benzer şekilde gündeme gelebilir.",
      en: "Astrologically, 05:05 is under the influence of Mercury and Mars. It gives quick thinking, quick action, and courage. It is compatible with the energies of Gemini and Aries. You might make sudden decisions at this hour. Your communication traffic may increase. News from the past may come up, similar to the Mercury retrograde effect.",
      zh: "从占星学角度来看，05:05 受水星和火星的影响。它赋予快速思考、快速行动和勇气。它与双子座和白羊座的能量相容。你可能会在这个时刻做出突然的决定。你的沟通量可能会增加。来自过去的消息可能会出现，类似于水星逆行的影响。",
    },
    loveAndRelationships: {
      tr: "Aşkta 05:05, heyecan ve tutku arayışını gösterir. İlişkinizde monotonluktan sıkılmış olabilirsiniz; yenilik yapma zamanı. Eski sevgililer bu dönemde geri dönebilir, ancak dikkatli olun; geçmişi tekrar etmek yerine ders alıp ilerlemek daha iyidir. Bekar iseniz, sizi heyecanlandıracak, sıra dışı biriyle tanışabilirsiniz.",
      en: "In love, 05:05 shows the search for excitement and passion. You might be bored with monotony in your relationship; it's time to innovate. Ex-lovers may return during this period, but be careful; it is better to learn lessons and move forward instead of repeating the past. If you are single, you might meet someone unusual who will excite you.",
      zh: "在爱情中，05:05 显示了对兴奋和激情的追求。你可能厌倦了关系中的单调；是时候进行创新了。前任可能会在这个时期回来，但要小心；吸取教训并继续前进比重复过去要好。如果你单身，你可能会遇到一个让你兴奋的不寻常的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 05:05, değişiklik yapma isteğini tetikler. İş değiştirmek, yeni bir projeye başlamak veya farklı bir alana yönelmek isteyebilirsiniz. Pazarlama, satış, turizm gibi hareketli sektörlerde şanslısınız. Risk alma eğiliminiz artabilir, ancak hesaplı riskler alın.",
      en: "In career, 05:05 triggers the desire to make changes. You might want to change jobs, start a new project, or turn to a different field. You are lucky in active sectors like marketing, sales, and tourism. Your tendency to take risks may increase, but take calculated risks.",
      zh: "在职业方面，05:05 触发了做出改变的愿望。你可能想换工作、开始新项目或转向不同的领域。你在市场营销、销售和旅游等活跃行业中很幸运。你冒险的倾向可能会增加，但要承担经过计算的风险。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 05:05, özgürleşme zamanıdır. Sizi kısıtlayan inançlardan, bağımlılıklardan kurtulun. Meditasyon yaparken hareketli teknikleri (dans, yürüyüş meditasyonu) deneyebilirsiniz. Turuncu renk ve karnelyan taşı bu saatin enerjisini dengeler.",
      en: "Spiritually, 05:05 is the time for liberation. Get rid of limiting beliefs and addictions. You can try active techniques (dance, walking meditation) while meditating. Orange color and carnelian stone balance the energy of this hour.",
      zh: "在灵性层面上，05:05 是解放的时刻。摆脱限制你的信念和成瘾。你可以在冥想时尝试动态技巧（舞蹈、行走冥想）。橙色和红玉髓平衡这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Rutininizi bozacak bir şey yapın\n• Uzun zamandır gitmediğiniz bir yere gidin\n• Eski bir arkadaşınızı arayın\n• Turuncu bir kıyafet veya aksesuar kullanın\n• 'Ben değişime ve yeniliklere açığım' olumlamasını yapın",
      en: "• Do something that breaks your routine\n• Go to a place you haven't been to for a long time\n• Call an old friend\n• Use an orange outfit or accessory\n• Affirm 'I am open to change and innovation'",
      zh: "• 做一些打破你常规的事情\n• 去一个你很久没去过的地方\n• 给老朋友打电话\n• 使用橙色的衣服或配饰\n• 肯定'我对变化和创新持开放态度'",
    },
  },
  {
    time: "06:06",
    title: {
      tr: "Duygusal bağ güçleniyor",
      en: "Emotional bond strengthening",
      zh: "情感纽带正在加强",
    },
    meaning: {
      tr: "Aile içindeki ya da romantik bir ilişkide duygusal derinlik artıyor. Kalbinle konuşmanın tam zamanı.",
      en: "Emotional depth is increasing in a family or romantic relationship. It's time to listen to your heart.",
      zh: "家庭内部或浪漫关系中的情感深度正在增加。是时候倾听你的心声了。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "06:06, 6 rakamının sevgi, uyum, aile ve sorumluluk enerjisini taşır. Toplamı 3 (6+6=12 -> 1+2=3) olan bu saat, iletişimin ve yaratıcılığın sevgiyle birleştiği bir noktadır. Evrensel sevgi, şefkat ve hizmet etme arzusu ön plandadır. Bu saat, kendinizi ve başkalarını koşulsuz sevme dersini hatırlatır.",
      en: "06:06 carries the energy of love, harmony, family, and responsibility of the number 6. With a sum of 3 (6+6=12 -> 1+2=3), this hour is a point where communication and creativity merge with love. Universal love, compassion, and the desire to serve are at the forefront. This hour reminds you of the lesson of loving yourself and others unconditionally.",
      zh: "06:06 承载着数字 6 的爱、和谐、家庭和责任的能量。这个时刻的总和为 3（6+6=12 -> 1+2=3），是沟通与创造力同爱融合的点。普遍的爱、同情和服务愿望处于前沿。这个时刻提醒你无条件地爱自己和他人的课题。",
    },
    astrology: {
      tr: "Astrolojik olarak 06:06, Venüs ve Jüpiter'in koruyucu etkisindedir. Boğa ve Terazi burçlarının enerjisiyle uyumludur. Güzellik, sanat ve estetik konuları gündeme gelir. Evinizde dekorasyon değişikliği yapmak, kendinize bakım yapmak için harika bir zamandır. İlişkilerde iyileşme ve şifalanma enerjisi hakimdir.",
      en: "Astrologically, 06:06 is under the protective influence of Venus and Jupiter. It is compatible with the energies of Taurus and Libra. Beauty, art, and aesthetic issues come up. It is a great time to make decoration changes in your home and take care of yourself. Healing and recovery energy prevails in relationships.",
      zh: "从占星学角度来看，06:06 受金星和木星的保护性影响。它与金牛座和天秤座的能量相容。美、艺术和审美问题会出现。这是在家中进行装饰改变和照顾自己的绝佳时机。关系中充满着治愈和恢复的能量。",
    },
    loveAndRelationships: {
      tr: "Aşkta 06:06, uyum ve denge arayışıdır. Partnerinizle romantik anlar yaşayabilir, birbirinize olan sevginizi tazeleyebilirsiniz. Ailevi sorunlar varsa, bunları sevgiyle çözebilirsiniz. Bekar iseniz, sanatsal yönü güçlü, nazik biriyle tanışabilirsiniz. Evlilik veya nişan gibi ciddi adımlar için uygun bir saattir.",
      en: "In love, 06:06 is the search for harmony and balance. You can experience romantic moments with your partner and refresh your love for each other. If there are family problems, you can solve them with love. If you are single, you might meet someone gentle with a strong artistic side. It is a suitable hour for serious steps like marriage or engagement.",
      zh: "在爱情中，06:06 是寻求和谐与平衡。你可以与伴侣度过浪漫时刻，重温彼此的爱。如果有家庭问题，你可以用爱来解决。如果你单身，你可能会遇到一个温柔且具有强烈艺术气息的人。这是结婚或订婚等严肃步骤的合适时刻。",
    },
    careerAndMoney: {
      tr: "Kariyerde 06:06, hizmet odaklı işlerde başarı getirir. Sağlık, eğitim, danışmanlık veya sanat alanlarında çalışıyorsanız verimli bir dönemdesiniz. İş ortamında huzuru sağlamak, çalışma arkadaşlarınızla iyi ilişkiler kurmak size kazanç sağlayacaktır.",
      en: "In career, 06:06 brings success in service-oriented jobs. If you work in health, education, consulting, or art fields, you are in a productive period. Ensuring peace in the work environment and establishing good relationships with your colleagues will bring you profit.",
      zh: "在职业方面，06:06 在服务导向的工作中带来成功。如果你在健康、教育、咨询或艺术领域工作，你正处于一个多产时期。确保工作环境的和平并与同事建立良好关系将为你带来收益。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 06:06, kalp çakrasını açma zamanıdır. Kendinizi affedin, başkalarını affedin. Sevgi frekansında kalın. Gül kuvars veya zümrüt taşı kullanmak kalbinizi şifalandırır. Pembe ve yeşil renkleri bu saatin enerjisini yükseltir.",
      en: "Spiritually, 06:06 is the time to open the heart chakra. Forgive yourself, forgive others. Stay in the frequency of love. Using rose quartz or emerald stone heals your heart. Pink and green colors raise the energy of this hour.",
      zh: "在灵性层面上，06:06 是打开心轮的时刻。原谅自己，原谅他人。保持在爱的频率中。使用粉晶或祖母绿可以治愈你的心。粉色和绿色提升这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Kendinize veya bir başkasına çiçek alın\n• Evinizde güzel bir köşe hazırlayın\n• Sevdiğiniz bir şarkıyı dinleyin ve eşlik edin\n• 'Ben sevgiyi hak ediyorum ve sevgiyi çekiyorum' olumlamasını yapın\n• Birine yardım edin veya bağış yapın",
      en: "• Buy flowers for yourself or someone else\n• Prepare a beautiful corner in your home\n• Listen to a favorite song and sing along\n• Affirm 'I deserve love and I attract love'\n• Help someone or make a donation",
      zh: "• 给自己或别人买花\n• 在家里布置一个美丽的角落\n• 听一首喜欢的歌并跟着唱\n• 肯定'我值得爱，我吸引爱'\n• 帮助某人或捐款",
    },
  },
  {
    time: "07:07",
    title: {
      tr: "Şans kapıda",
      en: "Luck is at your door",
      zh: "好运临门",
    },
    meaning: {
      tr: "Evren sana şansını denemen için bir kapı açıyor. Yeni bir iş, teklif ya da tanışma mümkün.",
      en: "The universe is opening a door for you to try your luck. A new job, offer, or meeting is possible.",
      zh: "宇宙正在为你打开一扇尝试运气的门。可能会有新工作、新提议或新相遇。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "07:07, 7 rakamının mistik, ruhani ve entelektüel enerjisini taşır. 7, bilgeliği, içsel keşfi ve şansı simgeler. Toplamı 14 (7+7=14 -> 1+4=5) olan bu saat, aynı zamanda değişim ve özgürlük enerjisiyle de bağlantılıdır. Zihinsel ve ruhsal uyanışın birleştiği bir noktadasınız. Evrenin gizemlerini çözmeye ve kendi gerçeğinizi bulmaya yakınsınız.",
      en: "07:07 carries the mystical, spiritual, and intellectual energy of the number 7. 7 symbolizes wisdom, inner discovery, and luck. With a sum of 14 (7+7=14 -> 1+4=5), this hour is also connected to the energy of change and freedom. You are at a point where mental and spiritual awakening merge. You are close to solving the mysteries of the universe and finding your own truth.",
      zh: "07:07 承载着数字 7 的神秘、灵性和智慧能量。7 象征着智慧、内在探索和运气。这个时刻的总和为 14（7+7=14 -> 1+4=5），也与变化和自由的能量相连。你正处于精神和灵性觉醒融合的点。你已接近解开宇宙的奥秘并找到自己的真理。",
    },
    astrology: {
      tr: "Astrolojik olarak 07:07, Neptün ve Uranüs etkisindedir. Balık ve Kova burçlarının enerjisiyle uyumludur. Sezgileriniz ve hayal gücünüz çok güçlüdür. Bu saatte ilham perileri sizi ziyaret edebilir. Sanatsal veya bilimsel bir buluş yapabilirsiniz. Spiritüel konulara ilginiz artabilir.",
      en: "Astrologically, 07:07 is under the influence of Neptune and Uranus. It is compatible with the energies of Pisces and Aquarius. Your intuition and imagination are very strong. Muses may visit you at this hour. You might make an artistic or scientific discovery. Your interest in spiritual matters may increase.",
      zh: "从占星学角度来看，07:07 受海王星和天王星的影响。它与双子座和水瓶座的能量相容。你的直觉和想象力非常强。缪斯女神可能会在这个时刻拜访你。你可能会有艺术或科学上的发现。你对灵性事务的兴趣可能会增加。",
    },
    loveAndRelationships: {
      tr: "Aşkta 07:07, ruhsal bağların ve derin sohbetlerin zamanıdır. Partnerinizle felsefi konuları konuşabilir, birbirinizin zihnini keşfedebilirsiniz. Yüzeysel ilişkiler sizi tatmin etmez. Bekar iseniz, zekasıyla sizi etkileyecek, gizemli biriyle tanışabilirsiniz. Bu kişi size farklı bakış açıları kazandıracaktır.",
      en: "In love, 07:07 is the time for spiritual bonds and deep conversations. You can discuss philosophical topics with your partner and explore each other's minds. Superficial relationships do not satisfy you. If you are single, you might meet someone mysterious who will impress you with their intelligence. This person will give you different perspectives.",
      zh: "在爱情中，07:07 是精神纽带和深度对话的时刻。你可以与伴侣讨论哲学话题，探索彼此的思想。肤浅的关系无法满足你。如果你单身，你可能会遇到一个神秘的人，通过他们的智慧打动你。这个人会给你带来不同的视角。",
    },
    careerAndMoney: {
      tr: "Kariyerde 07:07, araştırma, analiz ve eğitim konularında başarı getirir. Akademik çalışmalar, yazılım veya strateji geliştirme işleri için uygundur. Şans faktörü yanınızdadır; beklemediğiniz bir yerden teklif alabilirsiniz. Finansal olarak, bilgiye yatırım yapmak size kazanç sağlayacaktır.",
      en: "In career, 07:07 brings success in research, analysis, and education. It is suitable for academic studies, software, or strategy development jobs. The luck factor is on your side; you might receive an offer from an unexpected place. Financially, investing in knowledge will bring you profit.",
      zh: "在职业方面，07:07 在研究、分析和教育方面带来成功。它适合学术研究、软件或战略开发工作。幸运因素在你这一边；你可能会收到来自意想不到地方的提议。在财务上，投资于知识将为你带来收益。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 07:07, uyanış çağrısıdır. Meditasyon, yoga veya dua etmek için mükemmel bir zamandır. Üçüncü göz çakranız aktiftir; rüyalarınıza ve vizyonlarınıza dikkat edin. Mor ve lacivert renkleri, ametist taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 07:07 is a wake-up call. It is an excellent time for meditation, yoga, or prayer. Your third eye chakra is active; pay attention to your dreams and visions. Purple and navy blue colors, amethyst stone support the energy of this hour.",
      zh: "在灵性层面上，07:07 是觉醒的呼唤。这是冥想、瑜伽或祈祷的绝佳时机。你的第三眼脉轮是活跃的；注意你的梦和幻象。紫色和深蓝色，紫水晶支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Bir kitap okumaya başlayın veya araştırma yapın\n• Meditasyon yaparak zihninizi boşaltın\n• Rüyalarınızı yorumlamaya çalışın\n• Mor bir mum yakın ve üçüncü gözünüze odaklanın\n• 'Ben evrenin bilgeliğine açığım' olumlamasını yapın",
      en: "• Start reading a book or doing research\n• Clear your mind by meditating\n• Try to interpret your dreams\n• Light a purple candle and focus on your third eye\n• Affirm 'I am open to the wisdom of the universe'",
      zh: "• 开始读书或做研究\n• 通过冥想清空你的头脑\n• 尝试解读你的梦\n• 点燃紫色蜡烛并专注于你的第三眼\n• 肯定'我对宇宙的智慧持开放态度'",
    },
  },
  {
    time: "08:08",
    title: {
      tr: "Bolluk enerjisi",
      en: "Abundance energy",
      zh: "丰盛的能量",
    },
    meaning: {
      tr: "Maddi veya manevi bir kazanç kapıda. Evren, emeklerinin karşılığını vermeye hazırlanıyor.",
      en: "Material or spiritual gain is at your door. The universe is preparing to reward your efforts.",
      zh: "物质或精神上的收获就在你门口。宇宙正准备回报你的努力。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "08:08, 8 rakamının güç, otorite, bolluk ve sonsuzluk enerjisini taşır. 8, karmik dengeyi ve adaleti simgeler. Toplamı 16 (8+8=16 -> 1+6=7) olan bu saat, maddi başarıyı ruhsal bilgelikle birleştirmeniz gerektiğini söyler. Ektiğinizi biçme zamanıdır. Finansal konularda büyük bir potansiyele sahipsiniz.",
      en: "08:08 carries the energy of power, authority, abundance, and infinity of the number 8. 8 symbolizes karmic balance and justice. With a sum of 16 (8+8=16 -> 1+6=7), this hour tells you to combine material success with spiritual wisdom. It is time to reap what you sow. You have great potential in financial matters.",
      zh: "08:08 承载着数字 8 的力量、权威、丰盛和无限的能量。8 象征着业力平衡和正义。这个时刻的总和为 16（8+8=16 -> 1+6=7），告诉你需要将物质成功与灵性智慧结合起来。是时候收获你播种的果实了。你在财务方面拥有巨大的潜力。",
    },
    astrology: {
      tr: "Astrolojik olarak 08:08, Satürn ve Mars etkisindedir. Oğlak ve Akrep burçlarının enerjisiyle uyumludur. Disiplin, kararlılık ve dönüşüm gücü verir. Zorlukların üstesinden gelme kapasiteniz yüksektir. Bu saat, hedeflerinize ulaşmak için gereken iradeyi size sağlar.",
      en: "Astrologically, 08:08 is under the influence of Saturn and Mars. It is compatible with the energies of Capricorn and Scorpio. It gives discipline, determination, and transformation power. Your capacity to overcome difficulties is high. This hour provides you with the will needed to reach your goals.",
      zh: "从占星学角度来看，08:08 受土星和火星的影响。它与摩羯座和天蝎座的能量相容。它赋予纪律、决心和转化的力量。你克服困难的能力很强。这个时刻为你提供了实现目标所需的意志力。",
    },
    loveAndRelationships: {
      tr: "Aşkta 08:08, denge ve adalet arayışıdır. İlişkinizde alma-verme dengesini kurmalısınız. Eğer haksızlığa uğradıysanız, karma yerini bulacaktır. Güçlü ve tutkulu bir ilişki yaşayabilirsiniz. Bekar iseniz, iş ortamından veya kariyerinizle ilgili bir yerden biriyle tanışabilirsiniz.",
      en: "In love, 08:08 is the search for balance and justice. You must establish the balance of giving and receiving in your relationship. If you have been treated unfairly, karma will find its place. You can experience a strong and passionate relationship. If you are single, you might meet someone from the work environment or related to your career.",
      zh: "在爱情中，08:08 是寻求平衡和正义。你必须在关系中建立给予和接受的平衡。如果你受到了不公正的待遇，业力会找到它的位置。你可以体验一段强烈而充满激情的恋情。如果你单身，你可能会遇到工作环境或与你职业相关的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 08:08, yükseliş ve başarı zamanıdır. Terfi alabilir, maaş artışı yaşayabilir veya kendi işinizi kurabilirsiniz. Liderlik vasıflarınız ön plandadır. Finansal yatırımlar için çok şanslı bir saattir, ancak dürüstlükten ödün vermeyin.",
      en: "In career, 08:08 is the time for rise and success. You might get a promotion, a salary increase, or start your own business. Your leadership qualities are at the forefront. It is a very lucky hour for financial investments, but do not compromise on honesty.",
      zh: "在职业方面，08:08 是晋升和成功的时刻。你可能会获得晋升、加薪或创办自己的企业。你的领导才能处于前沿。这是金融投资非常幸运的时刻，但不要在诚实上妥协。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 08:08, karmik temizlik zamanıdır. Geçmişin yüklerinden kurtulun. Adalet duygunuzu güçlendirin. Solar pleksus çakrası ile ilişkilidir; özgüven çalışmaları yapın. Sarı renk ve sitrin taşı bu saatin enerjisini çeker.",
      en: "Spiritually, 08:08 is the time for karmic cleansing. Get rid of the burdens of the past. Strengthen your sense of justice. It is related to the solar plexus chakra; do self-confidence exercises. Yellow color and citrine stone attract the energy of this hour.",
      zh: "在灵性层面上，08:08 是业力清理的时刻。摆脱过去的负担。加强你的正义感。它与太阳神经丛脉轮有关；做建立自信的练习。黄色和黄水晶吸引这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Bütçenizi gözden geçirin ve plan yapın\n• İş yerinde inisiyatif alın\n• Sarı bir mum yakın ve bolluk dileyin\n• 'Ben bolluğu ve bereketi hak ediyorum' olumlamasını yapın\n• Birine adil davranın veya hakkını teslim edin",
      en: "• Review your budget and make a plan\n• Take initiative at work\n• Light a yellow candle and wish for abundance\n• Affirm 'I deserve abundance and prosperity'\n• Treat someone fairly or give them their due",
      zh: "• 审查你的预算并制定计划\n• 在工作中采取主动\n• 点燃黄色蜡烛并祈求丰盛\n• 肯定'我值得丰盛和繁荣'\n• 公平对待某人或给予他们应得的",
    },
  },
  {
    time: "09:09",
    title: {
      tr: "Kendine yönel",
      en: "Turn inward",
      zh: "转向内在",
    },
    meaning: {
      tr: "Başkasını anlamadan önce kendini dinle. İçsel huzurun anahtarı şu anda sende saklı.",
      en: "Listen to yourself before understanding others. The key to inner peace is hidden within you right now.",
      zh: "在理解他人之前先倾听自己。内心平静的关键此刻就藏在你心中。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "09:09, 9 rakamının tamamlanma, hümanizm ve evrensel sevgi enerjisini taşır. 9, bir döngünün sonunu ve bilgeliği temsil eder. Toplamı 18 (9+9=18 -> 1+8=9) olan bu saat, yine 9 enerjisine döner. Bu, güçlü bir kapanış ve ruhsal olgunluk işaretidir. Başkalarına yardım etme, rehberlik etme potansiyeliniz yüksektir.",
      en: "09:09 carries the energy of completion, humanism, and universal love of the number 9. 9 represents the end of a cycle and wisdom. With a sum of 18 (9+9=18 -> 1+8=9), this hour returns to the energy of 9. This is a sign of strong closure and spiritual maturity. Your potential to help and guide others is high.",
      zh: "09:09 承载着数字 9 的完成、人道主义和普遍之爱的能量。9 代表一个循环的结束和智慧。这个时刻的总和为 18（9+9=18 -> 1+8=9），回归到 9 的能量。这是强大的结束和灵性成熟的标志。你帮助和指引他人的潜力很高。",
    },
    astrology: {
      tr: "Astrolojik olarak 09:09, Mars ve Neptün etkisindedir. Koç ve Balık burçlarının enerjisiyle uyumludur. Cesaret ve şefkat bir aradadır. İnsanlık için bir şeyler yapma arzusu duyabilirsiniz. Bu saat, egodan sıyrılıp bütüne hizmet etme zamanıdır.",
      en: "Astrologically, 09:09 is under the influence of Mars and Neptune. It is compatible with the energies of Aries and Pisces. Courage and compassion are together. You might feel a desire to do something for humanity. This hour is the time to shed the ego and serve the whole.",
      zh: "从占星学角度来看，09:09 受火星和海王星的影响。它与白羊座和双鱼座的能量相容。勇气和同情心结合在一起。你可能会感到渴望为人类做点什么。这个时刻是摆脱自我、服务整体的时候。",
    },
    loveAndRelationships: {
      tr: "Aşkta 09:09, koşulsuz sevgiyi ve fedakarlığı gösterir. Partnerinizi olduğu gibi kabul etmelisiniz. Eğer toksik bir ilişki içindeyseniz, bunu bitirme gücünü kendinizde bulabilirsiniz. Bekar iseniz, yardımsever ve duyarlı biriyle tanışabilirsiniz. Ruhsal bir bağ kurmak önceliğinizdir.",
      en: "In love, 09:09 shows unconditional love and sacrifice. You must accept your partner as they are. If you are in a toxic relationship, you can find the strength in yourself to end it. If you are single, you might meet someone helpful and sensitive. Establishing a spiritual bond is your priority.",
      zh: "在爱情中，09:09 显示了无条件的爱和牺牲。你必须接受伴侣原本的样子。如果你处于一段有毒的关系中，你可以在自己身上找到结束它的力量。如果你单身，你可能会遇到一个乐于助人和敏感的人。建立精神纽带是你的首要任务。",
    },
    careerAndMoney: {
      tr: "Kariyerde 09:09, sosyal sorumluluk projeleri ve insani yardım işleri için uygundur. Doktorluk, hemşirelik, sosyal hizmetler gibi alanlarda başarı getirir. Para kazanmaktan çok, manevi tatmin arayışındasınız. Ancak evren, iyiliklerinizi karşılıksız bırakmayacaktır.",
      en: "In career, 09:09 is suitable for social responsibility projects and humanitarian aid work. It brings success in fields like medicine, nursing, and social services. You are in search of spiritual satisfaction rather than earning money. However, the universe will not leave your kindness unrewarded.",
      zh: "在职业方面，09:09 适合社会责任项目和人道主义援助工作。它在医学、护理和社会服务等领域带来成功。你寻求的是精神满足而不是赚钱。然而，宇宙不会让你的善良得不到回报。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 09:09, içsel bilgeliğinize güvenme zamanıdır. Meditasyon yaparak iç sesinizi dinleyin. Yalnız kalmak ve kendinizi dinlemek size iyi gelecektir. İnziva veya ruhsal kamplar için uygun bir dönemdir. Altın rengi bu saatin enerjisini yansıtır.",
      en: "Spiritually, 09:09 is the time to trust your inner wisdom. Listen to your inner voice by meditating. Being alone and listening to yourself will be good for you. It is a suitable period for retreat or spiritual camps. Gold color reflects the energy of this hour.",
      zh: "在灵性层面上，09:09 是信任你内在智慧的时刻。通过冥想倾听你的内心声音。独处并倾听自己对你有好处。这是一个适合静修或灵性营的时期。金色反映了这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Birine karşılıksız yardım edin\n• Yalnız başınıza bir yürüyüşe çıkın\n• Günlük tutarak hislerinizi yazın\n• 'Ben evrenin bir parçasıyım ve sevgi doluyum' olumlamasını yapın\n• Eski eşyalarınızı bağışlayın",
      en: "• Help someone unconditionally\n• Go for a walk alone\n• Write your feelings by keeping a journal\n• Affirm 'I am a part of the universe and I am full of love'\n• Donate your old items",
      zh: "• 无条件地帮助某人\n• 独自散步\n• 通过写日记记录你的感受\n• 肯定'我是宇宙的一部分，我充满爱'\n• 捐赠你的旧物品",
    },
  },
  {
    time: "10:10",
    title: {
      tr: "Yeni bir tanışma",
      en: "A new encounter",
      zh: "新的相遇",
    },
    meaning: {
      tr: "Yakın zamanda hayatına yeni biri girebilir. Bu karşılaşma duygusal anlamda iz bırakacak.",
      en: "Someone new might enter your life soon. This encounter will leave an emotional mark.",
      zh: "一个新人可能很快会进入你的生活。这次相遇将在情感上留下印记。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "10:10, 1 ve 0 rakamlarının güçlü kombinasyonudur. 1 yeni başlangıçları, 0 ise sonsuz potansiyeli simgeler. Toplamı 2 (1+0+1+0=2) olan bu saat, aynı zamanda ortaklık ve denge enerjisi taşır. Hayatınızda yepyeni bir sayfa açılıyor. Şans ve fırsatlar kapınızda. Kendinize güvenin ve adım atın.",
      en: "10:10 is a powerful combination of numbers 1 and 0. 1 symbolizes new beginnings, and 0 symbolizes infinite potential. With a sum of 2 (1+0+1+0=2), this hour also carries the energy of partnership and balance. A brand new page is opening in your life. Luck and opportunities are at your door. Believe in yourself and take a step.",
      zh: "10:10 是数字 1 和 0 的强大组合。1 象征新的开始，0 象征无限的潜力。这个时刻的总和为 2（1+0+1+0=2），也承载着伙伴关系和平衡的能量。你的人生正在翻开全新的一页。幸运和机会就在你门口。相信自己并迈出一步。",
    },
    astrology: {
      tr: "Astrolojik olarak 10:10, Güneş ve Uranüs etkisindedir. Aslan ve Kova burçlarının enerjisiyle uyumludur. Parlama, dikkat çekme ve özgün olma zamanıdır. Sürpriz gelişmeler yaşanabilir. Sosyal çevreniz genişleyebilir.",
      en: "Astrologically, 10:10 is under the influence of the Sun and Uranus. It is compatible with the energies of Leo and Aquarius. It is time to shine, attract attention, and be original. Surprise developments may occur. Your social circle may expand.",
      zh: "从占星学角度来看，10:10 受太阳和天王星的影响。它与狮子座和水瓶座的能量相容。是发光、引人注目和独创的时候。可能会发生意外的发展。你的社交圈可能会扩大。",
    },
    loveAndRelationships: {
      tr: "Aşkta 10:10, heyecan verici gelişmeleri müjdeler. Bekar iseniz, ilk görüşte aşk yaşayabilirsiniz. Bu kişi hayatınızı değiştirecek bir etkiye sahip olabilir. İlişkiniz varsa, birlikte yeni bir hobiye başlayabilir veya seyahate çıkabilirsiniz. İlişkinize taze kan geliyor.",
      en: "In love, 10:10 heralds exciting developments. If you are single, you might experience love at first sight. This person might have a life-changing effect. If you are in a relationship, you can start a new hobby together or go on a trip. Fresh blood is coming to your relationship.",
      zh: "在爱情中，10:10 预示着令人兴奋的发展。如果你单身，你可能会一见钟情。这个人可能会对你的生活产生改变性的影响。如果你正在恋爱，你们可以一起开始一个新的爱好或去旅行。新鲜血液正在注入你们的关系。",
    },
    careerAndMoney: {
      tr: "Kariyerde 10:10, tanınma ve başarı getirir. Projeleriniz onaylanabilir, ödül alabilirsiniz. Girişimcilik için harika bir zamandır. Kendi işinizi kurmak istiyorsanız, evren sizi destekliyor. Finansal olarak beklenmedik kazançlar olabilir.",
      en: "In career, 10:10 brings recognition and success. Your projects may be approved, you may receive an award. It is a great time for entrepreneurship. If you want to start your own business, the universe supports you. There may be unexpected financial gains.",
      zh: "在职业方面，10:10 带来认可和成功。你的项目可能会被批准，你可能会获奖。这是创业的绝佳时机。如果你想创办自己的企业，宇宙支持你。可能会有意外的财务收益。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 10:10, pozitif düşünmenin gücünü hatırlatır. Neye odaklanırsanız onu büyütürsünüz. İyimser olun. Taç çakrası ile ilişkilidir; evrensel bilgiye açıksınız. Beyaz ve altın renkleri bu saatin enerjisini yükseltir.",
      en: "Spiritually, 10:10 reminds you of the power of positive thinking. Whatever you focus on, you magnify. Be optimistic. It is related to the crown chakra; you are open to universal knowledge. White and gold colors raise the energy of this hour.",
      zh: "在灵性层面上，10:10 提醒你积极思考的力量。无论你关注什么，你都会将其放大。要乐观。它与顶轮有关；你对宇宙知识持开放态度。白色和金色提升这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Yeni bir yere gidin veya yeni bir rota deneyin\n• Kendinize güven telkin edin\n• Bir vizyon panosu hazırlayın\n• 'Ben şanslıyım ve fırsatları çekiyorum' olumlamasını yapın\n• Sosyal medyada aktif olun",
      en: "• Go to a new place or try a new route\n• Instill confidence in yourself\n• Prepare a vision board\n• Affirm 'I am lucky and I attract opportunities'\n• Be active on social media",
      zh: "• 去一个新的地方或尝试一条新路线\n• 给自己灌输信心\n• 准备一个愿景板\n• 肯定'我很幸运，我吸引机会'\n• 在社交媒体上活跃",
    },
  },
  {
    time: "11:11",
    title: {
      tr: "Dilek zamanı",
      en: "Make a wish",
      zh: "许愿时刻",
    },
    meaning: {
      tr: "Evren dileklerini dinliyor. İçinden geçen neyse, şimdi onu netleştirme vakti.",
      en: "The universe is listening to your wishes. Whatever you're thinking, now is the time to clarify it.",
      zh: "宇宙正在倾听你的愿望。无论你在想什么，现在是明确它的时候。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "11:11, numerolojide en güçlü ve kutsal sayı dizilerinden biridir. 11 bir 'usta sayı' (master number) olup, ruhsal uyanışı, sezgiyi ve aydınlanmayı temsil eder. İki kere 11 görmek, bu enerjinin iki katına çıktığı anlamına gelir. Bu saat, evrenle tam bir uyum içinde olduğunuz ve manifestasyon gücünüzün zirveye ulaştığı bir andır. Toplamı 4 (1+1+1+1=4) olan bu kombinasyon, aynı zamanda sağlam temeller kurma, istikrar ve gerçekleştirme enerjisini taşır. 11:11'i görmek, düşüncelerinizin hızla gerçekleşmeye başladığının bir işaretidir. Bu yüzden zihninizi pozitif tutmak son derece önemlidir.",
      en: "11:11 is one of the most powerful and sacred number sequences in numerology. 11 is a 'master number' representing spiritual awakening, intuition, and enlightenment. Seeing 11 twice means this energy is doubled. This hour is a moment when you are in perfect harmony with the universe and your manifestation power reaches its peak. This combination, with a sum of 4 (1+1+1+1=4), also carries the energy of building solid foundations, stability, and realization. Seeing 11:11 is a sign that your thoughts are beginning to manifest rapidly. Therefore, keeping your mind positive is extremely important.",
      zh: "11:11 是数字命理学中最强大和神圣的数字序列之一。11 是一个'大师数字'，代表灵性觉醒、直觉和启蒙。看到两次 11 意味着这种能量加倍。这个时刻是你与宇宙完全和谐、显化力量达到顶峰的时刻。这个组合的总和为 4（1+1+1+1=4），也承载着建立坚实基础、稳定和实现的能量。看到 11:11 是你的思想开始迅速显化的标志。因此，保持积极的心态极其重要。",
    },
    astrology: {
      tr: "Astrolojik olarak 11:11, Uranüs ve Neptün gezegenlerinin birleşik enerjisini yansıtır. Uranüs ani değişimleri, yaratıcılığı ve özgünlüğü; Neptün ise rüyaları, sezgileri ve maneviyatı simgeler. Bu saat, Kova ve Balık burçlarının titreşimleriyle rezonansa girer. Eğer bu burçlar doğum haritanızda baskınsa, 11:11'i sıkça görebilirsiniz. Bu saat aynı zamanda astral düzlemlerle bağlantının en güçlü olduğu bir kapıdır. Evrensel bilinçle doğrudan hat kurar gibisiniz. Ay'ın hangi burçta olduğuna bakın - bu dönemde Ay'ın burcu, dilek tutma konusunu belirleyebilir. Örneğin Boğa'dayken maddi dilekler, Balık'tayken manevi dilekler daha güçlüdür.",
      en: "Astrologically, 11:11 reflects the combined energy of the planets Uranus and Neptune. Uranus symbolizes sudden changes, creativity, and originality; while Neptune represents dreams, intuition, and spirituality. This hour resonates with the vibrations of Aquarius and Pisces. If these signs are dominant in your birth chart, you may frequently see 11:11. This hour is also a portal where the connection to astral planes is strongest. It's as if you have a direct line to universal consciousness. Check which sign the Moon is in - during this period, the Moon's sign can determine the theme for wish-making. For example, material wishes are stronger when in Taurus, spiritual wishes when in Pisces.",
      zh: "从占星学角度来看，11:11 反映了天王星和海王星的联合能量。天王星象征突然的变化、创造力和独创性；而海王星代表梦境、直觉和灵性。这个时刻与水瓶座和双鱼座的振动产生共鸣。如果这些星座在你的出生星盘中占主导地位，你可能会经常看到 11:11。这个时刻也是与星界层面连接最强的门户。这就像你与宇宙意识建立了一条直接连线。看看月亮在哪个星座——在这个时期，月亮的星座可以决定许愿的主题。例如，在金牛座时物质愿望更强，在双鱼座时精神愿望更强。",
    },
    loveAndRelationships: {
      tr: "Aşk hayatınız için 11:11, büyülü fırsatların kapısıdır. Eğer bekar ve aşk arıyorsanız, bu saatte tutacağınız dilek gerçekleşme potansiyeli taşır. Ruh eşinizi çekmek için bu an ideal bir zamandır. Hayal ettiğiniz ilişkiyi detaylıca düşünün, o kişiyle nasıl hissedeceğinizi canlandırın. Bir ilişkideyseniz, partnerinizle aranızdaki bağın derinleşmesi için niyet belirleyebilirsiniz. Bu saat ayrıca geçmişteki aşkların hatırlanabileceği, eski bir sevgiliden haber alabileceğiniz ya da bitmemiş bir ilişkinin kapanışını yapabileceğiniz bir andır. İkizler ruhlar birbirini bu frekansta daha güçlü hisseder. Kalbinizi açın ve sevginin sizin için ne anlama geldiğini netleştirin.",
      en: "For your love life, 11:11 is a portal to magical opportunities. If you're single and seeking love, a wish made at this hour carries the potential to manifest. This is an ideal time to attract your soulmate. Think in detail about the relationship you imagine, visualize how you would feel with that person. If you're in a relationship, you can set intentions for deepening the bond with your partner. This hour is also when past loves may be remembered, you might hear from an ex, or find closure for an unfinished relationship. Twin flames feel each other more strongly at this frequency. Open your heart and clarify what love means to you.",
      zh: "对于你的爱情生活，11:11 是通往神奇机会的大门。如果你单身并在寻找爱情，在这个时刻许下的愿望有实现的潜力。这是吸引灵魂伴侣的理想时刻。详细思考你想象中的关系，想象你和那个人在一起的感觉。如果你正在恋爱，你可以设定加深与伴侣纽带的意图。这个时刻也是可能会回忆起过去的爱情、收到前任的消息或结束未完成关系的时候。双生火焰在这个频率下更强烈地感受到彼此。敞开你的心扉，明确爱对你意味着什么。",
    },
    careerAndMoney: {
      tr: "Kariyer ve finansal başarı için 11:11, manifestasyon ceremeti yapabileceğiniz en uygun saattir. Büyük hayallerinizi gerçek kılmak istiyorsanız, bu saatte net niyetler belirleyin. İş hayatında yeni bir fırsat, terfi ya da iş teklifi yakında gelebilir. Yaratıcı projeleriniz dikkat çekebilir ve sizi öne çıkarabilir. Finansal olarak bolluk diliyorsanız, bu saatte 'Ben bollukla uyum içindeyim' gibi olumlamalar tekrarlayın. Kendinize ve yeteneklerinize inanmalısınız. 11:11, aynı zamanda risk almanın iyi sonuç verebileceği bir enerjidir - ama bu riskin bilinçli ve sezgisel olması gerekir. Yatırım, girişim ya da iş ortaklığı konusundaki kararlarınızı bu frekansla destekleyin.",
      en: "For career and financial success, 11:11 is the most suitable hour to perform manifestation rituals. If you want to make your big dreams come true, set clear intentions at this hour. A new opportunity, promotion, or job offer in work life may come soon. Your creative projects can attract attention and make you stand out. If you're wishing for financial abundance, repeat affirmations like 'I am in harmony with abundance' at this hour. You must believe in yourself and your talents. 11:11 is also an energy where taking risks can yield good results - but this risk needs to be conscious and intuitive. Support your decisions about investment, entrepreneurship, or business partnerships with this frequency.",
      zh: "对于职业和财务成功，11:11 是进行显化仪式的最合适时刻。如果你想让你伟大的梦想成真，在这个时刻设定明确的意图。工作中的新机会、晋升或工作机会可能很快就会到来。你的创意项目可能会引起注意并让你脱颖而出。如果你希望获得财务丰盛，在这个时刻重复像'我与丰盛和谐一致'这样的肯定语。你必须相信自己和你的才能。11:11 也是一种冒险可能带来好结果的能量——但这种冒险需要是有意识和直觉的。用这个频率支持你关于投资、创业或商业伙伴关系的决定。",
    },
    spiritualGuidance: {
      tr: "11:11, ruhsal bir uyanış çağrısıdır. Bu saati görmek, manevi yolculuğunuzun hızlandığının ve yüksek bilinçle bağlantınızın arttığının işaretidir. Melek sayısı olarak da bilinen 11:11, koruyucu meleklerinizin size 'buradayız, seni destekliyoruz' dediği bir mesajdır. Bu saatte meditasyon yapmak, kristallerle çalışmak ya da enerji temizliği yapmak çok etkilidir. Ametist, şeffaf kuvars ya da lapis lazuli gibi taşlar bu frekansta güçlenir. Mor renk, bu saatin rengidir - mor mumlar yakabilir ya da mor kıyafetler giyebilirsiniz. En önemlisi, bu saatte şükran duygusuyla bir dilek tutun ve evrenin bu dileği duyduğuna inanın. Günlüğünüze bu saatte ne düşündüğünüzü yazın, ileride dönüp baktığınızda çoğunun gerçekleştiğini göreceksiniz.",
      en: "11:11 is a call to spiritual awakening. Seeing this hour is a sign that your spiritual journey is accelerating and your connection with higher consciousness is increasing. Also known as an angel number, 11:11 is a message from your guardian angels saying 'we are here, we support you.' Meditating, working with crystals, or doing energy cleansing at this hour is very effective. Stones like amethyst, clear quartz, or lapis lazuli become empowered at this frequency. Purple is the color of this hour - you can light purple candles or wear purple clothing. Most importantly, make a wish with gratitude at this hour and believe the universe hears it. Write in your journal what you were thinking at this hour, when you look back later you'll see that most have manifested.",
      zh: "11:11 是灵性觉醒的呼唤。看到这个时刻标志着你的灵性旅程正在加速，你与更高意识的连接正在增加。也被称为天使数字，11:11 是你的守护天使发出的信息，说'我们在这里，我们支持你'。在这个时刻冥想、使用水晶工作或进行能量清理非常有效。像紫水晶、白水晶或青金石这样的石头在这个频率下会变得更强。紫色是这个时刻的颜色——你可以点燃紫色蜡烛或穿紫色衣服。最重要的是，在这个时刻怀着感恩的心许个愿，并相信宇宙听到了这个愿望。在日记中写下你在这个时刻的想法，以后回头看时，你会发现大部分都已经显化了。",
    },
    actionSteps: {
      tr: "• Bir kağıt alın ve en büyük dileğinizi yazın - bunu sakın kimseyle paylaşmayın\n• Gözlerinizi kapatın, derin bir nefes alın ve dileğinizin gerçekleştiğini hayal edin\n• 'Teşekkür ederim, bu ya da daha iyisi bana geliyor' deyin\n• Mor ya da beyaz bir mum yakın, dileklerinizi evrene gönderin\n• Günlüğünüze bu anı ve hislerinizi yazın, tarih ve saati not edin\n• Bir ametist taşı yanınızda taşımaya başlayın, bu frekansı korumanıza yardımcı olur\n• 11:11'i tekrar gördüğünüzde aynı dileği tekrarlayın, evren size cevap verene kadar",
      en: "• Take a paper and write your biggest wish - don't share this with anyone\n• Close your eyes, take a deep breath, and imagine your wish coming true\n• Say 'Thank you, this or better is coming to me'\n• Light a purple or white candle, send your wishes to the universe\n• Write this moment and your feelings in your journal, note the date and time\n• Start carrying an amethyst stone with you, it helps maintain this frequency\n• When you see 11:11 again, repeat the same wish until the universe responds",
      zh: "• 拿一张纸写下你最大的愿望——不要告诉任何人\n• 闭上眼睛，深呼吸，想象你的愿望成真\n• 说'谢谢，这或更好的正在向我走来'\n• 点燃紫色或白色蜡烛，将你的愿望发送给宇宙\n• 在日记中写下这一刻和你的感受，记下日期和时间\n• 开始随身携带紫水晶，这有助于你保持这个频率\n• 当你再次看到 11:11 时，重复同样的愿望，直到宇宙回应你",
    },
  },
  {
    time: "12:12",
    title: {
      tr: "Ciddi düşünüyor",
      en: "Serious thoughts",
      zh: "严肃的想法",
    },
    meaning: {
      tr: "İlişkinizin özellikle ortalarındaysanız bu saate denk geldiğinizde bilin ki sizinle ilgili artık daha ciddi kararlar almak ve adımlar atmak istiyor. Bu yüzden sizin de bu konuda hazırlıklı olmanızda fayda var.",
      en: "If you're in the middle of your relationship, know that they want to take more serious decisions and steps about you. It's beneficial for you to be prepared for this.",
      zh: "如果你正处于关系的中间阶段，要知道他们想要对你做出更严肃的决定并采取行动。为此做好准备对你有好处。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "12:12, 1 ve 2 rakamlarının enerjisini birleştirir. 1 liderlik ve yeni başlangıçlar, 2 ise denge, uyum ve işbirliğidir. Toplamı 6 (1+2+1+2=6) olan bu saat, sevgi, aile ve sorumluluk enerjisini taşır. Hayatınızda dengeyi bulma ve hedeflerinize ulaşmak için işbirliği yapma zamanıdır. Meleklerinizin sizi desteklediğini gösterir.",
      en: "12:12 combines the energies of numbers 1 and 2. 1 is leadership and new beginnings, 2 is balance, harmony, and cooperation. With a sum of 6 (1+2+1+2=6), this hour carries the energy of love, family, and responsibility. It is time to find balance in your life and cooperate to reach your goals. It shows that your angels support you.",
      zh: "12:12 结合了数字 1 和 2 的能量。1 代表领导力和新的开始，2 代表平衡、和谐与合作。这个时刻的总和为 6（1+2+1+2=6），承载着爱、家庭和责任的能量。现在是在生活中寻找平衡并通过合作实现目标的时刻。这表明你的天使正在支持你。",
    },
    astrology: {
      tr: "Astrolojik olarak 12:12, Güneş ve Jüpiter etkisindedir. Aslan ve Yay burçlarının enerjisiyle uyumludur. İyimserlik, büyüme ve genişleme enerjisi verir. Şanslı bir saattir. Eğitim, seyahat ve felsefi konular gündeme gelebilir. Ufkunuzu genişletme zamanıdır.",
      en: "Astrologically, 12:12 is under the influence of the Sun and Jupiter. It is compatible with the energies of Leo and Sagittarius. It gives optimism, growth, and expansion energy. It is a lucky hour. Education, travel, and philosophical issues may come up. It is time to broaden your horizons.",
      zh: "从占星学角度来看，12:12 受太阳和木星的影响。它与狮子座和射手座的能量相容。它带来乐观、成长和扩张的能量。这是一个幸运的时刻。教育、旅行和哲学问题可能会出现。现在是开阔视野的时候。",
    },
    loveAndRelationships: {
      tr: "Aşkta 12:12, ciddiyet ve bağlılık zamanıdır. Partneriniz sizinle ilgili gelecek planları yapıyor olabilir. Evlilik teklifi veya birlikte yaşama kararı gündeme gelebilir. Bekar iseniz, uzun vadeli bir ilişki yaşayabileceğiniz biriyle tanışabilirsiniz. İlişkinizde dengeyi sağlamak önemlidir.",
      en: "In love, 12:12 is the time for seriousness and commitment. Your partner might be making future plans about you. A marriage proposal or decision to live together may come up. If you are single, you might meet someone with whom you can have a long-term relationship. It is important to maintain balance in your relationship.",
      zh: "在爱情中，12:12 是严肃和承诺的时刻。你的伴侣可能正在制定关于你的未来计划。求婚或同居的决定可能会出现。如果你单身，你可能会遇到一个可以发展长期关系的人。在关系中保持平衡很重要。",
    },
    careerAndMoney: {
      tr: "Kariyerde 12:12, takım çalışması ve ortaklıklar için uygundur. İş arkadaşlarınızla uyum içinde çalışmak size başarı getirecektir. Sorumluluklarınız artabilir, ancak bunların altından kalkacak güce sahipsiniz. Finansal olarak dengeli bir dönemdesiniz.",
      en: "In career, 12:12 is suitable for teamwork and partnerships. Working in harmony with your colleagues will bring you success. Your responsibilities may increase, but you have the strength to handle them. You are in a financially balanced period.",
      zh: "在职业方面，12:12 适合团队合作和伙伴关系。与同事和谐共处将为你带来成功。你的责任可能会增加，但你有力量处理它们。你在财务上处于平衡时期。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 12:12, düşüncelerinizi kontrol etme uyarısıdır. Pozitif düşünceler pozitif sonuçlar doğurur. Melekleriniz size rehberlik ediyor; işaretleri takip edin. Kalp çakrası ile ilişkilidir; sevgiye odaklanın. Yeşil renk ve yeşim taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 12:12 is a warning to control your thoughts. Positive thoughts bring positive results. Your angels are guiding you; follow the signs. It is related to the heart chakra; focus on love. Green color and jade stone support the energy of this hour.",
      zh: "在灵性层面上，12:12 是控制思想的警告。积极的思想带来积极的结果。你的天使正在指引你；跟随这些迹象。它与心轮有关；专注于爱。绿色和玉石支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Gelecek hedeflerinizi yazın\n• Partnerinizle veya ortağınızla konuşun\n• Doğada vakit geçirin\n• 'Ben dengedeyim ve huzurluyum' olumlamasını yapın\n• Birine teşekkür edin",
      en: "• Write your future goals\n• Talk to your partner or business partner\n• Spend time in nature\n• Affirm 'I am balanced and peaceful'\n• Thank someone",
      zh: "• 写下你的未来目标\n• 与你的伴侣或商业伙伴交谈\n• 在大自然中度过时光\n• 肯定'我处于平衡和平静之中'\n• 感谢某人",
    },
  },
  {
    time: "13:13",
    title: {
      tr: "Güç sende",
      en: "Power is within you",
      zh: "力量在你心中",
    },
    meaning: {
      tr: "Kendine güvenin arttığı bir dönemdesin. Cesur kararlar alabilir, hayatına yön verebilirsin.",
      en: "You're in a period of increased self-confidence. You can make brave decisions and direct your life.",
      zh: "你正处于自信心增强的时期。你可以做出勇敢的决定并掌控你的人生。",
    },
    category: "Tam Ayna",
  },
  {
    time: "14:14",
    title: {
      tr: "Aklından çıkmıyorsun",
      en: "Can't get you off their mind",
      zh: "你在他们脑海中挥之不去",
    },
    meaning: {
      tr: "Sürekli seni düşünüyor olabilir. Özellikle gün içinde sıkça seni hatırlıyor ve belki de aramak ya da yazmak için cesaret toplamaya çalışıyor.",
      en: "They might be thinking about you constantly. They remember you often during the day and might be gathering courage to call or write to you.",
      zh: "他们可能一直在想你。他们在白天经常想起你，可能正在鼓起勇气给你打电话或写信。",
    },
    category: "Tam Ayna",
  },
  {
    time: "15:15",
    title: {
      tr: "Yüreğinde bir kıpırtı var",
      en: "A flutter in their heart",
      zh: "他们心中悸动",
    },
    meaning: {
      tr: "Kalbini çarpıtan biri olabilir. Bu duygular karşılıklı olabilir, işaretleri takip et.",
      en: "Someone might be making your heart flutter. These feelings might be mutual, follow the signs.",
      zh: "可能有人让你心跳加速。这些感觉可能是相互的，跟随迹象。",
    },
    category: "Tam Ayna",
  },
  {
    time: "16:16",
    title: {
      tr: "Zorluklar bitiyor",
      en: "Hardships are ending",
      zh: "苦难即将结束",
    },
    meaning: {
      tr: "Yaşadığın sıkıntılı süreç sona eriyor. Artık önün açık, ferah bir döneme giriyorsun.",
      en: "The troubled period you've been going through is ending. Your path is clear now, you're entering a spacious period.",
      zh: "你所经历的困难时期即将结束。现在的道路是清晰的，你正在进入一个宽广的时期。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "16:16, 1 ve 6 rakamlarının enerjisini taşır. 1 yeni başlangıçlar, 6 ise denge ve şifadır. Toplamı 14 (1+6+1+6=14 -> 1+4=5) olan bu saat, değişim ve özgürleşme enerjisiyle bağlantılıdır. 16 sayısı 'Yıkılan Kule' tarot kartıyla ilişkilendirilir; bu, eski yapıların yıkılıp yerine daha sağlamlarının kurulacağını gösterir. Zorlukların ardından gelen aydınlanmayı simgeler.",
      en: "16:16 carries the energy of numbers 1 and 6. 1 is new beginnings, 6 is balance and healing. With a sum of 14 (1+6+1+6=14 -> 1+4=5), this hour is connected to change and liberation energy. The number 16 is associated with the 'Tower' tarot card; this shows that old structures will collapse and stronger ones will be built in their place. It symbolizes the enlightenment that comes after difficulties.",
      zh: "16:16 承载着数字 1 和 6 的能量。1 是新的开始，6 是平衡和治愈。这个时刻的总和为 14（1+6+1+6=14 -> 1+4=5），与变化和解放的能量相连。数字 16 与'高塔'塔罗牌相关联；这表明旧的结构将倒塌，更坚固的结构将取而代之。它象征着困难之后的开悟。",
    },
    astrology: {
      tr: "Astrolojik olarak 16:16, Mars ve Satürn etkisindedir. Koç ve Oğlak burçlarının enerjisiyle uyumludur. Dayanıklılık, sabır ve mücadele gücü verir. Zorlukları aşma kapasiteniz yüksektir. Bu saat, küllerinden yeniden doğma enerjisi taşır.",
      en: "Astrologically, 16:16 is under the influence of Mars and Saturn. It is compatible with the energies of Aries and Capricorn. It gives endurance, patience, and fighting power. Your capacity to overcome difficulties is high. This hour carries the energy of rising from the ashes.",
      zh: "从占星学角度来看，16:16 受火星和土星的影响。它与白羊座和摩羯座的能量相容。它赋予耐力、耐心和战斗力。你克服困难的能力很强。这个时刻承载着浴火重生的能量。",
    },
    loveAndRelationships: {
      tr: "Aşkta 16:16, temizlik ve arınma zamanıdır. İlişkinizde sorunlar varsa, bunları halının altına süpürmek yerine yüzleşmelisiniz. Belki de bitmesi gereken bir ilişki bitecek ve size daha iyisinin kapısını açacaktır. Bekar iseniz, geçmişin yaralarını sarıp yeni bir aşka hazır hale geliyorsunuz.",
      en: "In love, 16:16 is the time for cleansing and purification. If there are problems in your relationship, you must face them instead of sweeping them under the rug. Perhaps a relationship that needs to end will end and open the door to a better one for you. If you are single, you are healing the wounds of the past and becoming ready for a new love.",
      zh: "在爱情中，16:16 是清理和净化的时刻。如果你的关系中有问题，你必须面对它们，而不是掩盖它们。也许一段需要结束的关系将会结束，并为你打开通往更好关系的大门。如果你单身，你正在治愈过去的创伤，准备迎接新的爱情。",
    },
    careerAndMoney: {
      tr: "Kariyerde 16:16, yeniden yapılanma zamanıdır. İş yerinde değişiklikler olabilir, pozisyonunuz değişebilir. Başarısızlık gibi görünen olaylar aslında sizi daha iyi bir yere taşıyacak basamaklardır. Finansal olarak temkinli olun, gereksiz risklerden kaçının.",
      en: "In career, 16:16 is the time for restructuring. There may be changes in the workplace, your position may change. Events that seem like failure are actually steps that will carry you to a better place. Financially, be cautious, avoid unnecessary risks.",
      zh: "在职业方面，16:16 是重组的时刻。工作场所可能会有变化，你的职位可能会变动。看似失败的事件实际上是将你带到更好位置的阶梯。在财务上要谨慎，避免不必要的风险。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 16:16, egoyu yıkma çağrısıdır. Gurur ve kibirden arının. Alçakgönüllü olun. Meditasyon yaparak içsel huzuru bulun. Taç çakrası ile ilişkilidir. Mor ve beyaz renkleri, obsidyen taşı bu saatin enerjisini dengeler.",
      en: "Spiritually, 16:16 is a call to destroy the ego. Purify yourself from pride and arrogance. Be humble. Find inner peace by meditating. It is related to the crown chakra. Purple and white colors, obsidian stone balance the energy of this hour.",
      zh: "在灵性层面上，16:16 是摧毁自我的呼唤。净化你的骄傲和傲慢。保持谦逊。通过冥想找到内心的平静。它与顶轮有关。紫色和白色，黑曜石平衡这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Evinizde veya ofisinizde gereksiz eşyaları atın\n• Birine karşı hatanızı kabul edin ve özür dileyin\n• Meditasyon yaparak zihninizi boşaltın\n• 'Ben her zorluğun üstesinden gelirim' olumlamasını yapın\n• Doğada yürüyüş yapın",
      en: "• Throw away unnecessary items in your home or office\n• Admit your mistake to someone and apologize\n• Clear your mind by meditating\n• Affirm 'I overcome every difficulty'\n• Go for a walk in nature",
      zh: "• 扔掉家里或办公室里不必要的物品\n• 向某人承认你的错误并道歉\n• 通过冥想清空你的头脑\n• 肯定'我能克服每一个困难'\n• 在大自然中散步",
    },
  },
  {
    time: "17:17",
    title: {
      tr: "Yaratıcılık artıyor",
      en: "Creativity rising",
      zh: "创造力提升",
    },
    meaning: {
      tr: "İlham perileri yanında. Sanatsal veya yaratıcı bir proje için harika bir dönemdesin.",
      en: "Muses are by your side. You are in a great period for an artistic or creative project.",
      zh: "缪斯女神在你身边。你正处于艺术或创意项目的绝佳时期。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "17:17, 1 ve 7 rakamlarının enerjisini taşır. 1 liderlik, 7 ise bilgelik ve maneviyattır. Toplamı 16 (1+7+1+7=16 -> 1+6=7) olan bu saat, yine 7 enerjisine döner. Bu, güçlü bir ruhsal koruma ve şans işaretidir. 17 sayısı 'Yıldız' tarot kartıyla ilişkilendirilir; umut, ilham ve kozmik bağlantıyı simgeler. Hayallerinizi gerçekleştirme gücüne sahipsiniz.",
      en: "17:17 carries the energy of numbers 1 and 7. 1 is leadership, 7 is wisdom and spirituality. With a sum of 16 (1+7+1+7=16 -> 1+6=7), this hour returns to the energy of 7. This is a sign of strong spiritual protection and luck. The number 17 is associated with the 'Star' tarot card; it symbolizes hope, inspiration, and cosmic connection. You have the power to make your dreams come true.",
      zh: "17:17 承载着数字 1 和 7 的能量。1 是领导力，7 是智慧和灵性。这个时刻的总和为 16（1+7+1+7=16 -> 1+6=7），回归到 7 的能量。这是强大的灵性保护和运气的标志。数字 17 与'星星'塔罗牌相关联；它象征着希望、灵感和宇宙连接。你有力量让梦想成真。",
    },
    astrology: {
      tr: "Astrolojik olarak 17:17, Güneş ve Satürn etkisindedir. Aslan ve Oğlak burçlarının enerjisiyle uyumludur. Yaratıcılık ve disiplin bir aradadır. Sanatsal projelerinizi somutlaştırmak için mükemmel bir zamandır. Tanınma ve itibar kazanabilirsiniz.",
      en: "Astrologically, 17:17 is under the influence of the Sun and Saturn. It is compatible with the energies of Leo and Capricorn. Creativity and discipline are together. It is an excellent time to materialize your artistic projects. You can gain recognition and reputation.",
      zh: "从占星学角度来看，17:17 受太阳和土星的影响。它与狮子座和摩羯座的能量相容。创造力和纪律结合在一起。这是实现艺术项目的绝佳时机。你可以获得认可和声誉。",
    },
    loveAndRelationships: {
      tr: "Aşkta 17:17, umut ve yenilenme zamanıdır. İlişkinizde sorunlar varsa, bunları aşacak gücü bulacaksınız. Partnerinizle ortak hayaller kurabilirsiniz. Bekar iseniz, hayalinizdeki gibi biriyle tanışma şansınız yüksektir. Bu kişi sanatçı ruhlu veya entelektüel olabilir.",
      en: "In love, 17:17 is the time for hope and renewal. If there are problems in your relationship, you will find the strength to overcome them. You can dream common dreams with your partner. If you are single, your chance of meeting someone like in your dreams is high. This person might be artistic or intellectual.",
      zh: "在爱情中，17:17 是希望和更新的时刻。如果你的关系中有问题，你会找到克服它们的力量。你可以与伴侣共同编织梦想。如果你单身，你遇到梦中情人的几率很高。这个人可能具有艺术气质或知识分子。",
    },
    careerAndMoney: {
      tr: "Kariyerde 17:17, parlama zamanıdır. Yeteneklerinizi sergileyin, sahneye çıkın. Yazarlık, oyunculuk, tasarım gibi alanlarda başarı kesindir. Finansal olarak şanslı bir dönemdesiniz; yatırımlarınız değer kazanabilir.",
      en: "In career, 17:17 is the time to shine. Show your talents, get on stage. Success is certain in fields like writing, acting, design. You are in a financially lucky period; your investments may gain value.",
      zh: "在职业方面，17:17 是发光的时刻。展示你的才华，登上舞台。在写作、表演、设计等领域的成功是肯定的。你在财务上处于幸运时期；你的投资可能会增值。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 17:17, evrenle bağlantı kurma zamanıdır. Yıldızlara bakın, gökyüzünü izleyin. İlham alın. Üçüncü göz ve taç çakrası ile ilişkilidir. Mavi ve mor renkleri, lapis lazuli taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 17:17 is the time to connect with the universe. Look at the stars, watch the sky. Get inspired. It is related to the third eye and crown chakra. Blue and purple colors, lapis lazuli stone support the energy of this hour.",
      zh: "在灵性层面上，17:17 是与宇宙连接的时刻。仰望星空，观察天空。获得灵感。它与第三眼和顶轮有关。蓝色和紫色，青金石支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Bir sanat eseri yaratın veya müze gezin\n• Gökyüzünü ve yıldızları izleyin\n• Hayallerinizi bir kağıda yazın\n• 'Ben yaratıcıyım ve ilham doluyum' olumlamasını yapın\n• Mavi bir kıyafet giyin",
      en: "• Create an artwork or visit a museum\n• Watch the sky and stars\n• Write your dreams on a paper\n• Affirm 'I am creative and full of inspiration'\n• Wear a blue outfit",
      zh: "• 创作一件艺术品或参观博物馆\n• 观察天空和星星\n• 在纸上写下你的梦想\n• 肯定'我富有创造力并充满灵感'\n• 穿蓝色衣服",
    },
  },
  {
    time: "18:18",
    title: {
      tr: "Bolluk akıyor",
      en: "Abundance flowing",
      zh: "丰盛在流动",
    },
    meaning: {
      tr: "Maddi konularda şansın dönüyor. Beklediğin para ya da fırsat sana doğru geliyor.",
      en: "Your luck in financial matters is turning. The money or opportunity you've been waiting for is coming to you.",
      zh: "你在财务方面的运气正在好转。你等待的钱或机会正向你走来。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "18:18, 1 ve 8 rakamlarının enerjisini taşır. 1 liderlik, 8 ise güç ve bolluktur. Toplamı 18 (1+8+1+8=18 -> 1+8=9) olan bu saat, tamamlanma ve bilgelik enerjisiyle bağlantılıdır. 18 sayısı aynı zamanda Ay kartıyla ilişkilendirilir; sezgiler, rüyalar ve bilinçaltı konularını gündeme getirir. Maddi başarı ile ruhsal tatmin arasında denge kurmanız gerektiğini söyler.",
      en: "18:18 carries the energy of numbers 1 and 8. 1 is leadership, 8 is power and abundance. With a sum of 18 (1+8+1+8=18 -> 1+8=9), this hour is connected to completion and wisdom energy. The number 18 is also associated with the Moon card; it brings up intuition, dreams, and subconscious issues. It tells you that you need to establish a balance between material success and spiritual satisfaction.",
      zh: "18:18 承载着数字 1 和 8 的能量。1 是领导力，8 是力量和丰盛。这个时刻的总和为 18（1+8+1+8=18 -> 1+8=9），与完成和智慧的能量相连。数字 18 也与'月亮'塔罗牌相关联；它提出了直觉、梦境和潜意识问题。它告诉你，你需要在物质成功和精神满足之间建立平衡。",
    },
    astrology: {
      tr: "Astrolojik olarak 18:18, Ay ve Mars etkisindedir. Yengeç ve Akrep burçlarının enerjisiyle uyumludur. Duygusal derinlik ve mücadele gücü bir aradadır. Sezgileriniz size yol gösterecektir. Rüyalarınızın rehberliğine güvenin.",
      en: "Astrologically, 18:18 is under the influence of the Moon and Mars. It is compatible with the energies of Cancer and Scorpio. Emotional depth and fighting power are together. Your intuition will guide you. Trust the guidance of your dreams.",
      zh: "从占星学角度来看，18:18 受月亮和火星的影响。它与巨蟹座和天蝎座的能量相容。情感深度和战斗力结合在一起。你的直觉会指引你。相信你梦境的指引。",
    },
    loveAndRelationships: {
      tr: "Aşkta 18:18, duygusal derinleşme zamanıdır. Partnerinizle aranızdaki bağ güçleniyor. Birbirinizi kelimeler olmadan da anlayabilirsiniz. Bekar iseniz, sizi ruhsal olarak tamamlayacak biriyle karşılaşabilirsiniz. Ancak korkularınızın sizi engellemesine izin vermeyin.",
      en: "In love, 18:18 is the time for emotional deepening. The bond between you and your partner is strengthening. You can understand each other without words. If you are single, you might encounter someone who will complete you spiritually. However, do not let your fears stop you.",
      zh: "在爱情中，18:18 是情感加深的时刻。你和伴侣之间的纽带正在加强。你们可以不用言语就能互相理解。如果你单身，你可能会遇到一个能在精神上完善你的人。但是，不要让你的恐惧阻碍你。",
    },
    careerAndMoney: {
      tr: "Kariyerde 18:18, finansal başarı ve kazanç müjdesidir. Yatırımlarınızın karşılığını alabilirsiniz. İş hayatında sezgilerinizi kullanarak doğru kararlar verebilirsiniz. Gayrimenkul veya evle ilgili işlerde şanslısınız.",
      en: "In career, 18:18 heralds financial success and gain. You can get the return on your investments. You can make the right decisions in business life by using your intuition. You are lucky in real estate or home-related businesses.",
      zh: "在职业方面，18:18 预示着财务成功和收益。你可以获得投资回报。通过运用直觉，你可以在商业生活中做出正确的决定。你在房地产或家庭相关业务方面很幸运。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 18:18, bilinçaltı temizliği zamanıdır. Korkularınızla yüzleşin ve onları serbest bırakın. Ay ritüelleri yapmak için uygundur. Üçüncü göz çakrası ile ilişkilidir. Gümüş ve beyaz renkleri, ay taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 18:18 is the time for subconscious cleansing. Face your fears and release them. It is suitable for performing Moon rituals. It is related to the third eye chakra. Silver and white colors, moonstone support the energy of this hour.",
      zh: "在灵性层面上，18:18 是潜意识清理的时刻。面对你的恐惧并释放它们。它适合进行月亮仪式。它与第三眼脉轮有关。银色和白色，月光石支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Rüyalarınızı yazın ve analiz edin\n• Birikim yapmaya başlayın\n• Korkularınızı bir kağıda yazıp yakın\n• 'Ben bolluk içindeyim ve güvendeyim' olumlamasını yapın\n• Gümüş bir takı takın",
      en: "• Write and analyze your dreams\n• Start saving\n• Write your fears on a paper and burn it\n• Affirm 'I am in abundance and I am safe'\n• Wear a silver jewelry",
      zh: "• 记录并分析你的梦\n• 开始储蓄\n• 将你的恐惧写在纸上并烧掉\n• 肯定'我处于丰盛之中，我很安全'\n• 佩戴银饰",
    },
  },
  {
    time: "19:19",
    title: {
      tr: "Sabırlı ol",
      en: "Be patient",
      zh: "保持耐心",
    },
    meaning: {
      tr: "İstediğin şey için biraz daha zamana ihtiyaç var. Acele etme, her şey doğru zamanda olacak.",
      en: "A little more time is needed for what you want. Don't rush, everything will happen at the right time.",
      zh: "你想要的东西还需要一点时间。不要着急，一切都会在正确的时间发生。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "19:19, 1 ve 9 rakamlarının enerjisini taşır. 1 başlangıç, 9 ise bitiştir. Toplamı 20 (1+9+1+9=20 -> 2+0=2) olan bu saat, sabır, işbirliği ve diplomasi enerjisiyle bağlantılıdır. Bir döngünün sonuna geldiniz ve yenisine başlamak üzeresiniz. Ancak bu geçiş sürecinde sabırlı olmanız ve akışa güvenmeniz gerekiyor.",
      en: "19:19 carries the energy of numbers 1 and 9. 1 is beginning, 9 is ending. With a sum of 20 (1+9+1+9=20 -> 2+0=2), this hour is connected to patience, cooperation, and diplomacy energy. You have come to the end of a cycle and are about to start a new one. However, you need to be patient and trust the flow during this transition process.",
      zh: "19:19 承载着数字 1 和 9 的能量。1 是开始，9 是结束。这个时刻的总和为 20（1+9+1+9=20 -> 2+0=2），与耐心、合作和外交的能量相连。你已经到达一个循环的终点，即将开始一个新的循环。然而，在这个过渡过程中，你需要保持耐心并相信流程。",
    },
    astrology: {
      tr: "Astrolojik olarak 19:19, Güneş ve Mars etkisindedir. Aslan ve Koç burçlarının enerjisiyle uyumludur. Enerjiniz yüksek olsa da, onu kontrollü kullanmalısınız. Öfke veya sabırsızlık size zarar verebilir. Spor yapmak veya fiziksel aktivite enerjinizi dengelemenize yardımcı olur.",
      en: "Astrologically, 19:19 is under the influence of the Sun and Mars. It is compatible with the energies of Leo and Aries. Even though your energy is high, you must use it in a controlled manner. Anger or impatience can harm you. Doing sports or physical activity helps you balance your energy.",
      zh: "从占星学角度来看，19:19 受太阳和火星的影响。它与狮子座和白羊座的能量相容。即使你的能量很高，你也必须有控制地使用它。愤怒或急躁可能会伤害你。进行运动或体育活动有助于你平衡能量。",
    },
    loveAndRelationships: {
      tr: "Aşkta 19:19, sabır sınavıdır. İlişkinizde her şey istediğiniz hızda ilerlemeyebilir. Partnerinize zaman tanıyın. Bekar iseniz, doğru kişi doğru zamanda karşınıza çıkacaktır; aceleci davranıp yanlış kararlar vermeyin.",
      en: "In love, 19:19 is a test of patience. Everything in your relationship may not progress at the speed you want. Give your partner time. If you are single, the right person will appear at the right time; do not act hastily and make wrong decisions.",
      zh: "在爱情中，19:19 是耐心的考验。你关系中的一切可能不会按照你想要的速度发展。给你的伴侣一些时间。如果你单身，对的人会在对的时间出现；不要仓促行事，做出错误的决定。",
    },
    careerAndMoney: {
      tr: "Kariyerde 19:19, meyveleri toplama öncesi son aşamadır. Projeleriniz sonuçlanmak üzere. Pes etmeyin, son bir gayretle hedefe ulaşacaksınız. Finansal olarak istikrarlı bir döneme giriyorsunuz.",
      en: "In career, 19:19 is the final stage before harvesting the fruits. Your projects are about to be finalized. Do not give up, you will reach the goal with a final effort. You are entering a financially stable period.",
      zh: "在职业方面，19:19 是收获果实前的最后阶段。你的项目即将完成。不要放弃，只要再努力一下，你就会达到目标。你正在进入一个财务稳定的时期。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 19:19, evrensel zamanlamaya güvenme dersidir. Her şeyin bir zamanı vardır. Meditasyon yaparak sabrınızı geliştirin. Solar pleksus çakrası ile ilişkilidir. Sarı ve altın renkleri, sitrin taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 19:19 is a lesson in trusting universal timing. Everything has a time. Develop your patience by meditating. It is related to the solar plexus chakra. Yellow and gold colors, citrine stone support the energy of this hour.",
      zh: "在灵性层面上，19:19 是关于信任宇宙时机的课程。万物皆有时。通过冥想培养你的耐心。它与太阳神经丛脉轮有关。黄色和金色，黄水晶支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Sabır gerektiren bir aktivite yapın (puzzle, örgü vb.)\n• Spor yapın veya yürüyüşe çıkın\n• Güneşin doğuşunu veya batışını izleyin\n• 'Ben evrensel zamanlamaya güveniyorum' olumlamasını yapın\n• Altın rengi bir aksesuar takın",
      en: "• Do an activity that requires patience (puzzle, knitting, etc.)\n• Do sports or go for a walk\n• Watch the sunrise or sunset\n• Affirm 'I trust universal timing'\n• Wear a gold accessory",
      zh: "• 做一项需要耐心的活动（拼图、编织等）\n• 运动或散步\n• 观看日出或日落\n• 肯定'我信任宇宙的时机'\n• 佩戴金色配饰",
    },
  },
  {
    time: "20:20",
    title: {
      tr: "Acele etme",
      en: "Don't rush",
      zh: "不要匆忙",
    },
    meaning: {
      tr: "Karar vermeden önce iyice düşün. Detayları gözden kaçırma, sakin kal.",
      en: "Think carefully before making a decision. Don't overlook details, stay calm.",
      zh: "做决定前要仔细思考。不要忽视细节，保持冷静。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "20:20, 2 ve 0 rakamlarının enerjisini taşır. 2 işbirliği ve denge, 0 ise potansiyeldir. Toplamı 4 (2+0+2+0=4) olan bu saat, düzen, pratiklik ve sabır enerjisiyle bağlantılıdır. Aceleci davranmamanız, adımlarınızı sağlam atmanız gerektiğini söyler. Ayrıntılara dikkat etmek size kazandıracaktır.",
      en: "20:20 carries the energy of numbers 2 and 0. 2 is cooperation and balance, 0 is potential. With a sum of 4 (2+0+2+0=4), this hour is connected to order, practicality, and patience energy. It tells you not to act hastily and to take solid steps. Paying attention to details will bring you gain.",
      zh: "20:20 承载着数字 2 和 0 的能量。2 是合作和平衡，0 是潜力。这个时刻的总和为 4（2+0+2+0=4），与秩序、实用性和耐心的能量相连。它告诉你不要仓促行事，要采取稳健的步骤。注重细节将为你带来收获。",
    },
    astrology: {
      tr: "Astrolojik olarak 20:20, Ay ve Satürn etkisindedir. Yengeç ve Oğlak burçlarının enerjisiyle uyumludur. Duygusal güvenlik ve maddi istikrar arayışı bir aradadır. Sorumluluklarınızın bilincinde olmalısınız. Geçmiş tecrübelerinizden ders çıkarın.",
      en: "Astrologically, 20:20 is under the influence of the Moon and Saturn. It is compatible with the energies of Cancer and Capricorn. The search for emotional security and material stability are together. You must be aware of your responsibilities. Learn from your past experiences.",
      zh: "从占星学角度来看，20:20 受月亮和土星的影响。它与巨蟹座和摩羯座的能量相容。寻求情感安全和物质稳定结合在一起。你必须意识到自己的责任。从过去的经验中学习。",
    },
    loveAndRelationships: {
      tr: "Aşkta 20:20, dürüstlük ve sadakat zamanıdır. Partnerinize karşı açık olun. Gizli saklı işler yapmayın. İlişkinizin temellerini sağlamlaştırmak için konuşun. Bekar iseniz, size güven verecek, ciddi düşünen biriyle tanışabilirsiniz.",
      en: "In love, 20:20 is the time for honesty and loyalty. Be open to your partner. Do not do things in secret. Talk to strengthen the foundations of your relationship. If you are single, you might meet someone serious who will give you confidence.",
      zh: "在爱情中，20:20 是诚实和忠诚的时刻。对你的伴侣敞开心扉。不要做秘密的事情。通过交谈来巩固你们关系的基础。如果你单身，你可能会遇到一个认真的、能给你信心的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 20:20, analiz ve planlama zamanıdır. Bir projeye başlamadan önce tüm riskleri hesaplayın. Acele karar vermeyin. Finansal olarak bütçenizi kontrol altında tutun. Tasarruf yapmak için iyi bir dönemdir.",
      en: "In career, 20:20 is the time for analysis and planning. Calculate all risks before starting a project. Do not make hasty decisions. Financially, keep your budget under control. It is a good period to save.",
      zh: "在职业方面，20:20 是分析和规划的时刻。在开始项目之前计算所有风险。不要做出仓促的决定。在财务上，控制你的预算。这是一个储蓄的好时期。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 20:20, içsel dengeyi bulma çağrısıdır. Duygularınızla mantığınızı dengeleyin. Meditasyon yaparak zihninizi sakinleştirin. Üçüncü göz çakrası ile ilişkilidir. İndigo ve gümüş renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 20:20 is a call to find inner balance. Balance your emotions with your logic. Calm your mind by meditating. It is related to the third eye chakra. Indigo and silver colors support the energy of this hour.",
      zh: "在灵性层面上，20:20 是寻找内心平衡的呼唤。平衡你的情感和逻辑。通过冥想平静你的头脑。它与第三眼脉轮有关。靛蓝色和银色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Bir yapılacaklar listesi hazırlayın\n• Bütçe planlaması yapın\n• Sessiz bir ortamda kitap okuyun\n• 'Ben sakin ve dengeliyim' olumlamasını yapın\n• Gümüş bir obje bulundurun",
      en: "• Prepare a to-do list\n• Make a budget plan\n• Read a book in a quiet environment\n• Affirm 'I am calm and balanced'\n• Keep a silver object",
      zh: "• 准备一份待办事项清单\n• 制定预算计划\n• 在安静的环境中读书\n• 肯定'我很平静且平衡'\n• 保留一件银色物品",
    },
  },
  {
    time: "21:21",
    title: {
      tr: "Başarı seninle",
      en: "Success is with you",
      zh: "成功与你同在",
    },
    meaning: {
      tr: "Büyük bir başarıya imza atmak üzeresin. Kendine güven ve yolunda ilerle.",
      en: "You are about to achieve great success. Believe in yourself and move forward on your path.",
      zh: "你即将取得巨大的成功。相信自己，在你的道路上前行。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "21:21, 2 ve 1 rakamlarının enerjisini taşır. 21 sayısı 'Dünya' tarot kartıyla ilişkilendirilir; bu, tamamlanma, başarı ve zafer demektir. Toplamı 6 (2+1+2+1=6) olan bu saat, uyum ve denge enerjisiyle de bağlantılıdır. Uzun süredir uğraştığınız bir işin meyvesini almak üzeresiniz. Evren sizi alkışlıyor.",
      en: "21:21 carries the energy of numbers 2 and 1. The number 21 is associated with the 'World' tarot card; this means completion, success, and victory. With a sum of 6 (2+1+2+1=6), this hour is also connected to harmony and balance energy. You are about to reap the fruits of a work you have been dealing with for a long time. The universe is applauding you.",
      zh: "21:21 承载着数字 2 和 1 的能量。数字 21 与'世界'塔罗牌相关联；这意味着完成、成功和胜利。这个时刻的总和为 6（2+1+2+1=6），也与和谐和平衡的能量相连。你即将收获你长期从事的工作的果实。宇宙正在为你鼓掌。",
    },
    astrology: {
      tr: "Astrolojik olarak 21:21, Jüpiter ve Güneş etkisindedir. Yay ve Aslan burçlarının enerjisiyle uyumludur. Şans, başarı ve genişleme enerjisi çok yüksektir. Tanınma, ödül alma veya terfi etme olasılığınız yüksektir. Kendinize olan güveniniz zirve yapacak.",
      en: "Astrologically, 21:21 is under the influence of Jupiter and the Sun. It is compatible with the energies of Sagittarius and Leo. Luck, success, and expansion energy are very high. Your probability of being recognized, receiving an award, or being promoted is high. Your self-confidence will peak.",
      zh: "从占星学角度来看，21:21 受木星和太阳的影响。它与射手座和狮子座的能量相容。运气、成功和扩张的能量非常高。你被认可、获奖或晋升的可能性很高。你的自信心将达到顶峰。",
    },
    loveAndRelationships: {
      tr: "Aşkta 21:21, mutluluk ve tamamlanma zamanıdır. İlişkinizde bir üst seviyeye geçebilirsiniz (evlilik, çocuk vb.). Partnerinizle uyumunuz mükemmeldir. Bekar iseniz, hayatınızın aşkıyla karşılaşabilir ve çok mutlu bir ilişkiye başlayabilirsiniz.",
      en: "In love, 21:21 is the time for happiness and completion. You can move to a higher level in your relationship (marriage, children, etc.). Your harmony with your partner is perfect. If you are single, you might meet the love of your life and start a very happy relationship.",
      zh: "在爱情中，21:21 是幸福和圆满的时刻。你们的关系可能会进入下一个阶段（婚姻、孩子等）。你与伴侣的和谐度是完美的。如果你单身，你可能会遇到你的一生挚爱，并开始一段非常幸福的关系。",
    },
    careerAndMoney: {
      tr: "Kariyerde 21:21, zafer zamanıdır. Hedeflerinize ulaştınız veya ulaşmak üzeresiniz. Başarınız takdir edilecek. Uluslararası işler veya seyahatler gündeme gelebilir. Finansal olarak bolluk içindesiniz.",
      en: "In career, 21:21 is the time for victory. You have reached or are about to reach your goals. Your success will be appreciated. International business or travel may come up. You are in financial abundance.",
      zh: "在职业方面，21:21 是胜利的时刻。你已经达到或即将达到你的目标。你的成功将受到赞赏。国际业务或旅行可能会出现。你在财务上非常富足。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 21:21, bütünlük hissidir. Kendinizi evrenle bir hissedersiniz. Şükran duymak için harika bir zamandır. Taç çakrası ile ilişkilidir. Mor ve altın renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 21:21 is the feeling of wholeness. You feel one with the universe. It is a great time to feel gratitude. It is related to the crown chakra. Purple and gold colors support the energy of this hour.",
      zh: "在灵性层面上，21:21 是完整的感觉。你感觉与宇宙合而为一。这是感恩的绝佳时刻。它与顶轮有关。紫色和金色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Başarılarınızı kutlayın\n• Şükran günlüğü tutun\n• Kendinize bir ödül verin\n• 'Ben başarılıyım ve tamamlanmış hissediyorum' olumlamasını yapın\n• Mor bir kıyafet giyin",
      en: "• Celebrate your successes\n• Keep a gratitude journal\n• Give yourself a reward\n• Affirm 'I am successful and I feel complete'\n• Wear a purple outfit",
      zh: "• 庆祝你的成功\n• 写感恩日记\n• 给自己一个奖励\n• 肯定'我很成功，我感到完整'\n• 穿紫色衣服",
    },
  },
  {
    time: "22:22",
    title: {
      tr: "Ruh eşi enerjisi",
      en: "Soulmate energy",
      zh: "灵魂伴侣能量",
    },
    meaning: {
      tr: "Hayatına giren biri ruh eşin olabilir. Bu bağı hafife alma, evren seni yönlendiriyor.",
      en: "Someone entering your life might be your soulmate. Don't take this connection lightly, the universe is guiding you.",
      zh: "进入你生活的人可能是你的灵魂伴侣。不要轻视这种联系，宇宙正在指引你。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "22:22, 22 usta sayısının iki kez tekrarlandığı son derece güçlü bir kombinasyondur. 22 sayısı 'usta inşaatçı' olarak bilinir ve büyük rüyaları gerçeğe dönüştürme gücünü taşır. Bu saat, manifestasyonun en üst seviyede olduğu anlardandır. Toplamı 8 (2+2+2+2=8) olan bu kombinasyon, sonsuzluk, bolluk, denge ve karmik adaletin enerjisini taşır. 8 rakamının yan yatmış hali sonsuzluk işareti olup, aynı zamanda veren ve alan dengesini simgeler. 22:22 görmek, hayatınızda büyük dönüşümlerin yaşanacağını ve özellikle ruhsal bir bağın güçleneceğini işaret eder. Ruh eşi, ikiz alev ya da can dostu gibi derin bağlantılar için bu saat çok anlamlıdır.",
      en: "22:22 is an extremely powerful combination where the master number 22 is repeated twice. The number 22 is known as the 'master builder' and carries the power to turn big dreams into reality. This hour is one of the moments when manifestation is at its highest level. This combination with a sum of 8 (2+2+2+2=8) carries the energy of infinity, abundance, balance, and karmic justice. The number 8 on its side is the infinity symbol and also represents the balance of giving and receiving. Seeing 22:22 indicates that major transformations will occur in your life and especially that a spiritual connection will strengthen. This hour is very meaningful for deep connections like soulmates, twin flames, or kindred spirits.",
      zh: "22:22 是大师数字 22 重复两次的极其强大的组合。数字 22 被称为'大师建造者'，具有将伟大梦想变为现实的力量。这个时刻是显化处于最高水平的时刻之一。这个组合的总和为 8（2+2+2+2=8），承载着无限、丰盛、平衡和业力正义的能量。横放的数字 8 是无限符号，也代表给予和接受的平衡。看到 22:22 表明你的生活将发生重大转变，尤其是灵性联系将加强。对于像灵魂伴侣、双生火焰或知己这样的深层联系，这个时刻非常有意义。",
    },
    astrology: {
      tr: "Astrolojik olarak 22:22, Venüs ve Neptün'ün enerjilerini bir araya getirir. Venüs aşkı, güzelliği ve uyumu; Neptün ise ruhsal bağları, rüyaları ve koşulsuz sevgiyi temsil eder. Bu saat, Boğa, Terazi ve Balık burçlarının titreşimleriyle uyum içindedir. Ay'ın 7. evde (ilişkiler evi) olduğu zamanlarda 22:22'yi görmek, ruh eşinizle karşılaşma ihtimalini artırır. Bu saat aynı zamanda gecelerin en derin anlarından biridir - rüya dünyasına geçiş başlamıştır. Bu saatte gördüğünüz rüyalar, gelecekteki aşkınız ya da hayat yolculuğunuz hakkında ipuçları taşıyabilir. Jüpiter'in olumlu açılarında 22:22 görmek, kadersel bir buluşmanın yakın olduğu anlamına gelir.",
      en: "Astrologically, 22:22 brings together the energies of Venus and Neptune. Venus represents love, beauty, and harmony; while Neptune represents spiritual bonds, dreams, and unconditional love. This hour is in harmony with the vibrations of Taurus, Libra, and Pisces. Seeing 22:22 when the Moon is in the 7th house (house of relationships) increases the likelihood of meeting your soulmate. This hour is also one of the deepest moments of the night - the transition to the dream world has begun. Dreams you have at this hour can carry clues about your future love or life journey. Seeing 22:22 during positive aspects of Jupiter means a destined meeting is near.",
      zh: "从占星学角度来看，22:22 汇集了金星和海王星的能量。金星代表爱、美和和谐；而海王星代表灵性纽带、梦想和无条件的爱。这个时刻与金牛座、天秤座和双鱼座的振动相协调。当月亮位于第七宫（关系宫）时看到 22:22，会增加遇到灵魂伴侣的可能性。这个时刻也是夜晚最深沉的时刻之一——通往梦境世界的过渡已经开始。你在这个时刻做的梦可能带有关于你未来爱情或人生旅程的线索。在木星相位良好时看到 22:22，意味着注定的相遇即将来临。",
    },
    loveAndRelationships: {
      tr: "22:22, aşk hayatınız için en büyülü ve anlamlı saatlerden biridir. Eğer bekar iseniz ve bu saati sıkça görüyorsanız, ruh eşinizle karşılaşma ihtimaliniz çok yüksektir. Evren sizi birbirinize yaklaştırıyor olabilir. Tanışacağınız kişi, sadece bir sevgili değil, ruhunuzla derin bir bağ kuracağınız biri olacak. Bir ilişkideyseniz, partnerinizle aranızdaki bağın ruhsal bir boyut kazandığını görebilirsiniz. Belki de bu kişi sizin ruh eşinizdir ve bu bağı daha da derinleştirme zamanı gelmiştir. 22:22 aynı zamanda geçmiş hayatlardan gelen bağlantıları da işaret edebilir. Birini ilk gördüğünüzde tanıdık geliyorsa, bu bir tesadüf değildir. Kalbinize güvenin ve bu enerjiyi kucaklayın.",
      en: "22:22 is one of the most magical and meaningful hours for your love life. If you're single and frequently see this hour, the likelihood of meeting your soulmate is very high. The universe might be bringing you closer together. The person you'll meet will not just be a lover, but someone with whom you'll form a deep soul connection. If you're in a relationship, you might see that the bond with your partner is gaining a spiritual dimension. Perhaps this person is your soulmate and it's time to deepen this connection even further. 22:22 can also indicate connections from past lives. If someone feels familiar when you first see them, it's not a coincidence. Trust your heart and embrace this energy.",
      zh: "22:22 是你爱情生活中最神奇和最有意义的时刻之一。如果你单身并且经常看到这个时间，遇到灵魂伴侣的可能性非常高。宇宙可能正在拉近你们的距离。你会遇到的人不仅仅是恋人，而是一个与你建立深层灵魂联系的人。如果你正在恋爱中，你可能会发现你与伴侣的纽带正在获得灵性维度。也许这个人是你的灵魂伴侣，是时候进一步加深这种联系了。22:22 也可能表明前世的联系。如果某人让你一见如故，这绝非巧合。相信你的心，拥抱这种能量。",
    },
    careerAndMoney: {
      tr: "Kariyer açısından 22:22, büyük projelerin hayata geçirilebileceği bir dönemin habercisidir. İş ortaklıkları, özellikle ruhsal ve değer olarak uyumlu olduğunuz kişilerle kuracağınız ortaklıklar, bu dönemde çok başarılı olabilir. Finansal bolluk yolda olabilir, ancak bu bolluk sadece para değil aynı zamanda tatmin ve anlam dolu bir kariyeri de içerir. Yaratıcı işlerle, sanatla ya da insanlara değer katan hizmetlerle uğraşıyorsanız, bu saat sizin için çok olumludur. Kendinizi ifade etme, yeteneklerinizi gösterme ve başkalarına ilham verme fırsatları kapınızdadır. Büyük düşünün, çünkü 22:22 büyük hayalleri gerçeğe dönüştürme enerjisidir.",
      en: "Career-wise, 22:22 heralds a period when big projects can be realized. Business partnerships, especially those with people you're spiritually and value-aligned with, can be very successful during this period. Financial abundance may be on its way, but this abundance includes not only money but also a fulfilling and meaningful career. If you're involved in creative work, art, or services that add value to people, this hour is very positive for you. Opportunities to express yourself, showcase your talents, and inspire others are at your door. Think big, because 22:22 is the energy of turning great dreams into reality.",
      zh: "从职业角度来看，22:22 预示着大项目可以实现的时期。商业伙伴关系，尤其是与你在精神和价值观上一致的人建立的伙伴关系，在这个时期可能会非常成功。财务丰盛可能在路上，但这种丰盛不仅包括金钱，还包括充满满足感和意义的职业。如果你从事创造性工作、艺术或为人们增加价值的服务，这个时刻对你非常有利。表达自己、展示才华和激励他人的机会就在你家门口。敢于梦想，因为 22:22 是将伟大梦想变为现实的能量。",
    },
    spiritualGuidance: {
      tr: "22:22, ruhsal gelişiminizin zirve noktalarından birini işaret eder. Bu saat, yüksek bilinçle tam bir uyum içinde olduğunuzu gösterir. Meditasyon, yoga, enerji çalışmaları ya da ruhsal pratikler için en uygun saattir. Gül kuarsi, rodonit ya da pembe turmalin gibi taşlar bu frekansta kalp çakranızı açar ve güçlendirir. Bu saatte aşk meleği Chamuel veya ruh eşi rehberliği için dua edebilirsiniz. Pembe ve gümüş renkleri bu saatin renkleridir. Pembe bir mum yakıp, 'Evren beni ruh eşimle buluşturuyor' gibi bir olumlama yapabilirsiniz. Gece yatmadan önce 22:22'yi görürseniz, bir dilek tutun ve sabah uyandığınızda gördüğünüz ilk rüyayı not edin - bu rüya size mesajlar taşıyor olabilir.",
      en: "22:22 marks one of the peak points of your spiritual development. This hour shows you're in perfect harmony with higher consciousness. It's the most suitable hour for meditation, yoga, energy work, or spiritual practices. Stones like rose quartz, rhodonite, or pink tourmaline open and strengthen your heart chakra at this frequency. At this hour you can pray to the love angel Chamuel or for soulmate guidance. Pink and silver are the colors of this hour. You can light a pink candle and make an affirmation like 'The universe is bringing me together with my soulmate.' If you see 22:22 before going to bed at night, make a wish and note the first dream you have when you wake up in the morning - this dream might carry messages for you.",
      zh: "22:22 标志着你灵性发展的顶峰点之一。这个时刻表明你与更高意识完全和谐。这是冥想、瑜伽、能量工作或灵性练习最合适的时刻。像粉晶、蔷薇辉石或粉红碧玺这样的石头在这个频率下打开并加强你的心轮。在这个时刻，你可以向爱之天使夏弥尔祈祷或寻求灵魂伴侣的指引。粉色和银色是这个时刻的颜色。你可以点燃粉色蜡烛并做出肯定的宣言，如'宇宙正在让我与我的灵魂伴侣相遇'。如果你在睡前看到 22:22，许个愿，并记录下你早上醒来时的第一个梦——这个梦可能带有给你的信息。",
    },
    actionSteps: {
      tr: "• Kalbinizi açın ve 'Ben ruh eşimle buluşmaya hazırım' diyin\n• Pembe bir gül kuarsi taşı edinin ve kalp çakranızın üzerinde tutun\n• Sevgi dolu bir enerji meditasyonu yapın, kendinizi sevgiyle doldurun\n• İdeal partnerinizin özelliklerini bir listede yazın, detaylı olun\n• Geçmişten gelen kırgınlıkları bırakın, affetmeyi seçin\n• Sosyal ortamlara çıkın, yeni insanlarla tanışın - kader sizi bekliyor olabilir\n• Günlüğünüze 'Bugün 22:22 gördüm' yazın ve o anki hislerinizi kaydedin",
      en: "• Open your heart and say 'I am ready to meet my soulmate'\n• Get a pink rose quartz stone and hold it over your heart chakra\n• Do a loving energy meditation, fill yourself with love\n• Write a list of your ideal partner's qualities, be detailed\n• Let go of past hurts, choose to forgive\n• Go to social settings, meet new people - fate might be waiting for you\n• Write in your journal 'I saw 22:22 today' and record your feelings at that moment",
      zh: "•以此打开你的心扉说'我准备好遇见我的灵魂伴侣了'\n• 拿一块粉晶石，放在你的心轮上\n• 做一个充满爱的能量冥想，让自己充满爱\n• 写下你理想伴侣的特质清单，要详细\n• 放下过去的伤害，选择原谅\n• 去社交场合，结识新朋友——命运可能在等着你\n• 在日记中写下'我今天看到了 22:22'并记录那一刻的感受",
    },
  },
  {
    time: "23:23",
    title: {
      tr: "İletişim önemli",
      en: "Communication is key",
      zh: "沟通是关键",
    },
    meaning: {
      tr: "Partnerinle ya da yakınlarınla konuşman gereken konular var. İletişim kanallarını açık tut.",
      en: "There are issues you need to discuss with your partner or loved ones. Keep communication channels open.",
      zh: "有些问题你需要与伴侣或亲人讨论。保持沟通渠道畅通。",
    },
    category: "Tam Ayna",
    numerology: {
      tr: "23:23, 2 ve 3 rakamlarının enerjisini taşır. 2 işbirliği, 3 ise iletişimdir. Toplamı 10 (2+3+2+3=10 -> 1+0=1) olan bu saat, yeni başlangıçlar ve liderlik enerjisiyle bağlantılıdır. İletişim becerilerinizi kullanarak insanları etkileme gücüne sahipsiniz. Sosyal çevrenizde popülerliğiniz artabilir.",
      en: "23:23 carries the energy of numbers 2 and 3. 2 is cooperation, 3 is communication. With a sum of 10 (2+3+2+3=10 -> 1+0=1), this hour is connected to new beginnings and leadership energy. You have the power to influence people using your communication skills. Your popularity in your social circle may increase.",
      zh: "23:23 承载着数字 2 和 3 的能量。2 是合作，3 是沟通。这个时刻的总和为 10（2+3+2+3=10 -> 1+0=1），与新的开始和领导力能量相连。你有能力利用你的沟通技巧影响他人。你在社交圈中的受欢迎程度可能会增加。",
    },
    astrology: {
      tr: "Astrolojik olarak 23:23, Merkür ve Jüpiter etkisindedir. İkizler ve Yay burçlarının enerjisiyle uyumludur. Hareketli, neşeli ve konuşkan bir enerjidir. Seyahatler, eğitimler ve sosyal etkinlikler için uygundur. Esnek olmanız gereken durumlar olabilir.",
      en: "Astrologically, 23:23 is under the influence of Mercury and Jupiter. It is compatible with the energies of Gemini and Sagittarius. It is an active, cheerful, and talkative energy. It is suitable for travels, trainings, and social events. There may be situations where you need to be flexible.",
      zh: "从占星学角度来看，23:23 受水星和木星的影响。它与双子座和射手座的能量相容。这是一种活跃、快乐和健谈的能量。它适合旅行、培训和社交活动。可能会有你需要灵活应对的情况。",
    },
    loveAndRelationships: {
      tr: "Aşkta 23:23, diyalog zamanıdır. Partnerinizle her şeyi konuşabilir, sorunları çözebilirsiniz. Birlikte eğlenceli vakit geçirmek ilişkinizi güçlendirecektir. Bekar iseniz, sosyal ortamlarda tanışacağınız biriyle güzel bir iletişim kurabilirsiniz.",
      en: "In love, 23:23 is the time for dialogue. You can talk about everything with your partner and solve problems. Having fun together will strengthen your relationship. If you are single, you can establish good communication with someone you meet in social environments.",
      zh: "在爱情中，23:23 是对话的时刻。你可以与伴侣谈论一切并解决问题。一起度过愉快的时光将加强你们的关系。如果你单身，你可以与在社交场合遇到的人建立良好的沟通。",
    },
    careerAndMoney: {
      tr: "Kariyerde 23:23, ağ kurma (networking) zamanıdır. Yeni insanlarla tanışmak size iş kapıları açacaktır. Pazarlama, satış ve medya alanlarında başarı getirir. Finansal olarak, iletişim becerilerinizi kullanarak kazanç elde edebilirsiniz.",
      en: "In career, 23:23 is the time for networking. Meeting new people will open business doors for you. It brings success in marketing, sales, and media fields. Financially, you can earn income thanks to your communication skills.",
      zh: "在职业方面，23:23 是建立人脉的时刻。结识新朋友将为你打开商业大门。它在市场营销、销售和媒体领域带来成功。在财务上，由于你的沟通技巧，你可以获得收入。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 23:23, esneklik dersidir. Hayatın akışına uyum sağlayın. Direnmeyin. Boğaz çakrası ile ilişkilidir. Mavi ve turkuaz renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 23:23 is a lesson in flexibility. Adapt to the flow of life. Do not resist. It is related to the throat chakra. Blue and turquoise colors support the energy of this hour.",
      zh: "在灵性层面上，23:23 是关于灵活性的课程。适应生活的流动。不要抗拒。它与喉轮有关。蓝色和绿松石色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Sosyal bir etkinliğe katılın\n• Eski bir arkadaşınızı arayın\n• Mavi bir fular veya kravat takın\n• 'Ben kendimi kolaylıkla ifade ediyorum' olumlamasını yapın\n• Seyahat planı yapın",
      en: "• Join a social event\n• Call an old friend\n• Wear a blue scarf or tie\n• Affirm 'I express myself easily'\n• Make a travel plan",
      zh: "• 参加社交活动\n• 给老朋友打电话\n• 戴蓝色围巾或领带\n• 肯定'我能轻松地表达自己'\n• 制定旅行计划",
    },
  },
  {
    time: "01:10",
    title: {
      tr: "Geçmiş seni özlüyor",
      en: "The past misses you",
      zh: "过去在想念你",
    },
    meaning: {
      tr: "Eski bir tanıdık ya da aşk seni hâlâ aklında tutuyor olabilir. Belki de bir kapanış ya da yeniden doğuş zamanı gelmiştir.",
      en: "An old acquaintance or love might still be keeping you in mind. Perhaps it's time for closure or rebirth.",
      zh: "一位旧识或旧爱可能仍然把你放在心上。也许是时候结束或重生了。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "01:10, 1 ve 0 rakamlarının enerjisini taşır. 1 bireysellik, 0 ise sonsuzluktur. Toplamı 2 (1+1=2) olan bu saat, sezgi, duyarlılık ve ortaklık enerjisiyle bağlantılıdır. Ters ayna saati olması, bilinçaltı mesajlarına işaret eder. İç sesinizi dinlemeniz gereken bir zamandasınız.",
      en: "01:10 carries the energy of numbers 1 and 0. 1 is individuality, 0 is infinity. With a sum of 2 (1+1=2), this hour is connected to intuition, sensitivity, and partnership energy. Being a reverse mirror hour points to subconscious messages. You are in a time where you need to listen to your inner voice.",
      zh: "01:10 承载着数字 1 和 0 的能量。1 是个性，0 是无限。这个时刻的总和为 2（1+1=2），与直觉、敏感和伙伴关系的能量相连。作为镜像时间，它指向潜意识信息。你正处于需要倾听内心声音的时刻。",
    },
    astrology: {
      tr: "Astrolojik olarak 01:10, Ay ve Venüs etkisindedir. Yengeç ve Terazi burçlarının enerjisiyle uyumludur. Duygusal hassasiyet ve estetik anlayışı ön plandadır. Sanatsal faaliyetler ve romantik jestler için uygundur.",
      en: "Astrologically, 01:10 is under the influence of the Moon and Venus. It is compatible with the energies of Cancer and Libra. Emotional sensitivity and aesthetic understanding are at the forefront. It is suitable for artistic activities and romantic gestures.",
      zh: "从占星学角度来看，01:10 受月亮和金星的影响。它与巨蟹座和天秤座的能量相容。情感敏感度和审美理解力处于前沿。它适合艺术活动和浪漫姿态。",
    },
    loveAndRelationships: {
      tr: "Aşkta 01:10, gizli hayranlık ve platonik aşkı simgeler. Birisi size karşı yoğun duygular besliyor olabilir. Mevcut ilişkinizde ise daha fazla şefkat ve ilgi göstermeniz gerekebilir. Duygularınızı saklamayın.",
      en: "In love, 01:10 symbolizes secret admiration and platonic love. Someone might be harboring intense feelings for you. In your current relationship, you might need to show more compassion and attention. Do not hide your feelings.",
      zh: "在爱情中，01:10 象征着秘密的爱慕和柏拉图式的爱。可能有人对你怀有强烈的感情。在你目前的关系中，你可能需要表现出更多的同情和关注。不要隐瞒你的感受。",
    },
    careerAndMoney: {
      tr: "Kariyerde 01:10, işbirliği ve diplomasi zamanıdır. Tek başınıza hareket etmek yerine ekip çalışmasına önem verin. İş arkadaşlarınızla ilişkilerinizi güçlendirin. Finansal olarak dengeli bir dönemdesiniz.",
      en: "In career, 01:10 is the time for cooperation and diplomacy. Instead of acting alone, give importance to teamwork. Strengthen your relationships with your colleagues. You are in a financially balanced period.",
      zh: "在职业方面，01:10 是合作和外交的时刻。与其单独行动，不如重视团队合作。加强你与同事的关系。你在财务上处于平衡时期。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 01:10, sezgisel uyanış zamanıdır. Rüyalarınız ve hisleriniz size rehberlik ediyor. Sakral çakra ile ilişkilidir. Turuncu ve gümüş renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 01:10 is the time for intuitive awakening. Your dreams and feelings are guiding you. It is related to the sacral chakra. Orange and silver colors support the energy of this hour.",
      zh: "在灵性层面上，01:10 是直觉觉醒的时刻。你的梦和感觉正在指引你。它与骶轮有关。橙色和银色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Eski bir arkadaşınızı arayın\n• Duygularınızı ifade eden bir mektup yazın (göndermek zorunda değilsiniz)\n• Turuncu bir obje bulundurun\n• 'Ben duygularımla barışığım' olumlamasını yapın\n• Sanatsal bir aktivite yapın",
      en: "• Call an old friend\n• Write a letter expressing your feelings (you don't have to send it)\n• Keep an orange object\n• Affirm 'I am at peace with my emotions'\n• Do an artistic activity",
      zh: "• 给老朋友打电话\n• 写一封表达你感受的信（你不必寄出）\n• 保留一件橙色物品\n• 肯定'我与我的情绪和解'\n• 做一项艺术活动",
    },
  },
  {
    time: "02:20",
    title: {
      tr: "İyi haberler yolda",
      en: "Good news on the way",
      zh: "好消息在路上",
    },
    meaning: {
      tr: "Beklediğin o güzel haber çok yakında gelecek. Umudunu kaybetme.",
      en: "That good news you've been waiting for is coming very soon. Don't lose hope.",
      zh: "你等待的好消息很快就会到来。不要失去希望。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "02:20, 2 ve 0 rakamlarının enerjisini taşır. 2 denge, 0 ise potansiyeldir. Toplamı 4 (2+2=4) olan bu saat, sabır, düzen ve istikrar enerjisiyle bağlantılıdır. Ters ayna saati olarak, sabrınızın ödüllendirileceğini müjdeler. Emeklerinizin karşılığını alacaksınız.",
      en: "02:20 carries the energy of numbers 2 and 0. 2 is balance, 0 is potential. With a sum of 4 (2+2=4), this hour is connected to patience, order, and stability energy. As a reverse mirror hour, it heralds that your patience will be rewarded. You will get the return on your efforts.",
      zh: "02:20 承载着数字 2 和 0 的能量。2 是平衡，0 是潜力。这个时刻的总和为 4（2+2=4），与耐心、秩序和稳定的能量相连。作为镜像时间，它预示着你的耐心将得到回报。你会得到你努力的回报。",
    },
    astrology: {
      tr: "Astrolojik olarak 02:20, Satürn ve Venüs etkisindedir. Oğlak ve Boğa burçlarının enerjisiyle uyumludur. Kalıcı değerler yaratma ve maddi güvenlik konuları ön plandadır. Disiplinli çalışmanızın meyvelerini toplayacaksınız.",
      en: "Astrologically, 02:20 is under the influence of Saturn and Venus. It is compatible with the energies of Capricorn and Taurus. Creating lasting values and material security issues are at the forefront. You will reap the fruits of your disciplined work.",
      zh: "从占星学角度来看，02:20 受土星和金星的影响。它与摩羯座和金牛座的能量相容。创造持久价值和物质安全问题处于前沿。你将收获你纪律严明工作的果实。",
    },
    loveAndRelationships: {
      tr: "Aşkta 02:20, sadakat ve güven zamanıdır. İlişkiniz sağlam temellere oturuyor. Partnerinizle geleceğe dair planlar yapabilirsiniz. Bekar iseniz, ciddi ve güvenilir biriyle tanışabilirsiniz.",
      en: "In love, 02:20 is the time for loyalty and trust. Your relationship is settling on solid foundations. You can make plans for the future with your partner. If you are single, you might meet someone serious and reliable.",
      zh: "在爱情中，02:20 是忠诚和信任的时刻。你的关系正建立在坚实的基础上。你可以与伴侣制定未来计划。如果你单身，你可能会遇到一个认真可靠的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 02:20, terfi veya zam haberi getirebilir. İşinizdeki başarınız üstleriniz tarafından fark ediliyor. Finansal olarak yatırım yapmak için uygun bir zamandır. Gayrimenkul konularında şanslısınız.",
      en: "In career, 02:20 might bring promotion or raise news. Your success in your job is being noticed by your superiors. It is a suitable time to invest financially. You are lucky in real estate matters.",
      zh: "在职业方面，02:20 可能会带来晋升或加薪的消息。你在工作中的成功正被上级注意到。这是进行财务投资的合适时机。你在房地产事务上很幸运。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 02:20, topraklanma zamanıdır. Doğada vakit geçirin. Kök çakrası ile ilişkilidir. Kahverengi ve yeşil renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 02:20 is the time for grounding. Spend time in nature. It is related to the root chakra. Brown and green colors support the energy of this hour.",
      zh: "在灵性层面上，02:20 是接地的时刻。在大自然中度过时光。它与根轮有关。棕色和绿色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Doğada yürüyüş yapın\n• Evinizde düzenleme yapın\n• Yatırım planlarınızı gözden geçirin\n• 'Ben güvendeyim ve destekleniyorum' olumlamasını yapın\n• Yeşil bir bitki ekin veya bakın",
      en: "• Go for a walk in nature\n• Organize your home\n• Review your investment plans\n• Affirm 'I am safe and supported'\n• Plant or care for a green plant",
      zh: "• 在大自然中散步\n• 整理你的家\n• 审查你的投资计划\n• 肯定'我很安全且受到支持'\n• 种植或照顾绿色植物",
    },
  },
  {
    time: "03:30",
    title: {
      tr: "Arzuların belirginleşiyor",
      en: "Desires becoming clear",
      zh: "欲望变得清晰",
    },
    meaning: {
      tr: "Ne istediğini artık daha net biliyorsun. Hedeflerine odaklan ve harekete geç.",
      en: "You now know more clearly what you want. Focus on your goals and take action.",
      zh: "你现在更清楚自己想要什么。专注于你的目标并采取行动。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "03:30, 3 ve 0 rakamlarının enerjisini taşır. 3 yaratıcılık, 0 ise sonsuzluktur. Toplamı 6 (3+3=6) olan bu saat, aile, sevgi ve sorumluluk enerjisiyle bağlantılıdır. Ters ayna saati olarak, içsel arzularınızın ve yeteneklerinizin farkına varmanızı sağlar. Kendinizi ifade etme zamanı.",
      en: "03:30 carries the energy of numbers 3 and 0. 3 is creativity, 0 is infinity. With a sum of 6 (3+3=6), this hour is connected to family, love, and responsibility energy. As a reverse mirror hour, it allows you to realize your inner desires and talents. It is time to express yourself.",
      zh: "03:30 承载着数字 3 和 0 的能量。3 是创造力，0 是无限。这个时刻的总和为 6（3+3=6），与家庭、爱和责任的能量相连。作为镜像时间，它让你意识到内在的欲望和才能。是时候表达自己了。",
    },
    astrology: {
      tr: "Astrolojik olarak 03:30, Júpiter ve Venüs etkisindedir. Yay ve Terazi burçlarının enerjisiyle uyumludur. Sosyal ilişkiler, sanat ve adalet konuları ön plandadır. Çevrenizdeki insanlara yardım etme isteğiniz artabilir.",
      en: "Astrologically, 03:30 is under the influence of Jupiter and Venus. It is compatible with the energies of Sagittarius and Libra. Social relationships, art, and justice issues are at the forefront. Your desire to help people around you may increase.",
      zh: "从占星学角度来看，03:30 受木星和金星的影响。它与射手座和天秤座的能量相容。社会关系、艺术和正义问题处于前沿。你帮助周围人的愿望可能会增加。",
    },
    loveAndRelationships: {
      tr: "Aşkta 03:30, uyum ve denge arayışıdır. Partnerinizle keyifli vakit geçirebilir, sanatsal etkinliklere katılabilirsiniz. Bekar iseniz, sosyal çevrenizden biriyle yakınlaşabilirsiniz. Çekiciliğiniz artıyor.",
      en: "In love, 03:30 is the search for harmony and balance. You can have a pleasant time with your partner, participate in artistic events. If you are single, you might get closer to someone from your social circle. Your attractiveness is increasing.",
      zh: "在爱情中，03:30 是寻求和谐与平衡。你可以与伴侣度过愉快的时光，参加艺术活动。如果你单身，你可能会与社交圈中的某人走得更近。你的吸引力正在增加。",
    },
    careerAndMoney: {
      tr: "Kariyerde 03:30, yaratıcı projeler için harika bir zamandır. Fikirlerinizi paylaşmaktan çekinmeyin. İletişim ve halkla ilişkiler alanlarında başarı vaat eder. Finansal olarak, hobilerinizden kazanç elde edebilirsiniz.",
      en: "In career, 03:30 is a great time for creative projects. Do not hesitate to share your ideas. It promises success in communication and public relations fields. Financially, you can earn income from your hobbies.",
      zh: "在职业方面，03:30 是创意项目的绝佳时机。不要犹豫分享你的想法。它在沟通和公共关系领域预示着成功。在财务上，你可以从你的爱好中获得收入。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 03:30, kalp çakrasını açma zamanıdır. Sevgi enerjisini yayın. Affedici olun. Pembe ve yeşil renkleri, pembe kuvars taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 03:30 is the time to open the heart chakra. Radiate love energy. Be forgiving. Pink and green colors, rose quartz stone support the energy of this hour.",
      zh: "在灵性层面上，03:30 是打开心轮的时刻。散发爱的能量。要宽容。粉色和绿色，粉晶石支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Yaratıcı bir şeyler yapın (resim, müzik, yazı)\n• Sevdiklerinize vakit ayırın\n• Kendinize bakım yapın\n• 'Ben sevgiyim ve yaratıcılığım akıyor' olumlamasını yapın\n• Pembe bir kıyafet giyin",
      en: "• Do something creative (painting, music, writing)\n• Spend time with your loved ones\n• Take care of yourself\n• Affirm 'I am love and my creativity is flowing'\n• Wear a pink outfit",
      zh: "• 做一些有创意的事情（绘画、音乐、写作）\n• 花时间与亲人在一起\n• 照顾好自己\n• 肯定'我是爱，我的创造力在流动'\n• 穿粉色衣服",
    },
  },
  {
    time: "04:40",
    title: {
      tr: "Güç sende",
      en: "Power is yours",
      zh: "力量属于你",
    },
    meaning: {
      tr: "Kendi gücünün farkına var. Zorlukların üstesinden gelebilecek kapasiteye sahipsin.",
      en: "Realize your own power. You have the capacity to overcome difficulties.",
      zh: "意识到你自己的力量。你有能力克服困难。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "04:40, 4 ve 0 rakamlarının enerjisini taşır. 4 düzen, 0 ise potansiyeldir. Toplamı 8 (4+4=8) olan bu saat, güç, otorite ve maddi başarı enerjisiyle bağlantılıdır. Ters ayna saati olarak, içsel gücünüzü keşfetmenizi ve liderlik özelliklerinizi ortaya koymanızı söyler.",
      en: "04:40 carries the energy of numbers 4 and 0. 4 is order, 0 is potential. With a sum of 8 (4+4=8), this hour is connected to power, authority, and material success energy. As a reverse mirror hour, it tells you to discover your inner power and reveal your leadership qualities.",
      zh: "04:40 承载着数字 4 和 0 的能量。4 是秩序，0 是潜力。这个时刻的总和为 8（4+4=8），与权力、权威和物质成功的能量相连。作为镜像时间，它告诉你发现内在力量并展现你的领导才能。",
    },
    astrology: {
      tr: "Astrolojik olarak 04:40, Satürn ve Mars etkisindedir. Oğlak ve Koç burçlarının enerjisiyle uyumludur. Hırs, kararlılık ve disiplin ön plandadır. Hedeflerinize ulaşmak için gereken enerjiye sahipsiniz.",
      en: "Astrologically, 04:40 is under the influence of Saturn and Mars. It is compatible with the energies of Capricorn and Aries. Ambition, determination, and discipline are at the forefront. You have the energy needed to reach your goals.",
      zh: "从占星学角度来看，04:40 受土星和火星的影响。它与摩羯座和白羊座的能量相容。雄心、决心和纪律处于前沿。你拥有实现目标所需的能量。",
    },
    loveAndRelationships: {
      tr: "Aşkta 04:40, sorumluluk alma zamanıdır. İlişkiniz için mücadele etmeniz gerekebilir. Partnerinize destek olun. Bekar iseniz, güçlü ve karizmatik biriyle tanışabilirsiniz.",
      en: "In love, 04:40 is the time to take responsibility. You might need to fight for your relationship. Support your partner. If you are single, you might meet someone strong and charismatic.",
      zh: "在爱情中，04:40 是承担责任的时刻。你可能需要为你的关系而战。支持你的伴侣。如果你单身，你可能会遇到一个强大而有魅力的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 04:40, yükseliş zamanıdır. Yönetici pozisyonuna gelebilir veya kendi işinizi kurabilirsiniz. Çok çalışmanızın karşılığını alacaksınız. Finansal olarak güçleniyorsunuz.",
      en: "In career, 04:40 is the time for rise. You can come to a manager position or start your own business. You will get the return on your hard work. You are getting stronger financially.",
      zh: "在职业方面，04:40 是上升的时刻。你可以晋升到管理职位或创办自己的企业。你会得到你辛勤工作的回报。你在财务上正在变强。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 04:40, özgüven geliştirme zamanıdır. Kendinize inanın. Solar pleksus çakrası ile ilişkilidir. Sarı ve altın renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 04:40 is the time to develop self-confidence. Believe in yourself. It is related to the solar plexus chakra. Yellow and gold colors support the energy of this hour.",
      zh: "在灵性层面上，04:40 是建立自信的时刻。相信自己。它与太阳神经丛脉轮有关。黄色和金色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Hedeflerinizi belirleyin ve plan yapın\n• Liderlik özelliklerinizi geliştirin\n• Spor yaparak gücünüzü artırın\n• 'Ben güçlüyüm ve başarabilirim' olumlamasını yapın\n• Altın rengi bir aksesuar takın",
      en: "• Set your goals and make a plan\n• Develop your leadership qualities\n• Increase your strength by doing sports\n• Affirm 'I am strong and I can succeed'\n• Wear a gold accessory",
      zh: "• 设定你的目标并制定计划\n• 发展你的领导才能\n• 通过运动增强体力\n• 肯定'我很强壮，我能成功'\n• 佩戴金色配饰",
    },
  },
  {
    time: "05:50",
    title: {
      tr: "Sürpriz gelişme",
      en: "Surprise development",
      zh: "意外的发展",
    },
    meaning: {
      tr: "Hiç beklemediğin bir anda güzel bir sürprizle karşılaşabilirsin. Hazırlıklı ol.",
      en: "You might encounter a nice surprise when you least expect it. Be prepared.",
      zh: "你可能会在你最意想不到的时候遇到惊喜。做好准备。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "05:50, 5 ve 0 rakamlarının enerjisini taşır. 5 değişim, 0 ise sonsuzluktur. Toplamı 10 (5+5=10 -> 1+0=1) olan bu saat, yeni başlangıçlar ve macera enerjisiyle bağlantılıdır. Ters ayna saati olarak, hayatınızda ani ve olumlu değişikliklerin olacağını müjdeler. Rutinden çıkma zamanı.",
      en: "05:50 carries the energy of numbers 5 and 0. 5 is change, 0 is infinity. With a sum of 10 (5+5=10 -> 1+0=1), this hour is connected to new beginnings and adventure energy. As a reverse mirror hour, it heralds that sudden and positive changes will happen in your life. It is time to get out of the routine.",
      zh: "05:50 承载着数字 5 和 0 的能量。5 是变化，0 是无限。这个时刻的总和为 10（5+5=10 -> 1+0=1），与新的开始和冒险的能量相连。作为镜像时间，它预示着你的生活将发生突然而积极的变化。是时候走出常规了。",
    },
    astrology: {
      tr: "Astrolojik olarak 05:50, Merkür ve Uranüs etkisindedir. İkizler ve Kova burçlarının enerjisiyle uyumludur. Özgürlük, yenilik ve iletişim konuları ön plandadır. Sıradışı fikirlerinizle dikkat çekebilirsiniz.",
      en: "Astrologically, 05:50 is under the influence of Mercury and Uranus. It is compatible with the energies of Gemini and Aquarius. Freedom, innovation, and communication issues are at the forefront. You can attract attention with your unusual ideas.",
      zh: "从占星学角度来看，05:50 受水星和天王星的影响。它与双子座和水瓶座的能量相容。自由、创新和沟通问题处于前沿。你可以用你不寻常的想法吸引注意力。",
    },
    loveAndRelationships: {
      tr: "Aşkta 05:50, heyecan ve yenilik zamanıdır. İlişkinize renk katacak sürprizler yapın. Bekar iseniz, sıra dışı bir ortamda ilginç biriyle tanışabilirsiniz. Aşk hayatınız hareketleniyor.",
      en: "In love, 05:50 is the time for excitement and novelty. Make surprises that will add color to your relationship. If you are single, you might meet someone interesting in an unusual environment. Your love life is getting active.",
      zh: "在爱情中，05:50 是兴奋和新奇的时刻。制造惊喜，为你的关系增添色彩。如果你单身，你可能会在不寻常的环境中遇到有趣的人。你的爱情生活正在变得活跃。",
    },
    careerAndMoney: {
      tr: "Kariyerde 05:50, fırsatlar zamanıdır. Yeni bir iş teklifi alabilir veya farklı bir sektöre geçiş yapabilirsiniz. Değişime açık olun. Finansal olarak beklenmedik kazançlar olabilir.",
      en: "In career, 05:50 is the time for opportunities. You might receive a new job offer or switch to a different sector. Be open to change. Financially, there may be unexpected gains.",
      zh: "在职业方面，05:50 是机会的时刻。你可能会收到新的工作机会或转到不同的行业。对变化持开放态度。在财务上，可能会有意外的收益。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 05:50, özgürleşme zamanıdır. Sizi kısıtlayan inançlardan kurtulun. Boğaz çakrası ile ilişkilidir. Mavi ve turkuaz renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 05:50 is the time for liberation. Get rid of beliefs that restrict you. It is related to the throat chakra. Blue and turquoise colors support the energy of this hour.",
      zh: "在灵性层面上，05:50 是解放的时刻。摆脱限制你的信念。它与喉轮有关。蓝色和绿松石色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Rutininizi değiştirin, farklı bir yoldan gidin\n• Yeni bir hobi deneyin\n• Spontane bir geziye çıkın\n• 'Ben değişime açığım ve hayatı seviyorum' olumlamasını yapın\n• Turkuaz bir takı takın",
      en: "• Change your routine, go a different way\n• Try a new hobby\n• Go on a spontaneous trip\n• Affirm 'I am open to change and I love life'\n• Wear a turquoise jewelry",
      zh: "• 改变你的常规，走不同的路\n• 尝试一个新的爱好\n• 进行一次自发的旅行\n• 肯定'我对变化持开放态度，我热爱生活'\n• 佩戴绿松石首饰",
    },
  },
  {
    time: "10:01",
    title: {
      tr: "Haber seni bulacak",
      en: "News will find you",
      zh: "消息会找到你",
    },
    meaning: {
      tr: "Kulağına bir dedikodu ya da ilginç bir haber gelebilir. Duyduklarını sorgulamadan önce doğruluğunu tart.",
      en: "You might hear a rumor or interesting news. Weigh its truth before questioning what you hear.",
      zh: "你可能会听到谣言或有趣的消息。在质疑你听到的内容之前，先权衡其真实性。",
    },
    category: "Ters Ayna",
  },
  {
    time: "12:21",
    title: {
      tr: "Kalbine yakın",
      en: "Close to their heart",
      zh: "靠近他们的心",
    },
    meaning: {
      tr: "Birinin seni düşündüğü ve sana duygusal olarak yaklaştığı bir an. Bu bağ giderek güçleniyor olabilir.",
      en: "A moment when someone is thinking of you and emotionally approaching you. This connection might be growing stronger.",
      zh: "有人在想念你并在情感上接近你的时刻。这种联系可能正在变得越来越强。",
    },
    category: "Ters Ayna",
  },
  {
    time: "13:31",
    title: {
      tr: "Olumsuz düşünceler",
      en: "Negative thoughts",
      zh: "消极的想法",
    },
    meaning: {
      tr: "Zihnini kurcalayan kötü düşüncelerden arınmalısın. Olaylara daha pozitif bakmayı dene.",
      en: "You should cleanse yourself of bad thoughts troubling your mind. Try to look at things more positively.",
      zh: "你应该清除困扰你头脑的坏想法。试着更积极地看待事情。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "13:31, 1 ve 3 rakamlarının enerjisini taşır. Toplamı 8 (1+3+3+1=8) olan bu saat, karma, güç ve dönüşüm enerjisiyle bağlantılıdır. Ters ayna olması, zihinsel kalıplarınızın sizi engellediğini gösterir. Kendi kendinizin düşmanı olmayın.",
      en: "13:31 carries the energy of numbers 1 and 3. With a sum of 8 (1+3+3+1=8), this hour is connected to karma, power, and transformation energy. Being a reverse mirror indicates that your mental patterns are hindering you. Do not be your own enemy.",
      zh: "13:31 承载着数字 1 和 3 的能量。这个时刻的总和为 8（1+3+3+1=8），与业力、力量和转化的能量相连。作为镜像时间，表明你的思维模式正在阻碍你。不要成为你自己的敌人。",
    },
    astrology: {
      tr: "Astrolojik olarak 13:31, Mars ve Satürn etkisindedir. Koç ve Oğlak burçlarının enerjisiyle uyumludur. Zorluklar ve engellerle karşılaşabilirsiniz, ancak bunlar sizi güçlendirmek içindir. Disiplinli olun.",
      en: "Astrologically, 13:31 is under the influence of Mars and Saturn. It is compatible with the energies of Aries and Capricorn. You may encounter difficulties and obstacles, but these are to strengthen you. Be disciplined.",
      zh: "从占星学角度来看，13:31 受火星和土星的影响。它与白羊座和摩羯座的能量相容。你可能会遇到困难和障碍，但这些是为了让你变得更强。要自律。",
    },
    loveAndRelationships: {
      tr: "Aşkta 13:31, karamsarlık uyarısıdır. İlişkinizde sürekli sorun aramak yerine güzelliklere odaklanın. Geçmiş hayal kırıklıklarınızın bugününüzü etkilemesine izin vermeyin. Bekar iseniz, umutsuzluğa kapılmayın.",
      en: "In love, 13:31 is a warning of pessimism. Instead of constantly looking for problems in your relationship, focus on the beauties. Do not let your past disappointments affect your present. If you are single, do not despair.",
      zh: "在爱情中，13:31 是悲观的警告。与其不断在关系中寻找问题，不如专注于美好。不要让你过去的失望影响你的现在。如果你单身，不要绝望。",
    },
    careerAndMoney: {
      tr: "Kariyerde 13:31, stres ve baskı zamanıdır. İş yükünüz artabilir. Ancak bu süreç geçicidir. Sabırlı olun ve planlı çalışın. Finansal konularda borçlanmaktan kaçının.",
      en: "In career, 13:31 is the time for stress and pressure. Your workload may increase. However, this process is temporary. Be patient and work planned. Avoid getting into debt in financial matters.",
      zh: "在职业方面，13:31 是压力和紧张的时刻。你的工作量可能会增加。然而，这个过程是暂时的。保持耐心并按计划工作。避免在财务问题上负债。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 13:31, zihinsel detoks zamanıdır. Olumsuz inanç kalıplarınızı fark edin ve dönüştürün. Kök çakra ile ilişkilidir. Kırmızı ve siyah renkleri, oniks taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 13:31 is the time for mental detox. Realize and transform your negative belief patterns. It is related to the root chakra. Red and black colors, onyx stone support the energy of this hour.",
      zh: "在灵性层面上，13:31 是精神排毒的时刻。意识到并转化你的消极信念模式。它与根轮有关。红色和黑色，缟玛瑙支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Olumsuz düşüncelerinizi bir kağıda yazıp yırtın\n• Doğada yürüyüş yaparak topraklanın\n• Kırmızı bir obje bulundurun\n• 'Ben gücümü elime alıyorum' olumlamasını yapın\n• Bir şükran listesi hazırlayın",
      en: "• Write your negative thoughts on a paper and tear it up\n• Ground yourself by walking in nature\n• Keep a red object\n• Affirm 'I am taking my power into my hands'\n• Prepare a gratitude list",
      zh: "• 将你的消极想法写在纸上并撕碎\n• 通过在大自然中行走来接地\n• 保留一件红色物品\n• 肯定'我将力量掌握在自己手中'\n• 准备一份感恩清单",
    },
  },
  {
    time: "14:41",
    title: {
      tr: "Şans seninle",
      en: "Luck is with you",
      zh: "好运与你同在",
    },
    meaning: {
      tr: "Beklenmedik bir yerden güzel bir haber gelebilir. Şans kapını çalmak üzere.",
      en: "Good news might come from an unexpected place. Luck is about to knock on your door.",
      zh: "好消息可能会从意想不到的地方传来。好运即将敲响你的门。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "14:41, 1 ve 4 rakamlarının enerjisini taşır. Toplamı 10 (1+4+4+1=10 -> 1+0=1) olan bu saat, yeni başlangıçlar, özgürlük ve macera enerjisiyle bağlantılıdır. Ters ayna olması, şansın beklenmedik bir şekilde geleceğini gösterir. Fırsatları değerlendirmeye hazır olun.",
      en: "14:41 carries the energy of numbers 1 and 4. With a sum of 10 (1+4+4+1=10 -> 1+0=1), this hour is connected to new beginnings, freedom, and adventure energy. Being a reverse mirror indicates that luck will come unexpectedly. Be ready to evaluate opportunities.",
      zh: "14:41 承载着数字 1 和 4 的能量。这个时刻的总和为 10（1+4+4+1=10 -> 1+0=1），与新的开始、自由和冒险的能量相连。作为镜像时间，表明好运会意外降临。准备好评估机会。",
    },
    astrology: {
      tr: "Astrolojik olarak 14:41, Jüpiter ve Uranüs etkisindedir. Yay ve Kova burçlarının enerjisiyle uyumludur. Sürpriz gelişmeler, ani değişimler ve özgürleşme isteği ön plandadır. Rutinin dışına çıkın.",
      en: "Astrologically, 14:41 is under the influence of Jupiter and Uranus. It is compatible with the energies of Sagittarius and Aquarius. Surprise developments, sudden changes, and the desire for liberation are at the forefront. Get out of the routine.",
      zh: "从占星学角度来看，14:41 受木星和天王星的影响。它与射手座和水瓶座的能量相容。意外的发展、突然的变化和解放的愿望处于前沿。走出常规。",
    },
    loveAndRelationships: {
      tr: "Aşkta 14:41, heyecan ve yenilik zamanıdır. İlişkinize renk katacak sürprizler yapın. Bekar iseniz, sıra dışı bir ortamda veya beklenmedik bir anda aşkı bulabilirsiniz. Maceraya açık olun.",
      en: "In love, 14:41 is the time for excitement and novelty. Make surprises that will add color to your relationship. If you are single, you can find love in an unusual environment or at an unexpected moment. Be open to adventure.",
      zh: "在爱情中，14:41 是兴奋和新奇的时刻。制造惊喜，为你的关系增添色彩。如果你单身，你可能会在不寻常的环境中或意想不到的时刻找到爱情。对冒险持开放态度。",
    },
    careerAndMoney: {
      tr: "Kariyerde 14:41, fırsatlar zamanıdır. Yeni bir iş teklifi veya proje gündeme gelebilir. Risk almaktan korkmayın. Finansal olarak şanslı bir dönemdesiniz, piyango gibi şans oyunlarında şansınızı deneyebilirsiniz.",
      en: "In career, 14:41 is the time for opportunities. A new job offer or project may come up. Do not be afraid to take risks. You are in a financially lucky period, you can try your luck in games of chance like lottery.",
      zh: "在职业方面，14:41 是机会的时刻。可能会出现新的工作机会或项目。不要害怕冒险。你在财务上处于幸运时期，你可以尝试像彩票这样的机会游戏。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 14:41, özgürleşme çağrısıdır. Sizi kısıtlayan inançlardan ve bağlardan kurtulun. Solar pleksus çakrası ile ilişkilidir. Sarı ve elektrik mavisi renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 14:41 is a call for liberation. Get rid of beliefs and bonds that restrict you. It is related to the solar plexus chakra. Yellow and electric blue colors support the energy of this hour.",
      zh: "在灵性层面上，14:41 是解放的呼唤。摆脱限制你的信念和束缚。它与太阳神经丛脉轮有关。黄色和电蓝色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Rutininizi değiştirecek bir şey yapın\n• Yeni bir yere gidin\n• Mavi veya sarı bir kıyafet giyin\n• 'Ben şanslıyım ve fırsatlara açığım' olumlamasını yapın\n• Bir dilek tutun",
      en: "• Do something that will change your routine\n• Go to a new place\n• Wear a blue or yellow outfit\n• Affirm 'I am lucky and open to opportunities'\n• Make a wish",
      zh: "• 做一些改变你常规的事情\n• 去一个新的地方\n• 穿蓝色或黄色的衣服\n• 肯定'我很幸运，我对机会持开放态度'\n• 许个愿",
    },
  },
  {
    time: "15:51",
    title: {
      tr: "Eski bir aşk",
      en: "An old love",
      zh: "一段旧爱",
    },
    meaning: {
      tr: "Geçmişten gelen biri tekrar hayatına girmek isteyebilir. Karar senin, ama dikkatli ol.",
      en: "Someone from the past might want to re-enter your life. The decision is yours, but be careful.",
      zh: "来自过去的人可能想重新进入你的生活。决定权在你，但要小心。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "15:51, 1 ve 5 rakamlarının enerjisini taşır. Toplamı 12 (1+5+5+1=12 -> 1+2=3) olan bu saat, iletişim, yaratıcılık ve değişim enerjisiyle bağlantılıdır. Ters ayna olması, geçmişin bugünü etkilemeye çalıştığını gösterir. Değişime direnip direnmemek sizin elinizde.",
      en: "15:51 carries the energy of numbers 1 and 5. With a sum of 12 (1+5+5+1=12 -> 1+2=3), this hour is connected to communication, creativity, and change energy. Being a reverse mirror indicates that the past is trying to affect the present. It is in your hands whether to resist change or not.",
      zh: "15:51 承载着数字 1 和 5 的能量。这个时刻的总和为 12（1+5+5+1=12 -> 1+2=3），与沟通、创造力和变化的能量相连。作为镜像时间，表明过去正试图影响现在。是否抵制变化掌握在你自己手中。",
    },
    astrology: {
      tr: "Astrolojik olarak 15:51, Merkür ve Plüton etkisindedir. İkizler ve Akrep burçlarının enerjisiyle uyumludur. Derin dönüşümler, sırlar ve tutkulu iletişimler gündeme gelebilir. Geçmişle yüzleşmeye hazır olun.",
      en: "Astrologically, 15:51 is under the influence of Mercury and Pluto. It is compatible with the energies of Gemini and Scorpio. Deep transformations, secrets, and passionate communications may come up. Be ready to face the past.",
      zh: "从占星学角度来看，15:51 受水星和冥王星的影响。它与双子座和天蝎座的能量相容。可能会出现深刻的转变、秘密和激情的交流。准备好面对过去。",
    },
    loveAndRelationships: {
      tr: "Aşkta 15:51, geçmişle hesaplaşma zamanıdır. Eski sevgiliniz dönebilir veya eski bir konu tekrar açılabilir. Bu sefer farklı bir sonuç almak istiyorsanız, farklı davranmalısınız. Tutkularınıza yenik düşmeyin.",
      en: "In love, 15:51 is the time to reckon with the past. Your ex may return or an old issue may reopen. If you want to get a different result this time, you must act differently. Do not succumb to your passions.",
      zh: "在爱情中，15:51 是与过去清算的时刻。你的前任可能会回来，或者旧话题可能会重提。如果你这次想要不同的结果，你必须采取不同的行动。不要屈服于你的激情。",
    },
    careerAndMoney: {
      tr: "Kariyerde 15:51, değişim rüzgarları estirir. İş değişikliği veya pozisyon değişikliği düşünebilirsiniz. Ancak ani kararlar vermeyin. Finansal olarak harcamalarınıza dikkat edin.",
      en: "In career, 15:51 blows winds of change. You can consider a job change or position change. However, do not make sudden decisions. Financially, pay attention to your expenses.",
      zh: "在职业方面，15:51 吹起了变革之风。你可以考虑换工作或换职位。但是，不要做出仓促的决定。在财务上，注意你的开支。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 15:51, dönüşüm ve yenilenme zamanıdır. Eskiyi bırakıp yeniye yer açın. Boğaz çakrası ile ilişkilidir. Mavi ve mor renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 15:51 is the time for transformation and renewal. Leave the old and make room for the new. It is related to the throat chakra. Blue and purple colors support the energy of this hour.",
      zh: "在灵性层面上，15:51 是转变和更新的时刻。抛弃旧的，为新的腾出空间。它与喉轮有关。蓝色和紫色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Geçmişle ilgili bir bağ kesme ritüeli yapın\n• Evinizde kullanmadığınız eşyaları atın\n• Mavi bir aksesuar takın\n• 'Ben değişimi kucaklıyorum' olumlamasını yapın\n• Günlük tutarak hislerinizi boşaltın",
      en: "• Perform a cord-cutting ritual related to the past\n• Throw away items you don't use in your home\n• Wear a blue accessory\n• Affirm 'I embrace change'\n• Empty your feelings by keeping a journal",
      zh: "• 进行与过去相关的切断联系仪式\n• 扔掉家里不用的物品\n• 佩戴蓝色配饰\n• 肯定'我拥抱变化'\n• 通过写日记清空你的感受",
    },
  },
  {
    time: "20:02",
    title: {
      tr: "Aranızda mesafe var",
      en: "There's distance between you",
      zh: "你们之间有距离",
    },
    meaning: {
      tr: "Fiziksel ya da duygusal bir uzaklık ilişkine etki ediyor olabilir. Köprü kurmak için sen ilk adımı atabilirsin.",
      en: "A physical or emotional distance might be affecting your relationship. You can take the first step to build a bridge.",
      zh: "身体或情感上的距离可能会影响你们的关系。你可以迈出第一步来搭建桥梁。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "20:02, 2 ve 0 rakamlarının enerjisini taşır. Toplamı 4 (2+0+0+2=4) olan bu saat, düzen, istikrar ve sabır enerjisiyle bağlantılıdır. Ters ayna olması, ilişkilerde veya projelerde bir kopukluk olduğunu gösterir. Sabırla ve özenle bu kopukluğu gidermeniz gerekir.",
      en: "20:02 carries the energy of numbers 2 and 0. With a sum of 4 (2+0+0+2=4), this hour is connected to order, stability, and patience energy. Being a reverse mirror indicates a disconnection in relationships or projects. You need to repair this disconnection with patience and care.",
      zh: "20:02 承载着数字 2 和 0 的能量。这个时刻的总和为 4（2+0+0+2=4），与秩序、稳定和耐心的能量相连。作为镜像时间，表明关系或项目中存在脱节。你需要耐心和细心地修复这种脱节。",
    },
    astrology: {
      tr: "Astrolojik olarak 20:02, Ay ve Satürn etkisindedir. Yengeç ve Oğlak burçlarının enerjisiyle uyumludur. Duygusal soğukluk veya mesafe hissedebilirsiniz. Ancak bu, ilişkinin temellerini sağlamlaştırmak için bir fırsattır.",
      en: "Astrologically, 20:02 is under the influence of the Moon and Saturn. It is compatible with the energies of Cancer and Capricorn. You may feel emotional coldness or distance. However, this is an opportunity to strengthen the foundations of the relationship.",
      zh: "从占星学角度来看，20:02 受月亮和土星的影响。它与巨蟹座和摩羯座的能量相容。你可能会感到情感冷淡或距离。然而，这是巩固关系基础的机会。",
    },
    loveAndRelationships: {
      tr: "Aşkta 20:02, özlem ve hasret zamanıdır. Partnerinizden uzak olabilirsiniz veya yan yanayken bile uzak hissedebilirsiniz. İletişim kurarak bu mesafeyi aşın. Bekar iseniz, geçmişte kalan birini özlüyor olabilirsiniz.",
      en: "In love, 20:02 is the time for longing and yearning. You may be far from your partner or feel distant even when side by side. Overcome this distance by communicating. If you are single, you may be missing someone from the past.",
      zh: "在爱情中，20:02 是渴望和思念的时刻。你可能远离你的伴侣，或者即使在身边也感到疏远。通过沟通克服这种距离。如果你单身，你可能在思念过去的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 20:02, disiplin ve odaklanma gerektirir. İşleriniz yavaş ilerleyebilir. Pes etmeyin. Finansal olarak birikim yapma zamanıdır. Gereksiz harcamalardan kaçının.",
      en: "In career, 20:02 requires discipline and focus. Your work may progress slowly. Do not give up. It is time to save financially. Avoid unnecessary expenses.",
      zh: "在职业方面，20:02 需要纪律和专注。你的工作可能进展缓慢。不要放弃。这是在财务上储蓄的时候。避免不必要的开支。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 20:02, içsel sessizlik zamanıdır. Kendi içinize dönün ve cevapları orada arayın. Üçüncü göz çakrası ile ilişkilidir. İndigo ve gümüş renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 20:02 is the time for inner silence. Turn inward and look for answers there. It is related to the third eye chakra. Indigo and silver colors support the energy of this hour.",
      zh: "在灵性层面上，20:02 是内心平静的时刻。转向内心并在那里寻找答案。它与第三眼脉轮有关。靛蓝色和银色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Sevdiğiniz kişiye bir mesaj atın veya arayın\n• Meditasyon yaparak iç huzurunuzu bulun\n• Gümüş bir obje bulundurun\n• 'Ben sevgiyi ve yakınlığı hak ediyorum' olumlamasını yapın\n• Bir kitap okuyun",
      en: "• Send a message or call your loved one\n• Find your inner peace by meditating\n• Keep a silver object\n• Affirm 'I deserve love and closeness'\n• Read a book",
      zh: "• 给你要爱的人发信息或打电话\n• 通过冥想找到内心的平静\n• 保留一件银色物品\n• 肯定'我值得爱和亲密'\n• 读一本书",
    },
  },
  {
    time: "21:12",
    title: {
      tr: "Sana ihtiyacı var",
      en: "They need you",
      zh: "他们需要你",
    },
    meaning: {
      tr: "Sevdiğin birinin desteğine ihtiyacı olabilir. Etrafına dikkatlice bak, yardım elini uzat.",
      en: "Someone you love might need your support. Look around carefully, extend a helping hand.",
      zh: "你爱的人可能需要你的支持。仔细环顾四周，伸出援手。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "21:12, 2 ve 1 rakamlarının enerjisini taşır. Toplamı 6 (2+1+1+2=6) olan bu saat, hizmet, aile ve sorumluluk enerjisiyle bağlantılıdır. Ters ayna olması, birinin sessiz çığlığını duymanız gerektiğini gösterir. Empati yeteneğinizi kullanın.",
      en: "21:12 carries the energy of numbers 2 and 1. With a sum of 6 (2+1+1+2=6), this hour is connected to service, family, and responsibility energy. Being a reverse mirror indicates that you need to hear someone's silent scream. Use your empathy skills.",
      zh: "21:12 承载着数字 2 和 1 的能量。这个时刻的总和为 6（2+1+1+2=6），与服务、家庭和责任的能量相连。作为镜像时间，表明你需要听到某人无声的尖叫。运用你的同理心。",
    },
    astrology: {
      tr: "Astrolojik olarak 21:12, Jüpiter ve Ay etkisindedir. Yay ve Yengeç burçlarının enerjisiyle uyumludur. Koruyucu ve besleyici bir enerji hakimdir. Sevdiklerinize kol kanat gerin.",
      en: "Astrologically, 21:12 is under the influence of Jupiter and the Moon. It is compatible with the energies of Sagittarius and Cancer. A protective and nurturing energy prevails. Watch over your loved ones.",
      zh: "从占星学角度来看，21:12 受木星和月亮的影响。它与射手座和巨蟹座的能量相容。保护和滋养的能量占主导地位。守护你的亲人。",
    },
    loveAndRelationships: {
      tr: "Aşkta 21:12, fedakarlık zamanıdır. Partnerinizin zor bir dönemden geçiyor olabilir. Ona destek olun. Bekar iseniz, yardımseverliğinizle birinin kalbini çalabilirsiniz.",
      en: "In love, 21:12 is the time for sacrifice. Your partner may be going through a difficult time. Support them. If you are single, you can steal someone's heart with your helpfulness.",
      zh: "在爱情中，21:12 是牺牲的时刻。你的伴侣可能正在经历一段困难时期。支持他们。如果你单身，你可以用你的乐于助人偷走某人的心。",
    },
    careerAndMoney: {
      tr: "Kariyerde 21:12, ekip çalışması ve yardımlaşma zamanıdır. İş arkadaşlarınıza destek olun. Bu iyiliğiniz size başarı olarak dönecektir. Finansal olarak cömert olabilirsiniz, ancak sınırlarınızı koruyun.",
      en: "In career, 21:12 is the time for teamwork and cooperation. Support your colleagues. This kindness will return to you as success. You can be financially generous, but maintain your boundaries.",
      zh: "在职业方面，21:12 是团队合作和互助的时刻。支持你的同事。这种善意将作为成功回报给你。你可以在财务上慷慨大方，但要保持底线。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 21:12, hizmet etme çağrısıdır. Başkalarına yardım ederek ruhsal olarak büyürsünüz. Kalp çakrası ile ilişkilidir. Yeşil ve pembe renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 21:12 is a call to serve. You grow spiritually by helping others. It is related to the heart chakra. Green and pink colors support the energy of this hour.",
      zh: "在灵性层面上，21:12 是服务的呼唤。通过帮助他人，你在灵性上成长。它与心轮有关。绿色和粉色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Birine yardım edin veya bağış yapın\n• Sevdiklerinizi arayıp hatırlarını sorun\n• Yeşil bir kıyafet giyin\n• 'Ben sevgi ve şefkat doluyum' olumlamasını yapın\n• Gönüllü çalışmalara katılın",
      en: "• Help someone or make a donation\n• Call your loved ones and ask how they are\n• Wear a green outfit\n• Affirm 'I am full of love and compassion'\n• Participate in volunteer work",
      zh: "• 帮助某人或捐款\n• 给你的亲人打电话问候他们\n• 穿绿色衣服\n• 肯定'我充满爱和同情'\n• 参加志愿者工作",
    },
  },
  {
    time: "23:32",
    title: {
      tr: "Dikkatli ol",
      en: "Be careful",
      zh: "小心",
    },
    meaning: {
      tr: "Biri senin hakkında konuşuyor ya da arkandan iş çeviriyor olabilir. Kimseye hemen güvenme.",
      en: "Someone might be talking about you or plotting behind your back. Don't trust anyone immediately.",
      zh: "有人可能在谈论你或在背后搞鬼。不要立刻相信任何人。",
    },
    category: "Ters Ayna",
    numerology: {
      tr: "23:32, 2 ve 3 rakamlarının enerjisini taşır. Toplamı 10 (2+3+3+2=10 -> 1+0=1) olan bu saat, iletişim ve zeka enerjisiyle bağlantılıdır. Ters ayna olması, iletişimin kötüye kullanılabileceğini gösterir. Dedikodulara ve manipülasyonlara karşı uyanık olun.",
      en: "23:32 carries the energy of numbers 2 and 3. With a sum of 10 (2+3+3+2=10 -> 1+0=1), this hour is connected to communication and intelligence energy. Being a reverse mirror indicates that communication can be misused. Be alert to gossip and manipulation.",
      zh: "23:32 承载着数字 2 和 3 的能量。这个时刻的总和为 10（2+3+3+2=10 -> 1+0=1），与沟通和智慧的能量相连。作为镜像时间，表明沟通可能被滥用。警惕流言蜚语和操纵。",
    },
    astrology: {
      tr: "Astrolojik olarak 23:32, Merkür ve Mars etkisindedir. İkizler ve Koç burçlarının enerjisiyle uyumludur. Keskin bir zeka ve hızlı bir dil, ancak aynı zamanda çatışma potansiyeli taşır. Tartışmalardan kaçının.",
      en: "Astrologically, 23:32 is under the influence of Mercury and Mars. It is compatible with the energies of Gemini and Aries. Sharp intelligence and a quick tongue, but also carries the potential for conflict. Avoid arguments.",
      zh: "从占星学角度来看，23:32 受水星和火星的影响。它与双子座和白羊座的能量相容。敏锐的智慧和敏捷的口才，但也带有冲突的潜力。避免争论。",
    },
    loveAndRelationships: {
      tr: "Aşkta 23:32, güvensizlik uyarısıdır. İlişkinizde şüpheleriniz varsa, bunları açıkça konuşun. Ancak suçlayıcı olmayın. Bekar iseniz, yeni tanıştığınız kişilere karşı temkinli yaklaşın.",
      en: "In love, 23:32 is a warning of mistrust. If you have doubts in your relationship, talk about them openly. But do not be accusatory. If you are single, approach people you just met with caution.",
      zh: "在爱情中，23:32 是不信任的警告。如果你在关系中有疑虑，坦诚地谈论它们。但不要指责。如果你单身，对刚认识的人要谨慎。",
    },
    careerAndMoney: {
      tr: "Kariyerde 23:32, stratejik olma zamanıdır. Hamlelerinizi iyi hesaplayın. İş yerindeki politik oyunlara dahil olmayın. Finansal olarak riskli yatırımlardan uzak durun.",
      en: "In career, 23:32 is the time to be strategic. Calculate your moves well. Do not get involved in political games at work. Stay away from risky investments financially.",
      zh: "在职业方面，23:32 是讲究策略的时刻。计算好你的行动。不要卷入工作场所的政治游戏。在财务上远离风险投资。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 23:32, korunma ihtiyacıdır. Enerji alanınızı koruyun. Boğaz çakrası ile ilişkilidir. Mavi ve turkuaz renkleri, turkuaz taşı bu saatin enerjisini destekler.",
      en: "Spiritually, 23:32 is the need for protection. Protect your energy field. It is related to the throat chakra. Blue and turquoise colors, turquoise stone support the energy of this hour.",
      zh: "在灵性层面上，23:32 是保护的需要。保护你的能量场。它与喉轮有关。蓝色和绿松石色，绿松石支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Koruyucu bir dua veya mantra okuyun\n• Mavi bir nazar boncuğu taşıyın\n• Sırlarınızı kendinize saklayın\n• 'Ben güvendeyim ve korunuyorum' olumlamasını yapın\n• Tuzlu su banyosu yaparak enerjinizi temizleyin",
      en: "• Recite a protective prayer or mantra\n• Carry a blue evil eye bead\n• Keep your secrets to yourself\n• Affirm 'I am safe and protected'\n• Cleanse your energy by taking a salt water bath",
      zh: "• 念诵保护性的祷告或咒语\n• 佩戴蓝色邪眼珠\n• 保守你的秘密\n• 肯定'我很安全且受到保护'\n• 通过盐水浴清洁你的能量",
    },
  },
  {
    time: "01:11",
    title: {
      tr: "Düşüncelerin güç kazanıyor",
      en: "Your thoughts are gaining power",
      zh: "你的思想正在获得力量",
    },
    meaning: {
      tr: "Ne düşünüyorsan o olmaya başlıyor. Zihnini negatiften arındır ve niyetlerine odaklan, evren seni duyuyor.",
      en: "What you think is starting to manifest. Clear your mind of negativity and focus on your intentions, the universe is listening.",
      zh: "你的想法正在开始显化。清除头脑中的消极情绪，专注于你的意图，宇宙正在倾听。",
    },
    category: "Üçlü Ayna",
    numerology: {
      tr: "01:11, 1 rakamının üç kez tekrarlandığı güçlü bir enerjiye sahiptir. 1 sayısı yeni başlangıçlar, liderlik ve yaratıcılık demektir. Toplamı 3 (1+1+1=3) olan bu saat, iletişim, ifade ve büyüme enerjisiyle bağlantılıdır. Düşüncelerinizin hızla gerçeğe dönüştüğü bir evredesiniz. Niyetlerinize dikkat edin.",
      en: "01:11 has a powerful energy where the number 1 is repeated three times. Number 1 means new beginnings, leadership, and creativity. With a sum of 3 (1+1+1=3), this hour is connected to communication, expression, and growth energy. You are in a phase where your thoughts are rapidly turning into reality. Pay attention to your intentions.",
      zh: "01:11 具有强大的能量，数字 1 重复三次。数字 1 意味着新的开始、领导力和创造力。这个时刻的总和为 3（1+1+1=3），与沟通、表达和成长的能量相连。你正处于思想迅速变为现实的阶段。注意你的意图。",
    },
    astrology: {
      tr: "Astrolojik olarak 01:11, Güneş ve Merkür etkisindedir. Aslan ve İkizler burçlarının enerjisiyle uyumludur. Zihinsel aktivite ve yaratıcılık zirvededir. Kendinizi ifade etmek için harika bir zamandır.",
      en: "Astrologically, 01:11 is under the influence of the Sun and Mercury. It is compatible with the energies of Leo and Gemini. Mental activity and creativity are at their peak. It is a great time to express yourself.",
      zh: "从占星学角度来看，01:11 受太阳和水星的影响。它与狮子座和双子座的能量相容。心理活动和创造力处于顶峰。这是表达自己的好时机。",
    },
    loveAndRelationships: {
      tr: "Aşkta 01:11, yeni başlangıçlar müjdesidir. Yeni bir ilişkiye başlayabilir veya mevcut ilişkinizde yeni bir sayfa açabilirsiniz. Duygularınızı açıkça ifade edin. Bekar iseniz, zekanızla birini etkileyebilirsiniz.",
      en: "In love, 01:11 is a herald of new beginnings. You can start a new relationship or turn a new page in your current relationship. Express your feelings openly. If you are single, you can impress someone with your intelligence.",
      zh: "在爱情中，01:11 是新开始的预兆。你可以开始一段新关系，或者在你目前的关系中翻开新的一页。坦率地表达你的感受。如果你单身，你可以用你的智慧打动某人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 01:11, liderlik fırsatları sunar. Projelerinizde inisiyatif alın. Fikirleriniz kabul görecektir. Finansal olarak yeni gelir kapıları açılabilir.",
      en: "In career, 01:11 offers leadership opportunities. Take initiative in your projects. Your ideas will be accepted. Financially, new income doors may open.",
      zh: "在职业方面，01:11 提供领导机会。在你的项目中采取主动。你的想法会被接受。在财务上，可能会开启新的收入之门。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 01:11, uyanış çağrısıdır. Farkındalığınız artıyor. Meditasyon ve vizyonlama çalışmaları yapın. Taç çakrası ile ilişkilidir. Beyaz ve altın renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 01:11 is a wake-up call. Your awareness is increasing. Do meditation and visualization exercises. It is related to the crown chakra. White and gold colors support the energy of this hour.",
      zh: "在灵性层面上，01:11 是觉醒的呼唤。你的意识正在增强。做冥想和视觉化练习。它与顶轮有关。白色和金色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Bir vizyon panosu hazırlayın\n• Olumlu olumlamalar yapın\n• Yeni bir projeye başlayın\n• 'Ben yaratıcı gücümü kabul ediyorum' olumlamasını yapın\n• Altın rengi bir takı takın",
      en: "• Prepare a vision board\n• Make positive affirmations\n• Start a new project\n• Affirm 'I accept my creative power'\n• Wear a gold jewelry",
      zh: "• 准备一个愿景板\n• 做出积极的肯定\n• 开始一个新项目\n• 肯定'我接受我的创造力'\n• 佩戴金色首饰",
    },
  },
  {
    time: "02:22",
    title: {
      tr: "Denge arayışı",
      en: "Seeking balance",
      zh: "寻求平衡",
    },
    meaning: {
      tr: "İçinde ya da ilişkinde bir denge kurman gerekiyor. Her şeyin uyumla ilerlemesi için önce kendi iç huzurunu bulmalısın.",
      en: "You need to establish balance within yourself or in your relationship. To have everything progress harmoniously, you must first find your inner peace.",
      zh: "你需要在内心或关系中建立平衡。为了让一切和谐发展，你必须首先找到内心的平静。",
    },
    category: "Üçlü Ayna",
    numerology: {
      tr: "02:22, 2 rakamının üç kez tekrarlandığı uyumlu bir enerjiye sahiptir. 2 sayısı işbirliği, denge ve diplomasi demektir. Toplamı 6 (2+2+2=6) olan bu saat, aile, sevgi ve sorumluluk enerjisiyle bağlantılıdır. Hayatınızdaki dengesizlikleri gidermeniz gerektiğini söyler.",
      en: "02:22 has a harmonious energy where the number 2 is repeated three times. Number 2 means cooperation, balance, and diplomacy. With a sum of 6 (2+2+2=6), this hour is connected to family, love, and responsibility energy. It tells you that you need to eliminate imbalances in your life.",
      zh: "02:22 具有和谐的能量，数字 2 重复三次。数字 2 意味着合作、平衡和外交。这个时刻的总和为 6（2+2+2=6），与家庭、爱和责任的能量相连。它告诉你需要消除生活中的不平衡。",
    },
    astrology: {
      tr: "Astrolojik olarak 02:22, Ay ve Venüs etkisindedir. Yengeç ve Terazi burçlarının enerjisiyle uyumludur. Duygusal hassasiyet ve estetik anlayışı ön plandadır. İlişkilerde uyum arayışı artar.",
      en: "Astrologically, 02:22 is under the influence of the Moon and Venus. It is compatible with the energies of Cancer and Libra. Emotional sensitivity and aesthetic understanding are at the forefront. The search for harmony in relationships increases.",
      zh: "从占星学角度来看，02:22 受月亮和金星的影响。它与巨蟹座和天秤座的能量相容。情感敏感度和审美理解力处于前沿。关系中寻求和谐的愿望增加。",
    },
    loveAndRelationships: {
      tr: "Aşkta 02:22, romantizm ve şefkat zamanıdır. Partnerinizle romantik anlar yaşayabilirsiniz. Sorunları konuşarak çözün. Bekar iseniz, nazik ve anlayışlı biriyle tanışabilirsiniz.",
      en: "In love, 02:22 is the time for romance and compassion. You can experience romantic moments with your partner. Solve problems by talking. If you are single, you might meet someone gentle and understanding.",
      zh: "在爱情中，02:22 是浪漫和同情的时刻。你可以与伴侣体验浪漫时刻。通过交谈解决问题。如果你单身，你可能会遇到一个温柔体贴的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 02:22, işbirliği zamanıdır. Ekip çalışmalarında başarılı olursunuz. Diplomatik yeteneklerinizi kullanın. Finansal olarak dengeli bir bütçe yapın.",
      en: "In career, 02:22 is the time for cooperation. You will be successful in team work. Use your diplomatic skills. Financially, make a balanced budget.",
      zh: "在职业方面，02:22 是合作的时刻。你将在团队工作中取得成功。运用你的外交技巧。在财务上，制定平衡的预算。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 02:22, içsel barış zamanıdır. Kendinizi ve başkalarını affedin. Kalp çakrası ile ilişkilidir. Pembe ve yeşil renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 02:22 is the time for inner peace. Forgive yourself and others. It is related to the heart chakra. Pink and green colors support the energy of this hour.",
      zh: "在灵性层面上，02:22 是内心平静的时刻。原谅自己和他人。它与心轮有关。粉色和绿色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Evinizi düzenleyin ve güzelleştirin\n• Sevdiklerinize vakit ayırın\n• Barışçıl bir çözüm bulun\n• 'Ben huzur ve denge içindeyim' olumlamasını yapın\n• Pembe kuvars taşı taşıyın",
      en: "• Organize and beautify your home\n• Spend time with your loved ones\n• Find a peaceful solution\n• Affirm 'I am in peace and balance'\n• Carry a rose quartz stone",
      zh: "• 整理并美化你的家\n• 花时间与亲人在一起\n• 找到和平的解决方案\n• 肯定'我处于和平与平衡之中'\n• 佩戴粉晶石",
    },
  },
  {
    time: "03:33",
    title: {
      tr: "Yolun açık, destek seninle",
      en: "Your path is clear, support is with you",
      zh: "你的道路清晰，支持与你同在",
    },
    meaning: {
      tr: "Manevi rehberler ve evren sana arkanızda olduğunu hissettirmeye çalışıyor. Kararsız kaldıysan iç sesini takip et.",
      en: "Spiritual guides and the universe are trying to show you they're behind you. If you're uncertain, follow your inner voice.",
      zh: "精神向导和宇宙正试图向你展示他们就在你身后。如果你犹豫不决，跟随你的内心声音。",
    },
    category: "Üçlü Ayna",
    numerology: {
      tr: "03:33, 3 rakamının üç kez tekrarlandığı yaratıcı bir enerjiye sahiptir. 3 sayısı ifade, neşe ve büyüme demektir. Toplamı 9 (3+3+3=9) olan bu saat, tamamlanma, bilgelik ve evrensel sevgi enerjisiyle bağlantılıdır. Yüksek benliğinizle bağlantı kurmanız için bir çağrıdır.",
      en: "03:33 has a creative energy where the number 3 is repeated three times. Number 3 means expression, joy, and growth. With a sum of 9 (3+3+3=9), this hour is connected to completion, wisdom, and universal love energy. It is a call to connect with your higher self.",
      zh: "03:33 具有创造性的能量，数字 3 重复三次。数字 3 意味着表达、快乐和成长。这个时刻的总和为 9（3+3+3=9），与完成、智慧和宇宙之爱的能量相连。这是与更高自我连接的呼唤。",
    },
    astrology: {
      tr: "Astrolojik olarak 03:33, Jüpiter ve Neptün etkisindedir. Yay ve Balık burçlarının enerjisiyle uyumludur. Ruhsal genişleme ve sezgisel güç artar. Rüyalarınız size mesaj veriyor olabilir.",
      en: "Astrologically, 03:33 is under the influence of Jupiter and Neptune. It is compatible with the energies of Sagittarius and Pisces. Spiritual expansion and intuitive power increase. Your dreams might be giving you messages.",
      zh: "从占星学角度来看，03:33 受木星和海王星的影响。它与射手座和双鱼座的能量相容。精神扩张和直觉力量增加。你的梦可能在给你信息。",
    },
    loveAndRelationships: {
      tr: "Aşkta 03:33, ruhsal bağların güçlendiği zamandır. İlişkinizde daha derin bir anlam arayabilirsiniz. Partnerinizle ruhsal konuları konuşun. Bekar iseniz, ruh eşinizle karşılaşma ihtimaliniz yüksektir.",
      en: "In love, 03:33 is the time when spiritual bonds strengthen. You may seek a deeper meaning in your relationship. Talk about spiritual matters with your partner. If you are single, the probability of meeting your soulmate is high.",
      zh: "在爱情中，03:33 是精神纽带加强的时刻。你可能会在关系中寻求更深层的意义。与伴侣谈论精神话题。如果你单身，遇到灵魂伴侣的可能性很高。",
    },
    careerAndMoney: {
      tr: "Kariyerde 03:33, ilham ve vizyon zamanıdır. Büyük düşünün. Sanatsal ve yaratıcı işlerde başarı getirir. Finansal olarak bolluk bilincine odaklanın.",
      en: "In career, 03:33 is the time for inspiration and vision. Think big. It brings success in artistic and creative works. Financially, focus on abundance consciousness.",
      zh: "在职业方面，03:33 是灵感和愿景的时刻。敢于梦想。它在艺术和创意工作中带来成功。在财务上，专注于丰盛意识。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 03:33, rehberlik alma zamanıdır. Meleklerinizin ve rehberlerinizin yanınızda olduğunu bilin. Üçüncü göz çakrası ile ilişkilidir. Mor ve lacivert renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 03:33 is the time to receive guidance. Know that your angels and guides are with you. It is related to the third eye chakra. Purple and dark blue colors support the energy of this hour.",
      zh: "在灵性层面上，03:33 是接受指引的时刻。知道你的天使和向导就在你身边。它与第三眼脉轮有关。紫色和深蓝色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Meditasyon yapın ve rehberlerinizle konuşun\n• Rüyalarınızı not edin\n• Yaratıcı bir hobi edinin\n• 'Ben evrensel bilgelikle bağlantıdayım' olumlamasını yapın\n• Ametist taşı taşıyın",
      en: "• Meditate and talk to your guides\n• Note your dreams\n• Get a creative hobby\n• Affirm 'I am connected to universal wisdom'\n• Carry an amethyst stone",
      zh: "• 冥想并与你的向导交谈\n• 记录你的梦\n• 培养一个创造性的爱好\n• 肯定'我与宇宙智慧相连'\n• 佩戴紫水晶",
    },
  },
  {
    time: "04:44",
    title: {
      tr: "Köklü değişim geliyor",
      en: "Fundamental change is coming",
      zh: "根本性的变化即将来临",
    },
    meaning: {
      tr: "Hayatında sağlam temeller kurmak üzeresin. Bu saat, sıkı çalışmanın ve sabrın ödüllendirileceğini müjdeliyor.",
      en: "You're about to build solid foundations in your life. This hour heralds that hard work and patience will be rewarded.",
      zh: "你即将在生活中建立坚实的基础。这个时刻预示着努力工作和耐心将得到回报。",
    },
    category: "Üçlü Ayna",
    numerology: {
      tr: "04:44, 4 rakamının üç kez tekrarlandığı istikrarlı bir enerjiye sahiptir. 4 sayısı düzen, sabır ve çalışma demektir. Toplamı 12 (4+4+4=12 -> 1+2=3) olan bu saat, yaratıcılık ve iletişim enerjisiyle de bağlantılıdır. Emeklerinizin karşılığını alacağınız bir dönemdesiniz.",
      en: "04:44 has a stable energy where the number 4 is repeated three times. Number 4 means order, patience, and work. With a sum of 12 (4+4+4=12 -> 1+2=3), this hour is also connected to creativity and communication energy. You are in a period where you will get the return on your efforts.",
      zh: "04:44 具有稳定的能量，数字 4 重复三次。数字 4 意味着秩序、耐心和工作。这个时刻的总和为 12（4+4+4=12 -> 1+2=3），也与创造力和沟通能量相连。你正处于努力得到回报的时期。",
    },
    astrology: {
      tr: "Astrolojik olarak 04:44, Satürn ve Uranüs etkisindedir. Oğlak ve Kova burçlarının enerjisiyle uyumludur. Disiplinli çalışma ve yenilikçi fikirler bir aradadır. Kalıcı başarılar elde edebilirsiniz.",
      en: "Astrologically, 04:44 is under the influence of Saturn and Uranus. It is compatible with the energies of Capricorn and Aquarius. Disciplined work and innovative ideas are together. You can achieve lasting successes.",
      zh: "从占星学角度来看，04:44 受土星和天王星的影响。它与摩羯座和水瓶座的能量相容。纪律严明的工作和创新的想法结合在一起。你可以取得持久的成功。",
    },
    loveAndRelationships: {
      tr: "Aşkta 04:44, güven ve sadakat zamanıdır. İlişkinizin temellerini sağlamlaştırın. Geleceğe dair planlar yapın. Bekar iseniz, ciddi ve güvenilir biriyle tanışabilirsiniz.",
      en: "In love, 04:44 is the time for trust and loyalty. Strengthen the foundations of your relationship. Make plans for the future. If you are single, you might meet someone serious and reliable.",
      zh: "在爱情中，04:44 是信任和忠诚的时刻。巩固你们关系的基础。制定未来计划。如果你单身，你可能会遇到一个认真可靠的人。",
    },
    careerAndMoney: {
      tr: "Kariyerde 04:44, yükseliş ve başarı zamanıdır. Çok çalışmanız takdir edilecektir. Terfi veya zam alabilirsiniz. Finansal olarak yatırımlarınız değer kazanabilir.",
      en: "In career, 04:44 is the time for rise and success. Your hard work will be appreciated. You may get a promotion or raise. Financially, your investments may gain value.",
      zh: "在职业方面，04:44 是上升和成功的时刻。你的辛勤工作将受到赞赏。你可能会获得晋升或加薪。在财务上，你的投资可能会增值。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 04:44, topraklanma zamanıdır. Doğayla bağ kurun. Kök çakra ile ilişkilidir. Kırmızı ve kahverengi renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 04:44 is the time for grounding. Connect with nature. It is related to the root chakra. Red and brown colors support the energy of this hour.",
      zh: "在灵性层面上，04:44 是接地的时刻。与大自然联系。它与根轮有关。红色和棕色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Uzun vadeli planlar yapın\n• Doğada vakit geçirin\n• Evinizde tadilat veya düzenleme yapın\n• 'Ben güvendeyim ve sağlam adımlarla ilerliyorum' olumlamasını yapın\n• Kırmızı jasper taşı taşıyın",
      en: "• Make long-term plans\n• Spend time in nature\n• Do renovation or organization in your home\n• Affirm 'I am safe and moving forward with solid steps'\n• Carry a red jasper stone",
      zh: "• 制定长期计划\n• 在大自然中度过时光\n• 在家中进行装修或整理\n• 肯定'我很安全，正迈着坚实的步伐前进'\n• 佩戴红碧玉",
    },
  },
  {
    time: "05:55",
    title: {
      tr: "Ani bir gelişmeye hazır ol",
      en: "Be ready for a sudden development",
      zh: "准备好迎接突发进展",
    },
    meaning: {
      tr: "Beklenmedik bir haber ya da değişim kapında. Bu yenilik önce seni sarsabilir ama sonunda hayrına olacak.",
      en: "An unexpected news or change is at your door. This novelty might shake you at first but will be for your benefit in the end.",
      zh: "意外的消息或变化就在门口。这种新奇可能会一开始让你震惊，但最终会对你有利。",
    },
    category: "Üçlü Ayna",
    numerology: {
      tr: "05:55, 5 rakamının üç kez tekrarlandığı dinamik bir enerjiye sahiptir. 5 sayısı değişim, özgürlük ve macera demektir. Toplamı 15 (5+5+5=15 -> 1+5=6) olan bu saat, uyum ve sorumluluk enerjisiyle de bağlantılıdır. Hayatınızda büyük değişikliklerin olacağını müjdeler.",
      en: "05:55 has a dynamic energy where the number 5 is repeated three times. Number 5 means change, freedom, and adventure. With a sum of 15 (5+5+5=15 -> 1+5=6), this hour is also connected to harmony and responsibility energy. It heralds that major changes will occur in your life.",
      zh: "05:55 具有动态的能量，数字 5 重复三次。数字 5 意味着变化、自由和冒险。这个时刻的总和为 15（5+5+5=15 -> 1+5=6），也与和谐和责任的能量相连。它预示着你的生活将发生重大变化。",
    },
    astrology: {
      tr: "Astrolojik olarak 05:55, Merkür ve Uranüs etkisindedir. İkizler ve Kova burçlarının enerjisiyle uyumludur. Hızlı düşünme, ani kararlar ve sürprizler gündeme gelir. Esnek olmalısınız.",
      en: "Astrologically, 05:55 is under the influence of Mercury and Uranus. It is compatible with the energies of Gemini and Aquarius. Quick thinking, sudden decisions, and surprises come up. You must be flexible.",
      zh: "从占星学角度来看，05:55 受水星和天王星的影响。它与双子座和水瓶座的能量相容。快速思考、突然决定和惊喜会出现。你必须灵活。",
    },
    loveAndRelationships: {
      tr: "Aşkta 05:55, heyecan ve tutku zamanıdır. İlişkinizde rutinden çıkın. Farklı aktiviteler yapın. Bekar iseniz, sıra dışı biriyle tanışabilir ve yıldırım aşkına tutulabilirsiniz.",
      en: "In love, 05:55 is the time for excitement and passion. Get out of the routine in your relationship. Do different activities. If you are single, you might meet someone unusual and fall in love at first sight.",
      zh: "在爱情中，05:55 是兴奋和激情的时刻。摆脱关系中的常规。做不同的活动。如果你单身，你可能会遇到不寻常的人并一见钟情。",
    },
    careerAndMoney: {
      tr: "Kariyerde 05:55, fırsatlar ve değişiklikler zamanıdır. İş değiştirebilir veya yeni bir projeye başlayabilirsiniz. Seyahatler gündeme gelebilir. Finansal olarak risk alabilirsiniz ama dikkatli olun.",
      en: "In career, 05:55 is the time for opportunities and changes. You can change jobs or start a new project. Travels may come up. Financially, you can take risks but be careful.",
      zh: "在职业方面，05:55 是机会和变化的时刻。你可以换工作或开始新项目。可能会有旅行。在财务上，你可以冒险，但要小心。",
    },
    spiritualGuidance: {
      tr: "Ruhsal olarak 05:55, özgürleşme zamanıdır. Sizi tutan her şeyi bırakın. Boğaz çakrası ile ilişkilidir. Mavi ve turkuaz renkleri bu saatin enerjisini destekler.",
      en: "Spiritually, 05:55 is the time for liberation. Let go of everything holding you back. It is related to the throat chakra. Blue and turquoise colors support the energy of this hour.",
      zh: "在灵性层面上，05:55 是解放的时刻。放下一切阻碍你的东西。它与喉轮有关。蓝色和绿松石色支持这个时刻的能量。",
    },
    actionSteps: {
      tr: "• Seyahate çıkın veya yeni bir yer keşfedin\n• Rutininizi değiştirin\n• Yeni bir şeyler öğrenin\n• 'Ben değişimi kucaklıyorum ve özgürüm' olumlamasını yapın\n• Turkuaz taşı taşıyın",
      en: "• Go on a trip or discover a new place\n• Change your routine\n• Learn something new\n• Affirm 'I embrace change and I am free'\n• Carry a turquoise stone",
      zh: "• 去旅行或探索新地方\n• 改变你的常规\n• 学习新东西\n• 肯定'我拥抱变化，我是自由的'\n• 佩戴绿松石",
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
  return mirrorHour
    ? mirrorHour.meaning[locale as keyof LocalizedText] || mirrorHour.meaning.en
    : "";
}

export function getMirrorHourTitle(
  time: string,
  locale: string = "tr"
): string {
  const mirrorHour = mirrorHoursData.find((hour) => hour.time === time);
  return mirrorHour
    ? mirrorHour.title[locale as keyof LocalizedText] || mirrorHour.title.en
    : "";
}

export function getMirrorHourCategory(time: string): string {
  const mirrorHour = mirrorHoursData.find((hour) => hour.time === time);
  return mirrorHour ? mirrorHour.category : "";
}

export function getAllMirrorHours(): MirrorHour[] {
  return mirrorHoursData;
}
