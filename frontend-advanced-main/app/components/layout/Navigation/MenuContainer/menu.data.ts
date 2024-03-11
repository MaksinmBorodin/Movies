import { IMenu } from './menu.types'

const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Все жанры',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Новинки',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Популярные',
		},
	],
}

const userMenu: IMenu = {
	title: 'Основные',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
