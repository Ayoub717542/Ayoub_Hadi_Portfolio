import React from 'react';
import { X, ShieldCheck, AlertTriangle, CheckCircle2, HelpCircle, Info, FileText } from 'lucide-react';
import { step1AuditTable } from '../data/portfolioData';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'validated':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Validated</span>
          </span>
        );
      case 'available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-950/60 border border-blue-800/60 text-blue-300">
            <Info className="w-3 h-3 text-blue-400" />
            <span>Available</span>
          </span>
        );
      case 'to_verify':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-950/60 border border-amber-800/60 text-amber-300">
            <AlertTriangle className="w-3 h-3 text-amber-400" />
            <span>To Verify</span>
          </span>
        );
      case 'incomplete':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-950/60 border border-purple-800/60 text-purple-300">
            <HelpCircle className="w-3 h-3 text-purple-400" />
            <span>Incomplete</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-900 border border-gray-700 text-gray-300">
            <span>{status}</span>
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#151A21] border border-[#242A33] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-8">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#151A21]/95 backdrop-blur-md px-6 py-4 border-b border-[#242A33] flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">Step 1 — Profile Audit & Compliance Table</h3>
              <p className="text-xs text-gray-400">
                Mandatory verification required by the Prompt Maître (Section 15 & 18).
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#0B0F14] border border-[#242A33] text-gray-400 hover:text-white hover:border-[#8B5CF6] transition-all"
            aria-label="Close Audit Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Audit Table */}
        <div className="p-6 space-y-6">
          <div className="overflow-x-auto rounded-xl border border-[#242A33] bg-[#0B0F14]">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#151A21] text-gray-200 uppercase font-bold border-b border-[#242A33]">
                <tr>
                  <th className="px-4 py-3">Information Field</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Inconsistency / Note</th>
                  <th className="px-4 py-3">Action Taken / Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242A33]/80">
                {step1AuditTable.map((item) => (
                  <tr key={item.id} className="hover:bg-[#151A21]/50 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-white whitespace-nowrap">
                      {item.field}
                    </td>
                    <td className="px-4 py-3.5 text-gray-400">
                      {item.source}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="px-4 py-3.5 text-gray-300 max-w-xs leading-relaxed">
                      {item.inconsistencyNote || '—'}
                    </td>
                    <td className="px-4 py-3.5 text-purple-300 max-w-xs leading-relaxed font-medium">
                      {item.actionRequired}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-[#0B0F14] border border-[#242A33] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="text-gray-300">
              <span className="font-bold text-emerald-400">Strict Rule Applied:</span> "Ne rien inventer" (Do not invent anything). All details displayed in this portfolio are 100% sourced from the provided prompt & CV documents.
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#8B5CF6] text-white font-bold rounded-lg hover:bg-purple-600 transition-colors"
            >
              Close Audit View
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
