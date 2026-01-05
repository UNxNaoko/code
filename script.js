// Ensure webcam window is always visible
const webcamWindow = document.getElementById('webcam-window');
const webcamTaskbarItem = document.querySelector('.taskbar-item[data-window="webcam"]');
if (webcamWindow && webcamTaskbarItem) {
    webcamWindow.style.display = 'block';
    webcamTaskbarItem.style.display = 'flex';
    webcamTaskbarItem.classList.add('active');
}

// Ensure notepad window is always visible
const notepadWindow = document.getElementById('notepad-window');
const notepadTaskbarItem = document.querySelector('.taskbar-item[data-window="notepad"]');
if (notepadWindow && notepadTaskbarItem) {
    notepadWindow.style.display = 'block';
    notepadTaskbarItem.style.display = 'flex';
    notepadTaskbarItem.classList.add('active');
}

// Ensure notepad2 window is always visible
const notepad2Window = document.getElementById('notepad2-window');
const notepad2TaskbarItem = document.querySelector('.taskbar-item[data-window="notepad2"]');
if (notepad2Window) {
    notepad2Window.style.display = 'block';
}

// Ensure chatbox window is always visible
const chatboxWindow = document.getElementById('chatbox-window');
const chatboxTaskbarItem = document.querySelector('.taskbar-item[data-window="chatbox"]');
if (chatboxWindow && chatboxTaskbarItem) {
    chatboxWindow.style.display = 'block';
    chatboxTaskbarItem.style.display = 'flex';
    chatboxTaskbarItem.classList.add('active');
}

