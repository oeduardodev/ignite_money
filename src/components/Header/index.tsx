import { HeaderContainer, HeaderContent, NewTransactionsButton } from './styles'
import logoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo Ignite Money" />
        <NewTransactionsButton>Nova Transação</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
