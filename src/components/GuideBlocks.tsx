import { DISCORD_INVITE } from "../constants";
import type { GuideBlock } from "../types/guide";

export function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return block.text.includes("\n") ? (
              <pre key={i} className="preformat">
                {block.text}
              </pre>
            ) : (
              <p key={i}>{block.text}</p>
            );
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "tiers":
            return (
              <ul key={i} className="tier-list">
                {block.items.map((tier) => (
                  <li key={tier.title}>
                    <strong>{tier.title}</strong>
                    {tier.body}
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="guide-table-wrap">
                <table className="guide-table">
                  <thead>
                    <tr>
                      <th>{block.headers[0]}</th>
                      <th>{block.headers[1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row.join("-")}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "checklist":
            return (
              <ul key={i} className="checklist">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside key={i} className={`callout callout--${block.variant}`}>
                {block.title && <h3>{block.title}</h3>}
                <p>{block.text}</p>
                {block.variant === "discord" && (
                  <a className="btn-discord" href={DISCORD_INVITE} target="_blank" rel="noreferrer">
                    Open Discord
                  </a>
                )}
              </aside>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