// Webcam glitch effect
const webcamImage = document.querySelector('#webcam-window .window-content-inner img');
if (webcamImage) {
    const glitchGifs = [
        'webcam/Fair-eeping.gif',
        'webcam/Fair-horror.gif',
        'webcam/Fair-yipee.gif',
        'webcam/Fair-bored.gif'
    ];

    function applyWebcamGlitch() {
        const randomGif = glitchGifs[Math.floor(Math.random() * glitchGifs.length)];
        webcamImage.src = randomGif;

        // Reset to the default gif after a short delay
        setTimeout(() => {
            webcamImage.src = 'webcam/Fair-bored.gif';
        }, 3000); // Glitch lasts for 3 seconds
    }

    // Trigger the glitch effect at random intervals
    setInterval(() => {
        applyWebcamGlitch();
    }, Math.random() * 5000 + 5000); // Random interval between 5-10 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const skipButton = document.getElementById('skip-button');
    const contentWarningPopup = document.getElementById('content-warning-popup');
    const acceptButton = document.getElementById('accept-button');
    const declineButton = document.getElementById('decline-button');

    // Add skip button functionality
    if (skipButton) {
        skipButton.addEventListener('click', () => {
            contentWarningPopup.style.display = 'flex';
        });
    } else {
        console.error('Skip button not found');
    }

    // Handle content warning popup buttons
    if (acceptButton && contentWarningPopup) {
        acceptButton.addEventListener('click', () => {
            contentWarningPopup.style.display = 'none';
            const transitionOverlay = document.getElementById('transition-overlay');
            if (transitionOverlay) {
                transitionOverlay.style.display = 'block';
            }

            // Play sparkle sound effect
            const sparkleSound = new Audio('music/sparkle.mp3');
            sparkleSound.volume = 0.5;
            sparkleSound.play().catch(err => console.log('Could not play sparkle sound:', err));

            // Wait for animation to complete before redirecting
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1500);
        });
    } else {
        console.error('Accept button or content warning popup not found');
    }

    if (declineButton && contentWarningPopup) {
        declineButton.addEventListener('click', () => {
            contentWarningPopup.style.display = 'none';
            window.location.href = 'index.html';
        });
    } else {
        console.error('Decline button or content warning popup not found');
    }

    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(10px)';

        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '0.7';
            link.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });

    const eyeLink = document.getElementById('eye-link');
    const dialogueContainer = document.getElementById('dialogue-container');
    const textContent = document.getElementById('text-content');
    const fairImage = document.getElementById('fair-image');
    const fairFullImage = document.getElementById('fair-full-image');
    const continuePrompt = document.getElementById('continue-prompt');
    const enterText = document.getElementById('enter-text');
    const bgMusic = document.getElementById('bg-music');
    const talkingSound = document.getElementById('talking-sound');
    if (talkingSound) {
        talkingSound.volume = 1;
        talkingSound.loop = true;
    } else {
        console.error('Talking sound element not found');
    }
    const nameBox = document.getElementById('name-box');
    const blackOverlay = document.getElementById('black-overlay');
    
    const dialogues = [
        { 
            name: "YOU",
            text: "You.. open your eyes.. after the light shined on your face.."
        },
        {
            name: "YOU",
            text: "You look around, and see a weird shifting figure in front of you.",
        },
        {
            name: "YOU",
            text: "You try to get up, but you feel like you're stuck in place.",
        },
        {
            name: "YOU",
            text: "You feel the invisible hands wrapped around your legs... it's hands appear out of nowhere.",
        },
        {
            name: "YOU",
            text: "The figure slowly approaches you, and you can see it's face.",
        },
        {
            name: "YOU",
            text: "It's a girl..?, but not quite a girl... more like a genderless figure.",
        },
        {
            name: "YOU",
            text: "They have a strange aura about them, and you can't quite put your finger on it.",
        },
        {
            name: "YOU",
            text: "They look at you, and you can see their eyes.",
        },
        {
            name: "YOU",
            text: "The glowing dazzling blue eyes are mesmerizing, it stares right into your soul. And you felt that their name is Ati, demi-god of imagination.",
        },
        {
            name: "SOMETHING",
            text: "Woah It's seem like i got a vistior..",
            expression: "Fair- (4).png",
            fullImage: "fair-full (8).png",
        },
        {
            name: "SOMETHING",
            text: "Let me light thing up..",
            expression: "Fair- (4).png",
            fullImage: "fair-full (8).png",
        },
        { 
            name: "FAIR",
            text: "Welcome to my personal realm..",
            expression: "Fair- (32).png",
            fullImage: "Fair- (31).png"
        },
        { 
            name: "FAIR",
            text: "A place where dreams and reality intertwine.",
            expression: "Fair- (34).png",
            fullImage: "fair-full (3).png"
        },
        { 
            name: "FAIR",
            text: "Before you get into my place, let me warn you about content inside .",
            expression: "Fair- (35).png",
            fullImage: "fair-full (2).png"
        }
    ];
    
    let currentDialogue = 0;
    let isTyping = false;
    
    // Configure audio
    if (bgMusic) {
        bgMusic.volume = 0.5;
        bgMusic.load();
    } else {
        console.error('Background music element not found');
    }

    function typeText(name, text, onComplete) {
        isTyping = true;
        textContent.textContent = '';
        textContent.style.display = 'block';
        continuePrompt.style.display = 'none';
        
        // Split text into sentences (split by periods, question marks, or exclamation marks)
        const sentences = text.split(/([.!?])\s+/).filter(s => s.trim());
        let currentSentence = 0;
        
        function typeNextSentence() {
            if (currentSentence >= sentences.length) {
                isTyping = false;
                continuePrompt.style.display = 'block';
                if (talkingSound) {
                    talkingSound.pause();
                    talkingSound.currentTime = 0;
                }
                if (onComplete) onComplete();
                return;
            }

            const sentence = sentences[currentSentence];
            let i = 0;
            
            // Start talking sound for this sentence
            if (talkingSound) {
                talkingSound.currentTime = 0;
                talkingSound.play();
            }
            
            const typingInterval = setInterval(() => {
                if (i < sentence.length) {
                    textContent.textContent += sentence[i];
                    i++;
                } else {
                    clearInterval(typingInterval);
                    // Stop talking sound at end of sentence
                    if (talkingSound) {
                        talkingSound.pause();
                        talkingSound.currentTime = 0;
                    }
                    
                    currentSentence++;
                    
                    // Add a pause between sentences (1 second)
                    setTimeout(() => {
                        typeNextSentence();
                    }, 1000);
                }
            }, 30);
        }
        
        typeNextSentence();
    }
    
    function showChoices(choices) {
        const textBox = document.querySelector('.text-box');
        textBox.innerHTML = '';
        
        choices.forEach(choice => {
            const choiceButton = document.createElement('button');
            choiceButton.className = 'choice-button';
            choiceButton.textContent = choice.text;
            choiceButton.onclick = () => handleChoice(choice.next);
            textBox.appendChild(choiceButton);
        });
    }

    function handleChoice(choice) {
        // Clear the text box
        const textBox = document.querySelector('.text-box');
        textBox.innerHTML = '';
        
        // Make sure dialogue container is visible
        const dialogueContainer = document.getElementById('dialogue-container');
        dialogueContainer.style.display = 'block';
        dialogueContainer.style.opacity = '1';
        
        
        // Update images
        if (newDialogue.expression) {
            fairImage.src = `images/${newDialogue.expression}`;
            fairImage.style.display = 'block';
        }
        if (newDialogue.fullImage) {
            fairFullImage.src = `images/${newDialogue.fullImage}`;
            fairFullImage.style.display = 'block';
        }
        
        // Update name
        nameBox.textContent = newDialogue.name;
        nameBox.style.display = 'block';
        
        // Clear and type new text
        textContent.textContent = '';
        textContent.style.display = 'block';
        
        // Make sure text box is visible
        textBox.style.display = 'block';
        textBox.style.opacity = '1';
        
        typeText(newDialogue.name, newDialogue.text, () => {
            enterText.style.display = 'block';
        });
    }

    function showNextDialogue() {
        console.log('Showing next dialogue, current index:', currentDialogue); // Debug log
        if (currentDialogue < dialogues.length) {
            const dialogue = dialogues[currentDialogue];
            console.log('Current dialogue:', dialogue); // Debug log
            
            // Add transition classes for closing animation
            if (dialogue.expression) {
                fairImage.parentElement.classList.add('changing');
            }
            textContent.parentElement.classList.add('changing');
            nameBox.classList.add('changing');
            if (dialogue.fullImage) {
                fairFullImage.classList.add('changing');
            }
            
            // Wait for close animation
            setTimeout(() => {
                // Update content
                if (dialogue.expression) {
                    fairImage.src = `images/${dialogue.expression}`;
                    fairImage.parentElement.style.display = 'block';
                } else {
                    fairImage.parentElement.style.display = 'none';
                }
                
                if (dialogue.fullImage) {
                    fairFullImage.src = `images/${dialogue.fullImage}`;
                    fairFullImage.parentElement.style.display = 'block';
                } else {
                    fairFullImage.parentElement.style.display = 'none';
                }
                
                nameBox.textContent = dialogue.name;
                
                // Start background music when FAIR appears
                if (dialogue.name === "FAIR") {
                    bgMusic.play().catch(err => {
                        console.log('Could not autoplay music:', err);
                    });
                }
                
                // Remove transition classes to open elements
                setTimeout(() => {
                    if (dialogue.expression) {
                        fairImage.parentElement.classList.remove('changing');
                    }
                    textContent.parentElement.classList.remove('changing');
                    nameBox.classList.remove('changing');
                    if (dialogue.fullImage) {
                        fairFullImage.classList.remove('changing');
                    }
                                    if (dialogue.fullImage) {
                                        fairFullImage.classList.add('bounce');
                                        setTimeout(() => {
                                            fairFullImage.classList.remove('bounce');
                                        }, 500);
                                    }
                                    
                                    
                    // Type the text
                    typeText(dialogue.name, dialogue.text, () => {
                        // If this is the last dialogue, show content warning popup
                        if (currentDialogue === dialogues.length - 1) {
                            setTimeout(() => {
                                contentWarningPopup.style.display = 'flex';
                            }, 1000);
                        }
                    });
                }, 500);
            }, 500);
        }
    }
    
    function showDialogue(character, text) {
        dialogueContainer.style.display = 'flex';
        nameBox.textContent = character;
        textContent.textContent = text;
        
        // Update character image based on character name
        if (character === 'Fair') {
            fairImage.src = 'images/Fair.png';
        } else if (character === 'Fair-') {
            fairImage.src = 'images/Fair- (10).png';
        }
        
        // Show continue prompt after a short delay
        setTimeout(() => {
            document.getElementById('continue-prompt').style.display = 'block';
        }, 500);
    }
    
    // Handle text box click for continuing dialogue
    dialogueContainer.addEventListener('click', (e) => {
        if (e.target.closest('.text-box') && !isTyping) {
            currentDialogue++;
            showNextDialogue();
        } else if (e.target.closest('.text-box') && isTyping) {
            // If clicked during typing, stop the sound immediately
            if (talkingSound) {
                talkingSound.pause();
                talkingSound.currentTime = 0;
            }
        }
    });
    
    // Handle eye click and start background music
    eyeLink.addEventListener('click', async (e) => {
        e.preventDefault();
        
        // Hide both containers immediately
        fairImage.parentElement.style.display = 'none';
        fairFullImage.parentElement.style.display = 'none';
        
        // Add spinning animation
        eyeLink.classList.add('spinning');
        
        // Add flash bang effect
        document.body.classList.add('flash-bang');
        
        // Play sparkle sound effect
        const sparkleSound = new Audio('music/sparkle.mp3');
        sparkleSound.volume = 0.5;
        sparkleSound.play().catch(err => console.log('Could not play sparkle sound:', err));
        
        // Fade to black
        blackOverlay.classList.add('active');
        
        // Hide the eye after spin animation
        setTimeout(() => {
            eyeLink.style.display = 'none';
            
            // Show background animation
            document.querySelector('.background-animation').classList.add('visible');
            
            // Start fade out from black after a delay
            setTimeout(() => {
                blackOverlay.classList.add('fade-out');
                dialogueContainer.style.display = 'block';
                
                // Show dialogue elements with fade
                setTimeout(() => {
                    dialogueContainer.classList.add('visible');
                    showNextDialogue();
                }, 500);
            }, 1000);
        }, 1000);
    });
    
    // Handle enter text click
    enterText.addEventListener('click', () => {
        window.location.href = 'home.html';
    });
    
    // Initial animation for eye
    const eye = eyeLink.querySelector('img');
    eye.style.opacity = '0';
    eye.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        eye.style.transition = 'all 1s ease';
        eye.style.opacity = '1';
        eye.style.transform = 'scale(1)';
    }, 500);

    // Make sure background music is ready
    if (bgMusic) {
        bgMusic.load();
    }

    // Wait for the page to load
    document.addEventListener('DOMContentLoaded', function() {
        // Get all desktop icons
        const desktopIcons = document.querySelectorAll('.desktop-icon');
        
        // Add click event to each desktop icon
        desktopIcons.forEach(function(icon) {
            icon.addEventListener('click', function() {
                const windowId = this.dataset.window;
                toggleWindow(windowId);
            });
        });

        // Get all close buttons
        const closeButtons = document.querySelectorAll('.window-control.close');
        
        // Add click event to each close button
        closeButtons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const windowId = this.dataset.window;
                closeWindow(windowId);
            });
        });

        // Get all taskbar items
        const taskbarItems = document.querySelectorAll('.taskbar-item');
        
        // Add click event to each taskbar item
        taskbarItems.forEach(function(item) {
            item.addEventListener('click', function() {
                const windowId = this.dataset.window;
                toggleWindow(windowId);
            });
        });

        // Make windows draggable
        
        // Ensure webcam window is always visible
        const webcamWindow = document.getElementById('webcam-window');
        const webcamTaskbarItem = document.querySelector('.taskbar-item[data-window="webcam"]');
        if (webcamWindow && webcamTaskbarItem) {
            webcamWindow.style.display = 'block';
            webcamTaskbarItem.style.display = 'flex';
            webcamTaskbarItem.classList.add('active');
        }

        // Ensure notepad window is always visible
        const notepadWindow = document.getElementById('notepad-window');
        const notepadTaskbarItem = document.querySelector('.taskbar-item[data-window="notepad"]');
        if (notepadWindow && notepadTaskbarItem) {
            notepadWindow.style.display = 'block';
            notepadTaskbarItem.style.display = 'flex';
            notepadTaskbarItem.classList.add('active');
        }

        const chatboxWindow = document.getElementById('chatbox-window');
        const chatboxTaskbarItem = document.querySelector('.taskbar-item[data-window="chatbox"]');
        const chatboxIcon = document.querySelector('.desktop-icon[data-window="chatbox"]');

        if (chatboxIcon && chatboxWindow && chatboxTaskbarItem) {
            chatboxIcon.addEventListener('click', () => {
                toggleWindow('chatbox');
            });

            chatboxTaskbarItem.addEventListener('click', () => {
                toggleWindow('chatbox');
            });
        }
    });

    // Update time and date in the taskbar
    const taskbarTime = document.getElementById('taskbar-time');
    const taskbarDate = document.getElementById('taskbar-date');

    if (taskbarTime && taskbarDate) {
        function updateTaskbarTime() {
            const now = new Date();

            // Format time as HH:MM:SS
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;

            // Format date as Day, Month DD
            const options = { weekday: 'short', month: 'short', day: 'numeric' };
            const dateString = now.toLocaleDateString('en-US', options);

            taskbarTime.textContent = timeString;
            taskbarDate.textContent = dateString;
        }

        updateTaskbarTime();
        setInterval(updateTaskbarTime, 1000);
    } else {
        console.error('Taskbar time or date element not found');
    }

    // Handle START button click
    const startButton = document.querySelector('.start-button');
    let startMenuWindow = document.getElementById('start-menu-window');

    // Create the START menu dynamically if it doesn't exist
    if (!startMenuWindow) {
        startMenuWindow = document.createElement('div');
        startMenuWindow.id = 'start-menu-window';
        startMenuWindow.className = 'start-menu';
        startMenuWindow.style.display = 'none';
        document.body.appendChild(startMenuWindow);

        const apps = [
            { name: 'Files', action: () => alert('Opening Files...') },
            { name: 'Mail', action: () => alert('Opening Mail...') },
            { name: '.Exe', action: () => alert('Launching .Exe...') },
            { name: 'Vent Note', action: () => alert('Opening Vent Note...') },
            { name: 'Settings', action: () => showSettingsPopup() },
            { name: 'Quit', action: () => alert('Goodbye!') }
        ];

        apps.forEach(app => {
            const appItem = document.createElement('div');
            appItem.className = 'start-menu-item';
            appItem.textContent = app.name;
            appItem.addEventListener('click', app.action);
            startMenuWindow.appendChild(appItem);
        });
    }

    startButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const isVisible = startMenuWindow.style.display === 'block';
        startMenuWindow.style.display = isVisible ? 'none' : 'block';

        // Position the menu at the bottom-left of the screen
        const startButtonRect = startButton.getBoundingClientRect();
        startMenuWindow.style.left = `${startButtonRect.left}px`;
        startMenuWindow.style.bottom = `${window.innerHeight - startButtonRect.bottom}px`;
    });

    document.addEventListener('click', (event) => {
        if (startMenuWindow.style.display === 'block' && !startMenuWindow.contains(event.target) && !startButton.contains(event.target)) {
            startMenuWindow.style.display = 'none';
        }
    });

    function showSettingsPopup() {
        const popup = document.createElement('div');
        popup.className = 'settings-popup';
        popup.textContent = "Nope, I'm too lazy.";
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000); // Popup disappears after 3 seconds
    }

    // Ensure the START menu is created and functional
    if (!document.body.contains(startMenuWindow)) {
        console.error('START menu was not created properly.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const loginOverlay = document.getElementById("login-overlay");
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", () => {
        // Add fade-out animation
        loginOverlay.style.animation = "fadeOut 1s ease-in-out forwards";

        // Remove the overlay after the animation
        setTimeout(() => {
            loginOverlay.style.display = "none";
        }, 1000); // Match the duration of the fadeOut animation
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loginScreen = document.getElementById("login-screen");
    const users = document.querySelectorAll(".user");

    users.forEach(user => {
        user.addEventListener("click", () => {
            const selectedUser = user.dataset.user;
            console.log(`Logging in as ${selectedUser}`); // Replace with actual login logic

            // Add fade-out animation
            loginScreen.style.animation = "fadeOut 1s ease-in-out forwards";

            // Remove the login screen after the animation
            setTimeout(() => {
                loginScreen.style.display = "none";
            }, 1000); // Match the duration of the fadeOut animation
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loginOverlay = document.getElementById("login-overlay");
    const bootSequence = document.getElementById("boot-sequence");

    const bootMessages = [
        "[    0.000000] Initializing SystemOS...",
        "[    0.123456] Loading kernel modules...",
        "[    0.234567] Checking hardware...",
        "[    0.345678] Detecting connected devices...",
        "[    0.456789] Starting services...",
        "[    0.567890] Loading user interface...",
        "[    0.678901] SystemOS ready. [  OK  ]"
    ];

    let currentMessage = 0;

    function displayNextMessage() {
        if (currentMessage < bootMessages.length) {
            const line = document.createElement("div");
            line.className = "text-line";
            line.textContent = bootMessages[currentMessage];
            bootSequence.appendChild(line);

            currentMessage++;
            setTimeout(displayNextMessage, 200); // Display each line quickly (200ms delay)
        } else {
            setTimeout(() => {
                showLoadingGif(); // Show the GIF after the boot sequence finishes
            }, 500); // Short delay before transitioning
        }
    }

    function showLoadingGif() {
        // Create a black overlay
        const blackScreen = document.createElement("div");
        blackScreen.style.position = "fixed";
        blackScreen.style.top = "0";
        blackScreen.style.left = "0";
        blackScreen.style.width = "100%";
        blackScreen.style.height = "100%";
        blackScreen.style.backgroundColor = "black";
        blackScreen.style.zIndex = "10000";
        blackScreen.style.display = "flex";
        blackScreen.style.justifyContent = "center";
        blackScreen.style.alignItems = "center";

        // Add the loading GIF
        const loadingGif = document.createElement("img");
        loadingGif.src = "images/loading.gif"; // Replace with the path to your loading GIF
        loadingGif.alt = "Loading...";
        loadingGif.style.width = "200px";
        loadingGif.style.height = "200px";

        blackScreen.appendChild(loadingGif);
        document.body.appendChild(blackScreen);

        // Remove the GIF and transition to the login screen after a short delay
        setTimeout(() => {
            blackScreen.style.animation = "fadeOut 1s ease-in-out forwards";
            setTimeout(() => {
                blackScreen.remove();
                loginOverlay.style.animation = "fadeOut 1s ease-in-out forwards";
                setTimeout(() => {
                    loginOverlay.style.display = "none";
                }, 1000); // Match the fadeOut duration
            }, 10); // Duration of the fade-out animation
        }, 3500); // Display the GIF for 1.5 seconds
    }

    displayNextMessage();
});

// Simple window management
function toggleWindow(windowId) {
    const window = document.getElementById(windowId + '-window');
    const taskbarItem = document.querySelector(`.taskbar-item[data-window="${windowId}"]`);

    if (window && taskbarItem) {
        // Show window
        window.style.display = 'block';
        taskbarItem.style.display = 'flex'; // Make sure taskbar item is visible
        taskbarItem.classList.add('active');

        // Bring window to front
        document.querySelectorAll('.window').forEach(w => {
            w.style.zIndex = '1';
        });
        window.style.zIndex = '2';
    }
}

function closeWindow(windowId) {
    const window = document.getElementById(windowId + '-window');
    const taskbarItem = document.querySelector('.taskbar-item[data-window="' + windowId + '"]');

    if (window && taskbarItem) {
        window.style.display = 'none';
        taskbarItem.style.display = 'none'; // Hide the taskbar item
        taskbarItem.classList.remove('active');
    }
}

// Handle window controls
document.querySelectorAll('.window-control').forEach(control => {
    control.addEventListener('click', (e) => {
        const windowId = control.dataset.window;
        const windowElement = document.getElementById(`${windowId}-window`);

        if (control.classList.contains('close')) {
            closeWindow(windowId);
        } else if (control.classList.contains('minimize')) {
            windowElement.style.display = 'none';
        } else if (control.classList.contains('maximize')) {
            windowElement.style.width = '100vw';
            windowElement.style.height = '100vh';
            windowElement.style.top = '0';
            windowElement.style.left = '0';
            windowElement.style.transform = 'none';
        }
    });
});

// Bring window to the front when clicked
document.querySelectorAll('.window').forEach(window => {
    window.addEventListener('mousedown', () => {
        document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
        window.classList.add('active');
    });
});

// Ensure windows are brought to the front when toggled
function toggleWindow(windowId) {
    const windowElement = document.getElementById(`${windowId}-window`);
    const taskbarItem = document.querySelector(`.taskbar-item[data-window="${windowId}"]`);

    if (windowElement && taskbarItem) {
        const isVisible = windowElement.style.display === 'block';
        windowElement.style.display = isVisible ? 'none' : 'block';
        taskbarItem.style.display = isVisible ? 'none' : 'flex';
        taskbarItem.classList.toggle('active', !isVisible);

        // Bring the window to the front
        if (!isVisible) {
            document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
            windowElement.classList.add('active');
        }
    }
}

// Close a window
function closeWindow(windowId) {
    const windowElement = document.getElementById(`${windowId}-window`);
    const taskbarItem = document.querySelector(`.taskbar-item[data-window="${windowId}"]`);

    if (windowElement && taskbarItem) {
        windowElement.style.display = 'none';
        taskbarItem.style.display = 'none';
        taskbarItem.classList.remove('active');
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for desktop icons
    document.querySelectorAll('.desktop-icon').forEach(function(icon) {
        icon.addEventListener('click', function() {
            const windowId = this.dataset.window;
            toggleWindow(windowId);
        });
    });

    // Add click handlers for taskbar items
    document.querySelectorAll('.taskbar-item').forEach(function(item) {
        item.addEventListener('click', function() {
            const windowId = this.dataset.window;
            toggleWindow(windowId);
        });
    });

    // Add click handlers for close buttons
    document.querySelectorAll('.window-control.close').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from propagating to the window
            const windowId = this.dataset.window;
            closeWindow(windowId);
        });
    });
});

