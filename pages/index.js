import Head from 'next/head'
import { Layout } from 'antd'
import ArticlesList from './components/ArticlesList'

const { Header, Footer, Content } = Layout

export default function Home() {
  return (
    <div>
      <Head>
        <title>Art's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="layout">
        <Header className="header">
          <h1>Art Parkeenvincha</h1>
        </Header>
        <Content className="content">
          <ArticlesList />
        </Content>
        <Footer className="footer">
          <h2>Made with ♥</h2>
        </Footer>
      </Layout>
    </div>
  )
}
