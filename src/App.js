import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Menu, Bell, ArrowLeft, ChevronRight, Download, Share2, Send, CreditCard, FileText, RefreshCw, Shield, Settings, LogOut, User, MessageSquare, Phone, Lock, TrendingUp, Zap, CheckCircle, XCircle, Clock } from 'lucide-react';

import logo from './assets/app_icon.png';
const LOGO_URL = "data:image/png;base64,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";

const BankingApp = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showBalance, setShowBalance] = useState(true);
  const [balance, setBalance] = useState(125487.50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'credit', amount: 5000, desc: 'Salary Credit', date: '2024-12-15', balance: 125487.50 },
    { id: 2, type: 'debit', amount: 1200, desc: 'ATM Withdrawal', date: '2024-12-14', balance: 120487.50 },
    { id: 3, type: 'credit', amount: 2500, desc: 'IMPS Transfer', date: '2024-12-13', balance: 121687.50 },
    { id: 4, type: 'debit', amount: 850, desc: 'Bill Payment', date: '2024-12-12', balance: 119187.50 }
  ]);
  const [otpTimer, setOtpTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (currentScreen === 'otp' && otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (otpTimer === 0) {
      setCanResend(true);
    }
  }, [otpTimer, currentScreen]);

  const handleLogin = () => {
    if (mobileNumber.length === 10) {
      setCurrentScreen('otp');
      setOtpTimer(30);
      setCanResend(false);
    }
  };

  const handleOtpVerify = () => {
    if (otp.length === 6) {
      setCurrentScreen('dashboard');
    }
  };

  const resendOtp = () => {
    setOtpTimer(30);
    setCanResend(false);
    setOtp('');
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Login Screen
  if (currentScreen === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
             <div className="mx-auto mb-4 flex justify-center">
  <img
    src={LOGO_URL}
    alt="U.U.C.B Logo"
    className="h-24 w-auto object-contain"
  />
</div>


              <h1 className="text-3xl font-bold text-gray-800">U.U.C.B</h1>
              <p className="text-gray-500 mt-2">Secure Mobile Banking</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 border border-gray-300 rounded-xl bg-gray-50">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="flex-1 min-w-0 px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-xl 
             focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    maxLength="10"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Continue
              </button>

              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                  <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988z"/></svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // OTP Screen
  if (currentScreen === 'otp') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <button onClick={() => setCurrentScreen('login')} className="mb-4">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">Enter OTP</h2>
            <p className="text-gray-500 mb-6">We've sent a 6-digit code to +91 {mobileNumber}</p>

            <input
              type="tel"
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center text-2xl tracking-widest focus:ring-2 focus:ring-blue-500 mb-4"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <div className="text-center mb-4">
              {canResend ? (
                <button onClick={resendOtp} className="text-blue-600 font-semibold">
                  Resend OTP
                </button>
              ) : (
                <p className="text-gray-500">Resend OTP in {otpTimer}s</p>
              )}
            </div>

            <button
              onClick={handleOtpVerify}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Verify & Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  if (currentScreen === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6 rounded-b-3xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">U.U.C.B</h1>
            <Bell className="w-6 h-6 cursor-pointer" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p className="text-sm opacity-90">{getGreeting()},</p>
              <h2 className="text-xl font-bold">Bhavesh</h2>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm opacity-90">Available Balance</span>
              <button onClick={() => setShowBalance(!showBalance)}>
                {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </button>
            </div>
            <h3 className="text-3xl font-bold">
              {showBalance ? `₹${balance.toLocaleString('en-IN')}` : '₹••••••'}
            </h3>
          </div>
        </div>

        {/* Account Card */}
        <div className="p-4">
          <div 
            onClick={() => setCurrentScreen('accountOptions')}
            className="bg-white rounded-2xl p-4 shadow-md cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Savings Account</p>
                <p className="font-bold text-lg">••••5678</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 pb-4">
          <h3 className="font-bold text-gray-800 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Send, label: 'Transfer', screen: 'moneyTransfer' },
              { icon: FileText, label: 'Statement', screen: 'viewStatement' },
              { icon: CreditCard, label: 'Card', screen: 'debitCard' },
              { icon: Zap, label: 'Bills', screen: 'bbps' }
            ].map((action, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentScreen(action.screen)}
                className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
                  <action.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs text-gray-600">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="px-4 pb-20">
          <h3 className="font-bold text-gray-800 mb-3">Recent Transactions</h3>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {transactions.slice(0, 3).map(txn => (
              <div key={txn.id} className="flex justify-between items-center p-4 border-b last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    txn.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {txn.type === 'credit' ? 
                      <TrendingUp className="w-5 h-5 text-green-600" /> : 
                      <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />
                    }
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{txn.desc}</p>
                    <p className="text-xs text-gray-500">{txn.date}</p>
                  </div>
                </div>
                <p className={`font-bold ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hamburger Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setMenuOpen(false)}>
            <div className="w-80 h-full bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Bhavesh</h3>
                    <p className="text-sm opacity-90">bhavesh@email.com</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                {[
                  { icon: User, label: 'Profile' },
                  { icon: Lock, label: 'Change PIN' },
                  { icon: MessageSquare, label: 'Feedback' },
                  { icon: Phone, label: 'Contact Us' },
                  { icon: Settings, label: 'Security Settings' },
                  { icon: LogOut, label: 'Logout', action: () => setCurrentScreen('login') }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-all"
                  >
                    <item.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Account Options Screen
  if (currentScreen === 'accountOptions') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('dashboard')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Account Services</h2>
        </div>

        <div className="p-4 grid grid-cols-2 gap-4">
          {[
            { icon: FileText, label: 'View Statement', screen: 'viewStatement' },
            { icon: Send, label: 'Email Statement', screen: 'emailStatement' },
            { icon: Zap, label: 'IMPS', screen: 'imps' },
            { icon: FileText, label: 'Chequebook Request', screen: 'chequeRequest' },
            { icon: Send, label: 'Money Transfer', screen: 'moneyTransfer' },
            { icon: CheckCircle, label: 'Chequebook Status', screen: 'chequeStatus' },
            { icon: CreditCard, label: 'Debit Card', screen: 'debitCard' },
            { icon: Zap, label: 'BBPS', screen: 'bbps' },
            { icon: TrendingUp, label: 'Total Control', screen: 'totalControl' },
            { icon: RefreshCw, label: 'IMPS Status', screen: 'impsStatus' }
          ].map((service, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentScreen(service.screen)}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">{service.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // View Statement Screen
  if (currentScreen === 'viewStatement') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Account Statement</h2>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-2xl p-4 shadow-md mb-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">From Date</label>
                <input type="date" className="w-full px-3 py-2 border rounded-xl" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">To Date</label>
                <input type="date" className="w-full px-3 py-2 border rounded-xl" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold">
              Generate Statement
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {transactions.map(txn => (
              <div key={txn.id} className="p-4 border-b last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-800">{txn.desc}</p>
                    <p className="text-xs text-gray-500">{txn.date}</p>
                  </div>
                  <p className={`font-bold ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                    {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toLocaleString('en-IN')}
                  </p>
                </div>
                <p className="text-sm text-gray-600">Balance: ₹{txn.balance.toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold">
              <Download className="w-5 h-5" />
              Download PDF
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Money Transfer Screen
  if (currentScreen === 'moneyTransfer') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Money Transfer</h2>
        </div>

        <div className="p-4">
          <div className="grid gap-4">
            {[
              { title: 'Same Bank Customer', desc: 'Transfer to U.U.C.B accounts', icon: '🏦' },
              { title: 'Other Bank Customer', desc: 'IMPS/NEFT/RTGS transfers', icon: '🏛️' },
              { title: 'Quick Pay', desc: 'Saved beneficiaries', icon: '⚡' }
            ].map((option, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center text-2xl">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{option.title}</h3>
                    <p className="text-sm text-gray-500">{option.desc}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold">
              Add New Payee
            </button>
            <button className="w-full bg-white border-2 border-red-500 text-red-600 py-3 rounded-xl font-semibold">
              Manage Payees
            </button>
          </div>
        </div>
      </div>
    );
  }

  // IMPS Status Screen
  if (currentScreen === 'impsStatus') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">IMPS Transaction Status</h2>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-2xl p-4 shadow-md mb-4">
            <label className="block text-sm text-gray-600 mb-2">Transaction Reference Number</label>
            <input
              type="text"
              placeholder="Enter reference number"
              className="w-full px-4 py-3 border rounded-xl mb-4"
            />
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold">
              Check Status
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Transaction Successful</h3>
            <p className="text-gray-500 mb-4">Your transaction has been completed successfully</p>
            
            <div className="space-y-3 text-left">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Amount</span>
                <span className="font-bold">₹5,000</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Reference No.</span>
                <span className="font-bold">TXN123456789</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Date & Time</span>
                <span className="font-bold">15 Dec 2024, 10:30 AM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Beneficiary</span>
                <span className="font-bold">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Debit Card Screen
  if (currentScreen === 'debitCard') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Debit Card</h2>
        </div>

        <div className="p-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-lg mb-6">
            <p className="text-sm opacity-90 mb-8">U.U.C.B Debit Card</p>
            <p className="text-xl font-mono mb-6">•••• •••• •••• 5678</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs opacity-75">Card Holder</p>
                <p className="font-bold">BHAVESH KUMAR</p>
              </div>
              <div>
                <p className="text-xs opacity-75">Valid Thru</p>
                <p className="font-bold">12/28</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-800">Card Status</h3>
                  <p className="text-sm text-green-600">Active</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold mb-3">
              Set Transaction Limits
            </button>
            <button className="w-full bg-white border-2 border-red-500 text-red-600 py-3 rounded-xl font-semibold">
              Block Card
            </button>
          </div>
        </div>
      </div>
    );
  }

  // BBPS Bill Payment Screen
  if (currentScreen === 'bbps') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Bill Payments</h2>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Electricity', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
              { name: 'Mobile', icon: '📱', color: 'from-blue-400 to-purple-500' },
              { name: 'Gas', icon: '🔥', color: 'from-red-400 to-pink-500' },
              { name: 'Water', icon: '💧', color: 'from-cyan-400 to-blue-500' },
              { name: 'DTH', icon: '📡', color: 'from-green-400 to-teal-500' },
              { name: 'Broadband', icon: '🌐', color: 'from-purple-400 to-indigo-500' }
            ].map((bill, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-r ${bill.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-3`}>
                  {bill.icon}
                </div>
                <p className="text-center font-semibold text-gray-800">{bill.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-2xl p-4 shadow-md">
            <h3 className="font-bold text-gray-800 mb-3">Recent Bill Payments</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-semibold text-gray-800">Electricity Bill</p>
                  <p className="text-xs text-gray-500">12 Dec 2024</p>
                </div>
                <p className="font-bold text-gray-800">₹1,250</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="font-semibold text-gray-800">Mobile Recharge</p>
                  <p className="text-xs text-gray-500">10 Dec 2024</p>
                </div>
                <p className="font-bold text-gray-800">₹399</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Total Control Screen
  if (currentScreen === 'totalControl') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Spending Control</h2>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-2xl p-6 shadow-md mb-4">
            <h3 className="font-bold text-gray-800 mb-4">Monthly Overview</h3>
            <div className="h-48 bg-gradient-to-t from-blue-50 to-transparent rounded-xl flex items-end justify-around p-4">
              {[70, 45, 85, 60, 90, 55].map((height, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className={`w-8 bg-gradient-to-t from-blue-600 to-teal-500 rounded-t-lg`} style={{height: `${height}%`}}></div>
                  <span className="text-xs text-gray-500">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][idx]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md mb-4">
            <h3 className="font-bold text-gray-800 mb-4">Category Breakdown</h3>
            <div className="space-y-4">
              {[
                { name: 'Food & Dining', amount: 8500, percent: 35, color: 'bg-orange-500' },
                { name: 'Shopping', amount: 6200, percent: 25, color: 'bg-purple-500' },
                { name: 'Transportation', amount: 4800, percent: 20, color: 'bg-blue-500' },
                { name: 'Entertainment', amount: 3600, percent: 15, color: 'bg-green-500' },
                { name: 'Others', amount: 1200, percent: 5, color: 'bg-gray-500' }
              ].map((cat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">{cat.name}</span>
                    <span className="text-sm font-bold text-gray-800">₹{cat.amount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${cat.color} h-2 rounded-full`} style={{width: `${cat.percent}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-bold text-gray-800 mb-2">Savings This Month</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">₹15,340</p>
            <p className="text-sm text-gray-500">You've saved 12% more than last month 🎉</p>
          </div>
        </div>
      </div>
    );
  }

  // Email Statement Screen
  if (currentScreen === 'emailStatement') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Email Statement</h2>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                defaultValue="bhavesh@email.com"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">From Date</label>
                <input type="date" className="w-full px-3 py-2 border rounded-xl" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">To Date</label>
                <input type="date" className="w-full px-3 py-2 border rounded-xl" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Statement Type</label>
              <select className="w-full px-4 py-3 border rounded-xl">
                <option>Detailed Statement</option>
                <option>Summary Statement</option>
                <option>Tax Statement</option>
              </select>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Send Statement
            </button>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800">
                📧 Statement will be sent to your registered email address within 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Cheque Request Screen
  if (currentScreen === 'chequeRequest') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Chequebook Request</h2>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Number of Leaves</label>
              <select className="w-full px-4 py-3 border rounded-xl">
                <option>10 Leaves</option>
                <option>25 Leaves</option>
                <option>50 Leaves</option>
                <option>100 Leaves</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Delivery Address</label>
              <textarea
                className="w-full px-4 py-3 border rounded-xl"
                rows="4"
                defaultValue="123, Sample Street, Udaipur, Rajasthan - 313001"
              ></textarea>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Charges</h4>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Chequebook Charges</span>
                <span className="font-bold">₹50</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-600">Delivery Charges</span>
                <span className="font-bold">₹30</span>
              </div>
              <div className="border-t mt-2 pt-2 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-blue-600">₹80</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold">
              Request Chequebook
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Cheque Status Screen
  if (currentScreen === 'chequeStatus') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">Chequebook Status</h2>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-2xl p-6 shadow-md mb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">Dispatched</h3>
                <p className="text-sm text-gray-500 mt-1">Request ID: CHQ2024120001</p>
                <p className="text-sm text-gray-500">Expected Delivery: 18 Dec 2024</p>
                <div className="mt-3 flex gap-2">
                  <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Requested</span>
                  <span>Processing</span>
                  <span>Dispatched</span>
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="font-bold text-gray-800 mb-4">Tracking Details</h3>
            <div className="space-y-4">
              {[
                { status: 'Dispatched from branch', time: '15 Dec, 2:30 PM', active: true },
                { status: 'Out for delivery', time: 'Expected by 18 Dec', active: false },
                { status: 'Delivered', time: 'Pending', active: false }
              ].map((track, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${track.active ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                    {idx < 2 && <div className="w-0.5 h-12 bg-gray-300"></div>}
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold ${track.active ? 'text-gray-800' : 'text-gray-400'}`}>{track.status}</p>
                    <p className={`text-sm ${track.active ? 'text-gray-500' : 'text-gray-400'}`}>{track.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // IMPS Screen
  if (currentScreen === 'imps') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6">
          <button onClick={() => setCurrentScreen('accountOptions')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mt-4">IMPS Transfer</h2>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Beneficiary Name</label>
              <input
                type="text"
                placeholder="Enter beneficiary name"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Account Number</label>
              <input
                type="text"
                placeholder="Enter account number"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">IFSC Code</label>
              <input
                type="text"
                placeholder="Enter IFSC code"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Remarks (Optional)</label>
              <input
                type="text"
                placeholder="Enter remarks"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-xl font-semibold">
              Proceed to Transfer
            </button>

            <div className="mt-4 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800">
                ⚡ IMPS transfers are instant and available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default BankingApp;