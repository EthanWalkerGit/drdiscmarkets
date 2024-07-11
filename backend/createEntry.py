import json
loop = '1'

while(loop == '1'):
  name = input("name: ")
  artist = input("artist: ")
  genres = input("genres (separated by comma): ").split(',')
  price = input("price: ")
  cover = input("cover: ")
  data = {
      "name": name,
      "artist": artist,
      "genres": [genre.strip() for genre in genres],  # remove leading/trailing spaces
      "price": price,
      "cover": cover
  }
  print(json.dumps(data, indent=4))
  loop = input("Make a new entry? Enter 1: ")