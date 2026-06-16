import Head from 'next/head';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Code, ExternalLink, Download, UserCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';

interface Contributor {
    full_name: string;
    contribution_area: string;
    skills: string;
    portfolio_url: string | null;
    cv_url: string | null;
}

export default function CommunityDashboard() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [profile, setProfile] = useState<Contributor | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            
            if (error || !user) {
                router.replace('/login');
                return;
            }

            setIsAuthorized(true);

            // Fetch contributor profile securely via email match
            const { data: profileData } = await supabase
                .from('contributors')
                .select('full_name, contribution_area, skills, portfolio_url, cv_url')
                .eq('email', user.email)
                .maybeSingle();

            if (profileData) {
                setProfile(profileData);
            }
            setIsLoading(false);
        };

        fetchUserData();
    }, [router]);

    if (!isAuthorized || isLoading) return null; // Prevent flash of content

    return (
        <>
            <Head>
                <title>Community Dashboard | BrainVION</title>
            </Head>

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl font-bold text-primary font-heading">
                            Welcome, {profile?.full_name || 'Builder'}
                        </h1>
                        <p className="text-gray-600 mt-2">Here is your active BrainVION ecosystem profile.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Contributor Profile Snapshot */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <UserCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Your Identity</h3>
                                    <p className="text-sm text-gray-500 capitalize">{profile?.contribution_area?.replace('_', ' ') || 'New Member'}</p>
                                </div>
                            </div>
                            
                            {profile ? (
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Declared Skills</p>
                                        <div className="flex flex-wrap gap-2">
                                            {profile.skills?.split(',').slice(0, 3).map((skill, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                                                    {skill.trim()}
                                                </span>
                                            ))}
                                            {profile.skills?.split(',').length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">...</span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="pt-4 border-t border-gray-100 flex gap-3">
                                        {profile.portfolio_url && (
                                            <a href={profile.portfolio_url} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Portfolio
                                            </a>
                                        )}
                                        {profile.cv_url && (
                                            <a href={profile.cv_url} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                                                <Download className="w-4 h-4 mr-2" />
                                                View CV
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-sm text-gray-500">
                                    Please submit a Community Join Form to complete your profile!
                                </div>
                            )}
                        </motion.div>

                        {/* Learning Hub Progress (Static/Placeholder for future) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Learning Progress</h3>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Coming soon! Your course tracks will appear here once the curriculum engine goes live.</p>
                            <ul className="space-y-3 opacity-50 select-none">
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Frontend Roadmap</span>
                                    <span className="font-semibold text-green-600">80%</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Upcoming Events */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Ecosystem Events</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="border-l-4 border-purple-500 pl-3 py-1">
                                    <p className="text-sm font-semibold text-gray-900">Tech Career Workshop</p>
                                    <p className="text-xs text-gray-500">Tomorrow, 6:00 PM</p>
                                </div>
                                <div className="border-l-4 border-gray-300 pl-3 py-1">
                                    <p className="text-sm font-semibold text-gray-900">Community Hackathon</p>
                                    <p className="text-xs text-gray-500">Next Friday, 8:00 AM</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
}
