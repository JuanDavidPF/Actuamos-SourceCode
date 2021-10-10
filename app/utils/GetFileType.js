export const GetFileType = (link) => {
  if (link.includes(".mp3")) return "audio";
  else if (link.includes(".mp4")) return "video";
};
