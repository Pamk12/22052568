// Mock data for the application
export const mockUsers = [
  {
    id: 1,
    username: 'johndoe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    postCount: 42,
    bio: 'Digital marketing specialist with a passion for content creation'
  },
  {
    id: 2,
    username: 'janedoe',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    postCount: 38,
    bio: 'Travel enthusiast and photographer'
  },
  {
    id: 3,
    username: 'mikesmith',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    postCount: 35,
    bio: 'Software developer and tech blogger'
  },
  {
    id: 4,
    username: 'sarahlee',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    postCount: 31,
    bio: 'Fitness coach and nutrition expert'
  },
  {
    id: 5,
    username: 'alexwilson',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    postCount: 27,
    bio: 'Graphic designer and illustrator'
  },
  // 5 additional users
  {
    id: 6,
    username: 'emilyjohnson',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    postCount: 45,
    bio: 'Food blogger and culinary explorer'
  },
  {
    id: 7,
    username: 'davidbrown',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    postCount: 33,
    bio: 'Music producer and DJ'
  },
  {
    id: 8,
    username: 'oliviagarcia',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    postCount: 29,
    bio: 'Fashion designer and style influencer'
  },
  {
    id: 9,
    username: 'williamtaylor',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    postCount: 36,
    bio: 'Environmental scientist and sustainability advocate'
  },
  {
    id: 10,
    username: 'sophiamartinez',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    postCount: 41,
    bio: 'Mental health counselor and wellness coach'
  }
];

export const mockPosts = [
  {
    id: 1,
    title: 'The Future of Social Media Marketing',
    content: 'Social media continues to evolve at a rapid pace. Here are some trends to watch...',
    image: 'https://source.unsplash.com/random/800x600/?marketing',
    createdAt: '2023-05-15T10:30:00Z',
    commentCount: 24,
    likeCount: 87,
    user: mockUsers[0]
  },
  {
    id: 2,
    title: 'My Trip to Bali',
    content: 'Just returned from an amazing vacation in Bali. The beaches were incredible!',
    image: 'https://source.unsplash.com/random/800x600/?bali',
    createdAt: '2023-05-14T14:20:00Z',
    commentCount: 18,
    likeCount: 65,
    user: mockUsers[1]
  },
  {
    id: 3,
    title: 'Getting Started with React Hooks',
    content: 'React Hooks have changed how we build components. Here\'s a beginner\'s guide...',
    image: 'https://source.unsplash.com/random/800x600/?programming',
    createdAt: '2023-05-13T09:15:00Z',
    commentCount: 32,
    likeCount: 112,
    user: mockUsers[2]
  },
  {
    id: 4,
    title: '10 Quick Workout Routines',
    content: 'No time for a full gym session? Try these quick 10-minute workouts instead!',
    image: 'https://source.unsplash.com/random/800x600/?fitness',
    createdAt: '2023-05-12T16:45:00Z',
    commentCount: 15,
    likeCount: 54,
    user: mockUsers[3]
  },
  {
    id: 5,
    title: 'Design Principles Everyone Should Know',
    content: 'Understanding these basic design principles will improve all your creative work...',
    image: 'https://source.unsplash.com/random/800x600/?design',
    createdAt: '2023-05-11T11:30:00Z',
    commentCount: 21,
    likeCount: 76,
    user: mockUsers[4]
  },
  // 5 additional posts
  {
    id: 6,
    title: 'Farm-to-Table Recipes for Summer',
    content: 'Explore these delicious recipes using fresh, seasonal ingredients from local farmers...',
    image: 'https://source.unsplash.com/random/800x600/?food',
    createdAt: '2023-05-10T13:45:00Z',
    commentCount: 29,
    likeCount: 93,
    user: mockUsers[5]
  },
  {
    id: 7,
    title: 'Electronic Music Production Tips',
    content: 'Want to create better electronic tracks? Here are my top production techniques...',
    image: 'https://source.unsplash.com/random/800x600/?music',
    createdAt: '2023-05-09T15:20:00Z',
    commentCount: 27,
    likeCount: 81,
    user: mockUsers[6]
  },
  {
    id: 8,
    title: 'Summer Fashion Trends 2023',
    content: 'These are the hottest styles and colors you\'ll be seeing everywhere this summer...',
    image: 'https://source.unsplash.com/random/800x600/?fashion',
    createdAt: '2023-05-08T09:10:00Z',
    commentCount: 34,
    likeCount: 128,
    user: mockUsers[7]
  },
  {
    id: 9,
    title: 'Sustainable Living: Small Changes, Big Impact',
    content: 'You don\'t need to overhaul your entire lifestyle to be more eco-friendly. Start with these simple steps...',
    image: 'https://source.unsplash.com/random/800x600/?sustainability',
    createdAt: '2023-05-07T11:25:00Z',
    commentCount: 42,
    likeCount: 105,
    user: mockUsers[8]
  },
  {
    id: 10,
    title: 'Mindfulness Practices for Daily Stress',
    content: 'Incorporate these mindfulness techniques into your daily routine to reduce stress and anxiety...',
    image: 'https://source.unsplash.com/random/800x600/?mindfulness',
    createdAt: '2023-05-06T14:15:00Z',
    commentCount: 31,
    likeCount: 97,
    user: mockUsers[9]
  }
];