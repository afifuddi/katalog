'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Loader2, AlertCircle, X } from 'lucide-react';

export function QuoteForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setResult(null);

        const formData = new FormData(e.currentTarget);

        // Add access key
        formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORM_KEY || '');
        formData.append('subject', 'New Quote Request from BORBORÉ Website');
        formData.append('from_name', 'BORBORÉ Quote Form');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult({
                    success: true,
                    message: 'Thank you! Your quote request has been submitted successfully.'
                });
                (e.target as HTMLFormElement).reset();
            } else {
                setResult({
                    success: false,
                    message: data.message || 'Failed to submit form. Please try again.'
                });
            }
        } catch (error) {
            setResult({
                success: false,
                message: 'An error occurred. Please try again later.'
            });
            console.error('Form submission error:', error);
        }

        setIsSubmitting(false);
    }

    return (
        <div className="bg-zinc-900 rounded-3xl p-8 sm:p-10 border border-white/10">
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Request a Quote</h3>

            {result && (
                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${result.success
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}>
                    {result.success ? (
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    ) : (
                        <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-sm flex-grow">{result.message}</span>
                    <button
                        type="button"
                        onClick={() => setResult(null)}
                        className="flex-shrink-0 hover:opacity-70 transition-opacity"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="company"
                        required
                        className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
                        placeholder="Enter company name"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
                        placeholder="name@company.com"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                        Destination Port
                    </label>
                    <input
                        type="text"
                        name="destination_port"
                        className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
                        placeholder="e.g. Hamburg, Rotterdam"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                        Coffee Origin Interest
                    </label>
                    <select
                        name="coffee_origin"
                        className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white focus:outline-none focus:border-primary transition-colors"
                    >
                        <option value="">Select origin</option>
                        <option value="Siborong-Borong (Arabica)">Siborong-Borong (Arabica)</option>
                        <option value="Sidikalang (Arabica & Robusta)">Sidikalang (Arabica & Robusta)</option>
                        <option value="Mandailing (Arabica & Robusta)">Mandailing (Arabica & Robusta)</option>
                        <option value="Gayo Highland (Arabica)">Gayo Highland (Arabica)</option>
                        <option value="Mixed / Custom Blend">Mixed / Custom Blend</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white h-32 focus:outline-none focus:border-primary transition-colors placeholder:text-white/30 resize-none"
                        placeholder="Tell us about your requirements..."
                    ></textarea>
                </div>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary hover:bg-amber-600 h-12 font-bold text-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        'Send Request'
                    )}
                </Button>
            </form>
        </div>
    );
}
