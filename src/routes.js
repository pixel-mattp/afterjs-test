import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
    {
        path: '/',
        exact: true,
        component: asyncComponent({
            loader: () =>
                import(/* webpackChunkName: "home" */ 'common/containers/Home'),
            chunkName: 'home',
        }),
    },
];
