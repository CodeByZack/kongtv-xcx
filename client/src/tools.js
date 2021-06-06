export const noop = () => {};

export const decodeJuJi = (playUrls) => {
  return playUrls
    .split("$$$")
    .map((diffSource) => {
      let jujiArr = diffSource.split("#");
      jujiArr = jujiArr.map((juji) => {
        const [text, link] = juji.split("$");
        return { text, link };
      });
      return jujiArr;
    })
    .filter((arr) => arr[0].link.endsWith(".m3u8"));
};
