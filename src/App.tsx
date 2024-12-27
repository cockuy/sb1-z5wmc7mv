import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LiveScores } from './components/LiveScores';
import { ChatSection } from './components/chat/ChatSection';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/live" element={<LiveScores />} />
            </Routes>
          </motion.div>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to SportsHub India
        </h1>
        <p className="text-xl text-gray-600">
          Your ultimate destination for live sports discussions and updates
        </p>
      </motion.div>
      
      <LiveScores />
      <ChatSection />
    </div>
  );
}

export default App;