// Ensure all close buttons work
document.querySelectorAll('.window-control.close').forEach(closeButton => {
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering other events
        const windowId = closeButton.dataset.window;
        closeWindow(windowId);
    });
});

// Function to close a window
function closeWindow(windowId) {
    const windowElement = document.getElementById(`${windowId}-window`);
    const taskbarItem = document.querySelector(`.taskbar-item[data-window="${windowId}"]`);

    if (windowElement) {
        windowElement.style.display = 'none';
    }
    if (taskbarItem) {
        taskbarItem.style.display = 'none';
        taskbarItem.classList.remove('active');
    }
}

// Music player functionality
const youtubeInput = document.getElementById('youtube-url');
const playMusicButton = document.getElementById('play-music');
const musicIframeContainer = document.getElementById('music-iframe-container');
const musicIframe = document.getElementById('music-iframe');

playMusicButton.addEventListener('click', () => {
    const youtubeUrl = youtubeInput.value.trim();
    if (youtubeUrl) {
        const videoId = extractYouTubeVideoId(youtubeUrl);
        if (videoId) {
            musicIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            musicIframeContainer.style.display = 'block';
        } else {
            alert('Invalid YouTube URL. Please try again.');
        }
    }
});

function extractYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Ensure music player window is always visible
const musicPlayerWindow = document.getElementById('music-player-window');
if (musicPlayerWindow) {
    musicPlayerWindow.style.display = 'block';
}

