import { Badge, CartIcon, LogoIcon } from '../../assets';
import * as S from './Header.styled';

interface HeaderProps {
  badgeCount: number;
  onBadgeClick?: () => void;
}

const Header = ({ badgeCount, onBadgeClick }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.LogoIcon src={LogoIcon} />
      <S.CartIconContainer>
        <S.CartIcon src={CartIcon} />
        <S.BadgeIconContainer onClick={onBadgeClick}>
          <S.BadgeIcon src={Badge} />
          <S.BadgeIconCount>{badgeCount}</S.BadgeIconCount>
        </S.BadgeIconContainer>
      </S.CartIconContainer>
    </S.HeaderContainer>
  );
};

export default Header;
