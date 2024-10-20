import './styles.module.scss'
import Header from './ui/header/main'
import MobileMenu from './ui/header/mobile-menu'

export default function Page() {
  return (
    <div id='wrapper' className='wrapper'>
      <Header />

      <MobileMenu />
      <div id='shadow-overlay' className=""></div>
    </div>
  )
}
