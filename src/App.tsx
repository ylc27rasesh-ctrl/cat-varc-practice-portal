import React, { useState } from 'react';
import { Callout, ChoiceRow, Closing, FileCard, Group, Header, Link, NavLink, Paragraph, Route, Routes, TextField } from './shim';
import { questions, type VAQuestion } from './data/questions';
import { passages, type Passage } from './data/passages';
import { tones } from './data/tones';
import './style.css';

const LETTERS = ['A', 'B', 'C', 'D'];

function AnswerBlock({ options, answer, explanation }: { options: string[]; answer: number; explanation: string }) {
    return <div className="answer-block">
        <p className="answer-line">Answer: <strong>{LETTERS[answer]}</strong> — {options[answer]}</p>
        <p className="answer-expl">{explanation}</p>
    </div>;
}

function QuestionCard({ q }: { q: VAQuestion }) {
    const [open, setOpen] = useState(false);
    return <article className="q-card">
        <div className="q-meta">
            <span className="q-number">{q.id}</span>
            <span className="q-tag">{q.type}</span>
            <span className="q-tag q-tag-muted">{q.difficulty}</span>
        </div>
        <p className="q-stimulus">{q.stimulus}</p>
        <p className="q-stem">{q.question}</p>
        <ol className="q-options">
            {q.options.map((opt, i) => <li key={i} className={open && i === q.answer ? 'opt is-answer' : 'opt'}>
                <span className="opt-letter">{LETTERS[i]}</span><span>{opt}</span>
            </li>)}
        </ol>
        <button type="button" className="file-button is-compact reveal-btn" data-variant="secondary" onClick={() => setOpen(!open)}>
            {open ? 'Hide answer' : 'Show answer & explanation'}
        </button>
        {open && <AnswerBlock options={q.options} answer={q.answer} explanation={q.explanation} />}
    </article>;
}

function PassageCard({ p }: { p: Passage }) {
    const [open, setOpen] = useState(false);
    return <article className="q-card">
        <div className="q-meta">
            <span className="q-number">{p.id}</span>
            <span className="q-tag">{p.region}</span>
            <span className="q-tag q-tag-muted">{p.month}</span>
        </div>
        <h3 className="p-title file-hover-underline" onClick={() => setOpen(!open)} role="button" tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(!open); }}>{p.title}</h3>
        <p className="p-event">{p.event}</p>
        <button type="button" className="file-button is-compact reveal-btn" data-variant="secondary" onClick={() => setOpen(!open)}>
            {open ? 'Close passage' : 'Read passage & questions'}
        </button>
        {open && <div className="p-body">
            {p.text.map((para, i) => <p key={i} className="p-para">{para}</p>)}
            <p className="p-sources">Source: {p.sources}</p>
            <div className="p-questions">
                {p.questions.map((pq, i) => <PassageQuestion key={i} pq={pq} num={i + 1} />)}
            </div>
        </div>}
    </article>;
}

function PassageQuestion({ pq, num }: { pq: Passage['questions'][number]; num: number }) {
    const [open, setOpen] = useState(false);
    return <div className="pq">
        <p className="q-stem">{num}. {pq.q}</p>
        <ol className="q-options">
            {pq.options.map((opt, i) => <li key={i} className={open && i === pq.answer ? 'opt is-answer' : 'opt'}>
                <span className="opt-letter">{LETTERS[i]}</span><span>{opt}</span>
            </li>)}
        </ol>
        <button type="button" className="file-button is-compact reveal-btn" data-variant="secondary" onClick={() => setOpen(!open)}>
            {open ? 'Hide answer' : 'Show answer & explanation'}
        </button>
        {open && <AnswerBlock options={pq.options} answer={pq.answer} explanation={pq.explanation} />}
    </div>;
}

