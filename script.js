const motivationalQuotes = [
{
    quote:'Life isn’t about finding yourself. Life is about creating yourself.',
    author:' ― George Bernard Shaw'
},
{
    quote:'Nothing is impossible. The word itself says ‘I’m possible!',
    author:' — Audrey Hepburn'
},
{
    quote:'Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.',
    author:' ― Lou Holtz'
},
{
    quote:'If you can change your mind, you can change your life.',
    author:' ― William James'
},
{
    quote:'You learn more from failure than from success. Don’t let it stop you. Our minds grow from failures.',
    author:' ― Ben'
},
{
    quote:'You define your own life. Don’t let other people write your script.',
    author:' — Oprah Winfrey'
},
{
    quote:'Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.',
    author:' ― Brian Tracy'
},
{
    quote:'Never bend your head. Always hold it high. Look the world straight in the eye.',
    author:' ― Helen Keller'
},
{
    quote:'The best way to get started is to quit talking and begin doing.',
    author:' ― Walt Disney'
},
{
    quote:"It always seems impossible until it's done.",
    author:' — Nelson Mandela'
}
];
const hardworkQuotes = [
{
    quote:"It's not that I'm so smart, it's just that I stay with problems longer.",
    author:' — Albert Einstein'
},
{
    quote:'Work hard in silence, let success make the noise.',
    author:' — Frank Ocean'
},
{
    quote:"Don't watch the clock; do what it does. Keep going.",
    author:' — Sam Levenson'
},
{
    quote:'The only way to achieve the impossible is to believe it is possible.',
    author:' — Charles Kingsleigh'
},
{
    quote:'The only place where success comes before work is in the dictionary.',
    author:' — Vidal Sassoon'
}
];

const disciplineQuotes = [
{
    quote:'We must all suffer from one of two pains: the pain of discipline or the pain of regret.',
    author:' — Jim Rohn'
},
{
    quote:'Discipline is the bridge between goals and accomplishment.',
    author:' — Jim Rohn'
},
{
    quote:'Discipline is choosing between what you want now and what you want most.',
    author:' — Abraham Lincoln'
},
{
    quote:'If you really want something, you’ll find a way not an excuse.',
    author:' — Jim Rohn'
},
{
    quote:'To learn hard things quickly, you must focus intensely without distraction.',
    author:' — Cal Newport'
},
{
    quote:'Do what you must do, not what you can do.',
    author:' — Ben'
},
{
    quote:'Strive for progress, not perfection.',
    author:' —  Legends'
},
{
    quote:'Why waste time proving over and over how great you are, when you could be getting more and more better than how you are now?',
    author:' — Carol Dweck'
},
{
    quote:'If you want to master the mind, you’ll have to become addicted to hard work.',
    author:' — David Goggins'
},
{
    quote:'Discipline is doing what you hate to do, but nonetheless doing it like you love it.',
    author:' — Mike Tyson'
}
];
let random;

let disciplineQuotesFunction = () => {
    document.querySelector('#quotes-title').innerText = 'Discipline Quotes';
    document.querySelector('#a-quote').innerText = disciplineQuotes[disciplineQuotes.length-1].quote;
    document.querySelector('#author').innerText = disciplineQuotes[disciplineQuotes.length-1].author;
    if (document.querySelector('button').addEventListener('click',() => {
        random = Math.floor(Math.random()*disciplineQuotes.length);
        document.querySelector('#a-quote').innerText = disciplineQuotes[random].quote;
        document.querySelector('#author').innerText = disciplineQuotes[random].author;
        document.querySelector('.my-buttons').style.backgroundColor = 'aliceblue';
    }));
}
disciplineQuotesFunction();

let choiceOfQuotes = (e) => {
    if (e.target.innerText === 'Discipline Quotes') {
        document.querySelector('ul').classList.add('hidden');
        disciplineQuotesFunction();
     }
    else if (e.target.innerText === 'Motivational Quotes') {
        document.querySelector('ul').classList.add('hidden');
        motivationalQuotesFunction();
    }
    else if (e.target.innerText === 'Hard Work Quotes') {
        document.querySelector('ul').classList.add('hidden');
        HardWorkQuotesFunction();
    }
    else {
        alert("Unexpected issue reload the page");
    }
}

let HardWorkQuotesFunction = () => {
    document.querySelector('#quotes-title').innerText = 'Hard Work Quotes';
    document.querySelector('#a-quote').innerText = hardworkQuotes[0].quote;
    document.querySelector('#author').innerText = hardworkQuotes[0].author;
    document.querySelector('button').addEventListener('click',() => {
        random = Math.floor(Math.random()*hardworkQuotes.length);
        document.querySelector('#a-quote').innerText = hardworkQuotes[random].quote;
        document.querySelector('#author').innerText = hardworkQuotes[random].author;
        document.querySelector('.my-buttons').style.backgroundColor = 'aliceblue';
    });
}
let motivationalQuotesFunction = () => {
    document.querySelector('#quotes-title').innerText = 'Motivational Quotes';
    document.querySelector('#a-quote').innerText = motivationalQuotes[motivationalQuotes.length-1].quote;
    document.querySelector('#author').innerText = motivationalQuotes[motivationalQuotes.length-1].author;
    document.querySelector('.my-buttons').addEventListener('click', () => {
        random = Math.floor(Math.random()*motivationalQuotes.length);
        document.querySelector('#a-quote').innerText = motivationalQuotes[random].quote;
        document.querySelector('#author').innerText = motivationalQuotes[random].author;
        document.querySelector('.my-buttons').style.backgroundColor = 'aliceblue';
});
}
let quotesList = () => {
    if (document.querySelector('ul').classList.contains('hidden')) {
        document.querySelector('ul').classList.remove('hidden');
        document.querySelector('ul').addEventListener('click',choiceOfQuotes);
    }
    else {
        document.querySelector('ul').classList.add('hidden');
    }
}

document.querySelector('.fa').addEventListener('click',quotesList);