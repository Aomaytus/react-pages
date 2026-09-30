import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [username, setUsername] = useState('your-username')
  const [repo, setRepo] = useState('my-vite-app')
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [copiedAll, setCopiedAll] = useState(false)
  const [counter, setCounter] = useState(0)
  const [themeEffect, setThemeEffect] = useState('glow')

  const cleanUser = username.trim() || 'username'
  const cleanRepo = repo.trim() || 'my-app'
  const pagesUrl = `https://${cleanUser}.github.io/${cleanRepo}/`

  const commands = [
    { label: '1. เริ่มต้น Git Repository', cmd: 'git init' },
    { label: '2. เพิ่มไฟล์ทั้งหมดเข้า Staging', cmd: 'git add .' },
    { label: '3. บันทึก Commit แรก', cmd: 'git commit -m "feat: initial commit for GitHub Pages"' },
    { label: '4. ตั้งชื่อ Branch หลักเป็น main', cmd: 'git branch -M main' },
    { label: '5. เชื่อมต่อกับ GitHub Repo', cmd: `git remote add origin https://github.com/${cleanUser}/${cleanRepo}.git` },
    { label: '6. Push ขึ้น GitHub', cmd: 'git push -u origin main' },
  ]

  const handleCopySingle = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 1800)
  }

  const handleCopyAll = () => {
    const fullScript = commands.map((c) => c.cmd).join('\n')
    navigator.clipboard.writeText(fullScript)
    setCopiedAll(true)
    setTimeout(() => setCopiedAll(false), 2000)
  }

  return (
    <div className={`app-container effect-${themeEffect}`}>
      {/* Header */}
      <header className="app-header">
        <div className="brand">
          <div className="logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </div>
          <div className="brand-text">
            <h1>GitHub Pages Launcher</h1>
            <span>React + Vite Deployment Guide</span>
          </div>
        </div>

        <div className="header-badges">
          <div className="badge-ready">
            <span className="badge-dot"></span>
            GitHub Actions Ready
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <div className="pill-tag">
          <span>🚀 พร้อม Deploy ทันทีด้วย GitHub Actions</span>
        </div>
        <h2 className="hero-title">
          ทดลองนำเว็บขึ้น <span className="gradient-text">GitHub Pages</span>
        </h2>
        <p className="hero-desc">
          เราได้เตรียมโครงสร้างโปรเจกต์ React + Vite พร้อมไฟล์ Workflow อัตโนมัติ (CI/CD) ไว้ให้เรียบร้อยแล้ว
          เพียงสร้าง GitHub Repo แล้วสั่ง Push โค้ดขึ้นไป เว็บจะออนไลน์อัตโนมัติทันที!
        </p>
      </section>

      {/* Ready Checklist Cards */}
      <div className="status-grid">
        <div className="status-card">
          <div className="status-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </div>
          <div className="status-card-info">
            <h4>Vite Config Base</h4>
            <p>ตั้งค่า <code>base: './'</code> ใน vite.config.js เรียบร้อย</p>
          </div>
        </div>

        <div className="status-card">
          <div className="status-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </div>
          <div className="status-card-info">
            <h4>GitHub Actions</h4>
            <p>สร้างไฟล์ <code>.github/workflows/deploy.yml</code> แล้ว</p>
          </div>
        </div>

        <div className="status-card">
          <div className="status-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </div>
          <div className="status-card-info">
            <h4>Build Output Test</h4>
            <p>ทดสอบคำสั่ง <code>npm run build</code> ผ่าน 100%</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Command Generator & Step by Step */}
      <div className="main-grid">
        {/* Left: Terminal & Command Generator */}
        <div className="card">
          <h3 className="card-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-indigo)" strokeWidth="2">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            ตัวช่วยสร้างคำสั่ง Git Push
          </h3>
          <p className="card-subtitle">
            กรอกชื่อ GitHub Username และ Repository ของคุณเพื่อสร้างคำสั่งพร้อมคัดลอก
          </p>

          <div className="input-row">
            <div className="input-field">
              <label>GitHub Username</label>
              <input
                type="text"
                placeholder="เช่น your-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>Repository Name</label>
              <input
                type="text"
                placeholder="เช่น my-vite-app"
                value={repo}
                onChange={(e) => setRepo(e.target.value)}
              />
            </div>
          </div>

          <div className="url-preview">
            <div>
              <div className="url-info-label">URL เว็บของคุณเมื่อ Deploy สำเร็จ</div>
              <div className="url-info-val">{pagesUrl}</div>
            </div>
            <button
              className={`copy-btn ${copiedIndex === 'url' ? 'copied' : ''}`}
              onClick={() => handleCopySingle(pagesUrl, 'url')}
            >
              {copiedIndex === 'url' ? 'คัดลอกแล้ว!' : 'คัดลอก URL'}
            </button>
          </div>

          <div className="terminal-block">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">Terminal / PowerShell</span>
              <button
                className={`copy-btn ${copiedAll ? 'copied' : ''}`}
                onClick={handleCopyAll}
              >
                {copiedAll ? 'คัดลอกทั้งหมดแล้ว!' : 'คัดลอกทุกคำสั่ง'}
              </button>
            </div>
            <div className="terminal-body">
              {commands.map((c, i) => (
                <div key={i} className="cmd-line">
                  <div className="cmd-text">
                    <span className="cmd-prompt">$</span>
                    <span>{c.cmd}</span>
                  </div>
                  <button
                    className="copy-btn"
                    style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                    onClick={() => handleCopySingle(c.cmd, i)}
                  >
                    {copiedIndex === i ? '✓' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Steps Guide */}
        <div className="card">
          <h3 className="card-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            ขั้นตอนการเปิดใช้งาน (4 สเต็ป)
          </h3>
          <p className="card-subtitle">
            ทำตามขั้นตอนนี้เพื่อเปิดหน้า GitHub Pages ให้แสดงผลสู่สาธารณะ
          </p>

          <div className="step-list">
            <div className="step-item">
              <div className="step-num">1</div>
              <div className="step-content">
                <h4>สร้าง Repository บน GitHub</h4>
                <p>
                  ไปที่ <strong>github.com/new</strong> ตั้งชื่อ Repo เป็น <strong>{cleanRepo}</strong> (เลือกเป็น Public และไม่ต้องติ๊กสร้าง README/gitignore เพราะเรามีแล้ว)
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">2</div>
              <div className="step-content">
                <h4>รันคำสั่ง Push โค้ด</h4>
                <p>
                  คัดลอกคำสั่งทางด้านซ้ายไปรันในโปรแกรม Terminal หรือ PowerShell ในโฟลเดอร์นี้ เพื่อดันโค้ดขึ้นสู่ GitHub
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">3</div>
              <div className="step-content">
                <h4>เปิด GitHub Actions ในหน้า Settings</h4>
                <p>
                  ในหน้า GitHub Repo ของคุณ ให้เข้าไปที่เมนู <strong>Settings</strong> &gt; แถบซ้ายเลือก <strong>Pages</strong>
                </p>
                <span className="step-badge-highlight">
                  เลือก Source เป็น "GitHub Actions" (สำคัญมาก!)
                </span>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">4</div>
              <div className="step-content">
                <h4>รอการ Deploy และเข้าชมเว็บ</h4>
                <p>
                  ไปที่แท็บ <strong>Actions</strong> จะเห็นกระบวนการ Build &amp; Deploy ทำงานอัตโนมัติ (ใช้เวลาประมาณ 1 นาที) เสร็จแล้วเข้าชมเว็บได้ทันที!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demonstration Section */}
      <section className="playground-section">
        <div className="playground-header">
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
              ทดสอบการทำงานของ React Component
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              ลองกดปุ่มด้านล่างเพื่อทดสอบว่า React State และ Interactivity บนเว็บนี้ทำงานได้ลื่นไหลปกติ
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className="secondary-btn"
              onClick={() => setThemeEffect(themeEffect === 'glow' ? 'clean' : 'glow')}
            >
              โหมดเอฟเฟกต์: {themeEffect === 'glow' ? '✨ Glowing' : '🌙 Clean'}
            </button>
          </div>
        </div>

        <div className="interactive-box">
          <div className="interactive-panel">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ตัวนับ Reactive Counter</span>
            <div className="counter-value">{counter}</div>
            <div className="btn-group">
              <button className="action-btn" onClick={() => setCounter((c) => c + 1)}>
                + เพิ่มค่า
              </button>
              <button className="secondary-btn" onClick={() => setCounter((c) => Math.max(0, c - 1))}>
                - ลดค่า
              </button>
              <button className="secondary-btn" onClick={() => setCounter(0)}>
                รีเซ็ต
              </button>
            </div>
          </div>

          <div className="interactive-panel" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '8px' }}>
              💡 เกร็ดน่ารู้สำหรับ GitHub Pages
            </h4>
            <div className="tips-grid" style={{ gridTemplateColumns: '1fr', gap: '12px' }}>
              <div className="tip-card" style={{ padding: '12px 16px' }}>
                <div className="tip-title">
                  <span>📁</span> Path ของรูปภาพและ Asset
                </div>
                <div className="tip-desc">
                  แนะนำให้นำเข้ารูปด้วย <code>import img from './assets/...'</code> ในโค้ด React หรือใช้รูปในโฟลเดอร์ <code>public/</code>
                </div>
              </div>
              <div className="tip-card" style={{ padding: '12px 16px' }}>
                <div className="tip-title">
                  <span>🔄</span> การอัปเดตเว็บในอนาคต
                </div>
                <div className="tip-desc">
                  ทุกครั้งที่คุณแก้ไขโค้ด เพียงแค่ <code>git add .</code>, <code>git commit</code> และ <code>git push</code> GitHub Actions จะ Deploy ให้ใหม่อัตโนมัติทันที
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <p>สร้างด้วย React 19 + Vite 8 • รองรับการ Deploy สู่ GitHub Pages ฟรี 100%</p>
      </footer>
    </div>
  )
}
