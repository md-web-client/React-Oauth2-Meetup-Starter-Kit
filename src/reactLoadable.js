import Loadable from 'react-loadable';
import Loading from './components/Loading';

export const App = Loadable({
    loader: () => import('./components/App'),
    loading: Loading,
});
export const Login = Loadable({
    loader: () => import('./components/Login'),
    loading: Loading,
});
export const Meetups = Loadable({
    loader: () => import('./components/Meetups'),
    loading: Loading,
});
export const MeetupDetails = Loadable({
    loader: () => import('./components/MeetupDetails'),
    loading: Loading,
});
