import { FC, useState } from 'react'
import { BookCard, Header, MainHeading } from '@/components'
import { useGetBooksQuery, useSearchBooksQuery } from '@/store/index.endpoints'
import { useDebounce } from '@/hooks/useDebounce'

const Home: FC = () => {
	const [searchBook, setSearchBook] = useState('')
	const debouncedSearchBook = useDebounce(searchBook, 400)
	const { data: search, isLoading } = useSearchBooksQuery(debouncedSearchBook)
	const { data } = useGetBooksQuery()

	return (
		<div>
			<Header />
			<div>
				<MainHeading
					searchBook={searchBook}
					setSearchBook={setSearchBook}
					searchData={search}
					isLoading={isLoading}
					numberOfBooks={data?.data?.length || 0}
				/>
				<div className='text-white'>Your task today</div>
			</div>
			<div className='grid grid-cols-3 mt-[72px] gap-10'>
				{data?.data?.map((book, idx) => (
					<BookCard key={idx} book={book} />
				))}
			</div>
		</div>
	)
}

export { Home }
