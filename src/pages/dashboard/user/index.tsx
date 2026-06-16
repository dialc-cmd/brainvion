import Head from 'next/head';
import { motion } from 'framer-motion';
import { ShoppingBag, FileText, CreditCard, PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';
import dynamic from 'next/dynamic';

const AppointmentModal = dynamic(() => import('@/components/modals/AppointmentModal'), {
    ssr: false,
});

interface Appointment {
    id: string;
    selected_service: string;
    status: string;
    created_at: string;
}

export default function UserDashboard() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [userFullName, setUserFullName] = useState('Partner');
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            
            if (error || !user) {
                router.replace('/login');
                return;
            }

            setIsAuthorized(true);
            setUserFullName(user.user_metadata?.full_name || 'Partner');

            // Fetch real appointments from database
            const { data: appointmentsData } = await supabase
                .from('appointments')
                .select('id, selected_service, status, created_at')
                .eq('client_id', user.id)
                .order('created_at', { ascending: false });

            if (appointmentsData) {
                setAppointments(appointmentsData);
            }
            setIsLoading(false);
        };

        fetchUserData();
    }, [router]);

    if (!isAuthorized || isLoading) return null; // Prevent flash of content

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
                        className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                        <div>
                            <h1 className="text-3xl font-bold text-primary font-heading">Welcome, {userFullName}</h1>
                            <p className="text-gray-600 mt-2">Manage your orders, services, and billing here.</p>
                        </div>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                        >
                            <PlusCircle className="w-4 h-4 mr-2" />
                            Request New Service
                        </button>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Active Orders */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 lg:col-span-2 overflow-hidden flex flex-col"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                        <ShoppingBag className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Active Services</h3>
                                </div>
                            </div>
                            
                            <div className="overflow-x-auto flex-1">
                                {appointments.length === 0 ? (
                                    <div className="p-12 text-center flex flex-col items-center justify-center h-full">
                                        <div className="bg-gray-50 p-4 rounded-full mb-4">
                                            <ShoppingBag className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <p className="text-gray-500 font-medium">No active services yet.</p>
                                        <p className="text-sm text-gray-400 mt-1">Click "Request New Service" to get started.</p>
                                    </div>
                                ) : (
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service ID</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Service</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {appointments.map((apt) => (
                                                <tr key={apt.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{apt.id.split('-')[0]}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{apt.selected_service}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                            apt.status.toLowerCase() === 'completed' ? 'bg-green-100 text-green-800' : 
                                                            apt.status.toLowerCase() === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-gray-100 text-gray-800'
                                                        }`}>
                                                            {apt.status.toUpperCase()}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {new Date(apt.created_at).toLocaleDateString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
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
                                        <p className="text-xs text-gray-500">No pending invoices</p>
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

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    // Optionally trigger a refetch of appointments here to see the new one instantly
                    window.location.reload(); 
                }}
                activeService={null}
            />
        </>
    );
}
