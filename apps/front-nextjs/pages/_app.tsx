import { AppProps } from 'next/app';
import './styles.css';
import { MainLayout } from '../components/MainLayout';

export interface ListItem {
  id: number;
}

function List({ list }: { list: ListItem[] }): JSX.Element {
  return (
    <ul>
      {list.map(listItem => <li key={listItem.id}>{listItem.id}</li>)}
    </ul>
  );
}

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default CustomApp;
