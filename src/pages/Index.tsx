import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  Send,
  Heart,
  Code,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import BlogPreview from "@/components/BlogPreview";
import FounderPreview from "@/components/FounderPreview";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="mt-16">
        <Hero />
        <About />
        <Timeline />
        <FounderPreview />
        {/* <BlogPreview /> */}
        {/* <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-16">
          <Contact />
          <Newsletter />
        </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
