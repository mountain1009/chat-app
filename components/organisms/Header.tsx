import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import styled from 'styled-components'

import { MAIN_COLOR } from '~/libs/constant'

const Brand = styled.a`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  color: white;
  text-shadow: 0 0 8px rgb(0, 0, 0, 0.4);
  font-weight: bold;
`

const SiteHeader = styled.header`
  background-color: ${MAIN_COLOR};
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
  font-weight: 600;
`

const StyledButton = styled.button`
  display: block;
  cursor: pointer;
  padding: 1.5rem 1rem;
  color: white;
  font-weight: 600;
`

const Header = () => {
  const { data: session } = useSession()

  const component = session ? (
    <StyledButton onClick={() => signOut()}>ログアウト</StyledButton>
  ) : (
    ''
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
