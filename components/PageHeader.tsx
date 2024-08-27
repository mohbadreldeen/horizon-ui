import React from 'react'

import PageTitle from './PageTitle'
import SearchBar from './SearchBar'
const PageHeader = () => {
    return (
        <div className="flex flex-row justify-between items-end">
            <PageTitle />
            <SearchBar />
        </div>
    )
}

export default PageHeader
