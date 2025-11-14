import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHtml } from './markdown'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMetadata {
  title: string
  date: string
  tags?: string[]
  categories?: string[]
  slug: string
}

export interface Post extends PostMetadata {
  content: string
  htmlContent?: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export async function getPostBySlug(slug: string, includeHtml: boolean = false): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const post: Post = {
      slug,
      title: data.title || '',
      date: data.date || '',
      tags: data.tags || [],
      categories: data.categories || [],
      content,
    }

    if (includeHtml) {
      post.htmlContent = await markdownToHtml(content)
    }

    return post
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostBySlugSync(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      tags: data.tags || [],
      categories: data.categories || [],
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlugSync(slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  return posts
}

export function getPostsByMonth(): Record<string, Post[]> {
  const posts = getAllPosts()
  const grouped: Record<string, Post[]> = {}

  posts.forEach((post) => {
    const date = new Date(post.date)
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    
    if (!grouped[monthKey]) {
      grouped[monthKey] = []
    }
    grouped[monthKey].push(post)
  })

  return grouped
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()
  
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag))
  })
  
  return Array.from(tagSet).sort()
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categorySet = new Set<string>()
  
  posts.forEach((post) => {
    post.categories?.forEach((category) => categorySet.add(category))
  })
  
  return Array.from(categorySet).sort()
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.tags?.includes(tag))
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.categories?.includes(category))
}

