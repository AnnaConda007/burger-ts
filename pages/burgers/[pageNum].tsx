import styles from '../../styles/Burgers.module.css';
import Image from 'next/image';
import { GetStaticPaths } from 'next'; 
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next';
type Burger ={
name:string,
image:string,
desc: string,
price:number,
id:string
}
 

type Params = {
	pageNum:string
}

 
export const getStaticPaths:GetStaticPaths<Params> = async () => {
	//фактически этот метод возвращает массив объектов Params. Но именно в этом методе это не нужно явно указывать.
	const res = await fetch('http://localhost:5000/items');
	const data = await res.json();
	const paths = data.map((burger:Burger)  => {   
		return {
			params: { pageNum: burger.id },
		};
	});
	return {
		paths,
		fallback: false,
	}; 
};
  
export const getStaticProps = async (context: GetStaticPropsContext<Params>) => {//GetStaticPropsContext<Params> - указывает , что из context, нужен только объект типа Params
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
