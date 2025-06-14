import { TabType } from '../App';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

interface NavItem {
  id: TabType;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: 'intro', label: 'Intro', icon: 'fas fa-heart' },
  { id: 'gallery', label: 'Her Gallery', icon: 'fas fa-images' },
  { id: 'memories', label: 'Our Memories', icon: 'fas fa-camera' },
  { id: 'letter', label: 'Love Letter', icon: 'fas fa-envelope-heart' },
  { id: 'timeline', label: 'Timeline', icon: 'fas fa-timeline' },
  { id: 'countdown', label: 'Countdown', icon: 'fas fa-birthday-cake' },
  { id: 'proposal', label: 'Proposal', icon: 'fas fa-ring' },
];

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === item.id
                  ? 'text-romantic-primary border-romantic'
                  : 'text-gray-600 hover:text-romantic-primary border-transparent hover:border-romantic'
              }`}
            >
              <i className={`${item.icon} mr-2`}></i>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
