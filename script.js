async function getJoke() {
    const setup = document.getElementById('setup');
    const punchline = document.getElementById('punchline');
    const loader = document.getElementById('loader');
    const btn = document.getElementById('jokeBtn');

    loader.style.display = 'block';
    punchline.style.opacity = 0;
    setup.innerText = "Finding something funny...";
    btn.disabled = true;

    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();

        loader.style.display = 'none';
        btn.disabled = false;
        setup.innerText = data.setup;
        
        setTimeout(() => {
            punchline.innerText = data.punchline;
            punchline.style.opacity = 1;
        }, 1200);

    } catch (error) {
        loader.style.display = 'none';
        btn.disabled = false;
        setup.innerText = "Error! Try again later. ❌";
    }
}