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
const welcomeMessage = "به اپلیکیشن ادان ماینکرفت خوش آمدید.!";

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
    'ADD-ON': { title: `آموزش نصب ادان`,pic: "images/guide-p.png", text: 'scr :"https://abrehamrahi.ir/o/public/4RK2Vrqh/"'> },
    'Shader': { title: "آموزش نصب شیدر", pic: "images/guide-p.png", text: "متن آموزش نصب شیدرها..." },
    'Skin': { title: "آموزش نصب اسکین", pic: "images/guide-p.png", text: "متن آموزش نصب مودها..." },
    'Map': { title: "آموزش نصب مپ", pic: "images/guide-p.png", text: "متن آموزش نصب مودها..." },
    'Texture': { title: "آموزش نصب مپ", pic: "images/guide-p.png", text: "متن آموزش نصب مودها..." },
    'MiniGame': { title: "آموزش نصب مینی‌گیم", pic: "images/guide-p.png", text: "متن آموزش نصب مودها..." },
    'Version': { title: "آموزش نصب ماینکرفت", pic: "images/guide-p.png", text: "متن آموزش نصب مودها..." }
};

// ۹. دیتابیس فایل‌ها و مقالات شما (db)
let db = [
    {
        id: 1,
        type: 'ADD-ON',
        title: 'مود تفنگ‌Aهای پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'images/addon.jpg',
        downloads: 1250,
        likes: 34,
        tags: ['#1'],
        downloadLink: 'https://github.com/lorddarknessytr-wq/Data-App-ADD-ON_MINE/raw/refs/heads/main/Gg.mcaddon'
    },
    {
        id: 2,
        type: 'ADD-ON',
        title: 'مود تفنگ‌yهای پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 38400,
        tags: ['#تفنگ', '#موب_جدید'],
        downloadLink: 'https://abrehamrahi.ir/o/public/mAzpDKAF/'
    },
    {
        id: 3,
        type: 'ADD-ON',
        title: 'مود تفنگ‌های 5پیشرفته',
        desc: 'توضیحات کامل این مود فوق‌العاده...',
        img: 'cat-addon.jpg',
        downloads: 12580,
        likes: 38400,
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
        img: "images/addon.jpg",
        desc: ` خط جدید`,
        author: "TLP",
        likes: 890,
        tags: ["#آموزش", "#فارم", "#آهن", "#بدراک"]
    }
];
// === سیستم آپدیت اجباری (ایزوله شده) ===
(function() {
    try {
        // تنظیمات آپدیت
        var updateConfig = {
            forceUpdate: false,        // true = فعال | false = غیرفعال
            requiredVersion: "0.0.1", // حداقل نسخه مجاز
            updateLink: "https://your-download-link.com" // لینک دانلود
        };

        // تابع مقایسه نسخه‌ها
        function needsForceUpdate(current, required) {
            var currParts = current.split('.').map(Number);
            var reqParts = required.split('.').map(Number);

            for (var i = 0; i < 3; i++) {
                var curr = currParts[i] || 0;
                var req = reqParts[i] || 0;

                if (curr < req) return true;
                if (curr > req) return false;
            }
            return false;
        }

        // تابع نمایش پاپ‌آپ
        function showUpdatePopup() {
            if (!updateConfig.forceUpdate || !window.CURRENT_APP_VERSION) return;
            
            if (needsForceUpdate(window.CURRENT_APP_VERSION, updateConfig.requiredVersion)) {
                // ساخت اصولی المنت برای جلوگیری از خطای HTML
                var popup = document.createElement('div');
                popup.innerHTML = `
                    <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:9999; display:flex; flex-direction:column; justify-content:center; align-items:center; color:#fff; font-family:sans-serif; text-align:center;">
                        <h2>نسخه شما قدیمی است!</h2>
                        <p>برای استفاده از برنامه، باید آن را بروزرسانی کنید.</p>
                        <a href="${updateConfig.updateLink}" style="background:#28a745; color:#fff; padding:10px 20px; text-decoration:none; border-radius:5px; margin-top:15px; font-weight:bold;">دانلود نسخه جدید</a>
                    </div>
                `;
                document.body.appendChild(popup);
            }
        }

        // اجرای هوشمندانه فقط زمانی که اپلیکیشن کامل لود شده باشد
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showUpdatePopup);
        } else {
            showUpdatePopup();
        }
        
    } catch(error) {
        // اگر خطایی رخ دهد اینجا چاپ می‌شود ولی بقیه کدهای All_mod خراب نمی‌شود
        console.log("خطا در سیستم آپدیت:", error);
    }
})();
// =======================================


// ۱۱. لینک دکمه پشتیبانی در بخش پروفایل
const supportLink = "http//add";
