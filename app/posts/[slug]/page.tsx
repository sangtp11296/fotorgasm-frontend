
import React from 'react'
import { FetchedPost } from '@/types/Posts.type';
import { BlogPage } from '@/components/Blog/BlogPage';

import type { Metadata, ResolvingMetadata } from 'next'
import { VideoPage } from '@/components/Video/VideoPage';
import { HomeButton } from '@/components/ButtonIcon/BackButton';
 
type Props = {
  params: { slug: string }
}
 
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  if(params.slug  !== 'undefined'){
    // read route params
    const slug = params.slug;
    // fetch data post
    const res = await fetch(`https://4esg1vvhi3.execute-api.ap-southeast-1.amazonaws.com/dev/post/${slug}`, {
      method: "GET",
      cache: 'no-store'
    })
    const data = await res.json();
    const post: FetchedPost = data.post;
  
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    
    return {
      title: `${post.title}: ${post.author}`,
      description: `${post.title} | ${post.author}`,
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
  } else return {}
}
export default async function PostPage ({ params }: { params: { slug: string } }){
  if(params.slug !== 'undefined'){
    // read route params
    const slug = params.slug;
    // Get Post and Cover
    const res = await fetch(`https://4esg1vvhi3.execute-api.ap-southeast-1.amazonaws.com/dev/post/${slug}`, {
        method: "GET",
        cache: 'no-store'
      })
    const data = await res.json();
    const post: FetchedPost = data.post;
    if (post.format === 'blog'){
      const fetchCover = await fetch('https://4esg1vvhi3.execute-api.ap-southeast-1.amazonaws.com/dev/get-file', {
          method: "POST",
          body: JSON.stringify({
            key: post.coverKey,
        }),
        cache: 'no-store'
      });
      const cover = await fetchCover.json();
      const coverUrl = cover.presignedUrl;
      return (
        <>
          <HomeButton/>
          {( post && coverUrl) && <BlogPage post={post} cover={coverUrl}/>}
        </>
      )
    }
    else if (post.format === 'video'){
      const videoUrl = [];
      const highVideo = await fetch('https://4esg1vvhi3.execute-api.ap-southeast-1.amazonaws.com/dev/get-file', {
          method: 'POST',
          body: JSON.stringify({
              key: post.videoSrc?.high,
          }),
          cache: 'no-store'
      })
      const highData = await highVideo.json();
      videoUrl.push(highData.presignedUrl);
  
      const mediumVideo = await fetch('https://4esg1vvhi3.execute-api.ap-southeast-1.amazonaws.com/dev/get-file', {
          method: 'POST',
          body: JSON.stringify({
              key: post.videoSrc?.medium,
          }),
          cache: 'no-store'
      })
      const mediumData = await mediumVideo.json();
      videoUrl.push(mediumData.presignedUrl);
  
      const lowVideo = await fetch('https://4esg1vvhi3.execute-api.ap-southeast-1.amazonaws.com/dev/get-file', {
          method: 'POST',
          body: JSON.stringify({
              key: post.videoSrc?.low,
          }),
          cache: 'no-store'
      })
      const lowData = await lowVideo.json();
      videoUrl.push(lowData.presignedUrl);
      const fetchCover = await fetch('https://4esg1vvhi3.execute-api.ap-southeast-1.amazonaws.com/dev/get-file', {
          method: "POST",
          body: JSON.stringify({
            key: post.coverKey,
        }),
        cache: 'no-store'
      });
      const cover = await fetchCover.json();
      const coverUrl = cover.presignedUrl;
      return (
        <>
          <HomeButton/>
          {( post && videoUrl) && <VideoPage post={post} videoUrl={videoUrl} coverUrl={coverUrl}/>}
        </>
      )
    }
  }
}
