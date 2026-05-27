import type { GuideMeta } from "../types/guide";

export const developerGuide: GuideMeta = {
  path: "/developer",
  title: "Developer Guide",
  subtitle: "Policies, commissions, tickets, and expectations before you take work.",
  chapters: [
    {
      id: "welcome",
      title: "Welcome",
      shortTitle: "Welcome",
      blocks: [
        {
          type: "p",
          text: "Welcome to Shrouded Development, a professional Roblox development agency built to connect skilled developers with serious, paid client work.",
        },
        {
          type: "p",
          text: "If you are reading this, congratulations. You have been selected to join our developer team. Please read this guide carefully before taking commissions.",
        },
        {
          type: "callout",
          variant: "discord",
          title: "Join the team server",
          text: "Stay in Discord for tickets, activity checks, and staff support.",
        },
      ],
    },
    {
      id: "who-we-are",
      title: "1. Who We Are",
      shortTitle: "Who we are",
      blocks: [
        {
          type: "p",
          text: "Shrouded Development helps talented Roblox developers find reliable, high paying work without constantly searching for clients on their own.",
        },
        { type: "p", text: "We match clients with developers across roles such as:" },
        {
          type: "ul",
          items: [
            "Modellers",
            "Builders",
            "Scripters",
            "Project Managers",
            "UI and UX Designers",
            "VFX Artists",
            "SFX Artists",
            "Animators",
          ],
        },
        {
          type: "p",
          text: "Our goal is to make commissions smoother, more organized, and more professional for both developers and clients.",
        },
      ],
    },
    {
      id: "what-we-do",
      title: "2. What We Do",
      shortTitle: "What we do",
      blocks: [
        { type: "p", text: "Shrouded Development helps by:" },
        {
          type: "ul",
          items: [
            "Connecting developers with paid Roblox commissions",
            "Matching talent with suitable client projects",
            "Providing access to better paying opportunities",
            "Helping organize communication between clients, agents, and developers",
            "Managing tickets professionally",
            "Taking a small agency cut from completed work",
          ],
        },
        {
          type: "p",
          text: "This allows developers to focus more on creating, while Shrouded helps with finding and organizing work.",
        },
      ],
    },
    {
      id: "commission-details",
      title: "3. Commission Details",
      shortTitle: "Commissions",
      blocks: [
        {
          type: "p",
          text: "Commissions usually start at a minimum of $100 USD or 30,000 Robux, though prices can vary depending on the role, workload, deadline, and project complexity.",
        },
        {
          type: "p",
          text: "Some jobs may be lower or higher depending on what is required. For example, a small UI task will not be priced the same as a full scripting system, large build, animation pack, or project management role.",
        },
      ],
    },
    {
      id: "agency-cut",
      title: "4. Agency Cut",
      shortTitle: "Agency cut",
      blocks: [
        {
          type: "p",
          text: "Shrouded takes an agency cut from completed commissions so we can continue bringing in clients, managing tickets, and supporting developers.",
        },
        {
          type: "p",
          text: "New developers start with a 35% agency cut.",
        },
        {
          type: "p",
          text: "Your cut improves as you complete more commissions and demonstrate reliability. The tiers are as follows:",
        },
        {
          type: "tiers",
          items: [
            {
              title: "65% — Junior Developer",
              body: "Starting cut for new developers and a probation period.",
            },
            {
              title: "70% — Developer",
              body: "Granted after completing $350 worth of commissions successfully. You unlock higher tier commissions and are prioritized over Junior Developers.",
            },
            {
              title: "75% — Senior Developer",
              body: "Granted after $2,000 in successful commissions and at least 5 separate commissions. Seniors may handle their own tickets for the most part, if they wish.",
            },
            {
              title: "80%+ — Partner",
              body: "Reserved for long term, trusted developers with custom deals between Shrouded and the developer.",
            },
          ],
        },
        {
          type: "p",
          text: "Ranks may be taken away due to inactivity, lack of cooperation, or any reason we deem appropriate. Each tier requires better communication, deadlines, and quality. We may deny a tier up at any time — you will be given a reason.",
        },
        { type: "p", text: "Common reasons include:" },
        {
          type: "ul",
          items: [
            "Missing deadlines repeatedly",
            "Ghosting projects",
            "Poor communication",
            "Low quality work",
            "Causing issues with clients",
            "Breaking any of the main rules",
            "Long inactivity",
            "Making the process harder than it has to be",
          ],
        },
      ],
    },
    {
      id: "matching",
      title: "5. How Matching Works",
      shortTitle: "Matching",
      blocks: [
        {
          type: "p",
          text: "When a client opens a commission ticket, Shrouded reviews the request and matches it with suitable developers.",
        },
        { type: "p", text: "Before accepting any commission, make sure you:" },
        {
          type: "ul",
          items: [
            "Read the entire ticket",
            "Understand exactly what the client wants",
            "Have the skill required for the work",
            "Have enough time to complete it properly",
            "Can communicate professionally",
            "Are confident you can deliver the final product",
          ],
        },
        {
          type: "p",
          text: "If you are unsure about a ticket, ask an agent, recruiter, or project manager before speaking in it.",
        },
      ],
    },
    {
      id: "ticket-rules",
      title: "6. Ticket Rules",
      shortTitle: "Tickets",
      blocks: [
        {
          type: "p",
          text: "Client tickets are professional spaces. Your behavior reflects both you and Shrouded.",
        },
        { type: "p", text: "Rules:" },
        {
          type: "ul",
          items: [
            "Be professional in every client ticket",
            "Read the full ticket before speaking",
            "Only speak if you are seriously interested in taking the commission",
            "Do not claim work you cannot complete",
            "Do not leave the ticket after being matched with a client",
            "Do not ghost clients",
            "Give updates if you need time away",
            "Keep concerns out of client tickets",
            "DM staff or use the correct developer channel instead",
          ],
        },
        {
          type: "p",
          text: "Poor ticket behavior can damage client trust and may result in punishments or removal from commissions.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tickets live in Discord",
          text: "Open commissions and matched work are coordinated in the Shrouded Discord server.",
        },
      ],
    },
    {
      id: "communication",
      title: "7. Communication Expectations",
      shortTitle: "Communication",
      blocks: [
        { type: "p", text: "Good communication is required." },
        { type: "p", text: "You are expected to:" },
        {
          type: "ul",
          items: [
            "Respond in a reasonable time",
            "Be clear about your availability",
            "Give progress updates",
            "Warn staff or clients about delays",
            "Ask questions when requirements are unclear",
            "Stay respectful and professional",
          ],
        },
        {
          type: "p",
          text: "We understand that developers have school, work, and personal lives. However, Shrouded is still a business, and clients expect reliability.",
        },
      ],
    },
    {
      id: "portfolios",
      title: "8. Portfolios",
      shortTitle: "Portfolios",
      blocks: [
        {
          type: "p",
          text: "Developers will be asked to send portfolios or examples of previous work. This helps us match you with the right clients.",
        },
        {
          type: "p",
          text: "Your portfolio should show your best relevant work, such as builds, models, scripts, systems, UI, animations, VFX, SFX, or completed Roblox projects.",
        },
        { type: "p", text: "Do not claim work that is not yours." },
      ],
    },
    {
      id: "activity",
      title: "9. Activity Checks",
      shortTitle: "Activity",
      blocks: [
        {
          type: "p",
          text: "Shrouded may run activity checks to see which developers are still active and interested in work.",
        },
        {
          type: "p",
          text: "If an activity check is posted, respond within the required time. Some checks may allow 48 hours, while others may allow longer.",
        },
        {
          type: "p",
          text: "Failure to respond may result in being marked inactive or removed from the developer roster.",
        },
      ],
    },
    {
      id: "payments",
      title: "10. Payments",
      shortTitle: "Payments",
      blocks: [
        { type: "p", text: "Commissions may be paid through:" },
        { type: "ul", items: ["USD", "Robux", "USD DevEx related payments"] },
        {
          type: "p",
          text: "If you accept Robux, you will need to join the official Shrouded Development Roblox group. Ask staff in Discord for the current group link.",
        },
        {
          type: "p",
          text: "If you only accept USD or DevEx related payments, let staff know.",
        },
      ],
    },
    {
      id: "safety",
      title: "11. Safety",
      shortTitle: "Safety",
      blocks: [
        {
          type: "p",
          text: "Only trust official Shrouded staff, agents, recruiters, and leadership for agency related commissions.",
        },
        {
          type: "p",
          text: "If someone outside the agency contacts you claiming to represent Shrouded, confirm with staff before replying.",
        },
      ],
    },
    {
      id: "final",
      title: "12. Final Reminder",
      shortTitle: "Final",
      blocks: [
        {
          type: "p",
          text: "As a Shrouded developer, you represent both yourself and the agency.",
        },
        { type: "p", text: "Before taking any commission, remember:" },
        {
          type: "p",
          text: "Read the ticket. Understand the work. Communicate clearly. Stay professional. Deliver quality.",
        },
        {
          type: "p",
          text: "Shrouded Development is here to help skilled Roblox developers connect with serious clients, stronger commissions, and better opportunities.",
        },
        { type: "p", text: "Welcome to Shrouded." },
      ],
    },
  ],
};
