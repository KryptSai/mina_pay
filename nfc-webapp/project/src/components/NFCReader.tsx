import React, { useState } from 'react';
import { Nfc, AlertCircle, CheckCircle2 } from 'lucide-react';

interface NFCMessage {
  content: string;
  timestamp: string;
}

export default function NFCReader() {
  const [isReading, setIsReading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<NFCMessage[]>([]);
  const [supported, setSupported] = useState<boolean>(() => {
    return 'NDEFReader' in window;
  });

  const startScanning = async () => {
    if (!supported) {
      setError('NFC is not supported on this device/browser');
      return;
    }

    try {
      setIsReading(true);
      setError(null);
      const ndef = new (window as any).NDEFReader();
      
      await ndef.scan();
      
      ndef.addEventListener("reading", ({ message }: any) => {
        const record = message.records[0];
        const textDecoder = new TextDecoder();
        const content = textDecoder.decode(record.data);
        
        setMessages(prev => [{
          content,
          timestamp: new Date().toLocaleTimeString()
        }, ...prev]);
      });

    } catch (error) {
      setError('Error accessing NFC: ' + (error as Error).message);
      setIsReading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-center mb-6">
            <Nfc className="w-12 h-12 text-indigo-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            NFC Tag Reader
          </h1>

          {!supported && (
            <div className="mb-6 p-4 bg-yellow-50 rounded-lg flex items-center gap-3">
              <AlertCircle className="text-yellow-600 w-5 h-5" />
              <p className="text-yellow-700">
                NFC is not supported on this device or browser
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-center gap-3">
              <AlertCircle className="text-red-600 w-5 h-5" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <button
            onClick={startScanning}
            disabled={isReading || !supported}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors
              ${isReading 
                ? 'bg-green-500 cursor-default'
                : supported 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
          >
            {isReading ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Scanning...
              </span>
            ) : (
              'Start NFC Scan'
            )}
          </button>
        </div>

        {messages.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Scanned Tags
            </h2>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="text-sm text-gray-500 mb-1">
                    {msg.timestamp}
                  </div>
                  <div className="text-gray-800 break-all">
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}