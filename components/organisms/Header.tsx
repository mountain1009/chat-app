import Link from 'next/link'
import styled from 'styled-components'
import { useSession, signIn, signOut } from 'next-auth/react'
import { MAIN_COLOR, BASE_COLOR } from '~/libs/constant'

const Brand = styled.a`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  color: ${MAIN_COLOR};
`

const SiteHeader = styled.header`
  background-color: ${BASE_COLOR};
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

const StyledButton = styled.button`
  display: block;
  cursor: pointer;
  padding: 1.5rem 1rem;
  color: white;
`

const Header = () => {
  const { data: session } = useSession()

  const component = session ? (
    <StyledButton onClick={() => signOut()}>ログアウト</StyledButton>
  ) : (
    <StyledButton onClick={() => signIn()}>ログイン</StyledButton>
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
