import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, BookOpen, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const mockCourses = [
  {
    id: 1,
    title: "Full-Stack Web Dev Bootcamp",
    instructor: "Aarav Sharma",
    price: 49.99,
    rating: 4.8,
    students: 1200,
    duration: "24h",
    tag: "Bestseller",
    color: "bg-gradient-primary",
  },
  {
    id: 2,
    title: "AI & Machine Learning Fundamentals",
    instructor: "Priya Patel",
    price: 39.99,
    rating: 4.7,
    students: 890,
    duration: "18h",
    tag: "New",
    color: "bg-gradient-warm",
  },
  {
    id: 3,
    title: "System Design Masterclass",
    instructor: "Ravi Kumar",
    price: 59.99,
    rating: 4.9,
    students: 650,
    duration: "20h",
    tag: "Top Rated",
    color: "bg-gradient-primary",
  },
  {
    id: 4,
    title: "DevOps & Cloud Engineering",
    instructor: "Neha Gupta",
    price: 44.99,
    rating: 4.6,
    students: 430,
    duration: "16h",
    tag: "",
    color: "bg-gradient-warm",
  },
];

const Courses = () => {
  const [tab, setTab] = useState<"browse" | "my">("browse");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold">Courses</h1>
          <Button variant="warm" size="sm">
            <Plus className="w-4 h-4 mr-1" /> Create Course
          </Button>
        </motion.div>

        <div className="flex gap-2 mb-8">
          <Button variant={tab === "browse" ? "default" : "glass"} size="sm" onClick={() => setTab("browse")}>
            <BookOpen className="w-4 h-4 mr-1" /> Browse
          </Button>
          <Button variant={tab === "my" ? "default" : "glass"} size="sm" onClick={() => setTab("my")}>
            My Courses
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl overflow-hidden group"
            >
              <div className={`h-32 ${course.color} relative`}>
                {course.tag && (
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full bg-background/80 text-foreground">
                    {course.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-foreground mb-1 line-clamp-2">{course.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{course.instructor}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-secondary" /> {course.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-foreground">${course.price}</span>
                  <Button variant="hero" size="sm" className="text-xs">
                    <ShoppingCart className="w-3 h-3 mr-1" /> Enroll
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
