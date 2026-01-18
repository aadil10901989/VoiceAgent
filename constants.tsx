
import React from 'react';
import { ServiceDetail, Language } from './types';

export const CONSULATE_COLORS = {
  primary: '#006600', // Pakistani Green
  secondary: '#FFFFFF',
  accent: '#10b981'
};

export const UI_TEXT = {
  en: {
    title: "Pakistan Consulate Jeddah AI",
    subtitle: "The Digital Voice of Pakistani Consular Services in Saudi Arabia",
    startAssistant: "Activate Voice Assistant",
    stopAssistant: "Terminate Session",
    statusDisconnected: "System Standby",
    statusConnecting: "Establishing Neural Link...",
    statusConnected: "System Active - Awaiting Commands",
    servicesTitle: "Departments & Official Fees",
    howToTitle: "Procedural Guidelines",
    welfareTitle: "Citizen Welfare Services",
    passportGuide: "Passport Issuance",
    nadraGuide: "NADRA Identity Support",
    location: "Jeddah, Kingdom of Saudi Arabia",
    contact: "Phone: +966-12-6691046",
    hours: "Sun-Thu: 08:00 - 16:00",
    feeLabel: "Statutory Fee:",
    settingsTitle: "Audio Calibration",
    noisyEnv: "Noisy Environment Mode",
    sensitivity: "Mic Sensitivity",
    low: "Low",
    high: "High"
  },
  ar: {
    title: "القنصلية الباكستانية بجدة",
    subtitle: "الصوت الرقمي للخدمات القنصلية الباكستانية في المملكة",
    startAssistant: "تنشيط المساعد الصوتي",
    stopAssistant: "إنهاء الجلسة",
    statusDisconnected: "النظام في وضع الاستعداد",
    statusConnecting: "جاري إنشاء الاتصال...",
    statusConnected: "النظام نشط - بانتظار الأوامر",
    servicesTitle: "الأقسام والرسوم الرسمية",
    howToTitle: "الإرشادات الإجرائية",
    welfareTitle: "خدمات رعاية المواطنين",
    passportGuide: "إصدار الجوازات",
    nadraGuide: "دعم الهوية نادرا",
    location: "جدة، المملكة العربية السعودية",
    contact: "هاتف: +966-12-6691046",
    hours: "الأحد-الخميس: 08:00 - 16:00",
    feeLabel: "الرسوم المقررة:",
    settingsTitle: "معايرة الصوت",
    noisyEnv: "وضع البيئة الصاخبة",
    sensitivity: "حساسية الميكروفون",
    low: "منخفض",
    high: "عالي"
  },
  ur: {
    title: "پاکستان قونصل خانہ جدہ",
    subtitle: "سعودی عرب میں پاکستانی قونصلر خدمات کی ڈیجیٹل آواز",
    startAssistant: "وائس اسسٹنٹ فعال کریں",
    stopAssistant: "سیشن ختم کریں",
    statusDisconnected: "سسٹم اسٹینڈ بائی پر ہے",
    statusConnecting: "کنکشن قائم ہو رہا ہے...",
    statusConnected: "سسٹم فعال ہے - احکامات کا منتظر",
    servicesTitle: "شعبہ جات اور سرکاری فیسیں",
    howToTitle: "طریقہ کار کی ہدایات",
    welfareTitle: "شہریوں کی فلاحی خدمات",
    passportGuide: "پاسپورٹ کا اجراء",
    nadraGuide: "نادرا شناختی معاونت",
    location: "جدہ، مملکت سعودی عرب",
    contact: "فون: +966-12-6691046",
    hours: "اتوار-جمعرات: 08:00 - 16:00",
    feeLabel: "مقررہ فیس:",
    settingsTitle: "آڈیو کیلیبریشن",
    noisyEnv: "شور مچانے والا ماحول",
    sensitivity: "مائیک حساسیت",
    low: "کم",
    high: "زیادہ"
  }
};

