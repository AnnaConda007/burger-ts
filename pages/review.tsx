import Head from 'next/head';
import { GetServerSideProps } from 'next';


type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};// создается алиас объекта 

type ReviewProps = {
  data: Comment[];
  //массив из объектов типа Comment
};


const Review: React.FC<ReviewProps> = ({ data }) => { // Review ПРИНИМАЕТ компонент ReviewProps, то есть массив объектов
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

export const getServerSideProps: GetServerSideProps<ReviewProps> = async () => {
  //????? тут в GetServerSideProps  часть<ReviewProps>, указыввает на то, что функция возвращает
  // но в const Review: React.FC<ReviewProps>, запись такая же, но указывает на то, что компонент ПРИНИМАЕТ
  // то есть запсь общая - _название:типЭлемента<возвращает/принимает>.Возвращает или принимает, зависит от самого элемента? То есть компонент всегда принимает, функция возвращает.
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const arr: Comment[] = await res.json();  
  return {
    props: {
      data: arr,
    },
  };
};

export default Review;