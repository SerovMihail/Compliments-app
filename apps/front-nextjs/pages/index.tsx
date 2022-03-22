import styled from 'styled-components';
import { List } from '../components/List';

const StyledPage = styled.div`
  .page {
  }
`;

const posts = [{id: 1}, {id: 2}, {id: 3}];

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      You are at home page

      <List list={posts} />

    </StyledPage>
  );
}

export default Index;
