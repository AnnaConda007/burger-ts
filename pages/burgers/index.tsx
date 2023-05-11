import Link from 'next/link';
import styles from '../../styles/Burgers.module.css';
import Image from 'next/image';
export const getStaticProps = async () => {
	const res = await fetch('http://localhost:5000/items');
	const data = await res.json();
	return {
		props: {
			burgers: data,
		},
	};
};

const AllBurgers = ({ burgers }) => {
	return (
		<div>
			<h1>Все бургеры</h1>
			{burgers.map((burger) => {
				return (
					<Link href={`/burgers/${burger.id}`} key={burger.id}>
						<div className={styles.burgerCard}>
							<div className={styles.imageContainer}>
								<Image src={`${burger.image}`} width={100} height={100} alt='burger'></Image>
							</div>
							<div>
								<h3>{burger.name}</h3>
								<p>{burger.desc}</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default AllBurgers;
