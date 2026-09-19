import React from 'react';

export default function LandingPage() {
  const handleDownloadClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'apk_download', {
        app_name: 'YourPulse',
        version: '1.0'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center space-x-3">
          {/* Your Custom Logo */}
          <img 
            src="/logo.svg" 
            alt="YourPulse Logo" 
            className="w-10 h-10 object-contain rounded-xl shadow-sm"
          />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">YourPulse</span>
        </div>
        <div className="flex items-center space-x-6">
          <a 
            href="#pricing" 
            className="text-slate-600 hover:text-blue-600 font-semibold transition-colors hidden sm:block"
          >
            Pricing
          </a>
          <a 
            href="https://yourpulse.vercel.app" 
            className="text-blue-600 hover:text-blue-700 font-bold transition-colors"
          >
            Log In on Web
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center md:pt-24 md:pb-32">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
          Smart POS & Inventory Manager
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          Take Control of Your Shop's Sales, <br className="hidden md:block" /> 
          Inventory, and Money in One Place.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          A smart POS system that tracks every Naira, manages multiple receiving bank accounts, and prevents stock theft—even offline. Built specifically for Nigerian businesses.
        </p>
        
        {/* Dual CTA Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <a
              href="/YourPulse-v1.0.apk"
              download="YourPulse.apk"
              onClick={handleDownloadClick}
              className="w-full sm:w-auto bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
            >
              <span>📱</span> Download for Android
            </a>
            <a
              href="https://yourpulse.vercel.app"
              className="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 font-bold py-4 px-8 rounded-xl shadow-sm hover:bg-blue-50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
            >
              <span>💻</span> Open Web Dashboard
            </a>
          </div>
          <span className="text-sm text-slate-500 font-medium mt-2">
            App requires Android 8.0+ • Web Dashboard works on any device
          </span>
        </div>

        {/* YouTube Video Embed Section */}
        <div className="mt-12 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/rhq9W3Dg5Oo?si=YourPulsePromo" 
              title="YourPulse POS Full Walkthrough" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </header>

      {/* Installation Guide */}
      <section className="py-16 bg-blue-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">How to Install YourPulse in 3 Easy Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="group bg-white p-6 rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-blue-200 cursor-default">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">1</div>
              <h4 className="font-bold text-lg mb-2">Download the App</h4>
              <p className="text-sm text-slate-600">Tap the blue download button above and wait for the file to finish saving to your phone.</p>
            </div>
            
            {/* Step 2 */}
            <div className="group bg-white p-6 rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-blue-200 cursor-default">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">2</div>
              <h4 className="font-bold text-lg mb-2">Open the File</h4>
              <p className="text-sm text-slate-600">Tap <strong>"Open"</strong> on the download notification, or find the file in your phone's Downloads folder.</p>
            </div>
            
            {/* Step 3 */}
            <div className="group bg-white p-6 rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-blue-200 cursor-default">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">3</div>
              <h4 className="font-bold text-lg mb-2">Allow Installation</h4>
              <p className="text-sm text-slate-600">If your phone asks for permission, tap <strong>Settings</strong> and turn on <strong>"Allow from this source."</strong></p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 bg-white inline-block py-2 px-4 rounded-full border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              💡 <strong>Pro Tip:</strong> Having trouble installing? We recommend using the free <a href="https://play.google.com/store/apps/details?id=com.apkmirror.helper.prod" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-semibold">APKMirror Installer</a> app from the Play Store.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid with Animated Cards */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-100 cursor-default">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6 shadow-sm">
                🔄
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Cloud Sync</h3>
              <p className="text-slate-600 leading-relaxed">
                Start a sale on your phone and finish it on your laptop. Your database stays perfectly synced across all devices instantly.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-100 cursor-default">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6 shadow-sm">
                🏦
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Bank Ready</h3>
              <p className="text-slate-600 leading-relaxed">
                Easily route payments to different bank accounts. Keep your transfers organized without mixing up business and personal funds.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-100 cursor-default">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6 shadow-sm">
                📦
              </div>
              <h3 className="text-xl font-bold mb-3">Bulk Inventory Import</h3>
              <p className="text-slate-600 leading-relaxed">
                Upload your entire shop's stock in seconds using CSV or Excel files from your web dashboard. Never type out hundreds of products manually again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with Animated Cards */}
      <section id="pricing" className="py-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* Monthly Plan */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Monthly</h3>
            <div className="text-4xl font-extrabold text-blue-600 mb-6">₦999</div>
            <p className="text-slate-600 mb-8 text-sm">Pay as you go, cancel anytime.</p>
          </div>
          
          {/* 6 Months Plan (Most Popular) */}
          <div className="bg-slate-900 border border-slate-900 rounded-2xl p-8 shadow-xl relative transition-all duration-300 transform md:-translate-y-4 hover:md:-translate-y-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2">6 Months</h3>
            <div className="text-4xl font-extrabold text-white mb-6">₦5,499</div>
            <p className="text-slate-400 mb-8 text-sm">Save 10% by paying upfront.</p>
          </div>

          {/* Annual Plan */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Annually</h3>
            <div className="text-4xl font-extrabold text-blue-600 mb-6">₦9,999</div>
            <p className="text-slate-600 mb-8 text-sm">Save 16% for a full year of access.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Can I import my existing inventory from Excel?</h4>
              <p className="text-slate-600 leading-relaxed">
                Yes! Just make sure your Excel columns are named exactly: <strong>name, cost_price, selling_price,</strong> and <strong>stock_quantity</strong>. Remove any commas or Naira signs from the numbers, click <em>File &gt; Save As &gt; CSV</em>, and upload it directly into your web dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Can my sales staff use the app while I monitor from home?</h4>
              <p className="text-slate-600 leading-relaxed">
                Yes! Your staff can use the app at the shop to record daily sales, and you can log in from your own phone or laptop anywhere in the world to monitor cash flow and inventory levels in real-time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Does it work without an internet connection?</h4>
              <p className="text-slate-600 leading-relaxed">
                Absolutely. You can record daily sales and manage your shop offline using the Android app. The moment your phone reconnects to the internet, YourPulse automatically syncs and backs up your database to the cloud.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 YourPulse. All rights reserved.</p>
      </footer>
    </div>
  );
}