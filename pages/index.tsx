import styles from '../styles/Home.module.css';  
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
 const Home:React.FC =()=>{
	return (
		<>
			<Head>
				<title>Бургеры | Главная</title>
			</Head>
			<div className={styles.container}>
				<h1 className={classNames(styles.title, `font-effect-fire-animation`)}>Главная страница</h1>
				<div className={classNames(styles.mainImage)}>
					<Image src='/fatburger.png' alt='бургер' width={400} height={300}></Image>
				</div>
				<p className={styles.text}>
					Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки
					можно поспорить, ведь это дело вкуса.
				</p>
				<p className={styles.text}>
					Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера
					заведения.
				</p>
				<Link href='/burgers/'>
					<p className={styles.btn}>Все бургеры</p>
				</Link>
			</div>
		</>
	);
}
 export default Home