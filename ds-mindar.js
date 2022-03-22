document.addEventListener("DOMContentLoaded", function() {


const sceneEl = document.querySelector('a-scene');
const arSystem = sceneEl.systems["mindar-image-system"];


    // detect target 1
    const exampleTarget1 = document.querySelector('#example-target1');
    exampleTarget1.addEventListener("targetFound", event => {   
    console.log("target 1 found");
    claimButton.classList.add('show');
    });

    // detect target 2
    const exampleTarget2 = document.querySelector('#example-target2');
    exampleTarget2.addEventListener("targetFound", event => {   
    console.log("target 2 found");
    claimButton.classList.add('show');
    });

    // detect target 3
    const exampleTarget3 = document.querySelector('#example-target3');
    exampleTarget3.addEventListener("targetFound", event => {   
    console.log("target 3 found");
    claimButton.classList.add('show');
    });

    // detect target lost
    // exampleTarget.addEventListener("targetLost", event => {
    // console.log("target lost");
    // });

    // detect click event
    const claimButton = document.querySelector('#example-claim-button')
    claimButton.addEventListener("click", event => {
    window.open('https://google.com', '_blank');
    console.log("prize claimed");
    });


});