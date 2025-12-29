import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const content = {
    home: {
      type: 'home',
      title: 'Specialist în Relația Om-Animal & Ecosisteme Emoționale.',
      subtitle: ' Ajut familiile și organizațiile să înțeleagă limbajul nevăzut al animalelor pentru a crea armonie, siguranță și atașament profund.Descifrăm instinctele pentru a construi conexiuni',
      text: 'Bine ai venit în spațiul unde știința comportamentului întâlnește empatia. Aici, traducerile nu se fac dintr-o limbă în alta, ci dintr-un instinct într-o emoție.'
    },
    despre: {
      type: 'despre',
      sections: [
        {
          title: 'Poveste',
          text: 'Sunt psiholog (în formare) pasionat de frontiera dintre speciile noastre. Cred că sănătatea noastră mentală este strâns legată de modul în care interacționăm cu natura și cu animalele de lângă noi.'
        },
        {
          title: 'Abordare',
          text: 'Misiunea mea este să transform termenul de \'stăpân\' în cel de \'părinte conștient\', folosind cercetarea academică și instrumentele digitale moderne pentru a facilita această evoluție.'
        }
      ]
    },
    servicii: {
      type: 'despre',
      sections: [
        {
          title: 'Proiectul AnimaPsych',
          text: 'Sunt psiholog (în formare) pasionat de frontiera dintre speciile noastre. Cred că sănătatea noastră mentală este strâns legată de modul în care interacționăm cu natura și cu animalele de lângă noi.'
        },
        {
          title: 'Proiecte de Consultanță',
          text: ' (Aici vei adăuga pe viitor studii de caz: „Reabilitarea anxietății de separare prin metoda atașamentului securizant”)'
        },
        {
          title: 'Publicații/Workshop-uri',
          text: 'Link-uri către articolele tale de pe blog sau prezentările de la facultate.'
        }
      ]
    },
    blog: {
      type: 'simple',
      title: 'Blog',
      text: 'Cititi articolele noastre despre comportamentul animal, psihologie comparata si sfaturi practice pentru a intelege mai bine animalele.'
    },
    contact: {
      type: 'simple',
      title: 'Contact',
      text: 'Pentru intrebari sau programari, ne puteti contacta la email@example.com sau telefon: +40 123 456 789.'
    }
  }

  const tabs = [
    { key: 'home', label: 'Acasă' },
    { key: 'despre', label: 'Despre mine' },
    { key: 'servicii', label: 'Portofoliu' },
    { key: 'blog', label: 'AI & Instrumente' },
    { key: 'contact', label: 'Contact' }
  ]

  const renderContent = () => {
    const data = content[activeTab]

    if (data.type === 'home') {
      return (
        <div className="content-hero">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <p>{data.text}</p>
        </div>
      )
    }

    if (data.type === 'despre') {
      return (
        <div className="content-two-section">
          {data.sections.map((section, idx) => (
            <section key={idx} className="content-section">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      )
    }

    if (data.type === 'simple') {
      return (
        <div className="content-simple">
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      )
    }
  }

  return (
    <>
      <header className="header">
        <h1>AnimaPsych</h1>
        <h2>Descifrăm instinctele pentru a construi conexiuni: Psihologie aplicată dincolo de cuvinte, de la om la animal.</h2>
        <img src={logo} alt="Logo" className="header-logo" />

        <nav className="button-row" aria-label="main actions">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="content-box">
        {renderContent()}
      </main>
    </>
  )
}

export default App