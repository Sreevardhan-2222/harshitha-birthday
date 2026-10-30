// All written content lives here so it can be edited without touching layout code.

const base = import.meta.env.BASE_URL

export interface Photo {
  src: string
  alt: string
  width: number
  height: number
  /** CSS object-position — keeps the face and outfit in frame when cropped. */
  position: string
  /** Optional display aspect ratio (w / h) for the full-size story frame. */
  frameRatio?: string
}

export const photos = {
  birthday: {
    src: `${base}images/birthday.jpg`,
    alt: 'Harshitha smiling in a navy-blue saree with gold detailing and a pink blouse, wearing sunglasses and traditional jewellery, standing in a verandah with greenery behind her.',
    width: 1278,
    height: 1536,
    position: '50% 22%',
  },
  storyStart: {
    src: `${base}images/story-start.jpg`,
    alt: 'Harshitha in a pastel pink outfit with silver embellishments, smiling and looking down, in a garden lit up at night.',
    width: 1187,
    height: 1536,
    // Anchored to the top and trimmed slightly so the screenshot's corner icon stays out of frame.
    position: '50% 0%',
    frameRatio: '1187 / 1420',
  },
  bangalore: {
    src: `${base}images/bangalore-day.jpg`,
    alt: 'Harshitha in a royal-blue saree, seated and smiling to the side, in front of green plants and a warm yellow wall.',
    width: 1149,
    height: 1536,
    position: '62% 45%',
  },
  movingOn: {
    src: `${base}images/moving-on.jpg`,
    alt: 'Harshitha in a red patterned outfit, looking back over her shoulder with a smile, in front of deep-red flowering foliage.',
    width: 1242,
    height: 1536,
    position: '58% 32%',
  },
} satisfies Record<string, Photo>

export const unlock = {
  // A string, not a number, so the leading zero survives.
  // This is only a visual gate — anyone can read it in the shipped JavaScript.
  code: '0411',
  wrong: 'Not quite. Try again.',
  success: 'A little something, made just for you.',
}

export const birthday = {
  eyebrow: 'For a day worth celebrating',
  greeting: 'Happy Birthday',
  name: 'Harshitha Bhat',
  message:
    'May your life always be filled with sunshine, beautiful moments, and countless reasons to smile.',
  quote:
    'Some people become beautiful memories without even knowing how much they mean to someone.',
  annotation: 'A little story, told with a sincere heart.',
  cta: "There's something I wanted to share",
  closedNote: 'Wishing you a wonderful year ahead. Have a lovely birthday.',
}

export const invitation = {
  eyebrow: 'A small note first',
  heading: 'Before You Continue',
  invitation: "Read only if you're interested in seeing yourself through my eyes.",
  body: "This is a collection of memories, little moments, and feelings from my side of the story. You don't have to read everything. I simply wanted to put these memories into words.",
  primary: 'Open stories..!?',
  secondary: 'Just leave me with the birthday wishes',
}

export const skipConfirm = {
  question: 'You really want to skip the story?',
  body: "It's okay if you do. The birthday wishes will always be yours.",
  yes: 'Yes, just the wishes',
  no: 'No, open the stories',
}

export const storyIndex = {
  heading: 'Three Little Chapters',
  subtitle: 'Some memories stay with us, even when life moves forward.',
}

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'note'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'break' }

export interface Chapter {
  id: 'how-it-started' | 'the-day-in-bangalore' | 'currently-moving-on'
  number: string
  theme: 'ch1' | 'ch2' | 'ch3'
  title: string
  subtitle: string
  photo: Photo
  photoNote: string
  blocks: Block[]
  closing?: string
}

