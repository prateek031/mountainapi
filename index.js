const express = require("express");
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
)
const  mountainData = [
    {
        "id": 1,
        "location": "Pangong Lake",
        "country": "India",
        "imgurl": "https://e1.pxfuel.com/desktop-wallpaper/534/211/desktop-wallpaper-pangong-lake.jpg",
        "rating": 4,
        "price": 5,
        "discription": "In Ladakh, you never know what surprise nature has in store for you. Pangong Lake, situated at a height of almost 4,350m, is the world's highest saltwater lake. Its water, which seems to be dyed in blue, stand in stark contrast to the arid mountains surrounding it. Extending to almost 160km, one-third of the Pangong Lake lies in India and the other two-thirds in China.\n Pangong Lake, one of the most famous lakes in Leh Ladakh, derives its name from the Tibetan word, “Pangong Tso”, which means “high grassland lake”. You could spend hours in contemplation here, and still not have enough of its beauty. Pangong Lake is also known to change colors, appearing blue, green and red at different times. If you have decided to go on a trip to Ladakh anytime soon, don't forget to visit the Pangong Lake. The beauty which awaits you there cannot be described in words. It has to be seen, felt and absorbed within yourself."
    },
    {
        "id": 2,
        "location": "Mt.Fuji",
        "country": "Japan",
        "imgurl": "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "rating": 3,
        "price": 15,
        "discription": "Mount Fuji, Japanese Fuji-san, also spelled Fujisan, also called Fujiyama or Fuji no Yama, highest mountain in Japan. It rises to 12,388 feet (3,776 metres) near the Pacific Ocean coast in Yamanashi and Shizuoka ken (prefectures) of central Honshu, about 60 miles (100 km) west of the Tokyo-Yokohama metropolitan area. It is a volcano that has been dormant since its last eruption, in 1707, but is still generally classified as active by geologists. The mountain is the major feature of Fuji-Hakone-Izu National Park (1936), and it is at the centre of a UNESCO World Heritage site designated in 2013.\nThe origin of the mountain's name is uncertain. It first appears as Fuji no Yama in Hitachi no kuni fudoki (713 CE), an early government record. Among the several theories about the source of the name is that it is derived from an Ainu term meaning “fire,” coupled with san, the Japanese word for “mountain.” The Chinese ideograms (kanji) now used to write Fuji connote more of a sense of good fortune or well-being. In the present day the Japanese typically refer to the mountain as Fujisan, whereas foreign visitors tend to refer to the mountain somewhat incorrectly as Mount Fujiyama, which translates to “Mount Fuji mountain” in the Japanese language."
    },
        {
        "id": 3,
        "location": "Khan Tengri",
        "country": "CHN-KAZ",
        "imgurl": "https://c4.wallpaperflare.com/wallpaper/747/209/76/nature-landscape-mountains-trees-wallpaper-preview.jpg",
        "rating": 3,
        "price": 28,
        "discription": "Mt.Khan Tengri is a very beautiful and popular peak over 7000 m, which can be climbed in about 3 weeks and is a good training for 8000ers. Climbing the classic route from the North side (Northern Inylchek glacier) is the safest, as the risk of getting into an avalanche is minimized here. The route is equipped with fixed ropes and stairs. The entire route is clearly visible through a telescope from the base camp to the shoulder of Chapaev Peak. Climbers are constantly in the line of sight from the BC. Our rescue team is on duty and monitors the climbers from the base camp and intermediate camps. Also on the north side VHF radio communication is very stable throughout the route up to the Summit."
    },
        {
        "id": 4,
        "location": "Kirkjufell",
        "country": "peninsula",
        "imgurl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsunrise-mountain&psig=AOvVaw0koKz1aWtzJGfKwW83TNCU&ust=1692426579020000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIComLrK5YADFQAAAAAdAAAAABAE",
        "rating": 5,
        "price": 35,
        "discription": "Peaking at 463 meters, 1519 feet, Kirkjufell is an impressive landmark. Throughout the centuries, Kirkjufell's striking slopes have acted as a visual landmark for seafarers and travelers. More recently, it has attracted amateur and professional photographers alike.\nWithin walking distance from Kirkjufell is the serene and perfectly located waterfall Kirkjufellsfoss, or 'Church Mountain Falls', an excellent subject for photographers who can easily frame the mountain in the background. Despite its relatively diminutive height, Kirkjufellsfoss three steps, gentle flow, and dramatic differences between seasons make it as impressive as some of Iceland's larger waterfalls."
    },
        {
        "id": 5,
        "location": "Ben Nevis",
        "country": " Scotland",
        "imgurl": "https://wallpapers.com/images/hd/sunrise-iphone-rspkotgm3gdpjfmh.jpg",
        "rating": 2,
        "price": 10,
        "discription": "Ben Nevis Scottish Gaelic: Beinn Nibheis, Scottish Gaelic pronunciation:  is the highest mountain in Scotland, the United Kingdom and the British Isles. The summit is 1,345 metres (4,413 ft)[1] above sea level and is the highest land in any direction for 739 kilometres (459 miles).[3][a] Ben Nevis stands at the western end of the Grampian Mountains in the Highland region of Lochaber, close to the town of Fort William.The mountain is a popular destination, attracting an estimated 130,000 ascents a year,[4] around three-quarters of which use the Mountain Track from Glen Nevis.[5] The 700-metre (2,300 ft) cliffs of the north face are among the highest in Scotland, providing classic scrambles and rock climbs of all difficulties for climbers and mountaineers. They are also the principal locations in Scotland for ice climbing."
    },
        {
        "id": 6,
        "location": "Denali",
        "country": "North America",
        "imgurl": "https://w0.peakpx.com/wallpaper/326/660/HD-wallpaper-forest-green-mountains-nature-sun-sunlight-trees.jpg",
        "rating": 5,
        "price": 85,
        "discription": "Denali, also called Mount McKinley, is the tallest mountain in North America, located in south-central Alaska. With a peak that reaches 6,190 meters (20,310 feet) above sea level, Denali is the third-highest of the Seven Summits (the tallest peaks on all seven continents). Denali is about 210 kilometers (130 miles) north-northwest of Anchorage. Sixty million years ago, tectonic uplift pushed Earth's crust upward, forming Denali and the other Alaska Range mountains. Denali is the centerpiece of the Denali National Park and Preserve, which spans 2.4 million hectares (6 million acres) of land.\n“Denali” comes from Koyukon, a traditional Native Alaskan language, and means “the tall one.” This name had been used for many generations and was used by early non-Native researchers and naturalists. But in 1896, William A. Dickey, a prospector, began calling Denali “Mount McKinley,” in honor of William McKinley, a presidential candidate at the time. After McKinley became president and was later assassinated, Congress formally recognized the name in 1917, despite McKinley's tenuous ties to Alaska (he had never visited). But Native Alaskans, as well as locals of varied backgrounds, continued to call the mountain Denali. In 1975, a movement began to rename the mountain Denali, but it was blocked by politicians in Ohio, McKinley's home state. Finally, President Barack Obama and Secretary of the Interior Sally Jewell took action in 2015 to change the name back to Denali, which is now its official name.\n In 2015, Denali was measured using state-of-the-art equipment by the United States Geological Survey (USGS), who determined the definitive and now widely accepted height of the mountain: 6,190 meters (20,310 feet). However, a report released in 2013 gave its elevation as 6,168 meters (20,237 feet). Both measurements were different from the long-standing figure of 6,194 meters (20,320 feet) that had been circulated since the 1950s, when the mountain was first measured."
    },
   


];
app.listen(3000, () => {
    console.log("connected ")
});
app.get('/', (req, res) => {
    res.status(200).json( mountainData);
})