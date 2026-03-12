/**
 * =============================================================================
 * BrainVion - PROPRIETARY SOURCE CODE
 * © 2026 Brainvion. All Rights Reserved.
 * LEAD ARCHITECT: Dial Chowdhury Emon (@dialc.official)
 * =============================================================================
 */

'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Camera, Send, Settings, Book, ArrowLeft, Edit3, Save, X, Check, Eye, EyeOff, FileText, Video } from 'lucide-react';
import Link from 'next/link';

// ─── Types ──────────────────────────────────────────────────────────────────
interface UserProfile {
    name: string;
    email: string;
    phone: string;
    age: string;
    role: string;
    avatar: string | null;
}

// ─── Profile Avatar ──────────────────────────────────────────────────────────
function ProfileAvatar({ avatar, name, onAvatarChange }: { avatar: string | null; name: string; onAvatarChange: (url: string) => void }) {
    const fileRef = useRef<HTMLInputElement>(null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => onAvatarChange(reader.result as string);
        reader.readAsDataURL(file);
    };

    return (
        <div className="relative group w-28 h-28 md:w-36 md:h-36 flex-shrink-0">
            <div className="w-full h-full rounded-full border-4 border-neutral-800 bg-neutral-800 overflow-hidden flex items-center justify-center">
                {avatar ? (
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <User className="w-16 h-16 text-neutral-600" />
                )}
            </div>
            <button
                onClick={() => fileRef.current?.click()}
                className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity cursor-pointer gap-1"
            >
                <Camera className="w-6 h-6 text-white" />
                <span className="text-white text-xs font-bold">Change</span>
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </div>
    );
}

// ─── Editable Field ───────────────────────────────────────────────────────────
function InfoField({ label, value, editable, name, type = 'text', onChange }: {
    label: string; value: string; editable: boolean; name: string; type?: string; onChange: (n: string, v: string) => void;
}) {
    return (
        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 transition-all">
            <p className="text-neutral-500 text-xs mb-1.5 font-medium uppercase tracking-wider">{label}</p>
            {editable ? (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={e => onChange(e.target.name, e.target.value)}
                    className="w-full bg-transparent text-white text-sm font-mono border-b border-purple-500/40 focus:border-purple-400 focus:outline-none pb-0.5 placeholder-neutral-600"
                />
            ) : (
                <p className="font-mono text-sm text-neutral-200">{value || <span className="text-neutral-600 italic">Not set</span>}</p>
            )}
        </div>
    );
}

