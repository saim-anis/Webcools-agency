import React from "react";
const testimonials = [
  {
    title: "Transformed our vision into reality",
    text: "WebCools built our e-commerce platform from scratch. The UI/UX is incredibly smooth, and our page load speed improved by 40%. Their team understands modern web standards perfectly.",
    name: "Ahsan Khan",
    role: "Founder at Trendify",
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    title: "Exceptional clean code and support",
    text: "Working with WebCools was a breeze. They delivered our SaaS dashboard ahead of schedule with clean, scalable React code. Post-launch support has been outstanding too.",
    name: "Sarah Jenkins",
    role: "Product Manager at CloudScale",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    title: "Highly professional web agency",
    text: "We needed a complete rebranding and a high-converting landing page. WebCools delivered exactly what we wanted. The responsiveness on mobile devices is top-notch.",
    name: "Zainab Malik",
    role: "Marketing Director at Apex Digital",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    title: "Blazing fast delivery and performance",
    text: "The performance optimization they did for our corporate portal is mind-blowing. SEO scores went straight to 95+. If you want quality development, WebCools is the go-to agency.",
    name: "Michael Chang",
    role: "CTO at FinTech Solutions",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    title: "Great communication and execution",
    text: "What I loved most about WebCools was their communication. They kept us updated throughout the sprint cycles and converted our complex Figma designs into a pixel-perfect reality.",
    name: "Daniyal Ahmed",
    role: "Co-Founder at StayLocal",
    image: "https://i.pravatar.cc/100?img=33",
  },
];

const Card = ({ item }) => (
 
     
  <div className="max-w-95 bg-[#0a012d]  rounded-xl p-6">
    <h3 className="text-white text-2xl font-bold mb-4">
      {item.title}
    </h3>

    <p className="text-slate-400 leading-relaxed mb-6">
      "{item.text}"
    </p>

    <div className="flex items-center gap-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full"
      />

      <div>
        <h4 className="text-white font-semibold">
          {item.name}
        </h4>

        <p className="text-slate-400 text-sm">
          {item.role}
        </p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section id="TestimonialMarquee" className="bg-[#0a012d] py-20 overflow-hidden ">
      <h1 className="text-center text-5xl font-bold mx-9 z-50 mb-4 ">"What They <span className="text-[#fd6f00] font-2xl">Say </span> About<span className="text-[#fd6f00] font-2xl"> us?</span></h1> 
      <style>
        {`
          @keyframes scrollLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes scrollRight {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          .marquee-left {
            animation: scrollLeft 30s linear infinite;
            width: max-content;
          }

          .marquee-right {
            animation: scrollRight 30s linear infinite;
            width: max-content;
          }

          .marquee-left:hover,
          .marquee-right:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="space-y-6">

        {/* Top Row */}
        <div className="flex gap-6 marquee-left">
          {[...testimonials, ...testimonials].map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex gap-6 marquee-right">
          {[...testimonials, ...testimonials].map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}