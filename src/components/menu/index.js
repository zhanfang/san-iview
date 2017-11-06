/**
 * @file Menu
 * @author zhanfang(fzhanxd@gmail.com)
 */

import Menu from './menu';
import MenuItem from './menu-item';
import MenuGroup from './menu-group';
import Submenu from './submenu';

Menu.Item = MenuItem;
Menu.Group = MenuGroup;
Menu.Sub = Submenu;

export default Menu;
