export default function () {

  this.namespace = '/api';

  //single data
  this.get('/posts/:id', function (db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'posts',
        id: id,
        attributes: db.posts.find(id)
      }
    };
  });

  //collection of data
  this.get('/posts', function (db, request) {
    return {
      data: db.posts.map(attrs => (
      {type: 'posts', id: attrs.id, attributes: attrs}
      ))
    };
  });

}
