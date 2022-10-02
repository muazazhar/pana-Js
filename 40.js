function make_album(artist, album, tracks) {
  return { artist, album, tracks: tracks || null };
}
console.log(make_album("queen", "bohemian"));
console.log(make_album("queen", "bohemian", 5));
