import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, Briefcase, Plus, ExternalLink } from "lucide-react";

const mockJobs = [
  { id: 1, title: "Senior Frontend Engineer", company: "TechNova", location: "Remote", salary: "$120K-$160K", type: "Full-time", posted: "2d ago", tags: ["React", "TypeScript"] },
  { id: 2, title: "ML Engineer", company: "DataForge AI", location: "Bangalore", salary: "$90K-$130K", type: "Full-time", posted: "1d ago", tags: ["Python", "PyTorch"] },
  { id: 3, title: "DevOps Lead", company: "CloudScale", location: "Remote", salary: "$110K-$150K", type: "Full-time", posted: "3d ago", tags: ["AWS", "Kubernetes"] },
  { id: 4, title: "Product Designer", company: "DesignLab", location: "San Francisco", salary: "$100K-$140K", type: "Full-time", posted: "5h ago", tags: ["Figma", "UX"] },
  { id: 5, title: "Backend Intern", company: "StartupXYZ", location: "Remote", salary: "$30/hr", type: "Internship", posted: "1d ago", tags: ["Node.js", "PostgreSQL"] },
];

const Jobs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold">Job Board</h1>
          <Button variant="warm" size="sm">
            <Plus className="w-4 h-4 mr-1" /> Post Job
          </Button>
        </motion.div>

        <div className="space-y-3">
          {mockJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-foreground">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {job.salary}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.posted}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{tag}</span>
                  ))}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{job.type}</span>
                </div>
              </div>
              <Button variant="hero" size="sm" className="shrink-0">
                Apply <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
