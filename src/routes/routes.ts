// Library import
import { lazy } from 'react';

// File import
import { Route } from './routes.types';
import { urls } from './urls';

/**
 * ==========================================
 * Page components
 * ==========================================
 */
const MemberList = lazy(() => import('views/pages').then(({ MemberList }) => ({ default: MemberList })));

/**
 * Routes
 */
export const routes: Route = Object.freeze({
	/**
	 * ==========================================
	 * User routes
	 * ==========================================
	 */
	MemberList: {
		path: urls.MEMBER_LIST(),
		component: MemberList,
	},
});
