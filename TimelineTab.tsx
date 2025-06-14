const timelineEvents = [
  {
    date: "June 1, 2025",
    title: "First Met",
    description: "That magical moment when our eyes first met and time stood still. I knew you were special from that very first smile.",
    icon: "fas fa-heart",
    color: "bg-romantic-primary",
    side: "left"
  },
  {
    date: "June 3, 2025",
    title: "First Date",
    description: "A perfect evening filled with nervous laughter, deep conversations, and the beginning of something beautiful.",
    icon: "fas fa-calendar",
    color: "bg-romantic-secondary",
    side: "right"
  },
  {
    date: "June 7, 2025",
    title: "First Kiss",
    description: "Under the stars, the world disappeared and it was just us. The moment I knew I was falling in love with you.",
    icon: "fas fa-kiss",
    color: "bg-pink-400",
    side: "left"
  },
  {
    date: "June 10, 2025",
    title: "Became Official",
    description: "The day we both knew this was forever. No more wondering, no more waiting - just pure, beautiful certainty.",
    icon: "fas fa-heart-circle-check",
    color: "bg-purple-400",
    side: "right"
  },
  {
    date: "June 21, 2025",
    title: "Today - Your Birthday!",
    description: "The day we celebrate the most amazing person in the world. Here's to many more birthdays together, my love!",
    icon: "fas fa-birthday-cake",
    color: "bg-gradient-to-r from-pink-500 to-purple-500",
    side: "right",
    special: true
  }
];

import { useState } from 'react';

export default function TimelineTab() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
          Our Love Story Timeline
        </h2>
        <p className="text-xl text-white/80">Every milestone of our journey together</p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 to-purple-500 h-full"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-center">
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${event.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center ${event.special ? 'animate-pulse-heart' : ''}`}>
                <i className={`${event.icon} text-white text-xs`}></i>
              </div>
              <div className={`ml-16 md:ml-0 ${event.side === 'left' ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8 md:self-start md:translate-x-full'}`}>
                <div className={`${event.special ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'bg-romantic-card'} rounded-xl p-6 shadow-lg`}>
                  <h3 className={`font-['Playfair_Display'] text-xl font-bold ${event.special ? 'text-white' : 'text-gray-800'} mb-2`}>
                    {event.title}
                  </h3>
                  <p className={`${event.special ? 'text-white/90' : 'text-gray-600'} mb-2`}>{event.date}</p>
                  <p className={`${event.special ? 'text-white/95' : 'text-gray-700'}`}>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">Made with 💕 by Vivi</p>
        </div>
      </div>
    </div>
  );
}
