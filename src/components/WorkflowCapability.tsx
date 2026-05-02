import { motion } from "framer-motion";
import { Check, Cpu, Zap, Activity, ShieldCheck } from "lucide-react"; 

const capabilities = [
  {
    category: "Infrastructure & Logic",
    icon: <Cpu className="w-5 h-5 text-purple-500" />,
    items: [
      "Multi-Platform Syncing: Connecting GHL, Zapier, Make, and n8n as one system",
      "Custom System Design: Building a 'digital brain' to handle data automatically",
      "Smart Path Logic: Workflows that make decisions based on lead behavior",
      "Scalable SaaS Foundations: Professional environments built for real estate teams",
      "Reliable Backend Architecture: IT-grade builds that won't break under pressure",
      "Inbound Technical Systems: Design that lets leads come to you automatically"
    ]
  },
  {
    category: "Advanced AI & Data",
    icon: <Activity className="w-5 h-5 text-purple-500" />,
    items: [
      "Smart Lead Classification: AI that instantly identifies your 'hot' leads",
      "24/7 AI Property Agents: Assistants that answer questions and book meetings",
      "Automated Document Reading: AI that extracts data from forms and receipts",
      "Customer Intent Detection: AI that knows if a lead wants to buy, sell, or ask",
      "Real-Time Data Mirroring: Keeping your CRM and sheets perfectly in sync",
      "Intelligent Follow-Ups: Reaching out at the perfect time to close the deal"
    ]
  },
  {
    category: "Operations & Conversions",
    icon: <Zap className="w-5 h-5 text-purple-500" />,
    items: [
      "Flexible Payment Systems: Stripe and Klarna setups for installment plans",
      "High-End Web Design: Modern, fast websites built with React and Tailwind",
      "Lead-Capture Funnels: Landing pages that turn visitors into appointments",
      "Organized Pipeline Logic: Clean '0–6 folder' deal tracking systems",
      "Standardized Agency SOPs: Step-by-step training guides for your assistants",
      "Seamless Tech Deployment: Fast, professional hosting and asset management"
    ]
  },
  {
    category: "Retention & Reporting",
    icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
    items: [
      "Instant Client Onboarding: Automating the welcome and setup process",
      "Centralized Communication Hub: Manage all leads from one single dashboard",
      "Gated Member Areas: Private portals for training and exclusive content",
      "Automated Review Collection: Systems that ask happy clients for 5-star ratings",
      "Automated ROI Reports: Instant monthly performance and budget updates",
      "Unified Multi-Channel Inbox: All SMS, Email, and Social in one easy place"
    ]
  }
];

const WorkflowCapability = () => (
  <section id="capabilities" className="py-32 bg-[#0a0a0a]">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Automation & CRM <span className="text-purple-500 italic">Capabilities</span>
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Precision-engineered workflows and architectural solutions designed to scale operations across the full automation stack.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {capabilities.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[2rem] border border-white/5 bg-[#121212] hover:border-purple-500/30 transition-all group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                {group.category}
              </h3>
            </div>
            
            <ul className="grid grid-cols-1 gap-y-5">
              {group.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-[1rem] text-gray-400 leading-snug">
                  <div className="mt-1.5 shrink-0">
                    <Check className="w-4 h-4 text-purple-500 stroke-[3]" />
                  </div>
                  <span className="group-hover:text-gray-200 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
      >
        <span className="text-white font-black text-xl tracking-tighter uppercase">Make.com</span>
        <span className="text-white font-black text-xl tracking-tighter uppercase">n8n</span>
        <span className="text-white font-black text-xl tracking-tighter uppercase">Zapier</span>
        <span className="text-white font-black text-xl tracking-tighter uppercase">GoHighLevel</span>
        <span className="text-white font-black text-xl tracking-tighter uppercase">Stripe</span>
        <span className="text-white font-black text-xl tracking-tighter uppercase">Klarna</span>
      </motion.div>
    </div>
  </section>
);

export default WorkflowCapability;
