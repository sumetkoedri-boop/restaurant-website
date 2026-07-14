import { useState } from 'react'
import './App.css'

type Tab = 'home' | 'restaurants' | 'contact'

const bannerImage =
  '/banner.jpg'

const restaurants = [
  {
    name: 'ไก่ย่าง 5 ดาว',
    description:
      'ร้านไก่ย่างหอม ๆ หนังกรอบ เนื้อนุ่ม มีเมนูไก่ย่าง ไก่ทอด และข้าวเหนียว เหมาะกับมื้ออร่อยแบบรวดเร็ว',
    location: '131 ถนน เทศบาล 4 ตำบล ปากเพรียว อำเภอเมืองสระบุรี สระบุรี 18000',
    image:
      '/ไก่ย่าง5ดาว.jpg',
  },
  {
    name: 'แซ่บยูเด้อ',
    description:
      'ร้านอาหารอีสานรสจัดจ้าน มีเมนูลาบ น้ำตก ต้มแซ่บ และอาหารย่าง เหมาะกับคนชอบรสแซ่บแบบถึงเครื่อง',
    location: '235, 6 ถนน เทศบาล 4 ตำบล ปากเพรียว อำเภอเมืองสระบุรี สระบุรี 18000',
    image:
      '/แซบยู้เด้อ.jpg',
  },
  {
    name: 'ร้านส้มตำนครโบว์',
    description:
      'ส้มตำรสแซ่บพร้อมเครื่องเคียงครบ ทั้งตำไทย ตำปูปลาร้า ไก่ย่าง และข้าวเหนียว กินง่ายได้ทุกวัน',
    location: 'ร้านนครโบว์ 73/3 ตำบล หนองปลาหมอ อำเภอหนองแค สระบุรี',
    image:
      '/ส้มตำ.jpg',
  },
]

const tabs: { id: Tab; label: string }[] = [
  { id: 'home', label: 'หน้าแรก' },
  { id: 'restaurants', label: 'ร้านอาหาร' },
  { id: 'contact', label: 'การติดต่อ' },
]

function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('home')

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-logo" aria-hidden="true">
            'SR'
          </span>
          <span>ร้านอาหารสระบุรี</span>
        </div>
        <nav className="tabs" aria-label="เมนูหลัก">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? 'active' : ''}
              type="button"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {activeTab === 'home' && (
        <section className="home-panel">
          <div className="banner-wrap">
            <img
              className="banner-image"
              src={bannerImage}
              alt="ภาพแบนเนอร์ร้านอาหาร"
            />
            <div className="banner-overlay">
              <p className="eyebrow">แนะนำร้านอร่อยในสระบุรี</p>
              <h1>ร้านอาหารสระบุรี</h1>
              <p>
                รวมร้านอาหารน่าลอง พร้อมรูปภาพ ชื่อร้าน คำอธิบายสั้น ๆ
                และที่ตั้ง เพื่อช่วยให้เลือกมื้ออร่อยได้ง่ายขึ้น
              </p>
              <button type="button" onClick={() => setActiveTab('restaurants')}>
                ดูร้านอาหาร
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'restaurants' && (
        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">รายการแนะนำ</p>
            <h1>ร้านอาหาร</h1>
          </div>

          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <article className="restaurant-card" key={restaurant.name}>
                <img
                  className="restaurant-photo"
                  src={restaurant.image}
                  alt={`รูป ${restaurant.name}`}
                />
                <div className="card-body">
                  <h2>{restaurant.name}</h2>
                  <p>{restaurant.description}</p>
                  <div className="location">
                    <span>ที่ตั้ง</span>
                    <strong>{restaurant.location}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'contact' && (
        <section className="contact-panel">
          <img
            className="profile-image"
            src="/self1.png"
            alt="รูปผู้จัดทำ"
          />
          <div className="contact-info">
            <p className="eyebrow">ข้อมูลผู้จัดทำ</p>
            <h1>สุเมธ เกิดรี</h1>
            <dl>
              <div>
                <dt>อีเมล</dt>
                <dd>sumetkoedri@gmail.com</dd>
              </div>
              <div>
                <dt>เบอร์โทร</dt>
                <dd>064-107-9836</dd>
              </div>
            </dl>
          </div>
        </section>
      )}
    </main>
  )
}

export default Home
