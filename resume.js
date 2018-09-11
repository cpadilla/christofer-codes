var resume = new Vue({
    el: '#resume',
    data: {
        name: 'Christofer Padilla',
        firstName: 'Christofer',
        lastName: 'Padilla',
        nickname: 'Chris',
        email: 'christoferpadilla@gmail.com',
        phone: '4074912791', 
        portfolio: 'http://christofer.rocks',
        github: 'https://github.com/cpadilla',
        about: 'I am a passionate developer who enjoys designing elegant interfaces, architecting sophisticated solutions, and refining my craft learning the latest technologies.',
        objective: "Seeking a fufilling and challenging position at an innovative company with progressive mission goals in order to positively impact customers' experiences.",
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
                    'Designed a WinForm app and automated testing framework using NUnit, .NET, and C#',
                    'Built a scalable framework to run 200+ test cases and report progress to SQL databases',
                    'Tested high-volume MVC web apps dealing with time sensitive data and CC information',
                    'Developed test scripts using Selenium, REST and SOAP APIs on different environments',
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
            'Vim',
            'C#/.NET',
            'Java',
            'HTML',
            'Javascript',
            'CSS',
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
            'Strong comprehension of OOP and working with third party libraries and frameworks',
            'Highly resourceful programmer with excellent debugging and documentating skills'
        ],
        extracurricular: [
            'FIRST Robotics Team (Lead Programmer)',
            'T.C.H.S. Programming Team (Team Captain)',
            'UCF Programming Team Practices',
            'Game Dev Knights'
        ],
        hobbies: [
            'Rockclimbing',
            'Space',
            'Skateboarding',
            'Reading',
            'Graphics',
            'Tattoos'
        ],
        projects: [
            'Programmed games in Monogame, Java, Javascript, C#, OpenGL ES, Python, Unity, and Unreal',
            'Won 3rd place at the Indie Galactic Space Jam 2018 with game using UE4 and EEG Sensor',
            'Built a responsive web app using Node, React, Sass and Mongo',
            'Hosted and contributed to various open source projects',
            'Broadcast programming projects live'
        ],
        webapp: 'https://goo.gl/5kq2cv',
        twitch: 'https://twitch.tv/rockzombie2',
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
    },
    filters: {
        capitalize: function capitalize(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + capitalize(value.slice(1));
        }
    }
})

fitty('#title');