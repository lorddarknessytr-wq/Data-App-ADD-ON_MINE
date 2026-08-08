window.ALL_MOD_VERSION = "1"; // عدد ورژن فایل
// پیدا کردن بخش خانه در اپلیکیشن
var homeContainer = document.getElementById("page-home");

// اگر بخش خانه پیدا شد، کدهای HTML زیر را به ابتدای آن تزریق کن
if (homeContainer) {
    homeContainer.insertAdjacentHTML('afterbegin', `
    
        <!-- لوگوی ویدئویی -->
        <video src="images/Logo-Da.webm" class="home-logo" autoplay loop muted playsinline></video>
        
    `);
}

// ۱. بنرهای اسلایدر صفحه اصلی (نام متغیر به homeBanners تغییر یافت)
const homeBanners = [
    { img: "images/banner1.mp4", link: "https://example.com/1" },
    { img: "images/banner3.mp4", link: "https://example.com/2" }
];

// ۲. بنر پایین صفحه دسته‌بندی‌ها
const categoryBanner = { img: "images/banner4.mp4", link: "https://example.com" };

// ۳. بنر پایین صفحه مقالات
const articleBanner = { img: "images/banner3.mp4", link: "https://example.com" };

// ۴. آرایه ۵ تایی بنرهای تبلیغاتی بین فایل‌ها
const promoBanners = [
    { img: "images/banner1.mp4", link: "https://example.com/1" },
    { img: "images/banner2.mp4", link: "https://example.com/2" },
    { img: "banner3.mp4", link: "https://example.com/3" },
    { img: "banner4.mp4", link: "https://example.com/4" },
    { img: "banner5.mp4", link: "https://example.com/5" }
];

// ۵. ویدیوی احتیاطی در صورت خرابی بنرها
const fallbackBanner = {
    img: "images/banner2.mp4",
    link: "https://t.me/your_channel_id"
};

// ۶. پیام خوش‌آمدگویی (کنار صفحه)
const welcomeMessage = "به اپلیکیشن ادان ماینکرفت خوش آمدید.!g";

// ۷. هشتگ‌های پیشنهادی هر دسته
const suggestedTags = {
    'ADD-ON': ['#ماشین', '#شمشیر', '#موب_جدید', '#تفنگ'],
    'Shader': ['#واقع_گرایانه', '#بدون_لگ', '#سبک', '#آب_طبیعی'],
    'Skin': ['#پسرانه', '#دخترانه', '#هکر', '#ترسناک'],
    'Map': ['#پارکور', '#سروایول', '#شهر', '#ترسناک'],
    'Texture': ['#کلاسیک', '#پی_وی_پی', '#رئالیسم'],
    'MiniGame': ['#بدوارز', '#اسکای_وارز', '#مبارزه'],
    'Version': ['#رسمی', '#بتا'],
    'Article': ['#آموزش_نصب', '#فارم', '#ترفند']
};

// ۸. راهنمای نصب دسته‌ها
const categoryGuides = {
    'ADD-ON': { title: "آموزش نصب مود", pic: "guide-pic.jpg", text: "متن آموزش نصب مودها..." },
    'Shader': { title: "آموزش نصب شیدر", pic: "guide-pic.jpg", text: "متن آموزش نصب شیدرها..." }
    // بقیه دسته‌ها...
};

// ۹. دیتابیس فایل‌ها و مقالات شما (db)
let db = [
    {
        id: 1,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 1250,
        likes: 340,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 2,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 3840,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 3,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 3840,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 4,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 3840,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 5,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 3840,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 6,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 3840,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 7,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 3840,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 8,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 3840,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 9,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 3840,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 10,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 38490,
        tags: ['#تفنگ', '#موب_جدید']
    },
    {
        id: 11,
        title: "چگونه در ماینکرفت یک فارم آهن بسازیم؟",
        type: "Article",
        img: "images/farm.jpg",
        desc: "یک راهنمای کامل برای ساخت سریع و بهینه فارم آهن در نسخه جدید بدراک...\n\nمرحله اول: جمع آوری منابع\nمرحله دوم: ساخت پلتفرم در ارتفاع بالا\nمرحله سوم: آوردن ویلیجرها...",
        author: "TLP",
        likes: 890,
        tags: ["#آموزش", "#فارم", "#آهن", "#بدراک"]
    }
];

// ۱۰. تنظیمات بروزرسانی اجباری اپلیکیشن
const forceUpdateConfig = {
    enabled: false, // اگر true باشد، پیام آپدیت اجباری نمایش داده می‌شود و اپلیکیشن قفل می‌شود
    title: "بروزرسانی جدید در دسترس است!",
    text: "نسخه جدید اپلیکیشن با امکانات فوق‌العاده منتشر شد! لطفا برای ادامه استفاده، برنامه را بروزرسانی کنید.",
    btnText: "بروزرسانی",
    link: "https://example.com/update"
};

// ۱۱. لینک دکمه پشتیبانی در بخش پروفایل
const supportLink = "http//add";
