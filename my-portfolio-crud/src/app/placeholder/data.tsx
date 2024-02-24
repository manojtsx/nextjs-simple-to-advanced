interface Project {
    id: number,
    title : string,
    description: string,
    imageUrl : string
}
export const projects:Project[] = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description for Project 1',
        imageUrl: '/image1.png',
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Description for Project 2',
        imageUrl: '/image2.png',
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'Description for Project 3',
        imageUrl: '/image3.png',
      },
]