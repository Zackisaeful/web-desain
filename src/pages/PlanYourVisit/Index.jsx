import { useEffect, useRef, useState } from "react";
import "./PlanYourVisit.css";
import "./Contact.css";

const PlanYourVisit = () => {
  return (
    <>
      <section className="plan-your-visit">
        <div className="wrap-plan">
          <h1>
            Embark on a unique adventure to Cirewang Beach: A serene escape in
            Subang.
          </h1>

          <p>
            Here are a few things to keep in mind for your journey to this
            hidden gem.
          </p>

          <ul>
            <li>
              Cirewang Beach is located in a more secluded area of Subang. While
              the main roads leading to the area are generally good, the final
              stretch to the parking area might involve smaller village roads.
              Take your time and enjoy the local scenery!
            </li>
            <li>
              A distinctive part of the Cirewang Beach experience is the short
              boat ride through a lush mangrove forest. This is the only way to
              reach the beach itself, and it adds an exciting natural element to
              your trip. Be prepared for this unique aquatic journey!
            </li>
            <li>
              As a local destination, Cirewang Beach offers essential facilities
              like food stalls, restrooms, and gazebos. While modern amenities
              are available, it retains a charming, natural ambiance. Remember
              to keep the beach clean to preserve its beauty.
            </li>
          </ul>

          <hr />

          <div className="map-wrapper">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.7698303543036!2d107.8493557!3d-6.1911136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e695a07b155b0c5%3A0x208e669dbc9cc563!2sPantai%20Cirewang!5e0!3m2!1sid!2sid!4v1716746000000!5m2!1sid!2sid"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <TravelTimeline />
      <HelpfulInformation />
      <Form />
    </>
  );
};

function HelpfulInformation() {
  const cardData = [
    {
      name: "John Terry",
      date: "22 March 2025",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Alice Smith",
      date: "10 April 2025",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Bob Johnson",
      date: "5 May 2025",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Clara Doe",
      date: "19 June 2025",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Derek Lin",
      date: "2 July 2025",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Eve Howard",
      date: "25 August 2025",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      name: "Bob Johnson",
      date: "5 May 2025",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const maxLength = 200;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="helpful-information">
      <h1 className="section-title">Helpful information for your next trip</h1>
      <div className="information-container-card">
        {cardData.map((card, index) => {
          const isExpanded = expandedIndex === index;
          const isLongContent = card.content.length > maxLength;
          const shouldTruncate = isMobile && isLongContent;

          const displayedContent =
            isExpanded || !shouldTruncate
              ? card.content
              : card.content.slice(0, maxLength) + "...";

          return (
            <div className="information-card" key={index}>
              <div className="name-date">
                <span>{card.name}</span>
                <span>{card.date}</span>
              </div>

              <div className={`content ${isExpanded ? "expanded" : ""}`}>
                {displayedContent}
              </div>

              {shouldTruncate && (
                <button
                  className="view-more-btn"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? "View Less" : "View More"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

const timelineData = [
  {
    year: "Step 1", 
    event: "Plan Your Departure & Route",
    side: "left",
    description:
      "Decide on your visit day, ideally during the dry season (May-September) for best weather. Plan your route to Subang, then specifically towards Pangarengan, Legonkulon, keeping in mind the final stretch to the beach area involves local village roads.",
  },
  {
    year: "Step 2",
    event: "Prepare Your Ride & Essentials",
    side: "right",
    description:
      "Ensure your vehicle (motorcycle or car) is in good condition. Don't forget essentials like comfortable footwear, swimwear, sunscreen, a hat, and enough cash for entrance fees and local food stalls.",
  },
  {
    year: "Step 3",
    event: "The Mangrove Boat Journey",
    side: "left",
    description:
      "Upon arrival at the designated parking area, get ready for Cirewang's unique experience: a short (approx. 1 km) boat ride through the lush mangrove forest. This scenic transfer is the only way to reach the main beach.",
  },
  {
    year: "Step 4",
    event: "Enjoy Cirewang Beach & Its Charms",
    side: "right",
    description:
      "Once you arrive, explore the expansive white sand beach. Enjoy swimming in the calm waters, try fishing at Teluk Sidaon, relax in gazebos, or capture stunning photos. Food stalls and restrooms are available for your convenience.",
  },
];

function TravelTimeline() {
  const refs = useRef([]);
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    refs.current = refs.current.slice(0, timelineData.length);

    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      const container = containerRef.current;
      const line = lineRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // console.log(windowHeight);

      // Progress mulai saat container mencapai 50% layar (tengah)
      const scrollPercent = Math.min(
        1,
        Math.max(
          0,
          (scrollPosition - containerTop + windowHeight * -0.5) /
            containerHeight
        )
      );

      line.style.height = `${scrollPercent * 100}%`;

      // Item muncul saat melewati 60% layar (opsional)
      const newVisibleItems = [];
      refs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < windowHeight * 0.6) {
            newVisibleItems.push(index);
          }
        }
      });
      setVisibleItems(newVisibleItems);
    };

    // Set initial line height
    setLineHeight(containerRef.current?.offsetHeight || 0);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container" ref={containerRef}>
      <h2 className="section-title">Motorcycle Journey to Cirewang Beach</h2>
      <div className="intro-text">
        <p>
          Embarking on a motorcycle journey to Cirewang Beach offers a unique adventure,
          unveiling the natural beauty of Subang along the way.
        </p>
        <p>
          While the main roads leading to the Cirewang area are generally well-maintained,
          the final stretch towards the beach's parking and boat ride point might involve
          some narrower or less developed village roads. These paths add to the charm of
          the journey, leading you through local landscapes before the exciting
          mangrove boat transfer. Always allocate extra time to fully enjoy the ride and navigate
          these scenic, winding routes safely.
        </p>
      </div>

      <div className="timeline-wrapper">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.side} ${
              visibleItems.includes(index) ? "visible" : ""
            }`}
            ref={(el) => (refs.current[index] = el)}
            data-index={index}
            style={{
              transitionDelay: `${index * 0.15}s`,
            }}
          >
            <div className="timeline-content">
              <div className="step-number">Step {item.year}</div>
              <div className="event">{item.event}</div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        ))}

        <div className="timeline-line">
          <div className="timeline-progress" ref={lineRef}></div>
        </div>

        {/* Timeline dots */}
        {timelineData.map((_, index) => (
          <div
            key={`dot-${index}`}
            className={`timeline-dot ${
              visibleItems.includes(index) ? "active" : ""
            }`}
            style={{
              top: `${(index / (timelineData.length - 1)) * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        .timeline-wrapper {
          position: relative;
          margin-top: 1rem;
          min-height: ${lineHeight}px;
        }
      
      `}</style>
    </div>
  );
}

function Form() {
  return (
    <section className="article-section ">
      <div className="section-header">
        <h2 className="section-title-article">
          Have you ever visited Cirewang Beach?
        </h2>
        <p className="section-subtitle-article">
          We would love to hear about your travels to Cirewang Beach! Share your
          tips and tricks with us — we're sure they'll be a huge help to other
          tourists visiting the beautiful location. We truly appreciate all the
          messages left.
        </p>
      </div>

      <div className="relative">
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      datetime: "",
      message: "",
    });
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="email"
          name="name"
          placeholder="John Doe"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

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
        <label htmlFor="datetime">Date and Time:</label>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          required
          value={formData.datetime}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Type your message here..."
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="wrap-btn-question">
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default PlanYourVisit;
