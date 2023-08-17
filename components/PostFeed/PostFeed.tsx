'use client'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './PostFeed.module.css'
import { Photo } from '@/types/Photos.type'
import BlogPost from '../Blog/BlogPost'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Video } from '@/types/Videos.type'
import VideoPost from '../Video/VideoPost'
import { getPosts } from '@/utils/getPosts'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

interface Props {
  data: Array<Photo|Video>
}

const PostFeed: React.FC<Props> = ({ data }) => {

  const [posts, setPosts] = useState<(Photo | Video)[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2)
  const session = useSession()
  console.log(session)
  useEffect(() => {
    setPosts(data);
  }, [])

  // Get more photos
  const getMorePhotos = async () => {
    try{
      const res: Promise<(Photo | Video)[]> = getPosts('rock', page, 5);
      const data: (Photo | Video)[] = await res;
      if (data.length > 0){
        setPosts((prevPhotos) => [...prevPhotos, ...data]);
        setPage((prevPage) => prevPage + 1)
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error('Error fetching photos:', err);
    }
  }

  // Focus to chosen post
  const handleClick = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const { top, height } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPosition = top + window.scrollY - (windowHeight / 2) + (height / 2);
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, []);
  
  return (
    <div className={styles.postFeed}>
      <InfiniteScroll 
        dataLength={posts.length}
        next={getMorePhotos}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>Nothing more to show</h4>}
        style={{ overflow: 'hidden' }}
        scrollThreshold={0.9}
      >
        <div className={styles.masonryContainer}>
          {
            posts.map((post) => {
              if (post.type === 'photo'){
                const photo = post as Photo; // Type assertion
                return(
                  <Link key={photo.id} onClick={(e) => handleClick(e, photo.id)} href='/posts/abc' className={`${styles.postWrapper} ${photo.width < photo.height ? styles.portrait : (photo.width > photo.height ? styles.landscape : styles.square)}`}>
                    <BlogPost data={photo}/>
                  </Link>
                )
              } else {
                const video = post as Video; // Type assertion
                return (
                  <Link key={video.id} onClick={(e) => handleClick(e, `${video.id}`)} href={``} className={`${styles.postWrapper} ${video.width < video.height ? styles.portrait : (video.width > video.height ? styles.landscape : styles.square)}`}>
                    <VideoPost video={video}/>
                  </Link>
                )
              }
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default PostFeed