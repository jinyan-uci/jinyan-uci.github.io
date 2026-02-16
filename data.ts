import { NewsItem, Project, Publication, Talk } from './types';

export const personalInfo = {
  name: "Jin Yan",
  title: "PhD Researcher / Optical Engineer",
  affiliation: "University of California, Irvine",
  email: "jin.yan@uci.edu",
  shortBio: "I explore the intersection of nanophotonics and machine learning. My research focuses on inverse design of non-linear optical metasurfaces and high-speed neural accelerators.",
  longBio: `I am a PhD candidate at the University of California, Irvine, advised by Prof. Jane Doe. My research lies at the interface of nanophotonics, nonlinear optics, and machine learning. 
  
  Currently, I am working on developing data-driven approaches to accelerate the design of complex optical metasurfaces. Before my PhD, I received my B.S. in Physics from Caltech. When I'm not in the lab, I enjoy hiking, photography, and brewing specialty coffee.`
};

export const news: NewsItem[] = [
  {
    id: '1',
    date: 'Oct 2023',
    title: 'Paper Accepted at Nature Photonics',
    category: 'Publication',
    description: 'Our work on "Inverse Design of Non-linear Metasurfaces" has been accepted for publication.',
    link: '#'
  },
  {
    id: '2',
    date: 'Sep 2023',
    title: 'Best Student Paper Award',
    category: 'Award',
    description: 'Received the Best Student Paper award at CLEO 2023 for my talk on neural accelerators.',
  },
  {
    id: '3',
    date: 'Aug 2023',
    title: 'Invited Talk at MIT',
    category: 'Talk',
    description: 'Presented our recent progress on differentiable optics at the RLE seminar.',
  },
  {
    id: '4',
    date: 'Jun 2023',
    title: 'Summer Internship at Google X',
    category: 'General',
    description: 'Starting a research internship focusing on optical computing architectures.',
  },
  {
    id: '5',
    date: 'Jan 2023',
    title: 'New Preprint Available',
    category: 'Publication',
    description: 'Released a preprint on "Benchmarking Optical Neural Networks" on arXiv.',
    link: 'https://arxiv.org'
  }
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Neural Metasurfaces',
    description: 'Designing metasurfaces that can perform complex image classification tasks at the speed of light using diffractive layers.',
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['Nanophotonics', 'Deep Learning', 'Optics'],
    link: '#'
  },
  {
    id: 'p2',
    title: 'Inverse Design Toolkit',
    description: 'An open-source Python library for gradient-based optimization of photonic devices, integrated with PyTorch.',
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['Software', 'Optimization', 'Python'],
    link: '#'
  },
  {
    id: 'p3',
    title: 'Non-linear Optical Switching',
    description: 'Investigating ultrafast all-optical switching in silicon-organic hybrid waveguides for next-gen telecom.',
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['Nonlinear Optics', 'Telecom', 'Experiment'],
    link: '#'
  },
  {
    id: 'p4',
    title: 'Lidar Beam Steering',
    description: 'Developing solid-state beam steering mechanisms using phase-change materials for autonomous vehicle applications.',
    image: 'https://picsum.photos/600/400?random=4',
    tags: ['Lidar', 'Applied Physics'],
    link: '#'
  }
];

export const publications: Publication[] = [
  {
    id: 'pub1',
    title: 'Inverse design of non-linear metasurfaces for efficient frequency conversion',
    authors: ['J. Yan', 'A. Smith', 'J. Doe'],
    venue: 'Nature Photonics',
    year: 2023,
    type: 'Journal',
    doi: '10.1038/s41566-023-01000-x',
    pdf: '#',
    tags: ['Metasurfaces', 'Nonlinear Optics']
  },
  {
    id: 'pub2',
    title: 'Differentiable optics for high-speed image processing',
    authors: ['J. Yan', 'B. Johnson'],
    venue: 'CLEO 2023',
    year: 2023,
    type: 'Conference',
    doi: '10.1364/CLEO_AT.2023.JW3B.1',
    tags: ['Optics', 'Computing']
  },
  {
    id: 'pub3',
    title: 'Benchmarking Optical Neural Networks: A Comprehensive Review',
    authors: ['J. Yan', 'C. Lee', 'J. Doe'],
    venue: 'arXiv',
    year: 2022,
    type: 'Preprint',
    arxiv: '2201.12345',
    tags: ['Review', 'Deep Learning'],
    bibtex: `@article{yan2022benchmarking,
  title={Benchmarking Optical Neural Networks},
  author={Yan, Jin and Lee, Chris and Doe, Jane},
  journal={arXiv preprint arXiv:2201.12345},
  year={2022}
}`
  },
  {
    id: 'pub4',
    title: 'Soliton dynamics in multimode fibers',
    authors: ['A. Smith', 'J. Yan', 'K. White'],
    venue: 'Physical Review Letters',
    year: 2022,
    type: 'Journal',
    doi: '10.1103/PhysRevLett.128.013901',
    tags: ['Fiber Optics']
  },
  {
    id: 'pub5',
    title: 'Large-scale integration of photonic crystal cavities',
    authors: ['J. Yan', 'J. Doe'],
    venue: 'IEEE Photonics Journal',
    year: 2021,
    type: 'Journal',
    doi: '#',
    tags: ['Integration', 'Photonics']
  },
  {
    id: 'pub6',
    title: 'Machine learning assisted growth of 2D materials',
    authors: ['D. Chen', 'J. Yan'],
    venue: 'MRS Spring Meeting',
    year: 2021,
    type: 'Conference',
    tags: ['Materials Science', 'ML']
  }
];

export const talks: Talk[] = [
  {
    id: 't1',
    title: 'Next-Generation Optical Accelerators',
    event: 'MIT RLE Seminar',
    location: 'Cambridge, MA',
    date: 'August 2023',
    type: 'Invited',
    slides: '#'
  },
  {
    id: 't2',
    title: 'Differentiable Optics in PyTorch',
    event: 'CLEO 2023',
    location: 'San Jose, CA',
    date: 'May 2023',
    type: 'Conference',
    video: '#'
  },
  {
    id: 't3',
    title: 'Nonlinear Metasurfaces: Challenges and Opportunities',
    event: 'Photonics West',
    location: 'San Francisco, CA',
    date: 'January 2023',
    type: 'Conference'
  },
  {
    id: 't4',
    title: 'Introduction to Photonic Inverse Design',
    event: 'UCI Physics Colloquium',
    location: 'Irvine, CA',
    date: 'November 2022',
    type: 'Seminar',
    slides: '#'
  }
];