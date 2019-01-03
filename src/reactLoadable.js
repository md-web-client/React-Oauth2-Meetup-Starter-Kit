import Loadable from 'react-loadable';
import Loading from './components/Loading';

export const App = Loadable({
    loader: () => import('./components/App'),
    loading: Loading,
});