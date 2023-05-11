import styles from '../../styles/Burgers.module.css';
import Image from 'next/image';
export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:5000/items');
	const data = await res.json();

	const paths = data.map((burger) => {
		return {
			params: { pageNum: burger.id },
		};
	});

	return {
		paths,
		fallback: false,
	};
	/*getStaticPaths это такой метод, который определяет сколько путей нужно построить, этот метод на каждый путь передает объект paths, сам этот метод ничего больше не делать, только составляет маршруты. Сначала для всех старниц формируются маршруты

потом поочередно для каждого маршрута вызывается getStaticProps, он переходит от одного маршрута к другому . И на каждом маршруте  getStaticProps имеет доступ к кобъекту контент и его свойству paths. 
getStaticProps получает paths.id для каждой страницы. 
Далее получив нужно id,getStaticProps делает запрос и получает только объект с нужным id */
};

export const getStaticProps = async (context) => {
	const id = context.params.pageNum;
	const res = await fetch(`http://localhost:5000/items/${id}`);
	const data = await res.json();
	return {
		props: {
			burger: data,
		},
	};
};

const burger_id = ({ burger }) => {
	console.log(burger);
	return (
		<div className={styles.singleBurger}>
			<h1>{burger.name}</h1>
			<div className={styles.imageContainer}>
				<Image alt='фото бургера' src={burger.image} width={100} height={100}></Image>
			</div>
			<p>{burger.desc}</p>
		</div>
	);
};

export default burger_id;
