export const hashtags = (text) => {
  const toArray = text.trim().split(" ")
   return (toArray.filter((hashtag) => hashtag[0] == "#"));
}
