import React, { useState } from 'react';
import { Send, CheckCircle2, Building, Mail, User, MessageSquare, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [intent, setIntent] = useState<'general' | 'partnership'>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete your name, email, and message before sending.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fafaf9] border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Start a conversation with the team.
          </h2>

          <p className="text-base text-neutral-600 leading-relaxed max-w-xl mx-auto font-normal">
            Whether you are a household tester wanting early beta access, or a college administrator exploring a campus sustainability pilot, we look forward to hearing from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 font-display">
                Message Received!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <strong className="text-neutral-900">{formData.name}</strong>. The founding team at Pragati Engineering College will review your {intent === 'partnership' ? 'institutional partnership request' : 'message'} and reply via email.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', organization: '', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-lg bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Inquiry Type Toggle Buttons */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 uppercase tracking-wide">
                  Select Inquiry Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIntent('general')}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                      intent === 'general'
                        ? 'bg-emerald-50/70 border-emerald-500 ring-1 ring-emerald-500 text-neutral-900'
                        : 'bg-[#fafaf9] border-neutral-200 hover:border-neutral-300 text-neutral-600'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">General Inquiry / Beta Access</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">Household user feedback & questions</div>
                    </div>
                    {intent === 'general' && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIntent('partnership')}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                      intent === 'partnership'
                        ? 'bg-emerald-50/70 border-emerald-500 ring-1 ring-emerald-500 text-neutral-900'
                        : 'bg-[#fafaf9] border-neutral-200 hover:border-neutral-300 text-neutral-600'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">College Campus Partnership</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">Institutional pilot & campus SaaS</div>
                    </div>
                    {intent === 'partnership' && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </button>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. K. Suresh"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#fafaf9] border border-neutral-300 text-sm text-neutral-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#fafaf9] border border-neutral-300 text-sm text-neutral-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Organization */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{intent === 'partnership' ? 'College / University Name *' : 'College / Organization / Residence'}</span>
                </label>
                <input
                  type="text"
                  placeholder={intent === 'partnership' ? 'e.g. Pragati Engineering College' : 'e.g. Resident Community / College'}
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#fafaf9] border border-neutral-300 text-sm text-neutral-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-800 uppercase tracking-wide flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Your Message / Inquiry *</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={
                    intent === 'partnership'
                      ? 'Tell us about your campus waste segregation initiatives, approximate student body size, and pilot goals...'
                      : 'Tell us about your household segregation challenges or suggestions for the AI model...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#fafaf9] border border-neutral-300 text-sm text-neutral-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-all resize-y"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isSubmitting ? 'Sending...' : intent === 'partnership' ? 'Submit Partnership Request' : 'Send Message'}</span>
                </button>
              </div>

              <div className="text-[11px] text-neutral-400 pt-2 border-t border-neutral-100">
                AI Waste Recognition · Pragati Engineering College, Andhra Pradesh, India.
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
