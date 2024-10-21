import './styles.module.scss'
import Header from './ui/header/main'
import MobileMenu from './ui/header/mobile-menu'
import LandingMain from './ui/landing-main/main'

export default function Page() {
  return (
    <div id='wrapper' className='wrapper'>
      <Header />
      <LandingMain />
      <MobileMenu />
      <div id='shadow-overlay' className=""></div>
    </div>
  )
}
