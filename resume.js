var resume = new Vue({
    el: '#resume',
    data: {
        name: 'Christofer Padilla',
        email: 'christoferpadilla@gmail.com',
        phone: '4074912791', 
        github: 'https://github.com/cpadilla',
        objective: 'A passionate developer who enjoys designing elegant interfaces, architecting ingenius solutions to large-scale problems, and refining his craft by continuosly learning. Seeking a challenging position at an innovative company with progressive mission goals.',
        education: [
            {
                name: 'University of Central Florida',
                study: 'Computer Science',
                end: 'May 2019'
            },
            {
                name: 'Winter Park Technical School',
                study: 'Web Programming',
                end: 'May 2011'
            }
        ],
        classes: [
            {
                course: 'COP 4520',
                name: 'Parallel Processing',
                summary: 'Implemented a Fast Lock-Free Internal BST using C++'
            },
            {
                course: 'COP 4331',
                name: 'Process for Object-Oriented Software',
                summary: 'Created Hotel CRM web app using Laravel'
            },
            {
                course: 'COP 4020',
                name: 'Programming Languages',
                summary: 'Learned Haskell and built a server logger in Erlang'
            }
        ],
        experience: [
            {
                title: 'Software Engineer Intern',
                company: 'Dignitas Technologies',
                start: 'September 2016',
                end: 'Present',
                duties: [
                    'Implemented client/server side features for GIFT, an intelligent tutoring framework',
                    'Developed front end features using Java, HTML, GWT, Bootstrap, and CSS',
                    'Implemented UI tabs and pagination for editing surveys',
                    'Participated in code reviewing with peers and authored inline and online documentation'
                ]
            },
            {
                title: 'Software Engineer',
                company: 'GolfNow',
                start: 'Mar 2014',
                end: 'Aug 2016',
                duties: [
                    'Architected WinForm app and automated testing framework using NUnit, .NET, and C#',
                    'Built framework to be scalable, run test cases and report progress to SQL databases',
                    'Tested high-volume MVC web applications dealing with time sensitive data and CC information',
                    'Developed test scripts using Selenium, REST and SOAP APIs for different testing environments',
                    'Added exception handling to MEAN application running user submitted code',
                    'Used Docker to improve our test framework and better integrate with build CI'
                ]
            },
            {
                title: 'Software Engineer Intern',
                company: 'DiSTI',
                start: 'Mar 2012',
                end: 'Feb 2013',
                duties: [
                    'Worked in C++ to test and develop GL Studio, a simulation development tool',
                    'Experienced working on cross-platform product with build tools and version control',
                    'Wrote unit tests and in-house IDL files, performed release testing and QA',
                    'Utilized Python scripts to generate code completion files'
                ]
            }
        ],
        languages: [
            'VS',
            'Vim',
            'C#/.NET',
            'Java',
            'Javascript',
            'C/C++',
            'Python',
            'Node.js',
            'React.js',
            'Vue.js',
            'XML',
            'SQL',
            'Mongo'
        ],
        skills: [
            'Strong comprehension of OOP and working with third party librarys and frameworks',
            'Highly resourceful programmer with excellent debuggin and documentating skills'
        ],
        extracurricular: [
            'FIRST Robotics Team (Lead Programmer)',
            'Timber Creek High School Programming Team (Team Captain)',
            'UCF Programmin Team Practices',
            'Game Dev Knights'
        ],
        hobbies: [
            'Rockclimbing',
            'Guitar',
            'Skateboarding',
            'Reading',
            'Gaming',
            'Camping'
        ],
        projects: [
            'Programmed games in Dark Basic, Monogame, Java, Javascript, C#, Python, Unity, and Unreal',
            'Experience working with OpenGL ES, GLSL, SDL, and Oculus Rift',
            'Frequently participate in Game Jams, working collaboratively using version control',
            'Hosted and contributed to various open source projects on GitHub'
        ],
        honors: [
            {
                honor: 'Eagle Scout Mentor Pin',
                year: '2015'
            },
            {
                honor: 'NBC Universal GEM Award',
                year: '2014'
            },
            {
                honor: 'BSA Eagle Scout',
                year: '2011'
            },
            {
                honor: "FIRST Florida Regional Chairman's Award",
                year: '2010'
            }
        ]
    }
})
