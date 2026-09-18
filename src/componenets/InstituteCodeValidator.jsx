import { useState } from 'react';
import { ShieldCheck, Building, Users, Check } from 'lucide-react';
import api from '../services/api';

export default function InstituteCodeValidator() {
  const [code, setCode] = useState('KOTA-TOPPERS-2026');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleValidate = async (e) => {
    e?.preventDefault();
    if (!code) return;
    setLoading(true);
    const res = await api.validateInstituteCode(code);
    setResult(res.data);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-200 shadow-xl text-gray-900">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-100 mb-8">
        <div>
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full text-xs font-bold text-[#01696f] mb-2">
            <Building className="w-3.5 h-3.5" /> <span>CoachOne Institute Batch Code</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A]">Batch Code Test</h3>
        </div>

        <div className="flex gap-2">
          {['KOTA-TOPPERS-2026', 'SUPER30-BIHAR'].map((sample) => (
            <button
              key={sample}
              onClick={() => {
                setCode(sample);
                api.validateInstituteCode(sample).then((r) => setResult(r.data));
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 transition-colors"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
        {/* Input Form */}
        <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-[#0F172A] mb-2">Enter Coaching Institute Code</h4>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              When students enter this code on the PrepOne app, they automatically join your coaching batch and receive your test series.
            </p>

            <form onSubmit={handleValidate} className="space-y-3 mb-6">
              <div className="relative">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="e.g. KOTA-TOPPERS-2026"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-900 uppercase focus:outline-none focus:border-[#01696f] font-semibold shadow-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#01696f] hover:bg-[#015257] text-white py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
              >
                {loading ? 'Checking Code...' : (
                  <>
                    <ShieldCheck className="w-4 h-4" /> Check Code &amp; View Batch
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-gray-200 text-[11px] text-gray-600 flex items-center shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 inline mr-1.5 text-[#01696f] flex-shrink-0" />
            <span>Securely verified institute enrollment code.</span>
          </div>
        </div>

        {/* Output Diagnostics */}
        <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between">
          {result ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <div>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest flex items-center">
                    <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Code Valid &amp; Active
                  </span>
                  <h4 className="text-base font-bold text-gray-900 mt-0.5">{result.instituteName}</h4>
                </div>
                <div className="text-right text-xs text-[#01696f] font-bold">
                  {result.batchName}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-gray-500 block text-[10px]">Enrolled Students:</span>
                  <strong className="text-base text-gray-900">{result.enrolledStudents} Students</strong>
                </div>
                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-gray-500 block text-[10px]">Batch Average Score:</span>
                  <strong className="text-base text-emerald-700">{result.batchReadinessScore}%</strong>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-gray-200 text-xs shadow-sm">
                <span className="text-amber-800 font-bold block mb-1.5">Identified Weak Topics for this Batch:</span>
                <div className="flex flex-wrap gap-1.5">
                  {result.weakTopics?.map((topic) => (
                    <span key={topic} className="bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg text-[11px] font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 h-full text-gray-500">
              <Users className="w-10 h-10 text-gray-400 mb-2" />
              <p className="text-xs">Click check to view batch information</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
