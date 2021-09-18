import { PostItem } from '@src/types';
import { members } from '@members';
import posts from '@.contents/posts.json';

export function getMemberByName(name: string) {
  return members.find((member) => member.nickname === name);
}

export function getMemberById(id: string) {
  return members.find((member) => member.id === id);
}

export function getMemberPostsById(id: string) {
  return (posts as PostItem[]).filter((item) => item.authorId === id);
}
export function getMemberPostsByName(name: string) {
  return (posts as PostItem[]).filter((item) => item.authorName === name);
}
export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || 'blog';
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${hostname}`;
}
export function getAboutPath(id: string) {
  return `/about/${encodeURIComponent(id)}`;
}
