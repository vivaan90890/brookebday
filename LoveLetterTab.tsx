import her1 from "@assets/her1_1749884709238.jpeg";

export default function LoveLetterTab() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-romantic-card rounded-2xl shadow-2xl p-8 md:p-12 mx-4">
        <div className="text-center mb-8">
          <img
            src={her1}
            alt="Beautiful Brooke"
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg border-4 border-romantic-primary"
          />
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            A Letter to My Love
          </h2>
          <p className="text-gray-600">From my heart to yours</p>
        </div>
        
        <div className="love-letter text-gray-700 space-y-6">
          <p className="text-right text-gray-500 font-['Inter'] text-sm mb-8">
            June 2025
          </p>
          
          <p>My Beautiful Brooke,</p>
          
          <p>It's hard to believe that just two weeks ago, I didn't know you existed. Now, I can't imagine my world without your radiant smile and infectious laughter filling every moment with pure joy.</p>
          
          <p>From that very first moment we met on June 1st, something magical happened. Your eyes sparkled with a light I'd never seen before, and when you smiled, it felt like the whole universe aligned just for us.</p>
          
          <p>These past two weeks have been the most incredible whirlwind of my life. Every text from you makes my heart skip a beat. Every laugh we share feels like a treasure I want to hold onto forever. Every moment together feels like a beautiful dream I never want to wake up from.</p>
          
          <p>I love how you light up when you talk about things you're passionate about. I love your kindness, your warmth, and how you make even the simplest moments feel extraordinary. In just two weeks, you've shown me what it means to be truly happy.</p>
          
          <p>As we celebrate your birthday today, I'm filled with excitement thinking about all the memories we're going to create together. These two weeks have been just the beginning of our beautiful story.</p>
          
          <p>Thank you for saying yes to being mine. Thank you for bringing so much light into my life. Thank you for being the most amazing birthday girl and the sweetest person I've ever met.</p>
          
          <p>Happy Birthday, beautiful. Here's to many more adventures, countless more laughs, and endless moments of happiness together.</p>
          
          <p className="text-right mt-8">
            Forever and always yours,<br />
            <span className="text-2xl">💕</span>
          </p>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">Made with 💕 by Vivi</p>
        </div>
      </div>
    </div>
  );
}