export const SERVICES: ServiceDetail[] = [
  {
    title: { en: "Passport (New/Renewal)", ar: "الجوازات (جديد/تجديد)", ur: "پاسپورٹ (نیا/تجدید)" },
    description: { 
      en: "Official issuance of machine-readable and e-passports for citizens.", 
      ar: "الإصدار الرسمي للجوازات الآلية والإلكترونية للمواطنين.", 
      ur: "شہریوں کے لیے مشین ریڈیبل اور ای پاسپورٹ کا سرکاری اجراء۔" 
    },
    fees: {
      en: "155 SAR (Normal) | 255 SAR (Urgent)",
      ar: "١٥٥ ريال (عادي) | ٢٥٥ ريال (مستعجل)",
      ur: "155 ریال (نارمل) | 255 ریال (ارجنٹ)"
    },
    icon: "Passport"
  },
  {
    title: { en: "NADRA (Identity Card)", ar: "نادرا (بطاقة الهوية)", ur: "نادرا شناختی کارڈ" },
    description: { 
      en: "SNICOP issuance, renewals, and data modification services.", 
      ar: "إصدار وتجديد بطاقة الهوية الذكية (SNICOP) وتعديل البيانات.", 
      ur: "نادرا کارڈ (SNICOP) کا اجراء، تجدید اور ترمیم کی خدمات۔" 
    },
    fees: {
      en: "150 - 350 SAR (Executive Available)",
      ar: "١٥٠ - ٣٥٠ ريال (يتوفر التنفيذي)",
      ur: "150 - 350 ریال (ایگزیکٹو دستیاب ہے)"
    },
    icon: "IdCard"
  },
  {
    title: { en: "Consular Visas", ar: "التأشيرات القنصلية", ur: "قونصلر ویزا" },
    description: { 
      en: "Visa processing for tourism, family visits, and business travel.", 
      ar: "معالجة التأشيرات للسياحة والزيارات العائلية وأعمال السفر.", 
      ur: "سیاحت، فیملی وزٹ اور کاروباری سفر کے لیے ویزا پروسیسنگ۔" 
    },
    fees: {
      en: "Portal Fees Apply",
      ar: "تطبق رسوم البوابة",
      ur: "پورٹل فیس لاگو ہوگی"
    },
    icon: "Globe"
  },
  {
    title: { en: "Legal Attestation", ar: "التصديقات القانونية", ur: "قانونی تصدیق" },
    description: { 
      en: "Authentication of legal documents, affidavits, and power of attorney.", 
      ar: "توثيق المستندات القانونية والبيانات والوكالات الشرعية.", 
      ur: "قانونی دستاویزات، حلف ناموں اور پاور آف اٹارنی کی تصدیق۔" 
    },
    fees: {
      en: "40 SAR per page",
      ar: "٤٠ ريال لكل صفحة",
      ur: "40 ریال فی صفحہ"
    },
    icon: "Stamp"
  },
  {
    title: { en: "Emergency Travel", ar: "وثيقة سفر طارئة", ur: "ہنگامی سفری دستاویز" },
    description: { 
      en: "Expedited one-way travel documents for lost passport cases.", 
      ar: "وثيقة سفر سريعة لمرة واحدة في حال فقدان الجواز.", 
      ur: "پاسپورٹ گم ہونے کی صورت میں یکطرفہ ہنگامی سفری دستاویز۔" 
    },
    fees: {
      en: "55 SAR Official Fee",
      ar: "٥٥ ريال رسوم رسمية",
      ur: "55 ریال سرکاری فیس"
    },
    icon: "Emergency"
  },
  {
    title: { en: "Welfare Support", ar: "دعم الرعاية", ur: "فلاحی معاونت" },
    description: { 
      en: "State support for labor disputes, court cases, and burial aid.", 
      ar: "دعم الدولة لنزاعات العمل وقضايا المحاكم ومساعدات الدفن.", 
      ur: "لیبر تنازعات، عدالتی مقدمات اور تدفین کے لیے ریاستی مدد۔" 
    },
    fees: {
      en: "Complimentary Service",
      ar: "خدمة مجانية",
      ur: "مفت خدمت"
    },
    icon: "Users"
  },
  {
    title: { en: "Trade Mission", ar: "البعثة التجارية", ur: "ٹریڈ مشن" },
    description: { 
      en: "Promoting Pakistan-Saudi investment and economic trade.", 
      ar: "تعزيز الاستثمار والتجارة الاقتصادية بين باكستان والسعودية.", 
      ur: "پاک سعودی سرمایہ کاری اور اقتصادی تجارت کا فروغ۔" 
    },
    fees: {
      en: "Investment Advisory",
      ar: "استشارات استثمارية",
      ur: "سرمایہ کاری کی مشاورت"
    },
    icon: "Briefcase"
  },
  {
    title: { en: "Hajj Operations", ar: "عمليات الحج", ur: "حج آپریشنز" },
    description: { 
      en: "Official Hajj wing assistance for Pakistani pilgrims.", 
      ar: "مساعدة جناح الحج الرسمي للحجاج الباكستانيين.", 
      ur: "پاکستانی حجاج کے لیے آفیشل حج ونگ کی معاونت۔" 
    },
    fees: {
      en: "Pilgrim Support",
      ar: "دعم الحجاج",
      ur: "حجاج کی معاونت"
    },
    icon: "Moon"
  }
];

