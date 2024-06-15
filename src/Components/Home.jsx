import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Chapters from './Chapters'
import Sponsors from './Sponsors'
// import Advisors from './Advisors'
import PageWrapper from './PageWrapper'

export default function Home() {
  return (
    <PageWrapper>
    <div>
      <section id="hero"><Hero/></section>
      <section id="about"><About/></section>
      <section id="chapters"><Chapters/></section>
      {/* <section id="advisors"><Advisors/></section> */}
      <section id='sponsors'><Sponsors/></section>
      <section id="contact"><Contact/></section>
    </div>
    </PageWrapper>
  )
}
