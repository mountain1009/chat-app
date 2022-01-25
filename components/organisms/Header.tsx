import Link from 'next/link'
import styled from 'styled-components'
import { useUser } from '@auth0/nextjs-auth0'

const Brand = styled.a`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  color: white;
`

const SiteHeader = styled.header`
  background-color: #5c7cfa;
  margin-bottom: 10px;
`

const SiteHeaderWrapper = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavWrapper = styled.ul`
  list-style: none;
  display: flex;
`

const StyledLink = styled.a`
  display: block;
  cursor: pointer;
  padding: 1.5rem 1rem;
  color: white;
`

const Header = () => {
  const { user } = useUser()

  const component = user ? (
    <Link href="/api/auth/logout">
      <StyledLink>ログアウト</StyledLink>
    </Link>
  ) : (
    <Link href="/api/auth/login">
      <StyledLink>ログイン</StyledLink>
    </Link>
  )

  return (
    <SiteHeader>
      <SiteHeaderWrapper>
        <Link href="/">
          <Brand>Animal掲示板</Brand>
        </Link>
        <nav>
          <NavWrapper>
            <li>
              <Link href="/about">
                <StyledLink>About</StyledLink>
              </Link>
            </li>
            <li>{component}</li>
          </NavWrapper>
        </nav>
      </SiteHeaderWrapper>
    </SiteHeader>
  )
}

export default Header
