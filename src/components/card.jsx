import React from 'react'

const UserCard = ({ data }) => {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center p-6">
          <img className="h-24 w-24 rounded-full mx-auto" src={data.avatar_url} alt={`${data.login} avatar`} />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">{data.name}</h2>
          <p className="text-gray-600">@{data.login}</p>
          <p className="mt-2 text-gray-700">{data.bio || "No bio available"}</p>
          <div className="mt-4">
            <a href={data.html_url} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
          <div className="mt-4">
            <a href={data.blog} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">{data.blog}</a>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">Followers</p>
              <p className="font-semibold text-gray-900">{data.followers}</p>
            </div>
            <div>
              <p className="text-gray-700">Following</p>
              <p className="font-semibold text-gray-900">{data.following}</p>
            </div>
            <div>
              <p className="text-gray-700">Public Repos</p>
              <p className="font-semibold text-gray-900">{data.public_repos}</p>
            </div>
            <div>
              <p className="text-gray-700">Public Gists</p>
              <p className="font-semibold text-gray-900">{data.public_gists}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <p className="text-gray-600 text-sm">Location: {data.location || "Not available"}</p>
          <p className="text-gray-600 text-sm">Email: {data.email || "Not available"}</p>
          <p className="text-gray-600 text-sm">Company: {data.company || "Not available"}</p>
          <p className="text-gray-600 text-sm">Twitter: {data.twitter_username ? `@${data.twitter_username}` : "Not available"}</p>
        </div>
      </div>
    );
  };
  
export default UserCard