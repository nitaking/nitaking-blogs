import { Member } from '@src/types';

export const members: Member[] = [
  {
    id: 'nitaking',
    nickname: 'nitaking',
    realName: '仁田脇理史',
    bio: 'フロントが好きなフルスタック気味エンジニア',
    avatarSrc: '/avatars/nitaking.jpg',
    sources: [
      'https://note.com/brunon/rss',
      'https://zenn.dev/nitaking/feed',
      'https://qiita.com/nitaking/feed',
      'https://sa-nitawaki.medium.com/feed',
    ],
    // includeUrlRegex: 'note.com',
    twitterUsername: 'nitaking_',
    githubUsername: 'nitaking',
    websiteUrl: 'blog-nitaking-dev.netlify.app',
  },
].sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
