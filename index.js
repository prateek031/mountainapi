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
        "imgurl": "https://images.unsplash.com/photo-1610476840592-0743ba8caec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
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
        "location": "denali",
        "country": " North America",
        "imgurl": "https://images.unsplash.com/photo-1594987121044-d21eb351dc22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 2,
        "price": 10,
        "discription":"Mount McKinley, its former official name) is the highest mountain peak in North America, with a summit elevation of 20,310 feet (6,190 m) above sea level. It is the tallest mountain in the world from base-to-peak on land, measuring 18,000 ft (5,500 m),[8] and Earth's highest mountain north of 43°N. With a topographic prominence of 20,194 feet (6,155 m) and a topographic isolation of 4,621.1 miles (7,436.9 km),[3] Denali is the third most prominent and third-most isolated peak on Earth, after Mount Everest and Aconcagua. Located in the Alaska Range in the interior of the U.S. state of Alaska, Denali is the centerpiece of Denali National Park and Preserve.An aerial photo Denali in 1987The Koyukon people who inhabit the area around the mountain have referred to the peak as Denali for centuries. In 1896, a gold prospector named it Mount McKinley in support of then-presidential candidate William McKinley; that name was the official name recognized by the federal government of the United States from 1917 until 2015. In August 2015, 40 years after Alaska had done so, the United States Department of the Interior announced the change of the official name of the mountain to Denali.In 1903, James Wickersham recorded the first attempt at climbing Denali, which was unsuccessful. In 1906, Frederick Cook claimed the first ascent, but this ascent is unverified and its legitimacy questioned. The first verifiable ascent to Denali's summit was achieved on June 7, 1913, by climbers Hudson Stuck, Harry Karstens, Walter Harper, and Robert Tatum, who went by the South Summit. In 1951, Bradford Washburn pioneered the West Buttress route, considered to be the safest and easiest route, and therefore the most popular currently in use.On September 2, 2015, the U.S. Geological Survey announced that the mountain is 20,310 feet (6,190 m) high,[1] not 20,320 feet (6,194 m), as measured in 1952 using photogrammetry."
    },
       
   


];
app.listen(3000, () => {
    console.log("connected ")
});
app.get('/', (req, res) => {
    res.status(200).json( mountainData);
})
