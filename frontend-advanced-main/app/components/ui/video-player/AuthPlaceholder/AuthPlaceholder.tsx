import { FC } from 'react'

import styles from './AuthPlaceholder.module.scss'
import AuthButton from './AuthButton'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>Вы должны войти в систему, чтобы начать просмотр</div>
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}

export default AuthPlaceholder
