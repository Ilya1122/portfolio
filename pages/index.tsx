import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Hero } from '../components/Hero'

const Home: NextPage = () => (
  <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Illia Portfolio</title>
    </Head>

    <Header />

    <section
      className="snap-start"
      id="hero"
    >
      <Hero />
    </section>

    <section
      className="snap-center"
      id="about"
    >
      <About />
    </section>
  </div>
)

export default Home