// ─── Password Update Modal ────────────────────────────────────────────────────
function PasswordModal({ onClose }: { onClose: () => void }) {
    const [fields, setFields] = useState({ current: '', next: '', confirm: '' });
    const [show, setShow] = useState({ current: false, next: false });
    const [saved, setSaved] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (fields.next !== fields.confirm) { alert("New passwords do not match."); return; }
        if (fields.next.length < 8) { alert("Password must be at least 8 characters."); return; }
        setSaved(true);
        setTimeout(onClose, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">Update Password</h3>
                    <button onClick={onClose} className="p-1.5 hover:bg-neutral-800 rounded-full transition-colors"><X className="w-4 h-4 text-neutral-400" /></button>
                </div>
                <form onSubmit={handleSave} className="space-y-4">
                    {[
                        { label: 'Current Password', key: 'current', showKey: 'current' },
                        { label: 'New Password', key: 'next', showKey: 'next' },
                        { label: 'Confirm New Password', key: 'confirm', showKey: 'next' },
                    ].map(f => (
                        <div key={f.key}>
                            <label className="block text-xs font-medium text-neutral-400 mb-1">{f.label}</label>
                            <div className="relative">
                                <input
                                    type={show[f.showKey as keyof typeof show] ? 'text' : 'password'}
                                    value={fields[f.key as keyof typeof fields]}
                                    onChange={e => setFields(p => ({ ...p, [f.key]: e.target.value }))}
                                    required
                                    className="w-full px-4 py-2.5 pr-10 bg-neutral-800 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="••••••••"
                                />
                                {(f.key !== 'confirm') && (
                                    <button type="button" onClick={() => setShow(p => ({ ...p, [f.showKey]: !p[f.showKey as keyof typeof show] }))} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
                                        {show[f.showKey as keyof typeof show] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button type="submit" className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${saved ? 'bg-emerald-600 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}>
                        {saved ? <><Check className="w-4 h-4 inline mr-1.5" />Password Updated!</> : 'Save New Password'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

// ─── Submission Type Icons ────────────────────────────────────────────────────
const SUB_TYPES = [
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'video', label: 'Video', icon: Video },
    { id: 'ebook', label: 'E-Book', icon: Book },
] as const;

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function UserProfileDashboard() {
    const [activeTab, setActiveTab] = useState<'profile' | 'submit'>('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [showPassModal, setShowPassModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [subType, setSubType] = useState<'blog' | 'video' | 'ebook'>('blog');

    const [profile, setProfile] = useState<UserProfile>({
        name: 'Ada Lovelace',
        email: 'ada@student.com',
        phone: '+880 1712345678',
        age: '21',
        role: 'Verified Member',
        avatar: null,
    });
    const [draft, setDraft] = useState<UserProfile>({ ...profile });

    const startEdit = () => { setDraft({ ...profile }); setIsEditing(true); };
    const cancelEdit = () => setIsEditing(false);

    const saveProfile = () => {
        setProfile({ ...draft });
        setIsEditing(false);
    };

    const handleFieldChange = (name: string, value: string) => {
        setDraft(prev => ({ ...prev, [name]: value }));
    };

    const handlePostSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans">
            {/* Top Bar */}
            <div className="border-b border-neutral-800 bg-neutral-900/60 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/dashboard" className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="font-heading font-bold text-lg text-white">Identity Hub</h1>
                    </div>
                    <div className="flex space-x-1 p-1 bg-neutral-800 rounded-lg">
                        <button onClick={() => setActiveTab('profile')} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'profile' ? 'bg-purple-600 text-white shadow' : 'text-neutral-400 hover:text-white'}`}>Profile</button>
                        <button onClick={() => setActiveTab('submit')} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'submit' ? 'bg-emerald-600 text-white shadow' : 'text-neutral-400 hover:text-white'}`}>Create Post</button>
                    </div>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 space-y-6">
                <AnimatePresence mode="wait">
                    {/* ── Profile Tab ── */}
                    {activeTab === 'profile' && (
                        <motion.div key="profile" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6">

                            {/* Profile Header Card */}
                            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                                    <ProfileAvatar
                                        avatar={isEditing ? draft.avatar : profile.avatar}
                                        name={profile.name}
                                        onAvatarChange={(url) => {
                                            if (isEditing) setDraft(p => ({ ...p, avatar: url }));
                                            else setProfile(p => ({ ...p, avatar: url }));
                                        }}
                                    />

                                    <div className="flex-1 text-center md:text-left w-full">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                            <div>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={draft.name}
                                                        onChange={e => handleFieldChange('name', e.target.value)}
                                                        className="text-2xl font-bold bg-transparent border-b border-purple-500/50 text-white focus:outline-none w-full max-w-xs"
                                                    />
                                                ) : (
                                                    <h2 className="text-2xl font-bold font-heading text-white">{profile.name}</h2>
                                                )}
                                                <span className="inline-block mt-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider rounded-full">
                                                    {profile.role}
                                                </span>
                                            </div>

                                            <div className="flex gap-2 justify-center md:justify-end">
                                                {isEditing ? (
                                                    <>
                                                        <button onClick={cancelEdit} className="flex items-center gap-1.5 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl text-sm font-semibold transition-colors">
                                                            <X className="w-4 h-4" /> Cancel
                                                        </button>
                                                        <button onClick={saveProfile} className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition-colors shadow-lg shadow-emerald-900/20">
                                                            <Save className="w-4 h-4" /> Save Changes
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button onClick={startEdit} className="flex items-center gap-1.5 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-sm font-semibold transition-colors border border-neutral-700">
                                                        <Edit3 className="w-4 h-4 text-purple-400" /> Edit Profile
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Info Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <InfoField label="Email Address" name="email" value={isEditing ? draft.email : profile.email} editable={isEditing} type="email" onChange={handleFieldChange} />
                                            <InfoField label="WhatsApp / Phone" name="phone" value={isEditing ? draft.phone : profile.phone} editable={isEditing} onChange={handleFieldChange} />
                                            <InfoField label="Age" name="age" value={isEditing ? draft.age : profile.age} editable={isEditing} type="number" onChange={handleFieldChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Account Settings */}
                            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                                    <Settings className="w-4 h-4 text-neutral-400" /> Account Settings
                                </h3>
                                <div className="space-y-3">
                                    <button onClick={() => setShowPassModal(true)} className="w-full text-left px-4 py-3.5 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 rounded-xl transition-all text-sm font-medium text-neutral-200 flex items-center justify-between group">
                                        Update Password
                                        <ArrowLeft className="w-4 h-4 rotate-180 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-1 transition-all" />
                                    </button>
                                    <button className="w-full text-left px-4 py-3.5 bg-neutral-950 border border-neutral-800 hover:border-rose-900/50 rounded-xl transition-all text-sm font-medium text-rose-400 flex items-center justify-between group">
                                        Export Identity Data
                                        <ArrowLeft className="w-4 h-4 rotate-180 text-rose-800 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ── Submit Tab ── */}
                    {activeTab === 'submit' && (
                        <motion.div key="submit" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-[60px] pointer-events-none" />
                                <h2 className="text-xl font-bold text-white mb-6 font-heading relative z-10">Create Community Post</h2>

                                {/* Type Tabs */}
                                <div className="flex gap-1 mb-6 p-1 bg-neutral-950 rounded-xl border border-neutral-800 relative z-10">
                                    {SUB_TYPES.map(t => (
                                        <button key={t.id} onClick={() => setSubType(t.id)} className={`flex-1 flex justify-center items-center py-2.5 rounded-lg text-sm font-bold transition-all gap-2 ${subType === t.id ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}>
                                            <t.icon className="w-4 h-4" /> {t.label}
                                        </button>
                                    ))}
                                </div>

                                <form onSubmit={handlePostSubmit} className="space-y-4 relative z-10">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-400 mb-1">Title <span className="text-rose-500">*</span></label>
                                        <input type="text" required className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white placeholder-neutral-600 text-sm" placeholder="Give your post a compelling title..." />
                                    </div>

                                    {subType === 'blog' && (
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-1">Content <span className="text-neutral-600 text-xs">(Markdown supported)</span></label>
                                            <textarea rows={8} required className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white font-mono text-sm placeholder-neutral-600 resize-none" placeholder="# Start writing your story..." />
                                        </div>
                                    )}
                                    {subType === 'video' && (
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-1">YouTube / Vimeo URL</label>
                                            <input type="url" required className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-white placeholder-neutral-600 text-sm" placeholder="https://youtube.com/watch?v=..." />
                                        </div>
                                    )}
                                    {subType === 'ebook' && (
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-400 mb-2">Upload File</label>
                                            <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-neutral-700 hover:border-emerald-500/40 rounded-xl bg-neutral-950 cursor-pointer transition-colors group">
                                                <Book className="w-10 h-10 text-neutral-600 group-hover:text-emerald-500/60 mb-3 transition-colors" />
                                                <p className="text-sm font-medium text-neutral-300">Drop your PDF or EPUB here</p>
                                                <p className="text-xs text-neutral-600 mt-1">Max 25MB · Must be your original work</p>
                                                <input type="file" accept=".pdf,.epub" className="hidden" />
                                            </label>
                                        </div>
                                    )}

                                    <div className="pt-4 border-t border-neutral-800 flex justify-end">
                                        <button type="submit" className={`flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-sm transition-all active:scale-95 ${submitted ? 'bg-emerald-500 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20'}`}>
                                            {submitted ? <><Check className="w-4 h-4" /> Submitted!</> : <><Send className="w-4 h-4" /> Publish to Community</>}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {showPassModal && <PasswordModal onClose={() => setShowPassModal(false)} />}
        </div>
    );
}
