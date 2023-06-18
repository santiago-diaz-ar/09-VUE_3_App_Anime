const getAnime = async () => {
  let animeArray = await fetch(
    "https://kitsu.io/api/edge/trending/anime?limit=15"
  ).then((res) => res.json());

  let animeObj = [];

  animeArray.data.forEach((anime) => {
    animeObj.push({
      id: anime.id,
      name: anime.attributes.slug,
      image: anime.attributes.posterImage.original,
      description: anime.attributes.description,
    });
  });
  return animeObj;
};

export default getAnime;
