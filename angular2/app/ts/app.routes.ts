import { provideRouter, RouterConfig } from '@angular/router'; 
import { Homepage1 } from '/app/js/pages/Homepage/homepage1.component';
import { Menu2 } from '/app/js/pages/Menu/menu2.component';
import { OrdersPayments3 } from '/app/js/pages/OrdersPayments/orderspayments3.component';
import { Rewards4 } from '/app/js/pages/Rewards/rewards4.component';
import { Campaigns5 } from '/app/js/pages/Campaigns/campaigns5.component';
import { ReservationsWaitlist6 } from '/app/js/pages/ReservationsWaitlist/reservationswaitlist6.component';


const routes: RouterConfig = [
	{
		path: '',
		component: Homepage1
	},
	{
		path: 'menu',
		component: Menu2
	},
	{
		path: 'orders',
		component: OrdersPayments3
	},
	{
		path: 'rewards',
		component: Rewards4
	},
	{
		path: 'campaigns',
		component: Campaigns5
	},
	{
		path: 'reservations',
		component: ReservationsWaitlist6
	},
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];