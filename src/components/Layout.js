import tw from 'tailwind-styled-components/dist/tailwind'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()
  return (
    <div>
      <div className='pb-44 overflow-x-hidden'>{children}</div>

      <FooterContainer>
        <div className='flex w-full justify-center'>
          {menuItems.map((item, index) => (
            <div className='flex flex-col justify-end items-center'>
              {location.pathname === item.path && (
                <div className='flex flex-col items-center'>
                  <div className='h-5 w-10 bg-primary rounded-t-full'></div>
                  <div
                    className='h-5
                    w-20
                    bg-primary 
                    rounded-t-full 
                    text-center'>
                    <i className={`${item.icon} text-xl text-secondary`}></i>
                  </div>
                </div>
              )}
              <div
                className={`px-20 bg-primary py-5 ${
                  index === 0 && 'rounded-l'
                } ${
                  index === menuItems.length - 1 && 'rounded-r'
                } flex items-center justify-center space-x-2`}>
                {location.pathname !== item.path && (
                  <i className={`${item.icon} text-secondary text-xl`} />
                )}
                <Link to={item.path} className='text-secondary text-xl'>
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FooterContainer>
    </div>
  )
}

const menuItems = [
  {
    title: 'Home',
    path: '/',
    icon: 'ri-home-4-fill',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'ri-information-line',
  },
  {
    title: 'Client',
    path: '/client',
    icon: 'ri-user-location-fill',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: 'ri-contacts-fill',
  },
]

const FooterContainer = tw.div`
fixed bottom-10 left-0 right-0
`

export default Layout
