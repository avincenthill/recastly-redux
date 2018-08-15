var searchYouTube = ({ key, query, max = 5 }, callback = e => e) => {
  console.log('key', key, 'query', query, 'max', max);
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(e => {
      // console.log(e);
      responseJSON.error.errors.forEach(err => console.error(err));
    });
};

export default searchYouTube;
