// ===== كل بياناتك هنا — عدّل هنا فقط =====
const portfolio = {

  // معلومات التواصل (مشتركة بين اللغتين)
  contact: {
    email:    'abdullah.alshahi@outlook.sa',
    phone:    '+966 536 658 476',
    linkedin: 'https://www.linkedin.com/in/abdullah-alshahi',
    github:   'https://github.com/abduulahalshahi',
  },

  // ===== النسخة الإنجليزية =====
  en: {
    name:     'Abdullah Al shahi',
    title:    'Frontend Developer · React.js | Next.js',
    location: 'Riyadh, Saudi Arabia',
    about:    'Frontend Developer with hands-on experience building responsive and scalable web applications using React.js, Next.js, and TypeScript. Worked on production-level projects within agile teams and collaborated with UI/UX designers and backend developers to deliver modern, user-friendly interfaces. Strong understanding of clean code practices, REST APIs, Git workflows, and performance optimization.',

    skills: {
      'Frontend':            ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material UI', 'Redux', 'Responsive Design'],
      'Backend & Database':  ['PHP', 'Laravel', 'MySQL', 'REST APIs','.NET'],
      'Tools & Workflow':    ['Git', 'GitLab', 'Jira', 'Agile', 'OOP'],
    },

    experience: [
      {
        role:    'Frontend Developer Intern',
        company: 'National Housing Company (NHC)',
        meta:    'Riyadh · On-site · 6 Months',
        points: [
          'Developed and maintained responsive web applications using React.js and Next.js for the Mostadam platform.',
          'Collaborated with UI/UX designers and backend developers to implement scalable frontend features.',
          'Improved application responsiveness and performance using modern frontend best practices.',
          'Participated in Agile development cycles using Jira and GitLab.',
        ],
      },
    ],

    projects: [
      {
        name:  'Mostadam Frontend',
        stack: 'React.js · Next.js · TypeScript · Redux · Material UI',
        points: [
          'Built reusable UI components using React Hooks and component-based architecture.',
          'Implemented routing and state management with Redux.',
          'Developed responsive interfaces optimized for multiple devices.',
        ],
      },
      {
        name:  'World Countries Dashboard',
        stack: 'React.js · Next.js · REST API · Tailwind CSS',
        points: [
          'Built an interactive dashboard that fetches and displays live data for all countries worldwide.',
          'Implemented search and filter functionality to explore countries by name, region, and population.',
          'Designed a clean and responsive UI with detailed country cards and statistics.',
        ],
        link: 'https://dashboard-pi-gilt-92.vercel.app',
      },
      {
        name:  'Frontend Learning Platform',
        stack: 'HTML · CSS · JavaScript',
        points: [
          'Built a full Arabic-language educational platform teaching frontend development from scratch to professional level.',
          'Structured a step-by-step curriculum covering HTML, CSS, and JavaScript fundamentals.',
          'Designed to help learners build a portfolio and enter the job market with practical, real-world skills.',
        ],
        link: 'https://jazzy-macaron-bfcc27.netlify.app/',
      },
      {
        name:  'Open Valor — Company Landing Page',
        stack: '',
        points: [
          'Designed and built a professional landing page for a Saudi AI company specializing in enterprise solutions.',
          'Included sections for services, projects, testimonials, and a contact form to drive lead generation.',
          'Applied a modern dark theme with clean layout and optimized assets for fast loading.',
        ],
        link: 'https://openvalor.vercel.app',
      },
    ],

    education: [
      { degree: "Bachelor's Degree in Software Engineering", school: 'Technical College of Najran', year: '2025' },
      { degree: 'Full Stack Web Development Bootcamp',       school: 'Abad Institute',               year: '4 Months' },
      { degree: 'CCNA — Cisco Certified Network Associate',  school: 'Cisco',                        year: '2024' },
    ],

    ui: {
      navLinks: [
        { label: 'About',      href: '#about'      },
        { label: 'Skills',     href: '#skills'     },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects',   href: '#projects'   },
        { label: 'Contact',    href: '#contact'    },
      ],
      hireMe:       'My CV',
      downloadCV:   'Download CV',
      viewProjects: 'View Projects',
      sections: {
        about:      'About',
        skills:     'Skills',
        experience: 'Experience',
        projects:   'Projects',
        education:  'Education & Certifications',
        contact:    'Get in Touch',
      },
      contactSubtitle: 'Feel free to reach out ',
      footer:      '2026 Abdullah Alshahi  ❤',
      langToggle:  'ع',   // النص اللي يظهر على زر تغيير اللغة
    },
  },

  // ===== النسخة العربية =====
  ar: {
    name:     'عبدالله ال شهي',
    title:    'مطور واجهات · React.js | Next.js',
    location: 'الرياض، المملكة العربية السعودية',
    about:    'مطور واجهات أمامية أمتلك خبرة عملية في بناء تطبيقات ويب متجاوبة وقابلة للتوسع باستخدام React.js وNext.js وTypeScript. عملت على مشاريع بمستوى إنتاجي ضمن فرق برمجية وتعاونت مع مصممي واجهات المستخدم ومطوري الباك إند لتقديم واجهات حديثة وسهلة الاستخدام. أمتلك فهماً قوياً لمبادئ الكود النظيف وواجهات REST API وسير عمل Git وتحسين الأداء.',

    skills: {
      'الواجهة الأمامية':           ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material UI', 'Redux', 'تصميم متجاوب'],
      'الباك إند وقواعد البيانات':   ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
      'الأدوات وسير العمل':          ['Git', 'GitLab', 'Jira', 'Agile', 'OOP', 'أنماط التصميم'],
    },

    experience: [
      {
        role:    'مطور واجهات أمامية — متدرب',
        company: 'شركة الإسكان الوطني (NHC)',
        meta:    'الرياض · حضوري · 6 أشهر',
        points: [
          'طوّرت  تطبيقات ويب متجاوبة باستخدام React.js وNext.js لمنصة مستدام.',
          'تعاونت مع مصممي واجهات المستخدم ومطوري الباك إند لتنفيذ مميزات الواجهة الأمامية.',
          'حسّنت استجابة التطبيق وأداءه باستخدام أفضل ممارسات الواجهة الأمامية الحديثة.',
          'شاركت في دورات التطوير  باستخدام Jira وGitLab.',
        ],
      },
    ],

    projects: [
      {
        name:  'واجهة مستدام الأمامية',
        stack: 'React.js · Next.js · TypeScript · Redux · Material UI',
        points: [
          'بنيت مكونات UI قابلة لإعادة الاستخدام باستخدام React Hooks والمعمارية القائمة على المكونات.',
          'نفّذت التوجيه وإدارة الحالة باستخدام Redux.',
          'طوّرت واجهات متجاوبة محسّنة لأجهزة متعددة.',
        ],
      },
      {
        name:  'لوحة تحكم دول العالم',
        stack: 'React.js · Next.js · REST API · Tailwind CSS',
        points: [
          'بنيت لوحة تحكم تفاعلية تجلب وتعرض بيانات حية لجميع دول العالم.',
          'نفّذت خاصية البحث والتصفية للاستعراض حسب الاسم والمنطقة والسكان.',
          'صمّمت واجهة نظيفة ومتجاوبة مع بطاقات تفصيلية لكل دولة.',
        ],
        link: 'https://dashboard-pi-gilt-92.vercel.app',
      },
      {
        name:  'منصة تعلم الفرونت إند',
        stack: 'HTML · CSS · JavaScript',
        points: [
          'بنيت منصة تعليمية عربية متكاملة لتعليم تطوير الواجهات من الصفر حتى الاحتراف.',
          'صممت منهجاً تدريجياً يغطي أساسيات HTML وCSS وJavaScript.',
          'تهدف المنصة إلى تأهيل المتعلمين لسوق العمل التقني وبناء مشاريع حقيقية.',
        ],
        link: 'https://jazzy-macaron-bfcc27.netlify.app/',
      },
      {
        name:  'Open Valor — صفحة إعلانية للشركة',
        stack: '',
        points: [
          'صممت وبنيت صفحة إعلانية احترافية لشركة سعودية متخصصة في الذكاء الاصطناعي للمؤسسات.',
          'تضمنت أقساماً للخدمات والمشاريع وشهادات العملاء ونموذج تواصل لاستقطاب العملاء.',
          'اعتمدت تصميماً داكناً حديثاً مع تخطيط نظيف وأصول محسّنة لسرعة التحميل.',
        ],
        link: 'https://openvalor.vercel.app',
      },
    ],

    education: [
      { degree: 'بكالوريوس في هندسة البرمجيات',          school: 'الكلية التقنية بنجران', year: '2025'    },
      { degree: 'بوتكامب تطوير الويب الشامل',             school: 'معهد اباد',             year: '4 أشهر' },
      { degree: 'CCNA — شهادة مهندس شبكات معتمد من سيسكو', school: 'Cisco',                year: '2024'    },
    ],

    ui: {
      navLinks: [
        { label: 'عني',        href: '#about'      },
        { label: 'المهارات',  href: '#skills'     },
        { label: 'الخبرة',    href: '#experience' },
        { label: 'المشاريع',  href: '#projects'   },
        { label: 'تواصل',    href: '#contact'    },
      ],
      hireMe:       'سيرتي الذاتية',
      downloadCV:   'تنزيل السيرة',
      viewProjects: 'المشاريع',
      sections: {
        about:      'نبذة عني',
        skills:     'المهارات',
        experience: 'الخبرة',
        projects:   'المشاريع',
        education:  'التعليم والشهادات',
        contact:    'تواصل معي',
      },
      contactSubtitle: 'لا تتردد في التواصل.',
      footer:      ' 2026 عبدالله  ال شهي   ❤',
      langToggle:  'EN',
    },
  },
}

export default portfolio
