import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import SubHeading from '@/ui/heading/SubHeading'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie/movie.service'

import { getMovieUrl } from '@/configs/url.config'

import styles from '../Admin.module.scss'

const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Самый популярный фильм в админке',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)

	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="Самый популярный фильм" />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h3>Открыто {movie.countOpened} раз</h3>
						<Link href={getMovieUrl(movie.slug)}>
							<a>
								<Image
									width={285}
									height={176}
									src={movie.bigPoster}
									alt={movie.title}
									className={styles.image}
									unoptimized
								/>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovie
