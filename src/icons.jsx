import React from 'react';

const glyphs = {
  Activity: <><path d="M3 12h4l3-8 4 16 3-8h4"/></>,
  ArrowDownRight: <><path d="M7 7l10 10M17 7v10H7"/></>,
  ArrowUpRight: <><path d="M7 17 17 7M7 7h10v10"/></>,
  Bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  Boxes: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="M3 8v9l9 5 9-5V8M12 13v9"/><path d="m7.5 5.5 9 5"/></>,
  CalendarDays: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/></>,
  Check: <path d="m5 12 4 4L19 6"/>,
  ChevronDown: <path d="m6 9 6 6 6-6"/>,
  ChevronRight: <path d="m9 18 6-6-6-6"/>,
  CircleHelp: <><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/></>,
  ClipboardList: <><rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4.5h6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1ZM9 11h6M9 15h6M9 19h3"/></>,
  Clock3: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  Gauge: <><path d="m12 14 4-4"/><path d="M20.2 15a9 9 0 1 0-16.4 0"/><path d="M5 19h14"/></>,
  LayoutDashboard: <><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/></>,
  LogOut: <><path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/></>,
  Menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  Plus: <path d="M12 5v14M5 12h14"/>,
  Search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  Settings2: <><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 16h4"/></>,
  ShieldCheck: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  ShoppingCart: <><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 3h2l3 12h12l3-9H5"/></>,
  Sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3ZM19 14l1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"/></>,
  Wrench: <><path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3 3.7-3.7Z"/></>,
  X: <path d="m18 6-12 12M6 6l12 12"/>,
};

function Icon({ name, size = 24, className, ...props }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>{glyphs[name]}</svg>;
}

export const Activity = props => <Icon name="Activity" {...props}/>;
export const ArrowDownRight = props => <Icon name="ArrowDownRight" {...props}/>;
export const ArrowUpRight = props => <Icon name="ArrowUpRight" {...props}/>;
export const Bell = props => <Icon name="Bell" {...props}/>;
export const Boxes = props => <Icon name="Boxes" {...props}/>;
export const CalendarDays = props => <Icon name="CalendarDays" {...props}/>;
export const Check = props => <Icon name="Check" {...props}/>;
export const ChevronDown = props => <Icon name="ChevronDown" {...props}/>;
export const ChevronRight = props => <Icon name="ChevronRight" {...props}/>;
export const CircleHelp = props => <Icon name="CircleHelp" {...props}/>;
export const ClipboardList = props => <Icon name="ClipboardList" {...props}/>;
export const Clock3 = props => <Icon name="Clock3" {...props}/>;
export const Gauge = props => <Icon name="Gauge" {...props}/>;
export const LayoutDashboard = props => <Icon name="LayoutDashboard" {...props}/>;
export const LogOut = props => <Icon name="LogOut" {...props}/>;
export const Menu = props => <Icon name="Menu" {...props}/>;
export const Plus = props => <Icon name="Plus" {...props}/>;
export const Search = props => <Icon name="Search" {...props}/>;
export const Settings2 = props => <Icon name="Settings2" {...props}/>;
export const ShieldCheck = props => <Icon name="ShieldCheck" {...props}/>;
export const ShoppingCart = props => <Icon name="ShoppingCart" {...props}/>;
export const Sparkles = props => <Icon name="Sparkles" {...props}/>;
export const Wrench = props => <Icon name="Wrench" {...props}/>;
export const X = props => <Icon name="X" {...props}/>;
