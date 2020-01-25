// "BlogPosts": [
//   {
//     "BlogId": 1,
//     "LanguageId": 1,
//     "createdAt": "2019-12-14T15:12:55.830Z",
//     "deletedAt": null,
//     "description": "description gibi sanki",
//     "id": 1,
//     "text": "aciklama bu laaaaan",
//     "title": "Test",
//     "updatedAt": "2019-12-14T15:12:55.830Z"
//   }
// ],
//   "createdAt": "2019-12-14T15:12:55.805Z",
//   "deletedAt": null,
//   "id": 1,
//   "imageUrl": null,
//   "internalName": "test",
//   "updatedAt": "2019-12-14T15:12:55.805Z"

export const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    ellipsis: true,
    sorter: true,
    width: 80,
    fixed: 'left',
    key: 'id'
  },
  {
    title: 'Blog posts',
    dataIndex: 'BlogPosts',
    ellipsis: true,
    sorter: true,
    render: posts => posts.length
  },
  { title: 'imageUrl', dataIndex: 'fullName', ellipsis: true, sorter: true },
  {
    title: 'internalName',
    dataIndex: 'birthDate',
    ellipsis: true,
    sorter: true
  }
]
