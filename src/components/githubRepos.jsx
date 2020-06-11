import React from 'react'

import Repo from './repo'

export default () => (
    <div className="flex flex-wrap justify-center p-5 bg-teal-600 text-white">
        <h1 className="text-3xl w-full mb-3 font-bold">GitHub Repos</h1>
        <Repo/>
        <Repo/>
        <Repo/>
        <Repo/>
    </div>
)