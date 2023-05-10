import Head from 'next/head';

const review = (props) => {
	const data = props.data;
	return (
		<>
			<Head>
				<title>Бургеры | Отзывы</title>
			</Head>
			<div>
				<h1>Отзывы</h1>
				<div className='reviews'>
					{!!data.length &&
						data.slice(0, 20).map((comment) => {
							return (
								<div key={comment.id} className='review'>
									{comment.id}
									{`${comment.body.slice(0, 90)}...`}
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/comments');
	const arr = await res.json();
	return {
		props: {
			data: arr,
		},
	};
}

export default review;
