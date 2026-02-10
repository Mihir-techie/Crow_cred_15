import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Zap, Code, Trophy } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "CrowdCred Hack 2026",
    type: "Hackathon",
    icon: Code,
    date: "Mar 15-17, 2026",
    location: "Virtual",
    participants: 500,
    color: "bg-gradient-primary",
    status: "Open",
  },
  {
    id: 2,
    title: "AI Workshop: Build Your First Agent",
    type: "Workshop",
    icon: Zap,
    date: "Feb 28, 2026",
    location: "Virtual",
    participants: 120,
    color: "bg-gradient-warm",
    status: "Open",
  },
  {
    id: 3,
    title: "System Design Championship",
    type: "Competition",
    icon: Trophy,
    date: "Apr 5, 2026",
    location: "Bangalore",
    participants: 300,
    color: "bg-gradient-primary",
    status: "Coming Soon",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-3xl font-bold mb-2">Events & Hackathons</h1>
          <p className="text-muted-foreground">Compete, learn, and connect with builders worldwide.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className={`h-28 ${event.color} relative flex items-center justify-center`}>
                <event.icon className="w-12 h-12 text-primary-foreground/30" />
                <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full bg-background/80 text-foreground">
                  {event.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {event.date}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</div>
                  <div className="flex items-center gap-2"><Users className="w-4 h-4" /> {event.participants} participants</div>
                </div>
                <Button
                  variant={event.status === "Open" ? "hero" : "glass"}
                  className="w-full"
                  size="sm"
                  disabled={event.status !== "Open"}
                >
                  {event.status === "Open" ? (
                    <>Register Now <ArrowRight className="w-4 h-4 ml-1" /></>
                  ) : (
                    event.status
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
