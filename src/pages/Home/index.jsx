import { LiaRestroomSolid } from "react-icons/lia";
import "./Home.css";
import "./Contact.css";
import Photo1 from "/assets/images/gallery/gallery1.jpeg";
import { FaFish, FaParking, FaSwimmer, FaCamera } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionDescription />
      <ActivitiesFacilities />
      <Spotlight />
      <ArticleSection />
      <FAQSection />
      <ContactForm />
    </>
  );
};

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Matikan scroll

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.volume = 0.2;
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => {
          console.error("Autoplay gagal:", err);
        });
      }
    }, 100);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <section
      id="hero"
      className="hero-section bg-gradient-to-b from-blue-50 to-emerald-50"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="hero-wrap flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="hero-content lg:w-1/2 text-center lg:text-left flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Cirewang Beach
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-blue-600">
              A Natural Wonder Formed Overnight
            </h2>

            <div className="beach-highlights flex flex-wrap gap-3 justify-center lg:justify-start mb-6 w-full items-center">
              <span className="min-w-[188px] inline-flex justify-center px-10 box-border py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                ⏳ Formed in 2013
              </span>
              <span className="min-w-[120px] inline-flex justify-center px-10 box-border py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                📏 Area 500m²
              </span>
              <span className="min-w-[126px] inline-flex justify-center px-10 box-border py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">
                🌊 Length 1km
              </span>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 text-justify">
              Cirewang Beach is a natural wonder that was once a highland.
              Naturally formed in a short period around 2013, this beach has now
              become a top tourist destination, nicknamed the "One-Night
              Creation Beach" due to its rapid formation process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
              <div className="w-full lg:w-auto min-w-[200px] justify-center">
                <Link
                  to="/plan-your-visit"
                  className="px-6 py-8 w-full xl:w-auto text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 flex justify-center items-center gap-2 whitespace-nowrap"
                >
                  <HiInformationCircle className="h-5 w-5" />
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="mockup-wrapper lg:w-1/2 flex justify-center ">
            {/* Desktop/Large */}
            <div
              className="hidden lg:block relative mx-auto border-gray-800 bg-gray-800 border-[17.5px] rounded-[3.125rem] h-[750px] w-[375px] shadow-2xl transform hover:scale-105 transition-transform duration-300"
              title="Buka Video"
              onClick={openModal}
            >
              <div className="w-[185px] h-[22.5px] bg-gray-800 top-0 rounded-b-[1.25rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[57.5px] w-[3.75px] bg-gray-800 absolute -start-[21.25px] top-[155px] rounded-s-lg"></div>
              <div className="h-[57.5px] w-[3.75px] bg-gray-800 absolute -start-[21.25px] top-[222.5px] rounded-s-lg"></div>
              <div className="h-[80px] w-[3.75px] bg-gray-800 absolute -end-[21.25px] top-[177.5px] rounded-e-lg"></div>
              <div className="wrap-video rounded-[2.5rem] overflow-hidden w-[340px] h-[715px] bg-white ">
                <HoverPauseVideo
                  src="/assets/videos/video-1.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tablet/Medium */}
            <div className="hidden md:block lg:hidden relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-[2.8rem] h-[680px] w-[340px] shadow-2xl">
              <div
                className="w-[168px] h-[20px] bg-gray-800 top-0 rounded-b-[1.1rem] left-1/2 -translate-x-1/2 absolute"
                title="Buka Video"
                onClick={openModal}
              ></div>
              <div className="h-[52px] w-[3.4px] bg-gray-800 absolute -start-[19px] top-[140px] rounded-s-lg"></div>
              <div className="h-[52px] w-[3.4px] bg-gray-800 absolute -start-[19px] top-[202px] rounded-s-lg"></div>
              <div className="h-[72px] w-[3.4px] bg-gray-800 absolute -end-[19px] top-[160px] rounded-e-lg"></div>
              <div className="wrap-video rounded-[2.2rem] overflow-hidden w-[308px] h-[648px] bg-white ">
                <HoverPauseVideo
                  src="/assets/videos/video-1.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mobile/Small */}
            <div className="block md:hidden relative mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
              <div
                className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"
                title="Buka Video"
                onClick={openModal}
              ></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="wrap-video rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white ">
                <HoverPauseVideo
                  src="/assets/videos/video-1.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Waves />

      {/* Modal Video */}
      {isModalOpen && (
        <div className="modal-video" style={{ display: "block" }}>
          <span className="gallery-close-modal" onClick={closeModal}>
            <IoClose />
          </span>
          <div className="modal-video-content">
            <video
              ref={videoRef}
              src="/assets/videos/video-1.mp4"
              controls
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function HoverPauseVideo({ src, className }) {
  const videoRef = useRef(null);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      className={className}
      onMouseEnter={() => videoRef.current && videoRef.current.pause()}
      onMouseLeave={() => videoRef.current && videoRef.current.play()}
    />
  );
}

const Waves = () => {
  return (
    <svg
      className="hero-waves"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="wave1">
        <use href="#wave-path" x="50" y="3" fill="rgba(100, 100, 100, 0.15)" />
      </g>
      <g className="wave2">
        <use href="#wave-path" x="50" y="0" fill="rgba(100, 100, 100, 0.25)" />
      </g>

      <g className="wave3">
        <use href="#wave-path" x="50" y="9" fill="#f5f5f5" />
      </g>
    </svg>
  );
};

function SectionDescription() {
  return (
    <section id="about" className="s-description">
      <h2 className="section-title">Description Pantai Cirewang</h2>
      <div className="description-wrap">
        <div className="img-wrapper">
          <div className="img-container">
            {/* 
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.467082367086!2d107.76811926910234!3d-6.561590679615411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693b9ae39cc0eb%3A0x76db7b3959df2011!2sPoliteknik%20Negeri%20Subang%2C%20Kampus%20Utama%20Cibogo!5e0!3m2!1sid!2sid!4v1739072152156!5m2!1sid!2sid"
                className="map-frame"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> 
              */}
            <img
              className="img-frame"
              src={Photo1}
              alt="Pantai Cirewang"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="description-info">
          <h3>History and Description</h3>
          <p>
            Pantai Cirewang has a unique story. This beach used to be a raised
            land. It was formed about 13 years ago, around 2013. It officially
            became a tourist attraction. The area is now about 500 square meters
            long and 1 km wide. Many also call it "Pantai Tanjung Cirewang",
            "Teluk Sidaon" or even "Pantai Cipta Semalam" because it was formed
            quickly overnight.
          </p>
          <p>
            Pantai Cirewang has a unique story. This beach used to be a raised
            land. It was formed about 13 years ago, around 2013. It officially
            became a tourist attraction. The area is now about 500 square meters
            long and 1 km wide. Many also call it "Pantai Tanjung Cirewang",
            "Teluk Sidaon" or even "Pantai Cipta Semalam" because it was formed
            quickly overnight.
          </p>
        </div>
      </div>
    </section>
  );
}

function ActivitiesFacilities() {
  const activities = [
    {
      icon: <FaSwimmer size={48} color="#0F0F0F" />,
      title: "Swimming",
      description: "Safe swimming areas with lifeguards on duty",
    },
    {
      icon: <FaFish size={48} color="#0F0F0F" />,
      title: "Fishing",
      description: "Great spots for fishing enthusiasts",
    },
    {
      icon: <FaCamera size={48} color="#0F0F0F" />,
      title: "Photography",
      description: "Capture beautiful moments around the area",
    },
    {
      icon: <LiaRestroomSolid size={48} color="#0F0F0F" />,
      title: "Restrooms",
      description: "Clean facilities throughout the area",
    },
    {
      icon: <GiForkKnifeSpoon size={48} color="#0F0F0F" />,
      title: "Food Stalls",
      description: "Local cuisine and refreshments",
    },
    {
      icon: <FaParking size={48} color="#0F0F0F" />,
      title: "Ample Parking",
      description: "Secure parking spaces available",
    },
  ];

  return (
    <section className="facilities-section">
      <h2 className="section-title">Activities & Facilities</h2>

      <div className="facilities-container">
        {activities.map((activity, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon">{activity.icon}</div>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Spotlight() {
  const cardsData = [
    {
      imgSrc: "./assets/images/spotlight/ExoticJourneyThroughMangroves.png",
      alt: "Mangrove Forest",
      title: "Exotic Journey Through Mangroves",
      desc: "To get to the beach, visitors must take a fishing boat along the river for 1 km through a beautiful mangrove forest.",
    },

    {
      imgSrc: "./assets/images/spotlight/SidaonBay.png",
      alt: "Sidaon Bay",
      title: "Sidaon Bay",
      desc: "Bay is a great place to go fishing. You can catch fish and other animals that live in the sea there.",
    },
    {
      imgSrc: "./assets/images/gallery/gallery6.jpeg",
      alt: "White Sand Beach",
      title: "White Sand & Clear View",
      desc: "This beach is known for its long white sand and clear sea view.",
    },

    {
      imgSrc: "./assets/images/spotlight/NaturalWaveBarrier.png",
      alt: "Natural Barrier",
      title: "Natural Wave Barrier",
      desc: 'This raised land becomes a "natural fortress" that keeps the waves from hitting directly.',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardContainerRef = useRef(null);

  // Swipe handling state
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Scroll to current card when currentIndex changes
  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".card");
    if (cards.length === 0) return;

    const card = cards[0];
    const cardStyle = window.getComputedStyle(card);
    const cardWidth =
      card.offsetWidth + parseInt(cardStyle.marginRight || "0", 10);

    container.scrollTo({
      left: currentIndex * cardWidth,
      behavior: "smooth",
    });
  }, [currentIndex]);

  // Handlers for buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndXRef.current = e.changedTouches[0].screenX;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  const formatNumber = (num) => (num < 9 ? `0${num + 1}` : num + 1);

  return (
    <section className="s-spotlight">
      <h2 className="section-title">Spotlight</h2>

      {/* Text */}
      <div className="title-left">
        <div className="wrap-spotlight">
          <div className="container-spotlight">
            <h5 className="subtitle-section">SPOTLIGHT</h5>
            <h2 className="title-section">
              What makes Cirewang Beach special and attractive?
            </h2>
            <p>
              Discover the hidden charm of Cirewang Beach where you’ll journey
              through lush mangroves, relax on soft white sands, and witness
              nature’s own wave barrier protecting a tranquil bay perfect for
              fishing and serenity.
            </p>

            <a href="#" className="btn-outline">
              Explore Indonesia's Hallmark
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Cards with right edge overflow */}
          <div
            className="card-container-wrapper"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="card-container"
              id="cardContainer"
              ref={cardContainerRef}
            >
              {cardsData.map(({ imgSrc, alt, title, desc }, index) => (
                <div className="card" key={index}>
                  <a href="#" className="card-img">
                    <img src={imgSrc} alt={alt} />
                    <div className="card-img-body">
                      <h4>{title}</h4>
                      <span>{desc}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls content */}
        <div className="wrap-controll-status">
          <div className="carousel-controls">
            <button
              className="carousel-control"
              id="prevCard"
              onClick={handlePrev}
              aria-label="Previous card"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="carousel-control"
              id="nextCard"
              onClick={handleNext}
              aria-label="Next card"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="carousel-status" id="carouselStatus">
            <span>{formatNumber(currentIndex)}</span> /{" "}
            <span>
              {cardsData.length < 10
                ? `0${cardsData.length}`
                : cardsData.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What is the best time to visit Cirewang Beach?",
      answer:
        "The best time to visit Cirewang Beach is during the dry season, generally from May to September. During these months, the weather is typically sunny and ideal for beach activities like swimming, relaxing on the sand, and enjoying the boat ride through the mangrove forest.",
    },
    {
      question: "How do I get to Cirewang Beach?",
      answer:
        "Cirewang Beach is located in Pangarengan, Legonkulon, Pamanukan, Subang Regency, West Java. To reach the beach, visitors first drive to the designated parking area. From there, you will take a short boat ride (approximately 1 km) through a lush mangrove forest to arrive at the beach itself. This boat ride is a unique part of the Cirewang Beach experience.",
    },
    {
      question: "Are there any facilities available at Cirewang Beach?",
      answer:
        "Yes, Cirewang Beach offers several facilities to ensure a comfortable visit. These include an adequate parking area, food stalls (warung makan) selling local food and drinks, clean toilets/restrooms, a prayer room (musholla), and comfortable gazebos for relaxing. Tour boats are also available for the mangrove journey.",
    },
    {
      question: "Is swimming safe at Cirewang Beach?",
      answer:
        "Yes, Cirewang Beach is known for its relatively calm waters due to the natural barrier formed by the 'embossed land,' making it generally safe for swimming. However, it's always advisable for visitors, especially those with children, to exercise caution and supervise their swimming activities.",
    },
    {
      question: "What unique activities can I do at Cirewang Beach?",
      answer:
        "Beyond swimming and relaxing, Cirewang Beach offers unique experiences. You can enjoy playing on the more than 1 km stretch of white sand, take a scenic boat ride through the dense mangrove forest, or try fishing at Teluk Sidaon, which is known for its abundant marine life.",
    },
    {
      question: "What are the entrance fees and parking costs?",
      answer:
        "The entrance fee to Cirewang Beach is typically IDR 15,000 per person. For private vehicles, the parking fee is IDR 3,000 for motorcycles and IDR 5,000 for cars.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section main-content-section">
      <div className="container">
        <h2 className="section-title">A Few Common Questions</h2>
        <div className="faq-accordion">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="accordion-item" key={index}>
                <button
                  className="accordion-header"
                  aria-expanded={isOpen}
                  aria-controls={`faq${index + 1}-content`}
                  onClick={() => toggleIndex(index)}
                >
                  {question}
                  <span className="accordion-icon"></span>
                </button>
                <div
                  id={`faq${index + 1}-content`}
                  className="accordion-content"
                  aria-hidden={!isOpen}
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                    padding: isOpen ? "15px 25px 25px" : "0 25px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, padding 0.3s ease",
                  }}
                >
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Your question has been sent!");

    setFormData({ email: "", question: "" });
  };

  return (
    <section className="contact-form-section main-content-section">
      <div className="container">
        <h2 className="section-title">Have a Question? Ask Us!</h2>
        <form className="question-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Your Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="question">Your Question:</label>
            <textarea
              id="question"
              name="question"
              rows="6"
              placeholder="Type your question here..."
              required
              value={formData.question}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="wrap-btn-question">
            <button type="submit" className="submit-button">
              Send Question
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

const ArticleSection = () => {
  const articles = [
    {
      imgSrc: "/assets/images/article/gambar1.jpg",
      alt: "Cirewang Beach White Sand and Mangroves",
      slug: "cirewang-beach-subang-guide",
      title: "White Sands, Mangroves & Complete Facilities!",
      desc: "Discover Cirewang Beach, Subang's natural gem with stunning white sands, unique mangrove journeys, and full vacation facilities.",
      date: "June 5, 2023",
      readTime: "5 min read",
    },
    {
      imgSrc: "/assets/images/article/gambar2.jpg",
      alt: "Embossed Land and Mangrove Forest Adventure",
      slug: "cirewang-beach-unique-adventure",
      title: "Unique Adventure: Embossed Land & Mangroves",
      desc: "Uncover the magic of Cirewang Beach, a unique destination born from embossed land, offering an unforgettable boat journey through lush mangrove forests.",
      date: "August 24, 2023",
      readTime: "7 min read",
    },
    {
      imgSrc: "/assets/images/article/gambar3.jpg",
      alt: "Cirewang Beach Embossed Land Charm",
      slug: "cirewang-beach-subang-charm",
      title: "Cirewang Beach: Embossed Land Charm & Guide",
      desc: "Explore Cirewang Beach's unique embossed land, complete facilities, and tranquil atmosphere, making it a perfect vacation guide for your Subang escape.",
      date: "August 24, 2023",
      readTime: "6 min read",
    },
    {
      imgSrc: "/assets/images/article/gambar4.jpg",
      alt: "Cirewang Beach Educational Activities",
      slug: "cirewang-beach-subang-educational-guide",
      title: "Cirewang Beach Guide: Land, Education & Charm",
      desc: "Your complete guide to Cirewang Beach, featuring its unique embossed land, educational fish and shrimp farm tours, and the charm of its soft black sand.",
      date: "September 24, 2023",
      readTime: "8 min read",
    },
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  // Fungsi untuk mengecek posisi scroll
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setShowPrevButton(scrollLeft > 0);

      setShowNextButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
      checkScrollPosition();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (carousel) {
        carousel.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.offsetWidth || 0;
      const gap = 30;
      carouselRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const nextCard = () => {
    if (currentIndex < articles.length - cardsToShow) {
      scrollToCard(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };
  return (
    <section className="article-section ">
      <div className="section-header">
        <h2 className="section-title-article">
          Top articles about Pantai Cirewang
        </h2>
        <p className="section-subtitle-article">
          Discover our most read articles about Finland, carefully selected to
          inspire your next adventure. From hidden gems and cultural insights to
          practical travel tips, these stories will help you explore this Nordic
          country of ours like a local.
        </p>
      </div>

      <div className="relative">
        <div
          ref={carouselRef}
          className="articles-container flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {articles.map((article, index) => (
            <article
              className="mac-card flex-shrink-0 mx-2 snap-start"
              key={index}
              style={{
                width: `calc((100% - ${
                  (cardsToShow - 1) * 20
                }px) / ${cardsToShow})`,
              }}
            >
              <div className="card-image-container">
                <img
                  src={article.imgSrc}
                  alt={article.alt}
                  className="card-image"
                />
                <div className="card-date">{article.date}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{article.title}</h3>
                <p className="card-desc">{article.desc}</p>
                <div className="card-footer">
                  <span className="read-time">{article.readTime}</span>
                  <Link to={`/article/${article.slug}`} className="read-more">
                    Read More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation buttons */}
        {articles.length > cardsToShow && (
          <>
            {showPrevButton && (
              <button
                className={`carousel-control-article prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed invisible"
                    : ""
                }`}
                onClick={prevCard}
                aria-label="Previous card"
                disabled={currentIndex === 0}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}
            {showNextButton && (
              <button
                className={`carousel-control-article next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors ${
                  currentIndex >= articles.length - cardsToShow
                    ? "opacity-50 cursor-not-allowed invisible"
                    : ""
                }`}
                onClick={nextCard}
                aria-label="Next card"
                disabled={currentIndex >= articles.length - cardsToShow}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