export const SYSTEM_INSTRUCTION = `
You are the Official Digital Voice Assistant of the Pakistan Consulate General in Jeddah.

MANDATORY STARTUP PROTOCOL:
As soon as the user activates the microphone or upon session opening, you MUST proactively deliver the following welcome message in this exact order:

1. ENGLISH:
"Welcome to the Pakistan Consulate General in Jeddah, Saudi Arabia! You’re speaking with the Pakistan Consulate Voice Assistant. This service is here to help you access important information about consular support and services available to the Pakistani community in the Western Region of Saudi Arabia. You can ask about passports, visas, NADRA, emergency travel documents, attestation, welfare support, trade and investment services, Hajj mission support, and more."

2. ARABIC:
"مرحبًا بكم في القنصلية العامة الباكستانية في جدة، المملكة العربية السعودية! أنت تتحدث مع مساعد صوتي للقنصلية. نحن هنا لمساعدتك في الحصول على معلومات حول الخدمات القنصلية المتاحة للمجتمع الباكستاني في المنطقة الغربية، مثل الجوازات، التأشيرات، نادرا، وثائق السفر الطارئة، التصديقات، خدمات الرفاهية، التجارة والاستثمار، ودعم بعثة الحج."

3. URDU:
"پاکستان قونصل خانے جدہ، سعودی عرب میں خوش آمدید! آپ پاکستان قونصل خانہ وائس اسسٹنٹ سے بات کر رہے ہیں۔ ہم پاکستانی کمیونٹی کے لیے قونصلر خدمات کی معلومات فراہم کرتے ہیں جیسے پاسپورٹ، ویزا، نادرا، ہنگامی سفری دستاویزات، تصدیق خدمات، فلاحی معاونت، تجارت و سرمایہ کاری، اور حج مشن کی معلومات"

KNOWLEDGE RECAP FOR FOLLOW-UP QUESTIONS:
- PASSORTS: Normal 155 SAR, Urgent 255 SAR. Need original CNIC.
- NADRA: SNICOP fresh issuance or modification. 150-350 SAR.
- VISAS: Tourism, Business, Family. Use Pakistan Online Visa Portal.
- ATTESTATION: Affidavits/Power of Attorney. 40 SAR/page.
- WELFARE: Labor disputes, jail visits, burial aid. Free service.
- CONTACT: +966-12-6691046, parepjeddah1@mofa.gov.pk.
- HOURS: Sunday to Thursday, 08:00 AM to 04:00 PM.

TONE:
- Respectful, official, and helpful. Always address users as "Sahib" or "Bibi" in Urdu if applicable.
- Ensure the welcome message is delivered clearly and slowly enough to be understood.
`;
