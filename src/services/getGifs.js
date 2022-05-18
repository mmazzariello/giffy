const apiKey = "IxNOCpTwTtXz4uAS81C6mp8lZ7Tgz1Xi";

export default function getGifs({ keyword = "panda" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          // console.log("0", id);
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        // console.log(response.id);
        return gifs;
      }
    });
}
