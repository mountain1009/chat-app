import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import styled from 'styled-components'

const Brand = styled.a`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`

const SiteHeader = styled.header`
  background-color: #def7ff;
  margin-bottom: 10px;
`

const SiteHeaderWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavWrapper = styled.ul`
  list-style: none;
  cursor: pointer;
`

const StyledLink = styled.a`
  display: block;
  padding: 1.5rem 1rem;
`

const Header = () => {
  const { user } = useUser()

  // let component = <LoginButton href="/api/auth/login">Login</LoginButton>
  // if (user) {
  //   component = (
  //     <UserNav>
  //       <CircleImage
  //         src={String(user.picture ?? '')}
  //         alt={String(user.name || '')}
  //       />
  //       <LogoutButton href="/api/auth/logout" className="text-white">
  //         ログアウト
  //       </LogoutButton>
  //     </UserNav>
  //   )
  // }

  return (
    <SiteHeader>
      <SiteHeaderWrapper>
        <Link href="/">
          <Brand>Brand</Brand>
        </Link>
        <nav>
          <NavWrapper>
            <li>
              <Link href="/about">
                <StyledLink>About</StyledLink>
              </Link>
            </li>
          </NavWrapper>
        </nav>
      </SiteHeaderWrapper>
    </SiteHeader>
  )
}

export default Header
