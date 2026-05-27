import type { GuideMeta } from "../types/guide";

export const recruiterGuide: GuideMeta = {
  path: "/recruiter",
  title: "Recruiter Guide",
  subtitle: "Client procurement, ticket standards, quota rules, and payment process.",
  chapters: [
    {
      id: "welcome",
      title: "Start here",
      shortTitle: "Start",
      blocks: [
        {
          type: "p",
          text: "Client procurement, ticket standards, quota rules, and payment process.",
        },
        {
          type: "ul",
          items: [
            "Recruit with patience — not every lead becomes a client.",
            "Protect the ticket — agents handle the commission once opened.",
            "Track your cut — payment requests need proof and the ticket link.",
          ],
        },
        {
          type: "p",
          text: "Recruiting for Shrouded takes patience. You will not win every client, and you must stay professional when a lead says no. If you cannot remain composed, speak with Jawad or leadership on Discord before continuing recruiter work.",
        },
        {
          type: "callout",
          variant: "discord",
          title: "Shrouded Discord",
          text: "Invite qualified clients here and ask them to open a commission ticket.",
        },
      ],
    },
    {
      id: "agency-overview",
      title: "1. Agency overview",
      shortTitle: "Overview",
      blocks: [
        {
          type: "p",
          text: "Shrouded Development is a Roblox development agency that connects clients with skilled developers for paid work. The agency helps with client procurement, developer matching, ticket organization, communication, and transactions.",
        },
        {
          type: "p",
          text: "Services include scripting, building, modelling, animation, graphics, UI/UX, VFX, SFX, and project management.",
        },
      ],
    },
    {
      id: "recruiter-role",
      title: "2. Recruiter role",
      shortTitle: "Your role",
      blocks: [
        {
          type: "p",
          text: "As a Recruiter, your role is to find clients who need Roblox development services and bring qualified leads into Shrouded. You are responsible for the first impression, the first conversation, and making sure the client understands what Shrouded can provide.",
        },
        {
          type: "p",
          text: "You are not the client manager. Once a ticket is open, the Agent leads the commission.",
        },
        { type: "p", text: "Where clients may come from:" },
        {
          type: "ul",
          items: [
            "Roblox hiring posts",
            "Development and community servers",
            "Personal contacts",
            "Online communities",
            "Other staff approved sources",
          ],
        },
      ],
    },
    {
      id: "responsibilities",
      title: "3. Core responsibilities",
      shortTitle: "Responsibilities",
      blocks: [
        {
          type: "ul",
          items: [
            "Find qualified clients each week",
            "Start respectful before ticket communication",
            "Explain the services Shrouded provides",
            "Send relevant developer portfolios when useful",
            "Filter low value offers and percentage only offers",
            "Make sure the client understands our minimum prices",
            "Invite interested clients to the Discord server",
            "Ask interested clients to open a commission ticket",
            "Track the ticket so you know when to request your recruiter payment",
          ],
        },
      ],
    },
    {
      id: "outreach",
      title: "4. Client outreach standard",
      shortTitle: "Outreach",
      blocks: [
        {
          type: "p",
          text: "Every message should feel written for that client, not copied into their inbox. Mention what they asked for, send portfolios that fit their request, and keep your tone direct and respectful.",
        },
        {
          type: "ol",
          items: [
            "Read the client request fully.",
            "Confirm that the work is within Shrouded policy.",
            "Send a short tailored message and relevant portfolio examples.",
            "Answer simple questions about services, minimum pricing, and payment methods.",
            "If they are interested, invite them to the Discord server and ask them to open a ticket.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Rejection rule",
          text: "If a client rejects our services, stop messaging them about the offer. Do not pressure, spam, argue, or try to wear them down.",
        },
      ],
    },
    {
      id: "after-yes",
      title: "5. After a client says yes",
      shortTitle: "Handoff",
      blocks: [
        {
          type: "p",
          text: "Once a client is interested, your job shifts from outreach to handoff.",
        },
        {
          type: "ol",
          items: [
            "Invite the client to the Shrouded Discord server.",
            "Ask them to open a commission ticket.",
            "Wait for an Agent to take over the ticket.",
            "Stay in the ticket only to track status and payment progress.",
            "Request your recruiter payment only after the qualifying payment has proceeded.",
          ],
        },
        {
          type: "p",
          text: "The client may be interested and still not hire our developers. Interest alone does not qualify for recruiter payment.",
        },
      ],
    },
    {
      id: "ticket-behavior",
      title: "6. Ticket behavior",
      shortTitle: "Tickets",
      blocks: [
        {
          type: "p",
          text: "Recruiters are usually added to client tickets so they can track the commission. You are not added to run the ticket.",
        },
        {
          type: "ul",
          items: [
            "Do not talk in tickets unless strictly needed",
            "Do not interfere with Agent communication",
            "Do not process payments yourself",
            "Do not share screenshots, files, or private ticket information",
            "Do not make promises outside Shrouded policy",
            "If you must speak, keep it short and professional",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Confidentiality",
          text: "Ticket information is private. You may discuss your own employment details, but you may not share ticket files, screenshots, or private client information. Breaking this rule can result in immediate removal.",
        },
      ],
    },
    {
      id: "pricing",
      title: "7. Pricing minimums",
      shortTitle: "Pricing",
      blocks: [
        {
          type: "p",
          text: "Recruiters must filter offers before inviting clients. Do not bring in jobs that are below the minimum or based only on percentages.",
        },
        {
          type: "table",
          headers: ["Service type", "Minimum price"],
          rows: [
            ["General services", "$55 USD or 15,000 Robux"],
            ["Scripting", "$105 USD or 30,000 Robux"],
            ["Building", "$105 USD or 30,000 Robux"],
          ],
        },
        {
          type: "p",
          text: "Prices can increase depending on complexity, deadline, developer role, and project size.",
        },
      ],
    },
    {
      id: "payment-methods",
      title: "8. Payment methods and upfront payment",
      shortTitle: "Upfront pay",
      blocks: [
        {
          type: "p",
          text: "Shrouded accepts PayPal USD, Crypto USD, and Robux. Recruiters may request to receive their payment through one form only, but fees or conversion differences may slightly reduce the received amount.",
        },
        {
          type: "p",
          text: "Shrouded requires 50 percent upfront payment before a developer starts work. This protects the agency and the developer if a client backs out later.",
        },
        {
          type: "p",
          text: "Transactions are handled by the Agent. Recruiters track payment status but do not process transactions.",
        },
      ],
    },
    {
      id: "recruiter-payment",
      title: "9. Recruiter payment",
      shortTitle: "Your cut",
      blocks: [
        {
          type: "p",
          text: "Recruiter payment is based on the total commission value and is requested once the client proceeds with the qualifying payment.",
        },
        { type: "p", text: "Recruiter payment table" },
        {
          type: "table",
          headers: ["Total commission value", "Recruiter payment"],
          rows: [
            ["$55 to $150", "$10"],
            ["$151 to $350", "$20"],
            ["$351 to $550", "$35"],
            ["$551 to $999", "$50"],
            ["$1,000+", "$65 + 2.5%"],
          ],
        },
        { type: "p", text: "Senior recruiter payment table" },
        {
          type: "table",
          headers: ["Total commission value", "Senior recruiter payment"],
          rows: [
            ["$55 to $150", "$10"],
            ["$151 to $350", "$22.50"],
            ["$351 to $550", "$42.50"],
            ["$551 to $999", "$70"],
            ["$1,000+", "$70 + 3.5%"],
          ],
        },
      ],
    },
    {
      id: "payment-format",
      title: "10. Payment request format",
      shortTitle: "Request format",
      blocks: [
        { type: "p", text: "Use the format below when requesting your cut." },
        {
          type: "p",
          text: "PayPal: payshrouded@gmail.com\nTotal Commission Value: $250\nRank: Recruiter\nMy Cut: $20\nTotal Monthly Commission Value: $1,000\nProof: Insert ticket channel link",
        },
      ],
    },
    {
      id: "quota",
      title: "11. Quota and strikes",
      shortTitle: "Quota",
      blocks: [
        {
          type: "p",
          text: "Recruiters are expected to bring in commissions every week. Current active quota is two commissions or $100 worth of commission value per week unless leadership announces a different target.",
        },
        {
          type: "p",
          text: "A commission counts toward quota only when the client opens a ticket and proceeds with payment.",
        },
        {
          type: "p",
          text: "Failure to meet quota may result in a strike. Three strikes can result in removal. For Senior Recruiters, three strikes can result in demotion. Strikes expire after two months.",
        },
      ],
    },
    {
      id: "clients-declined",
      title: "12. Clients Shrouded does not take",
      shortTitle: "Declined clients",
      blocks: [
        {
          type: "ul",
          items: [
            "Clients looking to hire developers for their own studios",
            "Percentage only offers",
            "Extremely low value offers",
            "Unclear or unserious requests",
            "Clients who refuse the 50 percent upfront policy",
            "Clients who act disrespectfully or suspiciously",
          ],
        },
        {
          type: "p",
          text: "If you are unsure whether a client should be accepted, ask staff before inviting them.",
        },
      ],
    },
    {
      id: "server-roles",
      title: "13. Server roles",
      shortTitle: "Roles",
      blocks: [
        { type: "p", text: "Recruiters should understand who handles each part of Shrouded work." },
        {
          type: "table",
          headers: ["Role", "Function"],
          rows: [
            ["Owner", "Makes executive decisions, resolves disputes, and has final authority."],
            ["Moderator", "Handles moderation, server structure, bans, mutes, and role organization."],
            ["Agent", "Manages client tickets, payments, client communication, and mediation."],
            ["Developer", "Completes the technical work requested through the ticket."],
            ["Client", "Requests services and pays 50 percent upfront before work begins."],
            ["Recruiter", "Finds potential clients and brings qualified leads into Shrouded."],
          ],
        },
      ],
    },
    {
      id: "competitions",
      title: "14. Competitions and promotions",
      shortTitle: "Competitions",
      blocks: [
        {
          type: "p",
          text: "Shrouded may hold monthly recruiter competitions. Competitions can be separated between Recruiters and Senior Recruiters.",
        },
        {
          type: "p",
          text: "A top performing Recruiter may be promoted to Senior Recruiter for the following month. Senior Recruiter competitions may include separate rewards.",
        },
      ],
    },
    {
      id: "final",
      title: "15. Final checklist",
      shortTitle: "Checklist",
      blocks: [
        {
          type: "checklist",
          items: [
            "Read the client request before messaging.",
            "Invite interested clients to open a ticket.",
            "Personalize your outreach.",
            "Let Agents manage ticket communication and payments.",
            "Send portfolios that match the request.",
            "Request your cut only after qualifying payment is confirmed.",
            "Respect rejection immediately.",
            "Keep ticket information confidential.",
          ],
        },
        {
          type: "p",
          text: "Questions may go to Jawad or the appropriate Shrouded staff member on Discord.",
        },
        {
          type: "callout",
          variant: "discord",
          title: "Need help?",
          text: "Join the server and ask in the appropriate staff channel.",
        },
      ],
    },
  ],
};