// Music player functionality
const playPauseButton = document.getElementById('play-pause');
const prevTrackButton = document.getElementById('prev-track');
const nextTrackButton = document.getElementById('next-track');
const currentTrackName = document.getElementById('current-track-name');
const currentTrackTime = document.getElementById('current-track-time');
const playlistElement = document.getElementById('playlist');

// Define the playlist
const playlist = [
    { name: "Song 1", url: "https://www.youtube.com/embed/VIDEO_ID_1", duration: "3:45" },
    { name: "Song 2", url: "https://www.youtube.com/embed/VIDEO_ID_2", duration: "4:20" },
    { name: "Song 3", url: "https://www.youtube.com/embed/VIDEO_ID_3", duration: "2:50" }
];

let currentTrackIndex = 0;
let isPlaying = false;

// Populate the playlist UI
playlist.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = `${track.name} (${track.duration})`;
    li.dataset.index = index;
    li.addEventListener('click', () => playTrack(index));
    playlistElement.appendChild(li);
});

// Play the selected track
function playTrack(index) {
    currentTrackIndex = index;
    const track = playlist[currentTrackIndex];
    musicIframe.src = `${track.url}?autoplay=1`;
    currentTrackName.textContent = track.name;
    updatePlaylistUI();
    isPlaying = true;
    playPauseButton.textContent = "⏸";
}

// Update the playlist UI to highlight the current track
function updatePlaylistUI() {
    const items = playlistElement.querySelectorAll('li');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentTrackIndex);
    });
}

// Play or pause the current track
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        musicIframe.src = ""; // Stop the iframe
        playPauseButton.textContent = "▶";
    } else {
        playTrack(currentTrackIndex); // Resume playing
    }
    isPlaying = !isPlaying;
});

// Play the previous track
prevTrackButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    playTrack(currentTrackIndex);
});

// Play the next track
nextTrackButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    playTrack(currentTrackIndex);
});

// Initialize the player with the first track
playTrack(0);