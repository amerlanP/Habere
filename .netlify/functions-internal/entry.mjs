import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3746c4d4.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_c9e4c781.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_20ee519e.mjs');
const _page1  = () => import('./chunks/index_fa13d90d.mjs');
const _page2  = () => import('./chunks/dashboard_9d8605bb.mjs');
const _page3  = () => import('./chunks/register_34d32b4d.mjs');
const _page4  = () => import('./chunks/account_372108ce.mjs');
const _page5  = () => import('./chunks/signin_527d96aa.mjs');
const _page6  = () => import('./chunks/social_98515800.mjs');
const _page7  = () => import('./chunks/home_019f000d.mjs');
const _page8  = () => import('./chunks/getHabits_9e1e0a95.mjs');
const _page9  = () => import('./chunks/create_2f011bef.mjs');
const _page10  = () => import('./chunks/register_1df212e6.mjs');
const _page11  = () => import('./chunks/signout_4c1e88ac.mjs');
const _page12  = () => import('./chunks/signin_4c113522.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/dashboard.astro", _page2],["src/pages/register.astro", _page3],["src/pages/account.astro", _page4],["src/pages/signin.astro", _page5],["src/pages/social.astro", _page6],["src/pages/home.astro", _page7],["src/pages/api/habits/getHabits.ts", _page8],["src/pages/api/habits/create.ts", _page9],["src/pages/api/auth/register.ts", _page10],["src/pages/api/auth/signout.ts", _page11],["src/pages/api/auth/signin.ts", _page12]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
