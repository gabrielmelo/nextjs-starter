import * as S from './styles'

export const Main = () => (
	<S.Container>
		<S.Logo src="/img/logo.svg" alt="Image de um átomo e React Avançado" />
		<S.Title>Boilerplate</S.Title>
		<S.Description>TypeScript, NextJS e Styled Components</S.Description>
		<S.Illustrations
			src="/img/hero-illustrations.svg"
			alt="Um desenvolvedor de frente para uma tela de código."
		/>
	</S.Container>
)
