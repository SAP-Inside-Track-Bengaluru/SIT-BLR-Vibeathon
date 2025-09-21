import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Gavel, ShieldCheck } from "lucide-react";

const Introduction = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [activeTab, setActiveTab] = useState<'guidelines' | 'judging'>('guidelines');

  const guidelines = [
    "The event is open to college students from all years and streams. No prior hackathon experience is required just enthusiasm to learn and build!",
    "Students who have already registered for SIT may also register for Vibeathon; however, they will be unable to attend the SIT sessions, as both events occur simultaneously.",
    "One person can register on behalf of the entire team by selecting the team size and providing each member’s GitHub username (mandatory for GitHub Copilot access).",
    "All participants must register at the desk and collect their name tags.",
    "Each team can have up to 4 members. Solo participants are also allowed.",
    "Participants are allowed to be part of only one team",
    "Respect the Code of Conduct – be professional, collaborative, and inclusive.",
    "Duration: 2 main hacking sprints (09:30–12:30 & 12:45–2:45).",
    "Only code developed during the event is allowed.",
    "AI and open-source tools are allowed.",
    "Submissions must include: GitHub/Repo link, Project description, 2-min demo video (screen recording or live demo-ready).",
    "Deadline: 3:30 PM (Code Freeze).",
    "Late submissions will not be accepted.",
    "Wi-Fi credentials will be provided at registration.",
    "Charging points available across the venue.",
    "Volunteers will wear different colour tags and T-Shirts – approach them for help.",
    // Rules moved here
    "Be respectful of all participants, mentors, and organizers.",
    "No plagiarism, offensive content, or disruptive behaviour.",
    "Violations may result in disqualification."
  ];

  const judgingCriteriaHeading = "Projects will be scored on the following:";
  const judgingCriteria = [
    "<strong>Innovation & Creativity</strong> – Originality of the idea.",
    "<strong>Technical Implementation</strong> – Functionality, code quality, and working demo.",
    "<strong>Business Impact</strong> – Relevance to community themes, real-world use cases, and productive functional applications.",
    "<strong>Sustainability & Social Impact</strong> – Contribution toward positive change.",
    "<strong>Presentation & Demo</strong> – Clarity, teamwork, and ability to explain the solution."
  ];

  const participantGuidelinesHeading = "Guidelines for Participants";
  const participantGuidelines = [
    "<strong>Mentor Support:</strong> Mentors will circulate during both sprints to guide you - not to build. Seek their help for ideation, architecture, and debugging.",
    "<strong>Focus on Productive Applications:</strong> Keep your solution practical and aim to deliver a functional, productive application with clear real-world relevance.",
    "<strong>Demo & Q&A:</strong> Selected teams will have 3–5 minutes to present their demo, followed by a short Q&A.",
    "<strong>Scoring & Results:</strong> Judges will use the provided score sheets and submit them to the lead judge. Winners will be decided based on cumulative scores and deliberations."
  ];

  return (
    <section className="relative text-center px-4 max-w-5xl mx-auto mb-20 pt-20">
      {/* Subtle Animated Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Title styled like TracksSection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <div className="relative inline-block mb-6">
          <motion.div
            className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 text-blue-500/80"
            animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              SAP Inside Track Vibeathon
            </span>
          </h2>
          <motion.div
            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 text-blue-400/80"
            animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
        </div>
        <motion.p
          className="text-xl md:text-2xl text-blue-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join us for an exciting event filled with innovation, collaboration, and amazing prizes. Be part of the journey to build the future!
        </motion.p>
      </motion.div>

      {/* Single Creative Event Card */}
      <motion.div
        className="mx-auto mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg p-6 border-2 border-transparent bg-clip-padding backdrop-blur-md relative"
          style={{ borderImage: "linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%) 1" }}
        >
          <div className="flex items-center gap-3 mb-2 justify-center">
            <span className="text-xl font-bold text-blue-600">
            SIT Vibeathon - College Student Edition
            </span>
          </div>
          <p className="text-blue-900/80 dark:text-blue-100 text-base">
          Join a community-powered SIT hackathon! Learn, share, network, and build innovative solutions. Showcase your ideas, compete for prizes, and bring your vision to life!          </p>
        </div>
      </motion.div>

      {/* Creative Floating Gradient Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-2 flex justify-center"
      >
        <motion.div
          whileHover={{ y: -6, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            size="lg"
            className="relative px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white shadow-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 overflow-hidden"
            onClick={() => setShowInfo((prev) => !prev)}
          >
            <span className="relative z-10">More Information & Rules</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Guidelines, Judging Tabbed Section */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mt-10 max-w-2xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-8 border border-gray-200 dark:border-gray-700"
        >
          {/* Tab Buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-6">
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base
                ${activeTab === 'guidelines' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 shadow' : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-300'}`}
              onClick={() => setActiveTab('guidelines')}
            >
              <Sparkles className="w-5 h-5" /> Guidelines
            </button>
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base
                ${activeTab === 'judging' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-200 shadow' : 'hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600 dark:text-green-300'}`}
              onClick={() => setActiveTab('judging')}
            >
              <Gavel className="w-5 h-5" /> Judging
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[180px] sm:min-h-[160px]">
            {activeTab === 'guidelines' && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-bold text-blue-700 mb-3 text-left flex items-center gap-2"><Sparkles className="w-5 h-5" /> Guidelines</h3>
                <ul className="list-disc list-inside space-y-3 text-left">
                  {guidelines.map((guideline, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-200 text-base">
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'judging' && (
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 shadow-sm">
                <h3 className="text-xl font-bold text-green-700 mb-1 text-left flex items-center gap-2"><Gavel className="w-5 h-5" /> Judging Criteria & Process</h3>
                <div className="text-green-800 dark:text-green-200 text-base mb-2 text-left font-semibold">{judgingCriteriaHeading}</div>
                <ul className="list-disc list-inside space-y-3 text-left">
                  {judgingCriteria.map((item, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-200 text-base" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
                <div className="text-green-800 dark:text-green-200 text-base mb-2 text-left font-semibold mt-4">{participantGuidelinesHeading}</div>
                <ul className="list-disc list-inside space-y-3 text-left">
                  {participantGuidelines.map((item, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-200 text-base" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Introduction;
