import { FC } from 'react'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta'

import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<Meta title="Пользователи">
			<AdminNavigation />
			<Heading title="Пользователи" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				headerItems={['Email', 'Date register']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default UserList