export const chapters: Chapter[] = [
  {
    id: 'how-it-started',
    number: '01',
    theme: 'ch1',
    title: 'How It All Started',
    subtitle: 'A little moment that became a memory.',
    photo: photos.storyStart,
    photoNote: 'the beginning of it all',
    blocks: [
      { kind: 'note', text: 'Bangalore · July 2025' },
      {
        kind: 'p',
        text: 'Ever since I met you in Bangalore that day back in July 2025, I felt I could have at least talked to you. But as an introvert, that was out of the box for me.',
      },
      {
        kind: 'p',
        text: 'Later, I thought I would forget about you once I got back, because that was the first time we had met. But somehow, I searched for your ID, and I found it. You followed me back, which was logically normal.',
      },
      {
        kind: 'p',
        text: 'Until then, I would just click photos wherever I went. From then on, I started posting stories. You would watch them, which was normal for you, but it became a hobby for me.',
      },
      {
        kind: 'quote',
        text: "My daily routine became posting stories, seeing that you had viewed them, and feeling something I couldn't explain.",
      },
      { kind: 'note', text: 'Hanuman Jayanti — the first like' },
      {
        kind: 'p',
        text: 'I remember your first like on my story was on Hanuman Jayanti. Again, it was normal from your side, but I took it to the next level and gave my friends a treat that day. It became quite memorable.',
      },
      {
        kind: 'p',
        text: 'I know all this was normal. Anyone can like a story. But my heart said something else, and these feelings were happening for the first time for me. They only grew stronger as my friends started teasing me.',
      },
      { kind: 'break' },
      { kind: 'note', text: 'Madikeri · the hostel boys’ trip' },
      {
        kind: 'p',
        text: "Days passed, and you kept liking my stories. Then, during our hostel boys' trip to Madikeri, I was waiting to see your view, but you hadn't watched my story. I thought you were busy — until I saw a reel you had liked that was posted after my story, and suddenly my hopes fell.",
      },
      {
        kind: 'p',
        text: "I was a little sad that night. For the rest of the trip, I kept posting stories but didn't check the viewers, because I was scared of what I might see.",
      },
      {
        kind: 'p',
        text: 'After that, normal days went on. I came across a reel from a CSE Diaries page in which you were recording a video. Then I found another page called Team101, with a reel in which you appeared at the end.',
      },
      {
        kind: 'p',
        text: 'With encouragement from my friends, I tried messaging you. But our conversations never lasted long. I knew I was a stranger to you, so I would stop, choosing not to disturb you.',
      },
    ],
    closing:
      "If you've read this much, thank you. I never thought I could tell you all this, even indirectly. Maybe putting it into words gives me a little relief.",
  },
  {
    id: 'the-day-in-bangalore',
    number: '02',
    theme: 'ch2',
    title: 'The Day in Bangalore',
    subtitle: 'A day that felt like a scene from a movie.',
    photo: photos.bangalore,
    photoNote: 'a scene I kept',
    blocks: [
      { kind: 'note', text: 'Mid-April · exams until May 22' },
      {
        kind: 'p',
        text: 'It was mid-April, and we had our semester-end exams until May 22. My birthday was on May 23, which you may not know.',
      },
      { kind: 'note', text: 'May 23 · a birthday wish' },
      {
        kind: 'p',
        text: "I normally don't re-mention birthday stories to my story but I wanted to make you wish and I knew if you saw my story you would wish for sure so I added you to my close friends and re-mentioned everyone's stories and as I thought you saw one of them and wished me and that wish was all that mattered me.",
      },
      { kind: 'note', text: 'Semester break · Sathwik’s house' },
      {
        kind: 'p',
        text: "Then, on a fresh day, I went to Sathwik's house as it was our semester-end break. There, Sudharshana Chickappa asked me if I would come to Bangalore with them, as Sathwik would go there a week earlier. I agreed because I could drive the XUV, and also, there was a chance that I could meet you.",
      },
      { kind: 'note', text: 'Bangalore · around 6:30 p.m.' },
      {
        kind: 'p',
        text: "So, it was the day we came to Bangalore, and we reached there at around 6:30 p.m. As I didn't know anyone there, I was passing the time with my Doddammas until you entered. I was too scared, but I tried to talk to you. However, I guess you didn't see me there and you walked away, but I didn't lose hope.",
      },
      {
        kind: 'p',
        text: 'When you were having your welcome snacks, I just waited. By then, one of my PUC friends came, so I got a little distracted and later found you missing. After around 20 minutes, I saw you sitting in the fourth or fifth row. There was mehendi on your arms, so my conclusion was that you had gone to get mehendi applied on your hand.',
      },
      { kind: 'note', text: 'A red outfit, and the dance' },
      {
        kind: 'p',
        text: "If I still remember correctly, you were wearing a red outfit, some kind of top or kurta. I don't know what you call it...",
      },
      {
        kind: 'p',
        text: 'Then, you were enjoying the dance. I know you love dancing and singing, your reel like theme was mostly related to them.',
      },
      {
        kind: 'p',
        text: "I was sitting two rows behind you, from where your face was clearly visible. Then for a while I had collage club meeting and when I returned it was time for dinner, and I saw you again. You were with your brother, and I tried talking to you again. I came near you, but there was no use, I guess you didn't recognise me, two three times I tried but I couldn't talk.",
      },
      { kind: 'break' },
      { kind: 'note', text: 'The night and the next day' },
      {
        kind: 'p',
        text: "I thought that if you came that day, you would also come the next day and I decided we could talk the next day, so we packed our bags and we decided to stay in my cousin's house which is near Vidyapeeta. But at a very good time, we met near the rooms and just waved each other and I changed my decision thinking there is still a chance to talk to you.",
      },
      {
        kind: 'p',
        text: 'I thought you were staying there, but I think you had just come for a visit. Everyone including my relatives left and However I had no choice than staying there so, I stayed there and as I was working on a internship those two months, I had to submit a project by next evening. As I wanted no disturbance when we met, I completed the project at around 3:00 a.m. and slept...',
      },
      {
        kind: 'p',
        text: "The next day, I just waited the whole day. That's the moment I recognised... that's all.",
      },
      {
        kind: 'quote',
        text: 'Still, it was a good experience, and I accepted it...',
      },
      {
        kind: 'p',
        text: "To be honest, you were looking very good that night. I decided that I would tell you what I felt about you one day I was thinking you may also feel the same I don't know why i thought so, but still I satisfied myself like that.....",
      },
      { kind: 'note', text: 'After returning' },
      {
        kind: 'p',
        text: 'After returning, the next month was entirely spent on the internship. Then college started, and I came back to the same routine...',
      },
    ],
  },
  {
    id: 'currently-moving-on',
    number: '03',
    theme: 'ch3',
    title: 'Currently Moving On',
    subtitle: 'Learning to keep the memories and let life move forward.',
    photo: photos.movingOn,
    photoNote: 'keeping the good parts',
    blocks: [
      { kind: 'note', text: 'Navaratri · a window seat, around 7 p.m.' },
      {
        kind: 'p',
        text: 'Then, on a fine evening, I was leaving home for Navaratri, and I got a window seat in the bus. It was around 7:00 p.m., and a good song was playing with a chill weather in Keralam. Anyway, meeting you in person was not possible, so I typed a long message and forwarded it. I didn\'t even tell my friends about it.',
      },
      {
        kind: 'p',
        text: "And, as anyone would, you did what you felt was right. All those moments were from my point of view, whereas you saw me as a stranger, which is not at all wrong. You rejected me very smoothly, and I didn't feel bad at that moment. I started to feel bad when I went to sleep that night. To be honest, that was the saddest night I had ever experienced.",
      },
      { kind: 'note', text: 'The saddest night' },
      {
        kind: 'p',
        text: "I decided that I would never get attached to anyone this much again. As I had posted everything for you, I deleted those stories and tried to sleep, but I couldn't. So, I planned a trip to Madikeri to forget all this. I told my family about it and called Sanjana, and everyone agreed to come.",
      },
      { kind: 'note', text: '218 km through the ghats' },
      {
        kind: 'p',
        text: 'The next day, after Nithya Pooja, I drove all the way to Madikeri, around 218 km, through peaceful roads and the beautiful weather of the ghats. After a five-hour drive, my cousins and I met up and enjoyed ourselves.',
      },
      {
        kind: 'p',
        text: "As always, I clicked photos, but this time, I had no reason to post them, so I kept them to myself. However, Sanjana posted some photos, and I simply reposted them. Again, I checked whether you had seen my story, but for the first three hours, you didn't see it, I guess. By then, I had deleted Instagram and reached home.",
      },
      {
        kind: 'p',
        text: "The next three days were Mahanavami and Vijayadashami, and there was quite a workload at my father's temple. There were Vahana Pooja, Ayudha Pooja, and everything else.",
      },
      { kind: 'note', text: 'Back at the hostel' },
      {
        kind: 'p',
        text: "After coming back to the hostel, I missed my routine, so I downloaded Instagram again and realized that it was impossible to forget you I informed non of my friends about this for a week then they started asking why are you lost this days so I informed three of my very close friends, they said non of girls nowadays reject directly, they give fake hopes and end it all one day. Seeing this the thing you did was absolutely right and that made me understand my choice was absolutely perfect. I don't know if you remember but you posted a story sitting next to Ronald McDonald Clown and so as to recreate I posted a story sitting in the same side of the clown thinking you will notice but now I know you didn't anyway you would have rejected because of this behavior of mine or my face but I will always be glad I met a girl like you.....",
      },
      { kind: 'break' },
      {
        kind: 'p',
        text: "Whatever your opinion is, whatever you think about me, this is the first time I have thought this much about a girl. The past year felt like heaven to me. I have never been attached to a girl like this before. Even though we didn't talk in person even once, this experience was no less than a beautiful part of my life.",
      },
      {
        kind: 'p',
        text: "I am creating this whole thing to express how I feel. I don't know if you will read this, but all of this came from my heart...",
      },
      {
        kind: 'quote',
        text: "I can never forget you, and I don't think I will ever get attached to a person like this again. I can never hate you...",
      },
      {
        kind: 'p',
        text: 'You maybe seeing some others as I see you even though I have to accept that, still I will always be waiting for your one replay or again like in my story, I was always sad that you never liked my insta posts still I thought it was because of my face cut.....',
      },
      {
        kind: 'p',
        text: 'If you have read this much, thank you very much. I keep wondering if the results would be different in another universe or another lifetime.',
      },
      { kind: 'p', text: 'Thank you for everything...........' },
      {
        kind: 'p',
        text: "Please don't share this with anyone and I believe you wouldn't tell this to anyone.........",
      },
    ],
  },
]

export const letter = {
  heading: 'One Last Thing',
  salutation: 'Harshitha,',
  paragraphs: [
    'Thank you for being part of a chapter of my life that I will remember for a long time.',
    "Maybe these moments meant something different to each of us, and that's okay. I wanted to put my side of the story into words, not because I expect anything in return, but because some memories deserve to be expressed honestly.",
    'I am grateful for the happiness, the little moments, and everything I learned about myself along the way.',
    "I respect how you feel, and you don't owe me a reply. I simply hope your days are filled with happiness, good people, beautiful experiences, and every opportunity to become the person you want to be.",
    'This website is just a small way of saying that, for me, this chapter mattered.',
    'Happy Birthday once again.',
    'Take care, and thank you for being a beautiful memory in my life.',
  ],
  signature: '— Sree Vardhan',
}
