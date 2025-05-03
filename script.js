document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const skipButton = document.getElementById('skip-button');
    const contentWarningPopup = document.getElementById('content-warning-popup');
    const acceptButton = document.getElementById('accept-button');
    const declineButton = document.getElementById('decline-button');
    
    // Add skip button functionality
    skipButton.addEventListener('click', () => {
        contentWarningPopup.style.display = 'flex';
    });
    
    // Handle content warning popup buttons
    acceptButton.addEventListener('click', () => {
        contentWarningPopup.style.display = 'none';
        const transitionOverlay = document.getElementById('transition-overlay');
        transitionOverlay.style.display = 'block';
        
        // Play sparkle sound effect
        const sparkleSound = new Audio('music/sparkle.mp3');
        sparkleSound.volume = 0.5;
        sparkleSound.play().catch(err => console.log('Could not play sparkle sound:', err));
        
        // Wait for animation to complete before redirecting
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    });
    
    declineButton.addEventListener('click', () => {
        contentWarningPopup.style.display = 'none';
        window.location.href = 'index.html';
    });
    
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
            fullImage: "fair- (31).png"
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
    bgMusic.volume = 0.5;
    talkingSound.volume = 1;
    talkingSound.loop = true;

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
                talkingSound.pause();
                talkingSound.currentTime = 0;
                if (onComplete) onComplete();
                return;
            }

            const sentence = sentences[currentSentence];
            let i = 0;
            
            // Start talking sound for this sentence
            talkingSound.currentTime = 0;
            talkingSound.play();
            
            const typingInterval = setInterval(() => {
                if (i < sentence.length) {
                    textContent.textContent += sentence[i];
                    i++;
                } else {
                    clearInterval(typingInterval);
                    // Stop talking sound at end of sentence
                    talkingSound.pause();
                    talkingSound.currentTime = 0;
                    
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
            talkingSound.pause();
            talkingSound.currentTime = 0;
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
    document.getElementById('bg-music').load();
}); 