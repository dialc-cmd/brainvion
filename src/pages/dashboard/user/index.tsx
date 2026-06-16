import Head from 'next/head';
import { motion } from 'framer-motion';
import { ShoppingBag, FileText, CreditCard, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// Community REQUIREMENT [Brainvion]: [Customer dashboard for external clients ordering services/products.]
// TECHNICAL IMPLEMENTATION: [Static mockup of customer features protected by client-side auth check.]
// QA/QC ADVISORY: [Ensure route is protected and unauthorized users are redirected.]

export default function UserDashboard() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const role = Cookies.get('brainvion_role');
        if (role !== 'customer') {
            router.replace('/login');
        } else {
            setIsAuthorized(true);
        }
    }, [router]);

    if (!isAuthorized) return null; // Prevent flash of content

    return (
        <>
            <Head>
                <title>Client Dashboard | BrainVION</title>
            </Head>

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl font-bold text-primary font-heading">Welcome, Partner</h1>
                        <p className="text-gray-600 mt-2">Manage your orders, services, and billing here.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Active Orders */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 lg:col-span-2"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                        <ShoppingBag className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Active Services</h3>
                                </div>
                                <button className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                                    View All
                                </button>
                            </div>
                            
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service ID</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#BV-8402</td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">MVP Landing Page Development</td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    In Progress
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#BV-8399</td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Technical SEO Audit</td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Quick Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:border-primary/30 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Invoices</h4>
                                        <p className="text-xs text-gray-500">1 Unpaid Invoice</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:border-primary/30 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Payment Methods</h4>
                                        <p className="text-xs text-gray-500">Manage cards & billing</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
}
