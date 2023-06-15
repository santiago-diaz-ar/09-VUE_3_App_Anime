import axios from "axios";

const getAnime = async () => {
  try {
    const response = await axios.get(
      '"https://kitsu.io/api/edge/trending/anime?limit=10"'
    );

    let datos = [];

    response.data.forEach((anime) => {
      datos.push({
        id: anime.id,
        attributes: anime.attributes,
        image: anime.posterImage.original,
      });
    });

    return datos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAnime;
