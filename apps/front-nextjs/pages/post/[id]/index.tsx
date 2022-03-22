import styled from 'styled-components';

interface PostProps {
  postId: number;
}

const HomeLink = styled.a`
  color: blue;
`;

export function Index({ postId }: PostProps) {

  return (
    <>
      <HomeLink href="/index">GO HOME</HomeLink>
      <div>
        postId: {postId}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3333/api/data/${context.params.id}`);
  const { value } = await res.json();

  // Pass data to the page via props
  return { props: { postId: value } as PostProps };
}

export default Index;
