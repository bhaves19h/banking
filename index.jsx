import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Menu, Bell, ArrowLeft, ChevronRight, Download, Share2, Send, CreditCard, FileText, RefreshCw, Shield, Settings, LogOut, User, MessageSquare, Phone, Lock, TrendingUp, Zap, CheckCircle, XCircle, Clock } from 'lucide-react';

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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
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
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    <h3 className="font-bold text-lg">Bhavesh Kumar</h3>
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
