import Header from './header';
import Footer from './footer';
const Layout:React.FC = ({ children }:{children :JSX.Element}) => {/*
синтаксис отличается
сначала задется, что пропс - это объект
потом, что в объекте должно быть свойство children с типом JSX.Element  */
	return (
		<div className='content'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
