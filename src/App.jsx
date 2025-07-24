import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LearnIndex from './pages/learn/Index'
import HistoryOfCyberSecurity from './pages/learn/HistoryofCyberSecurity'
import InsideTheMindOfAHacker from './pages/learn/InsideTheMindOfAHacker'
import WhatIsCybersecurity from './pages/learn/WhatIsCybersecurity'
import LearnPage from './pages/LearnPage'
import HacksPage from './pages/HacksPage'
import NavBar from './components/NavBar'
import Firewall from './pages/learn/Firewall'
import AntiVirus from './pages/learn/AntiVirus'
import Ids from './pages/learn/Ids'
import PenetrationTester from './pages/learn/PenetrationTester'
import MFA from './pages/learn/MFA'
import VictimPage from './pages/learn/VictimPage'
import ScrollToTop from './components/ScrollToTop'
import HiddenFlag from  './pages/HiddenFlag'
import AccessDenied from './pages/AcessDenied'
import GeoChallenge from './pages/hacks/geo'
import InspectCTF from './pages/hacks/inspect'
import SocialChallenge from './pages/hacks/Social'

export default function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        {/* homepage */}
        <Route path="/" element={<HomePage />} />

        {/* learn overview */}
        <Route path="/learn" element={<LearnIndex />} />

        {/* learn topics */}
        <Route path="/learn/what-is-cybersecurity" element={<WhatIsCybersecurity />} />
        <Route path="/learn/history-of-cybersecurity" element={<HistoryOfCyberSecurity />} />
        <Route path="/learn/inside-the-mind-of-a-hacker" element={<InsideTheMindOfAHacker />} />
        <Route path="/learn/firewall" element={<Firewall />} />
        <Route path="/learn/anti-virus" element={<AntiVirus />} />
        <Route path="/learn/ids" element={<Ids />} />
        <Route path="learn/penetration-tester" element={<PenetrationTester />} />
        <Route path="/learn/mfa" element={<MFA />} />
        <Route path="/learn/become-a-victim" element={<VictimPage />} />

        {/* bonus pages */}
        <Route path="/learn-page" element={<LearnPage />} />
        <Route path="/hacks" element={<HacksPage />} />

        {/*Hack challenges */}
        <Route path="hacks/geo" element={<GeoChallenge />} />
        <Route path="hacks/inspect" element={<InspectCTF />} />
        <Route path="hacks/social" element={<SocialChallenge />} />

        <Route
          path="/hidden-flag"
          element={<HiddenFlag />}
        />
        <Route path="/404" element={<AccessDenied />} />
      </Routes>
    </>
  )
}
