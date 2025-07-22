import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LearnIndex from './pages/learn/Index'
import Doxxing from './pages/learn/Doxxing'
import HistoryOfCyberSecurity from './pages/learn/HistoryOfCyberSecurity'
import InsideTheMindOfAHacker from './pages/learn/InsideTheMindOfAHacker'
import SocialEngineering from './pages/learn/SocialEngineering'
import SQLInjection from './pages/learn/SQLInjection'
import WhatIsCybersecurity from './pages/learn/WhatIsCybersecurity'
import XSS from './pages/learn/XSS'
import LearnPage from './pages/LearnPage'
import HacksPage from './pages/HacksPage'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* homepage */}
        <Route path="/" element={<HomePage />} />

        {/* learn overview */}
        <Route path="/learn" element={<LearnIndex />} />

        {/* learn topics */}
        <Route path="/learn/what-is-cybersecurity" element={<WhatIsCybersecurity />} />
        <Route path="/learn/history-of-cybersecurity" element={<HistoryOfCyberSecurity />} />
        <Route path="/learn/doxxing" element={<Doxxing />} />
        <Route path="/learn/inside-the-mind-of-a-hacker" element={<InsideTheMindOfAHacker />} />
        <Route path="/learn/social-engineering" element={<SocialEngineering />} />
        <Route path="/learn/sql-injection" element={<SQLInjection />} />
        <Route path="/learn/xss" element={<XSS />} />

        {/* bonus pages */}
        <Route path="/learn-page" element={<LearnPage />} />
        <Route path="/hacks" element={<HacksPage />} />
      </Routes>
    </>
  )
}
