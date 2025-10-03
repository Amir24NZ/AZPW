// تعریف سکانس‌های بازی
const scenes = [
    {
        image: 'images/s2.jpg',
        text: 'وایییییییییییییییی این چه خوابی بود دیدممم....',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'black-fade'
    },
    {
        image: 'images/s3.jpg',
        text: 'خواب بود دیگه هوففففففففففف',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/s4.jpg',
        text: 'واقعا کلافه شدم از این اوضاع...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/s5.jpg',
        text: 'برم یه آب بخورم دوباره بخوابم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/s6.jpg',
        text: 'آره عادیه خب!',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/s7.jpg',
        text: 'همیشه نصفه شب راه ها طولانی میشن واااای...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/s8.jpg',
        text: 'هوف رژیمم چه میشه کرد، فقط آب...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/s9.jpg',
        text: 'بالاخره...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/s10.jpg',
        text: '...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
     {
        image: 'images/s9.jpg',
        text: 'خب دیگه برگردم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/s11.jpg',
        text: 'چی بود؟',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/s12.jpg',
        text: 'یه صدایی شنیدم!',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/s13.jpg',
        text: 'یعنی چی؟؟؟',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/s14.jpg',
        text: 'نه... نه. این نوشته چیه دیگه؟ میترسم...',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/s15.jpg',
        text: '...',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/s16.jpg',
        text: '@$&)($*&(&@$!*^%(&^#!',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/a1.jpg',
        text: 'آذین؟',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/a2.jpg',
        text: 'بلند شو',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/a1.jpg',
        text: 'تو دیگه کی هستی؟ منو دزدیدی؟؟؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/a1.jpg',
        text: 'نه من دزد نیستم میخوام کمکت کنم، اگه بودم تو الان آزاد نبودی.',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/a1.jpg',
        text: 'آزاد؟ من حتی نمیدونم کجام...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/a2.jpg',
        text: 'بلند شو. قسم میخورم میخوام کمکت کنم...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/a3.jpg',
        text: '...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/a4.jpg',
        text: 'دنبالم بیا...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/a5.jpg',
        text: 'ببخشید با این وضعیت اینجایی، یه چی برای خودت انتخاب کن...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/a5.jpg',
        text: 'هوف...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/a6.jpg',
        text: 'اوکی خب؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/a6.jpg',
        text: 'یه چیزی رو فراموش کردی...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/a6.jpg',
        text: 'چی؟ اوه اوکی...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/a7.jpg',
        text: 'خوبه دنبالم بیا...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b1.jpg',
        text: 'خب. اینجا بخش اصلی سازمانمونه...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/b2.jpg',
        text: 'سازمان؟ سازمان چی؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b2.jpg',
        text: 'سازمان زمان که ما قبلا بهش میگفتیم TVA...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b2.jpg',
        text: 'اصلا به من چه. من میخوام برم خونه...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b2.jpg',
        text: 'میری نگران نباش فقط چند مدت مهمون مایی...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b3.jpg',
        text: 'چی میگی؟ منو برگردون ، همین حالا...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b3.jpg',
        text: 'نهههه نکنننن...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b4.jpg',
        text: '...',
        speaker: '؟؟؟',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b4.jpg',
        text: 'راستشو بگو کی هستی...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b5.jpg',
        text: 'ببخشید خودمو معرفی نکردم. اسم من موبیوس هست. من مدیر اینجام...',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b5.jpg',
        text: 'لطفا از من ناراحت نباش، قول میدن اینجا بهت بد نگذره...',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b5.jpg',
        text: '...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b6.jpg',
        text: 'بیا میخوام یکیو بهت معرفی کنم...',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b5.jpg',
        text: 'چی؟ کی؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/b6.jpg',
        text: 'بیا...',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c1.jpg',
        text: 'هوف چه تجهیزات پیشرفته ای...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/c2.jpg',
        text: 'اون دیگه چیه؟ یه ساعت پرنده؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: 'اووو... خانم دقایق...',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: 'اسمش خانوم دقایقه؟ چی هست اصلا؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: 'اره، اون دستیار هوش مصنوعیه منه. اینو میخواستم نشونت بدم من ساختمش.',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: 'خب چیکار میکنه؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: 'هیچی، حماله منه',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: ' @#$%^%$!!!',
        speaker: 'miss minutes',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: 'بی شعور فحش نده!',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: '...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: 'خب بیا بریم آذین.',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/c2.jpg',
        text: 'اوکی',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/d1.jpg',
        text: 'وای اینجا یه شهر پیشرفته هست؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/d1.jpg',
        text: 'اینجا اصلا وجود خارجی نداره همش تو سرته',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/d1.jpg',
        text: 'چی میگی؟ من دارم میبینمش وجود داره',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/d1.jpg',
        text: 'همه چی نو ذهنته حتی خودم و بقیه...',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/d1.jpg',
        text: 'چی میگی؟ تو منو دزدیدی',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/d1.jpg',
        text: 'من ندزدیمت من تورو از افکارت نجات دادم، ولش کن بیا دنبالم اتاقتو بهت نشون بدم',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/d1.jpg',
        text: 'هوف...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/e1.jpg',
        text: 'خب اینم از اتاقت، خانم دقایق هم اینجا هست کاری داشتی بهش بگو',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/e1.jpg',
        text: 'باشه ولی تا کی باید بمونم؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/e1.jpg',
        text: 'این مهم نیست من تنهات میزارم فعلا...',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/e2.jpg',
        text: 'چرا اصلا باید اینجا باشم؟ خونم با اینکه ترسناکه صد از اینجا بهتره',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/e2.jpg',
        text: 'چرا اصلا منو تنها گذاشت خودش رفت؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/e2.jpg',
        text: 'اصلا یعنی چی همه اینا تو ذهنمه؟ مگه من روانیم؟؟؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/e3.jpg',
        text: 'حقیقتا باید برم بیرون دور بزنم اون همه جارو نشونم نداد... البته یکمم میترسم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f1.jpg',
        text: 'حس ترس باحالی دارم...',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/f1.jpg',
        text: 'چقدر مرموزه، چقدر اتاق...',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/f2.jpg',
        text: 'بزار برم این تو...',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/f3.jpg',
        text: '...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/f3.jpg',
        text: '...',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f3.jpg',
        text: 'اینجا چیکار میکنی؟ گفتم تو اتاقت بمون!',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f3.jpg',
        text: 'من. من من... راستش... دنبال حموم بودم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f3.jpg',
        text: 'حموم؟ مسخره کردی؟ گفتم که کنار اتاقته',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f3.jpg',
        text: 'اینارو ول کن ، تو توی بار کار میکنی؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f3.jpg',
        text: 'خب دوست دارم این کارو',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f3.jpg',
        text: 'اوکی، یه شات بده بهم',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f4.jpg',
        text: 'اوکی خوردی فقط میری از اینجا، اوکی؟',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/f4.jpg',
        text: 'باشه باشه',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/g1.jpg',
        text: 'ریلکس کردن فقط تو حموم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g1.jpg',
        text: '(در حال خوندن آهنگ...)',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/g2.jpg',
        text: 'هوف خستگیم رفت، برگردم اتاقم',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g3.jpg',
        text: 'خوبه حالا سشوار هست اینجا...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g4.jpg',
        text: 'خب و اینم از این...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g4.jpg',
        text: 'ببینم یه ست دیگه هست بپوشم؟...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/g5.jpg',
        text: 'عالی شدم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g6.jpg',
        text: 'سلام چطوری',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/g6.jpg',
        text: 'مرسی خوبم فقط یه چیزی...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/g6.jpg',
        text: 'چی شده؟',
        speaker: 'موبیوس',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/g7.jpg',
        text: 'من از اینجا دیگه خسته شدم کی باید برم؟ دیگه طاقت ندارم',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/g8.jpg',
        text: 'اه دیگه خسته شدم از دستت، من میرم توهم برو ولی افکارت میکشنت...',
        speaker: 'موبیوس',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/g9.jpg',
        text: 'چی؟ یعنی چی آخه؟ کجا رفتی؟',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/g10.jpg',
        text: 'چه اتفاقی داره میفته؟؟؟',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g11.jpg',
        text: 'موبیوس؟؟؟',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g11.jpg',
        text: 'اینجایی؟ بیا برت گردونم...',
        speaker: 'موبیوس',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/g12.jpg',
        text: 'با یه ضربه محکم ولی راحت برمیگردی...',
        speaker: 'موبیوس',
        music: 'audio/music2.mp3',
        transition: 'none'
    },
    {
        image: 'images/g13.jpg',
        text: 'نه نه نه....',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g14.jpg',
        text: 'وای من برگشتم؟؟؟',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g15.jpg',
        text: 'وای این کابوس کی تموم میشه...',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g16.jpg',
        text: 'نههههههه بستهههههه',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/g16.jpg',
        text: 'نههههههه بستهههههه',
        speaker: 'آذین',
        music: 'audio/music2.mp3',
        transition: 'fade'
    },
    {
        image: 'images/s2.jpg',
        text: 'وای نه بازم کابوس...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/s3.jpg',
        text: 'موبیوس چیه؟ اون دیگه چه اسمی بود؟ قیافش خیلی آشنا بود ولی...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/s4.jpg',
        text: 'هنوز شبه بخوابم صبح شه...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/h1.jpg',
        text: 'دیشب واقعا بدترین شب عمرم بود...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/h2.jpg',
        text: 'این کیه پیام داده؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/h3.jpg',
        text: 'او امیر دوستم، امروز باید برم مهمونیش...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/i1.jpg',
        text: 'امروز کلی کار دارم وای...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/i2.jpg',
        text: 'نمیدونم چی بپوشم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/i3.jpg',
        text: 'هوف این بد نیست...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/i4.jpg',
        text: 'عالیه، برم دیگه...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/p1.jpg',
        text: 'واقعا راه طولانی هست',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/p2.jpg',
        text: 'واو چقدر آدم... خدایی دمش گرم',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/p3.jpg',
        text: 'عه سلام امیر چطوری؟',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'fade'
    },
    {
        image: 'images/p3.jpg',
        text: 'مرسی تو چطوری؟ خسته به نظر میای حالت خوبه؟',
        speaker: 'امیر',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/p4.jpg',
        text: 'هوم خوبم، مثل همیشه کابوس میدیدم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/p5.jpg',
        text: 'کابوس؟ چرا؟  میخوای بریم لب دریا؟ اونجا بهتره هوات عوض میشه...',
        speaker: 'امیر',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/p5.jpg',
        text: 'هوم بریم...',
        speaker: 'آذین',
        music: 'audio/music1.mp3',
        transition: 'none'
    },
    {
        image: 'images/q1.jpg',
        text: 'هوم من عاشق دریام...',
        speaker: 'آذین',
        music: 'audio/music3.mp3',
        transition: 'fade'
    },
    {
        image: 'images/q1.jpg',
        text: 'اره میدونم',
        speaker: 'امیر',
        music: 'audio/music3.mp3',
        transition: 'none'
    },
    {
        image: 'images/q1.jpg',
        text: 'من عاشق دریام و همیشه باید جام تو دریا باشه...',
        speaker: 'آذین',
        music: 'audio/music3.mp3',
        transition: 'none'
    },
    {
        image: 'images/q1.jpg',
        text: 'چی؟',
        speaker: 'امیر',
        music: 'audio/music3.mp3',
        transition: 'none'
    },
    {
        image: 'images/q3.jpg',
        text: 'ببین امیر تو دوست خوبی بودی برام...',
        speaker: 'آذین',
        music: 'audio/music3.mp3',
        transition: 'none'
    },
    {
        image: 'images/q3.jpg',
        text: 'یعنی چی بودی؟ چی میگی؟',
        speaker: 'امیر',
        music: 'audio/music3.mp3',
        transition: 'none'
    },
    {
        image: 'images/q3.jpg',
        text: 'سلام منو به بقیه برسون...',
        speaker: 'آذین',
        music: 'audio/music3.mp3',
        transition: 'none'
    },
    {
        image: 'images/q3.jpg',
        text: 'نه نه آذین نه....',
        speaker: 'امیر',
        music: 'audio/music3.mp3',
        transition: 'none'
    },
    {
        image: 'images/q4.jpg',
        text: 'نههههههههههههههه!',
        speaker: 'امیر',
        music: 'audio/music3.mp3',
        transition: 'fade'
    },
    {
        image: 'images/q4.jpg',
        text: 'نههههههههههههههه!',
        speaker: 'امیر',
        music: 'audio/music3.mp3',
        transition: 'fade'
    },
    {
        image: 'images/q5.jpg',
        text: 'بله، او نیز ملحق به دوست قدیمی خود در دریا شد...',
        speaker: 'راوی',
        music: 'audio/music3.mp3',
        transition: 'fade'
    },
    {
        image: 'images/q6.jpg',
        text: 'دقایقی بعد اثری از آنها دیگر وجود نداشت، هردو آنها سرنوشت یکسانی داشتند زیرا خودشان این سرنوشت را رقم زدند...',
        speaker: 'راوی',
        music: 'audio/music3.mp3',
        transition: 'fade'
    },
    {
        image: 'images/q7.jpg',
        text: '...سالیانی بعد برحسب اتفاق، گذرا به هم خورد نبود فرق و اختلافی، شاخه درختی شده بود و گل سربلند، یاد گذشته کردنو خندیدن باهم بلند',
        speaker: 'راوی',
        music: 'audio/music3.mp3',
        transition: 'fade'
    },
];

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const gameImage = document.getElementById('game-image');
const textContent = document.getElementById('text-content');
const speakerName = document.getElementById('speaker-name');
const imageFrame = document.getElementById('image-frame');
const gameContainer = document.getElementById('game-container'); 
const loadingScreen = document.getElementById('loading-screen'); 
const progressBar = document.getElementById('progress-bar'); 
const loadingPercentage = document.getElementById('loading-percentage'); 

let currentSceneIndex = -1;
let audioPlayer = new Audio();
let currentAudioSrc = null;

// تابع برای نمایش یک سکانس
function showScene(index) {
    if (index < 0 || index >= scenes.length) {
        endGame();
        return;
    }

    const scene = scenes[index];
    
    // پاک کردن کلاس‌های ترنزیشن قبلی
    imageFrame.classList.remove('fade-transition', 'black-fade-transition');
    
    // تأخیر برای اعمال ترنزیشن و نمایش انیمیشن
    setTimeout(() => {
        gameImage.src = scene.image;
        textContent.textContent = scene.text;
        speakerName.textContent = scene.speaker || '';

        // مدیریت موزیک
        if (scene.music && scene.music !== currentAudioSrc) {
            currentAudioSrc = scene.music;
            audioPlayer.src = currentAudioSrc;
            audioPlayer.loop = true;
            // تلاش برای پخش، اما اگر مرورگر اجازه ندهد، خطا را مدیریت می‌کند.
            audioPlayer.play().catch(e => console.error("Error playing audio (likely waiting for user interaction):", e)); 
        } else if (!scene.music && currentAudioSrc && scene.music !== audioPlayer.src) {
            audioPlayer.pause();
            currentAudioSrc = null;
        }

        currentSceneIndex = index;

        // نمایش یا پنهان کردن دکمه بازگشت بر اساس شماره سکانس
        if (currentSceneIndex > 0) {
            backButton.classList.remove('hidden');
        } else {
            backButton.classList.add('hidden');
        }

    }, scene.transition === 'black-fade' ? 1000 : 0);

    // اعمال ترنزیشن
    if (scene.transition === 'fade') {
        imageFrame.classList.add('fade-transition');
    } else if (scene.transition === 'black-fade') {
        imageFrame.classList.add('black-fade-transition');
    }
}

// تابع برای شروع بازی
function startGame() {
    // توقف موزیک صفحه شروع
    audioPlayer.pause();
    currentAudioSrc = null;
    
    startButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
    showScene(0);
}

// تابع برای رفتن به سکانس بعدی
function nextScene() {
    showScene(currentSceneIndex + 1);
}

// تابع برای بازگشت به سکانس قبلی
function prevScene() {
    if (currentSceneIndex > 0) {
        showScene(currentSceneIndex - 1);
    }
}

// تابع برای پایان بازی
function endGame() {
    // موزیک پایان بازی
    if (currentAudioSrc !== 'audio/end_music.mp3') {
        audioPlayer.src = 'audio/end_music.mp3';
        audioPlayer.loop = true;
        audioPlayer.play().catch(e => console.error("Error playing end audio:", e));
        currentAudioSrc = 'audio/end_music.mp3';
    }

    // تنظیم محتوای صفحه پایانی
    gameImage.src = 'images/q7.jpg'; // عکس پایانی
    textContent.textContent = 'پایان :)';
    speakerName.textContent = '';
    nextButton.classList.add('hidden');
    backButton.classList.add('hidden');
    currentSceneIndex = -1;
}

// --- منطق جدید پیش‌بارگذاری (Preloading) ---

// 1. جمع‌آوری لیست منابع
function collectAssets() {
    const assets = new Set();

    // عکس‌های سکانس‌ها
    scenes.forEach(scene => {
        if (scene.image) assets.add(scene.image);
        if (scene.music) assets.add(scene.music);
    });

    // اضافه کردن عکس‌ها و موزیک‌های ثابت (مثل عکس شروع و پایان و موزیک شروع و پایان)
    assets.add('images/s1.jpg'); // عکس صفحه شروع
    assets.add('audio/start_music.mp3'); // موزیک صفحه شروع
    assets.add('audio/end_music.mp3'); // موزیک پایان بازی

    return Array.from(assets);
}

// 2. تابع پیش‌بارگذاری
async function preloadAssets(assets) {
    let loadedCount = 0;
    const totalAssets = assets.length;

    const loadPromises = assets.map(assetUrl => {
        return new Promise((resolve, reject) => {
            const extension = assetUrl.split('.').pop().toLowerCase();
            let element;

            if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
                // بارگذاری تصویر
                element = new Image();
                element.onload = () => {
                    loadedCount++;
                    updateProgressBar(loadedCount, totalAssets);
                    resolve();
                };
                element.onerror = () => {
                    console.warn(`Failed to load image: ${assetUrl}`);
                    loadedCount++; // همچنان پیشرفت را نشان بدهیم
                    updateProgressBar(loadedCount, totalAssets);
                    resolve(); // رد نشدن برای جلوگیری از توقف لودینگ
                };
                element.src = assetUrl;
            } else if (['mp3', 'wav', 'ogg'].includes(extension)) {
                // بارگذاری فایل صوتی (با تگ Audio)
                element = new Audio();
                element.addEventListener('canplaythrough', () => {
                    loadedCount++;
                    updateProgressBar(loadedCount, totalAssets);
                    resolve();
                }, { once: true });
                element.onerror = () => {
                    console.warn(`Failed to load audio: ${assetUrl}`);
                    loadedCount++;
                    updateProgressBar(loadedCount, totalAssets);
                    resolve();
                };
                element.src = assetUrl;
                element.load(); // شروع بارگذاری
            } else {
                // بقیه فایل‌ها (مثلاً اگر نوع دیگری اضافه شود)
                loadedCount++;
                updateProgressBar(loadedCount, totalAssets);
                resolve();
            }
        });
    });

    await Promise.all(loadPromises);
}

