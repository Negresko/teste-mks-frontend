import { ContainerHeader, HeaderButton, HeaderTitle } from './HeaderCSS';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import { countCart } from '../../slices/cartSlices';
import { useAppSelector } from '../../context/hooks';
import logoCarrinho from '../../icons/vector.svg';

export interface SidebarProps {
  isActive: boolean;
  onClose: (event: React.MouseEvent) => void;
}

const Header: React.FC = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const counterCart = useAppSelector(countCart);

  return (
    <ContainerHeader>
      <HeaderTitle>
        <p>
          <span>MKS</span> Sistemas
        </p>
      </HeaderTitle>
      <HeaderButton>
        <button name='sidebarOpen' onClick={showSidebar}><img src={logoCarrinho} alt="" />{counterCart}</button>
        {sidebar && <Sidebar isActive={sidebar} onClose={showSidebar} />}
      </HeaderButton>
    </ContainerHeader>
  );
}

export default Header;