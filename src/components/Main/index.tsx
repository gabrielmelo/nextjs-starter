import * as S from './styles'

export const Main = ({
	title = 'NextJS Styled Starter',
	description = 'TypeScript, NextJS e Styled Components'
}) => (
	<S.Container>
		<S.Logo
			src="/img/logo.svg"
			alt="Image de um átomo e React Avançad escrito ao lado."
		/>
		<S.Title>{title}</S.Title>
		<S.Description>{description}</S.Description>
		<S.Illustrations
			src="/img/hero-illustrations.svg"
			alt="Um desenvolvedor de frente para uma tela de código."
		/>
	</S.Container>
)
