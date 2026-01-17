import { timelineData } from '../data/timeline';
import { skills, skillCategories } from '../data/skills';
import { personalInfo, hobbies, socialLinks, quotes } from '../data/personal';

// File system simulation
export const fileSystem = {
  '~': ['about.txt', 'projects/', 'experience/', 'education/', 'skills/', 'hobbies/', 'contact.txt', '.secret'],
  '~/projects': timelineData
    .filter(d => d.type === 'project')
    .map(p => p.title.toLowerCase().replace(/\s+/g, '-') + '.md'),
  '~/experience': timelineData
    .filter(d => d.type === 'work')
    .map(w => w.title.split(',')[0].toLowerCase().replace(/\s+/g, '-') + '.md'),
  '~/education': timelineData
    .filter(d => d.type === 'education')
    .map(e => e.subtitle.split(',')[0].toLowerCase().replace(/\s+/g, '-') + '.md'),
  '~/skills': Object.keys(skills).map(k => k + '.txt'),
  '~/hobbies': hobbies.map(h => h.name.toLowerCase() + '.txt'),
};

// ASCII Art - using simple characters for compatibility
export const asciiArt = `
 __  __    _    _   _ ____    _    ____  
|  \\/  |  / \\  | \\ | |  _ \\  / \\  |  _ \\ 
| |\\/| | / _ \\ |  \\| | | | |/ _ \\ | |_) |
| |  | |/ ___ \\| |\\  | |_| / ___ \\|  _ < 
|_|  |_/_/   \\_\\_| \\_|____/_/   \\_\\_| \\_\\

${personalInfo.title}
${personalInfo.tagline}
`;

export const welcomeMessage = `${asciiArt}

Welcome to Mandar Ambulkar's interactive portfolio terminal.
Type 'help' to see available commands.

Pro tip: Try some hidden commands for surprises...
`;

