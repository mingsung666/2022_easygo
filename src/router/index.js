// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Home from '../pages/Home/Home'
import Journey from '../pages/Journey/Journey'
import Comm from '../pages/Comm/Comm'
import Budget from '../pages/Budget/Budget'
import BudgetList from '../pages/Budget/BudgetList/BudgetList'
import BudgetMember from '../pages/Budget/BudgetMember/BudgetMember'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path: '/home',
			component: Home,
		},
        {
            path: '/',
            redirect: '/home'
        },
		{
			path:'/journey',
			component: Journey
		},
		{
			path:'/comm',
			component: Comm
		},
		{
			path:'/budget',
			component: Budget,
			children:[
				{
					path:'/budget/budgetList',
					component: BudgetList,
				},
				{
					path:'/budget/budgetMember',
					component: BudgetMember,
				},
				{
					path: '',
					redirect: '/budget/budgetList'
				},
			]
		},
	]
})
