export interface ListProps {
  list: { id: number }[];
}
export const List = ({ list }: ListProps) => {
  const getHref = (id: number) => `/post/${id}`;

  return (
    <ul>
      {list.map((listItem) => (
        <li key={listItem.id}>
          <a href={getHref(listItem.id)}>{listItem.id}</a>
        </li>
      ))}
    </ul>
  );
};
