export interface ActivityItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  bullets: string[];
  image: string;
}

export interface FocusAreaItem {
  title: string;
  description: string;
  icon: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface TrusteeItem {
  name: string;
  role: string;
}

export const activities: ActivityItem[] = [
  {
    id: 'women-empowerment',
    title: 'Women Empowerment & Self-Help Groups (SHGs)',
    shortDescription: 'Supporting women to build confidence, leadership, and financial independence.',
    longDescription: 'We believe that empowering women strengthens families and communities. Our initiatives aim to help vulnerable women build confidence, financial independence, and leadership skills.',
    bullets: [
      'Uplifting widows, destitute women, and single mothers.',
      'Forming and mentoring Self-Help Groups.',
      'Encouraging financial independence through micro-credit awareness and bank linkage.',
      'Supporting initiatives for safe working women\'s hostels.',
      'Promoting education, leadership training, and personal development.'
    ],
    image: 'assets/images/GroupPhoto2.jpeg'
  },
  {
    id: 'child-welfare',
    title: 'Child Welfare & Quality Education',
    shortDescription: 'Ensuring children grow in safe, healthy, and supportive environments.',
    longDescription: 'Every child deserves safety, education, nutrition, and the opportunity to grow in a supportive environment.',
    bullets: [
      'Initiatives for the rescue, care, and rehabilitation of child laborers and street children, working with appropriate authorities.',
      'Support for safe shelters and orphanages.',
      'Educational and nutritional assistance.',
      'Digital literacy and technical skill development for disadvantaged students.',
      'Access to learning resources and skill-building opportunities.'
    ],
    image: 'assets/images/CW-14.jpeg'
  },
  {
    id: 'rural-livelihoods',
    title: 'Rural Livelihoods & Youth Skill Development',
    shortDescription: 'Helping families and youth access sustainable opportunities and livelihoods.',
    longDescription: 'Creating sustainable livelihoods can help rural families become financially independent and enable young people to build a better future.',
    bullets: [
      'Dairy farming and allied livelihood training.',
      'Organic agriculture and herbal cultivation awareness.',
      'Cottage-industry and self-employment training.',
      'Entrepreneurship mentorship.',
      'Career guidance and vocational development for unemployed rural youth.'
    ],
    image: 'assets/images/Note.jpeg'
  },
  {
    id: 'flood-relief',
    title: 'Flood Relief',
    shortDescription: 'Providing timely support to communities affected by floods.',
    longDescription: 'Floods can disrupt homes, livelihoods, and access to essential supplies. We aim to support affected families with compassionate relief and community assistance.',
    bullets: [
      'Distributing essential supplies to affected families.',
      'Supporting access to food, clean water, and basic necessities.',
      'Helping vulnerable community members during emergencies.',
      'Working with local communities to coordinate relief efforts.'
    ],
    image: 'assets/images/F-1.jpeg'
  },
  {
    id: 'senior-citizen-care',
    title: 'Senior Citizen Care & Humanitarian Action',
    shortDescription: 'Supporting dignity, safety, and care for vulnerable communities and families.',
    longDescription: 'We believe every individual deserves dignity, security, and compassionate support, especially during vulnerable stages of life and times of crisis.',
    bullets: [
      'Initiatives toward safe old-age homes and holistic elder care.',
      'Humanitarian relief during natural disasters, floods, droughts, and medical emergencies.',
      'Support for vulnerable senior citizens.',
      'Dignified final rites and cremation services for unclaimed deceased individuals, in coordination with relevant authorities and applicable regulations.'
    ],
    image: 'assets/images/SE.jpeg'
  },
];

export const focusAreas: FocusAreaItem[] = [
  { title: 'Education and skill development', description: 'Enabling learning, confidence, and practical opportunities for growth.', icon: '📚' },
  { title: 'Healthcare awareness', description: 'Promoting prevention, access, and healthy community practices.', icon: '🩺' },
  { title: 'Women empowerment', description: 'Investing in leadership, dignity, and economic self-reliance.', icon: '👩‍💼' },
  { title: 'Humanitarian support', description: 'Extending care, safety, and relief during times of need.', icon: '🤝' }
];

export const values: ValueItem[] = [
  { title: 'Compassion', description: 'Serving people with empathy and care.', icon: '❤' },
  { title: 'Equality', description: 'Promoting equal opportunities for all.', icon: '⚖' },
  { title: 'Inclusion', description: 'Respecting individual dignity and diversity.', icon: '🌍' },
  { title: 'Sustainability', description: 'Supporting long-term community progress.', icon: '🌱' }
];

export const trustees: TrusteeItem[] = [
  { name: 'Mrs. S. Jothi', role: 'Chairman & Managing Trustee' },
  { name: 'Mrs. K. Mageshwari', role: 'Trustee' },
  { name: 'Mrs. R. Mageshwari', role: 'Trustee' },
  { name: 'Mrs. G. Dhanalakshmi', role: 'Trustee' },
  { name: 'Mr. S. Sudhakar', role: 'Trustee' }
];

const galleryPhotos = [
  ...Array.from({ length: 16 }, (_, index) => ({
    filename: `C-${index + 1}.jpeg`,
    category: 'Community Support',
    description: 'Community support and outreach.'
  })),
  ...Array.from({ length: 20 }, (_, index) => ({
    filename: `CW-${index + 1}.jpeg`,
    category: 'Child Welfare',
    description: 'Child welfare, care, and support.'
  })),
  ...Array.from({ length: 18 }, (_, index) => ({
    filename: `E-${index + 1}.jpeg`,
    category: 'Education',
    description: 'Education and learning initiatives.'
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    filename: `F-${index + 1}.jpeg`,
    category: 'Flood Relief',
    description: 'Flood relief and humanitarian support.'
  }))
];

export const galleryItems = galleryPhotos.map((photo, index) => ({
  id: index + 1,
  title: photo.category,
  description: photo.description,
  category: photo.category,
  image: `assets/images/${photo.filename}`
}));
