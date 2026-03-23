import { motion } from "framer-motion";
import { Check } from "lucide-react"; 

const ghlCapabilities = [
  {
    category: "Core Infrastructure & Setup",
    items: [
      "Full Sub-Account Onboarding & Domain Integration",
      "Custom Snapshot Creation & Deployment",
      "SaaS Mode Configuration & Stripe Integration",
      "White-Label Branding & Custom CSS Styling"
    ]
  },
  {
    category: "Advanced Automation & CRM",
    items: [
      "Complex Workflow Logic with If/Else Branching",
      "Database Reactivation (DBR) Sequences",
      "Unified Multi-Channel Inbox Management",
      "Smart List Segmentation & Lead Management"
    ]
  },
  {
    category: "Funnels & Conversions",
    items: [
      "High-Converting Multi-Step Sales Funnels",
      "Mobile-Responsive Landing Page Design",
      "A/B Split Testing & Conversion Analytics",
      "Advanced Forms & Surveys with Conditional Logic"
    ]
  },
  {
    category: "Operations & Retention",
    items: [
      "Round-Robin Calendar & Appointment Systems",
      "Reputation Management & Automated Review Requests",
      "Gated Membership Areas & Course Portals",
      "API, Webhook, and Zapier Integrations"
    ]
  }
];

const WorkflowCapability = () => (
  <section id="work" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gradient mb-4"
      >
        GoHighLevel Capability
      </motion.h2>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Precision-engineered automations and high-level architectural solutions for scalable businesses.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {ghlCapabilities.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkflowCapability;
