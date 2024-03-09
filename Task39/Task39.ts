const make_shirt = (size: string = "Large", text: string = "I love Typescript!") => {
    console.log(`Size of shirt: ${size}. Text to be printed: ${text}`);
}

make_shirt();

make_shirt("medium");

make_shirt("small", "Hello World! I am a programmer!");