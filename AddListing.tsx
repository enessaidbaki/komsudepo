import React, { useState } from 'react';
import { ArrowLeft, Camera, Upload, Check } from 'lucide-react';

interface AddListingProps {
  onBack: () => void;
  onComplete: () => void;
}

const AddListing: React.FC<AddListingProps> = ({ onBack, onComplete }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-deepTeal-900 pb-12 pt-12 px-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 bg-glass-surface rounded-full text-softSand">
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1">
            <h1 className="text-xl font-bold text-softSand">Yeni İlan Ekle</h1>
            <div className="h-1 bg-glass-surface mt-2 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-deepTeal-light transition-all duration-500" 
                    style={{width: `${step * 33}%`}}
                ></div>
            </div>
        </div>
      </div>

      {step === 1 && (
          <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-softSand mb-6">Depo bilgilerini gir</h2>
              
              <div className="space-y-4">
                  <div>
                      <label className="block text-softSand/70 text-sm mb-2">Başlık</label>
                      <input type="text" placeholder="Örn: Güvenli Bodrum Deposu" className="w-full bg-glass-surface border border-glass-border rounded-2xl p-4 text-softSand outline-none focus:border-deepTeal-light" />
                  </div>
                  <div>
                      <label className="block text-softSand/70 text-sm mb-2">Açıklama</label>
                      <textarea placeholder="Depo hakkında detaylar..." className="w-full h-32 bg-glass-surface border border-glass-border rounded-2xl p-4 text-softSand outline-none focus:border-deepTeal-light resize-none"></textarea>
                  </div>
              </div>
          </div>
      )}

      {step === 2 && (
          <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-softSand mb-6">Konum ve Fiyat</h2>
              
              <div className="space-y-4">
                  <div>
                      <label className="block text-softSand/70 text-sm mb-2">Aylık Fiyat (₺)</label>
                      <input type="number" placeholder="0.00" className="w-full bg-glass-surface border border-glass-border rounded-2xl p-4 text-softSand outline-none focus:border-deepTeal-light" />
                  </div>
                   <div>
                      <label className="block text-softSand/70 text-sm mb-2">Adres</label>
                      <input type="text" placeholder="Açık adres..." className="w-full bg-glass-surface border border-glass-border rounded-2xl p-4 text-softSand outline-none focus:border-deepTeal-light" />
                  </div>
              </div>
          </div>
      )}

      {step === 3 && (
          <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-softSand mb-6">Fotoğraf Ekle</h2>
              
              <div className="border-2 border-dashed border-glass-border rounded-3xl p-12 flex flex-col items-center justify-center mb-6 hover:bg-glass-surface transition-colors cursor-pointer">
                  <div className="w-16 h-16 bg-deepTeal/40 rounded-full flex items-center justify-center mb-4">
                      <Camera size={32} className="text-softSand" />
                  </div>
                  <p className="text-softSand font-medium">Fotoğraf Çek veya Yükle</p>
                  <p className="text-softSand/40 text-sm mt-1">Maksimum 5MB</p>
              </div>

              <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl bg-glass-surface border border-glass-border flex items-center justify-center">
                      <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover rounded-xl opacity-60" />
                  </div>
              </div>
          </div>
      )}

      {/* Navigation Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-deepTeal-900/90 backdrop-blur-xl border-t border-glass-border">
          <button 
            onClick={() => {
                if(step < 3) setStep(step + 1);
                else onComplete();
            }}
            className="w-full bg-softSand text-deepTeal font-bold py-4 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
          >
              {step === 3 ? 'İlanı Yayınla' : 'Devam Et'}
          </button>
      </div>

    </div>
  );
};

export default AddListing;
