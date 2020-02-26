import React from 'react'
import Link from 'next/link'
import {harnessServerProps, Form} from '@blitzjs/core'
import {PostsController} from '../../../controllers/posts'

export const unstable_getServerProps = harnessServerProps(PostsController)

export default Page
function Page({post}) {
  return (
    <div className="container flex flex-col items-center py-20 max-w-md mx-auto px-2">
      <h1 className="text-3xl">{post.title}</h1>

      <Form action={`/api/posts/${post.id}`} method="PATCH" className="min-w-full">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            name="title"
            defaultValue={post.title}
            className="disabled:bg-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <input
            name="content"
            defaultValue={post.content}
            className="disabled:bg-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex justify-end">
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <a className="text-blue-700 py-1 px-2 rounded">Cancel</a>
          </Link>
          <button className="ml-2 bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded">Save</button>
        </div>
      </Form>
    </div>
  )
}