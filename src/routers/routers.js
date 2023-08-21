import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

import { HeaderLayout } from '~/layouts';
const publicRoutes = [
    { path: config.routes.home, page: Home },
    { path: config.routes.following, page: Following },
    { path: config.routes.profile, page: Profile },
    { path: config.routes.live, page: Live },
    { path: config.routes.upload, page: Upload, layout: HeaderLayout },
    { path: config.routes.search, page: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
