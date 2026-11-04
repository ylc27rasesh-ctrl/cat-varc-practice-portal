// Standalone shim replacing the host platform's component library.
import React from 'react';
import { Link as RLink, NavLink as RNavLink, Route as RRoute, Routes as RRoutes } from 'react-router-dom';

export const Link = RLink;
export const NavLink = RNavLink;
export const Route = RRoute;
export const Routes = RRoutes;

export function FileCard({ children }: { children: React.ReactNode }) {
  return <div className="file-card">{children}</div>;
}

export function Header({ title, fact, intro }: { title: string; fact?: string; factKnown?: boolean; intro?: string }) {
  return <header className="file-header">
    <h1 className="file-title">{title}</h1>
    {fact && <p className="file-fact">{fact}</p>}
    {intro && <p className="file-intro">{intro}</p>}
  </header>;
}

export function Group({ label, heading, children }: { label: string; heading?: boolean; children: React.ReactNode }) {
  return <section className="file-group">
    {heading ? <h2 className="group-heading">{label}</h2> : <h3 className="group-label">{label}</h3>}
    {children}
  </section>;
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="file-para">{children}</p>;
}

export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return <aside className="file-callout"><strong className="callout-title">{title}</strong><p>{children}</p></aside>;
}

export function Closing({ children }: { children: React.ReactNode }) {
  return <footer className="file-closing">{children}</footer>;
}

export function ChoiceRow({ label, options, value, onChange }: { label: string; options: { value: string; label: string }[]; value: string; onChange: (v: string) => void }) {
  return <div className="choice-row">
    <span className="choice-label">{label}</span>
    <div className="choice-pills">
      {options.map(o => <button key={o.value} type="button"
        className={'choice-pill' + (o.value === value ? ' is-active' : '')}
        onClick={() => onChange(o.value)}>{o.label}</button>)}
    </div>
  </div>;
}

export function TextField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return <label className="text-field">
    <span className="choice-label">{label}</span>
    <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={label} />
  </label>;
}
