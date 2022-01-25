import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const About = () => {
  return <div>about</div>
}

export default About
export const getServerSideProps = withPageAuthRequired()