// Command processor
export const processCommand = (cmd, currentDir, setCurrentDir, onModeSwitch, commandHistory) => {
  const parts = cmd.trim().split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (command) {
    case '':
      return { content: '', instant: true };

    case 'help':
      return { content: `
Available commands:
==================================================

  NAVIGATION
  ----------
  help              Show this help message
  whoami            Display a brief introduction
  ls [dir]          List directory contents
  cd <dir>          Change directory
  cat <file>        Display file contents

  PORTFOLIO
  ---------
  projects          List all projects
  experience        List work experience
  education         Show education
  skills            Display technical skills
  hobbies           Show hobbies & interests
  contact           Show contact information

  SYSTEM
  ------
  clear             Clear the terminal
  gui               Switch to GUI mode
  neofetch          Display system info
  history           Show command history

Navigation tips:
  * Use Tab for auto-completion
  * Use Up/Down arrows to navigate command history
  * Try some hidden commands...`, instant: false };

    case 'whoami':
      return { content: `
${personalInfo.name}
================
${personalInfo.education.current.degree} @ ${personalInfo.education.current.school} (GPA: ${personalInfo.education.current.gpa})
${personalInfo.title}

${personalInfo.tagline}

Location: ${personalInfo.location}
Email: ${personalInfo.email}`, instant: false };

    case 'neofetch':
      const projectCount = timelineData.filter(d => d.type === 'project').length;
      return { content: `
        .---.        mandar@portfolio
       /     \\       -----------------
       \\.@-@./       OS: Human 1.0 (Developer Edition)
       /\`\\_/\`\\       Host: San Jose, CA
      //  _  \\\\      Kernel: CS @ Northeastern
     | \\     )|_     Uptime: 24 years
    /\`\\_\`>  <_/ \\    Shell: bash/zsh
    \\__/'---'\\__/    Status: ${Math.random() > 0.5 ? 'Coding' : 'On the badminton court'}

                     Languages: Python, Java, JS, C++
   +-----------+     Frameworks: React, FastAPI, PyTorch
   | I <3 CODE |     Cloud: AWS, GCP, Docker, K8s
   +-----------+     GPU: CUDA/Triton optimized
                     Memory: Lots of coffee

                     GPA: ${personalInfo.stats.gpa}/4.0
                     Projects: ${projectCount}
                     Publications: ${personalInfo.stats.publications}
                     Badminton: A/B Level
`, instant: false };

    case 'clear':
      return { clear: true };

    case 'history':
      if (!commandHistory || commandHistory.length === 0) {
        return { content: 'No commands in history yet.', instant: true };
      }
      return { content: commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('\n'), instant: true };

    case 'ls': {
      const targetDir = args[0]
        ? (args[0].startsWith('~') ? args[0] :
           args[0] === '..' ? currentDir.split('/').slice(0, -1).join('/') || '~' :
           `${currentDir}/${args[0]}`.replace('~/', '~/'))
        : currentDir;

      const normalizedDir = targetDir.replace(/\/+/g, '/').replace(/\/$/, '') || '~';
      const contents = fileSystem[normalizedDir];

      if (contents) {
        const formatted = contents.map(item => {
          if (item.endsWith('/')) return `[DIR]  ${item}`;
          if (item.startsWith('.')) return `[HID]  ${item}`;
          return `[FILE] ${item}`;
        }).join('\n');
        return { content: formatted, instant: true };
      }
      return { content: `ls: cannot access '${args[0] || normalizedDir}': No such file or directory`, instant: true };
    }

    case 'cd': {
      if (!args[0] || args[0] === '~') {
        setCurrentDir('~');
        return { content: '', instant: true };
      }
      if (args[0] === '..') {
        const parent = currentDir.split('/').slice(0, -1).join('/') || '~';
        setCurrentDir(parent);
        return { content: '', instant: true };
      }
      const newDir = args[0].startsWith('~') ? args[0] :
        `${currentDir}/${args[0]}`.replace('~/', '~/').replace(/\/+/g, '/');

      if (fileSystem[newDir] || fileSystem[newDir.replace(/\/$/, '')]) {
        setCurrentDir(newDir.replace(/\/$/, ''));
        return { content: '', instant: true };
      }
      return { content: `cd: ${args[0]}: No such directory`, instant: true };
    }

    case 'cat': {
      if (!args[0]) return { content: 'cat: missing file operand', instant: true };

      const fileName = args[0].toLowerCase();

      // Secret file
      if (fileName === '.secret' || fileName === '~/.secret') {
        return { content: `
[SECRET FILE FOUND]

Here are some Easter eggs to try:
  * neofetch      - System info (developer style)
  * matrix        - Enter the Matrix
  * coffee        - Essential developer fuel
  * cowsay        - Wisdom from a cow
  * badminton     - Special surprise
  * sudo hire me  - ???
  * vim           - Good luck exiting...
  * rm -rf /      - Don't try this at home
  * Konami code   - Up Up Down Down Left Right Left Right B A

Keep exploring!`, instant: true };
      }

      // About file
      if (fileName === 'about.txt') {
        return { content: `
+==================================================================+
|                          ABOUT ME                                |
+==================================================================+

${personalInfo.bio.long}`, instant: false };
      }

      // Contact file
      if (fileName === 'contact.txt') {
        return { content: `
+==================================================================+
|                          CONTACT                                 |
+==================================================================+

Email:     ${socialLinks.email.display}
GitHub:    ${socialLinks.github.display}
LinkedIn:  ${socialLinks.linkedin.display}
Instagram: ${socialLinks.instagram.display}
X/Twitter: ${socialLinks.twitter.display}
Location:  ${personalInfo.location}

Feel free to reach out for collaborations, opportunities, 
or just to chat about tech (or badminton)!`, instant: false };
      }

      // Project files
      const project = timelineData.find(d =>
        d.type === 'project' &&
        d.title.toLowerCase().replace(/\s+/g, '-') + '.md' === fileName
      );
      if (project) {
        return { content: `
# ${project.title}
  ${project.subtitle} | ${project.date}
  ${'='.repeat(50)}

${project.description}

${project.github ? `GitHub: ${project.github}` : ''}
${project.publication ? `Publication: ${project.publication}` : ''}`, instant: false };
      }

      // Skill files
      const skillKey = fileName.replace('.txt', '');
      if (skills[skillKey]) {
        const category = skillCategories[skillKey];
        return { content: `
${category.icon} ${category.name.toUpperCase()}
${'='.repeat(40)}
${skills[skillKey].join('\n')}`, instant: false };
      }

      // Hobby files
      const hobby = hobbies.find(h => h.name.toLowerCase() + '.txt' === fileName);
      if (hobby) {
        return { content: `
${hobby.icon} ${hobby.name.toUpperCase()}
${'='.repeat(40)}

${hobby.description}`, instant: false };
      }

      return { content: `cat: ${args[0]}: No such file`, instant: true };
    }

    case 'projects': {
      const projects = timelineData.filter(d => d.type === 'project');
      let output = `
+==================================================================+
|                          PROJECTS                                |
+==================================================================+
`;
      projects.forEach((p, i) => {
        output += `
[${i + 1}] ${p.title}
    ${p.date} | ${p.subtitle}
    ${p.description.substring(0, 80)}...
    ${p.github ? `-> ${p.github}` : p.publication ? `-> ${p.publication}` : ''}
`;
      });
      return { content: output, instant: false };
    }

    case 'experience': {
      const work = timelineData.filter(d => d.type === 'work');
      let output = `
+==================================================================+
|                       WORK EXPERIENCE                            |
+==================================================================+
`;
      work.forEach((w) => {
        output += `
+-- ${w.title}
|   ${w.subtitle} | ${w.date}
|   
|   ${w.description}
+${'='.repeat(60)}
`;
      });
      return { content: output, instant: false };
    }

    case 'education': {
      const edu = timelineData.filter(d => d.type === 'education');
      let output = `
+==================================================================+
|                         EDUCATION                                |
+==================================================================+
`;
      edu.forEach((e) => {
        output += `
[DEGREE] ${e.title}
         ${e.subtitle} | ${e.date}
         ${e.description}

`;
      });
      return { content: output, instant: false };
    }

    case 'skills': {
      let output = `
+==================================================================+
|                       TECHNICAL SKILLS                           |
+==================================================================+
`;
      Object.entries(skills).forEach(([key, items]) => {
        const category = skillCategories[key];
        output += `
${category.icon} ${category.name.toUpperCase()}
  ${items.join(' | ')}
`;
      });
      return { content: output, instant: false };
    }

    case 'hobbies': {
      let output = `
+==================================================================+
|                     HOBBIES & INTERESTS                          |
+==================================================================+
`;
      hobbies.forEach((h) => {
        output += `
${h.icon} ${h.name.toUpperCase()}
   ${h.description}

`;
      });
      return { content: output, instant: false };
    }

    case 'contact':
      return { content: `
+==================================================================+
|                          CONTACT                                 |
+==================================================================+

Email:     ${socialLinks.email.display}
GitHub:    ${socialLinks.github.display}
LinkedIn:  ${socialLinks.linkedin.display}
Instagram: ${socialLinks.instagram.display}
X/Twitter: ${socialLinks.twitter.display}
Location:  ${personalInfo.location}

Let's connect!`, instant: false };

    case 'gui':
      onModeSwitch();
      return { content: 'Switching to GUI mode...', instant: true };

    // ==================== EASTER EGGS ====================

    case 'matrix':
      return { content: 'Entering the Matrix...', instant: true, matrix: true };

    case 'badminton':
      return { content: `
    BADMINTON MODE ACTIVATED
    ========================
    
         O
        /|\\    *  <- shuttlecock
        / \\   /
    ============== net ==============
              \\   O
               * /|\\
                 / \\
    
    Fun facts about my badminton journey:
    
    * Level: A/B recreational tournaments
    * Location: Bay Area courts
    * Favorite shot: The deceptive drop shot
    * Play style: Aggressive at the net, just like my git commits
    
    "Debug by day, smash by night"
    
    Want to play? Let's connect on LinkedIn!
`, instant: false };

    case 'coffee':
      return { content: `
        ( (
         ) )
      .______. 
      |      |]
      \\      /    
       \`----'

   COFFEE.exe loaded successfully
   
   Current Status: ${Math.random() > 0.5 ? 'CAFFEINATED' : 'NEED REFILL'}
   Cups today: ${Math.floor(Math.random() * 5 + 2)}
   Productivity: ${'#'.repeat(Math.floor(Math.random() * 5 + 5))}${'_'.repeat(5)} ${Math.floor(Math.random() * 30 + 70)}%

   "A programmer is just a machine that
    turns coffee into code."
    
   (And occasionally, a badminton player
    who turns coffee into smashes)
`, instant: false };

    case 'cowsay': {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      const maxLen = 100;
      const wrappedQuote = quote.length > maxLen 
        ? quote.substring(0, maxLen - 3) + '...' 
        : quote;
      const padding = wrappedQuote.length;
      const border = '-'.repeat(padding + 2);
      // Using a simpler cow that doesn't have escape issues
      const cow = [
        '        \\   ^__^',
        '         \\  (oo)\\_______ ',
        '            (__)\\       )\\ /\\',
        '                ||----w |',
        '                ||     ||'
      ].join('\n');
      return { content: `
 +${border}+
 | ${wrappedQuote.padEnd(padding)} |
 +${border}+
${cow}
`, instant: false };
    }

    case 'vim':
      return { content: `
~
~                    VIM - Vi IMproved
~
~                    version 9.0.1
~                    by Bram Moolenaar et al.
~
~
~           type :q<Enter> to exit
~           type :help<Enter> for help
~
~
~     ...just kidding, you're trapped forever.
~
~     Pro tip: Sometimes the best move is to just close the terminal and start fresh
~
`, instant: true };

    case 'emacs':
      return { content: `
Nice try! But this terminal doesn't have enough memory 
to load Emacs and its 2,000+ packages.

Just kidding. Both editors are great. Use what makes you productive! 

(I personally use VS Code... don't @ me)
`, instant: true };

    case 'sudo':
      if (args.join(' ').toLowerCase() === 'hire me') {
        return { content: `
[sudo] password for recruiter: ********

Authenticating... OK

+-----------------------------------------------------------+
|                 INITIATING HIRE SEQUENCE                  |
+-----------------------------------------------------------+

[########################################] 100%

Installing dependencies...
  [OK] problem-solving-skills@expert
  [OK] team-collaboration@excellent  
  [OK] coffee-consumption@maximum
  [OK] debugging-patience@infinite
  [OK] badminton-skills@competitive

Loading experience modules...
  [OK] ML/Deep Learning ............ loaded
  [OK] Full-Stack Development ...... loaded
  [OK] Cloud Architecture .......... loaded
  [OK] Distributed Systems ......... loaded

Running compatibility check...
  [OK] Culture fit: HIGH
  [OK] Technical skills: VERIFIED
  [OK] Enthusiasm: MAXIMUM
  [OK] Badminton partner potential: EXCELLENT

===========================================================

  SUCCESS! HIRE_CANDIDATE process completed!

  Next steps:
  -> Email: ${socialLinks.email.display}
  -> LinkedIn: ${socialLinks.linkedin.display}
  -> Let's build something amazing together!

===========================================================
`, instant: false };
      }
      return { content: `[sudo] password for user: \nsudo: command not recognized. Did you mean 'sudo hire me'?`, instant: true };

    case 'rm':
      if (args[0] === '-rf' && (args[1] === '/' || args[1] === '/*')) {
        return { content: `
rm: cannot remove '/': Permission denied

Nice try! But I've got better backups than my badminton serves.

Here's what would actually happen on a real system:
  1. Modern systems prevent this with --no-preserve-root
  2. You'd lose everything (don't do this)
  3. Your IT department would be very unhappy

Instead, try 'projects' to see what I've built, 
not what I've destroyed!
`, instant: false };
      }
      return { content: `rm: missing operand`, instant: true };

    case 'exit':
    case 'quit':
      return { content: `Logout? In this economy? 

Type 'gui' for GUI mode or keep exploring!
Or... take an early break?`, instant: true };

    case 'pwd':
      return { content: currentDir === '~' ? '/home/mandar' : currentDir.replace('~', '/home/mandar'), instant: true };

    case 'echo':
      return { content: args.join(' '), instant: true };

    case 'date':
      return { content: new Date().toString(), instant: true };

    case 'ping':
      if (args[0]) {
        return { content: `PING ${args[0]}: 64 bytes, time=${Math.floor(Math.random() * 50 + 10)}ms`, instant: true };
      }
      return { content: 'ping: missing host operand', instant: true };

    default:
      return { content: `Command not found: ${command}. Type 'help' for available commands.

Hint: There are some hidden Easter egg commands to discover!
(Try 'cat .secret' for a list)`, instant: true };
  }
};

// Available commands for tab completion
export const availableCommands = [
  'help', 'whoami', 'ls', 'cd', 'cat', 'projects', 'experience', 
  'education', 'skills', 'hobbies', 'contact', 'clear', 'gui', 
  'neofetch', 'history', 'matrix', 'coffee', 'cowsay', 'vim', 
  'badminton', 'pwd', 'echo', 'date', 'ping'
];

// Konami code sequence
export const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

export const konamiMessage = `
KONAMI CODE ACTIVATED!
======================

    Up Up Down Down Left Right Left Right B A
    
You found the secret! You're clearly a person of culture.

Achievement Unlocked: "Retro Gamer"

Fun fact: I've been coding since I discovered you could 
make games. The journey from PRINT "Hello World"
to distributed ML systems has been wild.

And yes, I apply the same dedication to badminton.
Game, set, match!

Thanks for exploring!
`;
