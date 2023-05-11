import Head from 'next/head';
import { GetServerSideProps } from 'next';


type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};


type ReviewProps = {
  data: Comment[];
};


const Review: React.FC<ReviewProps> = ({ data }) => {
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

	
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const arr: Comment[] = await res.json();


  return {
    props: {
      data: arr,
    },
  };
};

export default Review;