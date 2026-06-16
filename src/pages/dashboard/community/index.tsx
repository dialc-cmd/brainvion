import Head from 'next/head';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Calendar, Bed } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// Community REQUIREMENT [Brainvion]: [Community dashboard for students and members.]
// TECHNICAL IMPLEMENTATION: [Static mockup of community features protected by client-side auth check.]
// QA/QC ADVISORY: [Ensure route is protected and unauthorized users are redirected.]

export default function CommunityDashboard() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const role = Cookies.get('brainvion_role');
        if (role !== 'contributor') {
            router.replace('/login');
        } else {
            setIsAuthorized(true);
        }
    }, [router]);

    if (!isAuthorized) return null; // Prevent flash of content

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
                        <h1 className="text-3xl font-bold text-primary font-heading">Welcome, Student</h1>
                        <p className="text-gray-600 mt-2">Here's your community overview and active resources.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Student House Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <Bed className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Housing Status</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-sm text-gray-500 mb-1">Current Residence</p>
                                <p className="font-medium text-gray-900">Shukrabad Hub, Room 302</p>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500">Rent due in 15 days</p>
                        </motion.div>

                        {/* Learning Hub Progress */}
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
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Frontend Roadmap</span>
                                    <span className="font-semibold text-green-600">80%</span>
                                </li>
                                <li className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">IELTS Preparation</span>
                                    <span className="font-semibold text-green-600">30%</span>
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
                                <h3 className="text-lg font-semibold text-gray-900">Events</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="border-l-4 border-purple-500 pl-3 py-1">
                                    <p className="text-sm font-semibold text-gray-900">Tech Career Workshop</p>
                                    <p className="text-xs text-gray-500">Tomorrow, 6:00 PM</p>
                                </div>
                                <div className="border-l-4 border-gray-300 pl-3 py-1">
                                    <p className="text-sm font-semibold text-gray-900">Community Dinner</p>
                                    <p className="text-xs text-gray-500">Friday, 8:00 PM</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
}
