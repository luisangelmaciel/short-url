function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /* Built By Vets */
// Carla Kroll https://codepen.io/ckroll17/
// Jacob Oakley https://codepen.io/jacoboakley/

/* START OF STYLES FOR REACT COMPONENT*/
const style = {
  title: {
    fontWeight: '100',
    margin: '0',
    padding: '1.5rem 0 1rem 0' },


  counterContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContet: 'space-around',
    textAlign: 'center',
    width: '100vw' },


  counter: {
    margin: '0',
    padding: '0',
    width: '25%' },


  text: {
    height: '2rem',
    margin: '0',
    padding: '0' } };


/* END OF STYLES */

/* START OF REACT COMPONNET */
/* START OF APP COMPONNET */
class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",





    {
      christmas: new Date(
      `December 24, 
      ${new Date().getMonth() === 11 && new Date().getDate() > 25 ?
      new Date().getFullYear() + 1 :
      new Date().getFullYear()} 
      23:59:59`),
      days: '',
      hours: '',
      minutes: '',
      seconds: '' });_defineProperty(this, "christmasDay",




















    () => {
      this.setState({
        christmas: 'Merry Christmas',
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0 });

    });_defineProperty(this, "updateClock",


    () => {
      // ES6 Destructuring - creates a const of {value1} and sets it equal to this.state.{value} 
      const { christmas, days, hours, minutes, seconds } = this.state;
      const date = new Date();
      // subtracting one date from another gives you time in difference in millaseconds. If you divide the answer by (1000 (ms in a second) * 60 (sec in a min) * 60 (min in a hour) * 24 (hours in a day)) you will get the difference in days as an integer with decimal places. 
      this.setState({
        days: Math.floor((christmas - date) / (1000 * 60 * 60 * 24)),
        hours: christmas.getHours() - date.getHours(),
        minutes: christmas.getMinutes() - date.getMinutes(),
        seconds: christmas.getSeconds() - date.getSeconds() });

    });} /* 
    - Checks to see if it is Christmas day. If it is it calls the function Christmas Day, if not ...
    - Creates timerID that sets intervals of 1000ms( 1 sec ) and calls the function updateClock() on every interval 
  */componentDidMount() {let date = new Date(); // Remove Comment inside of parentheses if you can't wait until Christmas. Warning... It may get you put on the naughty list.
    date.getMonth() == 11 && date.getDate() == 25 ? this.christmasDay() : this.timerID = setInterval(() => this.updateClock(), 1000);} // If component Unmounts then the timer will be stopped. If not stopped it will continue to run in the background when not needed.
  componentWillUnmount() {clearInterval(this.timerID);} // Sets the counter to 0 all day long
  render() {// ES6 Destructuring - creates a const of {value} and sets it equal to this.state.{value} 
    const { christmas, days, hours, minutes, seconds } = this.state;return /*#__PURE__*/React.createElement("div", { style: style.countdownList, id: christmas }, /*#__PURE__*/React.createElement("h1", { style: style.title }, "Christmas Countdown"), /*#__PURE__*/
    React.createElement("div", { style: style.counterContainer }, /*#__PURE__*/
    React.createElement(Counter, { unitOfTime: days, text: "Days" }), /*#__PURE__*/
    React.createElement(Counter, { unitOfTime: hours, text: "Hours" }), /*#__PURE__*/
    React.createElement(Counter, { unitOfTime: minutes, text: "Minutes" }), /*#__PURE__*/
    React.createElement(Counter, { unitOfTime: seconds, text: "Seconds" })));



  }}

/* END OF APP COMPONNET */


/* START OF COUNTER COMPONNET */
// Uses state of parent component as props.
const Counter = ({ unitOfTime, text }) => /*#__PURE__*/
React.createElement("div", { style: style.counter }, /*#__PURE__*/
React.createElement("h3", { style: style.text }, unitOfTime), /*#__PURE__*/
React.createElement("p", { style: style.text }, text));


/* END OF COUNTER COMPONNET */

// "ReactDOM.render() controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called." (https://reactjs.org/docs/react-dom.html)
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
/* END OF REACT COMPONNET */

// Checking to see if its time to open the present or not
let notYetText = document.getElementById('notYet'),
giftTag = document.getElementById('giftTag');
puppy = document.getElementById('puppy'),
santaHat = document.getElementById('santa-hat_1_'),
giftLid = document.getElementById('lid-bow-group'),
merry = document.getElementById('xmasDay'),
giftTime = document.getElementById('Merry Christmas');

if (giftTime) {
  merry.classList.remove('hide');
  giftTag.classList.add('hide');
}

document.getElementById('Gift').addEventListener('click', function () {
  if (!giftTime) {
    CustomWiggle.create("myWiggle", { wiggles: 10, type: "easeOut" });
    function Tween() {
      TweenLite.fromTo("#Gift", 1, { rotation: 0 }, { rotation: 3, ease: "myWiggle" });
    };
    Tween();
    notYetText.classList.remove('hide');
    giftTag.classList.add('hide');
    setTimeout(function () {
      notYetText.classList.add('hide');
      giftTag.classList.remove('hide');
    }, 2500);
  } else {
    puppy.classList.add('pup');
    notYetText.classList.add('hide');
    santaHat.classList.add('hat');
    giftLid.classList.add('lid');
    console.log("merry christmas");
  }
});