function Overview() {
    return <>
        <Group label="Inside this portal" heading>
            <Paragraph>Three connected practice sets for CAT VARC, built around May, June and July 2026. Everything carries full answers and reasoning. Open a section from the tabs above.</Paragraph>
        </Group>
        <div className="ov-grid">
            <Link to="/questions" className="ov-card">
                <span className="ov-count">50</span>
                <span className="ov-name">Argument questions</span>
                <span className="ov-detail">Inference, assumption, strengthen and weaken, moderate to hard, each with an answer and full explanation.</span>
            </Link>
            <Link to="/passages" className="ov-card">
                <span className="ov-count">25</span>
                <span className="ov-name">Event passages</span>
                <span className="ov-detail">CAT-length passages written from national and international events of May to July 2026, each with three questions.</span>
            </Link>
            <Link to="/tones" className="ov-card">
                <span className="ov-count">60</span>
                <span className="ov-name">Tones & synonyms</span>
                <span className="ov-detail">Every tone CAT passages are written in, with synonyms, a plain meaning and an example of how it reads.</span>
            </Link>
        </div>
        <Group label="How to use it">
            <Paragraph>Attempt each question before revealing the answer. The explanations name the trap in every wrong option, so read them even when you are right. Passage questions are mixed types, the same blend CAT uses.</Paragraph>
        </Group>
        <Callout title="Original practice material">These are original CAT-style passages and questions written for practice from reported events of May to July 2026. They are not past CAT questions.</Callout>
    </>;
}

const TYPE_OPTIONS = [
    { value: 'All', label: 'All' },
    { value: 'Inference', label: 'Inference' },
    { value: 'Assumption', label: 'Assumption' },
    { value: 'Strengthen', label: 'Strengthen' },
    { value: 'Weaken', label: 'Weaken' },
];

function Questions() {
    const [filter, setFilter] = useState('All');
    const shown = filter === 'All' ? questions : questions.filter(q => q.type === filter);
    return <>
        <Group label="50 argument questions" heading>
            <Paragraph>A mix of inference, assumption, strengthen and weaken items at moderate to hard CAT level. Answers and full reasoning sit behind each question.</Paragraph>
            <ChoiceRow label="Filter by type" options={TYPE_OPTIONS} value={filter} onChange={setFilter} />
        </Group>
        {shown.map(q => <QuestionCard key={q.id} q={q} />)}
    </>;
}

function Passages() {
    const [filter, setFilter] = useState('All');
    const shown = filter === 'All' ? passages : passages.filter(p => p.region === filter);
    return <>
        <Group label="25 passages from May to July 2026" heading>
            <Paragraph>Each passage is built from a real event of May, June or July 2026, national or international, and carries three questions in the CAT blend: main idea, inference, and strengthen or weaken.</Paragraph>
            <ChoiceRow label="Filter by region" options={[{ value: 'All', label: 'All' }, { value: 'India', label: 'India' }, { value: 'International', label: 'International' }]} value={filter} onChange={setFilter} />
        </Group>
        {shown.map(p => <PassageCard key={p.id} p={p} />)}
    </>;
}

function Tones() {
    const [query, setQuery] = useState('');
    const shown = query.trim() === '' ? tones : tones.filter(t =>
        t.tone.toLowerCase().includes(query.toLowerCase()) ||
        t.synonyms.some(s => s.toLowerCase().includes(query.toLowerCase())));
    return <>
        <Group label="60 CAT tones and their synonyms" heading>
            <Paragraph>Tone questions are won on vocabulary. Each entry gives the tone, its plain meaning, the synonyms CAT likes to confuse it with, and an example of how the tone reads in a passage. Treat the synonyms as near-neighbours, not perfect substitutes: irony is not sarcasm, and critical is not disparaging. CAT options exploit exactly these fine shades.</Paragraph>
            <TextField label="Search a tone or synonym" value={query} onChange={setQuery} />
        </Group>
        <div className="tone-list">
            {shown.map(t => <article key={t.tone} className="tone-card">
                <h3 className="tone-name">{t.tone}</h3>
                <p className="tone-meaning">{t.meaning}</p>
                <p className="tone-syn"><span className="tone-syn-label">Synonyms: </span>{t.synonyms.join(', ')}</p>
                <p className="tone-example">{t.example}</p>
            </article>)}
        </div>
    </>;
}

export function App() {
    return <FileCard>
        <Header title="The VARC Vault" fact="May - July 2026 edition" factKnown intro="Fifty argument questions, twenty-five event-based passages and sixty tone words, in the style of the CAT Codex. Built for practice: attempt first, then reveal the reasoning." />
        <nav className="file-nav" aria-label="File pages">
            <NavLink to="/" end>Overview</NavLink>
            <NavLink to="/questions">Questions</NavLink>
            <NavLink to="/passages">Passages</NavLink>
            <NavLink to="/tones">Tones</NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/passages" element={<Passages />} />
            <Route path="/tones" element={<Tones />} />
        </Routes>
        <Closing>Events checked against dated news sources on 4 November 2026. All questions are original practice material.</Closing>
    </FileCard>;
}