// 3. تابع به‌روزرسانی نوار پیشرفت
function updateProgressBar(loaded, total) {
    const percentage = Math.floor((loaded / total) * 100);
    progressBar.style.width = percentage + '%';
    loadingPercentage.textContent = percentage + '%';
}

// 4. تابع اصلی برای آماده‌سازی بازی
async function initializeGame() {
    const assetsToLoad = collectAssets();
    console.log(`Starting to preload ${assetsToLoad.length} assets...`);

    // شروع پیش‌بارگذاری
    await preloadAssets(assetsToLoad);

    console.log("All assets preloaded. Starting game.");

    // مخفی کردن لودینگ و نمایش کانتینر بازی
    loadingScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');

    // تنظیمات اولیه بازی 
    // پخش موزیک صفحه شروع
    audioPlayer.src = 'audio/start_music.mp3';
    audioPlayer.loop = true;
    audioPlayer.play().catch(e => console.log("Audio playback waiting for user interaction."));
    currentAudioSrc = 'audio/start_music.mp3';

    nextButton.classList.add('hidden');
    backButton.classList.add('hidden');
    startButton.classList.remove('hidden');
    gameImage.src = 'images/s1.jpg';
    textContent.textContent = 'برای شروع بازی دکمه زیر را فشار دهید.';
    speakerName.textContent = '';
}

// --- گوش دادن به کلیک دکمه‌ها ---
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextScene);
backButton.addEventListener('click', prevScene);

// شروع فرآیند بارگذاری پس از لود شدن DOM
document.addEventListener('DOMContentLoaded', initializeGame);