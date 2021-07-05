import { AppProps } from 'next/app'
import GlobalStyle from 'styles/global'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Boilerplate</title>
				<meta
					name="description"
					content="A simple project starter to work with TS, React, NextJS and Styled Components"
				/>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default App
