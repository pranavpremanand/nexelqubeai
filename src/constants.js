// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// logo
import logo from "./assets/logo/logo.png";

export { logo };

// client details
export const clientDetails = {
  phone: "+917680977025",
  email: "info@nexelqubeai.com",
  address: "Time Square, Thubarahalli, Bangalore, India – 560066",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  // {
  //   id: 2,
  //   title: "Industries",
  //   link: "/industries",
  // },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "In-Depth Consultation",
    description: "Understand your needs, discuss goals.",
    img: process1,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Create roadmap, define KPIs, set timeline.",
    img: process2,
  },
  {
    id: 3,
    title: "Design and Development",
    description: "Design visually stunning, develop functional website",
    img: process3,
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Ensure optimal performance, compatibility, security",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "We create powerful e-commerce websites that enhance customer engagement, streamline business operations, and drive sustainable revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Developing dynamic and engaging social media websites designed to foster community interaction, boost brand awareness, and encourage user loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      "Crafting high-conversion landing pages that grab attention and drive meaningful action, tailored to showcase your brand and optimize results.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Building bespoke websites designed specifically for your business, combining innovative design and seamless functionality for a remarkable online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "We create exceptional iOS apps using Swift and Objective-C, delivering seamless performance, modern design, and enhanced user engagement.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "Our Android apps, crafted with Java and Kotlin, are tailored to your business vision, offering robust features and outstanding user experiences.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Leverage Flutter’s single codebase to build responsive apps for iOS and Android, ensuring efficiency without compromising on quality.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "Our hybrid apps deliver seamless functionality across platforms, combining native performance with versatile design for an enhanced user experience.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img1: require("./assets/services-details/web-development1.webp"),
    img2: require("./assets/services-details/web-development2.webp"),
    title: "Web Development",
    smallPara:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs.\n\nAt the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with.",
    keyBenefits: [
      "Responsive and user-friendly design.",
      "Custom-built solutions tailored to your business needs.",
      "Secure and scalable architecture.",
      "Seamless integration with third-party tools and APIs.",
    ],
    detailsPageContent: {
      firstPara: `In the modern digital landscape, web applications play a crucial role
          in our daily activities, work, and communication. From e-commerce to
          educational platforms, these applications empower businesses and
          individuals alike. Building a successful web application requires
          creativity, technical expertise, and a deep understanding of user
          needs.
          \n
          Web development is a blend of front-end and back-end technologies. The
          front-end focuses on user-facing elements, delivering engaging and
          intuitive interfaces that captivate and inform.`,
      servicesSection: `Whether you need a sleek landing page or a complex e-commerce
          platform, we offer comprehensive web development solutions. Our
          expertise spans full-stack development, ensuring both robust back-end
          functionality and intuitive front-end interfaces. Our websites don’t
          just look great—they perform flawlessly, driving conversions and
          delivering measurable results. \n
          On the back-end, we manage the critical logic, data handling, and
          security that power your application. Using technologies like Python,
          PHP, Ruby, and Java, along with databases such as MySQL, PostgreSQL,
          and MongoDB, we build efficient, scalable solutions that ensure
          reliability and performance.`,
    },
  },
  {
    id: 2,
    img1: require("./assets/services-details/app-development1.webp"),
    img2: require("./assets/services-details/app-development2.webp"),
    title: "App Development",
    smallPara:
      "Mobile applications have become an integral part of our daily lives, transforming the way we communicate, consume information, and conduct business. The development of mobile apps requires a unique set of skills and considerations, as compared to website development.\n\nOne of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.",
    keyBenefits: [
      "Cross-platform compatibility for iOS and Android.",
      "User-centric design for better engagement.",
      "Robust performance and offline capabilities.",
      "Advanced security features for data protection.",
    ],
    detailsPageContent: {
      firstPara: `Mobile applications have revolutionized the way we interact with technology, providing seamless access to services, information, and entertainment on the go. Developing a successful mobile app requires a deep understanding of user behavior, platform-specific guidelines, and performance optimization.
          \n
          Our app development process involves creating native and cross-platform apps that deliver exceptional user experiences. We focus on intuitive design, smooth navigation, and robust functionality to ensure your app stands out in the competitive market.`,
      servicesSection: `Our app development services cover the entire lifecycle, from concept to deployment and maintenance. We specialize in building apps for iOS and Android platforms, utilizing technologies like Swift, Kotlin, React Native, and Flutter. Our team ensures your app is optimized for performance, security, and scalability, providing a seamless experience for your users.
          \n
          Whether you need a consumer-facing app or an enterprise solution, we tailor our approach to meet your specific requirements, delivering high-quality apps that drive engagement and achieve your business goals.`,
    },
  },
  {
    id: 3,
    img1: require("./assets/services-details/cloud-computing-1.webp"),
    img2: require("./assets/services-details/cloud-computing-2.webp"),
    title: "Cloud Computing",
    smallPara:
      "Cloud computing provides scalable and flexible solutions for businesses to store, manage, and process data. It enables organizations to leverage the power of remote servers and services, reducing the need for on-premises infrastructure.\n\nWith cloud computing, businesses can achieve greater efficiency, cost savings, and agility, allowing them to focus on innovation and growth.",
    keyBenefits: [
      "Scalable and flexible infrastructure.",
      "Cost-effective solutions with reduced hardware needs.",
      "Enhanced collaboration and accessibility.",
      "Robust security and data protection.",
    ],
    detailsPageContent: {
      firstPara: `Cloud computing has transformed the way businesses operate, offering scalable and flexible solutions for data storage, management, and processing. By leveraging cloud services, organizations can reduce their reliance on physical infrastructure, lower costs, and improve operational efficiency.
          \n
          Our cloud computing services encompass a wide range of solutions, including cloud migration, infrastructure management, and cloud-native application development. We help businesses harness the power of the cloud to drive innovation and achieve their strategic objectives.`,
      servicesSection: `We provide end-to-end cloud computing services, from initial assessment and strategy development to implementation and ongoing management. Our expertise spans various cloud platforms, including AWS, Azure, and Google Cloud, ensuring we can tailor solutions to meet your specific needs.
          \n
          Our services include cloud architecture design, migration planning, and execution, as well as ongoing optimization and support. We focus on delivering secure, scalable, and cost-effective cloud solutions that enhance your business agility and enable you to stay competitive in the digital landscape.`,
    },
  },
  {
    id: 4,
    img1: require("./assets/services-details/data-engineering-1.webp"),
    img2: require("./assets/services-details/data-engineering-2.webp"),
    title: "Data Analytics",
    smallPara:
      "Data analytics involves the process of examining data sets to draw conclusions and make informed decisions. It encompasses various techniques and tools to analyze, visualize, and interpret data, providing valuable insights for businesses.\n\nBy leveraging data analytics, organizations can optimize operations, improve customer experiences, and drive strategic initiatives.",
    keyBenefits: [
      "Informed decision-making with data-driven insights.",
      "Enhanced operational efficiency and performance.",
      "Improved customer experiences and personalization.",
      "Predictive analytics for future trends and opportunities.",
    ],
    detailsPageContent: {
      firstPara: `Data analytics is a powerful tool that enables businesses to make informed decisions based on data-driven insights. By analyzing large volumes of data, organizations can uncover patterns, trends, and correlations that inform strategic initiatives and drive operational improvements.
          \n
          Our data analytics services encompass a wide range of techniques, including descriptive, diagnostic, predictive, and prescriptive analytics. We help businesses transform raw data into actionable insights that enhance decision-making and drive growth.`,
      servicesSection: `We offer comprehensive data analytics solutions, from data collection and processing to visualization and interpretation. Our team utilizes advanced tools and technologies, such as machine learning, artificial intelligence, and big data platforms, to deliver accurate and meaningful insights.
          \n
          Our services include data warehousing, data mining, and real-time analytics, ensuring you have access to the information you need when you need it. We focus on delivering customized solutions that align with your business goals, helping you optimize operations, improve customer experiences, and stay ahead of the competition.`,
    },
  },
  {
    id: 5,
    img1: require("./assets/services-details/game-1.webp"),
    img2: require("./assets/services-details/game-2.webp"),
    title: "Game Development",
    smallPara:
      "Game development is a dynamic and creative process that involves designing, developing, and deploying interactive games for various platforms. It combines artistic vision with technical expertise to create engaging and immersive experiences for players.\n\nFrom concept to launch, game development requires a multidisciplinary approach, including programming, design, audio, and storytelling.",
    keyBenefits: [
      "Immersive and engaging gameplay experiences.",
      "Cross-platform compatibility for wider reach.",
      "Innovative and creative game design.",
      "Robust performance and optimization.",
    ],
    detailsPageContent: {
      firstPara: `Game development is a multifaceted process that brings together creativity, technology, and storytelling to create interactive entertainment experiences. From mobile games to console and PC titles, the development process involves designing engaging gameplay mechanics, creating stunning visuals, and ensuring smooth performance.
          \n
          Our game development services cover the entire lifecycle, from initial concept and design to development, testing, and deployment. We focus on delivering immersive and enjoyable experiences that captivate players and keep them coming back for more.`,
      servicesSection: `We offer end-to-end game development solutions, including concept art, 3D modeling, animation, programming, and audio design. Our team is proficient in using industry-standard tools and technologies, such as Unity, Unreal Engine, and Blender, to create high-quality games for various platforms.
          \n
          Whether you're looking to develop a casual mobile game or a complex AAA title, we have the expertise to bring your vision to life. Our services include game design, prototyping, development, and post-launch support, ensuring your game is optimized for performance and delivers a seamless experience for players.`,
    },
  },
  {
    id: 6,
    img1: require("./assets/services-details/cybersecurity-1.webp"),
    img2: require("./assets/services-details/cybersecurity-2.webp"),
    title: "Cybersecurity Services",
    smallPara:
      "Cybersecurity services are essential for protecting businesses from cyber threats and ensuring the security of their digital assets. These services encompass a range of solutions, including threat detection, risk assessment, and incident response.\n\nBy implementing robust cybersecurity measures, organizations can safeguard their data, maintain customer trust, and comply with regulatory requirements.",
    keyBenefits: [
      "Comprehensive threat detection and prevention.",
      "Risk assessment and vulnerability management.",
      "Incident response and recovery.",
      "Compliance with industry standards and regulations.",
    ],
    detailsPageContent: {
      firstPara: `In today's digital age, cybersecurity is more critical than ever. Businesses face a growing number of cyber threats, from data breaches and ransomware attacks to phishing scams and insider threats. Implementing robust cybersecurity measures is essential to protect your digital assets and maintain customer trust.
          \n
          Our cybersecurity services provide comprehensive protection against a wide range of threats. We offer solutions for threat detection, risk assessment, vulnerability management, and incident response, ensuring your business is prepared to defend against cyber attacks.`,
      servicesSection: `We provide a full suite of cybersecurity services, including network security, endpoint protection, and cloud security. Our team of experts uses advanced tools and techniques to identify and mitigate vulnerabilities, ensuring your systems are secure and compliant with industry standards.
          \n
          Our services include security assessments, penetration testing, and security monitoring, as well as incident response and recovery. We work closely with you to develop a customized cybersecurity strategy that addresses your specific needs and helps you stay ahead of emerging threats.`,
    },
  },
  {
    id: 7,
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "IoT Development",
    smallPara:
      "The Internet of Things (IoT) is revolutionizing how devices and systems interact, enabling seamless connectivity and intelligent automation. IoT solutions enhance operational efficiency, monitor processes in real-time, and improve decision-making through actionable insights.\n\nIoT is transforming industries, from smart homes and cities to manufacturing and healthcare, delivering innovative, data-driven solutions that shape the future.",
    keyBenefits: [
      "Facilitates real-time monitoring and automation.",
      "Improves operational efficiency and productivity.",
      "Enhances decision-making with actionable insights.",
      "Connects and manages devices seamlessly.",
    ],
    detailsPageContent: {
      firstPara: `The Internet of Things (IoT) is transforming the way we live and work by connecting devices and systems to the internet, enabling real-time data exchange and intelligent automation. IoT solutions have the potential to enhance operational efficiency, improve decision-making, and drive innovation across various industries.
          \n
          Our IoT development services encompass the entire lifecycle, from device integration and connectivity to data analytics and application development. We help businesses leverage IoT technology to create smart, connected solutions that deliver tangible benefits.`,
      servicesSection: `We offer comprehensive IoT development services, including hardware design, firmware development, and cloud integration. Our team is experienced in working with a wide range of IoT platforms and protocols, ensuring seamless connectivity and interoperability.
          \n
          Our services include IoT strategy development, device management, and data analytics, providing you with the tools and insights needed to optimize your operations and drive innovation. Whether you're looking to develop a smart home solution or an industrial IoT application, we have the expertise to bring your vision to life.`,
    },
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Aarav Kapoor",
    title: "Founder of TechSphere Innovations",
    description:
      "NexelQubeAI exceeded our expectations by delivering a solution that was both innovative and perfectly aligned with our business goals. Truly a game-changer!",
  },
  {
    id: 2,
    img: "",
    name: "Sanya Mehta",
    title: "CTO of GreenLink Energy Solutions",
    description:
      "Collaborating with NexelQubeAI was a seamless experience. Their team’s expertise and commitment to excellence helped us achieve remarkable results.",
  },
  {
    id: 3,
    img: "",
    name: "Rahul Verma",
    title: "Director of OmniTrade Logistics",
    description:
      "NexelQubeAI delivered outstanding solutions tailored to our needs. Their professionalism and forward-thinking approach set them apart.",
  },
  {
    id: 4,
    img: "",
    name: "Dr. Ananya Gupta",
    title: "CEO of MedEase Technologies",
    description:
      "The team at NexelQubeAI helped us revolutionize our platform, making it highly intuitive and user-friendly. Their work speaks volumes about their expertise and passion.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "On Demand",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Empowering on-demand platforms with intelligent matchmaking, real-time tracking, and user-centric analytics.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("./assets/industries/Education.webp"),
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: require("./assets/industries/Game.webp"),
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
