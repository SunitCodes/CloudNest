import { CreditCard, Files, LayoutDashboard, Receipt, Upload } from "lucide-react";

export const features = [
  {
    iconName: "Shield",
    iconColor: "text-green-500",
    title: "Secure Storage",
    description: "Your files are encrypted and stored securely in our cloud infrastructure.",
  },
  {
    iconName: "ArrowUpCircle",
    iconColor: "text-purple-500",
    title: "Easy File Upload",
    description: "Quickly upload your files with our intuitive drag-and-drop interface.",
  },
  {
    iconName: "Share2",
    iconColor: "text-yellow-500",
    title: "Simple Sharing",
    description: "Share files with anyone using secure links that you control.",
  },
  {
    iconName: "CreditCard",
    iconColor: "text-orange-500",
    title: "Flexible Credits",
    description: "Pay only for what you use with our credit based system.",
  },
  {
    iconName: "Clock",
    iconColor: "text-blue-500",
    title: "Transaction History",
    description: "Keep track of all your credit purchases and usage.",
  },
  {
    iconName: "FileText",
    iconColor: "text-red-500",
    title: "File Management",
    description: "Organize, preview and manage your files from any device.",
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "5 file uploads",
      "Basic file sharing",
      "7-day file retention",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "500",
    description: "For individuals with larger needs",
    features: [
      "500 file uploads",
      "Advanced file sharing",
      "30-day file retention",
      "Priority email support",
      "File analytics",
    ],
    cta: "Go Premium",
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "2500",
    description: "For teams and businesses",
    features: [
      "5000 file uploads",
      "Team sharing capabilities",
      "Unlimited file retention",
      "24/7 priority support",
      "Advanced analytics",
      "API access",
    ],
    cta: "Go Ultimate",
    highlighted: false,
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "CreativeMinds Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "CloudShare has transformed how our team collaborates on creative assets. The secure sharing and ease of use are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Freelance Designer",
    company: "Self-employed",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "As a freelancer, I need to share large design files with clients securely. CloudShare's simple sharing and encryption make it my go-to solution.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Project Manager",
    company: "TechSolutions Ltd.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Managing project files across multiple teams used to be a nightmare until we found CloudShare.",
    rating: 4,
  },
];


export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "02",
    label: "Upload",
    icon: Upload,
    path: "/upload",
  },
  {
    id: "03",
    label: "My Files",
    icon: Files,
    path: "/myfiles",
  },
  {
    id: "04",
    label: "Subscription",
    icon: CreditCard,
    path: "/subscription",
  },
  {
    id: "05",
    label: "Transactions",
    icon: Receipt,
    path: "/transactions",
  },
];

