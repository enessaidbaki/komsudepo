import React from 'react';
import { ArrowLeft, Save, Camera } from 'lucide-react';

interface AccountInfoProps {
  onBack: () => void;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-deepTeal-900 pb-24 px-6 pt-12 overflow-y-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 bg-glass-surface rounded-full text-softSand">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-softSand">Hesap Bilgileri</h1>
      </div>

      <div className="flex flex-col items-center mb-8">
          <div className="relative">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-deepTeal-light to-softSand">
                  <img src="https://picsum.photos/200/200?random=50" alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-deepTeal-900" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-deepTeal-light rounded-full border-4 border-deepTeal-900 text-white">
                  <Camera size={14} />
              </button>
          </div>
      </div>

      <div className="space-y-4">
          <div>
              <label className="block text-softSand/60 text-xs mb-2 pl-1">Ad Soyad</label>
              <input type="text" defaultValue="Caner Yıldız" className="w-full bg-glass-surface border border-glass-border rounded-xl p-4 text-softSand outline-none focus:border-deepTeal-light" />
          </div>
          <div>
              <label className="block text-softSand/60 text-xs mb-2 pl-1">E-posta</label>
              <input type="email" defaultValue="caner.yildiz@example.com" className="w-full bg-glass-surface border border-glass-border rounded-xl p-4 text-softSand outline-none focus:border-deepTeal-light" />
          </div>
          <div>
              <label className="block text-softSand/60 text-xs mb-2 pl-1">Telefon</label>
              <input type="tel" defaultValue="+90 555 123 45 67" className="w-full bg-glass-surface border border-glass-border rounded-xl p-4 text-softSand outline-none focus:border-deepTeal-light" />
          </div>
          <div>
              <label className="block text-softSand/60 text-xs mb-2 pl-1">Şehir</label>
              <input type="text" defaultValue="İstanbul" className="w-full bg-glass-surface border border-glass-border rounded-xl p-4 text-softSand outline-none focus:border-deepTeal-light" />
          </div>
      </div>

      <button className="w-full mt-8 py-4 bg-softSand text-deepTeal font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:bg-white transition-colors">
          <Save size={18} />
          Değişiklikleri Kaydet
      </button>
    </div>
  );
};

export default AccountInfo;
