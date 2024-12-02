import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
const data = useLoaderData()

    return (
        <div className="text-center bg-white text-gray-900 p-6 rounded-lg shadow-lg mx-auto max-w-2xl border border-gray-300">
            <h1 className="text-4xl font-bold mb-4 text-orange-600">GitHub Profile</h1>
            <div className="flex flex-col items-center space-y-6">
                <img 
                    src={data.avatar_url} 
                    alt="GitHub Avatar" 
                    className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-md" 
                />
                <h2 className="text-2xl font-semibold mt-4 text-gray-800">{data.name || 'User Not Found'}</h2>
                <p className="text-lg text-gray-600">{data.bio || 'No bio available'}</p>
                <div className="mt-4">
                    <p className="text-xl text-gray-800">Followers: <span className="font-bold text-orange-500">{data.followers}</span></p>
                    <p className="text-xl text-gray-800">Following: <span className="font-bold text-orange-500">{data.following}</span></p>
                    <p className="text-xl text-gray-800">Repos: <span className="font-bold text-orange-500">{data.public_repos}</span></p>
                </div>

                {/* Hardcoded Organization and Role */}
                <div className="mt-4 text-lg text-gray-800">
                    <p className="font-semibold">Organization:</p>
                    <p className="text-orange-500">Saral Startup School</p>
                    <p className="mt-2 text-gray-600">Role: <span className="font-bold text-orange-500">Full Stack Developer (Apprenticeship)</span></p>
                </div>

                <a 
                    href={data.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Visit GitHub Profile
                </a>
            </div>
        </div>
    );
}

export default Github;

export const githubApiCall = async ()=>{
    const response = await fetch('https://api.github.com/users/iamnabeelrahman')
    return response.json()
}
