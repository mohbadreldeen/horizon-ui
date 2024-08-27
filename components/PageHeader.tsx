import React from 'react'

import PageTitle from './PageTitle'
import SearchBar from './SearchBar'
const PageHeader = () => {
    return (
        <div className="flex flex-row justify-between items-end max-lg:flex-col max-lg:w-full max-lg:justify-normal max-lg:items-start max-lg:gap-5">
            <PageTitle />
            <SearchBar />
        </div>
    )
}

export default PageHeader
