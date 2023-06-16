import { createRouter, createWebHistory } from 'vue-router'

// import HomeUser from './partial/pages/HomeUser.vue'
import Home from './pages/Home.vue'


const history = createWebHistory()
console.log('history: ', history)

const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		// {
		// 	path: '/menu/:id',
		// 	name: 'menu',
		// 	component: MenuUser,
		// },
	],
})

export { router }