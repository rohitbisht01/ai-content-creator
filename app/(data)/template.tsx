export const templates = [
  {
    name: "Blog Title",
    description:
      "An AI-powered tool to generate catchy and relevant blog titles based on your niche and content outline, helping you attract more readers from the start.",
    category: "Blog",
    icon: "https://pics.freeicons.io/uploads/icons/png/4784588341667365240-64.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet form based on the given niche and outline, formatted for a rich text editor",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Description",
    description:
      "Generate an optimized, engaging YouTube video description that highlights the video content, improves SEO, and encourages viewers to engage and watch.",
    category: "YouTube",
    icon: "https://pics.freeicons.io/uploads/icons/png/1375547291552562366-64.png",
    aiPrompt:
      "Generate a detailed YouTube video description based on the video title, keywords, and intended audience",
    slug: "generate-youtube-description",
    form: [
      {
        label: "Enter video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter main keywords",
        field: "input",
        name: "keywords",
      },
      {
        label: "Enter intended audience",
        field: "textarea",
        name: "audience",
      },
    ],
  },
  {
    name: "YouTube SEO Title",
    description:
      "Create an SEO-friendly title for your YouTube video to increase visibility and click-through rates, using AI to generate impactful keywords and phrases.",
    category: "YouTube",
    icon: "https://pics.freeicons.io/uploads/icons/png/7642406091537347965-64.png",
    aiPrompt:
      "Suggest 5 SEO-friendly YouTube titles based on video topic and keywords",
    slug: "generate-youtube-seo-title",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter keywords",
        field: "input",
        name: "keywords",
      },
    ],
  },
  {
    name: "Instagram Post",
    description:
      "Create engaging Instagram post descriptions with relevant hashtags, designed to enhance reach, captivate your audience, and fit the theme of your content.",
    category: "Instagram",
    icon: "https://pics.freeicons.io/uploads/icons/png/6590558241561032669-64.png",
    aiPrompt:
      "Generate an Instagram post description with appropriate hashtags and an engaging tone based on theme",
    slug: "generate-instagram-post",
    form: [
      {
        label: "Enter post theme",
        field: "input",
        name: "theme",
        required: true,
      },
      {
        label: "Enter additional hashtags",
        field: "input",
        name: "hashtags",
      },
    ],
  },
  {
    name: "Twitter Post",
    description:
      "Create impactful Twitter posts that fit character limits, include relevant hashtags, and encourage engagement, based on your chosen topic and message.",
    category: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/128/10272/10272633.png",
    aiPrompt:
      "Generate a Twitter post with hashtags and a call to action based on given topic",
    slug: "generate-twitter-post",
    form: [
      {
        label: "Enter post topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter intended message",
        field: "textarea",
        name: "message",
      },
    ],
  },
  {
    name: "LinkedIn Post",
    description:
      "Create a professional LinkedIn post that highlights key points, promotes engagement, and aligns with LinkedIn’s tone, helping you reach and connect with a targeted audience.",
    category: "LinkedIn",
    icon: "https://pics.freeicons.io/uploads/icons/png/15953438001579090778-64.png",
    aiPrompt:
      "Write a LinkedIn post that is engaging, professional, and includes a call to action based on the topic",
    slug: "generate-linkedin-post",
    form: [
      {
        label: "Enter post topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter additional points to include",
        field: "textarea",
        name: "points",
      },
    ],
  },
  {
    name: "Code Explanation",
    description:
      "Get clear explanations of code snippets, including functionality, logic, and potential improvements. Ideal for developers learning new code or explaining their work.",
    category: "Coding",
    icon: "https://pics.freeicons.io/uploads/icons/png/14760371461555931396-64.png",
    aiPrompt:
      "Provide a detailed explanation of the given code, including function, logic, and potential improvements",
    slug: "explain-code",
    form: [
      {
        label: "Paste your code",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Check",
    description:
      "Automatically check and correct grammar, spelling, and punctuation in your text to ensure clarity, professionalism, and readability.",
    category: "Grammar",
    icon: "https://pics.freeicons.io/uploads/icons/png/1153499251637753558-64.png",
    aiPrompt:
      "Check and correct any grammar or spelling issues in the provided text",
    slug: "check-english-grammar",
    form: [
      {
        label: "Enter your text",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
];
