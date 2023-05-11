const { default: Link } = require('next/link');
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const notFoundPage: React.FC = () => {
	const router = useRouter(); /* тип уже задан next */
	useEffect(() => { /* тип useEffect уже задан next */
		setTimeout(() => {
			router.push('/');
		}, 2000);
	}, []);
	return (
		<div className='not-found'>
			<h1>Ой</h1>
			<h2> такой страницы не сушествует</h2>
			<p>
				перейти на <Link href={'/'}>главную страницу</Link>
			</p>
		</div>
	);
};
export default notFoundPage;
