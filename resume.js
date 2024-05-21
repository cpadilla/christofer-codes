var resume = new Vue({
    el: '#resume',
    data: {
        name: 'Christofer Padilla',
        firstName: 'Christofer',
        lastName: 'Padilla',
        nickname: 'Chris',
        katakana: 'クリストファ　パヂヤ',
        email: 'christofer@spacepirates.net',
        phone: '(407) 491-2791', 
        portfolio: 'http://christofer.rocks',
        github: 'https://github.com/cpadilla',
        twitch: 'https://twitch.tv/rockzombie2',
        about: 'I am a passionate developer who enjoys programming computer games, writing technical documentation and architecting scalable software frameworks.',
        objective: "Seeking a fufilling and challenging position at an innovative company with progressive mission goals in order to positively impact customers' experiences.",
        education: [
            {
                name: 'University of Central Florida',
                study: 'B.S. in Computer Science',
                end: '2019',
                endMonth: 'May'
            },
            {
                name: 'Winter Park Technical School',
                study: 'Web Programming',
                end: '2011',
                endMonth: 'May '
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
                name: 'Processes of OO',
                summary: 'Created Hotel CRM web app using Laravel'
            },
            {
                course: 'COP 3503',
                name: 'Computer Science II',
                summary: 'Learned intermediate data structures'
            },
            {
                course: 'COP 4934',
                name: 'Senior Design',
                summary: 'Converted a concurrent data structure library to submit to the C++ Boost library'
            },
            {
                course: 'CAP 4720',
                name: 'Computer Graphics',
                summary: 'Learned fundementals of computer graphics'
            },
            {
                course: 'CIS 3360',
                name: 'Security in Computing',
                summary: 'Learned fundementals of security in computing'
            },
            {
                course: 'COP 4949',
                name: 'Programming Languages',
                summary: 'Learned Haskell and built a server logger in Erlang'
            },
            {
                course: 'COP 3402',
                name: 'Systems Software',
                summary: 'Learned fundementals of systems software'
            }
        ],
        experience: [
            {
                title: 'SDE II',
                company: 'Oddball',
                start: '06/2023',
                end: 'Present',
                duties: [
                    'Converted 10+ subproject Ant build project to use Maven; tested to ensure feature parity',
                    'Made 20+ systematic front end accessibility changes to ensure 508 compliance',
                ]
            },
            {
                title: 'SDE II',
                company: 'Expedia Group',
                start: '08/2022',
                end: '03/2023',
                duties: [
                    'Created Integration tests (Kotlin) using docker-compose and wiremock to emulate gRPC server',
                    'Created a github action as part of SOX compliance that uploads screenshots to a repository',
                    'Created 12 unit tests of over 6k lines to bring code coverage up to 100% for a repository',
                    'Added a new value to metrics across two different repositories, enabling search by id',
                ]
            },
            {
                title: 'Software Engineer',
                company: 'AWS Elastic Block Storage Team',
                start: '09/2021',
                end: '02/2022',
                duties: [
                    'Added I/O histograms and participated in on-call rotations to investigate latency complaints',
                    'Led critical validation effort for new hardware to add to production pool, improving testing tool',
                ]
            },
            {
                title: 'Software Engineer',
                company: 'nCino',
                start: '08/2020',
                end: '8/2021',
                duties: [
                    'Utilized Apex (Salesforce) to implement integrations with financial institutions',
                    'Created 50+ mappings using in-house utility language as part of credit team',
                ]
            },
            {
                title: 'Full Stack Developer',
                company: 'RP Funding',
                start: '01/2020',
                end: '04/2020',
                duties: [
                    'Worked on upgrading ColdFusion Server 2016 to 2018 and converting CFML tags to CFSCript',
                    'Used AWS to configure microservices running and accessibility from REST APIs',
                    'Used JavaScript to incorporate a new point of contact into generated ads for loan agents',
                ]
            },
            {
                title: 'Software Engineer',
                company: 'Dignitas Technologies',
                start: '09/2016',
                end: '01/2020',
                duties: [
                    'Implemented front and back end features using Java, GWT, and Bootstrap for an intelligent tutoring system with 1500+ users in 76 countries',
                    'Programmatically enforced coding standards using bash, fixing 230+ files in code repository',
                    'Created a Cordova plugin allowing embedded webapp to access Android activity from javascript, which allowed configurable properties from the client',
                    'Contacted clients, attended I/ITSEC, wrote articles as Research Engineer on Phase 1 SBIR',
                    'Implemented UI tabs and pagination for editing surveys',
                    'Participated in code reviewing with peers and authored inline and online documentation'
                ]
            },
            {
                title: 'Software Engineer',
                company: 'GolfNow',
                start: '03/2014',
                end: '08/2016',
                duties: [
                    'Built a scalable test framework using NUnit, C#/.NET to run 200+ test cases on 3 different environments and generate daily progress reports to SQL databases',
                    'Developed a WinForm utility for quality assurance engineers to book tee times using REST APIs, reducing task time by 90%', 
                    'Agile work flow testing high-volume MVC web apps dealing with CC and time-sensitive data',
                    'Used Docker to improve our test framework and better integrate with build CI',
                    'Developed test scripts using Selenium, REST and SOAP APIs on different environments',
                    'Added exception handling to MEAN application running user submitted code'
                ]
            },
            {
                title: 'Software Engineer Intern',
                company: 'DiSTI',
                start: '03/2012',
                end: '02/2013',
                duties: [
                    'Learned C++ to test and develop GL Studio, a cross platform development tool to create 3D simulation tools with built-in editor for custom C++ code',
                    'Learned Python in 1 day to generate IDL code-completion files, completing task 1 week early',
                    'Tested and debugged applications on Windows and Linux regularly',
                    'Wrote unit tests and in-house IDL files, performed release testing and QA'
                ]
            }
        ],
        languages: [
            'Vim',
            'Rust',
            'Vue.js',
            'C++',
            'C#',
            'JavaScript',
            'Java',
            'Kotlin',
            'HTML',
            'Pug',
            'CSS',
            'Sass',
            'CMake',
            'React.js',
            'Node.js',
            'Python',
            'OpenGL',
            'Mongo',
            'SQL',
            'Linux',
            'FreeBSD',
            'Bash',
            'Fish',
            'Powershell',
            'Haskell'
        ],
        skills: [
            'Strong comprehension of OOP and working with third party libraries and frameworks',
            'Highly resourceful programmer with excellent debugging and documentating skills'
        ],
        extracurricular: [
            'Skateboarding Club (President)',
            'FIRST Robotics Team (Lead Programmer)',
            'UCF Programming Team Practices',
            'Game Dev Knights'
        ],
        hobbies: [
            'Languages',
            'Astronomy',
            'Graphics',
            'Linux',
            'Game Design',
            'Yoga',
            'Tattoos',
            'Table Top RPGs',
            'Sailing',
            'Science Fiction',
        ],
        projects: [
            'Created a Twitch bot using Rust and made a chat service using Rust and gRPC',
            'Won 3rd place (20+ teams) at Indie Galactic Space Jam 2018 using UE4 and EEG Sensor',
            'Built a responsive web app to learn Node, React, Sass and Mongo',
            'Built a dashboard using Node, Express, Vue, Pug, Sass, MySQL to show orders on a map',
            'Refactored concurrency library (180,000+ lines) to submit to C++ Boost library',
            'Performed in-depth analysis of multiple crypto blockchains for developing a dapp game on'
        ],
        webapp: 'https://goo.gl/5kq2cv',
        honors: [
            {
                honor: 'NTSA Education/Human Performance Team Award for Outstanding Achv. in M&S',
                year: '2019'
            },
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
                honor: "FIRST FL Regional Chairman's Award",
                year: '2010'
            }
        ]
    },
    created() {
        console.log("katakana: " + this.katakana);
    },
    filters: {
        capitalize: function capitalize(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + capitalize(value.slice(1));
        }
    }
})

// fitty('#title');
