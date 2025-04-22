import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-900 bg-white dark:bg-gray-950 dark:text-white">
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-8">
        <motion.img
          src="/headshot.jpg"
          alt="Headshot of Raj Nathwani"
          className="w-40 h-40 rounded-full shadow-xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        />
        <h1 className="text-4xl font-bold mb-2">Raj Nathwani</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Data Scientist | Predictive Analytics | Healthcare AI
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="/RajNathwaniResume.pdf" download>
              📄 Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/raj-nathwani" target="_blank">
              LinkedIn
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I&apos;m a Data Scientist passionate about turning raw data into impactful insights. With experience across
          healthcare and retail, I specialize in machine learning, time-series forecasting, NLP, and deploying scalable
          AI solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">FlickFinder</h3>
              <p>
                Python-based movie recommender system using collaborative and content-based filtering. Boosted engagement by
                10% and accuracy by 15%.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">Conagra Hackathon</h3>
              <p>
                Unlocked $67M market potential by analyzing consumer trends in meat substitutes and recommending product
                expansion strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">ZeOmega (Data Science Intern)</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Automated 60% of approvals using an AI-driven prior authorization model</li>
                <li>Improved early intervention by 28% using NLP &amp; LSTMs</li>
                <li>Integrated real-time ML into Power BI dashboards</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">LTIMindtree (Senior Analyst)</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Improved forecasting accuracy by 27% using SARIMA &amp; LSTM</li>
                <li>Optimized inventory and reduced costs by 18%</li>
                <li>Built interactive Tableau dashboards for business insights</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: <a className="underline" href="mailto:raj.nathwani@utdallas.edu">raj.nathwani@utdallas.edu</a></p>
        <p>LinkedIn: <a className="underline" href="https://www.linkedin.com/in/raj-nathwani" target="_blank">raj-nathwani</a></p>
      </section>
    </div>
  );
}
