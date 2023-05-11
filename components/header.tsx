import { FaHamburger } from 'react-icons/Fa';
import Link from 'next/link';
const Header = () => {
	return (
		<header>
			<div>
				<FaHamburger />
			</div>
			<nav>
				<Link href='/'>
					<p>Домой</p>
				</Link>
				<Link href='/about'>
					<p>О нас</p>
				</Link>
				<Link href='/review'>
					<p>Отзывы</p>
				</Link>
				<Link href='/burgers'>
					<p>Бургеры</p>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
