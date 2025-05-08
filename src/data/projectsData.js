import one from '../assets/svg/projects/one.svg';
import two from '../assets/svg/projects/two.svg';
import three from '../assets/svg/projects/three.svg';

export const projectsData = [
    {
        id: 1,
        projectName: 'Skillful',
        projectDesc:
            'A community-based skill bartering platform that connects individuals to exchange services—like web design for yoga lessons—without monetary transactions.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI', 'Auth0'],
        code: 'https://github.com/parikhanna/Skillful',
        demo: 'https://github.com/parikhanna/Skillful',
        image: one,
    },
    {
        id: 2,
        projectName: 'Analysis of University Rankings',
        projectDesc:
            'A statistical analysis project investigating key factors influencing the Times Higher Education World University Rankings using Python.',
        tags: ['Python', 'Pandas', 'Matplotlib', 'Regression', 'EDA'],
        code: 'https://github.com/siraajsmonga/Stat-306-Project',
        demo: 'https://github.com/siraajsmonga/Stat-306-Project',
        image: two,
    },
    {
        id: 3,
        projectName: 'Income Disparity Analysis',
        projectDesc:
            'Conducted an exploratory and inferential statistical analysis using the UCI Adult Census Income dataset to investigate income disparity based on gender, education, race, and working hours.',
        tags: [
            'Python',
            'Pandas',
            'Seaborn',
            'Logistic Regression',
            'Data Analysis',
        ],
        code: 'https://github.com/Andrew-Andrew0302/Stat301_Project',
        demo: 'https://github.com/Andrew-Andrew0302/Stat301_Project',
        image: three,
    },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
