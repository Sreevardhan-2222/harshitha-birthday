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
  primary: 'Want to know more?',
  secondary: 'Just leave me with the birthday wishes',
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
        text: 'It was mid-April, and our semester-end exams ran until May 22. My birthday is on May 23 — something you may not know.',
      },
      {
        kind: 'p',
        text: "I don't normally add people to my Close Friends list just for a birthday, but I wanted you to wish me, so I added you. You did wish me, and that was all that mattered to me then.",
      },
      {
        kind: 'p',
        text: "Later, during our semester-end break, I went to Sathwik's house. Sudharshana Chickappa asked if I would come to Bangalore with them, since Sathwik would be going there a week earlier. I agreed, because I could drive the XUV — and there was also a chance I might meet you.",
      },
      { kind: 'note', text: 'Bangalore · around 6:30 p.m.' },
      {
        kind: 'p',
        text: "We reached Bangalore at around 6:30 p.m. I didn't know anyone there, so I spent time with my Doddammas until you arrived. I was nervous, but I tried to talk to you. I don't think you noticed me then, but I didn't lose hope.",
      },
      {
        kind: 'p',
        text: 'While you were having your welcome snacks, I waited. A PUC friend arrived, and I got distracted. Later, I noticed you had been missing for around twenty minutes. Then I saw you sitting in the fourth or fifth row. You had mehendi on your arms, so I guessed you had gone to get it applied.',
      },
      {
        kind: 'p',
        text: 'If I remember correctly, you were wearing a red outfit — perhaps a top, or a kurta.',
      },
      {
        kind: 'p',
        text: 'You were enjoying the dance. I knew you liked dancing and singing; I remembered seeing a post related to Adda, where you were doing something dance-related.',
      },
      {
        kind: 'p',
        text: "I was sitting two rows behind you, and I could see your face clearly. Later, we went for dinner, and I saw you again with your brother. I tried talking to you, but I don't think you recognised me.",
      },
      { kind: 'break' },
      {
        kind: 'p',
        text: "I thought you might come back the next day, so we planned to stay at my cousin's house. Then we met near the rooms and exchanged a simple “Hi”. After that, I changed my plan.",
      },
      {
        kind: 'p',
        text: 'I thought you were staying there, but I think you had only come for a visit. I stayed because I had an internship project to submit the next evening. I wanted to finish it so I would be free if we met, so I completed it at around 3 a.m. and slept.',
      },
      {
        kind: 'p',
        text: 'The next day, I waited. That was when I recognised how much the possibility of seeing you had shaped my plans.',
      },
      {
        kind: 'quote',
        text: 'Still, it was a good experience. It felt like part of a movie, and I accepted it as a memory.',
      },
      {
        kind: 'p',
        text: 'To be honest, you looked very good that night. I thought I would tell you what I felt one day, but I never found the chance.',
      },
      {
        kind: 'p',
        text: 'After returning, I spent the next month on my internship. Then college started, and I went back to my usual routine.',
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
        text: "Then, on a fine evening, I was leaving home for Navaratri and got a window seat. It was around 7 p.m., and a good song was playing. Meeting you in person wasn't possible, so I typed a long message and sent it. I hadn't even told my friends.",
      },
      {
        kind: 'p',
        text: "You did what you felt was right. Those moments were from my point of view, while you saw me as a stranger — and that wasn't wrong. You rejected me gently, and I didn't feel bad in that moment. The sadness came when I went to sleep that night. It was one of the saddest nights I had experienced.",
      },
      {
        kind: 'p',
        text: "I decided I wouldn't get that attached to anyone again. I deleted the stories I had posted for you and tried to sleep, but I couldn't. So I planned a trip to Madikeri to clear my head. I told my family and called Sanjana, and everyone agreed to come.",
      },
      { kind: 'note', text: '218 km through the ghats' },
      {
        kind: 'p',
        text: 'The next day, after Nithya Pooja, I drove around 218 km to Madikeri, through peaceful roads and the beautiful weather of the ghats. After five hours, my cousins and I met up and enjoyed ourselves.',
      },
      {
        kind: 'p',
        text: "As always, I clicked photos, but this time I had no reason to post them, so I kept them to myself. Sanjana posted some photos, and I reposted them. I checked whether you had seen my story, but as far as I could tell, you hadn't viewed it in the first three hours. By then, I had deleted Instagram and reached home.",
      },
      {
        kind: 'p',
        text: "The next three days were Mahanavami and Vijayadashami, and there was plenty of work at my father's temple, including Vahana Pooja and Ayudha Pooja.",
      },
      {
        kind: 'p',
        text: "After returning to the hostel, I missed my routine, so I downloaded Instagram again, opened your profile, and realised that forgetting you wasn't going to be easy.",
      },
      { kind: 'break' },
      {
        kind: 'p',
        text: 'Whatever your opinion of me, this was the first time I had thought so much about a girl. The past year felt like heaven to me. I had never been attached to someone this way before. Even though we never really talked in person, the experience remains a beautiful part of my life.',
      },
      {
        kind: 'p',
        text: "I created this website to express what I felt. I don't know if you will read it, but these words come from my heart.",
      },
      {
        kind: 'quote',
        text: "I can't pretend the experience meant nothing to me, and I don't want to turn it into resentment. I can never hate you.",
      },
      {
        kind: 'p',
        text: "If you've read this much, thank you. Sometimes I wonder whether our paths might have been different in another universe, or another lifetime.",
      },
    ],
    closing: 'Thank you for everything.',
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
